import jwt from "jsonwebtoken"
const users = [];

// Secret key for JWT token (keep it secret in a real application)
const secretKey = 'your_secret_key';

// Generate a random JWT token
function generateAuthToken(user) {
  const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
  return token;
}
export const signup = async (req, res) => {
  try {
    const { uid, first_name, last_name, email, password } = req.body;

    // Implement your user creation logic here, including validation

    // For this example, let's assume the user is successfully created
    const newUser = { uid, first_name, last_name, email };
    users.push(newUser);

    // Generate an authentication token for the new user
    const authToken = generateAuthToken(newUser);

    // Return the authentication token in the response
    res.status(200).json({ authtoken: authToken });
  } catch (error) {
    // Handle errors, e.g., validation errors or database issues
    res.status(500).json({ error: 'Could not create the user' });
  }
};