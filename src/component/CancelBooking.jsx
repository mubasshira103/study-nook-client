"use client";
import { AlertDialog, Button } from "@heroui/react";
import { FcCancel } from "react-icons/fc";

const CancelBooking = ({ bookingId }) => {

    const handleCancel = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/${bookingId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        window.location.reload();
    }

    return (
        <div>
            <AlertDialog>
                <Button variant="ghost" className={"rounded p-0"}><FcCancel /></Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCancel} slot="close" variant="danger">
                                    Delete Booking
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};
export default CancelBooking;
