import checkImg from '../assets/images/icon-success.svg';

function SuccessMsg() {
	return (
		<dialog id='successBtn' className='modal'>
			<div className='modal-box flex flex-col gap-5 p-10'>
				<div className='w-16'>
					<img src={checkImg} alt='success image' className='w-full' />
				</div>

				<h1 className='font-bold text-5xl'>Thanks for subscribing!</h1>

				<p>
					A confirmation email has been sent to <b>ash@loremcompany.com</b> .
					Please open it and click the button inside to confirm your
					subscription.
				</p>

				<form method='dialog'>
					<button className='w-full btn btn-neutral'>Dismiss message</button>
				</form>
			</div>
		</dialog>
	);
}

export default SuccessMsg;

// return (
// 	<div>
// 		<img src={checkImg} alt='success image' />
// 		<h1>Thanks for subscribing!</h1>
// 		<p>
// 			A confirmation email has been sent to ash@loremcompany.com. Please open
// 			it and click the button inside to confirm your subscription.
// 		</p>
// 		<button className='btn btn-neutral'>Dismiss message</button>
// 	</div>
// );
