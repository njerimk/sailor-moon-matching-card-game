import {mongoose, Card} from '../config.js'

const { Schema } = mongoose;

const CardSchema = new Schema(
    { 
        frontImg:{
            type: String,
            required: true,
        }, 
        backImg:{
            type: String,
            required: true,
        },
        flipped:{
            type: Boolean,
            required: true,
        } ,
        pair_name:{
            type: String,
            required: true,
        }, 
        game: {
            type: Schema.Types.ObjectId,
            ref: "Game"
        }
        

    })


export default Card;

export { CardSchema };