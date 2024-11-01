import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatDate } from './Utils';

const Post = ({ posts }) => {
  const { post_id } = useParams();
  const navigate = useNavigate();

  // Find the post by post_id or default to the latest post if invalid
  const currentPost = posts.find((p) => p.post_id === parseInt(post_id)) || posts[0];

  if (!posts.length) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      {/* Post Title */}
      <h1 className="text-3xl font-bold text-center mb-4 dark:text-white">
        {currentPost.post_name}
      </h1>

      {/* Post Date */}
      <p className="text-sm text-gray-500 text-center mb-4">
        {'Published on: ' + formatDate(currentPost.post_date) + ' -- ' + currentPost.post_id}
      </p>

      {/* Post Description */}
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-4">
        {currentPost.post_desc}
      </p>

      {/* Post Image */}
      <div className="w-full max-w-4xl mb-4">
        <img
          src={currentPost.post_image}
          alt={currentPost.post_name}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Post Link */}
      <div className="mb-4">
        <a
          href={currentPost.post_link}
          className="text-blue-600 hover:text-blue-800 font-semibold dark:text-blue-400 dark:hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Post
        </a>
      </div>

      {/* Related Links */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-center dark:text-white mb-2">
          Related Links:
        </h2>
        <ul className="list-none space-y-2">
          {currentPost.related_links.map((link, index) => (
            <li key={index} className="truncate text-center">
              <span className="font-semibold dark:text-gray-300">{link.author}:</span>{' '}
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Post;
