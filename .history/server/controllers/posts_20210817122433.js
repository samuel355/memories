import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    }catch(error){
        req.status(404).json({message: error.message})
    }
}

export const createPost = (req, res) => {
   try {
       
   } catch (error) {
       
   }
}