import type { StaticImageData } from 'next/image'

export type Technology = {
	logo: string | StaticImageData
	darkLogo: string | StaticImageData
	label: string
	url: string
}

export type ProjectDetail = {
	name: string
	description: string
	url: string
	image: string | StaticImageData
	technologies: string[]
}

/* KOI WAVE */
// TIKTOK
export type EmbedVideo = {
	author_name: string
	author_unique_id: string
	author_url: string
	embed_product_id: string
	embed_type: string
	height: string
	html: string
	provider_name: string
	provider_url: string
	thumbnail_height: number
	thumbnail_url: string
	thumbnail_width: number
	title: string
	type: string
	version: string
	width: string
}

export type Author = {
	id: string
	unique_id: string
	nickname: string
	avatar: string
}

export type CommerceInfo = {
	adv_promotable: boolean
	auction_ad_invited: boolean
	branded_content_type: number
	with_comment_filter_words: boolean
}

export type MusicInfo = {
	id: string
	title: string
	play: string
	cover: string
	author: string
	original: boolean
	duration: number
	album: string
}

export type VideoInfo = {
	aweme_id: string
	id: string
	region: string
	title: string
	cover: string
	origin_cover: string
	duration: bigint
	play: string
	wmplay: string
	hdplay: string
	size: bigint
	wm_size: bigint
	hd_size: bigint
	music: string
	music_info: MusicInfo
	play_count: bigint
	digg_count: bigint
	comment_count: bigint
	share_count: bigint
	download_count: bigint
	collect_count: bigint
	create_time: bigint
	anchors: any
	anchors_extras: string
	is_ad: boolean
	commerce_info: CommerceInfo
	commercial_video_info: string
	author: Author
}
