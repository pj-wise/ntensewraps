import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Palette, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vinyl Wrap Services | Ntense Car Wraps",
  description:
    "Professional vinyl wrap services for personal and commercial vehicles. Transform your car with custom designs, color changes, and durable protection.",
}

export default function VinylWrapPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl py-12 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-400">VINYL WRAP</span> SERVICES
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your vehicle with high-quality vinyl wraps. Whether you&apos;re looking for a striking design for your
            personal car or need your company logo prominently featured on a commercial vehicle, our expert team
            delivers the perfect wrap that meets all of your needs.
          </p>
          <Link href="/#contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* What is Vinyl Wrap Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                WHAT IS <span className="text-yellow-400">VINYL WRAP?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Vinyl wrapping is the process of applying a thin, durable vinyl film to your vehicle&apos;s exterior. Unlike
                traditional paint, vinyl wraps are completely reversible and provide excellent protection for your
                original paint while allowing for unlimited customization options.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you want a full color change, custom graphics, or commercial branding, vinyl wraps offer a
                cost-effective and flexible solution that can be removed or changed whenever you want a new look.
              </p>
            </div>
            <div>
              <img
                src="/img/car-img-4.webp"
                alt="Professional vinyl wrap installation"
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
            WHY CHOOSE <span className="text-yellow-400">VINYL WRAP?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Shield className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Paint Protection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Protects your original paintwork from scratches, chips, and UV damage while maintaining resale value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Palette className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Unlimited Customization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Choose from thousands of colors, finishes, and custom designs to make your vehicle truly unique.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Clock className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Fully Reversible</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike paint, wraps can be removed without damaging your original finish, giving you flexibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <DollarSign className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Cost-Effective</h3>
                <p className="text-gray-300 leading-relaxed">
                  More affordable than a custom paint job with faster installation and no downtime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Check className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Long-Lasting Durability</h3>
                <p className="text-gray-300 leading-relaxed">
                  High-quality vinyl wraps last 5-7 years with proper care and maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Shield className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Weather Resistant</h3>
                <p className="text-gray-300 leading-relaxed">
                  Premium materials withstand harsh weather conditions and maintain their appearance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vinyl Wrap Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            OUR <span className="text-yellow-400">VINYL WRAP</span> SERVICES
          </h2>

          <div className="space-y-16">
            {/* Customized Personal Wraps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">1.</span> Customized Personal Wraps
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Want to stand out on the road? Our custom wraps allow you to completely transform the look of your
                  vehicle. Whether you&apos;re changing colors or adding unique accents, our vinyl wraps provide the perfect
                  way to express your style and make your vehicle one-of-a-kind.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Full color changes (from bold reds to sleek blacks)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom designs tailored to your vision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">High-quality, weather-resistant materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Protect your original paintwork</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/img/car-img-3.webp"
                  alt="Custom personal vehicle wrap"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Commercial Signage Wraps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/commercial-vehicle-wrap-with-business-branding.jpg"
                  alt="Commercial vehicle wrap"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">2.</span> Commercial Signage Wraps
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Make your business more visible with our commercial wrap services. From trucks to vans and even
                  trailers, we turn your vehicles into 24/7 mobile billboards that promote your brand wherever they go.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Full and partial wraps for company vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Business branding with logos, contact info, and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">High-quality materials that last in any weather condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">A cost-effective way to advertise your business daily</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
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
                  We discuss your vision, show you material samples, and create a custom design that matches your goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Surface Preparation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Thorough cleaning and decontamination of your vehicle&apos;s surface to ensure perfect adhesion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Precision Application</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expert installation using professional techniques to ensure a seamless, bubble-free finish.
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
                  Final inspection and detailing to ensure every edge is perfect and you&apos;re completely satisfied.
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
                  What is the difference between a full wrap and a partial wrap?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A full wrap covers the entire vehicle, while a partial wrap only covers certain areas like doors,
                  hood, or roof. Partial wraps are a cost-effective option for adding accents or commercial branding.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Can I choose any color or design for my car wrap?</h3>
                <p className="text-gray-300 leading-relaxed">
                  We offer a wide range of colors and finishes including matte, gloss, satin, metallic, and chrome. We
                  can also create custom designs tailored specifically to your vision.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">How long do vehicle wraps last?</h3>
                <p className="text-gray-300 leading-relaxed">
                  With proper care, our high-quality vinyl wraps can last 5-7 years, making them a durable and
                  long-lasting investment for your vehicle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Will a wrap damage my original paint?</h3>
                <p className="text-gray-300 leading-relaxed">
                  No! When professionally installed and removed, vinyl wraps actually protect your original paint and
                  can be removed without causing any damage.
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
            READY TO TRANSFORM YOUR <span className="text-yellow-400">VEHICLE?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Contact us today for a free consultation and custom quote. Let&apos;s bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
                Get Free Quote
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
