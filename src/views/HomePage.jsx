import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery/hero-bird-bg.png')",
        }}
      >

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-[#F2EBDD]/60"></div>

        <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-40 px-8 py-16 lg:grid-cols-2 lg:gap-20 lg:px-14 lg:py-24">

          {/* Hero Content */}
          <div className="lg:justify-self-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xl font-semibold text-green-800">
              <img
                src="/images/icons/h1.png"
                alt="Bird"
                className="h-5 w-5 object-contain"
              />
              Bird Rescue & Rehabilitation
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-green-950 md:text-6xl">
              Give an Injured Bird
              <span className="block text-green-700">
                A Chance to Fly Again
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-2xl leading-8 text-gray-600">
              If you find an injured bird, don't leave it helpless.
              Report it to Maa Foundation and help us give the bird
              the care it needs to return safely to the sky.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/report"
                className="rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-green-800"
              >
                Report an Injured Bird
              </Link>

              <Link
                href="/donate"
                className="rounded-full border-2 border-green-700 px-7 py-3.5 font-semibold text-green-700 transition hover:bg-green-100"
              >
                Support a Bird
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">

              <span className="rounded-full border border-green-200 bg-green-100 px-4 py-2 font-semibold text-green-800 shadow-sm">
                ✓ Rescue
              </span>

              <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 font-semibold text-blue-800 shadow-sm">
                ✓ Medical Care
              </span>

              <span className="rounded-full border border-emerald-200 bg-emerald-100 px-4 py-2 font-semibold text-emerald-800 shadow-sm">
                ✓ Rehabilitation
              </span>

              <span className="rounded-full border border-sky-200 bg-sky-100 px-4 py-2 font-semibold text-sky-800 shadow-sm">
                ✓ Safe Release
              </span>

            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:justify-self-end w-full max-w-[650px]">
            <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-xl">
              <img
                src="/images/gallery/home.png"
                alt="Bird receiving care"
                className="h-[520px] w-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl">

              <p className="text-xl font-semibold text-green-800">
                Every bird deserves
              </p>

              <p className="text-lg text-gray-600">
                care, safety & freedom.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= ABOUT PREVIEW ================= */}
      <section className="bg-white px-5 py-20 lg:px-8;">
        <div className="mx-auto max-w-5xl text-center">

          <span className="text-xl font-bold uppercase tracking-widest text-green-700">
            About Maa Foundation
          </span>

          <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
            Caring for Birds When They Need Us Most
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Maa Foundation is an NGO-based initiative working for bird
            rescue, medical aid and rehabilitation. When an injured bird
            is reported, the team works towards rescuing and caring for it
            until it is healthy enough to return to the open sky.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-block rounded-full bg-green-700 px-7 py-3.5 text-lg font-semibold text-white shadow-md transition hover:bg-green-800"
          >
            Learn More About Us →
          </Link>

        </div>
      </section>


      {/* ================= RESCUE PROCESS ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Our Rescue Process
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              From Rescue to Freedom
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A simple journey that helps an injured bird receive the
              support it needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              {
                number: "01",
                icon: "/images/icons/r1.jpg",
                title: "Report",
                text: "Share a photo and location when you find an injured bird.",
              },
              {
                number: "02",
                icon: "/images/icons/rescue.png",
                title: "Rescue",
                text: "The rescue team can respond and help the bird.",
              },
              {
                number: "03",
                icon: "/images/icons/care.png",
                title: "Care",
                text: "The bird receives medical care and rehabilitation.",
              },
              {
                number: "04",
                icon: "/images/icons/release.png",
                title: "Release",
                text: "After recovery, the bird is returned to the open sky.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <span className="mt-5 block text-sm font-bold text-green-600">
                  STEP {item.number}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-green-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= SUPPORT ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <span className="text-xl font-bold uppercase tracking-widest text-green-700">
                Support the Mission
              </span>

              <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
                You Can Help a Bird Recover
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-lg  text-gray-600">
                Your support can contribute towards the care and
                rehabilitation of injured birds. You can support the
                work through medicines, funds and other necessary care.
              </p>

              <Link
                href="/donate"
                className="mt-7 inline-block rounded-full bg-green-700 px-7 py-3.5 text-lg font-semibold text-white hover:bg-green-800"
              >
                See How You Can Help
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <div className="flex justify-center">
                  <img
                    src="/images/icons/medicin.png"
                    alt="Medicines"
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-green-950">
                  Medicines
                </h3>

                <p className="mt-2 text-lg text-gray-600">
                  Help provide necessary medical care.
                </p>
              </div>


              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <div className="flex justify-center">
                  <img
                    src="/images/icons/fund.webp"
                    alt="Funds"
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-green-950">
                  Funds
                </h3>

                <p className="mt-2 text-lg text-gray-600">
                  Support rescue and rehabilitation work.
                </p>
              </div>


              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <div className="flex justify-center">
                  <img
                    src="/images/icons/v1.png"
                    alt="Volunteer"
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-green-950">
                  Volunteer
                </h3>

                <p className="mt-2 text-lg text-gray-600">
                  Give your time and support the mission.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= GALLERY PREVIEW ================= */}
      <section className="bg-green-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <span className="text-xl font-bold uppercase tracking-widest text-green-300">
                Our Gallery
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Birds We Have Helped
              </h2>

              <p className="mt-4 max-w-2xl text-green-100">
                See the birds who received care and got another chance
                to return to the sky.
              </p>
            </div>

            <Link
              href="/gallery"
              className="font-semibold text-lg text-green-300 hover:text-white"
            >
              View Full Gallery →
            </Link>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "/images/gallery/recoverd 1.jpg",
              "/images/gallery/recoverd 2.jpg",
              "/images/gallery/recoverd 3.jpg",
            ].map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl bg-green-900"
              >
                <img
                  src={image}
                  alt={`Recovered bird ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= VOLUNTEER CTA ================= */}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-green-50 px-6 py-12 text-center md:px-12">

          <div className="flex justify-center">
            <img
              src="/images/icons/v1.png"
              alt="Volunteer"
              className="h-12 w-12 object-contain"
            />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-green-950 md:text-4xl">
            Want to Help Birds in Need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-xl text-gray-600">
            Become a volunteer and be a part of the effort to rescue,
            care for and support injured birds.
          </p>

          <Link
            href="/volunteer"
            className="mt-7 inline-block rounded-full text-lg bg-green-700 px-7 py-3.5 font-semibold text-white hover:bg-green-800"
          >
            Become a Volunteer
          </Link>

        </div>
      </section>

    </div>
  );
}