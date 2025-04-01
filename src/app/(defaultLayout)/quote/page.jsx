"use client";

import React from 'react';

import Quote from '../../Components/Quote/Quote';

const App = () => {
    const handleCompletion = (answers) => {
      console.log("User's responses:", answers);
    };

    return (
        <div className="flex items-center justify-center h-screen quote-outer">
          <Quote onComplete={handleCompletion} />
        </div>
      );
    };
    
    export default App;