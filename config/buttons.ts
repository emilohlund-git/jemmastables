import React from "react";

const navButtons: NavButton[] = [
  {
    label: "startsida",
    path: "/",
    dropdown: [],
  },
  {
    label: "anläggningen",
    path: "/anlaggningen",
    dropdown: [
      {
        label: "stallet",
        path: "/anlaggningen/stallet",
      },
      {
        label: "lösdriften",
        path: "/anlaggningen/losdriften",
      },
      {
        label: "hagarna",
        path: "/anlaggningen/hagarna",
      },
      {
        label: "ridbanan",
        path: "/anlaggningen/ridbanan",
      },
    ],
  },
  {
    label: "hästar",
    path: "/hastar",
    dropdown: [
      {
        label: "tävlingshästar",
        path: "/anlaggningen/tavlingshastar",
      },
      {
        label: "unghästar",
        path: "/anlaggningen/unghastar",
      },
      {
        label: "avelsto",
        path: "/anlaggningen/avelsto",
      },
    ],
  },
  {
    label: "samarbetspartners",
    path: "/samarbetspartners",
    dropdown: [],
  },
  {
    label: "bokning",
    path: "/bokning",
    dropdown: [],
  },
];

export default navButtons;
