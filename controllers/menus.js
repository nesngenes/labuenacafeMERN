import mongoose from 'mongoose';
import MenuData from '../models/menus.js';

export const getMenus = async(req, res) => {
    try {
      const menuDatas = await MenuData.find();

      res.status(200).json(menuDatas);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
}

export const createMenu = async (req, res) => {
  const {menuName, variant, price, selectedFile, description} = req.body;
  const newMenuData = new MenuData({menuName, variant, price, description, selectedFile})

  try {
    await newMenuData.save();
    res.status(201).json(newMenuData);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

export const updateMenu = async (req, res) => {
  const {id} = req.params;
  const {menuName, variant, price, selectedFile, description} = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No menu with id: ${id}`);

  const updatedMenu = {menuName, variant, price, description, selectedFile, _id: id};

  await MenuData.findByIdAndUpdate(id, updatedMenu, {new: true});

  res.json(updatedMenu);
}

export const deleteMenu = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No menu with id: ${id}`);

  await MenuData.findByIdAndRemove(id);

  res.json({message: "Menu deleted successfully"})
}

export const getMenusByVariant = async (req,res) => {
  const {variant} = req.query;
  try {
    const menuDatas = await MenuData.find({variant})
    
    res.status(200).json(menuDatas);
    
  } catch (error) {
    res.status(404).json('error')
  }
}