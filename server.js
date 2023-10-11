import express, { json } from "express";
import user from "./routes/user.js"
const app = express();
const port = 8080; // Set your desired port

app.use(json());
app.use(user)
// Define your routes and implement your controllers based on your spec.yaml.

// // Example route for signup
// app.post('/api/signup', (req, res) => {
//   // Implement your signup logic and token generation here
//   // Use the OpenAPI specification to ensure the response format matches your spec.
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
