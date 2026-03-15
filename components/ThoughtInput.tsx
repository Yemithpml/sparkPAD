"use client"

import { useState } from "react"

export default function ThoughtInput() {
  const [thought, setThought] = useState("")

  const handleAddThought = () => {
    if (!thought.trim()) return

    console.log(thought) // later this will save the thought
    setThought("")
  }

  return (
    <div className="bg-white border rounded-xl p-4 mb-6 flex items-center gap-3 shadow-sm">

      {/* Icon */}
      <span className="text-purple-500 text-xl">✨</span>

      {/* Input */}
      <input
        type="text"
        placeholder="What's on your mind?"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        className="w-full outline-none bg-transparent"
      />

      {/* Button */}
      <button
        onClick={handleAddThought}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
      >
        Add
      </button>

    </div>
  )
}
