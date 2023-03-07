import { rest } from 'msw';

export interface IBrowserGame {
  ID: number;
  title: string;
  song: string;
  thumbnail: string;
  categories: string[];
  views: number;
  difficulty: 'Easy' | 'Normal' | 'Hard',
  favourite: boolean;
}

export const getBrowserPopularGamesHandler = rest.get<never, never, IBrowserGame[]>(
  `${import.meta.env.VITE_API_URL}/games/browser-popular`,
  (req, res, ctx) => {
    const games: IBrowserGame[] = [
      {
        ID: 0,
        title: 'Marian Hill - Down',
        song: 'Marian Hill - Down',
        thumbnail: 'https://i.ytimg.com/vi/DpMfP6qUSBo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 230000,
        difficulty: 'Normal',
        favourite: false
      },
      {
        ID: 1,
        title: 'Szczyl feat. Piotr Rogucki - Cień',
        song: 'Szczyl feat. Piotr Rogucki - Cień',
        thumbnail: 'https://i.ytimg.com/vi/tKCqVpFVQ4A/maxresdefault.jpg',
        categories: ['Hip-hop'],
        views: 770000,
        difficulty: 'Normal',
        favourite: false
      },
      {
        ID: 2,
        title: 'Szczyl feat. Tymek - Anastazja',
        song: 'Szczyl feat. Tymek - Anastazja',
        thumbnail: 'https://i.ytimg.com/vi/1vTKvjvsX0w/maxresdefault.jpg',
        categories: ['Hip-hop', 'Pop'],
        views: 100000,
        difficulty: 'Easy',
        favourite: false
      },
      {
        ID: 3,
        title: 'Szczyl - Banda',
        song: 'Szczyl - Banda',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Hip-hop'],
        views: 50000,
        difficulty: 'Easy',
        favourite: true
      },
      {
        ID: 4,
        title: 'Childish Gambino - Redbone',
        song: 'Childish Gambino - Redbone',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 200000,
        difficulty: 'Hard',
        favourite: false
      },
      {
        ID: 5,
        title: 'Darude - Sandstorm',
        song: 'Darude - Sandstorm',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 830000,
        difficulty: 'Hard',
        favourite: false
      },
      {
        ID: 6,
        title: 'Playboi Carti - Vamp Anthem',
        song: 'Playboi Carti - Vamp Anthem',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 630000,
        difficulty: 'Easy',
        favourite: true
      },
      {
        ID: 7,
        title: 'Rusko - Everyday (Netsky Remix)',
        song: 'Rusko - Everyday (Netsky Remix)',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 150000,
        difficulty: 'Normal',
        favourite: true
      },
      {
        ID: 8,
        title: 'The Offspring - Want You Bad',
        song: 'The Offspring - Want You Bad',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 170000,
        difficulty: 'Hard',
        favourite: false
      },
      {
        ID: 9,
        title: 'Hippie Sabotage - Running Miles',
        song: 'Hippie Sabotage - Running Miles',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 220000,
        difficulty: 'Hard',
        favourite: true
      },
      {
        ID: 10,
        title: 'Glue Trip - Elbow Pain',
        song: 'Glue Trip - Elbow Pain',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 620000,
        difficulty: 'Easy',
        favourite: false
      },
      {
        ID: 11,
        title: 'Justin Timberlake - Mirrors',
        song: 'Justin Timberlake - Mirrors',
        thumbnail: 'https://i.ytimg.com/vi/VE7JtnGXvYo/maxresdefault.jpg',
        categories: ['Electronic','R&B','Dance'],
        views: 420000,
        difficulty: 'Normal',
        favourite: false
      }
    ];

    return res(
      ctx.status(200),
      ctx.json(games)
    );
  }
)
