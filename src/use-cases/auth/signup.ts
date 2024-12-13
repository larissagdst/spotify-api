import database from "../../music.database";
import HttpError from "../../utils/error";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

function signup(username: string, password: string, email: string) {    
    const existUser = database.users.find(user => user.username === username);
    if (existUser) {
      throw new HttpError(404, "ja exist")      
    }

    if(!password) {
      throw new HttpError(400, 'precisa informar a senha')
    }

    const hasPassword = bcrypt.hashSync(password, 10) 
    let user = { 
      email: email,
      id: 1 + database.users.length,
      password: hasPassword,
      username: username
    }
    database.users.push(user)

    
    const token = jwt.sign({
      id: user.id, email: user.email
    }, String(process.env.JWT_SECRET), {
      expiresIn: '1d'
    })

    return {
      token
    }
}

export default signup