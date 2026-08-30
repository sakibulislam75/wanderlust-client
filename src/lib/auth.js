import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { jwt } from 'better-auth/plugins';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('wanderlust');

export const auth = betterAuth({
   baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
   trustedOrigins: ['https://wanderlust-client-theta.vercel.app'],
   // 'http://localhost:3000'
   emailAndPassword: {
      enabled: true,
   },
   socialProviders: {
      google: {
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
   },
   database: mongodbAdapter(db, {
      // Optional: if you don't provide a client, database transactions won't be enabled.
      client,
   }),
   session: {
      cookieCache: {
         enabled: true,
         strategy: 'jwt',
         //max 7 days
         maxAge: 7 * 24 * 60 * 60,
      },
   },
   plugins: [jwt()],
});
