"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { updateProfile } from "../_action";

export default function UpdateProfileModal({
  user,
}: {
  user: { name: string } | null;
}) {
  console.log(user, "user");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  // Sync user.name into local state when user prop changes
  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user]);
  //   const handleSubmit = async () => {
  //     setLoading(true)
  //     try {
  //       // Simulate API call
  //       await new Promise((res) => setTimeout(res, 1000))

  //       console.log({ name, picture })
  //       toast.success('Profile updated successfully!')
  //       setOpen(false)
  //     } catch (err) {
  //       console.error(err)
  //       toast.error('Failed to update profile')
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  const handleSubmit = async () => {
    if (!name.trim()) {
      toast.error("Name is required.");
      return;
    }

    setLoading(true);
    try {

      const formData = new FormData();
      formData.append("data", JSON.stringify({name:"name asdf as"})); // name goes as "data"

      // Append image only if it's selected
    //   if (picture) {
    //     formData.append("image", picture);
    //   }
  
      
      await updateProfile(formData);

      toast.success("Profile updated successfully!");
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="picture" className="text-right">
              Picture
            </Label>
            <Input
              id="picture"
              type="file"
              onChange={(e) => setPicture(e.target.files?.[0] || null)}
              className="col-span-3"
              disabled={loading}
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
