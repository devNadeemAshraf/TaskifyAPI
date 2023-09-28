const PORT = process.env.PORT || 3300;

import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    message: "Server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on : ${PORT}`);
});
