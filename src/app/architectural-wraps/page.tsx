import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Home, Building2, Palette } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Architectural & Appliance Wraps | Ntense Car Wraps",
  description:
    "Transform your spaces and appliances with custom vinyl wraps. Professional installation for walls, furniture, appliances, and architectural elements.",
}

export default function ArchitecturalWrapsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl py-12 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-400">ARCHITECTURAL</span> &<br />
            APPLIANCE WRAPS
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your interior and exterior spaces with custom vinyl wraps. From kitchen appliances to office
            walls, we bring your vision to life with durable, stunning finishes that completely change the look of any
            surface.
          </p>
          <Link href="/#contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Wrap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHAT CAN WE <span className="text-yellow-400">WRAP?</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                <span className="text-yellow-400">APPLIANCE</span> WRAPS
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Give your kitchen or office a complete makeover without the cost of replacing appliances. Our
                high-quality vinyl wraps can transform refrigerators, dishwashers, ovens, washing machines, and more
                with any color or finish you desire.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Refrigerators and freezers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Dishwashers and ovens</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Washing machines and dryers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Microwaves and small appliances</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/img/ref-img-1.jpg"
                alt="Wrapped kitchen appliances"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/img/boat-img-1.jpg"
                alt="Architectural vinyl wrap"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                <span className="text-yellow-400">ARCHITECTURAL</span> WRAPS
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Transform walls, doors, furniture, and architectural elements with custom vinyl finishes. Perfect for
                residential, commercial, and retail spaces looking for a fresh, modern aesthetic without the mess and
                cost of traditional renovation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Interior and exterior walls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Doors and cabinetry</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Furniture and countertops</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Columns, pillars, and trim</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHY CHOOSE <span className="text-yellow-400">VINYL WRAPS</span> FOR YOUR SPACE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <DollarSign className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Cost-Effective Transformation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Much more affordable than replacing appliances or renovating spaces, with stunning results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Clock className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Quick Installation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Most projects completed in days, not weeks, with minimal disruption to your space.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Palette className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Unlimited Design Options</h3>
                <p className="text-gray-300 leading-relaxed">
                  Choose from thousands of colors, patterns, textures, and finishes to match your vision.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Shield className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Durable & Long-Lasting</h3>
                <p className="text-gray-300 leading-relaxed">
                  High-quality vinyl withstands daily wear and tear, moisture, and temperature changes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Recycle className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Removable & Reversible</h3>
                <p className="text-gray-300 leading-relaxed">
                  Change your look whenever you want without damaging the original surface underneath.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Sparkles className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Easy Maintenance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Simple to clean and maintain, keeping your surfaces looking fresh for years.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            PERFECT FOR <span className="text-yellow-400">ANY SPACE</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Home className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Residential</h3>
                <p className="text-gray-300 leading-relaxed">Kitchens, bathrooms, living spaces, and home offices</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Building2 className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Commercial</h3>
                <p className="text-gray-300 leading-relaxed">Offices, lobbies, conference rooms, and break areas</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <ShoppingBag className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Retail</h3>
                <p className="text-gray-300 leading-relaxed">Storefronts, displays, fitting rooms, and counters</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Utensils className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Hospitality</h3>
                <p className="text-gray-300 leading-relaxed">Restaurants, hotels, cafes, and entertainment venues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            OUR <span className="text-yellow-400">INSTALLATION</span> PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Consultation & Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  We visit your space, discuss your vision, and show you material samples and design options.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Measurement & Planning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Precise measurements and custom cutting ensure a perfect fit for your surfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Surface Preparation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Thorough cleaning and preparation to ensure optimal adhesion and longevity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Expert Installation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional application with attention to detail for a flawless, seamless finish.
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
                <h3 className="text-xl font-bold text-yellow-400">How long do architectural wraps last?</h3>
                <p className="text-gray-300 leading-relaxed">
                  With proper care, architectural and appliance wraps can last 5-10 years or more, depending on the
                  location and usage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Can wraps be applied to any surface?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Most smooth, non-porous surfaces can be wrapped, including metal, plastic, wood, and glass. We'll
                  assess your specific surfaces during consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Will wrapping damage my appliances or walls?</h3>
                <p className="text-gray-300 leading-relaxed">
                  No! When professionally installed and removed, vinyl wraps do not damage the underlying surface and
                  can actually protect it from wear and tear.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">How do I clean and maintain wrapped surfaces?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Simply wipe with a damp cloth and mild soap. Avoid abrasive cleaners and scrubbing pads. We'll provide
                  detailed care instructions after installation.
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
            READY TO TRANSFORM YOUR <span className="text-yellow-400">SPACE?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Contact us today for a free consultation and discover how vinyl wraps can completely change your interior or
            exterior spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
                Schedule Consultation
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

function Clock({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

function Recycle({ className }: { className?: string }) {
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  )
}

function Sparkles({ className }: { className?: string }) {
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
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}

function ShoppingBag({ className }: { className?: string }) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function Utensils({ className }: { className?: string }) {
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
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}
