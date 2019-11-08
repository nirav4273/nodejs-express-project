import express from 'express';
import { login, signup } from '../../controller/auth/index';

const router = express();

// Login Route
router.post("/login", login);

router.post("/signup", signup);
module.exports = router;