import database from "../../music.database"

function updatePlaylist(id: number, name: string) {
    let p = database.playlists.map((playlist) => playlist.id === id ? {...playlist, name} : playlist)
    return database.playlists = p
}
export default updatePlaylist