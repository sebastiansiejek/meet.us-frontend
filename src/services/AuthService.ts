class AuthService {
  static getToken() {
    return typeof window !== 'undefined' && localStorage.getItem('token');
  }
}

export default AuthService;
