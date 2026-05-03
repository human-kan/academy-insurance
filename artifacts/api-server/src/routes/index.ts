import { Router, type IRouter } from "express";
import healthRouter from "./health";
import chatRouter from "./chat";
import vapiRouter from "./vapi";

const router: IRouter = Router();

router.use(healthRouter);
router.use(chatRouter);
router.use(vapiRouter);

export default router;
