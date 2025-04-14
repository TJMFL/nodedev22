"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Heart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const events = [
  {
    id: 1,
    title: "Full Moon Sound Bath",
    description:
      "Experience deep relaxation and healing through sound vibrations during this special full moon ceremony.",
    date: "2023-06-14",
    time: "20:00 - 21:30",
    location: "Main Hall",
    category: "wellness",
    capacity: 30,
    price: "$25",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Community Potluck & Connection",
    description: "Bring a dish to share and connect with like-minded individuals in our monthly community gathering.",
    date: "2023-06-18",
    time: "18:00 - 21:00",
    location: "Garden Space",
    category: "community",
    capacity: 50,
    price: "Free",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Ecstatic Dance Journey",
    description: "Free your body and mind through guided movement meditation with live DJ and immersive visuals.",
    date: "2023-06-21",
    time: "19:30 - 22:00",
    location: "Main Hall",
    category: "movement",
    capacity: 40,
    price: "$20",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Art & Wine Social",
    description:
      "Unleash your creativity with guided painting while enjoying organic wines and meaningful conversation.",
    date: "2023-06-23",
    time: "19:00 - 21:30",
    location: "Studio Space",
    category: "creativity",
    capacity: 25,
    price: "$35",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Breathwork & Meditation Workshop",
    description: "Learn powerful breathing techniques to reduce stress, increase energy, and enhance mental clarity.",
    date: "2023-06-25",
    time: "10:00 - 12:00",
    location: "Meditation Room",
    category: "wellness",
    capacity: 20,
    price: "$30",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Conscious Entrepreneurs Meetup",
    description: "Network with purpose-driven entrepreneurs and learn strategies for sustainable business growth.",
    date: "2023-06-27",
    time: "18:30 - 20:30",
    location: "Conference Room",
    category: "community",
    capacity: 30,
    price: "$15",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function EventsList() {
  const [activeTab, setActiveTab] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const { toast } = useToast()

  const handleRegister = (eventId: number, eventTitle: string) => {
    toast({
      title: "Registration initiated",
      description: `You're registering for ${eventTitle}.`,
    })
  }

  const toggleFavorite = (eventId: number) => {
    setFavorites((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))

    const isFavoriting = !favorites.includes(eventId)
    toast({
      title: isFavoriting ? "Added to favorites" : "Removed from favorites",
      description: isFavoriting
        ? "This event has been added to your favorites."
        : "This event has been removed from your favorites.",
      duration: 3000,
    })
  }

  const filteredEvents = activeTab === "all" ? events : events.filter((event) => event.category === activeTab)

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
            <CardTitle className="h2 text-primary">Upcoming Events</CardTitle>
            <CardDescription>Discover transformative events and experiences at THE NODE</CardDescription>

            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mt-4">
              <TabsList className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
                <TabsTrigger value="creativity">Creativity</TabsTrigger>
                <TabsTrigger value="movement">Movement</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover-lift">
                    <div className="sm:flex">
                      <div className="sm:w-1/3 h-48 sm:h-auto bg-muted relative">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-2 right-2">{event.category}</Badge>
                      </div>
                      <div className="sm:w-2/3 p-4 sm:p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFavorite(event.id)}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Heart
                              className={`h-5 w-5 ${favorites.includes(event.id) ? "fill-primary text-primary" : ""}`}
                            />
                          </Button>
                        </div>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>
                              {new Date(event.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>Capacity: {event.capacity}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{event.price}</span>
                          <Button onClick={() => handleRegister(event.id, event.title)}>Register</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">Load More Events</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
