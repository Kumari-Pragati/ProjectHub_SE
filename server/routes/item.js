const express = require("express");
const router = express.Router();
const itemModel = require("../db/itemModel.js");
const userModel = require("../db/userModel.js");
const path = require("path");
const { Console, log } = require("console");
const { CLIENT_RENEG_WINDOW } = require("tls");

const mongoose=require("mongoose")


//get all recipes
router.get("/",async (req,res)=>{
    try {
    const recipes = await itemModel.find({});
    res.json(recipes);    
    } catch (error) {
        res.send({msg:error});
    }
    
});

router.patch("auction/:id",async(req,res)=>{
    try{
        const item_id = req.params['id']
        const item = await itemModel.findById(item_id);
        if(item){
            res.json(item)
        }else{
            res.send("item not found")
        }

    }catch(error){
        res.send({msg:error})
    }
})



// verifying before creating new recipe
/*


router.post("/create-item",async (req,res)=>{
    try {
    const {userId,name,description,basePrice,imageUrl,category,startTime,endTime} = req.body;
    console.log(userId)
    const user = await userModel.findById(userId);
    console.log(user)
     const newItem = await itemModel.create({
        name,
        description,
       basePrice,
        imageUrl,
        startTime,
        endTime,
        ItemOwner:user._id,
        category
    });
    console.log(user.postedAuctions);
    user.postedAuctions.push(newItem._id);
    await user.save();
    console.log(user);
    return res.json(newItem);   
    } catch (error) {
        res.send({msg:error});
    }
});

*/

router.post("/create-item", async (req, res) => {
    try {
        const { userId, name, description, basePrice, imageUrl, category, startTime, endTime } = req.body;

        console.log("Received userId:", userId);
        const userIdObj = mongoose.Types.ObjectId.createFromHexString(userId);
console.log(userIdObj);
const user = await userModel.findById(userIdObj);

        
        if (!user) {
            console.error("User not found for userId:", userId);
            return res.status(404).json({ msg: "User not found" });
        }

        console.log("Retrieved user:", user);

        const newItem = await itemModel.create({
            name,
            description,
            basePrice,
            imageUrl,
            startTime,
            endTime,
            ItemOwner: user._id,
            category
        });

        console.log("Created item:", newItem);

        console.log("Updated postedAuctions:", user.postedAuctions);

        user.postedAuctions.push(newItem._id);
        await user.save();

        console.log("Updated user:", user);

        return res.json(newItem);
    } catch (error) {
        console.error("Error creating item:", error);
        return res.status(500).json({ msg: "Error creating item", error: error.message });
    }
});






router.post("/profile",async(req,res)=>{
    try {
        const {userId} = req.body;
        const user = await userModel.findById(userId);
        if(user){
            return res.json(user);
        }
    } catch (error) {
        
    }
})





module.exports = router;