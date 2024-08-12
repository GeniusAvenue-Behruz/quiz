import React from 'react';

function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-8 py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex w-full lg:w-1/2 justify-center lg:justify-start lg:pl-4">
          <p className="text-gray-900 text-center lg:text-left">
            ©2024 Educational Quizzes - All Rights Reserved
          </p>
        </div>
        <div className="flex w-full lg:w-1/2 lg:justify-end justify-center">
          <a href="#" className="text-gray-900 lg:mr-6">Privacy</a>
          <a href="#" className="text-gray-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
