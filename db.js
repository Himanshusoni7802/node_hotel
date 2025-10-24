





import mongoose from 'mongoose';


export  const connectDb = ()=>{
      
    try {

        mongoose.connect('mongodb://localhost:27017/hotelDb').then(()=>{
               console.log('Database is connectd successfully');

        })
        
    }catch (error) {
        
        console.log(error);

    }
}