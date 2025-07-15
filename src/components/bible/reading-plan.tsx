"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BibleReadingPlan } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface ReadingPlanProps {
  initialPlan?: BibleReadingPlan
}

export function ReadingPlan({ initialPlan }: ReadingPlanProps) {
  const [plan, setPlan] = useState<BibleReadingPlan | undefined>(initialPlan)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const loadPlan = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const loadedPlan = await bibleService.getStudyPlan()
      setPlan(loadedPlan)
      if (loadedPlan.readings.length > 0) {
        setSelectedDay(0)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load reading plan")
    } finally {
      setIsLoading(false)
    }
  }

  if (!plan) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Bible Reading Plan</CardTitle>
          <CardDescription>
            Follow a structured plan to read through the Bible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {error && <p className="text-destructive">{error}</p>}
            <Button onClick={loadPlan}>Load Reading Plan</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 space-y-2">
              <h3 className="font-medium">Reading Schedule</h3>
              <div className="space-y-2">
                {plan.readings.map((reading, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDay(index)}
                    className={`w-full text-left p-2 rounded-md ${
                      selectedDay === index
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    Day {reading.day}
                  </button>
                ))}
              </div>
            </div>

            {selectedDay !== null && (
              <div className="md:col-span-2 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Day {plan.readings[selectedDay].day}
                  </h3>
                  <p className="text-muted-foreground">
                    {plan.readings[selectedDay].notes}
                  </p>
                </div>

                <div className="space-y-4">
                  {plan.readings[selectedDay].references.map((reference, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border bg-secondary"
                    >
                      <div className="space-y-2">
                        <h4 className="font-medium">{reference}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                {(() => {
                  const reading = plan.readings[selectedDay]
                  return reading.questions && reading.questions.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Reflection Questions</h4>
                      <div className="space-y-4">
                        {reading.questions.map((question, index) => (
                          <div key={index} className="p-4 rounded-lg border">
                            <p className="font-medium">{question.question}</p>
                            {question.answer && (
                              <p className="text-sm text-muted-foreground mt-2">
                                {question.answer}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                if (selectedDay !== null && selectedDay > 0) {
                  setSelectedDay(selectedDay - 1)
                }
              }}
              disabled={selectedDay === null || selectedDay === 0}
            >
              Previous Day
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                if (
                  selectedDay !== null &&
                  selectedDay < plan.readings.length - 1
                ) {
                  setSelectedDay(selectedDay + 1)
                }
              }}
              disabled={
                selectedDay === null || selectedDay === plan.readings.length - 1
              }
            >
              Next Day
            </Button>
          </div>

          {plan.resources.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium">Additional Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.resources.map((resource, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <h5 className="font-medium">{resource.title}</h5>
                    <p className="text-sm text-muted-foreground mt-1">
                      {resource.description}
                    </p>
                    <Button
                      variant="link"
                      className="mt-2"
                      onClick={() => window.open(resource.url, "_blank")}
                    >
                      View Resource
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 