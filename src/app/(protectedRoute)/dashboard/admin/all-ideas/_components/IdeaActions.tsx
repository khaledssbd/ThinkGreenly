/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";
// import { toast } from "react-hot-toast"; // or use your toast library
// import { deleteIdea } from "@/lib/actions"; // adjust path
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import * as React from "react";
import { deleteIdea } from "../_actions";
import { toast } from "sonner";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";

export function IdeaActions({ ideaId }: { ideaId: string }) {
  const [open, setOpen] = React.useState(false);

  const handleConfirmDelete = async () => {
    try {
      await deleteIdea(ideaId);
      toast.success("Idea deleted successfully");
      // Add router.refresh() or mutate() here if needed
    } catch (err: any) {
      toast.error(err.message || "Failed to delete idea");
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
      <DropdownMenuItem onClick={() => setOpen(true)} className="text-red-600">
        <span className="flex items-center">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete idea</span>
        </span>
      </DropdownMenuItem>

      <DeleteConfirmationModal
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
