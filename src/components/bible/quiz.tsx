"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BibleQuiz } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"
import { Progress } from "@/components/ui/progress"

interface QuizProps {
  initialQuiz?: BibleQuiz
}

export function Quiz({ initialQuiz }: QuizProps) {
  const [quiz, setQuiz] = useState<BibleQuiz | undefined>(initialQuiz)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function loadQuiz() {
    setIsLoading(true)
    setError(null)
    try {
      const loadedQuiz = await bibleService.getQuiz()
      setQuiz(loadedQuiz)
      setCurrentQuestion(0)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setScore(0)
    } catch (error) {
      console.error("Error loading quiz:", error)
      setError("Failed to load quiz")
    } finally {
      setIsLoading(false)
    }
  }

  function handleAnswerSelect(index: number) {
    if (isAnswered) return
    setSelectedAnswer(index)
  }

  function handleSubmitAnswer() {
    if (!quiz || selectedAnswer === null) return

    const isCorrect = selectedAnswer === quiz.questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    setIsAnswered(true)
  }

  function handleNextQuestion() {
    if (!quiz) return

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    }
  }

  if (!quiz) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Bible Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of the Bible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {error && <p className="text-destructive">{error}</p>}
            <Button onClick={loadQuiz}>Start Quiz</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = quiz.questions[currentQuestion]
  const isLastQuestion = currentQuestion === quiz.questions.length - 1
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
        <CardDescription>{quiz.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
              <p className="text-sm text-muted-foreground">
                Score: {score}/{currentQuestion + 1}
              </p>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{question.question}</h3>
              {question.reference && (
                <p className="text-sm text-muted-foreground">
                  Reference: {question.reference}
                </p>
              )}
            </div>

            <div className="space-y-2">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border ${
                    selectedAnswer === index
                      ? isAnswered
                        ? index === question.correctAnswer
                          ? "bg-green-500/20 border-green-500"
                          : "bg-red-500/20 border-red-500"
                        : "bg-primary/10 border-primary"
                      : "hover:bg-secondary"
                  }`}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              ))}
            </div>

            {isAnswered && (
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg ${
                    selectedAnswer === question.correctAnswer
                      ? "bg-green-500/20 text-green-500"
                      : "bg-red-500/20 text-red-500"
                  }`}
                >
                  <p className="font-medium">
                    {selectedAnswer === question.correctAnswer
                      ? "Correct!"
                      : "Incorrect"}
                  </p>
                  {selectedAnswer !== question.correctAnswer && (
                    <p className="text-sm mt-1">
                      The correct answer is: {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>

                {question.explanation && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Explanation</h4>
                    <p className="text-sm">{question.explanation}</p>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end">
              {!isAnswered ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              ) : isLastQuestion ? (
                <Button onClick={loadQuiz}>Start New Quiz</Button>
              ) : (
                <Button onClick={handleNextQuestion}>Next Question</Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 