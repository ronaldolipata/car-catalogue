import app from './app.js';
import carRouters from './routes/cars.js';

app.use('/cars', carRouters);

app.listen(app.get('port'), function () {
  console.log(`App is listening to port ${app.get('port')}`);
});
