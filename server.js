/**
 * Author: Byung Uk An
 * Date: 2021.12.02
 */

// Import modules
const express = require('express')
const app = express()

// Set the root directory for static contents
app.use(express.static('public'))

// Set routes for the end points
const api = require('./routes/api.js')
app.use('/api', api)

// Wrong url handling
app.use((req, res) => {

  res.status(404)

  if (req.url.startsWith('/api')) {
    res.send({Error: '404 Not Found'})
  } else {
    res.redirect('404error.html');
  }
});

// Start server
try {
  
  // Run Application Server
  const port = process.env.PORT || 3000;
  
  app.listen(port, function(){
    console.log(`Listening on port ${port}`);
  });

}catch(error){
  console.log(error.stack);
}

