import React, { createContext, useContext, useMemo } from "react";
import PopularPost from "../../pages/BlogPage/BlogPageCom/BlogAsideSection/BlogAsideData";

// Create a context to provide blog-related data
const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // Extract unique categories with memoization to avoid recalculations
  const uniqueCategories = useMemo(
    () => [...new Set(PopularPost.map((p) => p.categories.trim()))],
    []
  );

  // Extract unique tags with memoization to avoid recalculations
  const uniqueTags = useMemo(
    () => [...new Set(PopularPost.flatMap((p) => p.tags.map((t) => t.trim())))],
    []
  );

  // Context value that contains all blog-related data
  const value = {
    posts: PopularPost,
    categories: uniqueCategories,
    tags: uniqueTags,
  };

  // Provide the context value to children
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

// Custom hook to easily consume blog context
export const useBlog = () => useContext(BlogContext);
