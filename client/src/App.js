import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/headers/Navbar";
import Cart from "./components/cart/Cart";
import DetailView from "./components/detailItem/DetailView";
import CheckPayment from "./components/payment/CheckPayment";
//for css override
import { Templateprovider } from "./templates/templateprovider";
//context providers
import ContextProvider from "./context/ContextProvider";
// import {TotalContext} from './context/ContextProvider'
//for redux rerender on navigate
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
      <Templateprovider>
        <ContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route exact path="/product/:id" component={DetailView} />
               {/* <TotalContext> */}
              <Route exact path="/cart" component={Cart} />
              <Route exact path = "/payment" component={CheckPayment}/>
              {/* </TotalContext> */}
            </Switch>
          </BrowserRouter>
        </ContextProvider>
      </Templateprovider>
    </div>
  );
}

export default App;
