import mongoose from 'mongoose';
import Card from "./cardModel.js";

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('MONGO CONNECTION OPEN!!!');

}).catch((err) => {
    console.log(err);
});

// [
//     {
//      frontImg:"https://lh3.googleusercontent.com/StoZ5InSKnA-klHnBdj5M8-RVRPvWMB4cRv4JzrFCvi--T7x0JFxAx0Br1OO-QYH66unl4CMBq_jVtyOHiTnKoCYX7JdxX-wiD2MZ41H9c2-_nkhjBc_jZRQRqxfUUz_bem9lrsTnA=w2400", 
//      backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400",
//      flipped: false,
//      pair_name:"serena",
//      game_id: 1

//     },
//     {
//         frontImg:"https://lh3.googleusercontent.com/faWMnG7sXzAuNTGMHBz2GUoG8R8dTCXJjXcx-fOCIT12DptIR87wkDar1E9b0WpoRsoqjB0ttrEJmVixAeldEANxFQDARIpF713YR1QR4ReXSE8rKaVLXxdb-1KWHG9fQR86Xej-XA=w2400", 
//         backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400",
//         flipped: false, 
//         pair_name:"venus", 
//         game_id: 1    },
//     {
//         frontImg:"https://lh3.googleusercontent.com/aKzDKH55fgfFN8C-ho19d995H1Q-X7m8wax4k72pA1Ot2sMEk01bR06X4MD3wdOHXl7OdRRnQcwRuDM9gh3NdHVPmOQL6l_TIgGpEa32DhTx-mpso2gCA0AwXGQ8RIG5Id9gSdLqxw=w2400", 
//         backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400",
//         flipped: false, 
//         pair_name:"mercury", 
//         game_id: 1
//     },
//     {
//         frontImg:"https://lh3.googleusercontent.com/RTIEPTvSlewiROGdq7Xrn_Cp7QCdIYSIyljkMGRaYm2Tnfgc5MeIjeuLbGEVF7e3hmZRMfMlihIYbwwfUpsXf40xWBm6Ww4SDhnYE45oIe5U4QcWpbCaKEwv0blGh3f0vmSXe4T78w=w2400", 
//         backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400", 
//         flipped: false, 
//         pair_name:"rini", 
//         game_id: 1
//     },
//     {
//      frontImg:"https://lh3.googleusercontent.com/VLevyjCzv7LTTVCXCsYxUfe93mo5TstnnLXRsjZl6Glieg9PA990iVy8_7SaN6U3VY-OVUxkmO1OGUPU2pv_OUOVSzqsoDXE0xryY2Xy5bcqoXHTe_LNk6ZSIq5uKftkVOcKyaELJg=w2400",
//      backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400",
//      flipped: false, 
//      pair_name:"mars", 
//      game_id: 1
//     },
//     {
//     frontImg:"https://lh3.googleusercontent.com/faWMnG7sXzAuNTGMHBz2GUoG8R8dTCXJjXcx-fOCIT12DptIR87wkDar1E9b0WpoRsoqjB0ttrEJmVixAeldEANxFQDARIpF713YR1QR4ReXSE8rKaVLXxdb-1KWHG9fQR86Xej-XA=w2400", 
//     backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400",
//     flipped: false, 
//     pair_name:"venus", 
//     game_id: 1
//     },
//     {
//     frontImg:"https://lh3.googleusercontent.com/aKzDKH55fgfFN8C-ho19d995H1Q-X7m8wax4k72pA1Ot2sMEk01bR06X4MD3wdOHXl7OdRRnQcwRuDM9gh3NdHVPmOQL6l_TIgGpEa32DhTx-mpso2gCA0AwXGQ8RIG5Id9gSdLqxw=w2400", 
//     backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400", 
//     flipped: false, 
//     pair_name:"mercury", 
//     game_id: 1
//     },
//     {
//     frontImg:"https://lh3.googleusercontent.com/RTIEPTvSlewiROGdq7Xrn_Cp7QCdIYSIyljkMGRaYm2Tnfgc5MeIjeuLbGEVF7e3hmZRMfMlihIYbwwfUpsXf40xWBm6Ww4SDhnYE45oIe5U4QcWpbCaKEwv0blGh3f0vmSXe4T78w=w2400", 
//     backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400", 
//     flipped: false, 
//     pair_name:"rini", 
//     game_id: 1
//     },
//     {
//     frontImg:"https://lh3.googleusercontent.com/VLevyjCzv7LTTVCXCsYxUfe93mo5TstnnLXRsjZl6Glieg9PA990iVy8_7SaN6U3VY-OVUxkmO1OGUPU2pv_OUOVSzqsoDXE0xryY2Xy5bcqoXHTe_LNk6ZSIq5uKftkVOcKyaELJg=w2400", 
//     backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400", 
//     flipped: false, 
//     pair_name:"mars", 
//     game_id: 1
//     },
//     {
//     frontImg:"https://lh3.googleusercontent.com/9hHtCbWZ0tJeQNaRClr2vGDnO2Q08zH8M5cBqu8lBNKeGxcr3O1qSwbC_UWc-sZQFwbPQQcXS5-wkIC4fyEalchg3jx6_YbY82XgVxAohGIxWmJQyamLFPP7pk4GiC0tQ21rB__lnQ=w2400", 
//     backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400", 
//     flipped: false, 
//     pair_name:"jupiter", 
//     game_id: 1
//     },
//     {
//     frontImg:"https://lh3.googleusercontent.com/IvmGSuIqg2NIn_PgrxZsVdBWdxGOoMaUH-MVezdRgAxrxQNsT7M_zGrReiZ2bLpgL2Zx6BJK1zzflC1ne8ZpQ8BqhYPPEB6lRnSKKWVxGpNMXXPRXdDhjmRrQjI8u4cAt6FpGfCYhg=w2400", 
//     backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400", 
//     flipped: false, 
//     pair_name:"uranus", 
//     game_id: 1
//     },
//     {
//     frontImg:"https://lh3.googleusercontent.com/LFv7yX9rcspUoxQ7c-Yk4ZVu7A19iQa_nqJKpLZg3SDwK1AIMSXN-imcszK-pPk6WQFnl_Cj8lVGxv_sreBU0hA3W3lFZny3Y2Q8XuS16HBUPpAaWtJLNcfVyc3fcs1hYghW4uHdgg=w2400", 
//     backImg:"https://lh3.googleusercontent.com/ieZfp_oj_wySAmko14zwtqDuqDVebm_noXQf7NOD83ydsnOHmor8oBGcoQrE-0VUfAq8ZF_ep6IJatcykdKOkd4v4aRh29_ygEcF92RF7ituzCcjr6HHJxvQaNTC4hPqHFWy_6VqXQ=w2400", 
//     flipped: false, 
//     pair_name:"neptune", 
//     game_id: 1
//     }

// ]
// const seedDB = async (seedCards, options)=> {
//     try{
//         await Card.insertMany(seedCards, options);
//         }catch(error){
//             console.error('InsertMany operation failed. Retrying...', error);
    
//             await new Promise(resolve => setTimeout(resolve, 2000));
//         }
//     }

// const seedCards = 

// await seedDB(seedCards)

// seedDB().then(()=> {
//     mongoose.connection.close();
// })