import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


const App= ()=> {
  const pageSize=15;
  const apikey=process.env.REACT_APP_NEWS_API
    return (
      <div>
       `<Router>
       <Navbar/>
       <Routes>
       <Route exact path="/"element={<News key='general' country={"in"} apikey={apikey} category={'general'} />}></Route>
       <Route exact path="/general"element={<News key='general' country={"in"} apikey={apikey} category={'general'}  />}></Route>
       <Route exact path="/entertainment" element={<News key='entertainment' country={"in"} apikey={apikey} category={'entertainment'} />}></Route>
       <Route exact path="/business"element={<News key='business' country={"in"} apikey={apikey} category={'business'}/>}></Route>
       <Route exact path="/sports" element={<News key='sports' country={"in"} apikey={apikey} category={'sports'} />}></Route>
       <Route exact path="/health"element={<News key='health' country={"in"} apikey={apikey} category={'health'} />}></Route>
       <Route exact path="/science"element={<News key='science' country={"in"} apikey={apikey} category={'science'} />}></Route>
       <Route exact path="/technology" element={<News key='technology' country={"in"} apikey={apikey} category={'technology'} />}></Route>
       </Routes>
       </Router>
        </div>
    );
  
}
export default App