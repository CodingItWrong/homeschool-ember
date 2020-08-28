export default function () {
  this.post('/oauth/token', () => {
    return {
      access_token: 'fake_access_token',
      token_type: 'bearer',
      expires_in: 7200,
      created_at: 1531855327,
    };
  });
}
