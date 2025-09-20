import app from "./app";
import { ENV } from "./config/env";
import { connectDB } from "./config/db";

connectDB();

app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:${ENV.PORT}`);
});