import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-primary-text p-4 mt-auto border-t border-border">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} AJayji. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;