import mongoose from 'mongoose';

export default async function mongooseService(hostOrUri, dbName, user, pass) {
  mongoose.connect(hostOrUri, {
    dbName,
    user,
    pass,
  });

  mongoose.connection.on('connected', function () {
    console.log('Connected to MongoDB');
  });
}
