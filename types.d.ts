declare module 'instagram-web-api';
declare module 'xhr2';
declare module 'filereader';

interface NavButton {
  label: string;
  path: string;
  dropdown: Dropdown[];
}

interface Dropdown {
  path: string;
  label: string;
}
