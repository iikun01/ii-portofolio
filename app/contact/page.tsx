"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("Sending...");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitStatus("Invalid email address");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: process.env.EMAIL_RECEIVER, // Replace with your email or set up an environment variable
          subject: "New Contact Form Submission",
          text: `Name: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log("Error ", error);
      setSubmitStatus("An error occurred. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <h1 className="text-4xl md:text-5xl font-bold md:pt-8">
                <span className="text-[#018ABD]">Got a project in</span>{" "}
                <span className="text-[#004581]">mind?</span>
              </h1>
              <div className="flex-1 w-full">
                <motion.form
                  onSubmit={handleSubmit}
                  className="glass-effect p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[#004581] font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-[#97CBDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#018ABD] bg-white/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#004581] font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-[#97CBDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#018ABD] bg-white/50"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-[#004581] font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-[#97CBDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#018ABD] bg-white/50"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-[#004581] text-white py-2 px-4 rounded-3xl hover:bg-[#018ABD] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                  {submitStatus && (
                    <p
                      className={`mt-4 text-center ${
                        submitStatus.includes("successfully")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {submitStatus}
                    </p>
                  )}
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
