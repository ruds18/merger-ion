import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Table from "./Table"
import axios from 'axios'

function Home() {

  const [jobsData, setJobsData] = useState([]);
  const DATABRICKS_INSTANCE = 'https://adb-1883700548140357.17.azuredatabricks.net'; // Replace with your actual Databricks instance URL
  const DATABRICKS_TOKEN = 'dapi4d9772ba5cec828cb00305a6f6200c71'; // Replace with your actual Databricks access token
  const JOB_ID = '662184459379197'; // Replace with your actual Databricks job ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${DATABRICKS_INSTANCE}/api/2.0/jobs/run-now`,
          { job_id: JOB_ID },
          {
            headers: {
              'Authorization': `Bearer ${DATABRICKS_TOKEN}`
            }
          }
        );
        setJobsData(response.data);
      } catch (error) {
        console.error('Error fetching jobs data:', error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  console.log(jobsData)

  return (
    <div className="h-screen w-screen bg-bg_main">
        <Navbar/>
        <Sidebar/>
        <Table/>
    </div>
  )
}

export default Home