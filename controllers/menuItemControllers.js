import { MenuItem } from "../models/menuModel.js"

export const createMenuItem =async(req,res)=>{
    try {
        const exsistItem = await MenuItem.findOne({name:req.body.name})
        if(exsistItem){
           return res.status(400).json({error:'already exsist'})
        }
        const menuItem = await MenuItem.insertOne(req.body)
        res.status(201).json(menuItem)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
export const getMenuItems=async(req,res)=>{
    try {
        const menuItems = await MenuItem.find()
        res.status(201).json(menuItems)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
export const updateMenuItem= async(req,res)=>{
    const id = req.params.id
    try {
        const menuItems = await MenuItem.findOneAndUpdate({_id:id},req.body,{ new: true, runValidators: true } )
        res.status(201).json(menuItems)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
export const deleteMenuItem=async(req,res)=>{
    const id = req.params.id
    try {
        const menuItems = await MenuItem.findOneAndDelete({_id:id})
        res.status(201).json(menuItems)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}