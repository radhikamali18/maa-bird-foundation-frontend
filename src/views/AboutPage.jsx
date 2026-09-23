import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ================= PAGE HEADER / HERO ================= */}
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
            About Maa Foundation
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Caring for Birds with Compassion
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-gray-600">
            Maa (Medical Aid For Birds) Foundation is an NGO-based initiative working towards
            the rescue, medical care and rehabilitation of birds in need.
          </p>

        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="lg:justify-self-start overflow-hidden rounded-3xl bg-green-50 p-3 shadow-lg">
            <img
              src="/images/gallery/about image.avif"
              alt="Birds receiving care"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:justify-self-end rounded-3xl bg-white p-8 shadow-lg">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              A Safe Place for Birds in Need
            </h2>

            <p className="mt-6 leading-8 text-lg text-gray-600">
              Maa Foundation works for the rescue, medical care and
              rehabilitation of injured birds. When a bird is found
              injured or unable to fly, people can report the situation
              to the foundation so that the bird can receive the
              necessary care.
            </p>

            <p className="mt-4 leading-8 text-lg text-gray-600">
              The foundation focuses on helping birds recover in a safe
              environment. Once a bird becomes healthy and is ready,
              the goal is to return it to its natural environment and
              give it the freedom to fly again.
            </p>

            <div className="mt-7">
              <Link
                href="/report"
                className="inline-block rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Report an Injured Bird
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ================= NGO + TRUST ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Our Foundation
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              An NGO-Based Community Initiative
            </h2>

            <p className="mt-5 leading-8 text-lg text-gray-600">
              Maa Foundation is presented as an NGO-based initiative
              dedicated to supporting birds through rescue, care and
              rehabilitation. The foundation is also associated with
              the values of a Jain Trust, where compassion and care
              towards living beings are important.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* NGO */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">

              {/* NGO IMAGE */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/v1.png"
                  alt="NGO"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-green-950">
                NGO-Based Work
              </h3>

              <p className="mt-3 leading-7 text-lg text-gray-600">
                The foundation works with people and volunteers to
                support the rescue and care of injured birds and help
                them during their recovery.
              </p>

            </div>

            {/* Jain Trust */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">

              {/* TRUST IMAGE */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/parrot1.png"
                  alt="Jain Trust Values"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-green-950">
                Jain Trust Values
              </h3>

              <p className="mt-3 leading-7 text-lg text-gray-600">
                The work reflects values of compassion, kindness and
                care towards living beings, supporting the idea of
                protecting and helping birds in need.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= OUR WORK ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              From Rescue to Release
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {/* REPORT */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center shadow-sm">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/r1.jpg"
                  alt="Report"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-green-950">
                Report
              </h3>

              <p className="mt-3 text-lg leading-6 text-gray-600">
                People can share information and a photo of an injured
                bird.
              </p>
            </div>


            {/* RESCUE */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center shadow-sm">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/rescue.png"
                  alt="Rescue"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-green-950">
                Rescue
              </h3>

              <p className="mt-3 text-lg leading-6 text-gray-600">
                The rescue team can help the injured bird and bring it
                to a safe place.
              </p>
            </div>


            {/* CARE */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center shadow-sm">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/care.png"
                  alt="Care"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-green-950">
                Care
              </h3>

              <p className="mt-3 text-lg   leading-6 text-gray-600">
                Birds receive necessary medical care and support during
                rehabilitation.
              </p>
            </div>


            {/* RELEASE */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center shadow-sm">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/release.png"
                  alt="Release"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-green-950">
                Release
              </h3>

              <p className="mt-3 text-lg leading-6 text-gray-600">
                After recovery, the bird can return to its natural
                environment.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= MISSION ================= */}
      <section className="bg-green-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-xl font-bold uppercase tracking-widest text-green-300">
            Our Mission
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Give Every Bird a Chance to Fly Again
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-lg text-green-100">
            Our aim is to encourage people to help injured birds,
            connect them with rescue support and contribute towards
            their care and rehabilitation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/report"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-100"
            >
              Report a Bird
            </Link>

            <Link
              href="/volunteer"
              className="rounded-full border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800"
            >
              Become a Volunteer
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}