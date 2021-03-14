import React,{lazy,Suspense} from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import Loading from "./components/ui/loading/loading";
import {colors} from "./components/ui";
import Flex from "./components/ui/flex";

const Home = lazy(()=> import('./components/home/home'));
const Detail = lazy(()=> import('./components/detail/details'));
const Suscription = lazy(()=> import('./components/suscriptions/suscriptions'));
const Resume = lazy(()=> import('./components/resumen/resume'));

function App() {
  return (
    <div className="main-container">
       <Header/>
      <Router>
        <Switch>
            <Suspense fallback={
                <Flex className={"wc py-5"}>
                    <Loading
                        size={100}
                        sizeBr={10}
                        colorLine={colors.blue}
                        colorPath={"#e4e4e4"}
                    />
                </Flex>
            }>
              <Route exact path={'/'} render={()=> <Home/>} />
              <Route exact path={'/detail'} render={()=> <Detail/>} />
              <Route exact path={'/suscription'} render={()=> <Suscription/>} />
              <Route exact path={'/resume'} render={()=> <Resume/>} />
            </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
