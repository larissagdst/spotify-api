import database from "../../music.database";

function listPlaylist() {
    return database.playlists
}

export default listPlaylist