'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Radio {
  name: string
  url: string
}

interface HomePageProps {
  radios: Radio[]
}

const HomePage: React.FC<HomePageProps> = ({ radios }) => {
  const [currentRadioIndex, setCurrentRadioIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = radios[currentRadioIndex].url
      audioRef.current.volume = volume
      audioRef.current.play()
    }
  }, [currentRadioIndex, radios, volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlayPause = () => {
    if (!audioRef.current) return
    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const changeRadio = (index: number) => {
    setCurrentRadioIndex(index)
    setIsPlaying(true)
  }

  const nextRadio = () => {
    setCurrentRadioIndex((currentRadioIndex + 1) % radios.length)
    setIsPlaying(true)
  }

  const prevRadio = () => {
    setCurrentRadioIndex((currentRadioIndex - 1 + radios.length) % radios.length)
    setIsPlaying(true)
  }

  return (
    <main
  className="min-h-screen bg-center bg-no-repeat bg-cover text-white font-sans relative"
  style={{ backgroundImage: "url('image/nightNeon.jpg')" }}>
    
      <header className="container mx-auto py-6 px-4">
  <div className="border-t-2 border-b-2 border-white/30 backdrop-blur-md bg-black/30 rounded-lg shadow-lg flex flex-col items-center">
    <div id="titulos" className="text-center m-6">
      <h1 className="text-5xl font-bold anta-regular">
        <span className="text-blue-700 hover:text-blue-500">Radio</span>
        <span className="text-white">RK</span>
      </h1>
      <div className="h-1 w-40 bg-white/40 mx-auto my-2"></div>
      <h3 className="text-xl average-sans-regular text-indigo-200">Tus radios de rock</h3>
    </div>
    <div className="h-1 w-full border-white/30 mt-3"></div>
  </div>
</header>
<section className="container mx-auto px-4 mt-10 max-w-3xl">
  {/* Marco general con efecto de vidrio */}
  <div className="backdrop-blur-md bg-black/30 border border-white/30 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-8 transition-all duration-500">
    
    {/* Reproductor */}
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center justify-center gap-6">
        <button
          id="prevButton"
          onClick={prevRadio}
          className="bg-indigo-900 hover:bg-indigo-800 transition-colors px-4 py-2 rounded text-xl font-bold"
        >
          ◀
        </button>
        <button
          id="playPause"
          onClick={togglePlayPause}
          className="bg-indigo-900 hover:bg-indigo-800 transition-colors px-6 py-2 rounded text-xl font-bold"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button
          id="nextButton"
          onClick={nextRadio}
          className="bg-indigo-900 hover:bg-indigo-800 transition-colors px-4 py-2 rounded text-xl font-bold"
        >
          ▶
        </button>
      </div>

      <input
        type="range"
        id="volumeSlider"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-40 h-3 rounded-lg accent-indigo-700 focus:accent-purple-700 cursor-pointer"
      />

      <div className="text-sm text-indigo-300 font-medium flex items-center gap-2">
        <span className="text-purple-400">🎶</span>
        <span>Estás escuchando:</span>
        <div className="marquee-container">
          <span className="marquee-text text-white">
            {radios?.[currentRadioIndex]?.name || "Cargando..."}
          </span>
        </div>
      </div>
    </div>

    {/* Lista de radios (conserva su estilo y gradientes) */}
    <ul id="listaRadios" className="w-full max-w-md space-y-3">
      {radios.map((radio, idx) => (
        <li
          key={idx}
          onClick={() => changeRadio(idx)}
          className={`cursor-pointer rounded px-4 py-2 text-center transition-colors select-none ${
            idx === currentRadioIndex
              ? "bg-indigo-600 ring-2 ring-purple-500 font-semibold"
              : "bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 hover:from-indigo-800 hover:via-purple-800 hover:to-blue-800"
          }`}
        >
          {radio.name}
        </li>
      ))}
    </ul>
  </div>

</section>
{/* Audio element fuera del contenedor visual */}
  <audio ref={audioRef} />

      <footer className="footer mt-12 text-right text-gray-300 text-sm pb-6">
        <p>Created by Jose Barzola.</p>
      </footer>
    </main>
  )
}

export default HomePage
