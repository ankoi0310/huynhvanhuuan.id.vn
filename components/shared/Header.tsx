'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setDarkMode(e.matches)
    })

    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  return (
    <nav className={'header'}>
      <Link href={'/'} className={'flex items-center gap-4'}>
        <p className={'text-h3-bold text-bold max-xs:hidden'}>Code With Koi</p>
      </Link>

      <div className={'flex items-center gap-x-8'}>
        <div className={'flex items-center gap-x-10'}>
          <Link href={'/about'} className={'header__menu_item'}>About</Link>
          <Link href={'/blog'} className={'header__menu_item'}>Blog</Link>
          <Link href={'/contact'} className={'header__menu_item'}>Contact</Link>
        </div>

        {/* vertical divider */}
        <div className={'h-6 w-px bg-gray-400'}></div>

        <div className={'flex items-center gap-x-6'}>
          {/* theme icon */}
          <Image
            src={`/assets/icons/${darkMode ? 'moon' : 'sun'}.svg`}
            alt={'theme icon'}
            width={24}
            height={24}
          />

          {/* download CV button */}
          <button className={'btn btn-primary'}>Download CV</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
