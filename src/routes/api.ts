import { Router } from 'express'
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/to-do-list', ApiController.listTask);
router.get('/to-do-list/:id', ApiController.getTask);
router.post('/to-do-list/', ApiController.createTask);
router.put('/to-do-list/:id', ApiController.updateTask);
router.delete('/to-do-list/:id', ApiController.deleteTask);

export default router;