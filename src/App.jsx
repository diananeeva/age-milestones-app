import { useState } from 'react'
import './App.css'

function App() {
  
  const [birthdate, setBirthday] = useState('');
  const [milestones, setMilestones] = useState([]);

  const calculateMilestones = () => {
    if(!birthdate) return

    const birth = new Date(birthdate);
    const now = new Date();

    const milestones = [
      { label: '1,000 дни', date: new Date(birth.getTime() + 1000 * 24 * 60 * 60 * 1000) },
      { label: '5,000 дни', date: new Date(birth.getTime() + 5000 * 24 * 60 * 60 * 1000) },
      { label: '10,000 дни', date: new Date(birth.getTime() + 10000 * 24 * 60 * 60 * 1000) },
      { label: '1,000 седмици', date: new Date(birth.getTime() + 1000 * 7 * 24 * 60 * 60 * 1000) },
      { label: '1,000 месеца', date: new Date(birth.setMonth(birth.getMonth() + 1000)) }
    ];

    setMilestones(milestones);
  };

  const resetData = () =>{
    setBirthday('');
    setMilestones([]);
  }

  return (
    <div style = {{padding: '2rem'}}>
     <h1>Age Milestones</h1>
     <input
     type = "date"
     value={birthdate}
     onChange ={(e) => setBirthday(e.target.value)} 
     />
     <button onClick = {calculateMilestones}> Calculate Milestones</button>
     <button id="reset-button" onClick = {resetData} style={{marginLeft: '1rem'}}>Delete</button> 
     <ul>
      {milestones.map((milestone, index) =>(
        <li key={index}>
          {milestone.label}: {milestone.date.toLocaleDateString()}
        </li>
      ))}
     </ul>
    </div>
  )
}

export default App
