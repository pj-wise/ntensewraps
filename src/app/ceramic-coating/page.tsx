import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Droplets, Sun, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ceramic Coating Services | Ntense Car Wraps",
  description:
    "Professional ceramic coating services providing ultimate protection and shine for your vehicle. UV protection, hydrophobic surface, and long-lasting durability.",
}

export default function CeramicCoatingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl py-12 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-400">CERAMIC COATING</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ceramic coating is the newest and most advanced way to protect your car&apos;s finish. We offer a variety of
            ceramic coatings that will take your car&apos;s finish to a whole new level with ultimate protection and shine.
          </p>
          <Link href="/#contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* What is Ceramic Coating */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                ULTIMATE PROTECTION & <span className="text-yellow-400">SHINE</span> FOR YOUR VEHICLE
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Give your vehicle the protection it deserves with professional ceramic coating from Ntense Car Wraps.
                Our ceramic coating services provide a high-gloss finish, enhance color depth, and create a protective
                layer against UV rays, dirt, and minor scratches.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We specialize in preserving the beauty and longevity of your car&apos;s paintwork, ensuring it looks brand
                new for years to come.
              </p>
            </div>
            <div>
              <img
                src="/img/car-img-5.webp"
                alt="Ceramic coating shine"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Ceramic Coating - Technical */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHAT IS <span className="text-yellow-400">CERAMIC COATING?</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Ceramic coating is a liquid polymer applied to a car&apos;s exterior that chemically bonds with the factory
              paint, forming a durable protective layer. Unlike traditional wax, ceramic coating doesn&apos;t wash off or
              break down, making it an excellent long-term investment for car protection.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This coating provides resistance to UV rays, water, dirt, and other environmental contaminants that could
              harm your vehicle&apos;s paint. The result is a stunning, mirror-like finish that&apos;s easier to maintain and
              lasts for years.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            BENEFITS OF <span className="text-yellow-400">CERAMIC COATING</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Shield className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Enhanced Protection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Shields your car from UV damage, oxidation, and minor scratches, keeping your paint pristine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Droplets className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Water Repellent</h3>
                <p className="text-gray-300 leading-relaxed">
                  Prevents water spots and dirt from sticking, making your car easier to clean and maintain.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Check className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Increased Durability</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lasts for years, offering superior protection over traditional wax that needs frequent reapplication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Sparkles className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">High-Gloss Finish</h3>
                <p className="text-gray-300 leading-relaxed">
                  Creates a beautiful, reflective shine that enhances the look and depth of your vehicle&apos;s color.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <DollarSign className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Improved Resale Value</h3>
                <p className="text-gray-300 leading-relaxed">
                  Keeps your car looking new, preserving its value and making it more attractive to buyers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Sun className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">UV Ray Protection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Blocks harmful UV rays that cause paint fading and oxidation over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            OUR <span className="text-yellow-400">CERAMIC COATING</span> PROCESS
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            We follow a meticulous process to ensure flawless application and maximum durability
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Detailed Cleaning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Thoroughly wash and decontaminate the car&apos;s exterior to remove any dirt, grease, or residues.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Paint Correction</h3>
                <p className="text-gray-300 leading-relaxed">
                  Buff out minor scratches and imperfections to prepare the surface for coating.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Coating Application</h3>
                <p className="text-gray-300 leading-relaxed">
                  Carefully apply the ceramic coating, ensuring even coverage across all surfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Curing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Allow the coating to cure, forming a strong, protective bond with the paint.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-300 text-lg mt-12 leading-relaxed">
            This process results in a smooth, ultra-glossy finish that&apos;s built to withstand the elements.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHY DO YOUR CERAMIC COATING JOB AT <span className="text-yellow-400">NTENSE CAR WRAPS?</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              Working with us on ceramic coating projects means you can trust that the job will be done right. Not only
              are we highly experienced in ceramic coating and finishing, but we also take great care to ensure that
              every ceramic project is performed with precision, attention to detail and at affordable pricing.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We understand that ceramic coating is an essential part of protecting your vehicle, so we guarantee fast
              turnaround times and exceptional results every time. We believe in the power of ceramic coating and the
              value it adds to your car project, so trust us for your ceramic needs today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Check className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Experienced Technicians</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team has years of experience with paint protection and detailing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Shield className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Top-Quality Products</h3>
                <p className="text-gray-300 leading-relaxed">
                  We only use industry-leading ceramic coating products for long-lasting results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Sparkles className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Customer Satisfaction</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our commitment to excellence and customer service ensures you&apos;ll drive away happy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            FREQUENTLY ASKED <span className="text-yellow-400">QUESTIONS</span>
          </h2>
          <div className="space-y-6">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">How long does ceramic coating last?</h3>
                <p className="text-gray-300 leading-relaxed">
                  With proper maintenance, ceramic coating can last 2-5 years or more, depending on the quality of the
                  product and how well you care for your vehicle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Is ceramic coating better than traditional wax?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! Ceramic coating chemically bonds with your paint and lasts much longer than wax, which needs to
                  be reapplied every few months. It also provides superior protection and shine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Will ceramic coating prevent all scratches?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ceramic coating provides excellent protection against minor scratches and swirl marks, but it&apos;s not
                  completely scratch-proof. For maximum protection against rock chips and deeper scratches, consider
                  combining it with PPF.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">How do I maintain my ceramic coating?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Regular washing with pH-neutral soap and avoiding automatic car washes will help maintain your ceramic
                  coating. We&apos;ll provide detailed care instructions after installation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            READY TO PROTECT YOUR <span className="text-yellow-400">VEHICLE?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Contact us today for a consultation and discover how ceramic coating can transform your car&apos;s appearance and
            protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
                Schedule Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-6 text-lg bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function DollarSign({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
