import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useQueryClient } from 'react-query';
import { useEditBrowserPopularGameMutation } from '../features/games/mutations';
import { IBrowserGame } from '../mocks/games/getBrowserPopularGames';
import { ButtonIcon } from '../shared/components';

export interface IIsFavouriteButton {
	ID: number;
	favourite: boolean;
}

const IsFavouriteButton: React.FC<IIsFavouriteButton> = ({ favourite, ID }) => {
	const queryClient = useQueryClient();
	const { mutate } = useEditBrowserPopularGameMutation({
		onMutate: async ({ ID, favourite }) => {
			await queryClient.cancelQueries('browser-popular-games');
			const prevGames: IBrowserGame[] | undefined = queryClient.getQueryData('browser-popular-games');
			queryClient.setQueryData<IBrowserGame[]>('browser-popular-games', (old) => {
				return (
					old?.map((item) => {
						if (item.ID === ID) {
							return {
								...item,
								favourite: !favourite,
							};
						}
						return item;
					}) || []
				);
			});
			return { prevGames };
		},
		onError(error, variables, context) {
			queryClient.setQueryData('browser-popular-games', context?.prevGames);
		},
	});
	const clickHandler = () => {
		mutate({ ID, favourite });
	};

	return (
		<ButtonIcon
			icon={
				favourite ? (
					<AiFillStar className='text-sm text-yellow hover:text-white' />
				) : (
					<AiOutlineStar className='text-sm hover:text-yellow' />
				)
			}
			className='h-4 w-4 bg-transparent hover:bg-transparent'
			onClick={clickHandler}
		/>
	);
};

export default IsFavouriteButton;
