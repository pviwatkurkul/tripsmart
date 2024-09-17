import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from  "./routes/auth.routh.js";
const app = express();

dotenv.config();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 8080;
const MONGO = process.env.CONNECTION_URL;

app.get("/", (req, res) => {
    res.send("Hello Word!");
}); 

app.use("/api/auth", authRoutes);
mongoose.connect(MONGO)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.error(error));

