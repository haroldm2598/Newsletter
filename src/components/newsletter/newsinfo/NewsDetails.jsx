import successImg from '../../../assets/images/icon-list.svg';

function NewsDetails({ details }) {
	return (
		<div className='flex flex-row [&>*]:mb-3'>
			<img src={successImg} alt='check' className='mr-2' />
			<h6>{details}</h6>
		</div>
	);
}

export default NewsDetails;
