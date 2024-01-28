"use client"

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function MaxWidthWrapper({ className, children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exist={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.30 }}
      
      >
        <div className={cn("mx-auto w-full max-w-screen px-2.5 md:px-20")}>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
