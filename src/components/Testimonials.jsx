import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonials({ testimonials }) {
  // Mobile state
  const [mobileIndex, setMobileIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Desktop state
  const [desktopStart, setDesktopStart] = useState(0);
  const carouselRef = useRef(null);

  // Check screen width for responsiveness
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : false
  );

  // Listen for window resize to update isDesktop
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // === MOBILE: 1-at-a-time with animation ===
  useEffect(() => {
    if (!isDesktop) {
      const timer = setTimeout(() => {
        setDirection(1);
        setMobileIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [mobileIndex, testimonials.length, isDesktop]);

  // === DESKTOP: 3-at-a-time with animation ===
  useEffect(() => {
    if (isDesktop) {
      const desktopSlide = () => {
        setDesktopStart((prev) => {
          const groups = Math.ceil(testimonials.length / 3);
          return (prev + 3) % (groups * 3);
        });
      };
      const interval = setInterval(desktopSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length, isDesktop]);

  // Reset indices when viewport changes
  useEffect(() => {
    setMobileIndex(0);
    setDesktopStart(0);
  }, [isDesktop]);

  // Get current desktop testimonials
  const getDesktopTestimonials = () => {
    return [0, 1, 2].map(i => {
      const idx = (desktopStart + i) % testimonials.length;
      return testimonials[idx];
    });
  };

  // Animation variants
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const desktopVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // --- MOBILE LAYOUT ---
  const mobileLayout = (
    <div className="relative flex flex-col items-center min-h-[350px]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={testimonials[mobileIndex].id}
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute left-0 right-0 mx-auto bg-white border border-gray-100 rounded-xl shadow-sm max-w-xs px-4 py-5 flex flex-col hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col items-center mb-3">
            <img 
              src={testimonials[mobileIndex].image} 
              alt={testimonials[mobileIndex].name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-100 mb-2 shadow-sm"
            />
            <div className="text-base font-semibold text-gray-900">{testimonials[mobileIndex].name}</div>
            <div className="text-xs text-gray-500 mb-1">{testimonials[mobileIndex].college}</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                SAT: {testimonials[mobileIndex].score}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={classNames(
                      'h-3 w-3',
                      i < testimonials[mobileIndex].rating ? 'text-amber-400 fill-current' : 'text-gray-200'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm italic text-center leading-snug">"{testimonials[mobileIndex].text}"</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center w-full absolute top-1/2 -translate-y-1/2 px-3 z-20">
        <button
          onClick={() => {
            setDirection(-1);
            setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
          }}
          aria-label="Previous testimonial"
          className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-all hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={() => {
            setDirection(1);
            setMobileIndex((prev) => (prev + 1) % testimonials.length);
          }}
          aria-label="Next testimonial"
          className="p-2 bg-indigo-600 rounded-full shadow-sm hover:bg-indigo-700 transition-all hover:shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2 absolute left-0 right-0 bottom-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => {
              setDirection(i > mobileIndex ? 1 : -1);
              setMobileIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300
              ${i === mobileIndex ? 'w-5 bg-indigo-500' : 'w-1.5 bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );

  // --- DESKTOP LAYOUT ---
  const desktopLayout = (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex justify-center gap-4 md:gap-6 transition-all duration-500 px-2"
        initial="hidden"
        animate="visible"
        variants={desktopVariants}
        key={desktopStart}
      >
        {getDesktopTestimonials().map((t) => (
          <motion.div
            key={t.id}
            variants={itemVariants}
            className="w-[calc(33.333%-1rem)] max-w-xs bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-5 flex flex-col items-center hover:shadow-md transition-all duration-300"
          >
            <img 
              src={t.image} 
              alt={t.name} 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100 mb-3 shadow-sm"
            />
            <div className="text-base font-medium text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-500 mb-1">{t.college}</div>
            <div className="flex items-center gap-2 mt-1 mb-2">
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                SAT: {t.score}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className={classNames(
                      'h-3 w-3',
                      starIdx < t.rating ? 'text-amber-400 fill-current' : 'text-gray-200'
                    )}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-sm italic text-center leading-snug">"{t.text}"</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, groupIdx) => (
          <button
            key={groupIdx}
            aria-label={`Go to testimonial group ${groupIdx + 1}`}
            onClick={() => setDesktopStart(groupIdx * 3)}
            className={classNames(
              'h-2 rounded-full transition-all duration-300',
              groupIdx * 3 === desktopStart
                ? 'w-6 bg-indigo-500'
                : 'w-2 bg-gray-200'
            )}
          />
        ))}
      </div>
    </div>
  );

  // --- MAIN SECTION ---
  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
          Student Success Stories
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto">
          See how our students achieved their dream SAT scores and got into top-choice colleges.
        </p>
        
        <div className="md:hidden">{mobileLayout}</div>
        <div className="hidden md:block">{desktopLayout}</div>
      </div>
    </section>
  );
}