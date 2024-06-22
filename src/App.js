import Header from "./components/Header";
import Body from "./components/Body";
import './App.css';
import { Provider } from "react-redux";
import store from "./utils/store";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideosContainer from './components/SearchVideosContainer'
import SideBar from "./components/SideBar";
import { SiD } from "react-icons/si";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
      path:"/",
      element:(
      <div><Header/><MainContainer/></div>)
      },
      {
        path:"watch",
        element:(
        <div>
          <Header/>
          <div className="flex">
            <SideBar/>
        <WatchPage/></div></div>)
      },
      {
        path:"results/:searchQuery",
        element:(<div><Header/>
        <div className="flex">
        <SideBar /><SearchVideosContainer/></div></div>), 
      },
      {
        path:"results/watch",
        element:(<div><Header/>
        <div className="flex"><SideBar /><WatchPage/></div></div>)

      },
      
    ]
  }
])


function App() {
  
  return (
    
    <Provider store={store}>
    <div >
   
      <RouterProvider router={appRouter}/>

    </div>
    </Provider>
  );
}

export default App;
