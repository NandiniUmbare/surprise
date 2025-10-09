import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import mobileImage from './assets/mobile-main.jpg';
import MemoryLane from "./components/MemoryLane";
import music from "./assets/background-music.mp3";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { Howl } from "howler";

export default function App() {
  const [showConfetti] = useState(true);
  const [showMemoryLane, setShowMemoryLane] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const clickHandler = () => {
    setShowMemoryLane(true);
  }

  const soundRef = useRef<Howl | null>(null);

  const toggleMute = () => {
		if (soundRef.current) {
			const newMuteState = !isMuted;
			soundRef.current.mute(newMuteState);
			setIsMuted(newMuteState);
		}
  };
  
	useEffect(() => {
		const sound = new Howl({
			src: music,
			loop: true,
			volume: 0.5
		});

		soundRef.current = sound;
		sound.play();
		return () => {
			sound.stop();
		};
	}, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white">
      {showConfetti && <Confetti recycle={true} numberOfPieces={300} />}
      {/* Mute button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
      {showMemoryLane ? <MemoryLane /> : 
        <>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative block md:hidden">
          <img
            src={mobileImage}
            className="w-auto rounded-xl shadow-lg"
            alt="Birthday"
          />
          <button
            onClick={clickHandler}
            className="absolute bottom-28 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition"
          >
            Let's Celebrate! 🎊
          </button>
        </div>
        <h1 className="hidden md:block text-5xl font-bold text-center">🎉 Happy Birthday 🎉</h1>
      </motion.h1>
      <p className="mt-4 text-lg hidden md:block ">Wishing you all the love, joy, and happiness 💕</p>
      <button
        onClick={clickHandler}
        className="hidden md:block mt-6 px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition"
      >
        Let's Celebrate! 🎊
          </button>
      </>}
    </div>
  );
}

