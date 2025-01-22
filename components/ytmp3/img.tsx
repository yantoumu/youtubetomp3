import { Card } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { YouTubeLogo } from './components/Icons'

export default function YouTubeThumbnail() {
  return (
    <Card className="w-[1280px] h-[720px] relative overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
        <div className="flex items-center justify-center w-full mb-12">
          <div className="w-48 h-12">
            <YouTubeLogo />
          </div>
          <ArrowRight className="w-20 h-20 mx-8" />
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <div className="text-4xl font-black text-[#8B7500]">
              MP3
            </div>
          </div>
        </div>
        <h1 className="text-6xl font-extrabold text-center mb-6 leading-tight">
          Best YouTube to MP3 Converter
        </h1>
        <div className="text-8xl font-black bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 px-6 py-2 rounded-lg transform -rotate-6">
          <span className="text-yellow-200 font-bold">2025</span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 px-4 py-2 rounded-full text-2xl font-bold">
          <span className="text-yellow-200 font-bold">FREE</span>
        </div>
      </div>
    </Card>
  )
}

