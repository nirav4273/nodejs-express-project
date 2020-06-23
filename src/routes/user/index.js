import express from 'express';
import {
	checkEmail
} from '../../controller/user/index'

const router = express();


router.post("/search", checkEmail);

module.exports = router;