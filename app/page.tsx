import { Button } from "@/components/ui/button"
import { Download, MapPin, GraduationCap, Mail, Phone, Award, Briefcase, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TechStackCarousel } from "@/components/tech-stack-carousel"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-shrink-0">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Ami Ashish Buch"
            width={200}
            height={200}
            className="rounded-full border-4 border-border"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Ami Ashish Buch</h1>
          <p className="text-xl text-muted-foreground mb-4">Computer Science Undergraduate</p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">University of Wisconsin-Madison</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">abuch2@wisc.edu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 (610) 957 2713</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">
              B.S. Computer Science, Data Science, Mathematics (minor)
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Award className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">Trinity Grade 8 Piano • AWS Certified</span>
          </div>
        </div>
      </div>

      {/* Career Objective */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Career Objective</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Aspiring software and solutions architect seeking opportunities to develop a broad technological foundation.
          Committed to mastering diverse platforms and methodologies to design scalable, technology-agnostic systems.
          Eager to contribute to innovative projects that solve complex business challenges across various industries.
        </p>
      </section>

      {/* Quick Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">What Drives Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <Code className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Always Learning</h3>
            <p className="text-sm text-muted-foreground">
              From hackathons to research labs, I love diving into new technologies and frameworks. Currently exploring
              RAG systems and accessibility tech!
            </p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <Briefcase className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Bridging Worlds</h3>
            <p className="text-sm text-muted-foreground">
              Connecting AI research with real-world applications, and finding harmony between code and classical piano
              compositions
            </p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <Award className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Beyond the Screen</h3>
            <p className="text-sm text-muted-foreground">
              When I'm not coding, you'll find me practicing piano scales, jamming with our college Indian band, or
              pondering AI ethics over coffee ☕
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-semibold">University of Wisconsin-Madison</h3>
              <span className="text-sm text-muted-foreground">Expected July 2026</span>
            </div>
            <p className="text-muted-foreground mb-2">
              Bachelor of Science Computer Science, Data Science, Mathematics (minor)
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Coursework:</strong> Data Analytics, Object Oriented Programming, Software Engineering Tools,
              Combinatorics, Microeconomics, Matrix Methods in Machine Learning, AI, Operating Systems (audit)
            </p>
          </div>

          <div className="border-l-4 border-muted pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-semibold">International Institute of Information Technology, Hyderabad</h3>
              <span className="text-sm text-muted-foreground">July 2023 - June 2024</span>
            </div>
            <p className="text-muted-foreground mb-2">
              Bachelor of Technology Computer Science and Engineering (Transferred Out)
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Coursework:</strong> Data Structures and Algorithms, Linear Algebra, Computer Systems and
              Organization, Analysis, Software Systems
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <section className="mb-12">
        <TechStackCarousel />
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="p-8 border rounded-xl bg-muted/20">
          <h3 className="text-xl font-semibold mb-4">Ready to Collaborate?</h3>
          <p className="text-muted-foreground mb-6">
            I'm actively seeking internship opportunities for Summer 2025. Let's discuss how I can contribute to your
            team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/resume">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
