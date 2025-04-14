"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { LoadingSkeleton } from "@/components/LoadingSkeleton"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: "mindfulness-meditation",
    title: "Mindfulness Meditation",
    description: "Guided sessions to develop present-moment awareness and reduce stress.",
    details: [
      "Learn foundational meditation techniques",
      "Develop skills for managing stress and anxiety",
      "Cultivate a regular mindfulness practice",
      "Connect with a supportive community",
    ],
    upcoming: [
      { date: "2023-06-15", time: "18:00", facilitator: "Sarah Johnson" },
      { date: "2023-06-22", time: "18:00", facilitator: "Sarah Johnson" },
    ],
    category: "wellness",
  },
  {
    id: "sound-healing",
    title: "Sound Healing Journey",
    description: "Immersive sound experiences using singing bowls, gongs, and other instruments.",
    details: [
      "Experience deep relaxation through sound vibrations",
      "Release tension and blocked energy",
      "Enhance mental clarity and emotional balance",
      "No prior experience necessary",
    ],
    upcoming: [{ date: "2023-06-18", time: "19:30", facilitator: "Michael Chen" }],
    category: "wellness",
  },
  {
    id: "creative-writing",
    title: "Creative Writing Workshop",
    description: "Unlock your creative potential through guided writing exercises.",
    details: [
      "Explore various writing techniques and styles",
      "Overcome creative blocks",
      "Develop your unique voice",
      "Share your work in a supportive environment",
    ],
    upcoming: [{ date: "2023-06-20", time: "17:00", facilitator: "Elena Rodriguez" }],
    category: "creativity",
  },
  {
    id: "ecstatic-dance",
    title: "Ecstatic Dance",
    description: "Free-form movement meditation to release, connect, and express.",
    details: [
      "Move freely to curated music journeys",
      "Connect with your body and emotions",
      "Build community through shared experience",
      "No dance experience required",
    ],
    upcoming: [
      { date: "2023-06-17", time: "20:00", facilitator: "David Thompson" },
      { date: "2023-06-24", time: "20:00", facilitator: "David Thompson" },
    ],
    category: "movement",
  },
  {
    id: "breathwork",
    title: "Transformational Breathwork",
    description: "Harness the power of conscious breathing for healing and transformation.",
    details: [
      "Learn various breathwork techniques",
      "Release emotional blockages",
      "Increase energy and vitality",
      "Deepen self-awareness",
    ],
    upcoming: [{ date: "2023-06-19", time: "18:30", facilitator: "Amara Patel" }],
    category: "wellness",
  },
  {
    id: "art-therapy",
    title: "Expressive Art Therapy",
    description: "Use art as a tool for self-discovery and emotional processing.",
    details: [
      "Explore various artistic mediums",
      "Process emotions through creative expression",
      "Gain insights through guided reflection",
      "No artistic experience necessary",
    ],
    upcoming: [{ date: "2023-06-21", time: "17:30", facilitator: "Olivia Martinez" }],
    category: "creativity",
  },
  {
    id: "community-circle",
    title: "Community Connection Circle",
    description: "Facilitated discussions to foster meaningful connections and shared wisdom.",
    details: [
      "Practice authentic communication",
      "Share and receive support",
      "Build lasting connections",
      "Develop active listening skills",
    ],
    upcoming: [{ date: "2023-06-16", time: "19:00", facilitator: "James Wilson" }],
    category: "community",
  },
]

export default function ExperiencesList() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleRegisterClick = (title: string, date: string) => {
    toast({
      title: "Registration initiated",
      description: `You're registering for ${title} on ${new Date(date).toLocaleDateString()}.`,
    })
  }

  const filteredExperiences = filter ? experiences.filter((exp) => exp.category === filter) : experiences

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transformative Experiences</CardTitle>
          <CardDescription>Loading experiences...</CardDescription>
        </CardHeader>
        <CardContent>
          <LoadingSkeleton />
        </CardContent>
      </Card>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="h2 text-primary">Transformative Experiences</CardTitle>
          <CardDescription>
            Discover workshops, classes, and events to nurture your mind, body, and spirit
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge
              variant={filter === null ? "default" : "outline"}
              className="cursor-pointer hover-lift"
              onClick={() => setFilter(null)}
            >
              All
            </Badge>
            <Badge
              variant={filter === "wellness" ? "default" : "outline"}
              className="cursor-pointer hover-lift"
              onClick={() => setFilter("wellness")}
            >
              Wellness
            </Badge>
            <Badge
              variant={filter === "creativity" ? "default" : "outline"}
              className="cursor-pointer hover-lift"
              onClick={() => setFilter("creativity")}
            >
              Creativity
            </Badge>
            <Badge
              variant={filter === "movement" ? "default" : "outline"}
              className="cursor-pointer hover-lift"
              onClick={() => setFilter("movement")}
            >
              Movement
            </Badge>
            <Badge
              variant={filter === "community" ? "default" : "outline"}
              className="cursor-pointer hover-lift"
              onClick={() => setFilter("community")}
            >
              Community
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {filteredExperiences.map((experience) => (
              <AccordionItem key={experience.id} value={experience.id}>
                <AccordionTrigger onClick={() => setExpandedExperience(experience.id)} className="hover-lift">
                  {experience.title}
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="mb-4">{experience.description}</p>
                    <h4 className="font-semibold mb-2">What to expect:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      {experience.details.map((detail, index) => (
                        <li key={index} className="mb-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-2">Upcoming sessions:</h4>
                    <div className="space-y-3 mb-4">
                      {experience.upcoming.map((session, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background/50 rounded-md"
                        >
                          <div className="flex items-center mb-2 sm:mb-0">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span>
                              {new Date(session.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "short",
                                day: "numeric",
                              })}{" "}
                              at {session.time}
                            </span>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end">
                            <span className="text-sm text-muted-foreground mr-4">
                              Facilitator: {session.facilitator}
                            </span>
                            <Button
                              size="sm"
                              onClick={() => handleRegisterClick(experience.title, session.date)}
                              className="hover-lift"
                            >
                              Register
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  )
}
