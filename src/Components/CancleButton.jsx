"use client";
import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CancleButton =  ({
  itemId,
  itemName,
  endpoint,
  buttonText = "Delete",
}) => {
   const handleDelete = async () => {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}/${itemId}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    console.log(data);

    window.location.reload();
  };

    return (
        <AlertDialog>

      <Button className="rounded-none flex items-center py-6 gap-2 bg-red-500 transition hover:bg-red-700">
        <RiDeleteBin6Line className="text-lg" />

        <span className="font-medium">
          {buttonText}
        </span>
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Are you sure?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently remove{" "}
                <strong>{itemName}</strong>.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Confirm
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>

    </AlertDialog>
  );
};

export default CancleButton;