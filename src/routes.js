<Route path='/:id' render={()=> {
    <Switch>
        <Route path='/:id/dashboard' component={Dashboard}/>
        <Route path='/:id/profile' component={Profile}/>

    </Switch>
}}/>;

//This is just an example of how to use render props to do nested routing.