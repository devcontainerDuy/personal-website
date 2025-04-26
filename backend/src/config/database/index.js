import mongoose from "mongoose";

export default async function connectDatabase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/personal_website_dev", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connect successfully to MongoDB');
    } catch (error) {
        console.error('❌ Connect failed to MongoDB', error);
        process.exit(1);
    }
}