import app from './app.js';

app.listen(app.get('port'), function () {
  console.log(`App is listening to port ${app.get('port')}`);
});
