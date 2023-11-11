import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (req, res, next) => {
    try {
        const filename = path.join(__dirname, "..", "html");
        res.sendFile(filename + "/index.html")
    } catch (err) {
        next(err)
    }
});

export default router;
