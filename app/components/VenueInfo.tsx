"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Clock, Users, Calendar, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

const spaceDetails = [
  {
    id: "main-floor",
    name: "Main Floor",
    description:
      "Our spacious main floor features a reception area, plenty of seating, an entertaining area, and a full-service bar.",
    capacity: "Up to 150 people",
    amenities: [
      "Full-service bar",
      "Comfortable lounge seating",
      "Reception area",
      "Sound system",
      "Adjustable lighting",
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    pricing: "From $1,500/event",
  },
  {
    id: "private-dining",
    name: "Upstairs Private Dining",
    description:
      "An elegant private dining space with stunning skyline views, perfect for intimate gatherings and special occasions.",
    capacity: "Up to 50 people",
    amenities: [
      "Panoramic skyline views",
      "Private dining tables",
      "Dedicated service staff",
      "Customizable lighting",
      "Private bar option",
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    pricing: "From $800/event",
  },
  {
    id: "garage",
    name: "The Garage",
    description:
      "A converted garage with a nightclub atmosphere featuring a dance floor, DJ booth, and double garage doors that open to the outside.",
    capacity: "Up to 100 people",
    amenities: [
      "Professional DJ booth",
      "Dance floor",
      "Specialized lighting",
      "Indoor/outdoor flow with garage doors",
      "Dedicated bar",
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    pricing: "From $1,200/event",
  },
]

export default function VenueInfo() {
  const [activeTab, setActiveTab] = useState("booking")
  const { toast } = useToast()

  const handleBookingRequest = () => {
    toast({
      title: "Booking request sent",
      description: "We'll contact you shortly to discuss your event needs.",
    })
  }

  return (
    <ScrollArea className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 sm:p-6 lg:p-8 dark-gradient-bg min-h-screen"
      >
        <Card className="max-w-4xl mx-auto glass-effect">
          <CardHeader>
            <div className="flex justify-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodewhite%20new%20%281%29-fatsQLhx9jioMhnOiUV3FhIkBpWxE9.png"
                alt="THE NODE Logo"
                width={200}
                height={80}
                className="h-auto"
              />
            </div>
            <CardTitle className="h2 text-primary text-center">Book Our Space</CardTitle>
            <CardDescription className="text-center">
              Host your next event, party, or gathering in our versatile multi-level venue
            </CardDescription>

            <Tabs defaultValue="booking" value={activeTab} onValueChange={setActiveTab} className="mt-6">
              <TabsList className="grid grid-cols-3 gap-2">
                <TabsTrigger value="booking">Booking Info</TabsTrigger>
                <TabsTrigger value="spaces">Our Spaces</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="booking" className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src="https://storage.googleapis.com/msgsndr/zKYe0Y9a7aXGs5ZuM8Nd/media/6790a7d15d20c84862756c8a.jpeg"
                    alt="THE NODE venue booking"
                    className="w-full h-full object-cover"
                  />
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Private Booking Options</h3>
                    <p className="mb-4">
                      THE NODE offers flexible rental options for individuals, organizations, and businesses looking for
                      a unique venue with multiple versatile spaces.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-medium">Perfect for:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Corporate Events & Meetings
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Private Parties
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Weddings & Receptions
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Product Launches
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Networking Events
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Birthday & Anniversary Celebrations
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-medium">Booking packages:</h4>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Card>
                          <CardContent className="pt-6">
                            <h5 className="font-semibold text-primary">Single Space Rental</h5>
                            <ul className="mt-2 space-y-2 text-sm">
                              <li className="flex items-start">
                                <Calendar className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <span>4-hour minimum booking</span>
                              </li>
                              <li className="flex items-start">
                                <Users className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <span>Space capacity varies by room</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <span>Basic amenities included</span>
                              </li>
                            </ul>
                            <p className="mt-3 font-medium">Starting at $800</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <h5 className="font-semibold text-primary">Full Venue Buyout</h5>
                            <ul className="mt-2 space-y-2 text-sm">
                              <li className="flex items-start">
                                <Calendar className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <span>6-hour minimum booking</span>
                              </li>
                              <li className="flex items-start">
                                <Users className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <span>Up to 200 guests total</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <span>All amenities included</span>
                              </li>
                            </ul>
                            <p className="mt-3 font-medium">Starting at $3,000</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-medium">All rentals include:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Use of the specified space(s) for your event
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Basic sound system and lighting
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Tables and chairs as needed
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          Event coordinator to assist with planning
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Add-on Services:</h4>
                      <p>
                        We offer additional services including catering, bartending, DJ services, photography, and more.
                        Please contact us for a personalized quote.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-4">
                    <Button onClick={handleBookingRequest} size="lg" className="hover-lift">
                      Request Booking Information
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="spaces" className="space-y-6">
                <div className="grid gap-6">
                  {spaceDetails.map((space) => (
                    <Card key={space.id} className="hover-lift">
                      <div className="sm:flex">
                        <div className="sm:w-1/3 h-48 sm:h-auto bg-muted">
                          <img
                            src={space.images[0] || "/placeholder.svg"}
                            alt={space.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="sm:w-2/3 p-4 sm:p-6">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
                            <span className="text-primary font-medium">{space.pricing}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{space.description}</p>
                          <div className="mb-4">
                            <div className="flex items-center text-sm mb-2">
                              <Users className="mr-2 h-4 w-4 text-primary" />
                              <span>Capacity: {space.capacity}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Amenities:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                              {space.amenities.map((amenity, index) => (
                                <li key={index} className="text-sm flex items-center">
                                  <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                                  {amenity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4">
                            <Button onClick={handleBookingRequest} className="w-full sm:w-auto">
                              Book This Space
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Address</p>
                              <p className="text-muted-foreground">2331 N Elston</p>
                              <p className="text-muted-foreground">Chicago, IL 60654</p>
                            </div>
                          </li>
                          <li className="flex items-center">
                            <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Phone</p>
                              <p className="text-muted-foreground">(480) 560-4686</p>
                            </div>
                          </li>
                          <li className="flex items-center">
                            <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-muted-foreground">bookings@thenodechicago.com</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Hours</p>
                              <p className="text-muted-foreground">Monday - Friday: 9am - 9pm</p>
                              <p className="text-muted-foreground">Saturday: 10am - 6pm</p>
                              <p className="text-muted-foreground">Sunday: 11am - 5pm</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.546280775901!2d-87.67842812350207!3d41.92411146253156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3007b277b13%3A0xb12eafd35a534ca8!2sThe%20Node%20Chicago!5e0!3m2!1sen!2sus!4v1744615623765!5m2!1sen!2sus"
                          width="100%"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleBookingRequest} size="lg">
                      Request Booking
                    </Button>
                    <Button variant="outline">Get Directions</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
