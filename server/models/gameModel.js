import { Schema, model, Types } from "mongoose";


let GameSchema = new Schema({
    didWin: Boolean,
    cards:[{
        type: Schema.Types.ObjectId,
        ref: "Card"
    }]
})

const cardSchema = new Schema({
    frontImg: String,
    backImg: String,
    flipped: Boolean,
    pair_name: String,
    game: {type: Types.ObjectId, ref: "Game"}
})

const Card = model("Card", cardSchema)

// Create a Owner
const game1 = await Game.create({didWin: false})

// Create a new house
Card.create({
    frontImg: "ttps://lh3.googleusercontent.com/StoZ5InSKnA-klHnBdj5M8-RVRPvWMB4cRv4JzrFCvi--T7x0JFxAx0Br1OO-QYH66unl4CMBq_jVtyOHiTnKoCYX7JdxX-wiD2MZ41H9c2-_nkhjBc_jZRQRqxfUUz_bem9lrsTnA=w2400",
    backImg: "https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400",
    state: "New West Virgota",
    flipped: "false",
    pairName: "",
    game: game1._id
})

const cardsWithGameInfo = await Card.find({}).populate("game");

const Game = model1("Game", GameSchema);

export default Game;

export { GameSchema }