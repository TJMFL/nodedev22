"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"

const practitioners = [
  {
    id: 1,
    name: "Maya Johnson",
    specialties: ["Yoga", "Meditation"],
    image: "/placeholder.svg?height=200&width=200",
    bio: "Maya is a certified yoga instructor with over 10 years of experience. She specializes in vinyasa flow and mindfulness meditation, helping students connect with their inner wisdom.",
    certifications: ["E-RYT 500", "Meditation Teacher Training"],
    classes: ["Morning Yoga Flow", "Mindfulness Meditation"],
  },
  {
    id: 2,
    name: "David Chen",
    specialties: ["Sound Healing", "Breathwork"],
    image: "/placeholder.svg?height=200&width=200",
    bio: "David is a sound healer and breathwork facilitator who uses sound vibrations and conscious breathing to help people release tension and find inner peace.",
    certifications: ["Certified Sound Healer", "Breathwork Facilitator"],
    classes: ["Sound Bath Journey", "Breathwork for Vitality"],
  },
  {
    id: 3,
    name: "Elena Martinez",
    specialties: ["Restorative Yoga", "Ayurveda"],
    image: "/placeholder.svg?height=200&width=200",
    bio: "Elena combines restorative yoga and Ayurvedic principles to create holistic healing experiences. Her gentle approach helps students release deep-seated tension and restore balance.",
    certifications: ["RYT 500", "Ayurvedic Health Counselor"],
    classes: ["Gentle Restorative Yoga", "Ayurvedic Self-Care Workshop"],
  },
  {
    id: 4,
    name: "James Wilson",
    specialties: ["Mindfulness", "Coaching"],
    image: "/placeholder.svg?height=200&width=200",
    bio: "James is a mindfulness coach with a background in psychology. He helps clients develop present-moment awareness and emotional resilience through evidence-based practices.",
    certifications: ["Certified Mindfulness Teacher", "Life Coach Certification"],
    classes: ["Mind-Body Connection Workshop", "Mindfulness for Everyday Life"],
  },
  {
    id: 5,
    name: "Sophia Rodriguez",
    specialties: ["Dance Therapy", "Somatics"],
    image: "/placeholder.svg?height=200&width=200",
    bio: "Sophia uses movement as medicine, combining dance therapy and somatic practices to help people release emotional blocks and reconnect with their bodies.",
    certifications: ["Registered Dance/Movement Therapist", "Somatic Experiencing Practitioner"],
    classes: ["Embodied Movement", "Therapeutic Dance Journey"],
  },
  {
    id: 6,
    name: "Michael Chen",
    specialties: ["Tai Chi", "Qigong"],
    image: "/placeholder.svg?height=200&width=200",
    bio: "Michael is a master of Tai Chi and Qigong with over 20 years of practice. He teaches these ancient arts as tools for cultivating vitality, balance, and inner peace.",
    certifications: ["Certified Tai Chi Instructor", "Medical Qigong Practitioner"],
    classes: ["Tai Chi for Balance", "Qigong Energy Cultivation"],
  },
]

export default function WellnessPractitioners() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const { toast } = useToast()

  const handleBookSession = (practitionerName: string) => {
    toast({
      title: "Booking request sent",
      description: `You're requesting a session with ${practitionerName}. We'll contact you shortly.`,
    })
  }

  // Filter practitioners based on active filter
  const filteredPractitioners = activeFilter
    ? practitioners.filter((p) => p.specialties.includes(activeFilter))
    : practitioners

  // Get unique specialties for filter buttons
  const specialties = Array.from(new Set(practitioners.flatMap((p) => p.specialties))).sort()

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
            <CardTitle className="h2 text-primary">Wellness Practitioners</CardTitle>
            <CardDescription>Meet our skilled wellness professionals at THE NODE</CardDescription>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge
                variant={activeFilter === null ? "default" : "outline"}
                className="cursor-pointer hover-lift"
                onClick={() => setActiveFilter(null)}
              >
                All
              </Badge>
              {specialties.map((specialty) => (
                <Badge
                  key={specialty}
                  variant={activeFilter === specialty ? "default" : "outline"}
                  className="cursor-pointer hover-lift"
                  onClick={() => setActiveFilter(specialty)}
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPractitioners.map((practitioner) => (
                <motion.div
                  key={practitioner.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col hover-lift">
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                          <AvatarImage src={practitioner.image} alt={practitioner.name} />
                          <AvatarFallback>{practitioner.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow text-center sm:text-left">
                          <h3 className="text-xl font-semibold mb-2">{practitioner.name}</h3>
                          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                            {practitioner.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm mb-4">{practitioner.bio}</p>
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Certifications:</h4>
                            <ul className="text-sm">
                              {practitioner.certifications.map((cert, index) => (
                                <li key={index} className="mb-1">
                                  {cert}
                                </li>
                              ))}
                            </ul>
                            <h4 className="font-medium text-sm mt-3">Classes:</h4>
                            <ul className="text-sm">
                              {practitioner.classes.map((className, index) => (
                                <li key={index} className="mb-1">
                                  {className}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-4 pt-0 mt-auto">
                      <Button onClick={() => handleBookSession(practitioner.name)} className="w-full">
                        Book a Session
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
