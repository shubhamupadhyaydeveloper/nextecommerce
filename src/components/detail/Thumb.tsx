import Image from 'next/image'
import React from 'react'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
  imgLink : string
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick , imgLink } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected border border-blue-500  rounded-lg' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number flex"
      >
        <Image loading='lazy' src={imgLink} width={150} height={70} alt='img' className='rounded-lg w-[70px] h-[70px] md:py-[5px]'/>
      </button>
    </div>
  )
}
