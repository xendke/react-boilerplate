import React, { useState } from "react";
import ReactDOM from "react-dom";

import './styles.scss';

const App = () => {
  const [toggled, setToggled] = useState(false);
  console.log("toggled", toggled);
  return <div className="div" onClick={() => setToggled(!toggled)}>Hello World!</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
