import Link from "next/link";

const supportOptions = [
  {
    icon: "",
    image: "/images/icons/medicin.png",
    title: "Medicines",
    text: "Help provide medicines and medical supplies needed for birds under care.",
  },
  {
    icon: "",
    image: "/images/icons/medical care.jpg",
    title: "Medical Care",
    text: "Support treatment and care for injured birds during their recovery.",
  },
  {
    icon: "",
    image: "/images/icons/fund.webp",
    title: "Rescue & Rehabilitation",
    text: "Your support can contribute towards rescue and rehabilitation activities.",
  },
];

export default function DonatePage() {
  return (
    <div className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Support Our Work
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Help Us Care for Birds
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Your support can help provide medicines, medical care and
            rehabilitation for birds in need.
          </p>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Every Contribution Matters
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Where Your Support Can Help
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Supporting bird rescue and rehabilitation requires care,
              medical supplies and resources. Your contribution can help
              support this work.
            </p>

          </div>


          {/* Support Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {supportOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">

                  {/* IMAGE ADDED */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />

                  {/* ORIGINAL ICON KEPT */}
                  <span className="hidden">
                    {item.icon}
                  </span>

                </div>

                <h3 className="mt-5 text-xl font-bold text-green-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= DONATION SECTION ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl bg-white p-7 text-center shadow-lg md:p-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 p-3">

              {/* IMAGE ADDED */}
              <img
                src="/images/icons/h1.png"
                alt="Bird"
                className="h-full w-full object-contain"
              />

            </div>

            <h2 className="mt-6 text-3xl font-bold text-green-950 md:text-4xl">
              Make a Contribution
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              If you would like to support Maa Foundation's work,
              please get in touch with the foundation to learn about
              the available donation and support options.
            </p>


            {/* Donation Categories */}
            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">

              <div className="rounded-2xl bg-green-50 p-5">

                {/* IMAGE ADDED */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2">
                  <img
                    src="/images/icons/medicin.png"
                    alt="Medicines"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* ORIGINAL ICON KEPT */}
                <div className="text-2xl">
                </div>

                <h3 className="mt-3 font-bold text-green-950">
                  Medicines
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Support medical supplies.
                </p>
              </div>


              <div className="rounded-2xl bg-green-50 p-5">

                {/* IMAGE ADDED */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2">
                  <img
                    src="/images/icons/medical care.jpg"
                    alt="Treatment"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* ORIGINAL ICON KEPT */}
                <div className="text-2xl">
                </div>

                <h3 className="mt-3 font-bold text-green-950">
                  Treatment
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Support bird medical care.
                </p>
              </div>


              <div className="rounded-2xl bg-green-50 p-5">

                {/* IMAGE ADDED */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2">
                  <img
                    src="/images/icons/fund.webp"
                    alt="General Fund"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* ORIGINAL ICON KEPT */}
                <div className="text-2xl">
                </div>

                <h3 className="mt-3 font-bold text-green-950">
                  General Fund
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Support rescue activities.
                </p>
              </div>

            </div>


            {/* Contact Button */}
            <div className="mt-10">

              <Link
                href="/contact"
                className="inline-block rounded-full bg-green-700 px-8 py-4 font-semibold text-white shadow-md transition hover:bg-green-800"
              >
                Contact Us for Donation
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= IMPORTANT NOTE ================= */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-green-100 bg-green-50 p-7 text-center">

          {/* IMAGE ADDED */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white p-2">
            <img
              src="/images/icons/care.png"
              alt="Support with Care"
              className="h-full w-full object-contain"
            />
          </div>

          {/* ORIGINAL ICON KEPT */}
          <div className="text-3xl">
          </div>

          <h2 className="mt-4 text-xl font-bold text-green-950">
            Support with Care
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Donations and support can help the foundation continue
            providing care and resources for birds in need.
          </p>

        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-green-950 px-5 py-16 text-center text-white lg:px-8">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-bold md:text-4xl">
            Together, We Can Help More Birds
          </h2>

          <p className="mt-4 leading-7 text-green-100">
            A little support can help provide care to a bird that needs it.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <Link
              href="/report"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-100"
            >
              Report an Injured Bird
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