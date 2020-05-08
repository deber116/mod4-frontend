export const signIn = user => {
    return {
      type: 'SIGN_IN',
      username: user.username,
      userId: user.id
    };
};

export const logout = user => {
  return {
    type: 'LOGOUT',
  };
};