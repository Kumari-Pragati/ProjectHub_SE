const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Parth:sabsealag07@cluster0.mb3rikn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
    console.log("No Connection")
})
