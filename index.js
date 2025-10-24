


import express from "express";

import { connectDb } from "./db.js";
import person from "./models/person.js";




const app = express();





connectDb() ;

app.use(express.json());


app.get('/',(req,res)=>{
      
       res.send("Hello from the express api");

})


app.post('/person',async(req,res)=>{
      
      const data = req.body ;

     const newPerson =  person.create(data) ;

     await newPerson.save();

    

     res.status(200).json({message:"DATA post successfully" ,newPerson:data});


    
})

app.get('/get/:id',async(req,res)=>{
      
      const userId = req.params.id ;


      if(!userId){
          
        return res.status(404).json({
              message:"User id is not found"
        })
      }

      const user = await person.findById(userId) ;

      if(!user){
          
        return res.status(404).json({
              message:"user not found"
        })
      }

      res.json({message:"success",user});


})


app.put('/person/:id',async(req,res)=>{
      
       const userId = req.params.id ;


       const data = req.body ;


       if(!userId){
          
        return res.status(500).json({
              message:"Id is not found"

        })
       }

       const updatePerson = await person.findByIdAndUpdate(userId,{$set: data});


       res.json({
          message:"updated successfully"

       })
})


app.get('/person/:work',async(req,res)=>{
        
      const data = req.params.work ;

      const findData = await person.find({work:data}) ;

      console.log(findData)



      res.json({message:"success"});

})


app.delete('/person/:id',async(req,res)=>{
        
        const uid = req.params.id ;

        const finddata = await person.findByIdAndDelete(uid) ;

        res.json({message:"Delete item successfully ",finddata});

})

//server wali file ;


app.listen(3000,()=>{
      
    console.log("Server is running at port no 3000")
})




