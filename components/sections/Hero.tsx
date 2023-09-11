'use client'

import { IconButton } from '@/components/shared'
import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  MdFiberManualRecord,
  MdLocationOn,
} from 'react-icons/md'
import {
  PiFacebookLogo,
  PiFacebookLogoFill,
  PiGithubLogo,
  PiGithubLogoFill,
  PiTiktokLogo,
  PiTiktokLogoFill,
  PiYoutubeLogo,
  PiYoutubeLogoFill,
} from 'react-icons/pi'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <Container id={'hero'}>
      <div className={'flex flex-col gap-12 md:flex-row'}>
        {/* left side */}
        <div
          className={'max-w-3xl flex flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12'}>
          <div className={'flex flex-col gap-2'}>
            <Typography variant={'h2'}>AN HUYNH VAN HUU</Typography>
            <Typography variant={'h1'} className={'text-h1-bold !text-[80px]'}>
              <span>I&#39;m a </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Youtuber',
                  2000,
                  'Designer',
                  2000,
                  'Blogger',
                  2000,
                ]}
                speed={50}
                className={'text-accent'}
                wrapper={'span'}
                repeat={Infinity}
              />
            </Typography>
          </div>

          <div className={'flex flex-col gap-y-2'}>
            <div className={'flex items-center justify-start gap-x-2'}>
              <MdLocationOn /> Ho Chi Minh City, Viet Nam
            </div>
            <div className={'flex items-center justify-start gap-x-2'}>
              <MdFiberManualRecord className={'text-green-400'} /> Available for new projects
            </div>
          </div>

          <div className={'flex items-center justify-start gap-x-4'}>
            <Link href={'https://www.github.com/ankoi0310'} target={'_blank'}>
              {/*<IconButton*/}
              {/*  icon={<PiGithubLogo />}*/}
              {/*  hoverIcon={<PiGithubLogoFill />}*/}
              {/*/>*/}
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className={'flex items-center justify-center md:order-last md:flex-grow md:justify-end'}>
          <Image loading={'lazy'} src={'/assets/images/banner.png'} alt={'image 1'} width={400} height={400}
                 className={'banner-image'} />
        </div>
      </div>
    </Container>
  )
}
export default Hero
