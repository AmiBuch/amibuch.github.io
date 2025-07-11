"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const techCategories = [
  {
    title: "Languages & Tools",
    techs: ["Python", "Java", "JavaScript", "TypeScript", "C++", "Dart", "Bash", "MATLAB", "SQL"],
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    title: "AI & Machine Learning",
    techs: [
      "AWS Certified AI Practitioner",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Deep Learning",
      "CNN",
      "NLP",
      "OCR",
      "CUDA",
      "Vector Databases",
      "Semantic Search",
    ],
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    title: "Frameworks & Libraries",
    techs: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "React",
      "Flask",
      "Django",
      "Next.js",
      "LangChain",
      "Hugging Face Transformers",
      "FastAPI",
      "Streamlit",
      "Gradio",
    ],
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    title: "Cloud & DevOps",
    techs: ["AWS Certified Cloud Practitioner", "Docker", "Git", "GitLab CI/CD", "TMux", "Serverless Architecture"],
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    title: "Systems & Architecture",
    techs: [
      "RESTful APIs",
      "Microservices",
      "Event-Driven Design",
      "Domain-Driven Design",
      "Multithreading (Python)",
      "Database Ingestion",
      "Scalability Patterns",
    ],
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    title: "Databases",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Neo4j", "FAISS", "Database Replication & Sharding"],
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  },
  {
    title: "Development Tools & Methodologies",
    techs: [
      "Agile",
      "Scrum",
      "SAFe",
      "TDD/Integration Testing (JUnit)",
      "Android Studio",
      "Arduino IDE",
      "Flutter",
      "VS Code",
    ],
    color: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  },
]

export function TechStackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techCategories.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + techCategories.length) % techCategories.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % techCategories.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToPrevious}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border p-6 min-h-[200px]">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${techCategories[currentIndex].color.split(" ")[0]}`}></div>
            {techCategories[currentIndex].title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 animate-in fade-in duration-500">
          {techCategories[currentIndex].techs.map((tech, index) => (
            <Badge
              key={index}
              className={techCategories[currentIndex].color}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {techCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-2">
        <p className="text-xs text-muted-foreground">
          {currentIndex + 1} of {techCategories.length} • Auto-advancing every 4 seconds
        </p>
      </div>
    </div>
  )
}
