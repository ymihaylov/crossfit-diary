import { Router } from "express";
import { index } from "../controllers/home";

const router: Router = Router()

router.get('/', index);

export default router;
