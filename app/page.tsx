import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Clock, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">EduPlatform</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="#courses" className="text-sm font-medium">
              Courses
            </Link>
            <Link href="#" className="text-sm font-medium">
              Certifications
            </Link>
            <Link href="#" className="text-sm font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn Skills for the Future
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access industry-leading certifications and courses to advance your career in technology and beyond.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Start Learning <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#courses">
                    <Button size="lg" variant="outline">
                      Explore Courses
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popular Courses</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most popular courses and start your learning journey today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {courses.map((course) => (
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
                  <CardHeader className="flex-1">
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
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
                  <CardFooter>
                    <Link href={`/courses/${course.id}`} className="w-full">
                      <Button className="w-full">View Course</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/courses">
                <Button variant="outline" size="lg" className="gap-1">
                  View All Courses <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide industry-leading education with practical skills that employers value.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">EduPlatform</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} EduPlatform. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const courses = [
  {
    id: 1,
    title: "CompTIA A+ Certification",
    description: "Master the fundamentals of IT support and troubleshooting.",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.8",
    duration: "40 hours",
    students: "12,345",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development from scratch.",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.9",
    duration: "60 hours",
    students: "9,876",
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    description: "Understand the core principles of cybersecurity.",
    image: "/placeholder.svg?height=225&width=400",
    rating: "4.7",
    duration: "35 hours",
    students: "7,654",
  },
]

const features = [
  {
    title: "Industry-Recognized Certifications",
    description: "Our certifications are recognized by top employers worldwide.",
    icon: Star,
  },
  {
    title: "Expert Instructors",
    description: "Learn from professionals with years of real-world experience.",
    icon: Users,
  },
  {
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to course materials.",
    icon: Clock,
  },
]
