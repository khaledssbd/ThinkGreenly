'use client';

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast, Toaster } from 'sonner';
import { Input } from '@/components/ui/input';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { registrationValidationSchema } from './registerValidation';
import { registerUser } from '@/services/AuthService';
import Link from 'next/link';
import { PasswordInput } from '@/components/ui/password-input';

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registrationValidationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      const res = await registerUser(data);
      if (res.success) {
        toast.success(res?.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen dark:text-white text-black flex justify-center items-center bg-transparent">
      <div className="backdrop-blur-2xl p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-green-500 relative">
      <Link href={'/'}  className="border inline font-bold shadow-md hover:shadow-sm hover:cursor-pointer px-3 py-1 rounded-full absolute top-0 right-0 m-2">X</Link>
        <h2 className="text-3xl font-bold text-center mb-6 text-green-400 tracking-wide">
          Create Account
        </h2>
        <Form {...form}>
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
                      value={field.value || ''}
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
                      value={field.value || ''}
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
                    <PasswordInput
                      className="py-6"
                      placeholder="Enter Password"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-green-600 mt-3">
              {isSubmitting ? 'Registering..' : 'Register'}
            </Button>
            <h1 className="mt-4">
              Already Have an Account? Please
              <Link href="/login">
                <span className="text-green-700 ml-2 font-bold">Login</span>
              </Link>
            </h1>
          </form>
        </Form>
      </div>
      <Toaster richColors />
    </div>
  );
};
export default RegisterForm;
