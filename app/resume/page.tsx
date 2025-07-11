"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)
    // Simulate download process
    setTimeout(() => {
      setIsLoading(false)
      // In a real implementation, this would trigger the actual download
      console.log("Resume download initiated")
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <p className="text-lg text-muted-foreground">
          View or download my complete resume with detailed information about my education, experience, and skills.
        </p>
      </div>

      <div className="space-y-8">
        {/* Download Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border rounded-xl bg-muted/20">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Resume Document
            </h2>
            <p className="text-muted-foreground mb-2">
              Latest version updated with current projects and research experience.
            </p>
            <p className="text-sm text-muted-foreground">PDF format • Last updated: December 2024</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleDownload} disabled={isLoading} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              {isLoading ? "Preparing..." : "Download PDF"}
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ExternalLink className="h-4 w-4" />
              View in New Tab
            </Button>
          </div>
        </div>

        {/* Resume Viewer */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
          <div className="border rounded-xl overflow-hidden bg-white dark:bg-muted/10">
            {/* PDF Viewer Embed */}
            <div className="w-full h-[800px] bg-white dark:bg-gray-900 flex items-center justify-center">
              <iframe
                src="/placeholder-resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full"
                title="Resume Preview"
                style={{ border: "none" }}
                onError={() => {
                  // Fallback if PDF doesn't load
                  console.log("PDF failed to load, showing fallback")
                }}
              />
              {/* Fallback content */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm">
                <div className="text-center p-8">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Resume Preview</h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    PDF viewer will display here once the resume file is uploaded. For now, please download the resume
                    using the button above.
                  </p>
                  <Button variant="outline" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-2" />
                    Download to View
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Having trouble viewing? Try downloading the PDF or opening in a new tab.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-2">3.8+</h3>
            <p className="text-muted-foreground">GPA</p>
          </div>
          <div className="text-center p-6 border rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-2">2</h3>
            <p className="text-muted-foreground">Research Positions</p>
          </div>
          <div className="text-center p-6 border rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-2">6+</h3>
            <p className="text-muted-foreground">Major Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
