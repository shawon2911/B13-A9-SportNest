"use client";
import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookingCancleButton = ({booking}) => {
    const hangleBookingCancle = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/booking/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await res.json();

  console.log(data);
  // console.log(id);
  window.location.reload();
};
    return (
        <AlertDialog>
      
            <Button  className={'rounded-none flex items-center gap-2 bg-orange-500 transition hover:bg-orange-700 '}>
                <RiDeleteBin6Line className="text-lg" />
                <span className="font-medium">Cancel</span>
              </Button>
        
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking Permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{booking.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=>{hangleBookingCancle(booking._id)}} slot="close" variant="danger">
                Cancle Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default BookingCancleButton;