import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sungbinlee.dev/", // replace this with your deployed domain
  author: "Sungbin Lee (이승빈)",
  desc: "생각을 정리하기 위한 공간입니다.",
  title: "sungbinlee.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "ko", // html lang code. Set this empty and default will be "en"
  langTag: ["ko-KR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sungbinlee",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  // {
  //   name: "LinkedIn",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on LinkedIn`,
  //   active: true,
  // },
  {
    name: "Mail",
    href: "mailto:isungbin99@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
