const express= require('express')
const app= express()

app.use(express.static('./public'))
app.get('/',(req,res)=>{
    // res.send('Welcome to the Home Page')
    res.redirect('/base.html')
})
app.use('/',(req,res,next)=>{
    console.log("Wooooh!")
    next()
})
app.get('/About',(req,res)=>{
    res.send('Welcome to the About Page')
})
app.get('/Services',(req,res)=>{ 
    res.send('Welcome to the Services Page')
})

app.listen(80,()=>{
        console.log('Server Listening on 80');
    })