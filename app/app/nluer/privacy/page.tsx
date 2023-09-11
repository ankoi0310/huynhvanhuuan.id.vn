import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'

export default function Privacy() {
	
	return (
		<Container>
			<div className={'flex flex-col items-center px-12'}>
				<Typography variant={'h1'} className={'mb-12'}>Chính sách quyền riêng tư</Typography>
				<div className={'w-full flex flex-col justify-start gap-8'}>
					<div className={'flex flex-col gap-4'}>
						<Typography variant={'h3'}>I. Chính sách quyền riêng tư</Typography>
						<Typography className={'leading-6'}>
							Chúng tôi tôn trọng quyền riêng tư của mỗi cá nhân, vì thế chúng tôi luôn cố gắng bảo vệ toàn bộ thông tin
							của mọi người. Chính sách về quyền riêng tư sẽ thể hiện quá trình chúng tôi thu thập, chuyển đổi, xử lý và
							sử dụng.
						</Typography>
						<Typography className={'leading-6'}>
							Bằng việc cung cấp thông tin cá nhân, bạn đã đồng ý và chấp nhận việc trao đổi, xử lý, sử dụng và công bố
							thông tin được đề cập tại Chính sách này.
						</Typography>
					</div>
					<div className={'flex flex-col gap-4'}>
						<Typography variant={'h3'}>II. Chúng tôi Bảo mật thông tin như thế nào?</Typography>
						<Typography className={'leading-6'}>
							Chúng tôi sẽ luôn bảo mật thông tin cá nhân của bạn nhưng chúng tôi không đảm bảo sự an toàn các thông tin
							bạn tải lên web hoặc qua ứng dụng di động: Bạn sẽ chịu rủi ro về các thông tin được tải lên. Vì chúng tôi
							không thể đảm bảo tuyệt đối không có việc rò rỉ thông tin, sử dụng sai mục đích hoặc thay đổi dữ liệu, nên
							ngay khi nhận được thông tin của bạn, chúng tôi sẽ sử dụng các biện pháp bảo mật chuyên môn để phòng tránh
							các sự cố nêu trên xảy ra.
						</Typography>
					</div>
					<div className={'flex flex-col gap-4'}>
						<Typography variant={'h3'}>III. Chia sẻ thông tin với bên thứ ba</Typography>
						<Typography className={'leading-6'}>
							Chúng tôi cam kết sẽ không chia sẻ thông tin của bạn sang đơn vị thứ 3 hay bất kể đơn vị nào khác.
						</Typography>
					</div>
					<div className={'flex flex-col gap-4'}>
						<Typography variant={'h3'}>IV. Thay đổi chính sách</Typography>
						<Typography className={'leading-6'}>
							Chính sách quyền Riêng tư này đôi khi được cập nhật. Nếu sự thay đổi có tính chất quan trọng, chúng tôi sẽ
							đăng thông báo trên trang web hoặc các ứng dụng và các thỏa thuận cấp phép liên quan. Chúng tôi khuyến
							khích bạn nên thường xuyên tham khảo Chính sách Quyền Riêng Tư để cập nhật thông tin mới nhất về việc
							chúng tôi bảo mật thông tin cá nhân thu thập được. Việc bạn tiếp tục sử dụng website đồng nghĩa với việc
							chấp thuận điều khoản quyền Riêng tư và các cập nhật của Chính sách này. Những thay đổi trong chính sách
							không áp dụng với các dữ liệu được thu thập trước đó.
						</Typography>
					</div>
				</div>
			</div>
		</Container>
	)
}
