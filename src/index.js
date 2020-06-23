import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
// Routes
import auth from './routes/auth';
import project from './routes/project';
import issues from './routes/issues';

/// Extra
import { debug } from './utils/index';
import { authentication } from './utils/middleware/authentication';

const app = express();

app.use(cors());
app.use(bodyParser());

// End-points
app.use('/auth', auth);

app.use('/project', authentication, project);
app.use("/issue", authentication, issues);

const filePath = path.join(__dirname, '../uploads');
// Render static images
app.use('/bugs/file', express.static(filePath));

app.listen(process.env.PORT || 3000, () => {
  debug.log(`> App Running On ${process.env.PORT || 3000}`);
});
