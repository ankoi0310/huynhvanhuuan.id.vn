export default function App({ params }: { params: { slug: string } }) {
	return (
		<div>
			Trang chủ {params.slug}
		</div>
	)
}
