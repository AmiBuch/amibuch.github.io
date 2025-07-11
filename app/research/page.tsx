import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User } from "lucide-react"
import { research } from "@/data/research"

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Research Experience</h1>
        <p className="text-lg text-muted-foreground">
          My research contributions in machine learning, computer vision, and natural language processing.
        </p>
      </div>

      <div className="space-y-12">
        {research.map((item, index) => (
          <div key={index} className="border-l-4 border-primary pl-8 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>

            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {item.institution}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {item.duration}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {item.advisor}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Research Focus</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Contributions</h3>
              <ul className="space-y-2">
                {item.contributions.map((contribution, contribIndex) => (
                  <li key={contribIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Technologies & Methods</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {item.outcomes && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Outcomes</h3>
                <ul className="space-y-2">
                  {item.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
