"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Mail, Rocket, Sparkles } from "lucide-react";

export function Newsletter() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    toast.success("Subscribed! 🎉");
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full p-8 bg-gradient-to-br from-green-50 my-20 via-green-50/80 to-green-100 dark:from-green-900/30 dark:via-green-900/20 dark:to-green-800/20 rounded-xl relative overflow-hidden isolate"
    >
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-8 left-8 text-3xl"
      >
        🚀
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-12 right-16 text-3xl"
      >
        ✨
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 pr-8 relative">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="flex items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-green-500 rounded-lg shadow-lg relative"
            >
              <Mail className="w-8 h-8 text-white" />
              <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-ping" />
            </motion.div>
            <h2 className="text-4xl font-bold  dark:text-white bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Stay Ahead
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 font-medium"
          >
            Join our community of 10k+ subscribers getting:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3 relative"
          >
            {[
              "Weekly insights",
              "Expert analysis",
              "Early access",
              "Premium content",
            ].map((item, index) => (
              <li key={item} className="flex items-center gap-2 group">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="w-2 h-2 bg-green-500 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-green-300/30 rounded-full animate-ping" />
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {item}
                </span>
              </li>
            ))}
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-green-400/20 to-transparent" />
          </motion.ul>

          <motion.div className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-300/10 rounded-full blur-xl" />
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-green-100/50 dark:border-green-800/30 relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-400/10 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-300/10 rounded-full blur-xl" />

          <div className="space-y-6 relative">
            <div className="text-center space-y-2">
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity }}
                
              >
                <Rocket className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-float" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Launch Your Inbox
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get curated content straight to your email
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </Label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-green-500 pr-12"
                    {...register("email", { required: true })}
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-200/50 dark:shadow-green-900/20 relative overflow-hidden"
                >
                  <span className="flex items-center gap-2 z-10 relative">
                    Subscribe Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                </Button>
              </motion.div>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join our{" "}
                <span className="text-green-600 dark:text-green-400">
                  no-spam
                </span>{" "}
                community
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute hidden lg:block left-1/2 top-1/2 w-1 h-32 bg-gradient-to-b from-green-400/30 to-transparent -translate-y-16"
      />
    </motion.div>
  );
}
