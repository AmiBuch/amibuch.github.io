import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/data/blog"

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on technology, music, ethics, and my journey in computer science. From AI frameworks to piano
          performances, exploring the intersection of creativity and code.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Featured Post</h2>
          <Link href={`/blog/${featuredPost.slug}`}>
            <article className="group cursor-pointer border rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Badge className={featuredPost.category.color}>{featuredPost.category.name}</Badge>
                <span className="text-sm text-muted-foreground">Featured</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          </Link>
        </div>
      )}

      {/* Other Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid gap-6">
          {otherPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <article className="group cursor-pointer border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={post.category.color}>{post.category.name}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="mt-12 text-center p-8 border rounded-xl bg-muted/20">
        <h3 className="text-lg font-semibold mb-2">More Posts Coming Soon!</h3>
        <p className="text-muted-foreground">
          I regularly share insights about AI ethics, new frameworks, music performances, and project updates. Stay
          tuned for more content!
        </p>
      </div>
    </div>
  )
}
