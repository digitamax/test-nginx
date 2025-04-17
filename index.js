const express = require("express")
const path = require("path")
const app = express()
const port = 3000


app.use("/client",express.static(path.join(__dirname, "client")))
app.use("/css",express.static(path.join(__dirname, "client/css")))

app.get("/", (req, res) => {
    console.log("Serving from: ", process.env.APP_NAME || "Default App")
    res.sendFile(path.resolve("client","index.html"))
})

app.get("/apropos", (req, res) => {
    console.log("Serving from: ", process.env.APP_NAME || "Default App")
    res.sendFile(path.resolve("client","apropos.html"))
})

app.listen(port, '0.0.0.0', () => {
    console.log("App Listening on port: ", port)
})