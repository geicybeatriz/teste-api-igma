import express, {json} from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(cors())
    .use(json());

export default app;

