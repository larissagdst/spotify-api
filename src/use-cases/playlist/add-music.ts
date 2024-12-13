import database from "../../music.database";
import HttpError from "../../utils/error";

function addMusic(playlistId: number, musicId: number) {
   let p = database.playlists.find((p) => p.id === playlistId) 
   let m = database.musics.find((m) => m.id === musicId)

   if(p?.musics.find((m) => m.id === musicId) ) {
      throw new HttpError(400, 'musica ja foi cadastrada')

   }

   if(!p) {
    throw new HttpError(404,'playlist not found')
   }

   if(!m) {
      throw new HttpError(404, 'music not found')
   }
   

   
   p?.musics.push({
    album: m!.album,
    duration: m!.duration,
    id: musicId,
    name: m!.name
   })
   return p?.musics


}
export default addMusic