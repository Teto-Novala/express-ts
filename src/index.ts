import { createApp } from "./createApp";

const app = createApp();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
