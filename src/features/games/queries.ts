import { useQuery } from "react-query"
import { fetchBrowserPopularGames } from "./services"

export const useFetchBrowserPopularGamesQuery = () => {
  return useQuery('browser-popular-games', fetchBrowserPopularGames, {
    refetchOnWindowFocus: false
  });
}