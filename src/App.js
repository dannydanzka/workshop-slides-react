import React from 'react';

import Slides from './components/slides';

const images = [
    {
        src:
            "https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Beatiful Eyes",
    },
    {
        src:
            "https://images.pexels.com/photos/3623309/pexels-photo-3623309.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Black woman",
    },
    {
        src:
            "https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Chine building",
    },
];

function App() {
    return (
        <div>
            <Slides interval={2000} images={images} />
        </div>
    );
}

export default App;
