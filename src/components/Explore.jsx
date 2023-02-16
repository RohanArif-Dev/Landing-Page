import React from 'react';
import Image from 'next/image';

const Explore = () => {
  const cardData = [
    {
      title: 'Card 1',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      colspan: 2,
    },
    {
      title: 'Card 2',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      colspan: 1,
    },
    {
      title: 'Card 3',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      colspan: 1,
    },
    {
      title: 'Card 4',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      colspan: 1,
    },
    {
      title: 'Card 5',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      colspan: 2,
    },
    {
      title: 'Card 6',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      colspan: 1,
    },
    {
      title: 'Card 7',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      colspan: 1,
    },
    {
      title: 'Card 8',
      image: 'https://source.unsplash.com/random/1600x900',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      colspan: 1,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden col-span-${card.colspan}`}>
            <Image src={card.image} alt={card.title} className="h-48 w-full object-cover" height="150" width="2000"/>
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
