import React from "react";
import { Switch, Route } from "react-router-dom";
import Anasayfa from "./Anasayfa";
 // PizzaForm bileşenini içe aktarın
import Secenekler from "./Secenekler";
import Success from "./Success";
import Pizzaform from "./Pizzaform";

const App = () => {
  return (
    <Switch>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/order-pizza">
        <Pizzaform /> {/* PizzaForm bileşenini kullanın */}
      </Route>
      <Route path="/secenekler">
        <Secenekler />
      </Route>
      <Route exact path="/">
        <Anasayfa />
      </Route>
    </Switch>
  );
};

export default App;
