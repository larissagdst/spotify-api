import database from "../../music.database";

function deleteMusic(id:number) {
    let r = database.musics.filter(m => m.id !== id)
    database.musics = r
    return r
}

export default deleteMusic