import express from 'express';
import Admin from '../../db/models/adminSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { checkToken } from '../../middlewares/checkToken.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();
    return res.status(200).json(admins);
  } catch {
    res.status(500).json(e);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const body = req.body;
    const admin = await Admin.findOne({ email: body.email });
    if (admin) {
      return res
        .status(404)
        .json({ message: 'Admin with this email already exists' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(404).json({ message: 'Passwords doesnot match' });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    const addAdmin = await Admin.create(body);
    res.status(201).json(addAdmin);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const admin = await Admin.findOne({ email: body.email });
    if (!admin) {
      return res.status(403).json({ message: 'email or password incorrect' });
    }
    const isMatching = await bcrypt.compare(body.password, admin.password);
    if (!isMatching) {
      return res.status(403).json({ message: 'email or password incorrect' });
    }
    const token = jwt.sign(
      {
        id: admin._id,
        role: 'ADMIN',
      },
      'thisismynewprojectandmysecrettokendontshowothers',
      { expiresIn: '7d' }
    );
    res.status(200).json({ message: 'Logged In', token: token });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    return res.status(200).json(admin);
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
