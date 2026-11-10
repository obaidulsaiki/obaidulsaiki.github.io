export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  details: string[];
  quote?: string;
  tags: string[];
}

export const hobbiesData: HobbyItem[] = [
  {
    id: 'audio-acoustics',
    title: 'Audio, Lo-Fi & Acoustic Soundscapes',
    category: 'Creative Pursuit',
    iconName: 'Headphones',
    description:
      'A deep appreciation for ambient electronic soundscapes, synth textures, and continuous lo-fi beats that fuel intense late-night deep learning and coding sessions.',
    details: [
      'Fascinated by sound synthesis, frequency modulation, and bio-acoustic wave patterns.',
      'Curates personalized focus playlists blending ambient neoclassical, binaural beats, and chillhop.',
      'Inspired by the intersection of acoustic signal processing and computational music.',
    ],
    quote: '"Sound is just structured frequency — much like EEG signals in time-frequency space."',
    tags: ['Acoustic Signals', 'Lo-Fi Focus', 'Ambient Soundscapes'],
  },
  {
    id: 'minimal-photography',
    title: 'Visual Aesthetics & Street Geometry',
    category: 'Visual Arts',
    iconName: 'Camera',
    description:
      'Finding visual harmony in everyday street scenes, brutalist architectural angles, natural shadows, and minimal compositions around Dhaka.',
    details: [
      'Focusing on high-contrast lighting, symmetry, and geometric framing.',
      'Deep connection between natural human visual perception and computer vision feature extractors.',
      'Appreciation for clean design tokens, minimalist typography, and warm analog color grading.',
    ],
    quote: '"Learning how light reflects in physical space shapes how I think about computer vision filters."',
    tags: ['Visual Composition', 'Street Aesthetics', 'Minimalism'],
  },
  {
    id: 'chess-problem-solving',
    title: 'Chess & Strategic Puzzles',
    category: 'Strategic Games',
    iconName: 'Gamepad2',
    description:
      'Engaging with tactical puzzle rushes and rapid chess matches to exercise spatial intuition, tree-search foresight, and decision-making under time constraints.',
    details: [
      'Analyzing game opening systems, pawn structures, and endgame positional advantages.',
      'Enjoying how minimax tree search and alpha-beta pruning principles mirror game AI theory.',
      'Daily 10-minute puzzle challenges to keep tactical pattern recognition sharp.',
    ],
    tags: ['Tactical Puzzles', 'Chess Strategy', 'Pattern Recognition'],
  },
  {
    id: 'tech-reading-curiosity',
    title: 'Reading Preprints & Technology Trends',
    category: 'Curiosity & Learning',
    iconName: 'BookOpen',
    description:
      'Habitual reading of fresh arXiv preprints on medical imaging, State Space Models (Mamba), and emerging open-source AI developer tools.',
    details: [
      'Browsing top machine learning repositories and Hugging Face daily papers.',
      'Exploring new developer tools and agentic coding workflows (Antigravity, Claude Code, Codex).',
      'Documenting interesting architectural concepts into personal research logs.',
    ],
    tags: ['arXiv Preprints', 'Emerging Tech', 'Open Source'],
  },
];

