"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

const resources = [
  {
    id: "meditation-basics",
    title: "Meditation Basics",
    description: "An introduction to meditation practice for beginners.",
    type: "guide",
    content: [
      "Find a quiet, comfortable space",
      "Sit in a comfortable position, keeping your spine straight",
      "Focus on your breath and the sensations of breathing",
      "When your mind wanders, gently bring your attention back to your breath",
      "Start with just 5 minutes daily and gradually increase",
    ],
    resources: [
      { title: "Guided Meditation Audio", url: "https://www.mindful.org/audio-resources-for-mindfulness-meditation/" },
      { title: "Meditation Posture Guide", url: "https://www.mindful.org/meditation-posture-4-ways-to-practice/" },
    ],
  },
  {
    id: "yoga-foundations",
    title: "Yoga Foundations",
    description: "Essential poses and principles for yoga beginners.",
    type: "guide",
    content: [
      "Start with proper warm-up to prepare your body",
      "Focus on your breath throughout the practice",
      "Learn basic poses like Mountain, Downward Dog, and Child's Pose",
      "Never push into pain; respect your body's limits",
      "Practice consistently rather than intensely",
    ],
    resources: [
      { title: "Basic Yoga Pose Library", url: "https://www.yogajournal.com/poses/poses-by-level/beginner-poses/" },
      { title: "Yoga for Beginners Video", url: "https://www.youtube.com/watch?v=v7AYKMP6rOE" },
    ],
  },
  {
    id: "breathwork-techniques",
    title: "Breathwork Techniques",
    description: "Simple breathing exercises for stress reduction and energy.",
    type: "practice",
    content: [
      "Box Breathing: Inhale for 4, hold for 4, exhale for 4, hold for 4",
      "Diaphragmatic Breathing: Breathe deeply into your belly, not your chest",
      "4-7-8 Breathing: Inhale for 4, hold for 7, exhale for 8",
      "Alternate Nostril Breathing: Balance your nervous system",
      "Lion's Breath: Release tension through powerful exhales",
    ],
    resources: [
      { title: "Breathwork for Anxiety", url: "https://www.healthline.com/health/breathwork-for-anxiety" },
      {
        title: "Audio Guide: 4-7-8 Breathing",
        url: "https://www.drweil.com/videos-features/audio-features/breathing-exercises-audio-instruction-by-dr-weil/",
      },
    ],
  },
  {
    id: "sound-healing",
    title: "Sound Healing",
    description: "How sound frequencies promote healing and relaxation.",
    type: "practice",
    content: [
      "Sound healing uses vibrations to promote relaxation and healing",
      "Common instruments include singing bowls, gongs, and tuning forks",
      "Different tones affect different energy centers in the body",
      "Benefits include reduced stress, improved sleep, and decreased pain",
      "Can be experienced individually or in group sound baths",
    ],
    resources: [
      { title: "Science of Sound Healing", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5871151/" },
      { title: "Sound Bath Meditation", url: "https://insighttimer.com/meditation-topics/sound-bath" },
    ],
  },
  {
    id: "mindful-nutrition",
    title: "Mindful Nutrition",
    description: "Principles for nourishing your body with awareness.",
    type: "guide",
    content: [
      "Eat with full attention and awareness",
      "Listen to your body's hunger and fullness cues",
      "Choose whole, unprocessed foods when possible",
      "Consider how different foods affect your energy and mood",
      "Practice gratitude for your food and its origins",
    ],
    resources: [
      { title: "Mindful Eating Guide", url: "https://www.healthline.com/nutrition/mindful-eating-guide" },
      { title: "Plant-Based Recipes", url: "https://www.forksoverknives.com/recipes/" },
    ],
  },
  {
    id: "nature-therapy",
    title: "Nature Therapy",
    description: "How connecting with nature enhances wellbeing.",
    type: "guide",
    content: [
      "Spend time outdoors regularly, even briefly",
      "Practice mindful awareness of natural surroundings",
      "Forest bathing: immerse yourself in natural environments",
      "Gardening as a therapeutic practice",
      "Incorporate natural elements into your living space",
    ],
    resources: [
      { title: "Research on Nature and Mental Health", url: "https://www.apa.org/monitor/2020/04/nurtured-nature" },
      { title: "Forest Bathing Guide", url: "https://time.com/5259602/japanese-forest-bathing/" },
    ],
  },
  {
    id: "sleep-hygiene",
    title: "Sleep Hygiene",
    description: "Practices for improving sleep quality.",
    type: "guide",
    content: [
      "Maintain a consistent sleep schedule",
      "Create a restful environment (dark, quiet, cool)",
      "Avoid screens 1-2 hours before bedtime",
      "Develop a calming bedtime routine",
      "Limit caffeine, alcohol, and large meals before bed",
    ],
    resources: [
      { title: "Sleep Foundation Guidelines", url: "https://www.sleepfoundation.org/sleep-hygiene" },
      { title: "Bedtime Meditation", url: "https://www.youtube.com/watch?v=acLUWBuAvms" },
    ],
  },
]

export default function WellnessResources() {
  const [expandedResource, setExpandedResource] = useState<string | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const filteredResources = filter ? resources.filter((resource) => resource.type === filter) : resources

  return (
    <ScrollArea className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 sm:p-6 lg:p-8 dark-gradient-bg min-h-screen"
      >
        <Card className="max-w-4xl mx-auto glass-effect">
          <CardHeader>
            <CardTitle className="h2 text-primary">Wellness Resources</CardTitle>
            <CardDescription>Explore our collection of wellness practices, guides, and resources</CardDescription>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge
                variant={filter === null ? "default" : "outline"}
                className="cursor-pointer hover-lift"
                onClick={() => setFilter(null)}
              >
                All
              </Badge>
              <Badge
                variant={filter === "guide" ? "default" : "outline"}
                className="cursor-pointer hover-lift"
                onClick={() => setFilter("guide")}
              >
                Guides
              </Badge>
              <Badge
                variant={filter === "practice" ? "default" : "outline"}
                className="cursor-pointer hover-lift"
                onClick={() => setFilter("practice")}
              >
                Practices
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {filteredResources.map((resource) => (
                <AccordionItem key={resource.id} value={resource.id}>
                  <AccordionTrigger onClick={() => setExpandedResource(resource.id)} className="hover-lift">
                    {resource.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="mb-4">{resource.description}</p>
                      <h4 className="font-semibold mb-2">Key Points:</h4>
                      <ul className="list-disc pl-5 mb-4">
                        {resource.content.map((point, index) => (
                          <li key={index} className="mb-1">
                            {point}
                          </li>
                        ))}
                      </ul>
                      <h4 className="font-semibold mb-2">Additional Resources:</h4>
                      <ul className="space-y-2">
                        {resource.resources.map((r, index) => (
                          <li key={index}>
                            <Button
                              variant="link"
                              asChild
                              className="p-0 h-auto text-primary hover:text-primary/80 hover-lift"
                            >
                              <Link href={r.url} target="_blank" rel="noopener noreferrer">
                                {r.title}
                                <ExternalLink className="ml-1 h-4 w-4 inline" />
                              </Link>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
