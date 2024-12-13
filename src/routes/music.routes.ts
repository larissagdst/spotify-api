import {response, Router} from 'express'
import listMusic from "../use-cases/music/list-music"
import database from '../music.database'
import createMusic from '../use-cases/music/create-music'
import updateMusics from '../use-cases/music/update-music'
import deleteMusic from '../use-cases/music/delete-music'



const music = Router()

music.get('/music', (req, res) => {
   res.json(listMusic())
}) 

music.post('/music', (req, res): any => {

   if(!req.body.name) {
      return res.status(400).json({message: 'precisa cadastra com nome'})
   }
   if(!req.body.duration) {
      return res.status(400).json({message: 'precisa da duração para cadastrar'})
   }
   if(!req.body.album) {
      return res.status(400).json({message: 'precisa de album'})
   }
   res.json(createMusic(req.body.name, req.body.duration, req.body.album))
   

})
music.put('/music/:id', (req, res): any => { 
   if(!database.musics.find((m) => m.id === Number(req.params.id))) {
      return res.status(404).json({message: 'not found'})
   }
  
   if(!req.body.name) {
      return res.status(400).json({message: 'precisa cadastra com nome'})
   }
   if(!req.body.duration) {
      return res.status(400).json({message: 'precisa da duração para cadastrar'})
   }
   if(!req.body.album) {
      return res.status(400).json({message: 'precisa de album'})
   }
   res.json(updateMusics(Number(req.params.id), req.body.name, req.body.duration, req.body.album))

})

music.delete('/music/:id', (req, res) => {
   res.json(deleteMusic(Number(req.params.id)))
})

music.post('/music/:id/play', (req, res) => {
   
   
})



export default music

