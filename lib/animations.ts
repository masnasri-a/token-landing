import { Variants } from "framer-motion";

/* 
  ═══════════════════════════════════════════════
  🎬 FRAMER MOTION ANIMATION VARIANTS
  Reusable animation presets for the entire app
  ═══════════════════════════════════════════════
*/

// 🌊 Fade In - Classic opacity transition
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// ⬆️ Slide Up - Bottom to top with fade
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier
    }
  }
};

// ⬅️ Slide From Left
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// ➡️ Slide From Right
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// 🔍 Zoom In - Scale with fade
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] // Bouncy ease
    }
  }
};

// 👶 Stagger Children - Sequential reveal
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

// 📦 Stagger Item - Child element of stagger container
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// 💫 Float Animation - Continuous floating motion
export const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ✨ Glow Pulse - Continuous glow effect
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.5)",
      "0 0 40px rgba(59, 130, 246, 0.8)",
      "0 0 20px rgba(59, 130, 246, 0.5)"
    ],
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// 🎯 Scale On Hover - Card hover effect
export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// 🎴 Tilt 3D - 3D tilt effect on hover
export const tilt3D = {
  rest: { rotateX: 0, rotateY: 0 },
  hover: { 
    rotateX: 4, 
    rotateY: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// 📊 Progress Bar - Width expansion animation
export const progressBar = (width: string) => ({
  hidden: { width: "0%" },
  visible: {
    width,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.3
    }
  }
});

// 🌀 Rotate Continuous - Infinite rotation
export const rotateContinuous = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// 📍 Timeline Dot - Glowing dot animation
export const timelineDot = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

// 📏 Timeline Line - Growing line animation
export const timelineLine = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

// 🎪 Modal Backdrop - Backdrop blur transition
export const modalBackdrop: Variants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { 
    opacity: 1, 
    backdropFilter: "blur(8px)",
    transition: {
      duration: 0.3
    }
  }
};

// 🎯 Modal Content - Scale and fade
export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
};
