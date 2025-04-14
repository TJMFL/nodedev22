"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageSquare, Share2, UserPlus, Calendar, Users, Clock, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

const communityPosts = [
  {
    id: 1,
    author: {
      name: "Maya Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Community Member",
    },
    content:
      "Last night's sound healing session was absolutely transformative! Thank you to everyone who participated and created such a beautiful space for healing. Looking forward to the next one!",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
    images: ["/placeholder.svg?height=300&width=500"],
  },
  {
    id: 2,
    author: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Event Facilitator",
    },
    content:
      "Excited to announce that I'll be leading a new workshop series on mindful creativity starting next month! This 4-week journey will help you tap into your creative potential through mindfulness practices. Limited spots available - registration opens this Friday!",
    timestamp: "5 hours ago",
    likes: 42,
    comments: 12,
    images: [],
  },
  {
    id: 3,
    author: {
      name: "THE NODE",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodewhite%20new%20%281%29-fatsQLhx9jioMhnOiUV3FhIkBpWxE9.png",
      role: "Official",
    },
    content:
      "Community announcement: We're looking for volunteers for our upcoming Wellness Festival on July 15-16. If you're passionate about wellness and community building, please fill out the volunteer form on our website or message us directly!",
    timestamp: "1 day ago",
    likes: 56,
    comments: 8,
    images: ["/placeholder.svg?height=300&width=500"],
  },
  {
    id: 4,
    author: {
      name: "Sophia Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Community Member",
    },
    content:
      "Just wanted to express my gratitude for this amazing community. Since joining THE NODE six months ago, I've met incredible people, learned so much, and grown in ways I never expected. This space truly feels like home. ❤️",
    timestamp: "2 days ago",
    likes: 78,
    comments: 15,
    images: [],
  },
]

const upcomingMeetups = [
  {
    id: 1,
    title: "Conscious Entrepreneurs Network",
    date: "2023-06-15",
    time: "18:30 - 20:30",
    attendees: 18,
    location: "Conference Room",
  },
  {
    id: 2,
    title: "Book Club: 'The Power of Now'",
    date: "2023-06-17",
    time: "14:00 - 16:00",
    attendees: 12,
    location: "Reading Lounge",
  },
  {
    id: 3,
    title: "Plant-Based Cooking Circle",
    date: "2023-06-20",
    time: "17:30 - 19:30",
    attendees: 15,
    location: "Community Kitchen",
  },
]

export default function CommunityHub() {
  const [activeTab, setActiveTab] = useState("feed")
  const [postContent, setPostContent] = useState("")
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const { toast } = useToast()

  const handlePostSubmit = () => {
    if (!postContent.trim()) {
      toast({
        title: "Empty post",
        description: "Please write something before posting.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Post submitted",
      description: "Your post has been shared with the community.",
    })
    setPostContent("")
  }

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const handleJoinMeetup = (meetupTitle: string) => {
    toast({
      title: "RSVP Confirmed",
      description: `You've joined the "${meetupTitle}" meetup.`,
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
            <CardTitle className="h2 text-primary">Community Hub</CardTitle>
            <CardDescription>
              Connect with like-minded individuals and stay updated on community activities
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Tabs defaultValue="feed" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="meetups">Meetups</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="feed" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your profile" />
                          <AvatarFallback>YP</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Textarea
                            placeholder="Share something with the community..."
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                            className="mb-2"
                          />
                          <div className="flex justify-end">
                            <Button onClick={handlePostSubmit}>Post</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {communityPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold">{post.author.name}</span>
                                {post.author.role === "Official" && (
                                  <Badge variant="default" className="text-xs">
                                    Official
                                  </Badge>
                                )}
                                {post.author.role === "Event Facilitator" && (
                                  <Badge variant="outline" className="text-xs">
                                    Facilitator
                                  </Badge>
                                )}
                              </div>
                              <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                              <p className="mt-2 mb-3">{post.content}</p>

                              {post.images.length > 0 && (
                                <div className="mb-4">
                                  {post.images.map((image, index) => (
                                    <img
                                      key={index}
                                      src={image || "/placeholder.svg"}
                                      alt="Post attachment"
                                      className="rounded-md w-full h-auto max-h-80 object-cover"
                                    />
                                  ))}
                                </div>
                              )}

                              <div className="flex items-center gap-4 mt-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="flex items-center gap-1"
                                  onClick={() => handleLike(post.id)}
                                >
                                  <Heart
                                    className={`h-4 w-4 ${likedPosts.includes(post.id) ? "fill-primary text-primary" : ""}`}
                                  />
                                  <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>{post.comments}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                  <Share2 className="h-4 w-4" />
                                  <span>Share</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="meetups" className="space-y-6">
                  <div className="grid gap-4">
                    {upcomingMeetups.map((meetup) => (
                      <Card key={meetup.id} className="hover-lift">
                        <CardContent className="pt-6">
                          <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-semibold mb-2">{meetup.title}</h3>
                              <div className="flex items-center text-sm mb-1">
                                <Calendar className="mr-2 h-4 w-4 text-primary" />
                                <span>
                                  {new Date(meetup.date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center text-sm mb-1">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                <span>{meetup.time}</span>
                              </div>
                              <div className="flex items-center text-sm mb-1">
                                <MapPin className="mr-2 h-4 w-4 text-primary" />
                                <span>{meetup.location}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Users className="mr-2 h-4 w-4 text-primary" />
                                <span>{meetup.attendees} attending</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Button onClick={() => handleJoinMeetup(meetup.title)}>
                                <UserPlus className="mr-2 h-4 w-4" />
                                Join
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline">View All Meetups</Button>
                  </div>
                </TabsContent>

                <TabsContent value="members" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-center mb-4">Connect with other members of THE NODE community</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="flex flex-col items-center text-center">
                            <Avatar className="h-16 w-16 mb-2">
                              <AvatarImage src={`/placeholder.svg?height=64&width=64&text=${i + 1}`} />
                              <AvatarFallback>M{i + 1}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-sm">Member {i + 1}</span>
                            <span className="text-xs text-muted-foreground">Community Member</span>
                            <Button variant="ghost" size="sm" className="mt-1">
                              <UserPlus className="h-3 w-3 mr-1" />
                              Connect
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button variant="outline">View All Members</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}