import { useState } from 'react';
import { LockScreen } from './components/LockScreen';
import { MacScreen } from './components/MacScreen';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
  <MacScreen>
      {isLoggedIn ?
      <div> logged In</div>
        : <LockScreen setIsLoggedIn={setIsLoggedIn} />}
  </MacScreen>
);}
