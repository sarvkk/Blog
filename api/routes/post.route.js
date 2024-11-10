import express from 'express'
import {verifyToken} from '../utils/verifyUser.js'
import {getposts} from '../controllers/post.controller.js'
import {create,deletePost, updatepost} from '../controllers/post.controller.js'

const router=express.Router()
router.post('/create',verifyToken,create)
router.get('/getposts',getposts)
router.delete('/delete/:postId/:userId',verifyToken,deletePost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)

export default router