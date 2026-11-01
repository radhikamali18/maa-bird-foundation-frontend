"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { getGallery } from "@/api/galleryApi";

export default function GalleryPage() {
  const [birds, setBirds] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchGallery();
}, []);

const fetchGallery = async () => {
  try {
    const response = await getGallery();

    if (response.success) {
      const publishedBirds = response.data.filter(
        (item) => item.status === "Published"
      );

      setBirds(publishedBirds);
    }
  } catch (error) {
    console.error("Gallery API Error:", error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="bg-white">

      {/* Page Header */}
      <section
        className="relative overflow-hidden bg-cover bg-center px-5 py-20 lg:px-8"
        style={{
          backgroundImage: "url('/images/gallery/hero-bird-bg.png')",
        }}
      >

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-[#F2EBDD]/60"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <span className="text-2xl font-bold uppercase tracking-widest text-green-700">
            Maa Foundation
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Birds We Have Helped
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Every rescued bird has a story of care, recovery and hope.
            Explore some of the birds that received support and care.
          </p>

        </div>
      </section>

      
     {/* Gallery */}
<section className="px-5 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {loading ? (
      <div className="py-16 text-center">
        <p className="text-lg text-gray-500">
          Loading gallery...
        </p>
      </div>
    ) : birds.length === 0 ? (
      <div className="py-16 text-center">
        <p className="text-lg text-gray-500">
          No gallery images available.
        </p>
      </div>
    ) : (
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

        {birds.map((bird) => (
          <div
            key={bird._id}
            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            {/* Image */}
            <div className="overflow-hidden bg-gray-100">
              <img
                src={bird.image}
                alt={bird.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-lg font-semibold text-green-700">

                <img
                  src="/images/icons/release.png"
                  alt={bird.category}
                  className="h-10 w-10 object-contain"
                />

                {bird.category}

              </div>

              <h2 className="text-xl font-bold text-green-950">
                {bird.title}
              </h2>

              <p className="mt-2 text-lg leading-6 text-gray-600">
                {bird.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    )}

  </div>
</section>


      {/* Support Section */}
      <section className="bg-green-950 px-5 py-16 text-center text-white lg:px-8">
        <div className="mx-auto max-w-3xl">

          {/* Support Bird Image */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-3">
            <img
              src="/images/icons/h1.png"
              alt="Bird"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Help Us Give More Birds a Second Chance
          </h2>

          <p className="mt-4 leading-7 text-xl text-green-100">
            Your support can help provide medicines, medical care and
            rehabilitation for birds in need.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <Link
              href="/donate"
              className="rounded-full text-lg bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-100"
            >
              Support Our Work
            </Link>

            <Link
              href="/report"
              className="rounded-full border text-lg border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800"
            >
              Report an Injured Bird
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}