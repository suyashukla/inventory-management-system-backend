import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;

export const MongoDBURL = process.env.DB_CONNECTIONSTRING;
