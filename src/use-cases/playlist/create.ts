import database from "../../music.database";

function createPlaylist(name: string) {
    database.playlists.push({
        id:1 + database.playlists.length,
        musics: [],
        name: name

    })
    return database.playlists
}
export default createPlaylist