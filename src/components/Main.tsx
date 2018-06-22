import * as React from "react";

import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom"

import { Header } from "./header/index"
import { Home, NotFound } from "./pages/index"

class Main extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Main