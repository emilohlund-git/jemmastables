import React from "react";

const navButtons: NavButton[] = [
  {
    label: "startsida",
    path: "/",
    dropdown: [],
  },
  {
    label: "anläggningen",
    path: "/anläggningen",
    dropdown: [
      {
        label: "stallet",
        path: "/anläggningen/stallet",
      },
      {
        label: "lösdriften",
        path: "/anläggningen/lösdriften",
      },
      {
        label: "hagarna",
        path: "/anläggningen/hagarna",
      },
      {
        label: "ridbanan",
        path: "/anläggningen/ridbanan",
      },
    ],
  },
  {
    label: "hästar",
    path: "/hästar",
    dropdown: [
      {
        label: "tävlingshästar",
        path: "/anläggningen/tävlingshästar",
      },
      {
        label: "unghästar",
        path: "/anläggningen/unghästar",
      },
      {
        label: "avelsto",
        path: "/anläggningen/avelsto",
      },
    ],
  },
  {
    label: "bokning",
    path: "/bokning",
    dropdown: [],
  },
  {
    label: "samarbetspartners",
    path: "/samarbetspartners",
    dropdown: [],
  },
];

export default navButtons;
