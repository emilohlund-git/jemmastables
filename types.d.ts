declare module 'xhr2';
declare module 'uuid';
declare module 'tailwindcss-glow';
declare module 'bcryptjs';
declare module 'debounce';
declare module 'redux-persist/lib/storage/createWebStorage';
declare module 'redux-persist/integration/react';
declare module '@themesberg/flowbite';
declare module 'react-grid-gallery';
declare module 'fslightbox-react';
declare module 'simple-react-lightbox';
declare module 'instafeed.js';
declare module 'cslx';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

interface NavButton {
  label: string;
  path: string;
  dropdown: Dropdown[];
}

interface Dropdown {
  path: string;
  label: string;
}

interface PartnerImage {
  alt: string;
  image: string;
  width: number;
  height: number;
}