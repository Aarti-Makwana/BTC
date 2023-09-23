// alert("hiiiiiiiii");
// var short_term_booking_btn = document.getElementById("short-term-booking-btn");
// console.log(short_term_booking_btn)
// short_term_booking_btn.addEventListener("ckick",()=>{
//     // alert("nfffffff")
//     window.location.href="ride_booking_page"
// });

var long_term_booking_btn = document.getElementById("long-term-booking-btn");
console.log(long_term_booking_btn);
long_term_booking_btn.addEventListener("ckick",()=>{
    // alert("hi")
    window.location.href="vehicle_booking_page"
});

var driver_dashboard_button = document.getElementById("short-term-booking-btn");

driver_dashboard_button.addEventListener("click",()=>{
    window.location.href="driver_dashboard";
});