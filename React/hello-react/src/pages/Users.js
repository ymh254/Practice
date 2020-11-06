import React from "react"
import { Route } from "react-router-dom"
import UserDetail from "./UserDetail"

function Users({ match }) {
    return (
        <>
            <Route exact path={match.path} component={UserDetail} />
            {/* <Route path={`${match.path}/:id`} component={UserDetail} /> */}
        </>
    )
}

export default Users