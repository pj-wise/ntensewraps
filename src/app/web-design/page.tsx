import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code, Smartphone, Zap, Search, Lock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Landing Page Design & Development | Ntense Car Wraps",
  description:
    "Professional website design and development services. Create a stunning online presence that drives results for your business.",
}

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-400">BUSINESS LANDING PAGE</span>
            <br />
            DESIGN & DEVELOPMENT
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Expand your brand beyond the road with a professional website. We create stunning, high-converting landing
            pages that showcase your services and drive customer engagement.
          </p>
          <Link href="/#contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                YOUR BUSINESS DESERVES A <span className="text-yellow-400">DIGITAL HOME</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In today's digital world, your website is often the first impression potential customers have of your
                business. A professional, well-designed website establishes credibility, showcases your work, and makes
                it easy for customers to contact you.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Whether you're a contractor, service provider, or retail business, we create custom landing pages that
                highlight your unique value proposition and convert visitors into customers.
              </p>
              <div className="bg-zinc-900 border border-yellow-400 rounded-lg p-6">
                <p className="text-yellow-400 font-bold text-xl mb-2">Complete Package</p>
                <p className="text-gray-300 leading-relaxed">
                  Combine your vehicle wrap with a professional website for a complete brand transformation that works
                  both on and offline.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Website design"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHAT'S <span className="text-yellow-400">INCLUDED</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Code className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Custom Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unique, professional designs tailored to your brand identity and business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Smartphone className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Mobile Responsive</h3>
                <p className="text-gray-300 leading-relaxed">
                  Perfect display on all devices - desktop, tablet, and mobile phones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Zap className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Fast Loading</h3>
                <p className="text-gray-300 leading-relaxed">
                  Optimized for speed to keep visitors engaged and improve search rankings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Search className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">SEO Optimized</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built with search engine optimization best practices to help customers find you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <MessageSquare className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Contact Forms</h3>
                <p className="text-gray-300 leading-relaxed">
                  Easy-to-use contact forms that make it simple for customers to reach you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <Lock className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Secure & Reliable</h3>
                <p className="text-gray-300 leading-relaxed">
                  SSL certificates and secure hosting to protect your site and customer data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHAT WE <span className="text-yellow-400">BUILD</span>
          </h2>

          <div className="space-y-16">
            {/* Landing Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">LANDING</span> PAGES
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Single-page websites designed to convert visitors into customers. Perfect for service businesses,
                  promotions, or specific campaigns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Hero section with compelling headline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Services or product showcase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Testimonials and social proof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Clear call-to-action buttons</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Contact form and business information</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=350&width=600"
                  alt="Landing page design"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Multi-Page Websites */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/placeholder.svg?height=350&width=600"
                  alt="Multi-page website"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">MULTI-PAGE</span> WEBSITES
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Comprehensive websites with multiple pages for businesses that need more content and functionality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Home, About, Services, and Contact pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Portfolio or gallery pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Blog or news section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom navigation and site structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Integration with social media and maps</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">E-COMMERCE</span> SOLUTIONS
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sell products or services online with a fully functional e-commerce website with secure payment
                  processing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Product catalog and shopping cart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Secure payment gateway integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Inventory management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Order tracking and customer accounts</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=350&width=600"
                  alt="E-commerce website"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            OUR <span className="text-yellow-400">DEVELOPMENT</span> PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Discovery</h3>
                <p className="text-gray-300 leading-relaxed">Understand your business, goals, and target audience.</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Design</h3>
                <p className="text-gray-300 leading-relaxed">Create mockups and designs for your approval.</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Development</h3>
                <p className="text-gray-300 leading-relaxed">Build your website with clean, modern code.</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Testing</h3>
                <p className="text-gray-300 leading-relaxed">Thorough testing across all devices and browsers.</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                  5
                </div>
                <h3 className="text-xl font-bold text-white">Launch</h3>
                <p className="text-gray-300 leading-relaxed">Deploy your site and provide ongoing support.</p>
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
                <h3 className="text-xl font-bold text-yellow-400">How long does it take to build a website?</h3>
                <p className="text-gray-300 leading-relaxed">
                  A simple landing page typically takes 1-2 weeks, while more complex multi-page websites can take 4-6
                  weeks depending on the scope and features required.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Do you provide hosting and domain services?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! We can handle domain registration, hosting setup, and ongoing maintenance, or work with your
                  existing hosting provider.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">Can I update the website myself?</h3>
                <p className="text-gray-300 leading-relaxed">
                  We can build your site with a user-friendly content management system (CMS) that allows you to make
                  updates easily, or we can handle updates for you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">What if I need changes after launch?</h3>
                <p className="text-gray-300 leading-relaxed">
                  We offer ongoing support and maintenance packages to keep your site updated, secure, and running
                  smoothly. We're always here to help with changes and improvements.
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
            READY TO BUILD YOUR <span className="text-yellow-400">ONLINE PRESENCE?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Contact us today to discuss your website project. Let's create a digital experience that drives results for
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
                Start Your Project
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

function MessageSquare({ className }: { className?: string }) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
