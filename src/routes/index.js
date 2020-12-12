import express from 'express';
import { testVar } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.status(200).json({ message: testVar });
});

export default indexRouter;
