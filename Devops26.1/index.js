const express = require("express")

const app = express();


app.get("/",(req,res)=>{

    res.send("hello bc")

})

app.listen(3000)
console.log("running on port 3000")

console.log("se env example")

//just checking out env 
console.log(process.env.SECRET);

