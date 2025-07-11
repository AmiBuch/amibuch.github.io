import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

const getTechColor = (tech: string) => {
  const colors: { [key: string]: string } = {
    // Languages
    Python: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Java: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    "C++": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Dart: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",

    // AI/ML
    TensorFlow: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    PyTorch: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "Scikit-learn": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    OpenCV: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Hugging Face": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    LangChain: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    BERT: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    CNN: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    RAG: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    ML: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    OCR: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    NLP: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
    NLTK: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",

    // Web Frameworks
    React: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    "Next.js": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    Flask: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Django: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    FastAPI: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",

    // Tools & Services
    FAISS: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Streamlit: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Gradio: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Firebase: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    MongoDB: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Flutter: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Arduino BLE": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    REST: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    Microservices: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Blockchain: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",

    // APIs
    "Gmail API": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "Google Gemini API": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "OAuth2.0": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    "REST APIs": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",

    // Other
    "HTML/CSS/JS": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    GeoPy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    PrivateGPT: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  }

  return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A showcase of my technical projects demonstrating proficiency in AI/ML, full-stack development, and modern web
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="h-full flex flex-col bg-background hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border-0 rounded-xl"
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {project.type && <p className="text-sm text-muted-foreground mt-1">{project.type}</p>}
                </div>
                <div className="flex gap-2 ml-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} className={getTechColor(tech)}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
