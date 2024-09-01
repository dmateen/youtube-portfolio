"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject: "New Scriptwriting Inquiry",
          message: `New inquiry from ${email}: ${message}`,
        }),
      });

      if (res.status === 200) {
        setStatus("Email sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <div
      className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased"
      id="contact"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Let&apos;s work together
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Share your email to discuss your scriptwriting needs
        </p>
        <form onSubmit={handleSubmit} className="relative z-10 mt-4">
          <input
            type="email"
            placeholder="your_email@abc.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full mb-2 bg-neutral-950 placeholder:text-neutral-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full mb-2 bg-neutral-950 placeholder:text-neutral-700"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className="flex items-center justify-center">
            <button
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
              type="submit"
            >
              <div className="flex items-center justify-center space-x-1">
                <span>Submit!</span>
              </div>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
            </button>
          </div>
        </form>
        {status && (
          <p className="text-center text-neutral-500 mt-4">{status}</p>
        )}
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
