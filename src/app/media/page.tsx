import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media | Dr. Adrien Chauvet",
  description: "Watch lectures and interviews by Dr. Adrien Chauvet exploring the relationship between science and religion.",
};

const VideoCard = ({ 
  title, 
  description, 
  embedId 
}: { 
  title: string; 
  description: string; 
  embedId: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function MediaPage() {
  // Actual videos from Dr. Adrien Chauvet
  const videos = [
    {
      id: "1",
      title: "Grande Mosquée de Strasbourg",
      description: "Lecture at the Grande Mosquée de Strasbourg on the intersection of science and religion.",
      embedId: "ORFzE0gEsuA", // From youtubelinks.txt
    },
    {
      id: "2",
      title: "University of Sheffield's Islamic Society",
      description: "Presentation at the University of Sheffield's Islamic Society discussing the relationship between scientific inquiry and Islamic thought.",
      embedId: "7hsJMPXbTdY", // From youtubelinks.txt
    },
    {
      id: "3",
      title: "Centre Tawhid, Lyon",
      description: "Lecture at Centre Tawhid in Lyon exploring the compatibility of scientific discoveries with religious teachings.",
      embedId: "zwN0jlfqRIw", // From youtubelinks.txt
    },
    {
      id: "4",
      title: "From Science to Faith",
      description: "A comprehensive exploration of the journey from scientific understanding to religious faith.",
      embedId: "tlwZICx2kAk", // From youtubelinks.txt
    },
    {
      id: "5",
      title: "Centre Islamique de Geneve",
      description: "Presentation at the Islamic Center of Geneva discussing the harmony between scientific principles and Islamic teachings.",
      embedId: "Hq0Zfcua8xA", // From youtubelinks.txt
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch lectures and interviews exploring the relationship between science and religion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              embedId={video.embedId}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Additional Media
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Podcasts</h3>
              <p className="text-gray-600 mb-2">
                Listen to discussions on the intersection of science and religion:
              </p>
              <a 
                href="https://open.spotify.com/episode/5KERXRyRN3nDrhhfBpdeya?si=v5jW5trNTMi5n4ZzpbL8Iw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Listen on Spotify →
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 mb-2">
                Follow me for updates and discussions on science and religion:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://youtube.com/@dradrienchauvet?si=iTnUmxrlmIzEpfot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  YouTube Channel
                </a>
                <a 
                  href="https://x.com/DrAdrienChauvet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter/X Profile
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Articles</h3>
              <p className="text-gray-600 mb-2">
                Read academic publications on science and religion:
              </p>
              <a 
                href="https://doi.org/10.35632/ajis.v40i1-2.3175" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Article →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            For more content and updates, follow me on social media and subscribe to my YouTube channel.
          </p>
        </div>
      </div>
    </div>
  );
} 