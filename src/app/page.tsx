"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  // Function to handle scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Apple Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900 opacity-80"></div>
          <Image 
            src="/images/geometric-pattern.svg" 
            alt="Background pattern"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
            Where Science and Spirituality Converge
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Science illuminates the path—religion charts the course.
          </p>
          <Link 
            href="/about" 
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-300 animate-fade-in-up animation-delay-600"
          >
            Discover My Work
          </Link>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce animation-delay-1000">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Collision Section - Expanded */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            The Electric Crossroads
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            What happens when empirical inquiry meets ancient wisdom? When the &quot;how&quot; of discovery collides with the &quot;why&quot; of existence? This is the electric crossroads where curiosity and faith ignite a deeper truth: <span className="font-semibold">they need each other</span>.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500">
            For too long, science and religion have been framed as rivals. But look closer:
          </p>
          <div className="mt-10 space-y-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700">
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-lg text-gray-700">Sacred texts brim with insights into nature&apos;s mysteries.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-lg text-gray-700">Scientific breakthroughs unravel questions once deemed philosophical.</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed mt-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-900">
            This is the frontier we&apos;re exploring.
          </p>
        </div>
      </section>

      {/* Modern Context Section */}
      <section className="py-24 md:py-32 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            Urgent in a Digital Age
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            In an age where algorithms parse our desires and data shapes our beliefs, the dialogue between science and spirituality isn&apos;t just academic—it&apos;s urgent.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-300">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cosmic Wonder</h3>
                <p className="text-gray-600">
                  How do we reconcile cosmic wonder with cosmic equations?
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-500">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quantum Coexistence</h3>
                <p className="text-gray-600">
                  Can quantum physics and sacred teachings coexist?
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-700">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Life&apos;s Boundaries</h3>
                <p className="text-gray-600">
                  Where does the code of life end and the soul begin?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compass Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            A Compass for the Curious
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            This site is a compass for the curious—a space for those who refuse to choose between reason and reverence. Here, we dissect paradoxes, challenge assumptions, and ask:
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-1 rounded-xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-2xl text-center text-gray-800 italic">
                &quot;How far might harmony reach if science and religion dare to listen to one another?&quot;
              </p>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mt-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700">
            Join us at the intersection of the measurable and the mysterious. Let&apos;s explore how ancient wisdom and modern inquiry might together light the way forward.
          </p>
        </div>
      </section>

      {/* Featured Content - Apple Product Style */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            Explore the convergence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Media Card */}
            <div className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl group animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
                  <svg className="h-20 w-20 text-white opacity-90 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Lectures & Interviews</h3>
                <p className="text-gray-600 mb-6">
                  Watch my presentations exploring the harmony between scientific principles and religious teachings.
                </p>
                <Link 
                  href="/media" 
                  className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Watch now
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Books Card */}
            <div className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl group animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000 delay-300">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-600 flex items-center justify-center">
                  <svg className="h-20 w-20 text-white opacity-90 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Published Works</h3>
                <p className="text-gray-600 mb-6">
                  Discover my books on using scientific approaches to strengthen religious faith.
                </p>
                <Link 
                  href="/books" 
                  className="inline-flex items-center text-teal-600 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn more
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* About Card */}
            <div className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl group animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000 delay-600">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <svg className="h-20 w-20 text-white opacity-90 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">My Journey</h3>
                <p className="text-gray-600 mb-6">
                  Learn about my background as an interdisciplinary Muslim scientist and researcher.
                </p>
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-gray-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  About me
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
