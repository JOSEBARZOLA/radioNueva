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
      audioRef.current.play()
    }
  }, [currentRadioIndex, radios])

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
        <span className="text-blue-700 cursor-default">Radio</span>
        <span className="text-white cursor-default">RK</span>
      </h1>
      <div className="rounded-lg h-1 w-40 bg-white/30 mx-auto my-3"></div>
      <h3 className="text-xl average-sans-regular text-indigo-200 cursor-default">Tus radios de rock</h3>
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
          className="bg-indigo-900 hover:bg-indigo-800 transition-colors px-4 py-2 rounded text-xl font-bold cursor-pointer"
        >
          ◀
        </button>
        <button
          id="playPause"
          onClick={togglePlayPause}
          className="bg-indigo-900 hover:bg-indigo-800 transition-colors px-6 py-2 rounded text-xl font-bold cursor-pointer"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button
          id="nextButton"
          onClick={nextRadio}
          className="bg-indigo-900 hover:bg-indigo-800 transition-colors px-4 py-2 rounded text-xl font-bold cursor-pointer"
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

      <div className="text-sm text-indigo-300 font-medium flex items-center gap-2 cursor-default">
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

      <footer className="mt-12 py-6 text-center text-gray-300 text-sm backdrop-blur-md bg-black/30 border-t border-b border-white/30 max-w-5xl mx-auto shadow-lg rounded-lg">
  {/* Íconos sociales */}
  <div className="flex justify-center gap-6 text-xl mb-5">
    <a href="https://www.linkedin.com/in/josebarzola89/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7h5v17H0zm7.5-17h4.8v2.7h.1c.67-1.3 2.3-2.7 4.7-2.7 5 0 5.9 3.3 5.9 7.6V24h-5v-7.2c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.7 1.8-2.7 3.8V24h-5V7z"/>
      </svg>
    </a>
    <a href="https://instagram.com/josebarzola22" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z"/>
      </svg>
    </a>
    <a href="https://www.facebook.com/jose.barzola" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Facebook">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.494v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.24l-1.922.001c-1.507 0-1.798.717-1.798 1.767v2.316h3.595l-.468 3.622h-3.127V24h6.127C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
      </svg>
    </a>
  </div>

  {/* Línea decorativa */}
  <div className="mx-auto w-[100px] h-px bg-white/30 rounded-full mb-4" />

  {/* Texto del footer */}
  <p className="text-xs text-white/80 cursor-default">Created by José Barzola.</p>
</footer>



    </main>
  )
}

export default HomePage
