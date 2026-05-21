import Welcome from './componets/Welcome';
import UserCard from './componets/UserCard';
import CarRecord from './componets/CarRecord';
import UserCard2 from './componets/UserCard2';
import CounterButton from './componets/CounterButton';
import './App.css';
import { useState } from 'react';

function App() {
  
  return(
    <section>
    
    
    <div className='card'>
      <Welcome/>
      </div>
      
      <div>

        <CounterButton/>
      </div>

      <div>

      <UserCard
        name = "michael"
        age = '46'
      />
      <UserCard

        name = 'Quint'
        age = '33'
        />
    </div>  
    <div className='card2'>
      <CarRecord
        make = 'Toyota'
        model = 'Corolla'
        miles = '45998'
        color = 'green'
      />
    </div>
    <div>
      <UserCard2
        subject = 'react'
        id = '223'
      />

    </div>
  </section>

  
  );
}

export default App
