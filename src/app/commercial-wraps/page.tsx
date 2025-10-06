import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, TrendingUp, Users, MapPin, Eye } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Commercial Wraps & Design | Ntense Car Wraps",
  description:
    "Turn your fleet into mobile billboards with professional commercial vehicle wraps. Custom designs that promote your brand 24/7.",
}

export default function CommercialWrapsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl py-12 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-400">COMMERCIAL WRAPS</span>
            <br />& DESIGN
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your trucks, vans, and storefronts into powerful brand ambassadors. Our professional commercial
            wrap and signage solutions ensure your business is noticed everywhere, turning every mile into a marketing
            opportunity.
          </p>
          <Link href="/#contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
              Get Free Design Mockup
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Commercial Wraps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHY <span className="text-yellow-400">COMMERCIAL WRAPS?</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Make your business more visible with our commercial wrap services. From trucks to vans and even
                trailers, we turn your vehicles into 24/7 mobile billboards that promote your brand wherever they go.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Commercial vehicle wraps are one of the most cost-effective forms of advertising available. With a
                single investment, your brand reaches thousands of potential customers every day, generating impressions
                that traditional advertising can't match.
              </p>
              <div className="bg-zinc-900 border border-yellow-400 rounded-lg p-6">
                <p className="text-yellow-400 font-bold text-xl mb-2">Did You Know?</p>
                <p className="text-gray-300 leading-relaxed">
                  A single vehicle wrap generates between 30,000-70,000 daily impressions, making it one of the lowest
                  cost-per-impression advertising methods available.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/img/commercial-car-1.webp"
                alt="Commercial vehicle wrap"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            BENEFITS OF <span className="text-yellow-400">COMMERCIAL WRAPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <TrendingUp className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Maximum Brand Exposure</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your brand works 24/7, reaching thousands of potential customers every day your vehicle is on the
                  road.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <DollarSign className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Cost-Effective Advertising</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lower cost per impression than billboards, radio, or digital ads with a one-time investment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Users className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Professional Image</h3>
                <p className="text-gray-300 leading-relaxed">
                  Establish credibility and professionalism with a cohesive, branded fleet appearance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <MapPin className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Local Market Targeting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Reach customers in your service area as you drive through neighborhoods and job sites.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Shield className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Vehicle Protection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Protect your fleet's paint from scratches and wear while advertising your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Eye className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Non-Intrusive Marketing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike ads that interrupt, vehicle wraps naturally catch attention without being pushy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            OUR <span className="text-yellow-400">COMMERCIAL</span> SERVICES
          </h2>

          <div className="space-y-16">
            {/* Fleet Wraps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">FLEET</span> WRAPS
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Create a unified, professional look across your entire fleet. We handle everything from design to
                  installation, ensuring consistency and quality across all vehicles.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Full and partial wraps for company vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Consistent branding across all vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Trucks, vans, trailers, and specialty vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Fleet management and maintenance programs</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/img/commercial-car-2.webp"
                  alt="Fleet wraps"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Custom Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/designer-creating-custom-vehicle-wrap-design-on-co.jpg"
                  alt="Custom design"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">CUSTOM</span> DESIGN SERVICES
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our expert design team creates eye-catching, professional designs that effectively communicate your
                  brand message and make your vehicles stand out.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Professional graphic design services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Logo integration and brand consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Contact information and call-to-action placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Free design mockups and revisions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vinyl Lettering & Graphics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">VINYL LETTERING</span> & GRAPHICS
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Not ready for a full wrap? We offer vinyl lettering, graphics, and decals as a simpler and more
                  cost-effective way to advertise on your vehicles, store windows, or storefronts.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Company name and logo application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Contact information and website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom graphics and decals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Budget-friendly branding solution</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=350&width=600"
                  alt="Vinyl lettering"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Storefront Signage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/placeholder.svg?height=350&width=600"
                  alt="Storefront signage"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">STOREFRONT</span> SIGNAGE
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  In addition to vehicle wraps, we offer storefront signage solutions, including window graphics and
                  perforated vinyl. These are excellent ways to attract foot traffic and improve your business's curb
                  appeal.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Window graphics and decals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Perforated vinyl for privacy and branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Dimensional lettering and logos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Complete storefront branding packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            OUR <span className="text-yellow-400">PROCESS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Consultation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Discuss your goals, brand, and budget to create the perfect solution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team creates custom designs with free mockups and revisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Production</h3>
                <p className="text-gray-300 leading-relaxed">
                  High-quality printing and precision cutting of your wrap materials.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Installation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expert installation by certified technicians for flawless results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  5
                </div>
                <h3 className="text-xl font-bold text-white">Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ongoing maintenance guidance and support for your wrapped fleet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            FREQUENTLY ASKED <span className="text-yellow-400">QUESTIONS</span>
          </h2>
          <div className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">
                  What's the difference between a full wrap and a partial wrap?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A full wrap covers the entire vehicle, while a partial wrap only covers certain areas like doors or
                  windows, making it a cost-effective option for businesses on a budget.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">How long does a commercial wrap last?</h3>
                <p className="text-gray-300 leading-relaxed">
                  With proper care and maintenance, commercial vehicle wraps typically last 5-7 years, providing
                  long-term advertising value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Can you wrap any type of vehicle?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! We can wrap cars, trucks, vans, trailers, buses, boats, and specialty vehicles of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Do you offer design services?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our in-house design team creates custom designs tailored to your brand, complete with free mockups and
                  revisions until you're satisfied.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            READY TO GROW YOUR <span className="text-yellow-400">BUSINESS?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Contact us today for a free consultation and design mockup. Let's turn your fleet into a powerful marketing
            tool!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
                Get Free Mockup
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

function Shield({ className }: { className?: string }) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
