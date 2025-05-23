/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast, Toaster } from "sonner";
import { Input } from "@/components/ui/input";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { loginValidationSchema } from "./loginValidation";
import { loginUser } from "@/services/AuthService";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res.success) {
        toast.success(res?.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen text-white flex justify-center items-center bg-transparent">
      <div className="backdrop-blur-2xl p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-green-500">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-400 tracking-wide">
          Log In
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
              {isSubmitting ? "Logging in.." : "Log in"}
            </Button>
          </form>
        </Form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default LoginForm;
