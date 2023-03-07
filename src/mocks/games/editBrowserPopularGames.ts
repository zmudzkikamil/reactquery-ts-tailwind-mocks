import { rest } from 'msw';

interface IFavouriteToEdit {
  favourite: 'true' | 'false';
}
interface IEditedFavourite {
  favourite: boolean;
}

export const editBrowserPopularGamesHandler = rest.patch<
  never,
  IFavouriteToEdit,
  IEditedFavourite
>(
  `${import.meta.env.VITE_API_URL}/games/browser-popular/:ID`,
  async (req, res, ctx) => {
    const { favourite } = req.params;

    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        favourite: favourite === 'true' ? false : true
      })
    );
  }
);
