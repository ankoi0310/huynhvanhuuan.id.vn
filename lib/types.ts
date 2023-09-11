import type { StaticImageData } from 'next/image'

export type Technology = {
  logo: string | StaticImageData
  darkLogo: string | StaticImageData
  label: string
  url: string
}

export type ProjectDetail = {
  name: string
  description: string
  url: string
  image: string | StaticImageData
  technologies: string[]
}
