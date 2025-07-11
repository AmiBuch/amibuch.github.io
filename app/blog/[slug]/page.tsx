import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <Badge className={post.category.color}>{post.category.name}</Badge>
        <h1 className="text-3xl font-bold mt-4 mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
          <span>By {post.author}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <article className="prose prose-gray dark:prose-invert max-w-none">
        <div className="p-8 border rounded-xl bg-muted/20 text-center">
          <h3 className="text-lg font-semibold mb-2">Coming Soon!</h3>
          <p className="text-muted-foreground">
            This blog post is currently being written. Check back soon for the full article, or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact me
            </Link>{" "}
            if you'd like to discuss this topic!
          </p>
        </div>
      </article>
    </div>
  )
}
