/**
 * Author: Byung Uk An
 * Date: 2021.12.02
 */

// Import modules
const express = require('express')
const app = express()

// Set the root directory for static contents
app.use(express.static('public'))

// Wrong url handling
app.use((req, res) => {

  // Set 404 error code to the response
  res.status(404)
  // Redirect to the 404 error page
  res.redirect('404error.html');
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

