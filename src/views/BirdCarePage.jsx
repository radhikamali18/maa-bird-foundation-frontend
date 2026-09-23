import Link from "next/link";

const careSteps = [
  {
    icon: "/images/icons/rescue.png",
    title: "Rescue",
    text: "An injured bird is safely rescued after receiving a report.",
  },
  {
    icon: "/images/icons/medical care.jpg",
    title: "Medical Care",
    text: "The bird receives the necessary medical attention and care.",
  },
  {
    icon: "/images/icons/medicin.png",
    title: "Medicines",
    text: "Required medicines and treatment support are provided during recovery.",
  },
  {
    icon: "/images/icons/care.png",
    title: "Rehabilitation",
    text: "The bird is kept under care until it becomes healthy and strong.",
  },
  {
    icon: "/images/icons/release.png",
    title: "Release",
    text: "After recovery, the bird is released back into the open sky.",
  },
];

export default function BirdCarePage() {
  return (
    <div className="bg-white">

      {/* ================= HEADER ================= */}
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
            Bird Care
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Care That Helps Birds Recover
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Injured birds need safety, medical attention and time to
            recover. Maa Foundation supports birds through their journey
            from rescue to rehabilitation and release.
          </p>

        </div>
      </section>


      {/* ================= CARE PROCESS ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Our Care Process
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              A Journey Towards Recovery
            </h2>

            <p className="mx-auto mt-4 text-lg max-w-2xl text-gray-600">
              Every step is focused on helping an injured bird recover
              safely.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">

            {careSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* ICON IMAGE */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 p-2">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <span className="mt-5 block text-lg font-bold text-green-600">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-green-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-lg leading-6 text-gray-600">
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= MEDICAL CARE ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-lg">
            <img
              src="/images/gallery/bird-care image.avif"
              alt="Bird receiving care"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>


          {/* Content */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Medical Support
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Medical Care for Birds
            </h2>

            <p className="mt-6 leading-8 text-lg  text-gray-600">
              Injured birds may require proper medical attention and
              supportive care. The foundation's care process focuses on
              keeping birds safe and supporting their recovery.
            </p>

            <div className="mt-7 space-y-4">

              {/* Medical Attention */}
              <div className="flex gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 p-2">
                  <img
                    src="/images/icons/medical care.jpg"
                    alt="Medical Attention"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-green-950">
                    Medical Attention
                  </h3>

                  <p className="mt-1 text-lg leading-6 text-gray-600">
                    Injured birds can receive appropriate care based on
                    their condition.
                  </p>
                </div>

              </div>


              {/* Medicines */}
              <div className="flex gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 p-2">
                  <img
                    src="/images/icons/medicin.png"
                    alt="Medicines"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-green-950">
                    Medicines
                  </h3>

                  <p className="mt-1 text-lg leading-6 text-gray-600">
                    Necessary medicines and treatment support can help
                    birds during their recovery.
                  </p>
                </div>

              </div>


              {/* Safe Recovery */}
              <div className="flex gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 p-2">
                  <img
                    src="/images/icons/safe recovery.png"
                    alt="Safe Recovery"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-green-950">
                    Safe Recovery
                  </h3>

                  <p className="mt-1 text-lg leading-6 text-gray-600">
                    Birds are supported in a safe environment while
                    they recover.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= MEDICINE SUPPORT ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Support Bird Care
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Help Provide Medicines and Care
            </h2>

            <p className="mt-5 leading-8 text-lg text-gray-600">
              Supporting bird care can help the foundation provide the
              resources required during rescue and rehabilitation.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Medicines */}
            <div className="rounded-3xl bg-green-50 p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-sm">
                <img
                  src="/images/icons/medicin.png"
                  alt="Medicines"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-green-950">
                Medicines
              </h3>

              <p className="mt-3 text-lg leading-6 text-gray-600">
                Support the availability of medicines and necessary
                medical supplies for birds in care.
              </p>

            </div>


            {/* Funds */}
            <div className="rounded-3xl bg-green-50 p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-sm">
                <img
                  src="/images/icons/fund.webp"
                  alt="Funds"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-green-950">
                Funds
              </h3>

              <p className="mt-3 text-lg leading-6 text-gray-600">
                Financial support can contribute towards rescue,
                treatment and rehabilitation work.
              </p>

            </div>


            {/* Volunteer Support */}
            <div className="rounded-3xl bg-green-50 p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-sm">
                <img
                  src="/images/icons/v1.png"
                  alt="Volunteer Support"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-green-950">
                Volunteer Support
              </h3>

              <p className="mt-3 text-lg leading-6 text-gray-600">
                Volunteers can support the foundation and contribute
                their time towards the mission.
              </p>

            </div>

          </div>


          <div className="mt-10 text-center">

            <Link
              href="/donate"
              className="inline-block rounded-full text-lg  bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
            >
              Support Bird Care
            </Link>

          </div>

        </div>
      </section>


      {/* ================= RELEASE ================= */}
      <section className="bg-green-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* RELEASE IMAGE */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-3">
            <img
              src="/images/icons/h1.png"
              alt="Release"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            The Goal Is Freedom
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-xl text-green-100">
            Once a bird has recovered and is ready, the goal is to
            release it back into the open sky where it belongs.
          </p>

          <Link
            href="/gallery"
            className="mt-8 inline-block rounded-full text-lg bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-100"
          >
            See Recovered Birds
          </Link>

        </div>
      </section>

    </div>
  );
}