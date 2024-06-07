import Image from 'next/image'
import React from 'react'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
  imgLink : string
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick , imgLink } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected  border-2 border-black rounded-lg' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number flex gap-3"
      >
        <Image loading='lazy' src={imgLink} width={150} height={70} alt='img' className='rounded-lg '/>
      </button>
    </div>
  )
}
