import database from "../../music.database";

function updateMusics(id: number, name: string, duration: number, album: string) {
   let m = database.musics.map((music) => music.id === id ? {...music, name: name, duration: duration, album: album }: music )
   database.musics = m

    return m

}
export default updateMusics