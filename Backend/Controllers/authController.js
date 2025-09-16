// const signup = async(req,res)=>{
// try {
    
//     const {name,email,password}=req.body;
//     const user=await userModel.findOne({email})
//     if(user){
//         return res.status(409)
//     .json({massage:"user is already exit",sucess:false})
//     }
//     const newUser=new userModel({name,email,password});
//     newUser.password=await bcrypt.hash(password,10);
//     await newUser.save();
//     res.status(201).json({message:'signup succesful',success:true})
// } catch (err) {
//     res.status(500).json({ message: 'internal server error', success: false })
    
// }

// }

// module.exports={
//     signup
// }
