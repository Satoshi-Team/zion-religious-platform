import { notFound } from 'next/navigation'
import { religions } from '@/data/religions'
import { ModuleClientUI } from './module-client-ui'
import type { Religion, Module as ContentModule } from '@/types/content'

interface ModulePageProps {
  params: {
    religion: string
    moduleId: string
  }
}

export async function generateStaticParams() {
  return religions.flatMap((religion) =>
    religion.modules.map((module) => ({
      religion: religion.id,
      moduleId: module.id,
    }))
  )
}

export default function ModulePage({ params }: ModulePageProps) {
  const religion = religions.find((r) => r.id === params.religion) as Religion | undefined
  const module = religion?.modules.find((m) => m.id === params.moduleId) as ContentModule | undefined

  if (!religion || !module) return notFound()

  const level = religion.levels?.find((l) => l.moduleIds.includes(module.id))

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <span>{religion.symbol}</span>
          <span>{religion.name}</span>
          {level && (
            <>
              <span>→</span>
              <span>{level.name}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{module.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{module.description}</p>
      </div>

      <ModuleClientUI module={module} />
    </div>
  )
} 