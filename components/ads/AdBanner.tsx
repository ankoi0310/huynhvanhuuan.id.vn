const AdBanner = (props: any) => {
	return (
		<>
			<ins
				className='adsbygoogle adbanner-customize'
				style={{
					display: 'block',
					overflow: 'hidden',
				}}
				data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
				{...props}
			/>
			<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
		</>
	)
}

export default AdBanner
