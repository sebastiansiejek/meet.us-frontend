export const routes: {
  [key: string]: {
    href: string;
    title: string;
    display: {
      logged: boolean;
      unLogged: boolean;
    };
  };
} = {
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
      logged: true,
      unLogged: true,
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
