export const routes = {
  joinToUs: {
    href: '/join-to-us',
    title: 'Join to us',
    display: {
      logged: false,
      unLogged: true,
    },
  },
  events: {
    href: '/events',
    title: 'Events',
    display: {
      logged: true,
      unLogged: true,
    },
  },
  users: {
    href: '/users',
    title: 'Users',
    display: {
      logged: false,
      unLogged: false,
    },
  },
  myAccount: {
    href: '/my-account',
    title: 'My account',
    display: {
      logged: true,
      unLogged: false,
    },
  },
};
