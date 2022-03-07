const express = require("express");

const  app = express();

app.get("/book", (req,res)=>{
    res.send({ route: "/books"})
})

app.get("/libraries", checkPermission('librarian'),(req,res)=>{
    res.send( { route: "/libraries", permission: true})
})
app.get("/author", checkPermission('author'),(req,res)=>{
    res.send( { route: "/author", permission: true})
})

function checkPermission(data) {

    return function logger(req,res,next) {

        if (data =='author' ||data=='librarian') {
            return next()
        }

       return res.status(404).send('Data is not found')
    }
}

app.listen(1234,()=>{
    console.log('Listening on Port 1234')
})
