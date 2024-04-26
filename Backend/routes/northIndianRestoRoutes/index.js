import express from 'express';
import NorthIndianResto from '../../db/models/northIndianRestoSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const restaurants = await NorthIndianResto.find();
    return res.status(200).json(restaurants);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const restaurant = await NorthIndianResto.create(req.body);
    return res.status(200).json({ message: 'Restaurant Added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resto = await NorthIndianResto.findById(id);
    return res.status(200).json(resto);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const resto = await NorthIndianResto.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Restaurant deleted' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });
  
  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const resto = await NorthIndianResto.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: 'Restaurant updated' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });



export default router;