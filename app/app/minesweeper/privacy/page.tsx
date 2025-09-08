import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import Link from "@/components/navigation/Link";

export default function Page() {
    return (
        <Container>
            <div className={'flex flex-col px-12'}>
                <Typography variant={'h1'} className={'mb-12 text-center uppercase'}>Chính sách quyền riêng tư</Typography>
                <div className={'w-full flex flex-col justify-start gap-8 px-12'}>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>1. Thông tin thu thập và sử dụng</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Trò chơi &quot;Dò min - Minesweeper&quot; không thu thập, sử dụng hoặc chia sẻ bất kỳ thông
                            tin cá nhân nào của người dùng, trừ thông tin cần thiết để hiển thị quảng cáo như quốc gia hoặc vùng địa
                            lý.
                        </Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Dữ liệu cá nhân không được yêu cầu hoặc thu thập từ người dùng khi chơi trò chơi này.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>2. Quảng cáo</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Trò chơi chứa quảng cáo để duy trì hệ thống và cung cấp dịch vụ miễn phí cho người dùng.
                        </Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Chúng tôi sử dụng mạng quảng cáo bên thứ ba, có thể thu thập thông tin không nhận dạng được
                            để cung cấp quảng cáo phù hợp với người dùng.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>3. Không liên kết đến trang web bên ngoài</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            &quot;Dò min - Minesweeper&quot; không chứa bất kỳ liên kết đến trang web bên ngoài nào, đảm
                            bảo an toàn và sự riêng tư cho người dùng.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>4. Quyền truy cập</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Trò chơi yêu cầu quyền truy cập vào internet để tải quảng cáo từ mạng quảng cáo bên thứ ba
                            và đảm bảo tính liên tục của dịch vụ.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>5. Bảo mật</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng và sử dụng các biện pháp bảo mật
                            phù hợp để đảm bảo an toàn cho dữ liệu.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>6. Tuân thủ luật pháp</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Chúng tôi cam kết tuân thủ tất cả các luật pháp liên quan đến bảo mật và quyền riêng tư của
                            người dùng, bao gồm cả GDPR (Nghị định Bảo vệ Dữ liệu Chung) nếu áp dụng.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>7. Liên hệ</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Nếu có bất kỳ câu hỏi hoặc ý kiến nào về chính sách bảo mật này, vui lòng liên hệ với chúng
                            tôi qua địa chỉ email: huynhvahuuan3620@gmail.com.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>8. Sự thay đổi trong chính sách bảo mật</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Chúng tôi có thể cập nhật chính sách bảo mật này từ thời gian này sang thời gian khác. Mọi
                            thay đổi sẽ được thông báo qua ứng dụng hoặc trang web chính thức của chúng tôi.
                        </Typography>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <Typography variant={'h3'}>9. Sự đồng ý</Typography>
                        <Typography className={'leading-6 pl-8'}>
                            Việc chơi trò chơi &quot;Dò min - Minesweeper&quot; đồng nghĩa với việc bạn đồng ý với
                            chính sách bảo mật và quyền riêng tư của chúng tôi.
                        </Typography>
                    </div>
                </div>
                {/* Read carefully */}
                <Typography className={'mt-8'}>
                    Trên đây là chính sách bảo mật của trò chơi &quot;Dò min - Minesweeper&quot;.
                    Vui lòng đọc kỹ và hiểu rõ chính sách bảo mật trước khi chơi trò chơi. Chân thành cảm ơn bạn đã
                    chơi trò chơi của chúng tôi.
                </Typography>
                <Typography className={'mt-8 text-end'}>
                    Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
                </Typography>
                <Typography variant={'h2'} className={'mt-12'}>
                    <Link href={'https://play.google.com/store/apps/details?id=com.codewithkoi.minesweeper'} externalLink>
                        Tải trò chơi trên Google Play tại đây
                    </Link>
                </Typography>
            </div>
        </Container>
    )
}
