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

  this.get('/contents/:id');

  this.get('/content-days');
  this.get('/content-days/:id');

  this.get('/content-weeks/:id');

  this.get('/content-years');
  this.get('/content-years/:id');
  this.patch('/content-years/:id');

  this.get('/days');
  this.post('/days');
  this.get('/days/:id');
  this.delete('/days/:id');

  this.post('/schedulings');
  this.patch('/schedulings/:id');

  this.post('/student-days');

  this.get('/students');

  this.get('/subjects');
  this.post('/subjects');
  this.delete('/subjects/:id');
}
