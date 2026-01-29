import React from "react";
import { Search, ChevronLeft } from "lucide-react";
import { LATEST_B_POSTS } from "../constants";

const PostScreen: React.FC = () => {
  return (
    <div className="h-full bg-white overflow-y-auto no-scrollbar pb-20">
      {/* Header */}
      <div className="p-4 bg-white sticky top-0 z-20">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-white border shadow-sm flex items-center justify-center text-black">
            <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
          </div>
          <div className="flex-1 h-10 bg-white rounded-full border shadow-sm flex items-center px-4 space-x-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <button className="p-2">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">B Trip 推薦行程</h1>
        </div>
      </div>

      {/* Latest B-Class Section */}
      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">最新B級</h2>
        </div>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          {LATEST_B_POSTS.map((post) => (
            <div key={post.id} className="min-w-[160px] max-w-[160px] space-y-2">
              <div className="aspect-[4/3] bg-gray-100 rounded-xl border flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                <img
                  src={post.image}
                  className="w-full h-full object-cover"
                  alt={post.title}
                />
              </div>
              <div>
                <p className="text-sm font-bold truncate">{post.title}</p>
                <p className="text-[10px] text-gray-400 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
          <div className="min-w-[80px] flex items-center justify-center">
            <button className="px-4 py-1.5 border border-black rounded-full text-xs font-bold">
              更多
            </button>
          </div>
        </div>
      </section>

      {/* Weirdo Posts Section */}
      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">怪達人Po文</h2>
        </div>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          {LATEST_B_POSTS.slice()
            .reverse()
            .map((post) => (
              <div
                key={`w-${post.id}`}
                className="min-w-[160px] max-w-[160px] space-y-2"
              >
                <div className="aspect-[4/3] bg-gray-100 rounded-xl border flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover"
                    alt={post.title}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold truncate">{post.author}</p>
                  <p className="text-[10px] text-gray-400 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          <div className="min-w-[80px] flex items-center justify-center">
            <button className="px-4 py-1.5 border border-black rounded-full text-xs font-bold">
              更多
            </button>
          </div>
        </div>
      </section>

      {/* My Post Creation Card */}
      <section className="px-4 mb-8">
        <h2 className="text-lg font-bold mb-4">My Post</h2>
        <div className="border-2 border-dashed border-gray-200 rounded-3xl p-10 flex flex-col items-center justify-center space-y-4">
          <p className="text-lg font-bold">來吧!分享你的B Trip</p>
          <button className="px-6 py-2 border border-black rounded-full text-sm font-bold flex items-center space-x-2 hover:bg-black hover:text-white transition-colors">
            <span>開始創作</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default PostScreen;
