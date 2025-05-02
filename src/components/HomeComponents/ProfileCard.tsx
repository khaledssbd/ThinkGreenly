"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Card } from "../ui/card";

import { useUser } from "@/context/UserContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ProfileCard = () => {
  const { user } = useUser();
  //   const fileInputRef = useRef<HTMLInputElement>(null);

  console.log(user);
  return (
    <div className="flex justify-center items-center min-h-screenp-4 mt-24">
      <Card className="w-full max-w-sm shadow-lg rounded-2xl p-6text-center border-2 border-green-500">
        <div className="flex flex-col items-center">
          <Image
            src={user?.image as string}
            alt="Profile"
            width={1200}
            height={1200}
            className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-600 mb-4 ">{user?.email}</p>

          <div className="flex flex-col gap-2 w-[85%] gap-y-4">
            <Button className="border-2 bg-green-500 border-gray-500">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={user?.name}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="picture">Picture</Label>
                      <Input id="picture" type="file" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Button>
            <Button className="border-2 border-green-500">
              Update Password
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
