import React, { useState } from 'react';

import './App.css';

import MemberForm from './components/Form';
import MemberCard from './components/Card';

function App() {

  
    const [members, setMembers] = useState([
      {
        id: 1,
        name: "Alex Stubbings",
        email: "AlexTheDriver@strugglebus.com",
        role: "Struggle Bus Driver"
      }
    ]);

    const addNewMember = mem => {
      const newMember = {
        id: Date.now(),
        name: mem.name,
        email: mem.email,
        role: mem.role
      };
      setMembers([...members, newMember]);
    };


  return (
    <div className="App">
      <h1>Members List</h1>
      {/* we are going to pass a function down as a prop */}
      <MemberForm addNewMember={addNewMember} />
      <MemberCard members={members} />
    </div>
  );
}

export default App;
