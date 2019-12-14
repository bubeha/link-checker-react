import Auth from '../../models/Auth'

export const login = (auth: Auth) => ({
  type: 'LOGIN',
  auth: auth,
});


