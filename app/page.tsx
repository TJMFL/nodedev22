"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, SpadeIcon as Spa, Leaf, ArrowRight, Coffee, Users, Star, UserCircle } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    href: "/events",
    icon: Calendar,
    label: "Wellness Events",
    description: "Discover transformative events and experiences",
  },
  {
    href: "/wellness-classes",
    icon: Spa,
    label: "Wellness Classes",
    description: "Regular classes to nurture mind, body & spirit",
  },
  {
    href: "/wellness-resources",
    icon: Leaf,
    label: "Wellness Resources",
    description: "Guides and practices for your wellness journey",
  },
  {
    href: "/wellness-practitioners",
    icon: UserCircle,
    label: "Wellness Practitioners",
    description: "Meet our skilled wellness professionals",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Home() {
  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-8 dark-gradient-bg">
        <main className="flex-grow flex flex-col items-center justify-center">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="flex justify-center mb-8" variants={itemVariants}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodewhite%20new%20%281%29-fatsQLhx9jioMhnOiUV3FhIkBpWxE9.png"
                alt="THE NODE Logo"
                width={300}
                height={100}
                className="h-auto"
              />
            </motion.div>
            <motion.p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12" variants={itemVariants}>
              A sanctuary for holistic wellness, mindful practices, and transformative experiences.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="rounded-full hover-lift">
                <Link href="/venue">
                  Book Our Space
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.div key={feature.href} className="relative group" variants={itemVariants}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <Link
                    href={feature.href}
                    className="relative flex items-center space-x-4 p-4 sm:p-6 bg-card rounded-lg transition duration-300 hover:shadow-lg glass-effect hover-lift"
                  >
                    <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <h3 className="h4 mb-1">{feature.label}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* About Us Section */}
            <motion.div
              className="mt-20 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="h2 text-primary mb-8">About THE NODE</h2>

              <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src="https://storage.googleapis.com/msgsndr/zKYe0Y9a7aXGs5ZuM8Nd/media/678b6ea8671b4db8faee2c59.jpeg"
                    alt="THE NODE venue"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-left space-y-4">
                  <p>
                    THE NODE is a multi-functional venue designed to bring people together at the intersection of
                    creativity, connection, and personal growth. Our space serves as a hub for transformative
                    experiences, community gatherings, and wellness events.
                  </p>
                  <p>
                    Founded in 2020, we've created an environment where individuals can explore new ideas, develop
                    meaningful relationships, and nurture their wellbeing. Our programming includes movement classes,
                    sound healing, art workshops, community discussions, and much more.
                  </p>
                </div>
              </div>

              <div className="text-left mb-12">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="mb-4">
                  We believe in the power of authentic connection and transformative experiences to create positive
                  change in individuals and communities. Our mission is to provide a welcoming, inclusive space where
                  people can:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Connect with themselves and others in meaningful ways</li>
                  <li>Explore creative expression and personal growth</li>
                  <li>Access tools and practices for holistic wellbeing</li>
                  <li>Build community around shared values and interests</li>
                  <li>Collaborate on projects that benefit the wider community</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Coffee className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">Community</h4>
                    <p className="text-sm text-muted-foreground">
                      A welcoming space for authentic connection and belonging
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">Creativity</h4>
                    <p className="text-sm text-muted-foreground">
                      Inspiring environments for artistic expression and innovation
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">Connection</h4>
                    <p className="text-sm text-muted-foreground">
                      Meaningful interactions that nurture growth and understanding
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12">
                <Button asChild size="lg" className="hover-lift">
                  <Link href="/venue">
                    Book Our Space
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </ScrollArea>
  )
}
