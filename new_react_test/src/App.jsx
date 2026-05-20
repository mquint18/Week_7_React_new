import Welcome from './componets/Welcome';
import UserCard from './componets/UserCard';
import CarRecord from './componets/CarRecord';
import './App.css';
import { useState } from 'react';

function App() {
  
  return(
    <section>
    
    
    <div>
      <Welcome/>

      <UserCard
        name = "michael"
        age = '46'
      />
      <UserCard

        name = 'Quint'
        age = '33'
        />
    </div>  
    <div>
      <CarRecord
        make = 'Toyota'
        model = 'Corolla'
        miles = '45998'
        color = 'blue'
      />
    </div>
  </section>

  
  );
}

export default App
