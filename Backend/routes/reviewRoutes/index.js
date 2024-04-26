import express from 'express';
import Review from '../../db/models/reviewSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json(reviews);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const review = await Review.create(req.body);
    return res.status(200).json({ message: 'Review Added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/restaurant/:resId', async (req, res) => {
    try {
      const { resId } = req.params;
      const reviews = await Review.find({ restaurants: resId });
      return res.status(200).json(reviews);
    } catch (e) {
      return res.status(500).json(e);
    }
  });
  
  router.get('/park/:parkId', async (req, res) => {
    try {
      const { parkId } = req.params;
      const reviews = await Review.find({ parks: parkId });
      return res.status(200).json(reviews);
    } catch (e) {
      return res.status(500).json(e);
    }
  });


export default router