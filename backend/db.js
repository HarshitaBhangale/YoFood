const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://habhangale:8871413933@cluster0.sg3gkbg.mongodb.net/YoFood";

const mongodb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const foodItems = mongoose.connection.db.collection("food-items");
        const data = await foodItems.find({}).toArray();
        const foodCategory = mongoose.connection.db.collection("food-Category");
        const catData = await foodCategory.find({}).toArray();

        global.foodItems = data;
        global.foodCategory = catData;
        
        // console.log("Data:", global.foodItems);
        // return data;
        

    } 
    catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = mongodb;





