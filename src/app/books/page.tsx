import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Dr. Adrien Chauvet",
  description: "Discover books by Dr. Adrien Chauvet on the intersection of science, religion, and philosophy.",
};

const BookCard = ({
  title,
  coverImage,
  description,
  publishYear,
  buyLink,
  hasBuyLink = true,
  isReversed = false,
}: {
  title: string;
  coverImage: string;
  description: string;
  publishYear: string;
  buyLink: string;
  hasBuyLink?: boolean;
  isReversed?: boolean;
}) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group`}>
      <div className="md:w-2/5 relative h-[400px] md:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />
        <Image
          src={coverImage}
          alt={`Cover of ${title}`}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
        <div>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Published {publishYear}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{title}</h3>
          <div className="prose prose-lg text-gray-600 mb-8">
            <p>{description}</p>
          </div>
        </div>
        {hasBuyLink ? (
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center group/button"
          >
            <span className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Purchase Book
            </span>
            <svg 
              className="h-5 w-5 text-blue-600 ml-2 transform group-hover/button:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        ) : (
          <p className="text-sm italic text-gray-500">Coming soon to online retailers</p>
        )}
      </div>
    </div>
  );
};

export default function BooksPage() {
  const books = [
    {
      id: "1",
      title: "From Science to Faith: Using a Scientific approach to Strengthen Faith",
      coverImage: "/images/book-cover-1.jpg",
      description:
        "Rich in reflection, this book provides answers to a fundamental question: How can we approach faith using scientific methodologies and frameworks? From Science to Faith takes the reader on a journey across various themes such as the weather, electrons, waves, photosynthesis and the origin of life.",
      publishYear: "2023",
      buyLink: "https://www.kubepublishing.com/products/from-science-to-faith",
      hasBuyLink: true,
    },
    {
      id: "2",
      title: "Can One be Religious in a Scientific World",
      coverImage: "/images/book-cover-2.jpg",
      description:
        "Science is often believed to be superior to religion because \"it works...\" It works within a scientific paradigm that values numerical application, material benefits and novelty over generosity, compassion and tradition. Science and religion have their own logic and are complementary.",
      publishYear: "2024",
      buyLink: "https://www.equinoxpub.com/home/old-testament-5min/",
      hasBuyLink: true,
    },
    {
      id: "3",
      title: "Les miracles du coran – De l'analyse scientifiques à l'élévation spirituelle",
      coverImage: "/images/book-cover-3.jpg",
      description:
        "A quel point l'Islam est-il en accord avec les sciences modernes ? On aimerait pouvoir répondre à cette question par un « oui » catégorique... Il est effectivement monnaie courante de penser que l'Islam, et le Coran tout particulièrement, est en accord parfait avec les sciences modernes.",
      publishYear: "2024",
      buyLink: "#",
      hasBuyLink: false,
    },
    {
      id: "4",
      title: "De la science à la croyance – Raffermir sa foi par une approche scientifique",
      coverImage: "/images/book-cover-4.jpg",
      description:
        "L'intérêt de cet ouvrage, qui n'est pas volumineux, mais qui est riche de réflexions nouvelles, profondes et essentielles, réside dans la réponse originale qu'il apporte à une question fondamentale : comment peut-on, en se fondant sur une méthodologie et des considérations scientifiques, aborder la question de la foi aujourd'hui ?",
      publishYear: "2019",
      buyLink: "#",
      hasBuyLink: false,
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Published Works
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore my books on the fascinating intersection of scientific inquiry and religious thought, bridging the gap between empirical discovery and spiritual understanding.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {books.map((book, index) => (
              <BookCard
                key={book.id}
                title={book.title}
                coverImage={book.coverImage}
                description={book.description}
                publishYear={book.publishYear}
                buyLink={book.buyLink}
                hasBuyLink={book.hasBuyLink}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-16 sm:px-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">
                  About My Publications
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  My books explore the delicate balance between scientific methodology and religious understanding, offering fresh perspectives on age-old questions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
                  <div>
                    <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Scientific Rigor</h3>
                    <p className="text-sm">Grounded in empirical research and scientific methodology</p>
                  </div>
                  <div>
                    <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Religious Insight</h3>
                    <p className="text-sm">Deep understanding of religious texts and traditions</p>
                  </div>
                  <div>
                    <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Modern Context</h3>
                    <p className="text-sm">Contemporary applications and relevant discussions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 