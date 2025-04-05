import React from "react";

const ContactUs = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="bg-white max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-6 h-full">
          {/* Left Section: Contact Info */}
          <div className="bg-[#6c9380] p-10 col-span-2">
            <h2 className="mb-10 font-bold text-2xl text-white before:block before:absolute relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Contact Info
            </h2>
            <p className="font-bold text-gray-100 py-8 border-b border-gray-100">
              Location Address
              <span className="font-normal text-xs text-gray-300 block">
                WorkShop Corner, Nanded, India
              </span>
            </p>
            <p className="font-bold text-gray-100 py-8 border-b border-gray-100">
              Phone Number
              <span className="font-normal text-xs text-gray-300 block">
                +91 12345567890
              </span>
            </p>
            <p className="font-bold text-gray-100 py-8 border-b border-gray-100">
              Email Address
              <span className="font-normal text-xs text-gray-300 block">
                kubra@gmail.com
              </span>
            </p>
            <p className="font-bold text-gray-100 py-8 border-b border-gray-100">
              Web Address
              <span className="font-normal text-xs text-gray-300 block">
                BlissBazaar.com
              </span>
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-blue-50 p-14 col-span-4">
            <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Contact Details
            </h2>
            <div className="grid gap-6 mb-6 grid-cols-2">
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 grid-cols-2">
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                placeholder="Write your message here..."
                rows="8"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="rounded bg-[#6c9380] text-white font-bold py-3 px-6 min-w-40 hover:bg-gray-600 transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
