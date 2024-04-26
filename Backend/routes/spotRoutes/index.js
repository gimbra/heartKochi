import express from 'express';
import Spots from '../../db/models/spotSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const spots = await Spots.find().populate('place');
    return res.status(200).json(spots);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const spot = await Spots.create(req.body);
    return res.status(200).json({ message: 'Spot Added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/restaurant/:resId', async (req, res) => {
  try {
    const { resId } = req.params;
    const spots = await Spots.find({ restaurants: resId });
    return res.status(200).json(spots);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/park/:parkId', async (req, res) => {
  try {
    const { parkId } = req.params;
    const spots = await Spots.find({ parks: parkId });
    return res.status(200).json(spots);
  } catch (e) {
    return res.status(500).json(e);
  }
});

// router.get('/place/:placeId', async (req, res) => {
//   try {
//     const { placeId } = req.params;
//     const spots = await Spots.find({ place: placeId });
//     return res.status(200).json(spots);
//   } catch (e) {
//     return res.status(500).json(e);
//   }
// });
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await Spots.findById(id).populate('place');
    return res.status(200).json(spot);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await Spots.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Spot deleted' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await Spots.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: 'Spot updated' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
