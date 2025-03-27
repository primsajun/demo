"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Coffee,
  Phone,
  Mail,
  Instagram,
  ChevronDown,
  FileText,
  Globe,
  Cpu,
  Camera,
  Brain,
  LinkIcon,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translate(-50%, -50%) translateX(${(mousePosition.x - window.innerWidth / 2) / 50}px) translateY(${(mousePosition.y - window.innerHeight / 2) / 50}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
 {/* Symposium Logo */}
 <div className="flex justify-center mb-6">
                <div className="w-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 overflow-hidden">
                  <Image
                    src="/images/output-onlinepngtools.png"
                    alt="SYNECTICS 2k25 Logo"
                    width={620}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* College Logo 
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <Image
                src="/images/college-logo.png"
                alt="Stella Mary's College of Engineering"
                width={500}
                height={120}
                className="h-auto"
              />
            </div>
          </div>*/}

          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 pb-16">
            {/* Left side - Main content */}
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-center">
                SYNECTICS 2k25
              </h1>

              <p className="text-xl text-blue-100 text-center">
              Annual Technical Symposium by Department of Computer Science and Engineering
              </p>

              {/* Highlighted Event Date */}
              <motion.div
                className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-pink-500/50 shadow-lg shadow-pink-500/20 mx-auto max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="h-8 w-8 text-pink-300" />
                  <h2 className="text-2xl font-bold text-white">April 9, 2025</h2>
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-4 my-6 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                  <MapPin className="h-5 w-5 text-pink-300" />
                  <span>Stella Marys College of Engineering</span>
                </div>

                {/* Highlighted Registration Fee */}
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/50 shadow-md shadow-yellow-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Users className="h-5 w-5 text-yellow-300" />
                  <span className="font-bold">Registration: ₹200</span>
                  <span className="text-yellow-200">(Lunch Included)</span>
                </motion.div>
              </div>

              <div className="flex justify-center">
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeLLPiLsuHBPzJxFFmB1gqzhE7nFCJxKMrCErSWNHTHNW2Kgg/viewform"
                  target="https://docs.google.com/forms/d/e/1FAIpQLSeLLPiLsuHBPzJxFFmB1gqzhE7nFCJxKMrCErSWNHTHNW2Kgg/viewform"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  rel="noreferrer"
                >
                  Register Now
                </motion.a>
              </div>

              {/* Social Media Links 
              <div className="flex justify-center gap-4 mt-8">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  rel="noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:info@example.com"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>*/}
            </motion.div>

            {/* Right side - Event details
            <motion.div
              className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Event Highlights</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    Technical Events
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { name: "Paper Presentation", icon: <FileText className="h-4 w-4 text-blue-300" /> },
                      { name: "Quiz", icon: <Brain className="h-4 w-4 text-purple-300" /> },
                      { name: "Web Design", icon: <Globe className="h-4 w-4 text-cyan-300" /> },
                      { name: "Project Expo", icon: <Cpu className="h-4 w-4 text-green-300" /> },
                    ].map((event, i) => (
                      <motion.li
                        key={i}
                        className="bg-white/5 p-3 rounded-lg flex items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        {event.icon}
                        {event.name}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-orange-400" />
                    Non-Technical Events
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { name: "Photography", icon: <Camera className="h-4 w-4 text-pink-300" /> },
                      { name: "Connection", icon: <LinkIcon className="h-4 w-4 text-yellow-300" /> },
                      { name: "Mind Game", icon: <Brain className="h-4 w-4 text-orange-300" /> },
                    ].map((event, i) => (
                      <motion.li
                        key={i}
                        className="bg-white/5 p-3 rounded-lg flex items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        {event.icon}
                        {event.name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

             
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-col md:flex-row gap-6">
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-3 text-cyan-300">Student Coordinators</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>
                          Kumar:{" "}
                          <a href="tel:+1234567890" className="text-green-300 hover:underline">
                            +1234567890
                          </a>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>
                          Sumaru:{" "}
                          <a href="tel:12345678" className="text-green-300 hover:underline">
                            12345678
                          </a>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>
                          Valo:{" "}
                          <a href="tel:123456789" className="text-green-300 hover:underline">
                            123456789
                          </a>
                        </span>
                      </li>
                    </ul>

                    <h4 className="text-lg font-semibold mt-4 mb-2 text-cyan-300">Faculty</h4>
                    <p className="text-sm">HOD: Dr. Malar, Dept of Computer Science</p>
                    <p className="text-sm">Convener: Prof Name</p>
                  </div>

                  
                  <div className="flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-2 text-center">Scan to Pay</h4>
                    <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-lg flex items-center justify-center">
                      <Image
                        src="https://images.app.goo.gl/WBRTqX9wusECXVYJA"
                        alt="Payment QR Code"
                        width={120}
                        height={120}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>  */}
          </div>

          {/* Scroll down indicator */}
          <div className="flex justify-center pb-8">
            <motion.button
              onClick={() => scrollToSection("events")}
              className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
              }}
            >
              <span className="text-sm mb-2">Explore Events</span>
              <ChevronDown className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-to-b from-indigo-900 to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Exciting Events
            </motion.h2>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Participate in our diverse range of technical and non-technical events designed to challenge your skills
              and creativity.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Technical Events */}
            <motion.div
              className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-300">
                <Zap className="h-6 w-6" />
                Technical Events
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                  <FileText className="h-8 w-8 text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
                  <h4 className="text-xl font-semibold mb-2">Paper Presentation</h4>
                  <p className="text-sm text-blue-100/80">
                    Present your innovative research papers and ideas to a panel of experts.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                  <Brain className="h-8 w-8 text-purple-400 mb-3 group-hover:text-purple-300 transition-colors" />
                  <h4 className="text-xl font-semibold mb-2">Quiz</h4>
                  <p className="text-sm text-blue-100/80">
                    Test your knowledge in various technical domains with our challenging quiz.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-colors group">
                  <Globe className="h-8 w-8 text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors" />
                  <h4 className="text-xl font-semibold mb-2">Web Design</h4>
                  <p className="text-sm text-blue-100/80">
                    Showcase your web development skills by creating stunning websites.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-green-500/30 transition-colors group">
                  <Cpu className="h-8 w-8 text-green-400 mb-3 group-hover:text-green-300 transition-colors" />
                  <h4 className="text-xl font-semibold mb-2">Project Expo</h4>
                  <p className="text-sm text-blue-100/80">
                    Exhibit your innovative projects and solutions to real-world problems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Non-Technical Events */}
            <motion.div
              className="col-span-1 md:col-span-2 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-pink-300">
                <Coffee className="h-6 w-6" />
                Non-Technical Events
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-pink-500/30 transition-colors group">
                  <Camera className="h-8 w-8 text-pink-400 mb-3 group-hover:text-pink-300 transition-colors" />
                  <h4 className="text-xl font-semibold mb-2">Photography</h4>
                  <p className="text-sm text-blue-100/80">
                    Capture moments and showcase your photography skills in our contest.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-yellow-500/30 transition-colors group">
                  <LinkIcon className="h-8 w-8 text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors" />
                  <h4 className="text-xl font-semibold mb-2">Connection</h4>
                  <p className="text-sm text-blue-100/80">
                    Test your ability to connect the dots and solve puzzles in this fun event.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-orange-500/30 transition-colors group col-span-1 sm:col-span-2">
                  <Brain className="h-8 w-8 text-orange-400 mb-3 group-hover:text-orange-300 transition-colors" />
                  <h4 className="text-xl font-semibold mb-2">Mind Game</h4>
                  <p className="text-sm text-blue-100/80">
                    Challenge your cognitive abilities with our mind-bending puzzles and games.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-950 to-purple-950 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/5"
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Showcase Your Talent?</h2>
              <p className="text-lg text-blue-100">
                Join us at SYNECTICS 2k25 for an unforgettable experience of learning, competition, and fun!
              </p>
            </motion.div>
<motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
         <div className="w-40 h-40 bg-white p-2 rounded-lg shadow-lg flex items-center justify-center">
                    <Image
                      src="images/qr.jpg"
                      alt="Payment QR Code"
                      width={180}
                      height={180}
                      className="object-cover"
                    />
                  </div>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-6 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all text-lg"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLLPiLsuHBPzJxFFmB1gqzhE7nFCJxKMrCErSWNHTHNW2Kgg/viewform" target="_blank" rel="noreferrer">
                  Register Now
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white font-bold py-6 px-8 rounded-full transition-all text-lg"
              >
                <a href="#events">
                  Explore Events <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            {/* <h4 className="text-sm font-medium mb-2 text-center">Scan to Pay</h4> */}
                  
            
            <motion.div
              className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Mark Your Calendar</h3>
                <p className="text-blue-100">April 9, 2025 | Stella Marys College of Engineering</p>
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/50 shadow-md shadow-yellow-500/20">
                <Users className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Registration: ₹200</span>
                <span className="text-yellow-200">(Lunch Included)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-950 to-black py-12">
        <div className="container mx-auto px-4">
         
        <motion.div
              className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Reach our Coordinators</h2>

            

             
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  
                  <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold mt-4 mb-2 text-cyan-300">Staff Coordinators</h4>
                  
                  <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                      
                        <span>
                          Dr.F.R.Shiny Malar {""}
                          
                        </span>
                        <a className="text-pink-300 ">
                          Head Of The Department and Professor
                          </a>
                      </li>
                      <li className="flex items-center gap-2">
                        
                        <span>
                          Dr.A.Selva Reegan {" "}
                          
                        </span><a className="text-yellow-300 ">
                            Convener-cetas and Professor
                          </a>
                      </li>
                    </ul>    
                    </div>

                  
                  <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">Student Coordinators</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>
                          Mr.R.Santha Kumar:{" "}
                          <a href="tel:+1234567890" className="text-green-300 hover:underline">
                            +91 9087586411
                          </a>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>
                          Mr.S.Ajin:{" "}
                          <a href="tel:12345678" className="text-green-300 hover:underline">
                            +91 8072768346
                          </a>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>
                          Mr.X.Jervin Revaldo:{" "}
                          <a href="tel:123456789" className="text-green-300 hover:underline">
                            +91 85255010198
                          </a>
                        </span>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100/60 text-sm">© 2025 SYNECTICS. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-blue-100/60 text-sm flex items-center">
                Made with <span className="text-red-500 mx-1">❤</span> by{" "}
                <a
                  href="https://bytebashblitz.org"
                  target="_blank"
                  className="text-blue-300 hover:text-white ml-1 transition-colors"
                  rel="noreferrer"
                >
                  Bashers 👊
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

