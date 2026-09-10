import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Maa Foundation Logo"
                className="h-14 w-14 rounded-full bg-white object-contain"
              />

              <div>
                <h2 className="text-lg font-bold">
                  Maa Foundation
                </h2>
                <p className="text-sm text-green-200">
                  Bird Rescue & Rehabilitation
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-6 text-green-100">
              Working towards the rescue, medical care and rehabilitation
              of injured birds and helping them return safely to the open sky.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm text-green-100">
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>

              <Link href="/report" className="hover:text-white">
                Report an Injured Bird
              </Link>

              <Link href="/gallery" className="hover:text-white">
                Rescued Birds Gallery
              </Link>

              <Link href="/volunteer" className="hover:text-white">
                Become a Volunteer
              </Link>

              <Link href="/social-media" className="hover:text-white">
                Social Media  
              </Link>

              <Link href="/donate" className="hover:text-white">
                Support a Bird
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-green-100">

              {/* LOCATION IMAGE ADDED */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                  <img
                    src="/images/icons/visit us.jpg"
                    alt="Location"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p>
                   Shop No. 9, Emerald Shopping Center, 
                  Parsi Panchayat Road, Jijamata Colony, 
                  Andheri Eest, Mumbai - 400069
                </p>
              </div>

              {/* PHONE IMAGE ADDED */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                  <img
                    src="/images/icons/call.webp"
                    alt="Phone"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p>
                   +91 9820523802
                </p>
              </div>

              {/* PHONE IMAGE ADDED */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                  <img
                    src="/images/icons/call.webp"
                    alt="Phone"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p>
                   +91 8655370005
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-green-800 pt-6 text-center text-sm text-green-200">
          <p>
            © {new Date().getFullYear()} Maa Foundation. All rights reserved.
          </p>

          <p className="mt-2">
            Community Support • Bird Rescue • Care • Rehabilitation
          </p>
        </div>
      </div>
    </footer>
  );
}