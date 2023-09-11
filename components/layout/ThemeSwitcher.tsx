'use client'

import { IconButton } from '@/components/shared'
import { useTheme } from 'next-themes'
import React, {
  useEffect,
  useState,
} from 'react'
import {
  LuMoonStar,
  LuSun,
} from 'react-icons/lu'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setDarkMode(e.matches)
    })

    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)

    setMounted(true)
  }, [])

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return darkMode ? (
      <IconButton>
        <LuMoonStar />
      </IconButton>
    ) : (
      <IconButton>
        <LuSun />
      </IconButton>
    )
  }

  return (
    <IconButton onClick={toggleTheme}>
      {theme === 'dark' ? <LuSun /> : <LuMoonStar />}
    </IconButton>
  )
}
export default ThemeSwitcher
