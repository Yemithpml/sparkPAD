"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-white border-r
        flex flex-col justify-between p-6 z-50 transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform`}
      >
        {/* Close button mobile */}
        <div className="md:hidden flex justify-end">
          <X onClick={() => setOpen(false)} />
        </div>

        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold">SparkPad</h2>
          <p className="text-gray-400 text-sm mb-6">Your second brain</p>

          <nav className="space-y-4">
            <Link href="/" className="block font-medium text-purple-600">
              Dashboard
            </Link>

            <Link href="/all-thoughts" className="block text-gray-700">
              All Thoughts
            </Link>

            <Link href="/favorites" className="block text-gray-700">
              Favorites
            </Link>

            <Link href="/tags" className="block text-gray-700">
              Tags
            </Link>

            <Link href="/analytics" className="block text-gray-700">
              Analytics
            </Link>
          </nav>
        </div>

        {/* Footer Tip */}
        <div className="bg-purple-50 rounded-lg p-4 text-sm">
          <p className="font-semibold">💡 Quick Tip</p>
          <p className="text-gray-600 text-xs mt-1">
            Press <kbd className="border px-1 rounded">⌘</kbd> +
            <kbd className="border px-1 rounded">K</kbd> to capture thoughts
          </p>
        </div>
      </aside>
    </>
  )
}
