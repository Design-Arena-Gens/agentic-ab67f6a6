"use client";

import { useState } from 'react';
import { Play, Heart, Share2, Youtube, Instagram, Sparkles, Star } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  platform: 'tiktok' | 'instagram' | 'youtube';
  views: string;
  likes: string;
  hookLine: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title: "Noé e o Arco-Íris Mágico 🌈",
    description: "Descubra como Noé salvou todos os animais em uma aventura incrível! Cada segundo é uma surpresa!",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "0:45",
    platform: "tiktok",
    views: "125K",
    likes: "15.2K",
    hookLine: "Você não vai acreditar no que acontece nos primeiros 3 segundos! 🤯"
  },
  {
    id: 2,
    title: "Davi vs Golias: A Pedra Voadora ⚡",
    description: "Um garoto corajoso enfrenta o gigante mais assustador! Ação desde o primeiro segundo!",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "0:50",
    platform: "instagram",
    views: "98K",
    likes: "12.8K",
    hookLine: "A pedra voa em CÂMERA LENTA! Épico demais! 🎯"
  },
  {
    id: 3,
    title: "Jonas e a Baleia Gigante 🐋",
    description: "Uma viagem submarina que você nunca esquecerá! Prepare-se para se surpreender!",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "1:30",
    platform: "youtube",
    views: "250K",
    likes: "28.5K",
    hookLine: "Nos 3 primeiros segundos você já está dentro da baleia! 🌊"
  },
  {
    id: 4,
    title: "Moisés e o Mar que se Abriu 🌊",
    description: "Efeitos visuais impressionantes! O mar se divide ao meio de um jeito ÉPICO!",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "0:55",
    platform: "tiktok",
    views: "180K",
    likes: "22.1K",
    hookLine: "O mar se abre em 3D ULTRA REALISTA! Você VAI pausar para ver de novo! 😱"
  },
  {
    id: 5,
    title: "Daniel na Cova dos Leões 🦁",
    description: "Coragem, amizade e leões fofos mas assustadores! Uma história emocionante!",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "0:48",
    platform: "instagram",
    views: "142K",
    likes: "18.9K",
    hookLine: "Daniel olha nos olhos do leão e... ESPERA! O que?! 🦁✨"
  },
  {
    id: 6,
    title: "José e o Manto Colorido 🎨",
    description: "Sonhos, aventuras e um final emocionante! Cada episódio conecta com o próximo!",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "1:15",
    platform: "youtube",
    views: "195K",
    likes: "24.3K",
    hookLine: "O manto BRILHA de verdade! Animação 3D de cinema! 🌟"
  }
];

export default function Home() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [likedEpisodes, setLikedEpisodes] = useState<Set<number>>(new Set());

  const handleLike = (episodeId: number) => {
    setLikedEpisodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(episodeId)) {
        newSet.delete(episodeId);
      } else {
        newSet.add(episodeId);
      }
      return newSet;
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return <Youtube className="w-5 h-5 text-red-600" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      default:
        return <Play className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 animate-pulse-soft text-yellow-300" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Histórias Bíblicas 3D
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            ✨ Animações cativantes que prendem sua atenção desde os 3 primeiros segundos!
            Doces, alegres e divertidas para toda família! ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">+500K Visualizações</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-300" />
              <span className="font-semibold">+80K Curtidas</span>
            </div>
          </div>
        </div>
      </header>

      {/* Episodes Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            🎬 Episódios Disponíveis
          </h2>
          <p className="text-lg text-gray-600">
            Cada episódio é uma nova aventura! Assista um e não conseguirá parar! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <div
              key={episode.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden video-card-hover cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedEpisode(episode)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-12 h-12 text-purple-600" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {episode.duration}
                </div>
                <div className="absolute top-4 left-4">
                  {getPlatformIcon(episode.platform)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {episode.title}
                </h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-3 rounded">
                  <p className="text-sm font-semibold text-yellow-800">
                    {episode.hookLine}
                  </p>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {episode.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {episode.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {episode.likes} likes
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(episode.id);
                    }}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      likedEpisodes.has(episode.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Heart
                      className="w-5 h-5 inline mr-2"
                      fill={likedEpisodes.has(episode.id) ? 'currentColor' : 'none'}
                    />
                    Curtir
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert('Compartilhamento em breve!');
                    }}
                    className="px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse-soft" />
          <h3 className="text-3xl font-bold mb-4">
            Quer mais episódios incríveis?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Novos episódios toda semana! Histórias que tocam o coração e prendem a atenção!
            Siga nas redes sociais para não perder nenhum! 🎉
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              <Youtube className="w-6 h-6" />
              YouTube
            </button>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              <Instagram className="w-6 h-6" />
              Instagram
            </button>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              <Play className="w-6 h-6" />
              TikTok
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedEpisode && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedEpisode(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-24 h-24 mx-auto mb-4" />
                <p className="text-2xl font-bold">{selectedEpisode.title}</p>
                <p className="mt-2 text-lg">Vídeo será carregado aqui!</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedEpisode.title}</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                <p className="font-semibold text-yellow-800">
                  {selectedEpisode.hookLine}
                </p>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{selectedEpisode.description}</p>
              <button
                onClick={() => setSelectedEpisode(null)}
                className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400" />
          </div>
          <h4 className="text-2xl font-bold mb-4">Histórias Bíblicas 3D</h4>
          <p className="text-gray-400 mb-6">
            Conectando corações através de histórias animadas cativantes! ✨
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Histórias Bíblicas 3D. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
