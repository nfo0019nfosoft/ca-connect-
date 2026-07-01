import React,{
  useEffect,
  useState
} from "react";

import axios from "axios";

import API_URL from "../config";

import Sidebar from "../components/Sidebar";

import "./VendorAvailability.css";

import {useNavigate}
from "react-router-dom";

import {
  FaBell,
  FaRegCommentDots,
  FaExternalLinkAlt,
  FaPlus,
  FaTrash,
  FaChevronDown
} from "react-icons/fa";

const VendorAvailability = ()=>{

const navigate =
useNavigate();

const [vendor,
setVendor] =
useState(null);

const [services,
setServices] =
useState([]);

const [selectedService,
setSelectedService] =
useState("");

const [selectedDays,
setSelectedDays] =
useState([
"Mon",
"Tue",
"Wed",
"Thu",
"Fri"
]);

const [slots,
setSlots] =
useState([
{
startTime:"09:00",
endTime:"13:00"
},
{
startTime:"14:00",
endTime:"18:00"
}
]);

const [bufferTime,
setBufferTime] =
useState(15);

const [advanceBooking,
setAdvanceBooking] =
useState(30);

const [duration,
setDuration] =
useState(60);

const [fee,
setFee] =
useState(2499);

const [loading,
setLoading] =
useState(true);

useEffect(()=>{

 fetchVendor();

 fetchServices();

},[]);

const fetchVendor =
async()=>{

 try{

   const vendorId =
   localStorage.getItem(
     "vendorId"
   );

   console.log(
     "VENDOR ID =>",
     vendorId
   );

   if(
     !vendorId ||
     vendorId === "null"
   ){
     return;
   }

   const res =
   await axios.get(
   `${API_URL}/api/vendor/${vendorId}`
   );

   console.log(
     res.data
   );

   setVendor(
     res.data.vendor ||
     res.data
   );

 }catch(err){

   console.log(err);

 }

};

const fetchServices =
async()=>{

 try{

   const vendorId =
   localStorage.getItem(
     "vendorId"
   );

   const res =
   await axios.get(
   `${API_URL}/api/vendor/${vendorId}`
   );

   setServices(
     res.data.vendor
     ?.services || []
   );

   if(
     res.data.vendor
     ?.services?.length > 0
   ){

     setSelectedService(
       res.data.vendor
       .services[0]
     );

     setDuration(
       res.data.vendor
       .services[0]
       ?.duration || 60
     );

     setFee(
       res.data.vendor
       .services[0]
       ?.price || 2499
     );

   }

 }catch(err){

   console.log(err);

 }finally{

   setLoading(false);

 }

};

const toggleDay =
(day)=>{

 if(
   selectedDays.includes(day)
 ){

   setSelectedDays(
     selectedDays.filter(
       item =>
       item !== day
     )
   );

 }else{

   setSelectedDays([
     ...selectedDays,
     day
   ]);

 }

};

const addSlot = ()=>{

 setSlots([
   ...slots,
   {
     startTime:"",
     endTime:""
   }
 ]);

};

const removeSlot =
(index)=>{

 const updated =
 [...slots];

 updated.splice(
   index,
   1
 );

 setSlots(updated);

};

const updateSlot =
(
index,
field,
value
)=>{

 const updated =
 [...slots];

 updated[index][field] =
 value;

 setSlots(updated);

};

const saveAvailability =
async()=>{

 try{

   const token =
   localStorage.getItem(
     "vendorToken"
   );

   await axios.put(
   `${API_URL}/api/vendor/availability`,
   {
     serviceId:
     selectedService?._id,

     days:
     selectedDays,

     slots,

     duration,

     fee,

     bufferTime,

     advanceBooking
   },
   {
     headers:{
       Authorization:
       `Bearer ${token}`
     }
   }
   );

   alert(
   "Availability Saved Successfully"
   );

 }catch(err){

   console.log(err);

 }

};




const handleLogout = ()=>{

  const confirmLogout =
    window.confirm(
      "Are you sure you want to logout?"
    );

  if(!confirmLogout) return;

  localStorage.removeItem(
    "vendorToken"
  );

  localStorage.removeItem(
    "vendorId"
  );

  navigate(
    "/login"
  );

};

if(loading){

 return(
 <div>
 Loading...
 </div>
 );

}

return(

<div className="vendoravailability-layout">

<Sidebar/>

<div className="vendoravailability-main">

{/* HEADER */}

<div className="vendoravailability-header">

<div>

<h1>
Set Availability
</h1>

<p>
Home /
Appointments /
Set Availability
</p>

</div>

<div className="vendoravailability-right">

<button
className="vendoravailability-icon"
>
<FaRegCommentDots/>
</button>

<button
className="vendoravailability-icon"
>
<FaBell/>
</button>

<div
className="vendoravailability-profile"
>

<img
  src={
    vendor?.photo
      ? `${API_URL}/uploads/${vendor.photo}`
      : "/avatar.png"
  }
  alt="Profile"
  onClick={handleLogout}
  style={{
    cursor:"pointer"
  }}
/>

<div>

<h4>
{
vendor?.fullName ||
"Vendor"
}
</h4>

<p>
{
vendor?.firmName
}
</p>

</div>

</div>

</div>

</div>

<a
href="#"
className="booking-link"
>

<FaExternalLinkAlt/>

View Public Booking Page

</a>

{/* SERVICE */}

<div className="availability-card">

<h3>
1. Select Service
</h3>

<p>
Choose service for
availability
</p>

<div className="service-row">

<select
value={selectedService?._id || ""}
onChange={(e)=>{

  const service =
  services.find(
    item =>
    item._id === e.target.value
  );

  setSelectedService(
    service
  );

  setDuration(
    service?.duration || 60
  );

  setFee(
    service?.price || 0
  );

}}
>

{
services.map(
(item)=>(
<option
key={item._id}
value={item._id}
>
{item.serviceName}
</option>
)
)
}

</select>

<button>

Manage Services

</button>

</div>

<div className="service-info">

<span>

Duration:
{
duration
}
Minutes

</span>

<span>

Fee:
₹
{
fee
}

</span>

</div>

</div>

{/* DAYS */}

<div className="availability-card">

<h3>
2. Set Availability
</h3>

<p>
Select your available days
</p>

<div className="days-grid">

{
[
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
].map(
(day)=>(
<button
key={day}
className={
selectedDays.includes(day)
?
"active-day"
:
""
}
onClick={()=>
toggleDay(day)
}
>
{day}
</button>
)
)
}

</div>

{/* SLOTS */}

{
slots.map(
(
slot,
index
)=>(
<div
key={index}
className="slot-row"
>

<input
type="time"
value={
slot.startTime
}
onChange={(e)=>
updateSlot(
index,
"startTime",
e.target.value
)
}
/>

<span>
to
</span>

<input
type="time"
value={
slot.endTime
}
onChange={(e)=>
updateSlot(
index,
"endTime",
e.target.value
)
}
/>

<button
onClick={()=>
removeSlot(index)
}
>

<FaTrash/>

</button>

</div>
)
)
}

<button
className="add-slot-btn"
onClick={
addSlot
}
>

<FaPlus/>

Add Time Slot

</button>

<label>
Buffer Time
</label>

<select
value={
bufferTime
}
onChange={(e)=>
setBufferTime(
e.target.value
)
}
>

<option value="15">
15 Minutes
</option>

<option value="30">
30 Minutes
</option>

<option value="45">
45 Minutes
</option>

<option value="60">
60 Minutes
</option>

</select>

<label>
Advance Booking
</label>

<select
value={
advanceBooking
}
onChange={(e)=>
setAdvanceBooking(
e.target.value
)
}
>

<option value="7">
7 Days
</option>

<option value="15">
15 Days
</option>

<option value="30">
30 Days
</option>

<option value="60">
60 Days
</option>

</select>

<div className="availability-actions">

<button
className="cancel-btn"
>

Cancel

</button>

<button
className="save-btn"
onClick={
saveAvailability
}
>

Save Availability

</button>

</div>

</div>

{/* PREVIEW */}

<div className="availability-preview">

<h3>
Preview
</h3>

<h4>
{
selectedService
?.serviceName
}
</h4>

<p>

{
duration
}
Minutes

</p>

<p>

{
selectedDays.join(", ")
}

</p>

{
slots.map(
(
slot,
index
)=>(
<span
key={index}
>

{
slot.startTime
}

-

{
slot.endTime
}

</span>
)
)
}

</div>

</div>

</div>

);

};

export default
VendorAvailability;