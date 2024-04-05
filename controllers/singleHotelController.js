const Hotel=require('../model/hotel.model');


const singleHotelHandler=async(req,res)=>{
    try{
        const { id }=req.params;
        const hotel=await Hotel.findById(id);
        res.json(hotel);

    }catch(err){
        console.log(err)
        res.status(404).json({message:"couldnt find the hotel"})
    }

}

module.exports=singleHotelHandler;