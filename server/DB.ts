import mongoose from 'mongoose';
const uri = "mongodb://0.0.0.0:27017/recruitWorkers";
const connectDB = async () => {
    await mongoose.connect(uri);
};
const database = mongoose.connection;
database.on('error', (error: Error) => {
    console.log(error);
})
database.once('connected', () => {
    console.log('Database Connected');
})
export default connectDB;