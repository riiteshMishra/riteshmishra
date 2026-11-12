import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  (process.env.NODE_ENV === "production"
    ? ""
    : "mongodb://127.0.0.1:27017/ritesh-mishra-portfolio");

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is required in production (MongoDB Atlas).");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI as string, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
