import { Router } from "express";
import listPlaylist from "../use-cases/playlist/list";
import createPlaylist from "../use-cases/playlist/create";
import updatePlaylist from "../use-cases/playlist/update";
import database from "../music.database";
import deletePlaylist from "../use-cases/playlist/delete";
import addMusic from "../use-cases/playlist/add-music";
import deleteMusicPlaylist from "../use-cases/playlist/delete-music";

const playlist = Router()

playlist.get('/playlist', (req, res) => {
    res.json(listPlaylist())
})

playlist.post('/playlist', (req, res): any => {
    if(!req.body.name) {
        return res.status(400).json({message: 'nome obrigatorio da playlist'})
    }
    res.json(createPlaylist(req.body.name))

})

playlist.put('/playlist/:id', (req, res): any => {
    if(!database.playlists.find((p) => p.id === Number(req.params.id))) {
        return res.status(404).json({message: 'not found'})
    }
    res.json(updatePlaylist(Number(req.params.id), req.body.name))
})

playlist.delete('/playlist/:id', (req, res): any => {
    res.json(deletePlaylist(Number(req.params.id)))

})

playlist.post('/playlist/:playlistId/music/:musicId', (req, res): any => {
    try{
        res.json(addMusic(Number(req.params.playlistId), Number( req.params.musicId)))

    }catch(error: any) {
        res.status(error.status).json({message: error.message})
    };
})

playlist.delete('/playlist/:playlistId/music/:musicId', (req, res): any => {
    try{
        res.json(deleteMusicPlaylist(Number(req.params.playlistId), Number(req.params.musicId)))

    }catch(error: any) {
        res.status(error.status).json({message: error.message})
    }
})

export default playlist