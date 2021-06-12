export const paths: Array<{
  href: string;
  title: string;
  display: {
    logged: boolean;
    unLogged: boolean;
  };
}> = [
  {
    href: '/join-to-us',
    title: 'Join to us',
    display: {
      logged: false,
      unLogged: true,
    },
  },
  {
    href: '/events',
    title: 'Events',
    display: {
      logged: true,
      unLogged: true,
    },
  },
  {
    href: '/users',
    title: 'Users',
    display: {
      logged: true,
      unLogged: true,
    },
  },
];
