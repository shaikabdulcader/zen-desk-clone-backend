import express from 'express'
import validate from '../middleware/Validate.js'
import superAdminGuard from '../middleware/SuperAdminGuard.js'
import UserController from '../controllers/users.js'

const router = express.Router()

router.get('/',validate,superAdminGuard,UserController.getAllUsers)
router.post('/',validate,superAdminGuard,UserController.create)
router.delete('/:id',validate,superAdminGuard,UserController.deleteUser)
router.post('/login',UserController.login)

export default router