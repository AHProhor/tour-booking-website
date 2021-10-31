import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddNewTour from './components/AddNewTour/AddNewTour';
import Booking from './components/Booking/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import MyBooking from './components/MyBooking/MyBooking';
import NotFound from './components/NotFound/NotFound';
import OthersBooking from './components/OthersBooking/OthersBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
            <BrowserRouter>
              <Header></Header>
              <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>

                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  
                  <Route path="/login">
                    <Login></Login>
                  </Route>

                  <PrivateRoute path="/addNew">
                    <AddNewTour></AddNewTour>
                  </PrivateRoute>

                  <PrivateRoute path="/otherBook">
                    <OthersBooking></OthersBooking>
                  </PrivateRoute>

                  <PrivateRoute path="/myBook">
                    <MyBooking></MyBooking>
                  </PrivateRoute>

                  <PrivateRoute path="/booking/:bookingId">
                    <Booking></Booking>
                  </PrivateRoute>

                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>

              </Switch>
              <Footer></Footer>
            </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
