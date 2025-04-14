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

const classes = [
  {
    id: 1,
    title: "Morning Yoga Flow",
    description: "Start your day with an energizing yoga flow to awaken your body and mind. Suitable for all levels.",
    date: "Every Monday, Wednesday, Friday",
    time: "07:30 - 08:30",
    location: "Wellness Studio",
    category: "movement",
    capacity: 20,
    price: "$15",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Maya Johnson",
  },
  {
    id: 2,
    title: "Mindfulness Meditation",
    description: "A guided meditation session to cultivate present-moment awareness and reduce stress.",
    date: "Every Tuesday, Thursday",
    time: "12:00 - 12:45",
    location: "Meditation Room",
    category: "meditation",
    capacity: 15,
    price: "$12",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "David Chen",
  },
  {
    id: 3,
    title: "Sound Healing Journey",
    description:
      "Experience deep relaxation through sound vibrations from singing bowls, gongs, and other instruments.",
    date: "Every Sunday",
    time: "19:30 - 21:00",
    location: "Main Hall",
    category: "healing",
    capacity: 30,
    price: "$25",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Sophia Rodriguez",
  },
  {
    id: 4,
    title: "Breathwork for Vitality",
    description: "Learn powerful breathing techniques to reduce stress, increase energy, and enhance mental clarity.",
    date: "Every Saturday",
    time: "10:00 - 11:30",
    location: "Wellness Studio",
    category: "breathing",
    capacity: 20,
    price: "$20",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "James Wilson",
  },
  {
    id: 5,
    title: "Gentle Restorative Yoga",
    description: "A slow-paced, therapeutic class focused on relaxation and gentle stretching.",
    date: "Every Monday, Friday",
    time: "18:00 - 19:15",
    location: "Meditation Room",
    category: "movement",
    capacity: 15,
    price: "$18",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Elena Martinez",
  },
  {
    id: 6,
    title: "Mind-Body Connection Workshop",
    description:
      "Explore the relationship between thoughts, emotions, and physical well-being through mindful practices.",
    date: "Last Saturday of each month",
    time: "14:00 - 16:30",
    location: "Workshop Space",
    category: "workshop",
    capacity: 25,
    price: "$35",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Michael Chen",
  },
]

export default function WellnessClasses() {
  const [activeTab, setActiveTab] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const { toast } = useToast()

  const handleRegister = (classId: number, classTitle: string) => {
    toast({
      title: "Registration initiated",
      description: `You're registering for ${classTitle}.`,
    })
  }

  const toggleFavorite = (classId: number) => {
    setFavorites((prev) => (prev.includes(classId) ? prev.filter((id) => id !== classId) : [...prev, classId]))

    const isFavoriting = !favorites.includes(classId)
    toast({
      title: isFavoriting ? "Added to favorites" : "Removed from favorites",
      description: isFavoriting
        ? "This class has been added to your favorites."
        : "This class has been removed from your favorites.",
      duration: 3000,
    })
  }

  const filteredClasses = activeTab === "all" ? classes : classes.filter((cls) => cls.category === activeTab)

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
            <CardTitle className="h2 text-primary">Wellness Classes</CardTitle>
            <CardDescription>Regular wellness classes to nurture your mind, body, and spirit</CardDescription>

            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mt-4">
              <TabsList className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="movement">Movement</TabsTrigger>
                <TabsTrigger value="meditation">Meditation</TabsTrigger>
                <TabsTrigger value="breathing">Breathwork</TabsTrigger>
                <TabsTrigger value="healing">Healing</TabsTrigger>
                <TabsTrigger value="workshop">Workshops</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6">
              {filteredClasses.map((cls) => (
                <motion.div
                  key={cls.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover-lift">
                    <div className="sm:flex">
                      <div className="sm:w-1/3 h-48 sm:h-auto bg-muted relative">
                        <img
                          src={cls.image || "/placeholder.svg"}
                          alt={cls.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-2 right-2">{cls.category}</Badge>
                      </div>
                      <div className="sm:w-2/3 p-4 sm:p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFavorite(cls.id)}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Heart
                              className={`h-5 w-5 ${favorites.includes(cls.id) ? "fill-primary text-primary" : ""}`}
                            />
                          </Button>
                        </div>
                        <p className="text-muted-foreground mb-4">{cls.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>{cls.date}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>{cls.time}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>{cls.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>Capacity: {cls.capacity}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold mr-2">{cls.price}</span>
                            <span className="text-sm text-muted-foreground">Instructor: {cls.instructor}</span>
                          </div>
                          <Button onClick={() => handleRegister(cls.id, cls.title)}>Register</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">View Class Schedule</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
