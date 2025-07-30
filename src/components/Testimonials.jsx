import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonials({ testimonials }) {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopStart, setDesktopStart] = useState(0);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      const timer = setTimeout(() => {
        setMobileIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [mobileIndex, testimonials.length, isDesktop]);

  useEffect(() => {
    if (isDesktop) {
      const interval = setInterval(() => {
        const groups = Math.ceil(testimonials.length / 3);
        setDesktopStart((prev) => (prev + 3) % (groups * 3));
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length, isDesktop]);

  useEffect(() => {
    setMobileIndex(0);
    setDesktopStart(0);
  }, [isDesktop]);

  const getDesktopTestimonials = () => {
    return [0, 1, 2].map(i => {
      const idx = (desktopStart + i) % testimonials.length;
      return {
        ...testimonials[idx],
        position: i === 1 ? 'center' : i === 0 ? 'left' : 'right'
      };
    });
  };

  const renderStars = (rating) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={classNames('h-3 w-3', i < rating ? 'text-amber-400 fill-current' : 'text-gray-200')}
        />
      ))}
    </div>
  );

  const mobileLayout = (
    <div className="relative flex flex-col items-center min-h-[350px]">
      <div className="absolute left-0 right-0 mx-auto bg-white border border-gray-100 rounded-xl shadow-sm max-w-xs px-4 py-5 flex flex-col hover:shadow-md transition-shadow duration-300">
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
            {renderStars(testimonials[mobileIndex].rating)}
          </div>
        </div>
        <p className="text-gray-700 text-sm italic text-center leading-snug">"{testimonials[mobileIndex].text}"</p>
      </div>

      <div className="flex justify-between items-center w-full absolute top-1/2 -translate-y-1/2 px-3 z-20">
        <button
          onClick={() => setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
          className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-all hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={() => setMobileIndex((prev) => (prev + 1) % testimonials.length)}
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
            onClick={() => setMobileIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === mobileIndex ? 'w-5 bg-indigo-500' : 'w-1.5 bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );

  const desktopLayout = (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center gap-4 md:gap-6 px-2" key={desktopStart}>
        {getDesktopTestimonials().map((t) => (
          <div
            key={t.id}
            className={classNames(
              'transition-all duration-300 ease-in-out flex flex-col items-center rounded-xl border px-4 py-5 bg-white hover:shadow-lg',
              t.position === 'center' ? 'scale-105 shadow-xl z-10 border-indigo-200' : 'scale-95 opacity-90'
            )}
            style={{ maxWidth: t.position === 'center' ? '360px' : '300px', minHeight: '340px' }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100 mb-3 shadow-sm"
            />
            <div className="text-base font-medium text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-500 mb-1">{t.college}</div>
            <div className="flex items-center gap-2 mt-1 mb-2">
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">SAT: {t.score}</span>
              {renderStars(t.rating)}
            </div>
            <p className="text-gray-700 text-sm italic text-center leading-snug">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="w-full py-12 md:py-16 bg-gray-50">
      <div className="mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Student Success Stories</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto">
          See how our students achieved their dream SAT scores and got into top-choice colleges.
        </p>
        <div className="md:hidden">{mobileLayout}</div>
        <div className="hidden md:block">{desktopLayout}</div>
      </div>
    </section>
  );
}
