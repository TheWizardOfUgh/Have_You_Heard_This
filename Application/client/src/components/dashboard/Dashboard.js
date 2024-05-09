import React, { useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import useApi from "../../hooks/useApi.js";
import Nav from "../Nav.js";
import Search from "../search/Search.js";
import Likes from "../likes/Likes.js";
import Userpage from "../userpage/Userpage.js";
import UTRLikes from "../UTRLikes/UTRLikes.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Dashboard({ code }) {
  //custom hooks
  const accessToken = useAuth(code);
  const spotify = useApi(accessToken);
  //states

  return (
    <>
      <BrowserRouter>
        <Nav spotify={spotify}/>
        <Switch>
          <Route path="/UTRlikes">
            <UTRLikes spotify={spotify} />
          </Route>
          <Route path="/userinfo">
            <Userpage spotify={spotify} />
          </Route>
          <Route path="/likepage">
            <Likes spotify={spotify} />
          </Route>
          <Route path="/">
            <Search spotify={spotify} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
