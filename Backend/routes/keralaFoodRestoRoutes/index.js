import express from 'express';
import KeralaFoodResto from '../../db/models/keralaFoodRestoSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const restaurants = await KeralaFoodResto.find();
    return res.status(200).json(restaurants);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const restaurant = await KeralaFoodResto.create(req.body);
    return res.status(200).json({ message: 'Restaurant Added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resto = await KeralaFoodResto.findById(id);
    return res.status(200).json(resto);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const resto = await KeralaFoodResto.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Restaurant deleted' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });
  
  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const resto = await KeralaFoodResto.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: 'Restaurant updated' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });



export default router;