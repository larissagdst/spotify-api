import database from "../../music.database";
import HttpError from "../../utils/error";

function deleteMusicPlaylist(playlistId: number, musicId: number) {
    let p = database.playlists.find((p) => p.id === playlistId)
    let m = database.playlists.find((m) => m.id === musicId)

    if(p?.musics.find((m) => m.id != musicId)) {
        throw new HttpError(400, 'musica n foi encontrada')
    }

    if(!p) {
        throw new HttpError(404, 'playlist not found')
    }

    if(!m) {
        throw new HttpError(404, 'msucia not found')
    }

    let del = p.musics.filter(m => m.id !== musicId)
    p.musics = del

    return p
}

export default deleteMusicPlaylist