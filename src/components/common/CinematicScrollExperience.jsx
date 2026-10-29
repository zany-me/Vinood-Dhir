import React, { useEffect, useRef, useState } from 'react';

/**
 * CinematicScrollExperience
 * 
 * Continuous multi-section scroll video scrubber spanning:
 * 1. Dual Engine Architecture
 * 2. Comprehensive Audit Matrix
 * 3. Industrial Curriculum (Course Catalog)
 * 
 * Powered by the 3D precision mechanical engineering sequence
 * (rotating gears, industrial fasteners, and nuts/bolts) from artplayer.
 */

export const FRAME_CONFIG = {
  enableImageSequence: true,
  totalFrames: 149,
  framePath: (index) => `/frames/frame_${String(index).padStart(4, '0')}.webp`,
};

export default function CinematicScrollExperience({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // In-memory cache for instantaneous frame access
  const imagesRef = useRef(new Map());
  const lastDrawnFrameRef = useRef(1);

  // 1. Preload the complete 149-frame sequence (only ~3MB total)
  useEffect(() => {
    if (!FRAME_CONFIG.enableImageSequence) return;

    let isMounted = true;
    const cache = imagesRef.current;

    const loadFrame = (index) => {
      if (cache.has(index)) return cache.get(index);

      const img = new Image();
      img.src = FRAME_CONFIG.framePath(index);
      cache.set(index, img);
      return img;
    };

    // Stage A: Load first frame immediately and draw it
    const firstImg = loadFrame(1);
    firstImg.onload = () => {
      if (canvasRef.current) {
        drawFrameToCanvas(firstImg);
      }
    };

    // Stage B: Preload all 149 frames for 100% latency-free scrubbing
    for (let i = 1; i <= FRAME_CONFIG.totalFrames; i++) {
      loadFrame(i);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Track Window Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Helper to draw an image to canvas with cover sizing
  const drawFrameToCanvas = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Cover sizing calculations
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;
    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = width;
      renderH = width / imgRatio;
      offsetX = 0;
      offsetY = (height - renderH) / 2;
    } else {
      renderH = height;
      renderW = height * imgRatio;
      offsetX = (width - renderW) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  };

  // 3. High-Performance Canvas Render Loop (60/120fps with Lerp smoothing)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let isRunning = true;
    let animId;
    let smoothedProgress = scrollProgress;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      if (!isRunning) return;

      // Silky interpolation
      smoothedProgress += (scrollProgress - smoothedProgress) * 0.14;

      const targetFrame = Math.min(
        Math.max(Math.round(smoothedProgress * (FRAME_CONFIG.totalFrames - 1)) + 1, 1),
        FRAME_CONFIG.totalFrames
      );

      const cache = imagesRef.current;
      let img = cache.get(targetFrame);

      // Fallback: If target frame isn't ready, use nearest available frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset <= 20; offset++) {
          const prev = cache.get(targetFrame - offset);
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }
          const next = cache.get(targetFrame + offset);
          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }

      if (img && img.complete && img.naturalWidth > 0) {
        drawFrameToCanvas(img);
        lastDrawnFrameRef.current = targetFrame;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, [scrollProgress]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 1. Sticky High-Performance Canvas Scroller (Clean Crisp Layer, No Blur) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-300"
        />
      </div>

      {/* 2. Child Content Layers - Direct Crisp Architectural Flow with No Dead Gap */}
      <div className="relative z-10 -mt-[100vh]">
        {children}
      </div>
    </div>
  );
}
