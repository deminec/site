import express from "express"
const app = express();
app.get('/', (req, res) =>
{
    res.send("Hello, World!");
})

const port = process.env.port || 8080
app.listen(port, () => console.log('listen port: ', port))