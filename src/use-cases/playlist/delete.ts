import database  from "../../music.database"

function deletePlaylist(id: number) {
    let p = database.playlists.filter((p) => p.id !== id)
    database.playlists = p
    return p

}
export default deletePlaylist