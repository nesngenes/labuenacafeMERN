import mongoose from "mongoose";
import CafeData from '../models/cafes.js';



export const getCafes = async(req,res) => {
    const cafeDatas = await CafeData.find()

    try {
        
        res.status(200).json(cafeDatas);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}



export const createCafe = async(req,res) => {
    const {cafeName, state, description, long, lat, selectedFile} = req.body;
    const newCafeData = new CafeData({cafeName, state, description, long, lat, selectedFile})

    try {
        await newCafeData.save();
        res.status(201).json(newCafeData);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateCafe = async(req,res) => {
    const {id} = req.params;
    const {cafeName, state, description, long, lat, selectedFile} = req.body;

    try {

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No cafe with id: ${id}`);

        const updatedCafe = {cafeName, state, description, selectedFile, long, lat, _id: id};

        await CafeData.findByIdAndUpdate(id, updateCafe, {new: true});

        res.status(201).json(updatedCafe);

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteCafe = async(req,res) => {
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Cafe with that id`);
        
        await CafeData.findByIdAndRemove(id)

        res.json({message: 'Menu successfully deleted '})

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
  