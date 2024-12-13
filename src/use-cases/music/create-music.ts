import database from "../../music.database";

function createMusic(name: string, duration: number, album: string) {
    database.musics.push({
        id: 1 + database.musics.length,
        album: album,
        duration: duration,
        name: name
    })
    return database.musics
}

export default createMusic