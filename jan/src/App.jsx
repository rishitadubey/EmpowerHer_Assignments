import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function App() {
  /* =======================
     Feedback Form State
  ======================= */
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    feedback: "",
  })
  const [submittedFeedback, setSubmittedFeedback] = useState(null)

  const handleFeedbackSubmit = () => {
    setSubmittedFeedback(feedbackData)
    setFeedbackData({ name: "", email: "", feedback: "" })
  }

  /* =======================
     Image Slideshow State
  ======================= */
  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
  ]
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  /* =======================
     Todo App State
  ======================= */
  const [todoText, setTodoText] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!todoText.trim()) return
    setTodos([...todos, { text: todoText, completed: false }])
    setTodoText("")
  }

  const toggleTodo = (index) => {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">

      {/* ================= Feedback Form ================= */}
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            placeholder="Name"
            value={feedbackData.name}
            onChange={(e) =>
              setFeedbackData({ ...feedbackData, name: e.target.value })
            }
          />
          <Input
            placeholder="Email"
            value={feedbackData.email}
            onChange={(e) =>
              setFeedbackData({ ...feedbackData, email: e.target.value })
            }
          />
          <Textarea
            placeholder="Your feedback"
            value={feedbackData.feedback}
            onChange={(e) =>
              setFeedbackData({ ...feedbackData, feedback: e.target.value })
            }
          />
          <Button onClick={handleFeedbackSubmit}>Submit</Button>

          {submittedFeedback && (
            <div className="mt-4 text-sm">
              <p><strong>Name:</strong> {submittedFeedback.name}</p>
              <p><strong>Email:</strong> {submittedFeedback.email}</p>
              <p><strong>Feedback:</strong> {submittedFeedback.feedback}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ================= Image Slideshow ================= */}
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Image Slideshow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <img
            src={images[currentImage]}
            alt="Slideshow"
            className="w-full rounded"
          />
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevImage}>
              Previous
            </Button>
            <Button variant="outline" onClick={nextImage}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ================= Todo List ================= */}
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Add a todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <Button onClick={addTodo}>Add</Button>
          </div>

          <div className="space-y-2">
            {todos.map((todo, index) => (
              <div key={index} className="flex items-center gap-2">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(index)}
                />
                <span
                  className={
                    todo.completed ? "line-through text-gray-500" : ""
                  }
                >
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
