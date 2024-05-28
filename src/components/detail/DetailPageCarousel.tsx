"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './Thumb'
import Image from 'next/image'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const DetailPageCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla flex flex-col gap-2 md:gap-3 md:flex-row">
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex flex-row md:flex-col gap-4 pl-4">
            {slides.map((item,index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgLink={item}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container ">
          {slides.map((element,index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number"><Image loading='lazy' src={element} width={400} height={50} alt='img' /></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default DetailPageCarousel
