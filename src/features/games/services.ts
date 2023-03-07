import { IBrowserGame } from '../../mocks/games/getBrowserPopularGames';
import axios from 'axios';

const fetchBrowserPopularGames = async (): Promise<IBrowserGame[]> => {
	const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/games/browser-popular`, {
		withCredentials: true,
	});

	return data;
};
const editBrowserPopularGames = async (id: number, favourite: boolean): Promise<IBrowserGame> => {
	const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/games/browser-popular/${id}`, {
		favourite: favourite.toString(),
	});

	return data;
};

export { fetchBrowserPopularGames, editBrowserPopularGames };
