import axios from 'axios'
import {
	NextRequest,
	NextResponse,
} from 'next/server'

const URL_1 = process.env.NEXT_PUBLIC_URL_1
const X_RAPIDAPI_KEY_1 = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY_1
const X_RAPIDAPI_HOST_1 = process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST_1

const URL_2 = process.env.NEXT_PUBLIC_URL_2
const X_RAPIDAPI_KEY_2 = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY_2
const X_RAPIDAPI_HOST_2 = process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST_2

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const link = searchParams.get('link') ?? '1'
	switch (link) {
		case '2':
			return await getVideoInfo(URL_2!, X_RAPIDAPI_KEY_2!, X_RAPIDAPI_HOST_2!, searchParams)
		case '1':
		default:
			return await getVideoInfo(URL_1!, X_RAPIDAPI_KEY_1!, X_RAPIDAPI_HOST_1!, searchParams)
	}
	
}

const getVideoInfo = async (URL: string, X_RAPIDAPI_KEY: string, X_RAPIDAPI_HOST: string, searchParams: URLSearchParams) => {
	const url = searchParams.get('url')
	if (url) {
		try {
			const response = await axios.get(URL, {
				headers: {
					'X-RapidAPI-Key': X_RAPIDAPI_KEY,
					'X-RapidAPI-Host': X_RAPIDAPI_HOST,
				},
				params: {
					url,
					hd: searchParams.get('hd') ?? '1',
				},
			})
			
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
