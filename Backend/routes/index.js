import express from 'express';
import userRoutes from './userRoutes/index.js';
import adminRoutes from './adminRoutes/index.js';
import chineseRestoRoutes from './chineseRestoRoutes/index.js';
import imageRoutes from './imageRoutes/index.js';
import italianRestoRoutes from './italianRestoRoutes/index.js';
import keralaFoodRestoRoutes from './keralaFoodRestoRoutes/index.js';
import northIndianRestoRoutes from './northIndianRestoRoutes/index.js';
import parkRoutes from './parkRoutes/index.js';
import placeRoutes from './placeRoutes/index.js';
import restaurantRoutes from './restaurantRoutes/index.js';
import reviewRoutes from './reviewRoutes/index.js';
import spotRoutes from './spotRoutes/index.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);
router.use('/chinese', chineseRestoRoutes);
router.use('/image', imageRoutes);
router.use('/italian', italianRestoRoutes);
router.use('/kerala', keralaFoodRestoRoutes);
router.use('/northindi', northIndianRestoRoutes);
router.use('/park', parkRoutes);
router.use('/place', placeRoutes);
router.use('/restaurant', restaurantRoutes);
router.use('/review', reviewRoutes);
router.use('/spot', spotRoutes);

export default router;
