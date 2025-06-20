import express from 'express'
import { createMenuItem, deleteMenuItem, getMenuItems, updateMenuItem } from '../controllers/menuItemControllers.js'

export const menuRouter = express.Router()
menuRouter.post('/',createMenuItem)
menuRouter.get('/',getMenuItems)
menuRouter.put('/:id',updateMenuItem)
menuRouter.delete('/:id',deleteMenuItem)