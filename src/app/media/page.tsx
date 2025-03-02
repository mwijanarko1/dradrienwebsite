"use client";

import Image from "next/image";
import { useEffect } from "react";

const VideoCard = ({ 
  title, 
  description, 
  embedId,
  isLarge = false,
}: { 
  title: string; 
  description: string; 
  embedId: string;
  isLarge?: boolean;
}) => {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${isLarge ? 'col-span-2' : ''}`}>
      <div className="relative pb-[56.25%] h-0 bg-gray-900">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function MediaPage() {
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
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const videos = [
    {
      id: "1",
      title: "Grande Mosquée de Strasbourg",
      description: "Lecture at the Grande Mosquée de Strasbourg on the intersection of science and religion.",
      embedId: "ORFzE0gEsuA",
      isLarge: true,
    },
    {
      id: "2",
      title: "University of Sheffield's Islamic Society",
      description: "Presentation at the University of Sheffield's Islamic Society discussing the relationship between scientific inquiry and Islamic thought.",
      embedId: "7hsJMPXbTdY",
    },
    {
      id: "3",
      title: "Centre Tawhid, Lyon",
      description: "Lecture at Centre Tawhid in Lyon exploring the compatibility of scientific discoveries with religious teachings.",
      embedId: "zwN0jlfqRIw",
    },
    {
      id: "4",
      title: "From Science to Faith",
      description: "A comprehensive exploration of the journey from scientific understanding to religious faith.",
      embedId: "tlwZICx2kAk",
      isLarge: true,
    },
    {
      id: "5",
      title: "Centre Islamique de Geneve",
      description: "Presentation at the Islamic Center of Geneva discussing the harmony between scientific principles and Islamic teachings.",
      embedId: "Hq0Zfcua8xA",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/geometric-pattern.svg" 
            alt="Background pattern"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Lectures & Interviews
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Explore thought-provoking discussions on the harmonious relationship between scientific discovery and religious understanding.
          </p>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <VideoCard
                key={video.id}
                title={video.title}
                description={video.description}
                embedId={video.embedId}
                isLarge={video.isLarge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Media Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Podcasts */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl overflow-hidden shadow-xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <div className="p-8 md:p-12">
                <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Podcasts</h2>
                <p className="text-xl text-white/90 mb-8">
                  Listen to in-depth discussions on the intersection of science and religion.
                </p>
                <a 
                  href="https://open.spotify.com/episode/5KERXRyRN3nDrhhfBpdeya?si=v5jW5trNTMi5n4ZzpbL8Iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <svg className="h-5 w-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                  <svg className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl overflow-hidden shadow-xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
              <div className="p-8 md:p-12">
                <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Social Media</h2>
                <p className="text-xl text-white/90 mb-8">
                  Follow for updates and join the conversation on science and religion.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://youtube.com/@dradrienchauvet?si=iTnUmxrlmIzEpfot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors group w-full"
                  >
                    <svg className="h-5 w-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    YouTube Channel
                    <svg className="h-5 w-5 ml-auto transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/DrAdrienChauvet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors group w-full"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter/X Profile
                    <svg className="h-5 w-5 ml-auto transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Publications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Publications</h2>
                  <p className="text-xl text-gray-600">
                    Explore my research papers and academic contributions.
                  </p>
                </div>
                <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <a 
                href="https://doi.org/10.35632/ajis.v40i1-2.3175" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Latest Publication
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Read my latest academic article on the intersection of science and religion.
                    </p>
                  </div>
                  <svg className="h-6 w-6 text-gray-400 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 