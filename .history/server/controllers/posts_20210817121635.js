import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
    }catch(error){

    }
}

export const createPost = (req, res) => {
    try{

    }catch(error){
        
    }
}