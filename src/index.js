import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
// Routes
import auth from './routes/auth';
import { debug } from './utils/index';

const app = express();

app.use(bodyParser());

// End-points
app.use('/auth', auth);

app.listen(process.env.PORT || 3000, () => {
  debug.log(`> App Running On ${process.env.PORT || 3000}`);
});
