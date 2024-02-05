import express from 'express'
import bodyParser from 'body-parser'
import userroutes from './routes/users.js'
const app = express()
app.use(bodyParser.json())

app.use('/users',userroutes)

app.get('/',(req,res)=>{
    console.log('Test')
    res.send('Hello from Home') 
})

app.listen(7000, () => {
    console.log('Server is Running on port 7000')
})