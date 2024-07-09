const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// CORS middleware configuration (adjust as needed)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Function to run Databricks job
// const runDatabricksJob = async (jobId, token) => {
//   try {
//     // Step 1: Run Databricks job
//     const runResponse = await axios.post(
//       `https://adb-1883700548140357.17.azuredatabricks.net/api/2.0/jobs/run-now`,
//       { job_id: jobId },
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     );

//     const runId = runResponse.data.run_id; // Extract run_id from response

//     // Step 2: Wait for job to complete
//     await waitForJobCompletion(runId, token);

//     // Step 3: Fetch job output
//     const output = await fetchJobOutput(runId, token);
//     return output;
//   } catch (error) {
//     console.error('Error running Databricks job:', error);
//     throw error;
//   }
// };

app.get('/companyData',  async (req,res) => {
    try{
        
    }
})

app.get('/job-output/:runId', async (req, res) => {
    try {
      const runId = req.params.runId;
      const DATABRICKS_TOKEN = 'dapi4d9772ba5cec828cb00305a6f6200c71'; // Replace with your actual Databricks access token
  
      // Call function to fetch job output
      const output = await fetchJobOutput(runId, DATABRICKS_TOKEN);
  
      // Send output back to client
      res.status(200).json(output);
    } catch (error) {
      console.error('Error fetching job output:', error);
      res.status(500).send('Failed to fetch job output');
    }
  });
  

// // Function to wait for job completion
// const waitForJobCompletion = async (runId, token) => {
//   try {
//     let runState = '';

//     // Poll job status every 5 seconds until it's complete
//     while (runState !== 'TERMINATED' && runState !== 'INTERNAL_ERROR') {
//       const response = await axios.get(
//         `https://adb-1883700548140357.17.azuredatabricks.net/api/2.0/jobs/runs/get?run_id=${runId}`,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       runState = response.data.state.life_cycle_state;
//       console.log(`Job state: ${runState}`);

//       if (runState !== 'TERMINATED' && runState !== 'INTERNAL_ERROR') {
//         await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before polling again
//       }
//     }

//     if (runState === 'INTERNAL_ERROR') {
//       throw new Error('Databricks job encountered an internal error');
//     }
//   } catch (error) {
//     console.error('Error waiting for job completion:', error);
//     throw error;
//   }
// };

// Function to fetch job output
const fetchJobOutput = async (runId, token) => {
  try {
    const response = await axios.get(
      `https://adb-1883700548140357.17.azuredatabricks.net/api/2.0/jobs/runs/get-output?run_id=${runId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching job output:', error);
    throw error;
  }
};

// API endpoint to trigger and fetch Databricks job output
// app.post('/run-job', async (req, res) => {
//   try {
//     const JOB_ID = '662184459379197'; // Replace with your actual Databricks job ID
//     const DATABRICKS_TOKEN = 'dapi4d9772ba5cec828cb00305a6f6200c71'; // Replace with your actual Databricks access token

//     // Call function to run job and fetch output
//     const output = await runDatabricksJob(JOB_ID, DATABRICKS_TOKEN);

//     // Send output back to client
//     res.status(200).json(output);
//   } catch (error) {
//     console.error('Error fetching data from Databricks:', error);
//     res.status(500).send('Failed to fetch data from Databricks');
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
