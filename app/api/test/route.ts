import {
	NextRequest,
} from 'next/server'

export async function GET(request: NextRequest) {
	return new Response(JSON.stringify({ message: 'Hello World!' }), {
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
