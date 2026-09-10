"use client";

import { useState } from "react";

export default function ContactPage() {
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
            Get in Touch
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, need help with a bird rescue, or want to
            support our work? Get in touch with Maa Foundation.
          </p>

        </div>
      </section>


      {/* ================= CONTACT INFORMATION ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-3">

            {/* Address */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/visit us.jpg"
                  alt="Location"
                  className="h-full w-full object-contain"
                />
              </div>

              <h2 className="mt-5 text-xl font-bold text-green-950">
                Visit Us
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Shop No. 9, Emerald Shopping Center,
                <br />
                Parsi Panchayat Road,
                <br />
                Jijamata Colony,
                <br />
                Andheri East,
                <br />
                Mumbai - 400069
              </p>

            </div>


            {/* Phone */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/call.webp"
                  alt="Phone"
                  className="h-full w-full object-contain"
                />
              </div>

              <h2 className="mt-5 text-xl font-bold text-green-950">
                Call Us
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                For bird rescue assistance or general enquiries,
                you can contact Maa Foundation.
              </p>

              <div className="mt-5 space-y-2">

                <a
                  href="tel:+919820523802"
                  className="block font-semibold text-green-700 hover:text-green-900"
                >
                  +91 9820523802
                </a>

                <a
                  href="tel:+918655370005"
                  className="block font-semibold text-green-700 hover:text-green-900"
                >
                  +91 8655370005
                </a>

              </div>

            </div>


            {/* Services */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/our services.png"
                  alt="Bird Services"
                  className="h-full w-full object-contain"
                />
              </div>

              <h2 className="mt-5 text-xl font-bold text-green-950">
                Our Services
              </h2>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">

                <li className="flex gap-2">
                  <span className="text-green-700">✓</span>
                  Bird Rescue
                </li>

                <li className="flex gap-2">
                  <span className="text-green-700">✓</span>
                  Medical Aid
                </li>

                <li className="flex gap-2">
                  <span className="text-green-700">✓</span>
                  Bird Rehabilitation
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CONTACT FORM ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {submitted ? (

            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
                ✓
              </div>

              <h2 className="mt-6 text-3xl font-bold text-green-950">
                Message Sent
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                Thank you for contacting Maa Foundation. Your message
                has been submitted successfully.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Send Another Message
              </button>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 shadow-lg md:p-10"
            >

              <div className="text-center">

                <span className="text-sm font-bold uppercase tracking-widest text-green-700">
                  Send a Message
                </span>

                <h2 className="mt-3 text-3xl font-bold text-green-950">
                  How Can We Help?
                </h2>

                <p className="mt-3 text-gray-600">
                  Fill in the form below and share your message with us.
                </p>

              </div>


              {/* Name + Phone */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
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
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* Subject */}
              <div className="mt-6">

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >

                  <option value="">
                    Select a subject
                  </option>

                  <option value="bird-rescue">
                    Bird Rescue
                  </option>

                  <option value="donation">
                    Donation / Support
                  </option>

                  <option value="volunteer">
                    Volunteer
                  </option>

                  <option value="general">
                    General Enquiry
                  </option>

                </select>

              </div>


              {/* Message */}
              <div className="mt-6">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-md transition hover:bg-green-800"
              >
                Send Message
              </button>

            </form>

          )}

        </div>
      </section>


      {/* ================= LOCATION ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Find Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950">
              Our Location
            </h2>

            <p className="mt-3 text-gray-600">
              Maa Foundation, Andheri East, Mumbai
            </p>

          </div>


          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">

            <iframe
              title="Maa Foundation Location"
              src="https://www.google.com/maps?q=Shop%20No.%209%2C%20Emerald%20Shopping%20Center%2C%20Parsi%20Panchayat%20Road%2C%20Andheri%20West%2C%20Mumbai%20400053&output=embed"
              className="h-[400px] w-full border-0"
              loading="lazy"
            />

          </div>

        </div>
      </section>


      {/* ================= EMERGENCY CTA ================= */}
      <section className="bg-green-950 px-5 py-16 text-center text-white lg:px-8">

        <div className="mx-auto max-w-3xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-3">
            <img
              src="/images/icons/h1.png"
              alt="Bird"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="text-4xl">
          </div>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Found an Injured Bird?
          </h2>

          <p className="mt-4 leading-7 text-green-100">
            Share the bird's photo and location so the rescue team can
            understand the situation.
          </p>

          <a
            href="/report"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-100"
          >
            Report an Injured Bird
          </a>

        </div>

      </section>

    </div>
  );
}