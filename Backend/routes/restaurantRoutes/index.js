import express from 'express';
import Restaurant from '../../db/models/restaurantSchema.js';
import Review from '../../db/models/reviewSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('place');
    return res.status(200).json(restaurants);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    return res.status(200).json({ message: 'Restaurant Added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:resId', async (req, res) => {
  try {
    const { resId } = req.params;
    const resto = await Restaurant.findById(resId).populate('place');
    return res.status(200).json(resto);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:resId/reviews', async (req, res) => {
  try {
    const { resId } = req.params;
    const reviews = await Review.find({ restaurant: resId }).populate('user');
    return res.status(200).json(reviews);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/spot/:spotId', async (req, res) => {
  try {
    const { spotId } = req.params;
    const restaurants = await Restaurant.find({ spots: spotId });
    return res.status(200).json(restaurants);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/:resId/reviews', async (req, res) => {
  try {
    const { resId } = req.params;

    const review = await Review.create({
      restaurant: resId,
      ...req.body,
    });

    return res
      .status(201)
      .json({ message: 'Review created successfully', review });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resto = await Restaurant.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Restaurant deleted' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resto = await Restaurant.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: 'Restaurant updated' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
