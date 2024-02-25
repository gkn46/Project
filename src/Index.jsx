// src/Index.js
import React from 'react';
import Post from './Post';

function Index() {
  const contents = () => {
    const posts = [
      { id: 1, title: 'Doğa', content: 'Orman', image: 'https://picsum.photos/id/189/600/300' },
      { id: 2, title: 'İş Telaşı', content: 'Kafe', image: 'https://picsum.photos/id/686/600/300' },
      { id: 3, title: 'sessizlik', content: 'Sahil', image: 'https://picsum.photos/id/279/600/300' },
      { id: 4, title: 'Şehir Manzarası', content: 'Kahramanmaraş', image: 'https://picsum.photos/id/420/600/300' },
    ];

    const handleLike = (postId, isLiked) => {
      
      console.log(`${isLiked ? 'Beğenildi' : 'Beğeni kaldırıldı'} - Post ID: ${postId}`);
    };

    const handleComment = (postId, comment) => {
      
      console.log(`Yorum Eklendi - Post ID: ${postId}, Yorum: ${comment}`);
    };

    return (
      <div className="container mt-4" style={{ maxWidth: '600px',}}> 
      <h1 style={{ fontSize: '2rem' }}>Yaşantım.com</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={handleLike} onComment={handleComment} />
      ))}
    </div>
    );
  };

  
  return contents();
}

export default Index;
