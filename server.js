import express from 'express';
import cors from 'cors';


PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
