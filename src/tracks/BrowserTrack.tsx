import { IBrowserGame } from '../mocks/games/getBrowserPopularGames';
import { IoShareSocialSharp } from 'react-icons/io5';
import { BsFillPlayFill } from 'react-icons/bs';
import Categories from './Categories';
import GameThumbnail from './GameThumbnail';
import { ButtonIcon } from '../shared/components';
import GameViews from './GameViews';
import LevelOfDifficulty from './LevelOfDifficulty';
import IsFavouriteButton from './IsFavouriteButton';

export const BrowserTrack: React.FC<IBrowserGame> = ({
	ID,
	title,
	thumbnail,
	categories,
	views,
	difficulty,
	favourite,
}) => {
	return (
		<div className='grid gap-7 grid-cols-[64px_1fr_40px_50px_2px_12px_12px_36px] items-center'>
			<GameThumbnail
				thumbnail={thumbnail}
				title={title}
			/>
			<div>
				<p className=' font-bold text-sm leading-none'>{title}</p>
				<Categories categories={categories} />
			</div>
			<GameViews views={views} />
			<LevelOfDifficulty difficulty={difficulty} />
			<div className='w-[1px] h-4 bg-black-lighter'></div>
			<ButtonIcon
				icon={<IoShareSocialSharp className='text-sm' />}
				className='h-4 w-4 bg-transparent hover:bg-transparent hover:text-purple'
			/>
			<IsFavouriteButton
				favourite={favourite}
				ID={ID}
			/>
			<ButtonIcon
				icon={<BsFillPlayFill className='text-sm' />}
				className='bg-purple hover:bg-purple-darker transition-colors'
				rounded
			/>
		</div>
	);
};
