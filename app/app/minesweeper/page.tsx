import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import Link from "@/components/navigation/Link";

export default function Page() {
    return (
        <Container>
            <div className={'flex flex-col items-center px-12 py-16'}>
                <Typography variant={'h1'} className={'mb-8 text-center'}>
                    Dò min - Minesweeper
                </Typography>
                
                <div className={'max-w-4xl mx-auto text-center mb-12'}>
                    <Typography variant={'h2'} className={'mb-6'}>
                        Trò chơi Dò min cổ điển
                    </Typography>
                    <Typography className={'leading-6 mb-8'}>
                        Trải nghiệm trò chơi Dò min kinh điển với giao diện hiện đại và dễ sử dụng. 
                        Thử thách trí tuệ của bạn với các mức độ khó khác nhau từ dễ đến khó.
                    </Typography>
                </div>

                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'}>
                    <div className={'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'}>
                        <Typography variant={'h3'} className={'mb-4'}>🎮 Chế độ chơi</Typography>
                        <Typography className={'leading-6'}>
                            Nhiều chế độ chơi từ dễ đến khó: Beginner, Intermediate, Expert và Custom
                        </Typography>
                    </div>
                    
                    <div className={'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'}>
                        <Typography variant={'h3'} className={'mb-4'}>🏆 Thống kê</Typography>
                        <Typography className={'leading-6'}>
                            Theo dõi thành tích và thời gian chơi tốt nhất của bạn
                        </Typography>
                    </div>
                    
                    <div className={'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'}>
                        <Typography variant={'h3'} className={'mb-4'}>🎨 Giao diện</Typography>
                        <Typography className={'leading-6'}>
                            Giao diện đẹp mắt, hỗ trợ chế độ sáng/tối
                        </Typography>
                    </div>
                </div>

                <div className={'flex flex-col sm:flex-row gap-4 mb-12'}>
                    <Link 
                        href={'https://play.google.com/store/apps/details?id=com.codewithkoi.minesweeper'} 
                        externalLink
                        className={'bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-center transition-colors'}
                    >
                        Tải xuống trên Google Play
                    </Link>
                    
                    <Link 
                        href={'/app/minesweeper/privacy'} 
                        className={'bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-center transition-colors'}
                    >
                        Chính sách quyền riêng tư
                    </Link>
                </div>

                <div className={'text-center'}>
                    <Typography className={'text-sm text-gray-500'}>
                        Phát triển bởi Code With Koi
                    </Typography>
                </div>
            </div>
        </Container>
    )
}
