import { Play, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const FreeDemoVideos = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [watchedVideos, setWatchedVideos] = useState([]);

  // Sample video data
  const videos = [
    {
      id: 1,
      title: 'Getting Started with Our Platform',
      duration: '8:32',
      category: 'introduction',
      thumbnail: '/thumbnails/intro.jpg',
      watched: watchedVideos.includes(1),
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Core Features Walkthrough',
      duration: '12:45',
      category: 'features',
      thumbnail: '/thumbnails/features.jpg',
      watched: watchedVideos.includes(2),
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Advanced Techniques Tutorial',
      duration: '18:20',
      category: 'tutorials',
      thumbnail: '/thumbnails/tutorial.jpg',
      watched: watchedVideos.includes(3),
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Success Stories from Users',
      duration: '10:15',
      category: 'case-studies',
      thumbnail: '/thumbnails/case-study.jpg',
      watched: watchedVideos.includes(4),
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'introduction', name: 'Introduction' },
    { id: 'features', name: 'Features' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'case-studies', name: 'Case Studies' },
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const markAsWatched = (videoId) => {
    if (!watchedVideos.includes(videoId)) {
      setWatchedVideos([...watchedVideos, videoId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Free Demo Videos</h1>
          <p className="text-gray-300 max-w-2xl">
            Explore our collection of free demo videos to learn how our platform can help you achieve your goals.
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <div 
              key={video.id} 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-all"
                    onClick={() => markAsWatched(video.id)}
                  >
                    <Play className="h-6 w-6" />
                  </a>
                </div>
                {video.watched && (
                  <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {video.duration}
                  </span>
                  {video.watched ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Watched
                    </span>
                  ) : (
                    <span className="text-blue-400 flex items-center gap-1">
                      Watch now <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for the full experience?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Upgrade to our premium plan to unlock all features and access exclusive content.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeDemoVideos;