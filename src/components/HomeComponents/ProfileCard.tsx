/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";

const ProfileCard = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting, errors },
  } = useForm();
  const newPassword = watch("newPassword");
  const confirmPassword = watch("ConsfirmPassword");

  //   const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/update-password", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: data.newPassword }),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Password updated successfully");
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err: any) {
      toast.error(err);
    }
  };
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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="border-2 bg-green-500 border-gray-500">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
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

            <Dialog>
              <DialogTrigger asChild>
                <Button className="border-2 border-green-500">
                  Update Password
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription>
                    Make changes to your Password here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Form>
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel />
                              <FormControl>
                                <Input
                                  className="py-6"
                                  placeholder="Enter User Name"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel />
                              <FormControl>
                                <Input
                                  className="my-4 py-6"
                                  placeholder="Enter Email"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel />
                              <FormControl>
                                <Input
                                  className="py-6"
                                  placeholder="Enter Password"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="bg-green-600 mt-3">
                          {isSubmitting ? "Registering.." : "Register"}
                        </Button>
                        <h1 className="mt-4">
                          Already Have an Account? Please
                          <Link href="/login">
                            <span className="text-green-700 ml-2 font-bold">
                              Login
                            </span>
                          </Link>
                        </h1>
                      </form>
                    </Form>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
