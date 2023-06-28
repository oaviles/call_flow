const express = require('express');
const axios = require('axios');
require('dotenv').config();

//const flowUrl = process.env.WORKFLOW_URI;

if (process.env.WORKFLOW_URI == undefined)
{
  
  console.error("WORKFLOW_URI is undefined. You need to provide the WORKFLOW URL.");
  console.error('ERROR: UNABLE TO CALL TO WORKFLOW');
  console.error('Make sure you have set the environment variable WORKFLOW_URI to the correct endpoint.');

} else {
  
  var flowUrl = process.env.WORKFLOW_URI;

  console.dir('CALLING WORKFLOW ...');

    const app = express();

    app.get('/call-flow', async (req, res) => {
      try {
        const response = await axios.post(flowUrl, {});
        res.send(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error calling flow');
      }
    });

    app.listen(3000, () => {
      console.log('App listening on port 3000');
    });
}