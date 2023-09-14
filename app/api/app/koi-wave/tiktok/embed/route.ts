import axios from 'axios'
import {
	NextRequest,
	NextResponse,
} from 'next/server'

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const url = searchParams.get('url')
	console.log(url)
	if (url) {
		try {
			const response = await axios.get(
				`https://www.tiktok.com/oembed`,
				{
					params: {
						url,
					},
				},
			)
			
			if (response.status == 200) {
				return NextResponse.json(response.data, { status: 200 })
			} else {
				return NextResponse.json(response.data, { status: response.status })
			}
		} catch (error) {
			return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
		}
	} else {
		return NextResponse.json({ message: 'Missing url' }, { status: 400 })
	}
}
