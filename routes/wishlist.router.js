const express=require('express');
const router=express.Router();

const verifyUser=require('../middleware/verifyUser');
const wishlistHandler=require('../controllers/wishlistController');

const {createWishlistHandler,deleteWishlistHandler,getWishlistHandler}=wishlistHandler;

router.route(verifyUser,'/').post(createWishlistHandler);

router.route(verifyUser,'/:id').delete(deleteWishlistHandler);

router.route(verifyUser,'/').get(getWishlistHandler);

module.exports=router;


