
import database from '../../music.database';
import HttpError from '../../utils/error';
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken';


function signin(username: string, password: string){
  
  const user = database.users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new HttpError(401, "invalid credentials"); 
  }

  const token = jwt.sign({
    id: user.id, email: user.email

  }, String(process.env.JWT_SECRET), {
    expiresIn: '1'
  })

  return {
    token
  }
 
}

export default signin