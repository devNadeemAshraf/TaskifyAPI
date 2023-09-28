const PORT = process.env.PORT || 3300;

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on : ${PORT}`);
});
