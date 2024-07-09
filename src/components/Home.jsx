import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Tally from "./Tally";

function Home() {



  return (
    <div className="h-screen w-screen bg-bg_main">
        <Navbar/>
        <Sidebar/>
        <Tally/>
    </div>
  )
}

export default Home