const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const hotelDataAddedToDBRouter=require('./routes/dataimport.router');
const categoryDataAddedToDBRouter=require('./routes/categoryimport.router');

const hotelRouter=require('./routes/hotel.router');
const categoryRouter=require('./routes/category.router');
const singleHotelRouter=require('./routes/singlehotel.router')
const signinRouter=require('./routes/auth.router');
const wishlistRouter=require('./routes/wishlist.router');
const routeNotFound=require('./middleware/routeNotFound')

const connectDB=require('./config/dbconfig');

const app=express();

app.use(express.json());
connectDB();

const PORT=3500;

app.get("/",(req,res)=>{
    res.send('hello geeks');
})


app.use('/api/hoteldata',hotelDataAddedToDBRouter)
app.use('/api/categorydata',categoryDataAddedToDBRouter)
app.use('/api/hotels',hotelRouter);
app.use('/api/category',categoryRouter);
app.use('/api/hotels',singleHotelRouter);
app.use('/api/auth',signinRouter);
app.use('/api/wishlist',wishlistRouter);
app.use(routeNotFound)

mongoose.connection.once("open",()=>{
    console.log("connected to DB");
    app.listen(process.env.PORT || PORT,()=>{
    console.log('server is up and started...');
    })
})



