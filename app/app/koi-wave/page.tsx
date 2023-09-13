'use client'

import Link from '@/components/navigation/Link'
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
import Typography from '@/components/ui/typography'
import { WAVE_TITLE } from '@/lib/data'
import { EmbedVideo } from '@/lib/types'
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
import * as z from 'zod'

const formSchema = z.object({
	url: z.string({
		required_error: 'Please fill this field',
	}).nonempty('Please fill this field'),
})

export default function Page() {
	const [title, setTitle] = useState(WAVE_TITLE.TIKTOK)
	const [error, setError] = useState<string | null>(null)
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
		const response = await axios.post(
			'/api/koi-wave/tiktok/embed-video',
			data,
		)
		
		if (response.status == 200) {
			setUrl(data.url)
			setEmbedVideo(response.data as EmbedVideo)
		} else {
			setError(response.data?.message)
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
					<div className={'w-full md:w-2/3'}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<FormField name={'url'} control={form.control} render={({ field }) => (
									<div className={'flex flex-col p-6 md:p-8 gap-2'}>
										<div className={'flex w-full items-center max-w-7xl gap-4'}>
											<FormControl>
												<Input
													type={'text'}
													{...field}
													placeholder={'Enter your link'}
													className={'p-6 focus-visible:ring-offset-0 focus-visible:ring-0'}
												/>
											</FormControl>
											<Button type={'submit'}>Download</Button>
										</div>
										<FormMessage />
									</div>
								)} />
							</form>
						</Form>
					</div>
				</div>
			</Container>
			
			{
				embedVideo && (
					<Container>
						<div className={'w-full flex justify-between bg-gray-50 p-4'}>
							<Card className={'h-fit flex-1 flex flex-row p-4 gap-4'}>
								<Image
									src={embedVideo.thumbnail_url}
									alt={embedVideo.title}
									width={75}
									height={75}
									className={'rounded-md min-w-[75px] w-[75px] h-[75px] object-cover'}
								/>
								<div className={'flex flex-col overflow-hidden'}>
									<Typography variant={'body1'} className={'line-clamp-2'}>{embedVideo.title}</Typography>
									<Typography variant={'body2'}>{embedVideo.author_name}</Typography>
								</div>
							</Card>
							<div className={'flex-1 flex flex-col items-end justify-start pr-20'}>
								<div className={'w-1/3 flex flex-col gap-4'}>
									<Link href={`/api/koi-wave/tiktok/download?url=${url}&hd=${1}`} noCustomization>Download</Link>
									<Button type={'submit'}>Download 1</Button>
									<Button type={'submit'}>Download 2</Button>
								</div>
							</div>
						</div>
					</Container>
				)
			}
		</>
	)
}
