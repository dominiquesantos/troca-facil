import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Post } from '../types';

interface PostContextData {
  posts: Post[];
  createPost: (data: Omit<Post, 'id' | 'createdAt'>) => void;
  updatePost: (id: string, data: Omit<Post, 'id' | 'createdAt'>) => void;
  deletePost: (id: string) => void;
}

const PostContext = createContext<PostContextData | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'Superando A Procrastinação',
      content: 'Como enfrentar a procrastinação e usar o seu tempo de maneira inteligente.',
      author: 'Prof. Ana Beatriz',
      createdAt: '1 hora atrás',
    },
  ]);

  const createPost = (data: Omit<Post, 'id' | 'createdAt'>) => {
    const newPost: Post = {
      ...data,
      id: Date.now().toString(),
      createdAt: 'Agora mesmo',
    };
    setPosts(prev => [...prev, newPost]);
  };

  const updatePost = (id: string, data: Omit<Post, 'id' | 'createdAt'>) => {
    setPosts(prev => prev.map(post => post.id === id ? { ...post, ...data } : post));
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('usePostContext must be used within a PostProvider');
  return context;
};
