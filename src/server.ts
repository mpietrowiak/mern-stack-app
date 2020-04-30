import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.status(200).json({ world: 'Welcome :) This text is from the API - new version.' });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));