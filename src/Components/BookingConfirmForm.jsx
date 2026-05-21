"use client";
import { useState } from "react";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const BookingConfirmForm = ({ facility }) => {
     const {_id, name, location, category, pricePerHour, rating, availableSlots, image, description} = facility;
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const totalPrice = hours * facility.pricePerHour;
                                                                                                         
   const { 
        data: session, 
        
    } = authClient.useSession() 
    // console.log(session);
    const user = session?.user;
    console.log(user);



  const handleBooking = async(e) => {
    e.preventDefault();

    const bookingData = {
      userName: user?.name,
      userEmail: user?.email,
      userId: user?.id,
      _id,
      name,
      location,
      category,
      pricePerHour,
      rating,
      availableSlots,
      image,
      description,
      hours,
      date,
      totalPrice,
      timeSlot,
    };

    console.log("Booking Confirmed:", bookingData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking`, {
        method: "POST",
        headers: {
            'content-type' : "application/json"
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    console.log(data);

    redirect("/my-bookings");


  };
  return (
    <Card className="py-10 px-8 space-y-4 shadow border border-gray-200">
      <div>
        <h2 className="text-2xl font-semibold text-orange-400">Book This Facility</h2>
        <p className="text-muted text-sm">Fill Up the form for Booking</p>
      </div>

      <form onSubmit={handleBooking} className="space-y-4">

  {/* Name */}
  <TextField isRequired name="name">
    <Label className="text-orange-400">Facility Name</Label>
    <Input
      value={name}
    />
    <FieldError />
  </TextField>
      
      

  {/* Booking Date */}
  <TextField isRequired name="date">
    <Label className="text-orange-400">Booking Date</Label>
    <Input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
    <FieldError />
  </TextField>

  {/* Time Slot */}
  <TextField isRequired name="timeSlot">
    <Label className="text-orange-400">Time Slot</Label>
    <select
      className="w-full border rounded-lg p-2"
      value={timeSlot}
      onChange={(e) => setTimeSlot(e.target.value)}
    >
      <option value="">Select Time Slot</option>
      <option value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</option>
      <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
      <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
      <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
    </select>
    <FieldError />
  </TextField>

  {/* Hours */}
  <TextField isRequired name="hours">
    <Label className="text-orange-400">Hours</Label>
    <Input
      type="number"
      min={1}
      value={hours}
      onChange={(e) => setHours(Number(e.target.value))}
      placeholder="Enter hours"
    />
    <FieldError />
  </TextField>

  {/* Total Price */}
  <div className="p-3 bg-gray-100 rounded-lg flex items-center gap-2 text-sm">
    <span className="text-orange-400">Total Price:</span>
    <span className="font-bold">{totalPrice} BDT</span>
  </div>

  {/* Submit */}
  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-400 hover:shadow hover:shadow-orange-700 mt-2 py-6 text-xl" >
    Confirm Booking
  </Button>

</form>
    </Card>
  );
};

export default BookingConfirmForm;


















