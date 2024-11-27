"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from 'next/link';
import About from "./About/pages";

export default function Home() {
  const appRef = useRef<HTMLDivElement>(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [inputMessage, setInputMessage] = useState("");
  const [showScheduleBuilder, setShowScheduleBuilder] = useState(false);

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [schedule, setSchedule] = useState<string[]>([]);

  const courses = [
    "MAT 155 - Calculus II",
    "CSCI 160 - Computer Architecture",
    "CSCI 235 - Software Analysis and Design II",
    "CHIN 2O1 - Intermediate Chinese",
    "ECO 200 - Introduc",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.3 }
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  // Send a message and simulate a bot response
  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: inputMessage }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for reaching out! How can I assist you?" },
      ]);
    }, 1000);

    setInputMessage("");
  };

  // Handle selecting or deselecting a course
  const handleCourseSelection = (course: string) => {
    setSelectedCourses((prev) => {
      if (prev.includes(course)) {
        return prev.filter((selected) => selected !== course);
      } else {
        return [...prev, course];
      }
    });
  };

  // Generate schedule from selected courses
  const generateSchedule = () => {
    setSchedule(selectedCourses);
    setShowScheduleBuilder(false);  // Close the builder after generating schedule
  };

  // Show Schedule Builder
  const handleScheduleBuilderClick = () => {
    setShowScheduleBuilder(true);
  };

  return (
    <div
      ref={appRef}
      className="relative min-h-screen bg-animated-gradient bg-cover bg-center"
    >
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
        
        <Image src="/cuny.jpg" alt="CUNY Logo" width={150} height={50} />
  
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-red-500">
            Home
          </a>
          <Link href="/Users/jessicahuang/Desktop/my-app/app/About/pages.tsx" className="text-gray-800 hover:text-red-500">
          Features
          </Link>
          <a
            href="#ai-chat"
            onClick={(e) => {
              e.preventDefault();
              setShowChat(true);
            }}
            className="text-gray-800 hover:text-red-500"
          >
            AI Chat
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold hero-text">
          Welcome to the CUNY AI Schedule Builder
        </h1>
        <p className="text-lg mt-4 max-w-lg mx-auto hero-text">
          Streamline your CUNY schedule with AI-powered assistance.
        </p>
        <button
          onClick={handleScheduleBuilderClick}
          className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg"
        >
          Create a CUNY Schedule Builder
        </button>
      </section>

      {/* Schedule Builder Information Section */}
      <section id="features" className="py-16 px-8 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">
          What It Does
        </h2>
        <p className="text-lg text-center mb-4">
          The CUNY AI Schedule Builder is designed to help students optimize their academic schedules while providing a seamless and personalized experience. The app is built around three core domains: AI-powered scheduling, live chat support, and e-Permit functionality.
        </p>
        <h3 className="text-2xl font-semibold mb-4">AI-powered Scheduling</h3>
        <p className="text-lg mb-6">
          The AI-driven scheduling system analyzes your course preferences, major requirements, and availability to create the most efficient schedule possible. Whether you're a full-time student, a transfer student, or a part-time student balancing work and academics, our AI assistant ensures that your schedule aligns with your unique needs. It adapts to your preferences, making sure your course choices fit together harmoniously to optimize your time.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Live Chat Support</h3>
        <p className="text-lg mb-6">
          The AI-powered live chat box serves as your personal assistant, answering all your CUNY-related questions that your counselor might not be able to address. Need help with course prerequisites, transfer options, or simply navigating the CUNY system? The AI chat will guide you through the process, offering instant solutions and making sure you're never left in the dark.
        </p>

        <h3 className="text-2xl font-semibold mb-4">e-Permit Requests</h3>
        <p className="text-lg mb-6">
          Our app simplifies the process of requesting e-permits for courses at other CUNY campuses. With just a few clicks, students can submit requests, ensuring smooth and quick approval. The system keeps track of all your permits and makes it easy to manage your academic plans without hassle.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
        <p className="text-lg">
          Whether you're planning your classes for the next semester, transferring between campuses, or balancing part-time work with academics, the CUNY AI Schedule Builder uses state-of-the-art technology to help you make informed decisions, optimize your schedule, and access resources that make navigating university life easier than ever.
        </p>
      </section>

      {/* Conditional Rendering for Schedule Builder */}
      {showScheduleBuilder && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 flex justify-center items-center">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Build Your CUNY Schedule
            </h2>
            <p className="text-gray-600 mb-4">
              Use our interactive tool to create your ideal schedule for the
              upcoming semester.
            </p>
            
            {/* Course selection */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Select Your Courses</h3>
              {courses.map((course) => (
                <div key={course} className="mb-2">
                  <input
                    type="checkbox"
                    id={course}
                    checked={selectedCourses.includes(course)}
                    onChange={() => handleCourseSelection(course)}
                    className="mr-2"
                  />
                  <label htmlFor={course}>{course}</label>
                </div>
              ))}
            </div>
            
            {/* Button to generate schedule */}
            <button
              onClick={generateSchedule}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
            >
              Generate Schedule
            </button>
            
            {/* Close button */}
            <button
              onClick={() => setShowScheduleBuilder(false)}
              className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Display Generated Schedule */}
      {schedule.length > 0 && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Schedule
          </h2>
          <ul className="list-disc pl-6">
            {schedule.map((course, index) => (
              <li key={index} className="text-lg">{course}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Chat Box */}
      {showChat && (
        <div className="fixed bottom-5 right-5 w-80 h-96 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl">AI Chat</h2>
            <button onClick={() => setShowChat(false)} className="text-red-600">X</button>
          </div>
          <div className="mt-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <p className={`text-sm ${msg.sender === "user" ? "font-bold" : "text-gray-600"}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
          />
          <button
            onClick={sendMessage}
            className="mt-2 w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Send
          </button>
        </div>
      )}
      {/* Contact Us Section */}
      <section id="contact-us" className="py-16 px-8 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-center mb-4">
          Have questions or need support? Reach out to us anytime!
        </p>
        <p className="text-lg text-center">
          Email: <a href="mailto:support@cunyschedulebuilder.com" className="text-red-600">support@cunyschedulebuilder.com</a>
        </p>
        <p className="text-lg text-center mt-2">
          Phone: (123) 456-7890
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 CUNY Schedule Builder</p>
      </footer>
    </div>
  );
}