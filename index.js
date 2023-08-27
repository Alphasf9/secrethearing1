import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index", { secret: result.data.secret, user: result.data.username });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
