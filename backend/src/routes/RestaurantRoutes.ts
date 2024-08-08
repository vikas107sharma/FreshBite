import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
    "/:restaurantId",
    param("city")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("City parameter must be string"),
    RestaurantController.getRestaurant
);

//  /api/restaurant/search/london
router.get(
    "/search/:city",
    param("city")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("City parameter must be string"),
    RestaurantController.searchRestaurant
);

export default router;