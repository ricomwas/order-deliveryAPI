import express, {Request, Response, NextFunction } from 'express';
import { CreateVendor, GetVendorByID, GetVendors } from '../controllers';


const router = express.Router();

router.post('/vendor', CreateVendor)

router.post('/vendors', GetVendors)

router.post('/vendor/:id', GetVendorByID)


router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: 'Hello from Admin'
  });
 })




export { router as AdminRoute}