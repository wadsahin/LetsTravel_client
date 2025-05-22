import React, { useState } from "react";
import { Heart, MapPin, MessageCircle, UserPlus, Users } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// /**
//  * A card component to display blog post content
//  * @param {Object} props
//  * @param {import('../types/blogPost').BlogPost} props.post - The blog post to display
//  */

const BlogPostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(10); //post.likes
  const [isFollowed, setIsFollowed] = useState(post.author.isFollowed);
  const [followerCount, setFollowerCount] = useState(120); //post.author.followers
  const [isExpanded, setIsExpanded] = useState(false);
  const [openComment, setOpenComment] = useState(false);

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleFollowToggle = () => {
    if (isFollowed) {
      setFollowerCount((prev) => prev - 1);
    } else {
      setFollowerCount((prev) => prev + 1);
    }
    setIsFollowed(!isFollowed);
  };

  const formattedDate = post.date
    ? formatDistanceToNow(new Date(post.date), { addSuffix: true })
    : "";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg w-full mb-5">
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h2>
          <button
            onClick={handleLikeToggle}
            className="flex items-center space-x-1 focus:outline-none"
            aria-label={isLiked ? "Unlike post" : "Like post"}
          >
            <Heart
              size={20}
              className={`transition-colors duration-300 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
            />
            <span className="text-sm text-gray-600">{likeCount}</span>
          </button>
        </div>

        <div className="flex items-center mb-4">
          <MapPin size={16} className="text-primary mr-1" />
          <span className="text-primary text-sm font-medium">
            {post.destination}
          </span>
        </div>

        <p className="text-gray-600 mb-4 text-sm">
          {isExpanded
            ? post.description
            : `${post.description.substring(0, 120)}...`}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-medium ml-1 focus:outline-none"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </p>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={post?.author?.avatar}
                alt={post?.author?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500">{formattedDate}</p>
              </div>
            </div>
            {/* comment button */}
            <div onClick={() => setOpenComment(!openComment)} className="flex items-center gap-1 cursor-pointer">
              <MessageCircle size={22} className="-rotate-90" />
              <span>Comment</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <Users size={16} className="text-gray-400 mr-1" />
                <span className="text-xs text-gray-500">{followerCount}</span>
              </div>
              <button
                onClick={handleFollowToggle}
                className={`flex space-x-1 rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${isFollowed ? "bg-gray-100 text-gray-800 hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"}`}
              >
                <UserPlus size={14} />
                <span>{isFollowed ? "Following" : "Follow"}</span>
              </button>
            </div>
          </div>
          {/* comment box */}
          <div className={`bg-slate-100 border-2 mt-4 rounded-full ${openComment ? "" : "hidden"}`}>
            <form action="" className="flex relative items-center">
              <input placeholder="Please comment..." className="w-full rounded-full p-2" name="" id="" />
              <button className="btn btn-sm bg-blue-500 text-white absolute right-2 rounded-xl">post</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;