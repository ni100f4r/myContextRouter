import React, { Component } from "react";
import "./App.css";
import Switch from "./Switch";
import Toggle from "./toggle";
// import Route from "./Router/Router";


//=================== React Router_Me ===================//
var createHistory = require("history").createBrowserHistory;
const RouterContext = React.createContext();

class Router extends Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
    this.history.listen(() => this.forceUpdate());
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          history: this.history,
          location: window.location
        }}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

const Link = ({ to, children }) => (
  <RouterContext.Consumer>
    {(context) => {
      return (
        <a
          onClick={(e) => {
            e.preventDefault();
            context.history.push(to);
          }}
          href={to}
        >
          {children}
        </a>
      )
    }}
  </RouterContext.Consumer>
);

const Route = ({ path, exact, component: Component }) => {
  return (
    <RouterContext.Consumer>
      {context => {
        const shouldRender = exact
        ? context.location.pathname === path
        : context.location.pathname.startsWith(path);
      if (shouldRender) {
        return <Component></Component>;
      } else return null;
    }}
    </RouterContext.Consumer>
  );
};

class Redirect extends Component {
  static contextType = RouterContext;
  componentDidMount() {
    this.context.history.push(this.props.to);
  }
  render() {
    return null;
  }
}

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

class AuthenticatedPage extends Component {
  state = {
    time: 10,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return { time: prevState.time - 1 };
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    if (this.state.time <= 0) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div>
        <p>
          This is a Authenticated page. redirecting in: {"" + this.state.time}
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/store" component={Store}></Route>
        <Route path="/about" component={AboutUs}></Route>
        <Route path="/admin" component={AuthenticatedPage}></Route>
        </>
        </Router>
      </div>
    );
  }
}
//=================  Eddi  =================//
// const RouterContext = React.createContext();
// class Router extends Component {
//   constructor(props) {
//     super(props);
//     this.history = createHistory();
//     this.history.listen(() => this.forceUpdate());
//   }

//   render() {
//     return (
//       <RouterContext.Provider
//         value={{
//           history: this.history,
//           location: window.location
//         }}>
//         {this.props.children}
//       </RouterContext.Provider>
//     );
//   }
// }

// const Link = ({ to, children }) => (
//   <RouterContext.Consumer>
//     {context => {
//       console.log(context);
//       return (
//         <a
//           onClick={e => {
//             e.preventDefault();
//             context.history.push(to);
//           }}
//           href={to}>
//           {children}
//         </a>
//       );
//     }}
//   </RouterContext.Consumer>
// );

// const Route = ({ path, exact, component: Component }) => {
//   return (
//     <RouterContext.Consumer>
//       {context => {
//         const shouldRender = exact
//           ? context.location.pathname === path
//           : context.location.pathname.startsWith(path);
//         if (shouldRender) {
//           return <Component />;
//         } else return null;
//       }}
//     </RouterContext.Consumer>
//   );
// };

// class Redirect extends Component {
//   static contextType = RouterContext;

//   componentDidMount() {
//     this.context.history.push(this.props.to);
//   }
//   render() {
//     return null;
//   }
// }

// const Homepage = () => (
//   <div>
//     <h1>Home</h1>
//     <p>Hello this is homepage of our site</p>
//   </div>
// );
// const Store = () => (
//   <div>
//     <h1>Store</h1>
//     <p>You can buy anything from our site</p>
//   </div>
// );
// const AboutUs = () => (
//   <div>
//     <h1>About Us</h1>
//     <p>We Are Khafanest developers in the world</p>
//   </div>
// );

// class AuthenticatedPage extends Component {
//   state = {
//     time: 10
//   };
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState(prevState => {
//         return { time: prevState.time - 1 };
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     if (this.state.time <= 0) {
//       return <Redirect to="/" />;
//     }
//     return (
//       <div>
//         <p>
//           This is a authenticated page. redirecting in:{' '}
//           {this.state.time}
//         </p>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/store">Store</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/admin">Admin</Link>
//               </li>
//             </ul>
//             <Route exact path="/" component={Homepage} />
//             <Route path="/store" component={Store} />
//             <Route path="/about" component={AboutUs} />
//             <Route path="/admin" component={AuthenticatedPage} />
//           </>
//         </Router>
//       </div>
//     );
//   }
// }

//==================  Switch_Context  ==================//
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

export default App;
