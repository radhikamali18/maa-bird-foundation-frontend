"use client";

import { useState } from "react";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Join Our Team
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Become a Volunteer
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Your time, effort and compassion can help support birds
            during rescue, care and rehabilitation.
          </p>

        </div>
      </section>


      {/* ================= WHY VOLUNTEER ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Why Volunteer?
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Be a Part of Something Meaningful
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Volunteers can contribute their time and skills to help
              support the foundation's work for birds.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/release.png"
                  alt="Help Birds"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold text-green-950">
                Help Birds
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Support efforts that help injured and rescued birds
                during their recovery.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/support 1.jpg"
                  alt="Support the Team"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold text-green-950">
                Support the Team
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Work together with people who care about animal and
                bird welfare.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/care.png"
                  alt="Make a Difference"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold text-green-950">
                Make a Difference
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Even a small contribution of your time can make a
                meaningful difference.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= VOLUNTEER FORM ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {submitted ? (

            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
                ✓
              </div>

              <h2 className="mt-6 text-3xl font-bold text-green-950">
                Thank You for Volunteering!
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                Your volunteer interest has been submitted. Thank you
                for your willingness to support birds and the foundation.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Submit Another Response
              </button>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 shadow-lg md:p-10"
            >

              {/* FORM HEADING */}
              <div className="text-center">

                <span className="text-sm font-bold uppercase tracking-widest text-green-700">
                  Volunteer Form
                </span>

                <h2 className="mt-3 text-3xl font-bold text-green-950">
                  Tell Us About Yourself
                </h2>

                <p className="mt-3 text-gray-600">
                  Fill in your details and let us know how you would
                  like to contribute.
                </p>

              </div>


              {/* Name + Phone */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>


                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>


              {/* Email */}
              <div className="mt-6">

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* Area */}
              <div className="mt-6">

                <label
                  htmlFor="area"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Area
                </label>

                <input
                  id="area"
                  type="text"
                  required
                  placeholder="Enter your area / locality"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* Availability */}
              <div className="mt-6">

                <label
                  htmlFor="availability"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Availability
                </label>

                <select
                  id="availability"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">
                    Select your availability
                  </option>

                  <option value="weekdays">
                    Weekdays
                  </option>

                  <option value="weekends">
                    Weekends
                  </option>

                  <option value="both">
                    Weekdays & Weekends
                  </option>

                  <option value="flexible">
                    Flexible
                  </option>
                </select>

              </div>


              {/* Interest */}
              <div className="mt-6">

                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  How Would You Like to Help?
                </label>

                <select
                  id="interest"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">
                    Select an option
                  </option>

                  <option value="rescue">
                    Rescue Support
                  </option>

                  <option value="bird-care">
                    Bird Care Support
                  </option>

                  <option value="awareness">
                    Awareness & Social Media
                  </option>

                  <option value="events">
                    Events & Activities
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

              </div>


              {/* Message */}
              <div className="mt-6">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Why Do You Want to Volunteer?
                </label>

                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Tell us a little about why you want to volunteer..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-md transition hover:bg-green-800"
              >
                Join as a Volunteer
              </button>

            </form>

          )}

        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-green-950 px-5 py-16 text-center text-white lg:px-8">

        <div className="mx-auto max-w-3xl">

          {/* PARROT IMAGE */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-3">
            <img
              src="/images/icons/h1.png"
              alt="Bird"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="mt-4 text-3xl font-bold">
            Together, We Can Help More Birds
          </h2>

          <p className="mt-4 leading-7 text-green-100">
            Every helping hand matters. Join us in supporting birds
            that need care and protection.
          </p>

        </div>

      </section>

    </div>
  );
}