import express from 'express';
import Park from '../../db/models/parkSchema.js';
import Review from '../../db/models/reviewSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const parks = await Park.find();
    return res.status(200).json(parks);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const park = await Park.create(req.body);
    return res.status(200).json({ message: 'Park Added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/:parkId/reviews', async (req, res) => {
  try {
    const { parkId } = req.params;

    const review = await Review.create({
      park: parkId,
      ...req.body,
    });

    return res
      .status(201)
      .json({ message: 'Review created successfully', review });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/spot/:spotId', async (req, res) => {
  try {
    const { spotId } = req.params;
    const parks = await Park.find({ spots: spotId });
    return res.status(200).json(parks);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const park = await Park.findById(id);
    return res.status(200).json(park);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const park = await Park.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Park deleted' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const park = await Park.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: 'Park updated' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
