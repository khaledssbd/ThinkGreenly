import { Leaf } from "lucide-react";
import { motion } from "framer-motion";
const LeafAnimation = () => {
    return (
         <div className="absolute inset-0 pointer-events-none">
        {/* Leaf 1 */}
        <motion.div
          initial={{ x: -50, y: -20, rotate: -15 }}
          animate={{
            x: ["-10%", "100%", "-10%"],
            y: ["-20%", "50%", "-20%"],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-10 top-5 text-green-500 dark:text-green-300"
        >
          <Leaf className="w-8 h-8 opacity-50" />
        </motion.div>

        {/* Leaf 2 */}
        <motion.div
          initial={{ x: -30, y: 10, rotate: 15 }}
          animate={{
            x: ["100%", "-50%", "100%"],
            y: ["10%", "80%", "10%"],
            rotate: [0, -45, 45, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute right-20 top-8 text-green-500 dark:text-green-300"
        >
          <Leaf className="w-6 h-6 opacity-50" />
        </motion.div>

        {/* Leaf 3 */}
        <motion.div
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{
            x: ["0%", "90%", "0%"],
            y: ["0%", "70%", "0%"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute left-1/4 bottom-2 text-green-500 dark:text-green-300"
        >
          <Leaf className="w-5 h-5 opacity-50" />
        </motion.div>
      </div>
    );
};

export default LeafAnimation;