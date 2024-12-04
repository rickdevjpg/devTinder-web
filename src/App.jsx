import { BrowserRouter, Route, Routes } from "react-router-dom"

import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Error from "./components/Error"


function App() {


  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/" >
    <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/" element={<Feed/>} />
    <Route path="/err" element={<Error/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    
    </Route>
    </Routes>
    </BrowserRouter> 
    </Provider>
    </>
  )
}

export default App
