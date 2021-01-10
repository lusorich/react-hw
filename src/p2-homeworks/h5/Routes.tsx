import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import UpperJunior from "./pages/UpperJunior";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    UPPER_JUNIOR: "/upper-junior"
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR} />} />
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior />} />
                <Route path={PATH.JUNIOR} render={() => <Junior />} />
                <Route path={PATH.UPPER_JUNIOR} render={() => <UpperJunior />} />
                <Route render={() => <Error404 />} />
            </Switch>
        </div >
    );
}

export default Routes;
