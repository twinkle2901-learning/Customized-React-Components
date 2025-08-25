import React from 'react';

import './App.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="container-xl">

        <h1>testing</h1>

        <div className="grid md:grid-cols-2 gap-4">

          {/* Font Sizes */}
          <div className="space-y-4">
            <div className="text-5xl">5xl: 3rem | 48px</div>
            <div className="text-4xl">4xl: 2.25rem | 36px</div>
            <div className="text-3xl">3xl: 1.875rem | 30px</div>
            <div className="text-2xl">2xl: 1.5rem | 24px</div>
            <div className="text-xl">xl: 1.25rem | 20px</div>
            <div className="text-lg">lg: 1.125rem | 18px</div>
            <div className="text-base">base: 1rem | 16px</div>
            <div className="text-sm">sm: 0.875rem | 14px</div>
            <div className="text-xs">xs: 0.75rem | 12px</div>
          </div>

          {/* Font weight */}
          <div className="space-y-4">
            <p className="font-light">Roboto Light (300)</p>
            <p className="font-normal">Roboto Regular (400)</p>
            <p className="font-medium">Roboto Medium (500)</p>
            <p className="font-bold">Roboto Bold (700)</p>
          </div>

          {/* Colors defined in tailwind.config.js */}
          <div className="space-y-4">
            <div className="bg-primary text-white p-4 text-2xl">Primary</div>
            <div className="bg-primary-dark text-white p-4">Primary Dark</div>
            <div className="bg-primary-light text-black p-4">Primary Light</div>
          </div>

          {/* FontAwesome icons */}
          <div>
            {/* Css selector */}
            <p className="fa-user">
              User Profile
            </p>

            <p>
              <FontAwesomeIcon icon={faUser} className="text-blue-500 mr-2" />
              User Profile
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
