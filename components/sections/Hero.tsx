'use client'

import { SocialIcon } from '@/components/shared'
import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'
import { LuMapPin } from 'react-icons/lu'
import {
	MdFiberManualRecord,
	MdLocationOn,
} from 'react-icons/md'
import { TypeAnimation } from 'react-type-animation'

import HeroImage from '@/public/assets/images/hero.png'

const Hero = () => {
	return (
		<Container id={'hero'}>
			<div className={'flex flex-col gap-12 md:flex-row'}>
				{/* left side */}
				<div
					className={'max-w-3xl flex flex-grow flex-col justify-center gap-8 md:order-first md:items-start 2xl:gap-12'}>
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
					
					<div className={'flex flex-col gap-2'}>
						<div className={'flex items-center gap-2'}>
							<div className={'w-5 h-5 flex items-center justify-center'}>
								<Typography variant={'subtitle'}><LuMapPin /></Typography>
							</div>
							<Typography>Ho Chi Minh City, Viet Nam</Typography>
						</div>
						<div className={'flex items-center gap-2'}>
							<div className={'w-5 h-5 flex items-center justify-center'}>
								<span className={'relative w-3 h-3 flex'}>
									<span
										className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                  <span className='relative inline-flex h-3 w-3 rounded-full bg-emerald-500'></span>
								</span>
							</div>
							<Typography>Available for new projects</Typography>
						</div>
					</div>
					<SocialIcon />
				</div>
				
				{/* right side */}
				<div
					className={'flex items-center justify-center md:order-last md:flex-grow md:justify-end'}>
					<div className={'relative h-[360px] w-[360px] md:h-[360px] md:w-[360px]'}>
						<Image
							src={HeroImage}
							alt={'hero image'}
							priority
							className={'drop-shadow-accent object-cover'}
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}
export default Hero
