import { MdOutlineSpeed } from 'react-icons/md';
import { classNames } from '../shared/utils/classNames';

export interface ILevelOfDifficulty {
	difficulty: 'Easy' | 'Normal' | 'Hard';
}

const LevelOfDifficulty: React.FC<ILevelOfDifficulty> = ({ difficulty }) => {
	const containerStyles = classNames({
		'flex items-center': true,
		'text-green': difficulty === 'Easy',
		'text-yellow': difficulty === 'Normal',
		'text-red': difficulty === 'Hard',
	});
	return (
		<div className={`${containerStyles} flex items-center`}>
			<div className='flex justify-center items-center w-3 h-2  mr-2'>
				<MdOutlineSpeed />
			</div>
			<p className='flex font-bold text-[8px] leading-none'>{difficulty}</p>
		</div>
	);
};

export default LevelOfDifficulty;
