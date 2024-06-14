import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './App.css';
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
      path:"/",
      element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div >
      <Header/>
      <RouterProvider router={appRouter}/>
      

      
    </div>
    </Provider>
  );
}

export default App;
