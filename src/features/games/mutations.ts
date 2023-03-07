import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { IBrowserGame } from '../../mocks/games/getBrowserPopularGames';
import { editBrowserPopularGames } from './services';

export interface IErrorResponse {
	status: number;
	errors: IError[];
}

export interface IError {
	status: number;
	type: string;
	title: string;
	detail: string;
}

interface useEditBrowserPopularGameMutationVariables {
	ID: number;
	favourite: boolean;
}
export interface IContext {
	prevGames: IBrowserGame[] | undefined;
}
interface useEditBrowserPopularGameMutationProps {
	onMutate: (variables: useEditBrowserPopularGameMutationVariables) => Promise<IContext | undefined>;
	onError: (
		error: AxiosError<IErrorResponse, any>,
		variables: useEditBrowserPopularGameMutationVariables,
		context: IContext | undefined
	) => void;
}
export const useEditBrowserPopularGameMutation = ({ onMutate, onError }: useEditBrowserPopularGameMutationProps) => {
	return useMutation<IBrowserGame, AxiosError<IErrorResponse>, useEditBrowserPopularGameMutationVariables, IContext>(
		'mutate-favourite',
		async ({ ID, favourite }) => {
			return await editBrowserPopularGames(ID, favourite);
		},
		{ onMutate, onError }
	);
};
