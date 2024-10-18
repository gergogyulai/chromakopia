import React, { useRef, useState } from "react"
import { Canvas } from "./canvas/canvas"

const App: React.FC = () => {
  const [text, setText] = useState<string>("chromakopia")
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const image = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = image
    link.download = "chromakopia-pfp.png"
    link.click()
  }

  return (
    <main className="min-h-screen bg-[#00843d] text-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Chromakopia pfp Generator</h1>
          <p className="text-xl">Enter your name below to generate a profile picture</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            maxLength={11}
            placeholder="Enter your name"
            className="w-full h-16 text-2xl p-4 bg-transparent border-black text-black placeholder-black/70 focus:border-solid focus:outline-none border-2 border-dashed"
            />
          <div className="aspect-square w-full bg-white/10 overflow-hidden">
            <Canvas text={text} ref={canvasRef} />
          </div>
          <button
            onClick={handleDownload}
            className="w-full h-16 text-xl font-semibold text-black hover:text-[#00843d] border-2 border-black hover:bg-black transition-colors"
          >
            Download
          </button>
        </div>
      </div>
    </main>
  )
}

export default App