import React from "react";
import "./App.css";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <PostContainer />
      <PostContainer2 />
    </div>
  );
}

export default App;
