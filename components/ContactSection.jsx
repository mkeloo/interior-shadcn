'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small it is. Highly recommended!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: '4.7', href: '#' },
    author: {
      name: 'Natasha',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/image/profile1.jpg',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'I have been using it for several years now and I am always satisfied with the results. It helped me to increase my conversion rate and customer engagement. The customer service is very responsive and always helpful. Highly recommended!',
    date: 'Jan 23, 2022',
    datetime: '2022-01-23',
    category: { title: '4.7', href: '#' },
    author: {
      name: 'Michael Chris',
      role: 'Co-Founder / CEO',
      href: '#',
      imageUrl: '/image/profile2.jpg',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'From all point of views, this theme is a great choice. It is easy to use, the design is great and the customer service is also very good. All the features are very well thought and implemented. Highly recommended!',
    date: 'Oct 12, 2024',
    datetime: '2024-10-12',
    category: { title: '4.2', href: '#' },
    author: {
      name: 'Samuel Smith',
      role: 'Co-Founder / COO',
      href: '#',
      imageUrl: '/image/profile3.jpg',
    },
  },
];

export default function ContactSection() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={'onscreen'}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={'onscreen'}
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground"
        >
          Learn how to grow your business with our expert advice.
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime={post.datetime}>
                  <Image src="/image/star.svg" width={80} height={5} />
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white text-sm px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all duration-200 ease-in-out"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
