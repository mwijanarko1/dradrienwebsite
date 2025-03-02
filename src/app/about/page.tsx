import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dr. Adrien Chauvet",
  description: "Learn about Dr. Adrien Chauvet, an interdisciplinary Muslim scientist dedicated to exploring the interplay between science and religion.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Dr. Adrien Chauvet</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An interdisciplinary Muslim scientist dedicated to exploring the interplay between science and religion.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-80 md:h-auto">
              <Image
                src="/images/dr-adrien-chauvet.jpg" // Replace with actual image path
                alt="Dr. Adrien Chauvet"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scientific Background</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Dr. Adrien Chauvet is an interdisciplinary Muslim scientist dedicated to exploring the interplay between science and religion.
                </p>
                <p>
                  His research expertise bridges across the fields of physics, biology, chemistry and engineering. He studied fundamental physics in Strasbourg (France) and pursued a PhD in biophysics at Purdue University (USA, 2012). He then worked as a Marie-Curie fellow in bio-photonics at the Swiss Federal Institute of Technology in Lausanne (EPFL, Switzerland) and at the University of Geneva (Switzerland). In 2016 he was appointed assistant professor of physical chemistry at the University of Sheffield.
                </p>
                <p>
                  In his research, Dr. Chauvet develops and applies novel laser-based spectroscopies and imaging techniques to characterise and assist the synthesis of novel functional materials; be it solid materials, single molecules, molecular complexes, polymers, and whole living organisms.
                </p>
                <p>
                  Within the University of Sheffield, he is board member of the cross-faculty Energy Institute, for which he leads the development of early career researchers by upholding the equality, diversity and inclusion ethos. He is also part of the Institute for Sustainable Food as well as an active member of the University's Muslim chaplaincy.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Islamic Studies</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                In parallel to his scientific training, Adrien studied Arabic and the fundament of classical Islamic sciences with local scholars. He was introduced to the fields of 'Aquida, Tafsir, Fiqu and Usul al-Fiqu with Sheikh Tewfik Choukri, Indianapolis, USA. He was then exposed to Islamic spirituality through Imam Abdulwahid Kort, Lausanne, and Dr. Hani Ramadan, Geneva, Switzerland. He learned Arabic at university and through various intensive programs online as well as in person, locally and abroad.
              </p>
              <p>
                Benefiting from his scientific and Islamic upbringing, Adrien is invested in the field of science and religion, and, for the past decade dedicated to researching, writing, delivering lectures, and organising events on the topic.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Interests</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Intersection of science and religion</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Physics and Islamic philosophy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Biophysics and bioethics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Laser-based spectroscopy and imaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Functional materials development</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 mb-4">
              For inquiries about lectures, collaborations, or other matters, please use the contact information below.
            </p>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@adrienchauvet.com</span>
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>University of Sheffield, Department of Chemistry</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 