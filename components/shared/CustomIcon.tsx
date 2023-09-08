'use client'

import React, { FC, useState } from 'react'

interface CustomIconProps {
  icon: React.ReactNode
  hoverIcon: React.ReactNode
}

const CustomIcon: FC<CustomIconProps> = props => {
  const { icon, hoverIcon } = props
  const [hover, setHover] = useState(false)

  return (
    <div className={'text-[24px]'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {hover ? hoverIcon : icon}
    </div>
  )
}
export default CustomIcon
