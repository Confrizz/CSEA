import * as React from "react"
import { NavLink } from "react-router-dom"

class HeaderNavigation extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default HeaderNavigation
