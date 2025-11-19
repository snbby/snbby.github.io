import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import blogPostUrl from '../files/post_the_philosophy_of_software_design.md';
import PageLayout from '../components/PageLayout';

import './Blog.css';

const Blog = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(blogPostUrl)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      });
  }, []);

  return (
    <PageLayout maxWidth="768px" sx={{ pb: 6 }}>
      <Button
        component={RouterLink}
        to="/"
        variant="text"
        color="primary"
        className="blog-back"
      >
        {'< Back to Home'}
      </Button>
      <Box className="blog-card">
          <ReactMarkdown className="blog-content">{content}</ReactMarkdown>
      </Box>
    </PageLayout>
  );
};

export default Blog;
