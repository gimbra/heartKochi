import jwt from 'jsonwebtoken';

export const checkToken = roleArray => {
  return (req, res, next) => {
    const bToken = req.headers.authorization;
    if (!bToken) {
      return res.status(403).json({ message: 'you are not authorized' });
    }
    //   console.log(bToken);
    const token = bToken.replace('Bearer ', '');
    try {
      const isValid = jwt.verify(
        token,
        'thisismynewprojectandmysecrettokendontshowothers'
      );
      if (!roleArray.includes(isValid.role)) {
        return res.status(403).json({ message: 'you are not authorized' });
      }
    } catch (e) {
      return res.status(403).json({ message: 'error' });
    }
    next();
  };
};
