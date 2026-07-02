import API_URL from "../config";
import "./UserSettings.css";

import React,{
  useEffect,
  useState
} from "react";

import axios from "axios";

import UserSidebar from "../components/UserSidebar";

import {
  FaSearch,
  FaBell,
  FaRegCommentDots,
  FaCreditCard,
  FaWallet,
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaFileInvoice,
  FaDownload,
  
} from "react-icons/fa";

function UserSettings(){

const [user,setUser] =
useState({});

const [payments,setPayments] =
useState([]);

const [activeMenu,setActiveMenu] =
useState("payment");



const fetchUserProfile =
async()=>{

try{

const token =
localStorage.getItem(
"token"
);

const res =
await axios.get(
`${API_URL}/api/users/profile`,
{
headers:{
Authorization:
`Bearer ${token}`
}
}
);

setUser(
res.data.user
);

}
catch(error){
console.log(error);
}

};





const fetchPayments =
async(userId)=>{

try{

const token =
localStorage.getItem(
"token"
);

const res =
await axios.get(
`${API_URL}/api/payments/user/${userId}`,
{
headers:{
Authorization:
`Bearer ${token}`
}
}
);

setPayments(
res.data.payments ||
[]
);

}
catch(error){

console.log(error);

setPayments([]);

}

};



useEffect(()=>{

fetchUserProfile();

},[]);



useEffect(()=>{

if(user?._id){

fetchPayments(
user._id
);

}

},[user]);



return(

<div className="usersettings-layout">

<UserSidebar/>

<div className="usersettings-content">

{/* HEADER */}

<div className="usersettings-header">

<div className="usersettings-header-left">

<h1>
Settings
</h1>

<p>
Manage your account settings and preferences
</p>

</div>

<div className="usersettings-header-right">

<div className="usersettings-search-box">

<FaSearch/>

<input
type="text"
placeholder="Search anything..."
/>

<span>
Ctrl + K
</span>

</div>

<button className="usersettings-icon-btn">
<FaRegCommentDots/>
</button>

<button className="usersettings-icon-btn">

<FaBell/>

<div className="usersettings-count">
2
</div>

</button>

<div className="usersettings-user-box">

<img
src={
user?.profileImage
?
`${API_URL}${user.profileImage}`
:
"/avatar.png"
}
alt=""
/>

<div>

<h4>
{
user?.name ||
"Guest User"
}
</h4>

<p>
{
user?.role ||
"Business User"
}
</p>

</div>

</div>

</div>

</div>



<div className="usersettings-main">

<div className="usersettings-tabs">

  <button
    className={`usersettings-tab ${activeMenu === "payment" ? "active" : ""}`}
    onClick={() => setActiveMenu("payment")}
  >
    <FaCreditCard />
    Payment History
  </button>

  <button
    className={`usersettings-tab ${activeMenu === "cards" ? "active" : ""}`}
    onClick={() => setActiveMenu("cards")}
  >
    <FaWallet />
    Saved Payment Methods
  </button>

  <button
    className={`usersettings-tab ${activeMenu === "email" ? "active" : ""}`}
    onClick={() => setActiveMenu("email")}
  >
    <FaEnvelope />
    Email Notifications
  </button>


<button
  className={`usersettings-tab ${
    activeMenu === "notifications"
      ? "active"
      : ""
  }`}
  onClick={() =>
    setActiveMenu(
      "notifications"
    )
  }
>
  <FaBell />
  In-App Notifications
</button>


  <button
    className={`usersettings-tab ${activeMenu === "password" ? "active" : ""}`}
    onClick={() => setActiveMenu("password")}
  >
    <FaLock />
    Password Change
  </button>

  <button
    className={`usersettings-tab ${activeMenu === "privacy" ? "active" : ""}`}
    onClick={() => setActiveMenu("privacy")}
  >
    <FaShieldAlt />
    Privacy Settings
  </button>

</div>

</div>

</div>

</div>

);

}

export default UserSettings;