"use client";
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
import { motion } from "framer-motion";
import axios from "axios";
import {
  Mail,
  Check,
  X,
  Phone,
  MapPin,
  Clock,
  AlertCircle,
  Send,
  Building2,
  GraduationCap,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
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

const Contact = () => {
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

  const onSubmit = (data: FormData) => {
    contactMutation.mutate(data);
  };

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
            <div className="flex w-full gap-3">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  form.reset();
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-green-400 hover:to-emerald-500 hover:shadow-lg"
              >
                <Check className="h-4 w-4" />
                Perfect!
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="flex items-center justify-center rounded-lg border-2 border-gray-200 p-3 text-gray-500 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Edapal Campus",
      detail: "9567 86 79 86",
      href: "tel:9567867986",
      location: "PG Academy Building, Thrissur Road",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Cochin Campus",
      detail: "9020 11 22 11",
      href: "tel:9020112211",
      location: "Max Business Bay, Vyttila Hub",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      detail: "finnextlearnings@gmail.com",
      href: "mailto:finnextlearnings@gmail.com",
      location: "We reply within 24 hours",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Expert Training",
      description: "Industry-certified professionals",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Small Batches",
      description: "Personalized attention guaranteed",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Modern Facilities",
      description: "State-of-the-art learning environment",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "100% Placement",
      description: "Dedicated placement assistance",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-white px-0 py-16 md:px-10 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Gallery Style */}
        <div className="mb-16 text-center">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium text-blue-700">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>

          <div className="mx-auto mb-6 h-1 w-20 bg-blue-500"></div>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Ready to advance your career with practical, job-ready skills? Let's
            discuss how our training programs can help you achieve your
            professional goals.
          </motion.p>
        </div>

        {/* Features Section */}
        <motion.div
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group rounded-lg border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Information - Takes 1 column */}
          <motion.div
            className="space-y-8 lg:col-span-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r ${item.color} text-white shadow-lg transition-transform group-hover:scale-110`}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <Link
                          href={item.href}
                          className="block truncate font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
                        >
                          {item.detail}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Campus Locations */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Our Campuses</h3>
              <div className="space-y-4">
                <motion.div
                  className="overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h4 className="mb-2 font-semibold text-blue-900">
                        Edapal Campus
                      </h4>
                      <p className="text-sm leading-relaxed text-blue-700">
                        PG Academy Building
                        <br />
                        Thrissur Road, Edapal
                        <br />
                        Kerala, India
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="overflow-hidden rounded-xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 p-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h4 className="mb-2 font-semibold text-emerald-900">
                        Cochin Campus
                      </h4>
                      <p className="text-sm leading-relaxed text-emerald-700">
                        Max Business Bay
                        <br />
                        Near Vyttila Hub & Metro Station
                        <br />
                        Vyttila, Cochin, Kerala
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Send us a Message
                </h2>
                <p className="mt-2 text-blue-100">
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>

              <div className="p-8">
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
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12 border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-blue-500">
                                  <SelectValue placeholder="Reason for Contact *" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="border-gray-200 bg-white">
                                <SelectItem
                                  value="course-inquiry"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Course Inquiry
                                </SelectItem>
                                <SelectItem
                                  value="admission"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Admission Process
                                </SelectItem>
                                <SelectItem
                                  value="career-guidance"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Career Guidance
                                </SelectItem>
                                <SelectItem
                                  value="corporate-training"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Corporate Training
                                </SelectItem>
                                <SelectItem
                                  value="other"
                                  className="text-gray-900 hover:bg-gray-100"
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
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12 border-gray-300 bg-gray-50 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-blue-500">
                                  <SelectValue placeholder="Your Qualification *" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="border-gray-200 bg-white">
                                <SelectItem
                                  value="high-school"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  High School
                                </SelectItem>
                                <SelectItem
                                  value="diploma"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Diploma
                                </SelectItem>
                                <SelectItem
                                  value="bachelors"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Bachelor's Degree
                                </SelectItem>
                                <SelectItem
                                  value="masters"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Master's Degree
                                </SelectItem>
                                <SelectItem
                                  value="professional"
                                  className="text-gray-900 hover:bg-gray-100"
                                >
                                  Professional Certificate
                                </SelectItem>
                                <SelectItem
                                  value="other"
                                  className="text-gray-900 hover:bg-gray-100"
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
                              rows={5}
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
