import mongoose from 'mongoose'

const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef', "waiter", "manager"],
        required:true   
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    },
    address:{
        type:String
    }
})

export const Person = mongoose.model('Person',personSchema)

