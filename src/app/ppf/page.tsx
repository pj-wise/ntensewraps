import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Droplets, Sun, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) | Ntense Car Wraps",
  description:
    "Safeguard your car from scratches, chips, and UV damage with premium Paint Protection Film (PPF). Superior durability and a flawless finish.",
}

export default function PPFPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl py-12 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-400">PAINT PROTECTION FILM</span>
            <br />
            (PPF)
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Safeguard your car from scratches, chips, and UV damage with premium Paint Protection Film (PPF). Our
            high-quality film provides superior durability and a flawless finish, keeping your vehicle looking brand new
            for years to come.
          </p>
          <Link href="/#contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
              Get Expert Installation
            </Button>
          </Link>
        </div>
      </section>

      {/* What is PPF Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                ULTIMATE <span className="text-yellow-400">PROTECTION</span> FOR YOUR VEHICLE
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Looking for the best way to protect your car&apos;s paint from chips, scratches, and road debris? Our Paint
                Protection Film (PPF) installation offers unmatched durability and a virtually invisible shield to keep
                your vehicle looking brand new.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                PPF, also known as a <span className="text-yellow-400 font-semibold">clear bra</span>, is a
                high-performance, self-healing film designed to safeguard your vehicle&apos;s exterior from everyday wear and
                tear. Unlike traditional wax or ceramic coatings, PPF provides physical protection against impact
                damage, making it the best choice for long-term preservation.
              </p>
            </div>
            <div>
              <img
                src="/img/car-img-1.webp"
                alt="PPF installation"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            KEY BENEFITS OF <span className="text-yellow-400">PPF</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Shield className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Superior Scratch & Chip Resistance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Prevents rock chips, road debris damage, and light scratches from harming your paint.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Zap className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Self-Healing Technology</h3>
                <p className="text-gray-300 leading-relaxed">
                  Minor scratches disappear with heat exposure from the sun or warm water.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Sun className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">UV Protection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Shields paint from fading and oxidation due to sun exposure over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Droplets className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Hydrophobic Surface</h3>
                <p className="text-gray-300 leading-relaxed">
                  Repels water, dirt, and contaminants for easier cleaning and maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Check className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Long-Lasting Durability</h3>
                <p className="text-gray-300 leading-relaxed">
                  Protection that lasts up to 10 years with proper maintenance and care.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Shield className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Maintains Resale Value</h3>
                <p className="text-gray-300 leading-relaxed">
                  Preserves your vehicle&apos;s original paint, ensuring higher resale value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PPF vs Ceramic vs Vinyl */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            PPF VS. <span className="text-yellow-400">CERAMIC COATING</span> VS. VINYL WRAP
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-900">
                  <th className="border border-zinc-800 p-4 text-left text-white">Feature</th>
                  <th className="border border-zinc-800 p-4 text-left text-white">PPF</th>
                  <th className="border border-zinc-800 p-4 text-left text-white">Ceramic Coating</th>
                  <th className="border border-zinc-800 p-4 text-left text-white">Vinyl Wrap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-800 p-4 font-semibold text-white">Physical Protection</td>
                  <td className="border border-zinc-800 p-4 text-green-400">Excellent</td>
                  <td className="border border-zinc-800 p-4 text-gray-400">Minimal</td>
                  <td className="border border-zinc-800 p-4 text-green-400">Good</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="border border-zinc-800 p-4 font-semibold text-white">Self-Healing</td>
                  <td className="border border-zinc-800 p-4 text-green-400">Yes</td>
                  <td className="border border-zinc-800 p-4 text-gray-400">No</td>
                  <td className="border border-zinc-800 p-4 text-gray-400">No</td>
                </tr>
                <tr>
                  <td className="border border-zinc-800 p-4 font-semibold text-white">Durability</td>
                  <td className="border border-zinc-800 p-4 text-white">5-10 years</td>
                  <td className="border border-zinc-800 p-4 text-white">2-5 years</td>
                  <td className="border border-zinc-800 p-4 text-white">5-7 years</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="border border-zinc-800 p-4 font-semibold text-white">Appearance Change</td>
                  <td className="border border-zinc-800 p-4 text-white">Clear/Invisible</td>
                  <td className="border border-zinc-800 p-4 text-white">Enhanced Gloss</td>
                  <td className="border border-zinc-800 p-4 text-green-400">Full Color Change</td>
                </tr>
                <tr>
                  <td className="border border-zinc-800 p-4 font-semibold text-white">Best For</td>
                  <td className="border border-zinc-800 p-4 text-white">Maximum Protection</td>
                  <td className="border border-zinc-800 p-4 text-white">Shine & Easy Cleaning</td>
                  <td className="border border-zinc-800 p-4 text-white">Customization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            HOW OUR <span className="text-yellow-400">PPF INSTALLATION</span> WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Consultation & Selection</h3>
                <p className="text-gray-300 leading-relaxed">
                  We help you choose the best PPF package based on your driving needs and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Paint Surface Preparation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deep-clean and polish your car&apos;s paint to remove contaminants for optimal adhesion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Precision-Cut & Installation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Using advanced software and precision cutting, we apply the film seamlessly to high-impact areas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Quality Inspection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Thorough quality check to ensure a flawless finish and proper adhesion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHY CHOOSE <span className="text-yellow-400">NTENSE CAR WRAPS</span> FOR PPF?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Check className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Certified Installers</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our experts specialize in high-quality PPF applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Shield className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Top-Tier Materials</h3>
                <p className="text-gray-300 leading-relaxed">
                  We use only the best self-healing and hydrophobic films.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Seamless Application</h3>
                <p className="text-gray-300 leading-relaxed">Precision-cut technology for a perfect, invisible fit.</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-4 text-center">
                <Check className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Local Expertise</h3>
                <p className="text-gray-300 leading-relaxed">Trusted PPF service with proven results.</p>
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
                <h3 className="text-xl font-bold text-yellow-400">What is Paint Protection Film (PPF)?</h3>
                <p className="text-gray-300 leading-relaxed">
                  PPF is a clear, durable film applied to your vehicle&apos;s paint to protect it from scratches, chips, and
                  other environmental damage. It helps preserve the car&apos;s finish, ensuring it looks brand new for years.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">How long does Paint Protection Film last?</h3>
                <p className="text-gray-300 leading-relaxed">
                  PPF typically lasts 5-10 years, depending on the quality of the film and how well it&apos;s maintained. Our
                  high-quality films are designed to provide long-lasting protection and retain their clarity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">
                  Will Paint Protection Film change the appearance of my car?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No, the film is nearly invisible, providing protection without altering the appearance of your car. It
                  enhances the paint&apos;s color depth and gloss, giving your vehicle a flawless finish.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Can PPF be removed?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! PPF can be professionally removed without damaging your original paint. This makes it a great
                  option for leased vehicles or if you want to change your protection in the future.
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
            PROTECT YOUR <span className="text-yellow-400">INVESTMENT</span> TODAY
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get expert PPF installation and keep your vehicle looking brand new for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
                Schedule Installation
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
