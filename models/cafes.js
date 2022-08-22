import mongoose from 'mongoose';

const cafeSchema = mongoose.Schema({
    cafeName: String,
    state: String,
    description: String,
    selectedFile: String,
    long: Number,
    lat: Number
})

const Cafes = mongoose.model('Cafes', cafeSchema);

export default Cafes;