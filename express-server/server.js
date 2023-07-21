import  express  from "express";

const app = new express();

app.get('/', (req, res) => {
    const user = {
        name: "Sally",
        hobby: "Soccer"
    }
    res.header('Content-Type',"application/json");
    res.send(user);

})

app.listen(3001);