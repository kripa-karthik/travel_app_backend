const express=require('express');
const router=express.Router();

const verifyUser=require('../middleware/verifyUser');
const wishlistHandler=require('../controllers/wishlistController');

const {createWishlistHandler,deleteWishlistHandler,getWishlistHandler}=wishlistHandler;

router.route('/').post(verifyUser,createWishlistHandler);

router.route('/:id').delete(verifyUser,deleteWishlistHandler);

router.route('/').get(verifyUser,getWishlistHandler);

module.exports=router;


