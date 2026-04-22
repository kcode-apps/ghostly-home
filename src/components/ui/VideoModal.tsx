"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  // Handle Escape key induction
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const videoUrl = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || "";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-3xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { 
                type: "spring", 
                damping: 25, 
                stiffness: 300 
              } 
            }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-5xl aspect-video glass rounded-[32px] md:rounded-[48px] overflow-hidden border-white/10 shadow-[0_0_100px_-20px_rgba(20,184,166,0.3)] bg-black"
          >
            {/* Close Button Induction */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-primary/50 hover:bg-primary/20 transition-all group active:scale-90"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Video Inductor */}
            <div className="w-full h-full">
              {videoUrl ? (
                (() => {
                  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
                  
                  if (isYouTube) {
                    // Extract Video ID and manifest embed URL
                    let videoId = "";
                    if (videoUrl.includes("v=")) {
                      videoId = videoUrl.split("v=")[1].split("&")[0];
                    } else if (videoUrl.includes("youtu.be/")) {
                      videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
                    }
                    
                    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
                    
                    return (
                      <iframe
                        src={embedUrl}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  }

                  return (
                    <video
                      src={videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  );
                })()
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-outfit">Inducting Demo Manifest...</h4>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Please configure NEXT_PUBLIC_DEMO_VIDEO_URL in your environment manifold to activate this portal.
                  </p>
                </div>
              )}
            </div>

            {/* Decorative Edge Glow */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[32px] md:rounded-[48px]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
