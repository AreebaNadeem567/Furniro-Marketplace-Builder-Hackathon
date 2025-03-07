"use client"

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  {
    icon: '/images/trophy.png',
    title: 'High Quality',
    description: 'crafted from top materials',
  },
  {
    icon: '/images/tick.png',
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    icon: '/images/gift.png',
    title: 'Free Shipping',
    description: 'Order over 150 $',
  },
  {
    icon: '/images/support.png',
    title: '24 / 7 Support',
    description: 'Dedicated support',
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Simulate form submission logic here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000) // Hide the message after 5 seconds
  }

  return (
    <>
      {/* Background Section */}
      <div className="relative h-[280px] w-full">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Contact</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 font-poppins">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-poppinsSemiBold mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-gray-600 text-sm text-lightGray max-w-xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/address.png"
                  alt="Address icon"
                  height={20}
                  width={20}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/phone.png"
                  alt="Phone icon"
                  height={20}
                  width={20}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Phone</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/time.png"
                  alt="Time icon"
                  height={20}
                  width={20}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Working Time</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm">Your name</label>
                <input
                  type="text"
                  placeholder="Abc"
                  className="w-full px-3 py-5 border border-lightGray rounded-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm">Email address</label>
                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full px-3 py-5 border border-lightGray rounded-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm">Phone Number</label>
                <input
                  type="text"
                  placeholder="This is an optional"
                  className="w-full px-3 py-5 border border-lightGray rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm">Message</label>
                <textarea
                  rows={4}
                  placeholder="Hi! I'd like to ask about"
                  className="w-full p-3 border border-lightGray rounded-lg resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="py-3 px-14 font-poppins text-xs bg-[#B88E2F] hover:bg-[#9d7829] text-white rounded-sm"
              >
                Submit
              </button>
            </form>
            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                Your message has been successfully sent! We will get back to you shortly.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 mt-6 pl-6 lg:pl-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 pl-8 md:pl-0">
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#333333] text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
