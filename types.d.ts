declare module "instagram-web-api";
declare module "xhr2";
declare module "filereader";
declare module 'uuid';

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
  height: number
}
