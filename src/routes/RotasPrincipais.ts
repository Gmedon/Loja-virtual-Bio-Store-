import { Router } from "express";

import * as landingPage from "../controlls/landing"
import { search } from "../controlls/SearchControll";

const router = Router();

router.get("/", landingPage.GetProductLanding);
router.get("/bolsas", landingPage.GetProductsBolsas)
router.get("/camisas", landingPage.GetProductsCamisas)
router.get("/oculos", landingPage.GetProductsOculos)
router.get("/tenis", landingPage.GetProductsTenis)
router.get("/toalhas", landingPage.GetProductsToalhas)
router.post("/search", search)

export default router;