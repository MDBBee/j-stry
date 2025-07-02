"use client";
import { useTransition } from "react";
import { Button } from "../ui/button";
import { deleteJobAction } from "@/utils/actions/jobs";
import { toast } from "sonner";
import { PiSpinnerBallFill } from "react-icons/pi";

const DeleteJobBtn = ({ id }: { id: string }) => {
  const [isSubmitting, startTransition] = useTransition();
  return (
    <Button
      asChild
      disabled={isSubmitting}
      className="hover:border-red-500 border-2 cursor-pointer hover:text-red-500 hover:bg-muted"
    >
      <button
        onClick={() => {
          return startTransition(async () => {
            const { success, message } = await deleteJobAction(id);
            if (!success) {
              toast.error(message);
            }
            toast(message);
          });
        }}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <PiSpinnerBallFill className="animate-spin" /> Deleting....
          </span>
        ) : (
          "Delete Job"
        )}
      </button>
    </Button>
  );
};

export default DeleteJobBtn;
