import express from 'express';
import Place from '../../db/models/placeSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    return res.status(200).json(places);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const place = await Place.create(req.body);
    return res.status(200).json({ message: 'Place Added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    return res.status(200).json(place);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Place deleted' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: 'Place updated' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
