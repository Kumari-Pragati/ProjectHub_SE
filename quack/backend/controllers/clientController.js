const clientModel = require('../models/clientModel')

// login call back
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await clientModel.findOne({ email, password });
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.status(200).json({
                success: true,
                user,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
};

// register call back
const registerController = async (req,res) => { 
    try {
        const newUser = new clientModel(req.body)
        await newUser.save()
        res.status(201).json({
            success: true,
            newUser,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        })
    }
};

module.exports = { loginController, registerController };