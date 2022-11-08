const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000 ;

// middele were 

app.use(cors());





app.get('/', (req,res)=>{
    res.send('Laywer server site running ...')
})


app.listen(port,()=>{

    console.log(`Laywer server running ${port}`)
})
