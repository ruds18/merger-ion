const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Databricks workspace URL and token
const databricksUrl = 'https://adb-1883700548140357.17.azuredatabricks.net';
const databricksToken = 'dapi4d9772ba5cec828cb00305a6f6200c71';

app.get('api/2.0/jobs/runs/get-output', async (req, res) => {
  const jobId = req.params.jobId;

  try {
    const response = await axios.get(
      `${databricksUrl}/api/2.0/jobs/runs/get`,
      {
        headers: {
          'Authorization': `Bearer ${databricksToken}`
        },
        params: {
          run_id: jobId
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching job data from Databricks');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
