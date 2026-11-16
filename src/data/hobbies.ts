export interface MediaTopItem {
  rank: number;
  title: string;
  imageUrl: string;
  status?: string;
}

export interface MediaCategory {
  id: string;
  name: string;
  type: 'watch' | 'read';
  iconName: string;
  badge: string;
  description: string;
  topTen: MediaTopItem[];
  currentlyConsuming?: {
    title: string;
    genre: string;
    status: string;
    note?: string;
    imageUrl?: string;
  };
}

export interface AnimeMalStats {
  days: number;
  meanScore: number;
  watching: number;
  completed: number;
  onHold: number;
  dropped: number;
  planToWatch: number;
  totalEntries: number;
  rewatched: number;
  episodes: number;
}

export const animeMalStats: AnimeMalStats = {
  days: 247.7,
  meanScore: 7.06,
  watching: 20,
  completed: 721,
  onHold: 22,
  dropped: 6,
  planToWatch: 1094,
  totalEntries: 1863,
  rewatched: 52,
  episodes: 17135,
};

export interface MangaMalStats {
  days: number;
  meanScore: number;
  reading: number;
  completed: number;
  onHold: number;
  dropped: number;
  planToRead: number;
  totalEntries: number;
  reread: number;
  chapters: number;
  volumes: number;
  username: string;
}

export const mangaMalStats: MangaMalStats = {
  days: 300.1,
  meanScore: 6.90,
  reading: 511,
  completed: 335,
  onHold: 29,
  dropped: 47,
  planToRead: 280,
  totalEntries: 1202,
  reread: 43,
  chapters: 40155,
  volumes: 1350,
  username: 'obaidulsaiki',
};

export const mediaHobbies: MediaCategory[] = [
  {
    id: 'anime',
    name: 'Anime',
    type: 'watch',
    iconName: 'Tv',
    badge: 'Animation',
    description: 'Favorite animated series and cinematic Japanese anime.',
    topTen: [
      { rank: 1, title: 'Full Metal Alchemist: Brotherhood', imageUrl: '/images/anime/1-fma.webp' },
      { rank: 2, title: 'Steins; Gate', imageUrl: '/images/anime/2-steins-gate.webp' },
      { rank: 3, title: 'Hunter X Hunter (2011)', imageUrl: '/images/anime/3-hxh.webp' },
      { rank: 4, title: 'One Piece', imageUrl: '/images/anime/4-one-piece.webp' },
      { rank: 5, title: 'Monogatari Series ALL', imageUrl: '/images/anime/5-monogatari.webp' },
      { rank: 6, title: 'Mob Psycho 100 S3', imageUrl: '/images/anime/6-mob-psycho.webp' },
      { rank: 7, title: 'JoJo S5', imageUrl: '/images/anime/7-jojo-s5.webp' },
      { rank: 8, title: 'Jobless Reincarnation S2', imageUrl: '/images/anime/8-mushoku-tensei-s2.webp' },
      { rank: 9, title: 'Re:Zero S4', imageUrl: '/images/anime/9-rezero-s4.webp' },
      { rank: 10, title: 'The world Only God Knows ALL', imageUrl: '/images/anime/10-twgok.webp' },
    ],
    currentlyConsuming: {
      title: 'Black Clover Season 2',
      genre: 'Action · Magic · Shounen',
      status: 'Currently Watching',
      note: 'Watching season 2 episodes',
      imageUrl: '/images/anime/black-clover.webp',
    },
  },
  {
    id: 'manga',
    name: 'Manga',
    type: 'read',
    iconName: 'BookOpen',
    badge: 'Japanese Comics',
    description: 'Top printed manga masterworks and long-running serials.',
    topTen: [
      { rank: 1, title: 'One Piece', imageUrl: '/images/manga/1-one-piece.webp', status: 'Reading' },
      { rank: 2, title: 'Berserk', imageUrl: '/images/manga/2-berserk.webp', status: 'Reading' },
      { rank: 3, title: 'The World God Only Knows', imageUrl: '/images/manga/3-twgok.webp', status: 'Completed' },
      { rank: 4, title: 'Sora no Otoshimono', imageUrl: '/images/manga/4-sora-no-otoshimono.webp', status: 'Completed' },
      { rank: 5, title: 'Koe no Katachi', imageUrl: '/images/manga/5-koe-no-katachi.webp', status: 'Completed' },
      { rank: 6, title: 'ReLIFE', imageUrl: '/images/manga/6-relife.webp', status: 'Completed' },
      { rank: 7, title: 'Tokidoki', imageUrl: '/images/manga/7-tokidoki.webp', status: 'Completed' },
      { rank: 8, title: 'Chainsaw Man', imageUrl: '/images/manga/8-chainsaw-man.webp', status: 'Completed' },
      { rank: 9, title: 'Bokura wa Minna Kawai-sou', imageUrl: '/images/manga/9-kawaisou.webp', status: 'Completed' },
      { rank: 10, title: 'Kaguya-sama: Love Is War', imageUrl: '/images/manga/10-kaguya-sama.webp', status: 'Completed' },
    ],
    currentlyConsuming: {
      title: 'Uketsukejou ni Kokuhaku shitakute Guild ni Kayoitsumetara Eiyuu ni Natteta',
      genre: 'Fantasy · Comedy · Romance · Guild',
      status: 'Currently Reading',
      note: 'Also actively reading Spy × Family.',
      imageUrl: '/images/manga/uketsukejou.webp',
    },
  },
  {
    id: 'manhwa',
    name: 'Manhwa',
    type: 'read',
    iconName: 'ScrollText',
    badge: 'Korean Webtoons',
    description: 'Color webtoons, dungeon ascents, and high-stakes action manhwa.',
    topTen: [
      { rank: 1, title: 'The Greatest Estate Developer', imageUrl: '/images/manhwa/1-estate-developer.webp', status: 'Reading' },
      { rank: 2, title: 'What a Bountiful Harvest, Demon Lord!', imageUrl: '/images/manhwa/2-bountiful-harvest.webp', status: 'Reading' },
      { rank: 3, title: 'The Knight Only Lives Today', imageUrl: '/images/manhwa/3-knight-lives-today.webp', status: 'Reading' },
      { rank: 4, title: 'Pick Me Up', imageUrl: '/images/manhwa/4-pick-me-up.webp', status: 'Reading' },
      { rank: 5, title: 'Tyrant of the Tower Defense Game', imageUrl: '/images/manhwa/5-tyrant-tower-defense.webp', status: 'Reading' },
      { rank: 6, title: 'Surviving the Game as a Barbarian', imageUrl: '/images/manhwa/6-surviving-barbarian.webp', status: 'Reading' },
      { rank: 7, title: 'The Demon King wants to Bail', imageUrl: '/images/manhwa/7-demon-king-bail.webp', status: 'Reading' },
      { rank: 8, title: 'Something About Us', imageUrl: '/images/manhwa/8-something-about-us.webp', status: 'Reading' },
      { rank: 9, title: 'A villains Will To live', imageUrl: '/images/manhwa/9-villain-will-to-live.webp', status: 'Reading' },
      { rank: 10, title: 'Solo Leveling', imageUrl: '/images/manhwa/10-solo-leveling.webp', status: 'Completed' },
    ],
    currentlyConsuming: {
      title: 'The Hero Cannot Rest',
      genre: 'Action · Fantasy · Regression · Overpowered Hero',
      status: 'Currently Reading',
      note: 'Latest collection: following weekly new releases',
      imageUrl: '/images/manhwa/the-hero-cannot-rest.webp',
    },
  },
  {
    id: 'hollywood-movies',
    name: 'Hollywood Movies',
    type: 'watch',
    iconName: 'Film',
    badge: 'Cinema',
    description: 'Timeless cinematic masterpieces, sci-fi mindbenders, and award-winning dramas.',
    topTen: [
      { rank: 1, title: 'The Shawshank Redemption', imageUrl: '/images/movies/1-shawshank-redemption.webp', status: 'Watched' },
      { rank: 2, title: 'Forrest Gump', imageUrl: '/images/movies/2-forrest-gump.webp', status: 'Watched' },
      { rank: 3, title: 'Inception', imageUrl: '/images/movies/3-inception.webp', status: 'Watched' },
      { rank: 4, title: 'Green Book', imageUrl: '/images/movies/4-green-book.webp', status: 'Watched' },
      { rank: 5, title: 'Fight Club', imageUrl: '/images/movies/5-fight-club.webp', status: 'Watched' },
      { rank: 6, title: 'The Lord of the Rings: The Return of the King', imageUrl: '/images/movies/6-lotr-return-of-the-king.webp', status: 'Watched' },
      { rank: 7, title: 'The Dark Knight', imageUrl: '/images/movies/7-the-dark-knight.webp', status: 'Watched' },
      { rank: 8, title: 'Interstellar', imageUrl: '/images/movies/8-interstellar.webp', status: 'Watched' },
      { rank: 9, title: 'Shutter Island', imageUrl: '/images/movies/9-shutter-island.webp', status: 'Watched' },
      { rank: 10, title: 'The Godfather', imageUrl: '/images/movies/10-the-godfather.webp', status: 'Watched' },
    ],
  },
  {
    id: 'non-english-movies',
    name: 'Non-English Movies',
    type: 'watch',
    iconName: 'Globe',
    badge: 'World Cinema',
    description: 'Favorite Indian, Korean, and international cinematic masterworks.',
    topTen: [
      { rank: 1, title: "'96", imageUrl: '/images/non-english-movies/1-96.webp', status: 'Watched' },
      { rank: 2, title: 'Ghajini', imageUrl: '/images/non-english-movies/2-ghajini.webp', status: 'Watched' },
      { rank: 3, title: 'Ajab Prem Ki Ghazab Kahani', imageUrl: '/images/non-english-movies/3-ajab-prem-ki-ghazab-kahani.webp', status: 'Watched' },
      { rank: 4, title: 'Ratsasan', imageUrl: '/images/non-english-movies/4-ratsasan.webp', status: 'Watched' },
      { rank: 5, title: '777 Charlie', imageUrl: '/images/non-english-movies/5-777-charlie.webp', status: 'Watched' },
      { rank: 6, title: 'New World (신세계)', imageUrl: '/images/non-english-movies/6-new-world.webp', status: 'Watched' },
      { rank: 7, title: 'Maharaja', imageUrl: '/images/non-english-movies/7-maharaja.webp', status: 'Watched' },
      { rank: 8, title: 'Vikram Vedha', imageUrl: '/images/non-english-movies/8-vikram-vedha.webp', status: 'Watched' },
      { rank: 9, title: 'Vikram', imageUrl: '/images/non-english-movies/9-vikram.webp', status: 'Watched' },
      { rank: 10, title: 'Bethlehem Kudumba Unit', imageUrl: '/images/non-english-movies/10-bethlehem-kudumba-unit.webp', status: 'Watched' },
    ],
  },
];
