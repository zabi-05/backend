import { Person } from "../models/personModel.js";

export const getPerson = async (req, res) => {
  try {
    const newRestaurant = await Person.find();
    return res.status(201).json(newRestaurant);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

export const createPerson = async (req, res) => {
  try {
    const person = await Person.findOne({name:req.body.name})
    if(person){
       return res.status(400).json({ error: 'person already exsist' }); 
    }
    await Person.insertOne(
        req.body
    )
    return res.status(201).json(req.body);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

export const getSinglePerson = async (req, res) => {
  const id = req.params.id;

  try {
   const person = await Person.find({ _id: id });

    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }

    return res.status(200).json(person);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

export const deleteSinglePerson = async(req,res)=>{
    const id = req.params.id
    try {
        await Person.findOneAndDelete({_id:id})
      return res.status(200).send("Deleted successfully");
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

export const deleteAllPerson = async (req, res) => {
  try {
    await Person.deleteMany({});
    return res.status(200).send("All persons deleted successfully");
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}


export const updatePerson = async (req, res) => {
  const id = req.params.id;
  const update = req.body;

  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { _id: id },
      update,
      { new: true, runValidators: true } 
    );

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    return res.status(200).json(updatedPerson);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}