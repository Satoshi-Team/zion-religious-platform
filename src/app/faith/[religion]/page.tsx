import { notFound } from 'next/navigation'
import { ModuleCard } from '@/components/module-card'
import { religions } from '@/data/religions'
import type { Religion } from '@/types/content'

interface ReligionPageProps {
  params: {
    religion: string
  }
}

export async function generateStaticParams() {
  return religions.map((religion) => ({
    religion: religion.id,
  }))
}

export default function ReligionPage({ params }: ReligionPageProps) {
  const religion = religions.find((r) => r.id === params.religion)

  if (!religion) return notFound()

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center">
        <div className="text-4xl mb-2">{religion.symbol}</div>
        <h1 className="text-4xl font-bold tracking-tight">{religion.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {religion.description}
        </p>
      </div>

      {religion.levels ? (
        <div className="space-y-12">
          {religion.levels.map((level) => (
            <section key={level.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold">{level.name}</h2>
                <p className="text-muted-foreground mt-1">{level.description}</p>
                <div className="mt-2">
                  <h3 className="font-medium mb-1">Goals:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {level.goals.map((goal, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {religion.modules
                  .filter((module) => level.moduleIds.includes(module.id))
                  .map((module, index) => (
                    <ModuleCard key={module.id} module={module} index={index} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {religion.modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}\
        </div>
      )}
    </div>
  )
} 