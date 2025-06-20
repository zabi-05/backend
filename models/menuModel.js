import mongoose from "mongoose";
const menuItemSchema = mongoose.Schema({
name:{
    type:String,
    required:true
},
price:{
type:Number,
required:true
},
taste:{
    type:String,
    enum:['sweet',"sour","spicy"],
    required:true
},
is_drink:{
    type:Boolean,
    default:false

},
ingredients:{
    type:[String],
    enum:[]
},
num_sales:{
    type:Number,
    default:0

}
})

export const MenuItem = mongoose.model("MenuItem",menuItemSchema)