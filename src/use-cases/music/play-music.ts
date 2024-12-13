import database from "../../music.database";
import HttpError from "../../utils/error";

function playMusic(musicId: number) {
    let music = database.musics.find((m) => m.id === musicId)

    if(!music) {
        throw new HttpError(404, 'music not found')
    }

    database.playingMusics.push({
        album: music.album,
        duration: music.duration,
        id: musicId,
        name: music.name
    })
    

}

export default playMusic

