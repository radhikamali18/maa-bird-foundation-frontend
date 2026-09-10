"use client";

import { useState } from "react";

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);

  // Location feature
  const [userLocation, setUserLocation] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const [mapLink, setMapLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Get user's current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const locationText = `Latitude: ${latitude}, Longitude: ${longitude}`;

        setUserLocation(locationText);

        // Google Maps link
        setMapLink(
          `https://www.google.com/maps?q=${latitude},${longitude}`
        );

        setLocationLoading(false);
      },
      () => {
        alert(
          "Unable to get your location. Please allow location access."
        );

        setLocationLoading(false);
      }
    );
  };

  return (
    <div className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="bg-green-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Bird Rescue
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Report an Injured Bird
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Found an injured bird? Share its photo and location with us.
            Your report can help the rescue team respond and provide care.
          </p>

        </div>
      </section>


      {/* ================= FORM ================= */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {submitted ? (
            <div className="rounded-3xl bg-green-50 px-6 py-16 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
                ✓
              </div>

              <h2 className="mt-6 text-3xl font-bold text-green-950">
                Report Submitted
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                Thank you for reporting the injured bird. The information
                you provided can help the rescue team understand the
                situation and respond appropriately.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setUserLocation("");
                  setMapLink("");
                }}
                className="mt-7 rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white hover:bg-green-800"
              >
                Submit Another Report
              </button>

            </div>
          ) : (

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg md:p-10"
            >

              {/* Bird Information */}
              <div>
                <h2 className="text-2xl font-bold text-green-950">
                  Bird Information
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Tell us about the bird you found.
                </p>
              </div>


              {/* Photo */}
              <div className="mt-8">

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Bird Photo
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-green-200 bg-green-50 px-6 py-10 text-center transition hover:border-green-500">

                  <span className="text-4xl">
                    📷
                  </span>

                  <span className="mt-3 font-semibold text-green-800">
                    Upload Bird Photo
                  </span>

                  <span className="mt-1 text-sm text-gray-500">
                    JPG, PNG or JPEG
                  </span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    className="hidden"
                    required
                  />

                </label>

              </div>


              {/* Bird Condition */}
              <div className="mt-6">

                <label
                  htmlFor="condition"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Bird Condition
                </label>

                <select
                  id="condition"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">
                    Select condition
                  </option>

                  <option value="injured-wing">
                    Wing Injury
                  </option>

                  <option value="injured-leg">
                    Leg Injury
                  </option>

                  <option value="bleeding">
                    Bleeding
                  </option>

                  <option value="weak">
                    Weak / Unable to Fly
                  </option>

                  <option value="unconscious">
                    Unconscious
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

              </div>


              {/* Description */}
              <div className="mt-6">

                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Describe the Situation
                </label>

                <textarea
                  id="description"
                  rows="4"
                  required
                  placeholder="Tell us what happened and where the bird is..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* Location */}
              <div className="mt-6">

                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Bird Location
                </label>

                <input
                  id="location"
                  type="text"
                  required
                  placeholder="Enter the location where the bird was found"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

                {/* Current Location Button */}
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  disabled={locationLoading}
                  className="mt-3 flex items-center gap-2 rounded-xl bg-green-100 px-5 py-3 font-semibold text-green-800 transition hover:bg-green-200 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {/* LOCATION IMAGE ICON ADDED */}
                  <img
                    src="/images/icons/visit us.jpg"
                    alt="Location"
                    className="h-5 w-5 object-contain"
                  />

                  {locationLoading
                    ? "Getting Location..."
                    : "Use My Current Location"}

                </button>

                {/* Location Result */}
                {userLocation && (
                  <div className="mt-4 rounded-2xl bg-green-50 p-4">

                    <p className="font-semibold text-green-800">
                       Location Captured
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {userLocation}
                    </p>

                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-green-700 underline"
                    >
                      Open Location in Google Maps →
                    </a>

                  </div>
                )}

                <p className="mt-2 text-sm text-gray-500">
                  You can enter the location manually or use your current
                  location.
                </p>

              </div>


              {/* Divider */}
              <div className="my-10 border-t border-gray-200" />


              {/* Reporter Information */}
              <div>

                <h2 className="text-2xl font-bold text-green-950">
                  Your Contact Details
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  This helps the rescue team contact you if necessary.
                </p>

              </div>


              <div className="mt-6 grid gap-6 md:grid-cols-2">

                {/* Name */}
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


                {/* Phone */}
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


              {/* Submit */}
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-md transition hover:bg-green-800"
              >
                Submit Rescue Report
              </button>


              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                Please provide accurate information so that the rescue team
                can understand the situation.
              </p>

            </form>

          )}

        </div>
      </section>


      {/* ================= EMERGENCY CONTACT ================= */}
      <section className="bg-green-950 px-5 py-14 text-center text-white lg:px-8">

        <div className="mx-auto max-w-3xl">

          {/* CALL IMAGE ICON ADDED */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-3">
            <img
              src="/images/icons/call.webp"
              alt="Call"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="text-3xl">
          </div>

          <h2 className="mt-4 text-2xl font-bold md:text-3xl">
            Need Immediate Help?
          </h2>

          <p className="mt-3 text-green-100">
            For urgent bird rescue assistance, contact Maa Foundation.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+919820523802"
              className="rounded-full bg-white px-6 py-3 font-semibold text-green-800 hover:bg-green-100"
            >
              +91 9820523802
            </a>

            <a
              href="tel:+918655370005"
              className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-green-800"
            >
              +91 8655370005
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}