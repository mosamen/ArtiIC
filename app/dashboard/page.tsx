"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Bell,
  BookOpen,
  Calendar,
  Clock,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Star,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const router = useRouter()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex h-16 items-center border-b px-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileNavOpen(false)}>
                    <BookOpen className="h-6 w-6" />
                    <span className="text-xl font-bold">EduPlatform</span>
                  </Link>
                </div>
                <nav className="grid gap-2 p-4">
                  {sidebarItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold hidden md:inline-block">EduPlatform</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt="Avatar"
                  />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 lg:block">
          <div className="flex h-full flex-col gap-2 p-4">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="mb-6 flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John! Continue your learning journey.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Tabs defaultValue="in-progress">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  </TabsList>
                  <Link href="/courses">
                    <Button variant="outline" size="sm">
                      View All Courses
                    </Button>
                  </Link>
                </div>
                <TabsContent value="in-progress" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {inProgressCourses.map((course) => (
                      <Card key={course.id} className="flex flex-col overflow-hidden">
                        <div className="relative">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={400}
                            height={225}
                            className="aspect-video object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-md backdrop-blur-sm">
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                              <span>{course.rating}</span>
                            </div>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Link href={`/courses/${course.id}`} className="w-full">
                            <Button className="w-full">Continue</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="completed" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {completedCourses.map((course) => (
                      <Card key={course.id} className="flex flex-col overflow-hidden">
                        <div className="relative">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={400}
                            height={225}
                            className="aspect-video object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-md backdrop-blur-sm">
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                              <span>{course.rating}</span>
                            </div>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                            <span>Completed on</span>
                            <span>{course.completedDate}</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Link href={`/courses/${course.id}`} className="w-full">
                            <Button variant="outline" className="w-full">
                              Review
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="recommended" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {recommendedCourses.map((course) => (
                      <Card key={course.id} className="flex flex-col overflow-hidden">
                        <div className="relative">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={400}
                            height={225}
                            className="aspect-video object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-md backdrop-blur-sm">
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                              <span>{course.rating}</span>
                            </div>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <CardDescription>{course.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{course.students} students</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Link href={`/courses/${course.id}`} className="w-full">
                            <Button className="w-full">Enroll Now</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                          <p className="text-sm">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Image
                          src={message.avatar || "/placeholder.svg"}
                          alt={message.sender}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{message.sender}</h4>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Messages
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const sidebarItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "My Courses", icon: BookOpen, href: "/dashboard/courses" },
  { label: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
  { label: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
]

const stats = [
  {
    title: "Courses in Progress",
    value: "3",
    description: "2 courses due this week",
    icon: BookOpen,
  },
  {
    title: "Completed Courses",
    value: "12",
    description: "+2 from last month",
    icon: Star,
  },
  {
    title: "Total Hours",
    value: "87",
    description: "Learning time this month",
    icon: Clock,
  },
  {
    title: "Certifications",
    value: "4",
    description: "Professional certifications earned",
    icon: User,
  },
]

const inProgressCourses = [
  {
    id: 1,
    title: "CompTIA A+ Certification",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.8",
    progress: 75,
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.9",
    progress: 45,
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.7",
    progress: 30,
  },
]

const completedCourses = [
  {
    id: 4,
    title: "Introduction to Python",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.8",
    completedDate: "Mar 15, 2023",
  },
  {
    id: 5,
    title: "Data Analysis Basics",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.6",
    completedDate: "Jan 22, 2023",
  },
]

const recommendedCourses = [
  {
    id: 6,
    title: "Cloud Computing Essentials",
    description: "Learn the fundamentals of cloud platforms.",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.9",
    duration: "30 hours",
    students: "8,765",
  },
  {
    id: 7,
    title: "Machine Learning Basics",
    description: "Introduction to machine learning algorithms.",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.8",
    duration: "45 hours",
    students: "6,543",
  },
]

const events = [
  {
    title: "Live Q&A Session",
    date: "Tomorrow, 3:00 PM",
    description: "Join our experts for a live Q&A on CompTIA certification.",
  },
  {
    title: "Workshop: Portfolio Building",
    date: "Apr 25, 2023, 2:00 PM",
    description: "Learn how to build an impressive portfolio for job applications.",
  },
]

const messages = [
  {
    sender: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2 hours ago",
    content: "Hi! Just wanted to check if you're joining the study group tonight?",
  },
  {
    sender: "David Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "Yesterday",
    content: "Thanks for sharing your notes from the last lecture. They were really helpful!",
  },
]
