import express from 'express';
import {
	create,
	list
} from '../../controller/project'

const router = express();


router.post("/create", create);

router.get("/list", list);

module.exports = router;