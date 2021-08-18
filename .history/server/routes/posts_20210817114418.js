import express from 'express';
import { getPosts} from '../controllers/posts'

const router = express.Router();

//Home page route
router.get('/', get);

export default router;