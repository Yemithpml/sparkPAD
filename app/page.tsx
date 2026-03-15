import Sidebar from "@/components/SideBar"
import ThoughtCard from "@/components/ThoughtCard"
import ThoughtInput from "@/components/ThoughtInput"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <Sidebar />

      <main className="flex-1 p-6 md:p-10">

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back! ✨
          </h1>

          <p className="text-gray-500 mt-1">
            What's on your mind today?
          </p>
        </div>

        {/* Thought Input */}
        <ThoughtInput />

        {/* Search */}
        <input
          type="text"
          placeholder="Search thoughts..."
          className="w-full border rounded-xl p-3 mb-8"
        />

        {/* Recent Thoughts */}
        <h2 className="font-semibold text-lg mb-4">
          Recent Thoughts
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <ThoughtCard
            title="Build a second brain app"
            text="Create a productivity tool that helps capture random thoughts quickly."
            tag="Idea"
          />

          <ThoughtCard
            title="Learn React Server Components"
            text="Deep dive into RSC architecture and streaming."
            tag="Learning"
          />

          <ThoughtCard
            title="Refactor API endpoints"
            text="Optimize database queries and error handling."
            tag="Coding"
          />

        </div>

      </main>

    </div>
  )
}
