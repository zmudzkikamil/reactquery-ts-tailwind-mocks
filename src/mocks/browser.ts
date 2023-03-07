import { setupWorker } from 'msw';
import { getBrowserPopularGamesHandler } from './games/getBrowserPopularGames';
import { editBrowserPopularGamesHandler } from './games/editBrowserPopularGames';

const handlers = [getBrowserPopularGamesHandler, editBrowserPopularGamesHandler];

export const worker = setupWorker(...handlers);
