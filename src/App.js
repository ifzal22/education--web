import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './componount/Home/Home';
import Service from './componount/Service/Service';
import Error from './componount/Error/Error';
import Devolaper from './componount/Devolaper/Devolaper';
import Footer from './componount/Footer/Footer';
import Header from './componount/Header/Header';
import AllService from './componount/AllService/AllService';

function App() {

  return (
    <div className="App">
 <Router>
   <Switch>
     <Route exact path="/">
<Home></Home>
     </Route>
     <Route exact path="/home">
<Home></Home>
     </Route>

     <Route exact path="/service">
     <Header></Header>
     <AllService></AllService>
       <Footer></Footer>
     </Route>

     
     <Route exact path="*">
       <Error></Error>
     </Route>
     
     <Route exact path="devolaper">
     <Devolaper></Devolaper>
     </Route>

   </Switch>
 </Router>
    </div>
  );
}

export default App;
