import app from "../api/index.js";

const port = process.env.PORT || 3000;

const showServerRunning = () => {
  console.log(`server running on http://localhost:${port}`);
};

app.listen(port, showServerRunning);
