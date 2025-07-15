import { Metadata } from "next"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrism from "rehype-prism-plus"

interface BlogPostProps {
  metadata: Metadata
  content?: string
  mdxSource?: MDXRemoteSerializeResult
}

export function BlogPost({ metadata, content, mdxSource }: BlogPostProps) {
  const title = typeof metadata.title === 'string' ? metadata.title : String(metadata.title || '')

  // If mdxSource is provided, use it directly
  if (mdxSource) {
    return (
      <article className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote 
            {...mdxSource}
            components={{
              h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
              h2: (props) => <h2 className="text-3xl font-bold mb-4" {...props} />,
              h3: (props) => <h3 className="text-2xl font-bold mb-3" {...props} />,
              p: (props) => <p className="mb-4" {...props} />,
              ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
              ol: (props) => <ol className="list-decimal pl-6 mb-4" {...props} />,
              li: (props) => <li className="mb-2" {...props} />,
              blockquote: (props) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props} />
              ),
              code: (props) => (
                <code className="bg-gray-100 dark:bg-gray-800 rounded px-1" {...props} />
              ),
              pre: (props) => (
                <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto" {...props} />
              ),
            }}
          />
        </div>
      </article>
    )
  }

  // If content is provided, render it as plain text for now
  // In a production app, you'd want to serialize this on the server side
  if (content) {
    return (
      <article className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
        </div>
      </article>
    )
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>No content available.</p>
      </div>
    </article>
  )
} 