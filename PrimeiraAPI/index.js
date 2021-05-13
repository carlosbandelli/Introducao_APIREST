const express = require("express")
const app = express()

app.use(express.urlencoded({extend: false}))
app.use(express.json())



var DB = {
    games:[
        {
            id: 23,
            title: "Call of duty BO II",
            year: 2013,
            price: 60
        },
        {
            id: 65,
            title: "Kingdom Hearts",
            year: 2020,
            price: 40
        },
        {
            id: 2,
            title: "League of legends",
            year: 2021,
            price: 20
        }
    ]
}


app.get("/", () => {
    
})




app.listen(45678,()=> {
    console.log("API RODANDO!")
})