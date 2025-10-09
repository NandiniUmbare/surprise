import {useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";
import memories from "./data/memories.json";
import WavyLine from "./WavyLine";

interface Memory {
	img: string;
	text: string;
}
export default function MemoryLane() {
	const [selectedImage, setSelectedImage] = useState<Memory | null>(null);

	const openLightbox = (memory: Memory) => {
		setSelectedImage(memory);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};
	return (
		<div className="min-w-screen min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-16 px-6">
			{/* Heading */}
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-lg md:text-4xl font-extrabold text-center text-pink-600 mb-4"
			>
				🎈 Our Memory Lane 🎈
			</motion.h2>

			{/* Subtitle */}
			<p className="text-center max-w-2xl mx-auto text-gray-700 mb-8">
				A journey through the most incredible moments we’ve shared together.{" "}
				<br />
				Click on each photo to see the memory up close 💕✨
			</p>
			<div className="custom-shape-divider-bottom-169 border-none">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="w-full h-2 mb-20"
				>
					<path
						d="M321.39,56.09c58.35,12.82,121.21,36,182.66,33.05,61.92-2.94,120.46-32.6,182.27-49.43C747.1,23,810,18.54,873,24.19c63.5,5.7,127,22.35,190,25.1,62.7,2.75,125-8.38,187-18.24V120H0V0C89,20.65,179,43.27,269,53.79,321.39,56.09Z"
						className="fill-pink-100"
					/>
				</svg>
			</div>

			{/* Memory Cards */}
			<div className="flex flex-col md:flex-row gap-8 px-4 relative overflow-x-auto overflow-y-hidden scroll-smooth hide-scroll mx-auto max-w-screen-lg">
                {memories.map((memory, index) =>
				<div key={index} className="relative h-full flex items-center flex-shrink-0">
					<motion.div
						key={index}
						className={`group relative w-60 rounded-2xl overflow-hidden shadow-lg border-4 border-white cursor-pointer 
                            ${index % 2 === 0 ? "self-end" : "self-start"}`}
						onClick={() => openLightbox(memory)}
						animate={{
							y: [0, -10, 0] // float up and down
						}}
						transition={{
							duration: 4, // time for one cycle
							repeat: Infinity, // loop forever
							ease: "easeInOut",
							delay: index * 0.5 // small delay for staggered effect
						}}
					>
						{/* Photo */}
						<WavyLine
							height={48}
							color="white"
							className={`absolute left-1/2 -translate-x-1/2 ${index % 2 === 0
								? "bottom-full mb-[-2px] rotate-180"
								: "top-full mt-[-2px]"}`}
						/>
						<img
							src={memory.img}
							alt="Memory"
							className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
						/>
					</motion.div>
                        </div>
				)}
			</div>
			<AnimatePresence>
				{selectedImage &&
					<Lightbox
						img={selectedImage.img}
						text={selectedImage.text}
						onClose={closeLightbox}
					/>}
			</AnimatePresence>
		</div>
	);
}
