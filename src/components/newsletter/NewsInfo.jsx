import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange, submitChange } from '../../state/newsletter/newsSlicer';

import NewsDetails from './newsinfo/NewsDetails';
import SuccessMsg from '../SuccessMsg';

function NewsInfo() {
	const { data, hasError, inputValue } = useSelector(
		(state) => state.newsTemplate
	);
	const dispatch = useDispatch();

	return (
		<section className='order-2 md:order-1 flex flex-col gap-8 mx-10'>
			<h1 className='text-6xl font-bold'>Stay updated!</h1>
			<h6 className='font-normal'>
				Join 60,000+ product managers receiving monthly updates on:
			</h6>

			<div>
				{data?.map((item, index) => (
					<Fragment key={index}>
						<NewsDetails details={item.details} />
					</Fragment>
				))}
			</div>

			<div className='w-full [&>*]:mb-4 '>
				<div className='flex flex-row justify-between'>
					<h6 className='font-bold'>Email address</h6>
					{hasError && <h6 className='text-red-500'>Valid email required</h6>}
				</div>

				<input
					type='text'
					placeholder='email@gmail.com'
					className='input input-bordered w-full'
					onChange={(e) => dispatch(inputChange(e.target.value))}
					value={inputValue}
				/>

				<button
					className={`w-full mb-4 md:last:mb-0 btn ${
						inputValue.length === 0 ? 'btn-disabled ' : 'btn-neutral'
					}`}
					onClick={() => dispatch(submitChange())}
					disabled={inputValue.length === 0}
				>
					Subscribe to monthly newsletter
				</button>
			</div>

			<SuccessMsg />
		</section>
	);
}

export default NewsInfo;
