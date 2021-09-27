
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';

import Top from './Components/Top';
import Offer from './Components/Offer';


function App() {
  return (
    <>
      
      <Top/>
      
      <Route path='/' exact component={HomePage}/>
      <Route path='/contact' exact component={ContactPage}/>
      <Route path='/offer' exact component={Offer}/>
    </>
  );
}

export default App;
