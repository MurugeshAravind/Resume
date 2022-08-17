import React from "react";
const Image = (props: { src: string; alt: string; className: string }) => {
  const {src, alt, className} = props
    return <img
      src={src}
      alt={alt}
      className={className}
    />
}
export default Image