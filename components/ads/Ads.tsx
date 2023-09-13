import { useEffect } from 'react'

const Ads = (props: any) => {
	useEffect(() => {
		try {
			// @ts-ignore
			(window.adsbygoogle = window.adsbygoogle || []).push({})
		} catch (err) {
			console.log(err)
		}
	}, [])
	
	return (
		<ins
			className='adsbygoogle adbanner-customize'
			data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
			{...props}
		/>
	)
}

export default Ads
