import { motion } from "framer-motion";

const memories = [
    {
        img: "src/assets/first-21-01-2023.jpg",
        text: "That time we stayed up all night talking and watching the sunrise 🌅",
    },
    {
        img: "src/assets/second-30-11-2023.jpg",
        text: "Laughs that still echo in my heart 😂❤️",
    },
    {
        img: "src/assets/20-1-2024.jpg",
        text: "Our best trip together ✈️ unforgettable moments!",
    },
    {
        img: "src/assets/27-5-2024.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/27-7-2024.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/18-9-2024.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/28-9-2024.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/28-9-2024(2).jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/22-11-2024.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/31-1-2025.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/3-5-2025.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/24-5-2025.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/24-5-2025-2.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/17-7-2025.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
    {
        img: "src/assets/19-7-2025.jpg",
        text: "Celebrating your big day 🎂🎉",
    },
];

export default function MemoryLane() {
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
                A journey through the most incredible moments we’ve shared together.
                Hover over each photo to see why these memories mean so much to me 💕✨
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
                    ></path>
                </svg>
            </div>

            {/* Memory Cards */}
            <div className="flex flex-col md:flex-row gap-8 px-4 relative overflow-x-auto overflow-y-hidden scroll-smooth hide-scroll mx-auto max-w-screen-lg">
                {memories.map((memory, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[12rem] rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                        animate={{
                            y: [0, -10, 0], // float up and down
                        }}
                        transition={{
                            duration: 4, // time for one cycle
                            repeat: Infinity, // loop forever
                            ease: "easeInOut",
                            delay: index * 0.5, // small delay for staggered effect
                        }}
                    >
                        {/* Photo */}
                        <img
                            src={memory.img}
                            alt="Memory"
                            className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                        />

                        {/* Overlay text */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                            <p className="text-white text-center px-4">{memory.text}</p>
                        </div>
                    </motion.div>
                ))}
                </div>
        </div>
    );
}
