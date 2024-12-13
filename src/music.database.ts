
interface Music {
    id:number
    name: string
    album: string
    duration: number

}

interface Playlist {
    id: number,
    name: string,
    musics: Music[]
}

interface User {
    id: number;
    username: string;
    password: string,
    email: string;
  }

const database: { musics: Music[], playlists: Playlist[], playingMusics: Music[], users: User[] } = {
    musics: [
        {
            id: 1,
            name: "Lineker - zero",
            album: "Caju",
            duration: 240
        },
        {
            id: 2,
            name: "é tudo - caju pra baixo",
            album: "Caju",
            duration: 240
        },
        {
            id: 3,
            name: "Falamansa - coincidencia",
            album: "falamanda",
            duration: 240
        },
        {
            id: 4,
            name: " a noite",
            album: "natanzinho",
            duration: 240
        }
    ],
    playlists: [],

    playingMusics: [],
    users:[]
}

export default database