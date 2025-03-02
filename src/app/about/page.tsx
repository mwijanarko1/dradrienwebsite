"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
            About Dr. Adrien Chauvet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            An interdisciplinary Muslim scientist bridging the gap between science and religion
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative h-[600px] rounded-2xl overflow-hidden animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000">
                <Image
                  src="/images/dradrienprofile.jpg"
                  alt="Dr. Adrien Chauvet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="prose prose-lg max-w-none animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Scientific Journey</h2>
                <p className="text-gray-600 mb-6">
                  Dr. Adrien Chauvet is an interdisciplinary Muslim scientist dedicated to exploring the interplay between science and religion.
                </p>
                <p className="text-gray-600 mb-6">
                  His research expertise bridges across the fields of physics, biology, chemistry and engineering. He studied fundamental physics in Strasbourg (France) and pursued a PhD in biophysics at Purdue University (USA, 2012).
                </p>
                <p className="text-gray-600">
                  He then worked as a Marie-Curie fellow in bio-photonics at the Swiss Federal Institute of Technology in Lausanne (EPFL, Switzerland) and at the University of Geneva (Switzerland). In 2016 he was appointed assistant professor of physical chemistry at the University of Sheffield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            Research & Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-100">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Novel Techniques</h3>
              <p className="text-gray-600">
                Developing and applying innovative laser-based spectroscopies and imaging techniques for material characterization.
              </p>
            </div>

            {/* Research Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-300">
              <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Science</h3>
              <p className="text-gray-600">
                Synthesizing and analyzing novel functional materials, from single molecules to complex polymers.
              </p>
            </div>

            {/* Research Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-500">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interdisciplinary Research</h3>
              <p className="text-gray-600">
                Bridging physics, biology, and chemistry to tackle complex scientific challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Islamic Studies Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12 flex-row-reverse">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8 rounded-2xl text-white animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000">
                <h2 className="text-3xl font-bold mb-8">Islamic Studies</h2>
                <div className="space-y-6">
                  <p>
                    In parallel to his scientific training, Adrien studied Arabic and the fundament of classical Islamic sciences with local scholars. He was introduced to the fields of 'Aquida, Tafsir, Fiqu and Usul al-Fiqu with Sheikh Tewfik Choukri, Indianapolis, USA.
                  </p>
                  <p>
                    He was then exposed to Islamic spirituality through Imam Abdulwahid Kort, Lausanne, and Dr. Hani Ramadan, Geneva, Switzerland. He learned Arabic at university and through various intensive programs online as well as in person, locally and abroad.
                  </p>
                  <p>
                    Benefiting from his scientific and Islamic upbringing, Adrien is invested in the field of science and religion, and, for the past decade dedicated to researching, writing, delivering lectures, and organising events on the topic.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Classical Studies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 'Aquida</li>
                    <li>• Tafsir</li>
                    <li>• Fiqu</li>
                    <li>• Usul al-Fiqu</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Classical Arabic</li>
                    <li>• Modern Arabic</li>
                    <li>• Islamic Texts</li>
                    <li>• Scholarly Works</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Focus</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Science & Religion</li>
                    <li>• Islamic Philosophy</li>
                    <li>• Modern Applications</li>
                    <li>• Ethical Frameworks</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Outreach</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Public Lectures</li>
                    <li>• Academic Writing</li>
                    <li>• Event Organization</li>
                    <li>• Community Engagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Roles Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            University Engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy Institute</h3>
              <p className="text-gray-600">
                Board member of the cross-faculty Energy Institute, leading early career researcher development.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-300">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Institute for Sustainable Food</h3>
              <p className="text-gray-600">
                Contributing to research and initiatives promoting sustainable food systems and technology.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-600">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Muslim Chaplaincy</h3>
              <p className="text-gray-600">
                Active member of the University's Muslim chaplaincy, supporting spiritual and cultural engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl overflow-hidden shadow-xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="px-8 py-16 sm:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <p className="text-xl text-white/90 mb-12">
                  For inquiries about lectures, collaborations, or other matters, please reach out.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                    href="mailto:a.chauvet@sheffield.ac.uk"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Me
                  </a>
                  <a 
                    href="https://www.sheffield.ac.uk/mps/people/all-academic-staff/adrien-chauvet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    University Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 