import * as React from "react"

import HeaderNavigation from "./HeaderNavigation"

class Header extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <div>
                <HeaderNavigation />
            </div>
        )
    }
}

export default Header
