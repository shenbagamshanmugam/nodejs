var  arr = "shenbagam";
const getUserList = (req,res)=>{   
   
    res.status(200).json(arr);

};

const getUserdetails = (res,req)=>{

}

module.exports={
    getUserList,
    getUserdetails
}