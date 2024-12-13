import { Router } from "express"
import signup from "../use-cases/auth/signup"
import signin from "../use-cases/auth/signin"

const auth = Router()

auth.post('/auth/signin', (req, res): any => {
    try{
        res.json(signin(req.body.username, req.body.password))
    }catch(error: any) {
        res.status(error.status).json({message: error.message})
    }

})

auth.post('/auth/signup', (req, res) => {
    try{
        res.json(signup(req.body.username, req.body.password, req.body.email))

    }catch(error: any) {
        res.status(error.status).json({message: error.message})
    }


})

export default auth