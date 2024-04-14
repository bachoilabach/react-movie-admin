import * as Icons from "@fortawesome/free-solid-svg-icons";
const Routes = [
  { title: "Movies", icon: Icons.faFilm, link: "/dashboard/Movies" },
  { title: "Categories ", icon: Icons.faIcons, link: "/dashboard/Categories" },
  { title: "Actors", icon: Icons.faUserSecret, link: "/dashboard/Actors" },
  {
    title: "Directors",
    icon: Icons.faClapperboard,
    link: "/dashboard/Directors",
  },
  { title: "Comments", icon: Icons.faComments, link: "/dashboard/Comments" },
  {
    title: "Accounts",
    icon: Icons.faUser,
    gap: true,
    link: "/dashboard/Accounts",
  },
  {
    title: "Statistics",
    icon: Icons.faChartLine,
    link: "/dashboard/Statistics",
  },
  { title: "Log out", icon: Icons.faRightFromBracket, link: "/" },
];

export default Routes;
