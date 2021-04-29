 
import {
    BrowserRouter,
    Route,
    Switch
  }from 'react-router-dom';
  
  import CardLogement from './CardLogement';
  import DetailCardLogement from './DetailCardLogement.js';
  import ListLogements from './ListLogements.js';
  import App from '../App';
  import AddLogement from './AddLogement';
  import UpdateLogements from './UpdateLogements';
  import Accueil from './Accueil';
  import SignUp from './User/SignUp';
  import Login from './User/Login';

  function Main() {
  return(
    <BrowserRouter>
          
     <Switch>

       <Route exact path="/" >
            <CardLogement />
        </Route>

          <Route  path="/DetailCardLogement/:id" component={DetailCardLogement}/> 
          <Route  path="/AddLogement/:id" component={AddLogement}/> 
          <Route  path="/UpdateLogements/:id" component={UpdateLogements}/> 
         
       <Route  path="/Accueil">
            <Accueil />
        </Route>
        <Route path="/ListLogements">
          < ListLogements  />
        </Route>
        <Route path="/App">
          < App  />
        </Route>
        {/* <Route path="/AddLogement">
           < AddLogement  />
        </Route> */}
        <Route path="/SignUp">
           < SignUp  />
        </Route>
        <Route path="/Login">
           < Login  />
        </Route>
        
     </Switch>
   </BrowserRouter>
  )

}
export default Main;