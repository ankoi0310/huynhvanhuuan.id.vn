import axios, { AxiosError } from 'axios'
import {
	NextApiRequest,
	NextApiResponse,
} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case 'POST':
			await getEmbedVideo(req, res)
			break
	}
}

const getEmbedVideo = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { url } = req.body
		const response = await axios.get(
			`https://www.tiktok.com/oembed`,
			{
				params: {
					url,
				},
			},
		)
		
		res.status(200).json(response.data)
	} catch (error) {
		if (error instanceof AxiosError) {
			res.status(error.response?.status || 500).json(error.response?.data || { message: 'Something went wrong' })
		} else {
			res.status(500).json({ message: 'Something went wrong' })
		}
	}
}
