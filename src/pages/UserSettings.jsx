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
  FaDownload
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

{/* LEFT MENU */}

<div className="usersettings-sidebar">

<h4>
Settings Menu
</h4>

<div
className={`usersettings-menu-item ${
activeMenu === "payment"
? "active"
: ""
}`}
onClick={()=>
setActiveMenu(
"payment"
)
}
>

<FaCreditCard/>

<div>

<h5>
Payment History
</h5>

<p>
View transactions and invoices
</p>

</div>

</div>



<div
className={`usersettings-menu-item ${
activeMenu === "cards"
? "active"
: ""
}`}
onClick={()=>
setActiveMenu(
"cards"
)
}
>

<FaWallet/>

<div>

<h5>
Saved Cards
</h5>

<p>
Manage cards and UPI
</p>

</div>

</div>



<div
className={`usersettings-menu-item ${
activeMenu === "notifications"
? "active"
: ""
}`}
onClick={()=>
setActiveMenu(
"notifications"
)
}
>

<FaBell/>

<div>

<h5>
Notification Settings
</h5>

<p>
Manage alerts
</p>

</div>

</div>



<div
className={`usersettings-menu-item ${
activeMenu === "email"
? "active"
: ""
}`}
onClick={()=>
setActiveMenu(
"email"
)
}
>

<FaEnvelope/>

<div>

<h5>
Email Preferences
</h5>

<p>
Manage communication
</p>

</div>

</div>



<div
className={`usersettings-menu-item ${
activeMenu === "password"
? "active"
: ""
}`}
onClick={()=>
setActiveMenu(
"password"
)
}
>

<FaLock/>

<div>

<h5>
Password Change
</h5>

<p>
Update password
</p>

</div>

</div>



<div
className={`usersettings-menu-item ${
activeMenu === "privacy"
? "active"
: ""
}`}
onClick={()=>
setActiveMenu(
"privacy"
)
}
>

<FaShieldAlt/>

<div>

<h5>
Privacy Settings
</h5>

<p>
Manage privacy controls
</p>

</div>

</div>

</div>



{/* RIGHT SIDE */}

<div className="usersettings-card">

<div className="usersettings-card-top">

<div>

<h2>
Payment History
</h2>

<p>
View and track transactions,
payments and invoices.
</p>

</div>

<button className="usersettings-filter-btn">
Filter
</button>

</div>



<div className="usersettings-table-wrapper">

<table className="usersettings-table">

<thead>

<tr>

<th>
Transaction ID
</th>

<th>
Date
</th>

<th>
Description
</th>

<th>
Type
</th>

<th>
Amount
</th>

<th>
Payment Method
</th>

<th>
Status
</th>

<th>
Invoice
</th>

</tr>

</thead>

<tbody>

{
payments.length > 0
?

payments.map((item)=>(

<tr key={item._id}>

<td>
{
item.transactionId
}
</td>

<td>

{
new Date(
item.createdAt
).toLocaleDateString()
}

</td>

<td>

{
item.description ||
item.serviceName ||
"Consultation Payment"
}

</td>

<td>
Payment
</td>

<td>

₹{
item.amount
}

</td>

<td>

{
item.paymentMethod
}

</td>

<td>

<span
className={`usersettings-status ${
item.status
}`}
>

{
item.status
}

</span>

</td>

<td>

<a
href={
item.invoiceUrl
}
target="_blank"
rel="noreferrer"
>

<FaFileInvoice/>

</a>

</td>

</tr>

))

:

<tr>

<td
colSpan="8"
className="usersettings-empty"
>

No payments found

</td>

</tr>

}

</tbody>

</table>

</div>

</div>

</div>

</div>

</div>

);

}

export default UserSettings;