import {
	NextApiRequest,
	NextApiResponse,
} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case 'GET':
			await test(req, res)
	}
}

const test = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		res.status(200).json({ message: 'Hello World!' })
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' })
	}
}
