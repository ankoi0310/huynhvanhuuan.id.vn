'use client'

import Ads from '@/components/ads/Ads'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Container from '@/components/ui/container'
import {
	Form,
	FormControl,
	FormField,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import Typography from '@/components/ui/typography'
import { WAVE_TITLE } from '@/lib/data'
import {
	EmbedVideo,
	TikTokResponse,
} from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Image from 'next/image'
import {
	useSearchParams,
} from 'next/navigation'
import {
	useEffect,
	useState,
} from 'react'
import { useForm } from 'react-hook-form'
import useDownloader from 'react-use-downloader'
import * as z from 'zod'

const formSchema = z.object({
	url: z.string({
		required_error: 'Please fill this field',
	}).nonempty('Please fill this field'),
})

export default function Page() {
	const { percentage, download, error, isInProgress } = useDownloader()
	const [title, setTitle] = useState(WAVE_TITLE.TIKTOK)
	const [url, setUrl] = useState('')
	const [embedVideo, setEmbedVideo] = useState<EmbedVideo | null>(null)
	
	const searchParams = useSearchParams()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			url: '',
		},
	})
	
	useEffect(() => {
		if (searchParams && searchParams.has('type')) {
			const type = searchParams.get('type')
			
			switch (type) {
				case 'tiktok':
					setTitle(WAVE_TITLE.TIKTOK)
					break
				case 'facebook':
					setTitle(WAVE_TITLE.FACEBOOK)
					break
				case 'instagram':
					setTitle(WAVE_TITLE.INSTAGRAM)
					break
			}
		}
	}, [searchParams])
	
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		const response = await axios.get(
			'/api/app/koi-wave/tiktok/embed',
			{
				params: data,
			},
		)
		
		if (response.status == 200) {
			setUrl(data.url)
			setEmbedVideo(response.data as EmbedVideo)
		} else {
		}
	}
	
	const handleDonwload = async (link: number) => {
		const response = await axios.get(
			'/api/app/koi-wave/tiktok',
			{
				params: {
					url,
					hd: 1,
					link,
				},
			},
		)
		
		const tikTokResponse = response.data as TikTokResponse
		
		if (tikTokResponse.data) {
			const videoInfo = tikTokResponse.data
			const fileName = `KoiWave_${videoInfo.id}.mp4`
			await download(videoInfo.hdplay, fileName)
		}
	}
	
	return (
		<>
			<Container className={'bg-gray-100'}>
				<div className={'flex flex-col items-center px-12'}>
					<Typography variant={'h2'}>
						{title}
					</Typography>
				</div>
				
				<div className={'flex items-center justify-center'}>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className={'w-full sm:w-3/4 lg:w-2/3'}>
							<FormField name={'url'} control={form.control} render={({ field }) => (
								<div className={'flex flex-col items-center justify-center p-6 md:p-8 gap-4'}>
									<div className={'w-full flex flex-col gap-2'}>
										<div className={'flex items-center gap-4'}>
											<FormControl>
												<Input
													type={'text'}
													{...field}
													placeholder={'Enter your link'}
													className={'p-6 focus-visible:ring-offset-0 focus-visible:ring-0'}
												/>
											</FormControl>
											<Button type={'submit'} className={'hidden md:flex'}>Download</Button>
										</div>
										<FormMessage />
									</div>
									<Button type={'submit'} className={'w-full flex md:hidden'}>Download</Button>
								</div>
							)} />
						</form>
					</Form>
				</div>
			</Container>
			
			{
				embedVideo && (
					<Container>
						<div className={'flex flex-col bg-gray-50 p-4 gap-8'}>
							<div className={'px-8'}>
								<div className={'flex flex-col'}>
									{
										isInProgress && (
											<Typography className={'flex flex-row items-center justify-center gap-6'}>
												<Progress value={percentage} max={100} /> {percentage}%
											</Typography>
										)
									}
									{
										error && <Typography variant={'body1'} className={'text-red-500'}>{error.errorMessage}</Typography>
									}
								</div>
							</div>
							<div className={'w-full flex flex-col md:flex-row gap-4 md:gap-2 justify-between'}>
								<Card className={'h-fit md:flex-1 flex flex-row p-4 gap-4'}>
									<Image
										src={embedVideo.thumbnail_url}
										alt={embedVideo.title}
										width={75}
										height={75}
										className={'rounded-md min-w-[75px] w-[75px] h-[75px] object-cover'}
									/>
									<div className={'flex flex-col overflow-hidden'}>
										<Typography variant={'body1'} className={'line-clamp-2'}>{embedVideo.title}</Typography>
										<Typography>{embedVideo.author_name}</Typography>
									</div>
								</Card>
								<div
									className={'md:flex-1 flex flex-col items-center sm:items-end justify-start md:p-0 lg:pr-14 xl:pr-20'}>
									<div className={'w-full md:w-2/3 lg:w-2/5 xl:w-1/3 flex flex-row md:flex-col gap-4'}>
										<Button onClick={() => handleDonwload(1)} className={'flex-1'}>Download 1</Button>
										<Button onClick={() => handleDonwload(2)} className={'flex-1'}>Download 2</Button>
									</div>
								</div>
							</div>
						</div>
					</Container>
				)
			}
			
			<Container>
				<Ads
					data-ad-slot='4771983590'
					data-ad-format='auto'
					data-full-width-responsive='true'
					style={{
						display: 'block',
					}}
				/>
			</Container>
			
			<Container>
				<Accordion type='single' collapsible className={'w-full'}>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Container>
		</>
	)
}
