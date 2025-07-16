import mongoose, { mongo } from "mongoose";
import { CachedRouteKind } from "next/dist/server/response-cache";
import { cache } from "react";

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null}
}

async function connectDB() {
    
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommand: false
        }

        cached.promise = mongoose.connect('${process.env.MONGODB_URI}/quikcart',opts).then( mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
    
}

export default connectDB