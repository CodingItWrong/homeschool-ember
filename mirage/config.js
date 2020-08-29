// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  this.post('/oauth/token', () => {
    return {
      access_token: 'fake_access_token',
      token_type: 'bearer',
      expires_in: 7200,
      created_at: 1531855327,
    };
  });

  this.get('/days');
  this.get('/days/:id');

  this.get('/students');
}
