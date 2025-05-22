import { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import axios from "axios";

const BlogPostGrid = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/stories")
      .then(res => {
        setPosts(res?.data)
      })
  }, []);

  console.log(posts);

  return (
    <div className="w-11/12 mx-auto my-10 grid grid-cols-12 gap-5">
      {/*Left-sidbar: Future implementation */}
      <div className="col-span-3">

      </div>
      <div className="col-span-6">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
      {/*Rigt-sidebar: Future implementation */}
      <div className="col-span-3">

      </div>
    </div>
  );
};

export default BlogPostGrid;