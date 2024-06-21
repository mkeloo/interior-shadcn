import Image from 'next/image';
import React from 'react';

const projects = [
  {
    id: 1,
    name: 'Drawing room for family time',
    description:
      'Bedroom with a clean and comfortable design for your family. It is a perfect place for relaxing.',
    image: '/image/project3.jpg',
    link: '',
  },
  {
    id: 2,
    name: 'Kitchen look modern and clean.',
    description:
      'Kitchen look modern and clean. It is a perfect place for cooking.',
    image: '/image/project2.jpg',
    link: '',
  },
  {
    id: 3,
    name: 'Perfect living room for family time',
    description:
      'Living room with a clean and comfortable design for your family. It is a perfect place for relaxing.',
    image: '/image/project4.png',
    link: '',
  },
  // {
  //   id: 4,
  //   name: 'Drawing room for family time',
  //   description:
  //     'Drawing room with a clean and comfortable design for your family. It is a perfect place for relaxing.',
  //   image: '/image/project.jpg',
  //   link: '',
  // },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Projects
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt={project.name}
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/60 flex-col items-centwe justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
