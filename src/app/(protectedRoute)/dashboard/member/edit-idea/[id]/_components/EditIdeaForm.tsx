"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { category, TIdea } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import TGImageUploader from "@/components/ui/TGImageUploader";
import ImagePreviewer from "@/components/ui/TGImageUploader/ImagePreviewer";
import { createAnIdea, draftAnIdea } from "../_action";
import { ideaDraftSchema } from "../../../create-idea/_components/IdeaValidation";

const EditIdeaForm = ({
  categories,
  data,
}: {
  categories: category[];
  data: TIdea;
}) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [isDrafting, setIsDrafting] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (data?.images && data.images.length > 0) {
      setImagePreview(data.images);
    }
  }, [data]);
  
  const form = useForm({
    resolver: zodResolver(ideaDraftSchema),
    defaultValues: {
      title: data?.title || "",
      problemStatement: data?.problemStatement || "",
      solution: data?.solution || "",
      description: data?.description || "",
      categoryId: data?.categoryId || "",
      price: data?.price || 0,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleIdeaSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(imageFiles.length, imagePreview.length);
    if (isDrafting) {
      if (!data.title || data.title.trim().length < 10) {
        toast.error("Title must be at least 10 characters for a draft.");
        return;
      }

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));

      if (imagePreview.length > 0 && imagePreview[0].startsWith("http")) {
        formData.append("images", JSON.stringify(imagePreview));
      } else {
        for (const file of imageFiles) {
          formData.append("images", file);
        }
      }

      try {
        const res = await draftAnIdea(formData);
        if (res?.success) {
          toast.success("Idea added to draft successfully!");
          router.push(`/ideas/${res?.data?.id}`); // or to draft page
        } else {
          toast.error(res?.message);
        }
      } catch (err: any) {
        console.error(err);
        toast.error("Failed to draft idea.");
      }
      return;
    }

    // Publish Idea Mode
    if ( !data.title ||
    !data.problemStatement ||
    !data.solution ||
    !data.description ||
    !data.categoryId ||
    !data.price ||
    (imageFiles.length < 1 || imagePreview.length < 1)) {
      toast.error("All fields and at least one image are required to publish");
      return;
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (imagePreview.length > 0 && imagePreview[0].startsWith("http")) {
      formData.append("images", JSON.stringify(imagePreview));
    } else {
      for (const file of imageFiles) {
        formData.append("images", file);
      }
    }

    try {
      const res = await createAnIdea(formData);
      if (res?.success) {
        toast.success(res?.message);
        router.push(`/ideas/${res?.data?.id}`);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to publish idea.");
    }
  };

  return (
    <div className="p-4 md:p-0">
      <h1 className="text-3xl text-center mb-6">Edit Idea</h1>
      <div className="flex justify-center h-screen mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleIdeaSubmit)}
            className="space-y-4 w-full md:w-2/3 text-center"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idea Title:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter idea title"
                      {...field}
                      // defaultValue={data?.title || ""}
                      value={field.value ?? ""}
                    />
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
                      placeholder="Enter idea problem statement"
                      {...field}
                      // defaultValue={data?.problemStatement || ""}
                      value={field.value ?? ""}
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
                    <Input
                      placeholder="Enter idea solution"
                      {...field}
                      // defaultValue={data?.solution || ""}
                      value={field.value ?? ""}
                    />
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
                    <Textarea
                      placeholder="Enter idea description"
                      {...field}
                      // defaultValue={data?.description || ""}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <p className="text-primary font-bold text-xl text-center border-t border-b py-3 my-5">
                Images
              </p>

              <div className="flex gap-4">
                <TGImageUploader
                  setImageFiles={(files) => {
                    setImageFiles(files);
                  }}
                  setImagePreview={(previews) => {
                    setImagePreview(previews);
                  }}
                  label="Upload New Images"
                  className="w-fit mt-0"
                />
                <ImagePreviewer
                  className="flex flex-wrap gap-4"
                  setImageFiles={setImageFiles}
                  imagePreview={imagePreview}
                  setImagePreview={setImagePreview}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category:</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      // defaultValue={data?.categoryId || ""}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value)}
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
                      // defaultValue={data?.price || 0}
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center gap-4 mt-4 mb-20">
              <Button
                type="button"
                onClick={() => {
                  setIsDrafting(true);
                  form.handleSubmit(handleIdeaSubmit)();
                }}
                disabled={isSubmitting}
                variant="outline"
              >
                {isSubmitting && isDrafting
                  ? "Saving Draft..."
                  : "Add to Draft"}
              </Button>

              <Button
                type="submit"
                onClick={() => setIsDrafting(false)}
                disabled={isSubmitting || imageFiles.length < 0}
              >
                {isSubmitting && !isDrafting ? "Publishing..." : "Publish Idea"}
              </Button>
            </div>

            {/* <Button
              className="mt-4 mb-20 gap-2"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span>Creating...</span>
                </div>
              ) : (
                'Create Idea'
              )}
            </Button> */}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditIdeaForm;
