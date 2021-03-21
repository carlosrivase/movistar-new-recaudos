import React, {lazy, Suspense, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/header";
import Loading from "./components/ui/loading/loading";
import {colors} from "./components/ui";
import Flex from "./components/ui/flex";
import {validateRoute} from "./utils/validateRoute";
import {withRouter} from "react-router-dom";

const Home = lazy(() => import('./components/home/home'));
const Detail = lazy(() => import('./components/detail/details'));
const Suscription = lazy(() => import('./components/suscriptions/suscriptions'));
const Resume = lazy(() => import('./components/resumen/resume'));


interface Props {
    history:any
}

const App:React.FC<Props> = (props) => {


    let goRoute = (e:string)=>{
        props.history.push(e);
    }

    useEffect(()=>{
        console.log("men")
        validateRoute(goRoute);
    },[])

    return (
        <Switch>
            <div className="main-container">
                <Header/>
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
                    <Route exact path={'/'} render={() => <Home/>}/>
                    <Route exact path={'/corporativo'} render={() => <Home/>}/>
                    <Route exact path={'/detail'} render={() => <Detail/>}/>
                    <Route exact path={'/suscription'} render={() => <Suscription/>}/>
                    <Route exact path={'/resume'} render={() => <Resume/>}/>
                </Suspense>
            </div>
        </Switch>
    );
}

export default withRouter(App);
