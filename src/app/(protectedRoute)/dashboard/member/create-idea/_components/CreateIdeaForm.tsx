'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { category } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from "next/image";
import { toast } from 'sonner'
import { postIdea } from '../_action'

const CreateIdeaForm = ({ categories }: { categories: category[] }) => {

    const [loading, setLoading] = useState(false);
    

    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const ideaSchema = z.object({
        title: z.string().min(9, "Title is required"),
        problemStatement:  z.string().min(15,"Problem statement must be at least 15 characters"),
        solution: z.string().min(20, "Solution must be at least 20 characters long"),
        description: z.string().min(20, "Description must be 20 characters long"),
        // images: z.array(z.any()).nonempty("Select at least one image").nullable(),
        images: z
  .array(z.instanceof(File))
  .min(1, "Select at least one image"),
        price: z.number().positive("Price is must a positive value"),
        categoryId: z.string()
    })
    type TCreateIdea = z.infer<typeof ideaSchema>


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files![0];
      if (!files) return;
      const fileArray = Array.from(files);
      setSelectedImages((prev) => [...prev,files]);
      form.setValue("images", [...selectedImages, files], {
        shouldValidate: true,
      });
    };

    const handleRemoveImage = (index: number) => {
      const newImages = [...selectedImages];
      newImages.splice(index, 1);
      setSelectedImages(newImages);
      form.setValue("images", newImages, { shouldValidate: true });
    };

    const form = useForm<TCreateIdea>({
        resolver:zodResolver(ideaSchema),
        defaultValues: {
            title: "",
            problemStatement: "",
            solution: "",
            description: "",
            images: [],
            categoryId: ""
        }
    })

    const onSubmit = async (data: TCreateIdea) => {
      try {
        console.log(data)
        setLoading(true);
        const formData = new FormData();
        if (selectedImages.length > 0) {
        //   selectedImages.forEach((file) => {
        //     formData.append("images", file); 
        //   });
        if (selectedImages?.length ===0) {
      toast.error('Please upload at least 3 image!');
      return;
    }
        for (const file of selectedImages) {
          formData.append("images", file);
          console.log(file)
        }
        }
        formData.append(
          "data",
          JSON.stringify(data)
          );
        //   console.log("FormData preview:");
        //   for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}:`, pair[1]);
        //   }
       const result =await postIdea(formData);
       
        // console.log(result);
          if (result)
          { toast.success("Idea created successfully") }
          
      } catch (err:any) {
          toast.error(err?.message || "something went wrong")
        console.error("Submit failed:", err);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="p-4 md:p-0">
      <h1 className="text-3xl text-center mb-6">Create Idea</h1>
      <div className="flex justify-center h-screen mx-auto ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter idea title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="problemStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Problem Statement:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter idea problem statement "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="solution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Solution:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter idea solution" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter idea description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={() => (
                <FormItem>
                  <FormLabel>Images:</FormLabel>
                  <FormControl>
                    <>
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                      />
                      <div className="flex flex-wrap gap-3 mt-2">
                        {selectedImages.map((file, index) => (
                          <div key={index} className="relative w-24 h-24">
                            <Image
                              src={URL.createObjectURL(file)}
                              alt={`preview-${index}`}
                              fill
                              className="object-cover rounded"
                            />
                            <button
                              type="button"
                              className="absolute top-0 right-0 bg-black bg-opacity-60 text-white text-xs px-1 rounded-full"
                              onClick={() => handleRemoveImage(index)}
                            >
                              X
                            </button>
                          </div>
                        ))}
                      </div>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category:</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full border border-input bg-background px-3 py-2 rounded-md"
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categories?.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price:</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter idea price"
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-4 flex items-center gap-2"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <span>Creating...</span>
                </div>
              ) : (
                "Create Idea"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CreateIdeaForm
