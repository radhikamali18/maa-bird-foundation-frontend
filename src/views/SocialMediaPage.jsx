import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const platforms = [
  {
    icon: FaInstagram,
    color: "text-[#E1306C]",
    name: "Instagram",
    title: "Follow Our Journey",
    text: "See bird rescue stories, recovery updates and moments from our work.",
    button: "Follow on Instagram",
    href: "https://www.instagram.com/maabirdhelpline",
  },
  {
    icon: FaYoutube,
    color: "text-[#FF0000]",
    name: "YouTube",
    title: "Watch Our Stories",
    text: "Watch bird rescue stories, awareness videos and updates from Maa Foundation.",
    button: "Visit YouTube",
    href: "https://www.youtube.com/@maabirdhelpline9061/shorts",
  },
  {
    icon: FaFacebook,
    color: "text-[#1877F2]",
    name: "Facebook",
    title: "Stay Connected",
    text: "Stay updated with our activities, awareness messages and community work.",
    button: "Visit Facebook",
    href: "https://www.facebook.com/maabirdhelpline",
  },
  {
    icon: FaWhatsapp,
    color: "text-[#25D366]",
    name: "WhatsApp",
    title: "Connect With Us",
    text: "Use WhatsApp to stay connected and share important information.",
    button: "Contact Us",
    href: "tel:+919820523802",
  },
];

const socialGoals = [
  {
    icon: "/images/icons/sprade.webp",
    title: "Spread Awareness",
    text: "Use social media to create awareness about injured birds and the importance of helping them.",
  },
  {
    icon: "/images/icons/rescue.png",
    title: "Share Rescue Stories",
    text: "Share rescue and recovery stories to show how community support can make a difference.",
  },
  {
    icon: "/images/icons/community.png",
    title: "Build a Community",
    text: "Connect volunteers, supporters and people who want to contribute towards bird welfare.",
  },
  {
    icon: "/images/icons/care.png",
    title: "Encourage Support",
    text: "Make it easier for people to support bird rescue, medicines and rehabilitation.",
  },
];

export default function SocialMediaPage() {
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

          <span className="text-xl font-bold uppercase tracking-widest text-green-700">
            Social Media
          </span>

          <h1 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
            Connect. Share. Help.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Social media helps Maa Foundation connect with the community,
            spread awareness and share the journey of birds from rescue
            to recovery.
          </p>

        </div>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Follow & Connect
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Find Us on Social Media
            </h2>

            <p className="mx-auto text-lg mt-4 max-w-2xl text-gray-600">
              Follow our social platforms to stay connected with our
              activities and bird welfare work.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <div
                  key={platform.name}
                  className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* REAL SOCIAL MEDIA ICON */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100">
                    <Icon
                      size={40}
                      className={platform.color}
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-green-950">
                    {platform.name}
                  </h3>

                  <h4 className="mt-2 text-xl font-semibold text-green-700">
                    {platform.title}
                  </h4>

                  <p className="mt-3 text-lg leading-6 text-gray-600">
                    {platform.text}
                  </p>

                  <a
                    href={platform.href}
                    target={
                      platform.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      platform.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-6 inline-block rounded-full bg-green-700 px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-800"
                  >
                    {platform.button}
                  </a>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= SOCIAL MEDIA STRATEGY ================= */}
      <section className="bg-green-50 px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Our Social Media Strategy
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Using Social Media for a Good Cause
            </h2>

            <p className="mt-5 leading-8 text-lg  text-gray-600">
              Social media can help community-based organizations reach
              more people, communicate their work and encourage community
              participation.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {socialGoals.map((goal) => (
              <div
                key={goal.title}
                className="flex gap-5 rounded-3xl bg-white p-7 shadow-sm"
              >

                {/* IMAGE ICON */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 p-2">
                  <img
                    src={goal.icon}
                    alt={goal.title}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-green-950">
                    {goal.title}
                  </h3>

                  <p className="mt-2 text-lg leading-7 text-gray-600">
                    {goal.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTENT IDEAS ================= */}
      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-xl font-bold uppercase tracking-widest text-green-700">
              Content We Can Share
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Stories That Create Awareness
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Rescue Updates */}
            <div className="rounded-3xl border border-gray-100 p-7">

              {/* IMAGE */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/rescue.png"
                  alt="Rescue Updates"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-green-950">
                Rescue Updates
              </h3>

              <p className="mt-3 text-lg leading-7 text-gray-600">
                Share updates about birds that have been rescued and
                are receiving care.
              </p>

            </div>


            {/* Recovery Stories */}
            <div className="rounded-3xl border border-gray-100 p-7">

              {/* IMAGE */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/safe recovery.png"
                  alt="Recovery Stories"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-green-950">
                Recovery Stories
              </h3>

              <p className="mt-3 text-lg leading-7 text-gray-600">
                Share the journey of recovered birds and their return
                to the open sky.
              </p>

            </div>


            {/* Awareness Posts */}
            <div className="rounded-3xl border border-gray-100 p-7">

              {/* IMAGE */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 p-2">
                <img
                  src="/images/icons/1.png"
                  alt="Awareness Posts"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-green-950">
                Awareness Posts
              </h3>

              <p className="mt-3 text-lg leading-7 text-gray-600">
                Share useful information that encourages people to
                notice and help injured birds.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-950 px-5 py-16 text-center text-white lg:px-8">

        <div className="mx-auto max-w-3xl">

          {/* CTA IMAGE */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-3">
            <img
              src="/images/icons/h1.png"
              alt="Bird"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Be a Voice for Birds
          </h2>

          <p className="mt-4 leading-7 text-xl  text-green-100">
            Follow, share and spread awareness so that more people can
            learn how to help birds in need.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/maabirdhelpline?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full text-lg  bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-100"
            >
              Follow on Instagram
            </a>


            {/* Report Bird */}
            <Link
              href="/report"
              className="rounded-full border text-lg  border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800"
            >
              Report an Injured Bird
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}