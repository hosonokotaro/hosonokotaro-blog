import React, { useState } from 'react';
import { db } from '../adapter';

const AddPost: React.FC = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  return (
    <div>
      <h2>AddPost</h2>
    </div>
  );
};

export default AddPost;
