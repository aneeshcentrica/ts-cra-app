import React, { useState } from 'react';
import './App.css';
import InviteeList from './components/InviteeList';
import { IInvitee } from './interfaces/invitee';
import AddInvitee from './components/AddInvitee';

function App() {
  const [invitees, setInvitees] = useState<IInvitee[]>([
    { name: 'Aneesh Anirudhan', age: 44, avatar: 'https://avatars.githubusercontent.com/u/37076476?v=4' },
  ]);

  return (
    <div className="App">
      <h1>Party List</h1>
      <InviteeList invitees={invitees} />
      <AddInvitee invitees={invitees} setInvitees={setInvitees} />
    </div>
  );
}

export default App;
