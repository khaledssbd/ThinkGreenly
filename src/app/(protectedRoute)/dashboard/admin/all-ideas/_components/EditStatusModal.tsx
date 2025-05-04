// components/EditStatusModal.tsx
"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EditStatusModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (newStatus: string) => void;
  currentStatus: string;
}

const statuses = ["DRAFT", "UNDER_REVIEW", "APPROVED", "REJECTED"];

export function EditStatusModal({
  open,
  onClose,
  onConfirm,
  currentStatus,
}: EditStatusModalProps) {
  const [selectedStatus, setSelectedStatus] = React.useState(currentStatus);

  React.useEffect(() => {
    setSelectedStatus(currentStatus);
  }, [currentStatus]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Idea Status</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select new status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status.replace(/_/g, " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onConfirm(selectedStatus)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

