import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"

const Body = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const userData=useSelector(store=>store.user);


  //if we refresh our page the user gets logged out. as the redux store also gets refreshed
  //to tackle this problem we wil---
  const fetchUser=async()=>{

    //we do we so we dont make api calls again and again if we already have the user in the store
    if(userData)
      return;
    else
    try{const res=await axios.get(BASE_URL+"/profile/view",{
      withCredentials:true
    })

    dispatch(addUser(res.data));
  
  
  }
    catch(err)
    {
      //if user is unauthorized then only navigate
     if(err.status===401)
      navigate("/login");
    else
    navigate("/err");

     //for some other server or client err redirect to a error page

     // console.error(err);
    }
  }


  //as soon as we load the page we call backend for profile/view and get the user and add it to the redux store
  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
