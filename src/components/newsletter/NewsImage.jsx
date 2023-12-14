import desktopSizeImg from '../../assets/images/illustration-sign-up-desktop.svg';
import mobileSizeImg from '../../assets/images/illustration-sign-up-mobile.svg';

function NewsImage() {
	return (
		<section className='order-1 md:order-2'>
			<img
				src={desktopSizeImg}
				alt='background image'
				className='hidden md:block'
			/>
			<img
				src={mobileSizeImg}
				alt='background image'
				className='w-full block md:hidden'
			/>
		</section>
	);
}

export default NewsImage;
