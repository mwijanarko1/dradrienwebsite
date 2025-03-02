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
}: {
  title: string;
  coverImage: string;
  description: string;
  publishYear: string;
  buyLink: string;
  hasBuyLink?: boolean;
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
      <div className="md:w-1/3 relative h-64 md:h-auto">
        <Image
          src={coverImage}
          alt={`Cover of ${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">Published: {publishYear}</p>
        <div className="prose prose-sm text-gray-600 mb-6">
          <p>{description}</p>
        </div>
        {hasBuyLink ? (
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Purchase Book
          </a>
        ) : (
          <p className="text-sm italic text-gray-500">Coming soon to online retailers</p>
        )}
      </div>
    </div>
  );
};

export default function BooksPage() {
  // Actual books by Dr. Adrien Chauvet from books.txt
  const books = [
    {
      id: "1",
      title: "From Science to Faith: Using a Scientific approach to Strengthen Faith",
      coverImage: "/images/book-cover-1.jpg", // Replace with actual image path
      description:
        "Rich in reflection, this book provides answers to a fundamental question: How can we approach faith using scientific methodologies and frameworks? From Science to Faith takes the reader on a journey across various themes such as the weather, electrons, waves, photosynthesis and the origin of life. But beyond scientific themes, it also addresses metaphysical themes, such as freewill, predestination, good and evil, success and failure, renunciation, engagement and evolution. The aim of the book is not to convince the reader using peremptory arguments. Rather, it urges the reader to observe the world, to be attuned to spirituality, to understand that the Signs of God do not lead to the same path.",
      publishYear: "2023",
      buyLink: "https://www.kubepublishing.com/products/from-science-to-faith",
      hasBuyLink: true,
    },
    {
      id: "2",
      title: "Can One be Religious in a Scientific World",
      coverImage: "/images/book-cover-2.jpg", // Replace with actual image path
      description:
        "Science is often believed to be superior to religion because \"it works...\" It works within a scientific paradigm that values numerical application, material benefits and novelty over generosity, compassion and tradition. Science and religion have their own logic and are complementary. This chapter in 'The Old Testament Hebrew Scriptures in Five Minutes,' edited by D. Edelman and P. Guillaume, explores this complementary relationship.",
      publishYear: "2024",
      buyLink: "https://www.equinoxpub.com/home/old-testament-5min/",
      hasBuyLink: true,
    },
    {
      id: "3",
      title: "Les miracles du coran – De l'analyse scientifiques à l'élévation spirituelle",
      coverImage: "/images/book-cover-3.jpg", // Replace with actual image path
      description:
        "A quel point l'Islam est-il en accord avec les sciences modernes ? On aimerait pouvoir répondre à cette question par un « oui » catégorique... Il est effectivement monnaie courante de penser que l'Islam, et le Coran tout particulièrement, est en accord parfait avec les sciences modernes. Cet espoir est si fort que certains arrivent à voir dans la correspondance Coran-sciences des miracles. Et pourtant, dans les cercles scientifiques, ces miracles sont fortement contestés. Comment donc réconcilier le fait qu'à partir du même texte, l'un puisse y voir la preuve avérée que Dieu existe, alors que l'autre y voit des contradictions ? Dans le but de répondre à cette question, c'est l'étude de ces contradictions qui va permettre de redéfinir le miracle tant convoité. Ainsi, c'est au travers de l'analyse scientifique que l'expérience spirituelle elle-même va être validée.",
      publishYear: "2024",
      buyLink: "#",
      hasBuyLink: false,
    },
    {
      id: "4",
      title: "De la science à la croyance – Raffermir sa foi par une approche scientifique",
      coverImage: "/images/book-cover-4.jpg", // Replace with actual image path
      description:
        "L'intérêt de cet ouvrage, qui n'est pas volumineux, mais qui est riche de réflexions nouvelles, profondes et essentielles, réside dans la réponse originale qu'il apporte à une question fondamentale : comment peut-on, en se fondant sur une méthodologie et des considérations scientifiques, aborder la question de la foi aujourd'hui ? Ici, il n'est pas question de convaincre à coups d'arguments péremptoires, mais bien plutôt, en observant le monde et en s'ouvrant à la spiritualité, de prendre conscience que le chemin des évidences n'est pas celui des préjugés.",
      publishYear: "2019",
      buyLink: "#",
      hasBuyLink: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Books</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my published works on the intersection of scientific inquiry and religious thought.
          </p>
        </div>

        <div className="space-y-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              coverImage={book.coverImage}
              description={book.description}
              publishYear={book.publishYear}
              buyLink={book.buyLink}
              hasBuyLink={book.hasBuyLink}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About My Books
          </h2>
          <p className="text-gray-600 mb-4">
            My books explore the fascinating intersection between scientific inquiry and religious thought. Drawing from my background as both a scientist and a person of faith, I aim to bridge the gap between these two domains that are often perceived as contradictory.
          </p>
          <p className="text-gray-600">
            Whether you're a scientist curious about religious perspectives, a person of faith interested in scientific discoveries, or simply someone seeking a more integrated worldview, my books offer thoughtful analysis and insights to help navigate these complex topics.
          </p>
        </div>
      </div>
    </div>
  );
} 