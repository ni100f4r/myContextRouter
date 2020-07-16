import React, { Component } from "react";
import "./App.css";
import Switch from "./Switch";
import Toggle from "./toggle";
import Route from "./Router"

// function App() {
//   return (
//     <div className="App">
//       <h2>Button</h2>
//       {/* <Toggle></Toggle> */}
//       <Toggle>
//         <span>
//           <Toggle.Button></Toggle.Button>
//         </span>
//         <span>
//           <span>
//             <Toggle.Off>
//               <p>Toggle is Off</p>
//             </Toggle.Off>
//           </span>
//         </span>
//         <Toggle.On>
//           <p>Toggle is On</p>
//         </Toggle.On>
//       </Toggle>
//     </div>
//   );
// }
//=================== React rooter ===================//
const Homepage = () => (
  <div>
    <h1>Home</h1>
    <p>Hello this is homepage of our site</p>
  </div>
);
const Store = () => (
  <div>
    <h1>Store</h1>
    <p>You can buy anything from our site</p>
  </div>
);
const AboutUs = () => (
  <div>
    <h1>About Us</h1>
    <p>We Are Khafanest developers in the world</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul style={{ listStyle: "none" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/store" Component={Store}></Route>
        <Route path="/about" Component={AboutUs}></Route>
      </div>
    );
  }
}

export default App;
