import React,{
useEffect,
useState
} from "react";

import axios from "axios";

import API_URL from "../config";

import Sidebar from "../components/Sidebar";

import "./VendorSettings.css";

import {
FaBell,
FaRegCommentDots,
FaCog,
FaShieldAlt,
FaLock
} from "react-icons/fa";

import {
useNavigate
} from "react-router-dom";
const VendorSettings = ()=>{
    const navigate =
useNavigate();

const [vendor,
setVendor] =
useState(null);

const [loading,
setLoading] =
useState(true);

const [formData,
setFormData] =
useState({
businessName:"",
businessEmail:"",
phone:"",
businessAddress:"",
city:"",
state:"",
pinCode:"",
timeZone:"Asia/Kolkata",
dateFormat:"DD/MM/YYYY",
timeFormat:"12 Hour",

emailNotifications:{
newLead:true,
appointmentBooked:true,
appointmentReminder:true,
paymentReceived:true,
systemUpdates:true
},

smsNotifications:{
newLead:true,
appointmentBooked:true,
appointmentReminder:true,
paymentReceived:false
},

security:{
twoFactorEnabled:false,
loginAlerts:true
}
});

const [passwordData,
setPasswordData] =
useState({
currentPassword:"",
newPassword:"",
confirmPassword:""
});
useEffect(()=>{

fetchSettings();

},[]);
const fetchSettings =
async()=>{

try{

const token =
localStorage.getItem(
"vendorToken"
);

const res =
await axios.get(
`${API_URL}/api/vendor/settings`,
{
headers:{
Authorization:
`Bearer ${token}`
}
}
);

setVendor(
res.data.vendor
);

setFormData({

businessName:
res.data.vendor.businessName ||
res.data.vendor.firmName ||
"",

businessEmail:
res.data.vendor.businessEmail ||
res.data.vendor.officeEmail ||
"",

phone:
res.data.vendor.phone ||
res.data.vendor.mobile ||
"",

businessAddress:
res.data.vendor.businessAddress ||
res.data.vendor.addressLine1 ||
"",

city:
res.data.vendor.city || "",

state:
res.data.vendor.state || "",

pinCode:
res.data.vendor.pinCode ||
res.data.vendor.pincode ||
"",

timeZone:
res.data.vendor.timeZone ||
"Asia/Kolkata",

dateFormat:
res.data.vendor.dateFormat ||
"DD/MM/YYYY",

timeFormat:
res.data.vendor.timeFormat ||
"12 Hour",

emailNotifications:
res.data.vendor.emailNotifications,

smsNotifications:
res.data.vendor.smsNotifications,

security:
res.data.vendor.security

});

}catch(err){

console.log(err);

}finally{

setLoading(false);

}

};








const handleChange = (e) => {

setFormData({

...formData,

[e.target.name]:
e.target.value

});

};






const saveSettings =
async()=>{

try{

const token =
localStorage.getItem(
"vendorToken"
);

await axios.put(
`${API_URL}/api/vendor/settings`,
formData,
{
headers:{
Authorization:
`Bearer ${token}`
}
}
);

alert(
"Settings Updated Successfully"
);

}catch(err){

console.log(err);

alert(
"Failed to Save Settings"
);

}

};





const changePassword = async () => {

  try {

    const token =
      localStorage.getItem(
        "vendorToken"
      );

    await axios.put(
      `${API_URL}/api/vendor/change-password`,
      passwordData,
      {
        headers:{
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    alert(
      "Password Updated Successfully"
    );

  } catch(err) {

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

localStorage.removeItem(
"vendor"
);

navigate(
"/login"
);

};
return(

<div className="vendorsettings-layout">

<Sidebar/>

<div className="vendorsettings-main">
    <div className="vendorsettings-header">

<div>

<h1>
Settings
</h1>

<p>
Home / Settings
</p>

</div>

<div className="vendorsettings-header-right">

<button className="settings-icon">
<FaRegCommentDots/>
</button>

<button className="settings-icon">
<FaBell/>
</button>

<div
className="vendorsettings-profile"
onClick={handleLogout}
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






<div className="vendorsettings-card">

<div className="vendorsettings-left">

<div className="vendorsettings-icon">
<FaCog/>
</div>

<div>

<h3>
General Settings
</h3>

<p>
Manage your business information,
contact details and preferences.
</p>

</div>

</div>

<div className="vendorsettings-right">

<h3 className="business-title">
Business Information
</h3>

<div className="vendorsettings-grid">

<div className="vendorsettings-field">
<label>
Business Name
</label>

<input
type="text"
name="businessName"
value={formData.businessName}
onChange={handleChange}
/>
</div>

<div className="vendorsettings-field">
<label>
Business Email
</label>

<input
type="email"
name="businessEmail"
value={formData.businessEmail}
onChange={handleChange}
/>
</div>

<div className="vendorsettings-field">
<label>
Phone Number
</label>

<input
type="text"
name="phone"
value={formData.phone}
onChange={handleChange}
/>
</div>

<div className="vendorsettings-field vendorsettings-full">
<label>
Business Address
</label>

<input
type="text"
name="businessAddress"
value={formData.businessAddress}
onChange={handleChange}
/>
</div>

<div className="vendorsettings-field">
<label>
City
</label>

<input
type="text"
name="city"
value={formData.city}
onChange={handleChange}
/>
</div>

<div className="vendorsettings-field">
<label>
State
</label>

<input
type="text"
name="state"
value={formData.state}
onChange={handleChange}
/>
</div>

<div className="vendorsettings-field">
<label>
PIN Code
</label>

<input
type="text"
name="pinCode"
value={formData.pinCode}
onChange={handleChange}
/>
</div>

<div className="vendorsettings-field">
<label>
Time Zone
</label>

<select
name="timeZone"
value={formData.timeZone}
onChange={handleChange}
>
<option>
Asia/Kolkata
</option>

<option>
Asia/Dubai
</option>

<option>
Europe/London
</option>

</select>
</div>

<div className="vendorsettings-field">
<label>
Date Format
</label>

<select
name="dateFormat"
value={formData.dateFormat}
onChange={handleChange}
>

<option>
DD/MM/YYYY
</option>

<option>
MM/DD/YYYY
</option>

<option>
YYYY-MM-DD
</option>

</select>

</div>

<div className="vendorsettings-field">
<label>
Time Format
</label>

<select
name="timeFormat"
value={formData.timeFormat}
onChange={handleChange}
>

<option>
12 Hour
</option>

<option>
24 Hour
</option>

</select>

</div>

</div>

<button
className="vendorsettings-save-btn"
onClick={saveSettings}
>

Save Changes

</button>

</div>

</div>











<div className="vendorsettings-section-card">

<div className="vendorsettings-side-info">

<div className="vendorsettings-side-icon">
<FaBell/>
</div>

<div>

<h3>
Notification Settings
</h3>

<p>
Choose how you want to receive
notifications and stay updated.
</p>

</div>

</div>

<div className="vendorsettings-section-content">

<div className="notification-column">

<h4>
Email Notifications
</h4>

<p>
Receive email notifications for important updates.
</p>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.newLead
}
/>
New lead received
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.appointmentBooked
}
/>
Appointment booked
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.appointmentReminder
}
/>
Appointment reminder
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.paymentReceived
}
/>
Payment received
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.systemUpdates
}
/>
System updates & announcements
</label>

</div>

<div className="notification-column">

<h4>
SMS Notifications
</h4>

<p>
Receive SMS notifications for important updates.
</p>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.newLead
}
/>
New lead received
</label>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.appointmentBooked
}
/>
Appointment booked
</label>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.appointmentReminder
}
/>
Appointment reminder
</label>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.paymentReceived
}
/>
Payment received
</label>

</div>

<button
className="notification-save-btn"
onClick={saveSettings}
>
Save Changes
</button>

</div>

</div>










<div className="vendorsettings-section-card">

<div className="vendorsettings-side-info">

<div className="vendorsettings-side-icon">
<FaBell/>
</div>

<div>

<h3>
Notification Settings
</h3>

<p>
Choose how you want to receive
notifications and stay updated.
</p>

</div>

</div>

<div className="vendorsettings-section-content">

<div className="notification-column">

<h4>
Email Notifications
</h4>

<p>
Receive email notifications for important updates.
</p>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.newLead
}
/>
New lead received
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.appointmentBooked
}
/>
Appointment booked
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.appointmentReminder
}
/>
Appointment reminder
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.paymentReceived
}
/>
Payment received
</label>

<label>
<input
type="checkbox"
checked={
formData.emailNotifications
?.systemUpdates
}
/>
System updates & announcements
</label>

</div>

<div className="notification-column">

<h4>
SMS Notifications
</h4>

<p>
Receive SMS notifications for important updates.
</p>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.newLead
}
/>
New lead received
</label>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.appointmentBooked
}
/>
Appointment booked
</label>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.appointmentReminder
}
/>
Appointment reminder
</label>

<label>
<input
type="checkbox"
checked={
formData.smsNotifications
?.paymentReceived
}
/>
Payment received
</label>

</div>

<button
className="notification-save-btn"
onClick={saveSettings}
>
Save Changes
</button>

</div>

</div>





<div className="vendorsettings-section-card">

<div className="vendorsettings-side-info">

<div className="vendorsettings-side-icon">
<FaShieldAlt/>
</div>

<div>

<h3>
Security Settings
</h3>

<p>
Manage your account security and access preferences.
</p>

</div>

</div>

<div className="vendorsettings-section-content">

<div className="security-row">

<div>

<h4>
Two-Factor Authentication (2FA)
</h4>

<p>
Add an extra layer of security to your account.
</p>

</div>

<div className="security-actions">

<span className="security-badge">
Enabled
</span>

<button
className="security-btn"
>
Manage 2FA
</button>

</div>

</div>

<div className="security-row">

<div>

<h4>
Login Alerts
</h4>

<p>
Get notified about new logins to your account.
</p>

</div>

<label className="switch">

<input
type="checkbox"
checked={
formData.security
?.loginAlerts
}
/>

<span className="slider"></span>

</label>

</div>

</div>

</div>










<div className="vendorsettings-section-card">

<div className="vendorsettings-side-info">

<div className="vendorsettings-side-icon">
<FaLock/>
</div>

<div>

<h3>
Change Password
</h3>

<p>
Update your password to keep your account secure.
</p>

</div>

</div>

<div className="vendorsettings-section-content">

<div className="password-grid">

<input
type="password"
placeholder="Current Password"
value={
passwordData.currentPassword
}
onChange={(e)=>
setPasswordData({
...passwordData,
currentPassword:
e.target.value
})
}
/>

<input
type="password"
placeholder="New Password"
value={
passwordData.newPassword
}
onChange={(e)=>
setPasswordData({
...passwordData,
newPassword:
e.target.value
})
}
/>

<input
type="password"
placeholder="Confirm New Password"
value={
passwordData.confirmPassword
}
onChange={(e)=>
setPasswordData({
...passwordData,
confirmPassword:
e.target.value
})
}
/>

</div>

<button
className="password-update-btn"
onClick={
changePassword
}
>
Update Password
</button>

</div>

</div>





















</div>   
</div>   

);

};      

export default VendorSettings;