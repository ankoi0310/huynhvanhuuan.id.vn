import { VideoInfo } from '@/lib/types'
import axios from 'axios'
import {
	NextApiRequest,
	NextApiResponse,
} from 'next'

const URL_1 = process.env.NEXT_PUBLIC_URL_1
const X_RAPIDAPI_KEY_1 = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY_1
const X_RAPIDAPI_HOST_1 = process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST_1

const URL_2 = process.env.NEXT_PUBLIC_URL_2
const X_RAPIDAPI_KEY_2 = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY_2
const X_RAPIDAPI_HOST_2 = process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST_2

type ResponseData = {
	code: number
	msg: string
	processed_time: number
	data?: VideoInfo
}

export const config = {
	api: {
		responseLimit: false,
	},
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case 'GET':
			await downloadVideo(req, res)
	}
}

const downloadVideo = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { url, hd } = req.query
		const videoInfoResponse = await axios.get(
			URL_1!,
			{
				headers: {
					'X-RapidAPI-Key': X_RAPIDAPI_KEY_1,
					'X-RapidAPI-Host': X_RAPIDAPI_HOST_1,
				},
				params: {
					url,
					hd,
				},
			},
		)
		
		const { data: videoInfo, code, msg } = videoInfoResponse.data as ResponseData
		if (code == 0 && videoInfo) {
			const downloadResponse = await axios.get(videoInfo.hdplay, {
				responseType: 'stream',
			})
			
			const fileName = `KoiWave_${videoInfo.id}.mp4`
			res.setHeader('Content-Type', 'application/octet-stream')
			res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`)
			
			downloadResponse.data.pipe(res)
		} else {
			res.status(400).json({ message: msg })
		}
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' })
	}
}
