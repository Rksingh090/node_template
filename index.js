const express = require("express")


const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "API / is running"
    })
})

app.get("/test", (req, res) => {
    res.json({
        message: "Test Successfull!!!"
    })
})

app.listen(4000, () => {
    console.log("App running");
})


