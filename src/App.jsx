import { useState } from 'react'
import { UserData } from "./Data";
import './App.css'
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Siswa Hadir",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div style={{ width: 700 }}>
      <LineChart chartData={userData} />
      <PieChart chartData={userData}/>
    </div>
  )
}

export default App
