import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    menuName: String,
    variant: String,
    selectedFile: String,
    price: Number,
    description: String
});

const Menus = mongoose.model('Menus', menuSchema);

export default Menus;