'use client'

import { CustomIcon } from '@/components/shared'
import { FiberManualRecord, LocationOn } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  PiFacebookLogo,
  PiFacebookLogoFill,
  PiTwitterLogo,
  PiTwitterLogoFill,
  PiYoutubeLogo,
  PiYoutubeLogoFill,
} from 'react-icons/pi'
import { TypeAnimation } from 'react-type-animation'

const Banner = () => {

  return (
    <>
      <section className={'section'} id={'banner'}>
        <div className='container mx-auto'>
          <div className={'flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'}>
            {/* left side */}
            <div className={'flex flex-col flex-1 items-stretch text-center lg:text-left gap-y-12'}>
              <div>
                <h1 className={'text-h2-semibold'}>AN HUYNH VAN HUU</h1>
                <div className={'text-h1-bold !text-[80px]'}>
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
                </div>
              </div>

              <div className={'flex flex-col gap-y-2'}>
                <div className={'flex items-center justify-start gap-x-2'}>
                  <LocationOn /> Ho Chi Minh City, Viet Nam
                </div>
                <div className={'flex items-center justify-start gap-x-2'}>
                  <FiberManualRecord className={'text-green-400'}/> Available for new projects
                </div>
              </div>

              <div className={'flex items-center justify-start gap-x-4'}>
                <Link href={'https://www.github.com/ankoi0310'} target={'_blank'}>
                  <CustomIcon
                    icon={<PiTwitterLogo />}
                    hoverIcon={<PiTwitterLogoFill />}
                  />
                </Link>
                <Link href={'https://www.facebook.com/KOI0310.IT'} target={'_blank'}>
                  <CustomIcon
                    icon={<PiFacebookLogo />}
                    hoverIcon={<PiFacebookLogoFill />}
                  />
                </Link>
                <Link href={'https://www.youtube.com/@code_with_koi'} target={'_blank'}>
                  <CustomIcon
                    icon={<PiYoutubeLogo />}
                    hoverIcon={<PiYoutubeLogoFill />}
                  />
                </Link>
              </div>
            </div>

            {/* right side */}
            <div className={'hidden lg:flex max-w-[400px]'}>
              <Image loading={'lazy'} src={'/assets/images/banner.png'} alt={'image 1'} width={400} height={400} className={'banner-image'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Banner
