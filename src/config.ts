export const SITE = {
  website: "https://swift-baguette.fr/", // replace this with your deployed domain
  author: "Nicolas Bouème",
  profile: "https://swift-baguette.fr/about",
  desc: "Le blog d'un français au Japon. Développeur iOS, Swift.",
  title: "Swift Baguette",
  ogImage: "swift-baguette-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showTags: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/ikaros-nb/swift-baguette/edit/master/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "fr", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Paris", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
