import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello');
})

console.log(true, 1);


try {

}catch(e) {

}

console.log(true, 2);


app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`)
})