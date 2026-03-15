export default function ThoughtCard({title, text, tag}:{title:string,text:string,tag:string}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition">
      
      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
        {tag}
      </span>

      <h3 className="font-semibold mt-3">{title}</h3>

      <p className="text-gray-500 text-sm mt-2">
        {text}
      </p>

      <p className="text-xs text-gray-400 mt-4">
        Mar 8, 2026
      </p>

    </div>
  )
}
