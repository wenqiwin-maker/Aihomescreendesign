import image_35145143825e4bf11d0c403ae2e5cf77e43e5169 from '../../assets/neutral-icon.png';
import image_cd2bbe5fa8213b135a606881b5a27264dc9e1c6c from '../../assets/cooperative-icon.png';
import image_e4a3d456f2b61aceeb89c5c13562853903075c1b from '../../assets/visual-style-icon.png';
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  image_35145143825e4bf11d0c403ae2e5cf77e43e5169

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
