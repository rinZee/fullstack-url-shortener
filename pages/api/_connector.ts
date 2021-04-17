import { MongoClient } from 'mongodb';
import { execOnce } from 'next/dist/next-server/lib/utils';

let cacheDb;

export async function connectToDatabase() {
    if (cacheDb) {
        return cacheDb; 
    }
    const client = new MongoClient(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true });
    cacheDb = client;
    return await client.connect();
}