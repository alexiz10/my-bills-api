import express from 'express';
import { indexPage, billsPage } from '../controllers';

const indexRouter = express.Router();

// Home page
indexRouter.get('/', indexPage);

// Bills page
indexRouter.get('/bills', billsPage);
indexRouter.post('/bills/new');

// Login page

// Register page

export default indexRouter;
