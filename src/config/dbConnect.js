import mongoose from "mongoose"

mongoose.connect("mongodb+srv://goulart:Alexandre2006@curso-da-alura.flfrmni.mongodb.net/curso-alua-node");

let db = mongoose.connection;

export default db;