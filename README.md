# my-react
React Refresher

Things I learnt:
importing custom functions do not need brackets
hooks - normal function used in a component. Name starts with 'use' for a better understanding and clarity
lazy loading - 
    1. use 'lazy' keyword to import that route along with adding it to the 'App' as a path.
    2. wrap your component path in 'suspense' in the 'app' component
    3. add a fallback jsx (or Shimmer ui), so reacts knows what to render when the component is not available

# Types of Testing
    - Unit testing 
    - Integration Testing
    - e2e Testing

# Redux
    - Install @reduxjs/toolkit
    - Install react-redux

# Setting testing environment
    - Install React testing library
    - Install Jest
    - Install Babel dependencies
    - Configure Babel
    - Configure Parcel Config file to disable default babel transpilation
    - Jest Configuration
    - jest-environment-jsdom (for version > Jest 28)
    - Install @babel/preset-react for jest to identify jsx 
    - Update babel.config.js file with this - 
        ['@babel/preset-react', { runtime: 'automatic' }]
    - For jest to interpret an image as binary codes and not js file, mock a file each time an image is imported. (assetsTransformer.js) and update the jest.config.js with this - 
          moduleNameMapper: { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js" }
