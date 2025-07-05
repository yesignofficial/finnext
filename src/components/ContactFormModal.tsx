"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { X, Send, Check, AlertCircle, GraduationCap } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "Name can only contain letters, spaces, hyphens, and apostrophes.",
    }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must not exceed 100 characters." }),

  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^\+?[\d\s()-]+$/, {
      message:
        "Phone number can only contain digits, spaces, parentheses, hyphens, and plus sign.",
    })
    .refine(
      (phone) => {
        const digitsOnly = phone.replace(/\D/g, "");
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      {
        message: "Phone number must contain between 10-15 digits.",
      },
    ),

  reason: z.string().min(1, { message: "Please select a reason for contact." }),

  qualification: z
    .string()
    .min(1, { message: "Please select your qualification." }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof FormValidation>;

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      qualification: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },

    onSuccess: () => {
      toast(
        (t) => (
          <motion.div
            className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-xl border border-green-200 bg-white p-6 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500">
              <Check className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Message Sent Successfully! 🎉
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Thank you for contacting Finnext Learnings. Our team will get
                back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                form.reset();
                onClose();
              }}
              className="w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-green-400 hover:to-emerald-500 hover:shadow-lg"
            >
              <Check className="mr-2 inline h-4 w-4" />
              Perfect!
            </button>
          </motion.div>
        ),
        { duration: Infinity, position: "top-center" },
      );
    },

    onError: () => {
      toast(
        (t) => (
          <motion.div
            className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-xl border border-red-200 bg-white p-6 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-red-500">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Oops! Something went wrong
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                There was an error sending your message. Please check your
                connection and try again.
              </p>
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-red-400 hover:to-red-500 hover:shadow-lg"
            >
              <AlertCircle className="mr-2 inline h-4 w-4" />
              Try Again
            </button>
          </motion.div>
        ),
        { duration: Infinity, position: "top-center" },
      );
    },
  });

  const onSubmit = (data: FormData) => {
    contactMutation.mutate(data);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-6 sm:px-8 sm:py-8">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <motion.div
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GraduationCap className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Finnext Learnings
                </span>
              </motion.div>

              <motion.h1
                className="mb-2 text-2xl font-bold text-white sm:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get in Touch with Us! 📞
              </motion.h1>

              <motion.p
                className="text-sm text-blue-100 sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Ready to start your career journey? Send us a message and we'll
                get back to you within 24 hours.
              </motion.p>
            </div>
          </div>

          {/* Form Content */}
          <motion.div
            className="p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Full Name *"
                          {...field}
                          className="h-12 border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email Address *"
                            type="email"
                            {...field}
                            className="h-12 border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone Number *"
                            {...field}
                            className="h-12 border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-blue-500 data-[state=open]:border-blue-500 data-[state=open]:ring-2 data-[state=open]:ring-blue-500">
                              <SelectValue placeholder="Reason for Contact *" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            className="z-[99999] overflow-hidden rounded-lg border-gray-200 bg-white shadow-lg"
                            position="popper"
                            sideOffset={4}
                          >
                            <SelectItem
                              value="course-inquiry"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Course Inquiry
                            </SelectItem>
                            <SelectItem
                              value="admission"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Admission Process
                            </SelectItem>
                            <SelectItem
                              value="career-guidance"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Career Guidance
                            </SelectItem>
                            <SelectItem
                              value="corporate-training"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Corporate Training
                            </SelectItem>
                            <SelectItem
                              value="other"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="qualification"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-blue-500 data-[state=open]:border-blue-500 data-[state=open]:ring-2 data-[state=open]:ring-blue-500">
                              <SelectValue placeholder="Your Qualification *" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            className="z-[99999] overflow-hidden rounded-lg border-gray-200 bg-white shadow-lg"
                            position="popper"
                            sideOffset={4}
                          >
                            <SelectItem
                              value="high-school"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              High School
                            </SelectItem>
                            <SelectItem
                              value="diploma"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Diploma
                            </SelectItem>
                            <SelectItem
                              value="bachelors"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Bachelor's Degree
                            </SelectItem>
                            <SelectItem
                              value="masters"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Master's Degree
                            </SelectItem>
                            <SelectItem
                              value="professional"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Professional Certificate
                            </SelectItem>
                            <SelectItem
                              value="other"
                              className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
                            >
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message *"
                          {...field}
                          rows={4}
                          className="resize-none border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="group h-14 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactFormModal;
