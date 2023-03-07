import { useFetchBrowserPopularGamesQuery } from '../features/games/queries';
import { BrowserTrack } from './BrowserTrack';

export const BrowserTracks: React.FC = () => {
	const { data, isLoading } = useFetchBrowserPopularGamesQuery();

	return (
		// TODO: isLoading - skeleton games.
		<div className='grid col-span-3 row-span-5 w-3/5 p-10 gap-3'>
			<h3 className='text-lg font-bold'>Popular Tracks</h3>
			{data?.map((track) => (
				<BrowserTrack
					key={track.ID}
					{...track}
				/>
			))}
		</div>
	);
};
