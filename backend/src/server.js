
const express = require('express');

const app = express();

const authorRoutes = require('./routes/authorRoutes');

const bookRoutes = require('./routes/bookRoutes');

const cors = require('cors');

// Using cors middleware
app.use(cors());

// Using express.json middleware to parse JSON requests
app.use(express.json());

// Using author routes for '/authors' endpoint
app.use('/authors', authorRoutes);

// Using book routes for '/books' endpoint
app.use('/books', bookRoutes);

// Setting the port for the server
const PORT = process.env.PORT || 3000;

// Starting the server and listening on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
