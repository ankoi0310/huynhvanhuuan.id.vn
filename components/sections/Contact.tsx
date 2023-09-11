'use client'

import {
	IconButton,
	SocialIcons,
} from '@/components/shared'
import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import { useWindowSize } from '@/hooks'
import { copyToClipboard } from '@/lib/utils'
import {
	Copy,
	Mail,
	Phone,
} from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const email = 'huynhvahuuan3620@gmail.com'
const phone = '+84 787782050'

type CopyValue = 'email' | 'phone'

const Contact = () => {
	const { width } = useWindowSize()
	const [isCopied, setIsCopied] = useState(false)
	const [type, setType] = useState<CopyValue | null>(null)
	
	const handleCopy = async (text: string, type: CopyValue) => {
		try {
			await copyToClipboard(text)
			setIsCopied(true)
			setType(type)
			
			let timeoutId = setTimeout(() => {
				setIsCopied(false)
				setType(null)
				clearTimeout(timeoutId)
			}, 1500)
		} catch (error) {
			setIsCopied(false)
			setType(null)
			alert('Failed to copy')
		}
	}
	
	return (
		<Container id={'contact'}>
			<div className={'flex flex-col items-center gap-4'}>
				<Typography variant={'h2'} className={'font-semibold uppercase'}>Get in touch</Typography>
				<Typography variant={'subtitle'}>
					Feel free to reach out to me for any inquiries
				</Typography>
			</div>
			<div className={'flex flex-col items-center gap-6 md:gap-12'}>
				<div className={'flex flex-col items-center md:gap-4'}>
					<div className={'flex items-center gap-4 md:gap-5'}>
						<Mail className='h-6 w-6 md:h-8 md:w-8' />
						<Typography variant={'h3'}>
							{email}
						</Typography>
						<IconButton
							size={width && width < 768 ? 'md' : 'lg'}
							onClick={() => handleCopy(email, 'email')}
							showTooltip={isCopied && type === 'email'}
							tooltipText='Copied!'
						>
							<Copy />
						</IconButton>
					</div>
					
					<div className={'flex items-center gap-4 md:gap-5'}>
						<Phone className='h-6 w-6 md:h-8 md:w-8' />
						<Typography variant={'h3'}>
							{phone}
						</Typography>
						<IconButton
							size={width && width < 768 ? 'md' : 'lg'}
							onClick={() => handleCopy(phone.replace(' ', ''), 'phone')}
							showTooltip={isCopied && type === 'phone'}
							tooltipText='Copied!'
						>
							<Copy />
						</IconButton>
					</div>
				</div>
				
				<div className={'flex flex-col items-center gap-2'}>
					<Typography>You may also find me on these platforms</Typography>
					<SocialIcons />
				</div>
			</div>
		</Container>
	)
}
export default Contact
