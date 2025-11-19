import { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

import aboutFile from '../files/about.md';

const AboutSection = () => {
  const [aboutContent, setAboutContent] = useState('');

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const response = await fetch(aboutFile);
        const text = await response.text();
        setAboutContent(text);
      } catch (error) {
        // Gracefully degrade if fetch fails.
        setAboutContent('About content is unavailable right now.');
      }
    };

    loadAbout();
  }, []);

  return (
    <>
      <ReactMarkdown>{aboutContent}</ReactMarkdown>
    </>
  );
};

export default AboutSection;
