import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://devtaveira:<devtaveira123>@cluster0.wx92j6c.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('Desconectado do MongoDB');
  } catch (error) {
    console.error('Erro ao desconectar do MongoDB:', error.message);
    process.exit(1);
  }
};

export { connectDB, disconnectDB };
