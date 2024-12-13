import express from 'express';
import music from './routes/music.routes';
import bodyParser from 'body-parser'
import listMusic from './use-cases/music/list-music';
import playlist from './routes/playlist.routes';
import auth from './routes/auth.routes';

const app= express()
const port = 3000
app.use(bodyParser.json())
app.use(music)
app.use(playlist)
app.use(auth)

app.get('/', (req, res) => {
    res.send('oii')
})

app.listen(port, () => {
    console.log('rodando')
})