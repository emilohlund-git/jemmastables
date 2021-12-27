import { HORSE_CATEGORIES } from '../utils/constants';

const navButtons: NavButton[] = [
  {
    label: 'startsida',
    path: '/',
    dropdown: [],
  },
  {
    label: 'anläggningen',
    path: '/anlaggningen',
    dropdown: [
      {
        label: 'stallet',
        path: '/anlaggningen/stallet',
      },
      {
        label: 'lösdriften',
        path: '/anlaggningen/losdriften',
      },
      {
        label: 'hagarna',
        path: '/anlaggningen/hagarna',
      },
      {
        label: 'ridbanan',
        path: '/anlaggningen/ridbanan',
      },
    ],
  },
  {
    label: 'hästar',
    path: '/hastar',
    dropdown: [
      {
        label: HORSE_CATEGORIES.Tävlingshästar,
        path: '/hastar/tavlingshastar',
      },
      {
        label: HORSE_CATEGORIES.Unghästar,
        path: '/hastar/unghastar',
      },
      {
        label: HORSE_CATEGORIES.Avelsto,
        path: '/hastar/avelsto',
      },
    ],
  },
  {
    label: 'samarbetspartners',
    path: '/samarbetspartners',
    dropdown: [],
  },
  {
    label: 'mitt konto',
    path: '/profile',
    dropdown: [],
  },
  {
    label: 'bokning',
    path: '/bokning',
    dropdown: [],
  },
];

export default navButtons;
