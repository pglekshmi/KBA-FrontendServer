import express from 'express';
import path from 'path';

import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
const app=express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.redirect('/sign-up.html');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});