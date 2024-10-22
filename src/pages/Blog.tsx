import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<BlogPost[]>('/api/blog');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;