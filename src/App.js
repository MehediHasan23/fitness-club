import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Menubar from './Shared/Menubar/Menubar';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Error from './Pages/Error/Error';
import Details from './Pages/Details/Details';
import AuthProvider from './context/AuthProvider';
import Membership from './Pages/Membership/Membership';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './Pages/About/About';

function App() {
  return (
    <div className='m-0 p-0'>
      <AuthProvider>
      <Router>
        <Menubar/>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route exact path ='/home'>
            <Home></Home>
          </Route>
          <Route exact path ='/about'>
            <About></About>
          </Route>
          <Route exact path ='/membership'>
          <Membership></Membership>
          </Route>
          <PrivateRoute exact path ='/details/:detailId'>
          <Details></Details>
          </PrivateRoute>
          <Route exact path ='/login'>
          <Login></Login>
          </Route>
          <Route exact path ='/signup'>
          <SignUp></SignUp>
          </Route>
          <Route  path ='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
