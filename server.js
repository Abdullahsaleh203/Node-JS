import express from 'express';

PORT = process.env.PORT || 3000;
const app = express();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
