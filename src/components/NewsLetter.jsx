import NewsImage from './newsletter/NewsImage';
import NewsInfo from './newsletter/NewsInfo';

function NewsLetter() {
	return (
		<main className='max-h-2xl min-w-[20rem] md:max-w-4xl mx-auto md:p-5 flex flex-col md:flex-row md:items-center bg-white rounded-lg'>
			<NewsInfo />
			<NewsImage />
		</main>
	);
}

export default NewsLetter;
