export const projects = [
  {
    slug: 'timeless-vacation',
    title: 'Timeless Vacation',
    category: 'Website Design & Development',
    year: '2023',
    description:
      'A luxury travel agency platform designed to transport users to their destination before they even book. The goal was to create an immersive visual experience using high-quality imagery and smooth motion interactions.',
    services: ['UI/UX Design', 'Next.js Development', 'GSAP Animation'],
    link: 'https://timeless-vacation.com/',
    coverImage: '/images/showcase-01.jpg', // Make sure these exist in public/images/
    gallery: [
      '/images/showcase-01.jpg',
      '/images/showcase-06.jpg', // Replace with real project inner pages
    ],
  },
  {
    slug: 'ruma',
    title: 'Ruma Home',
    category: 'E-Commerce Platform',
    year: '2024',
    description:
      'A modern furniture e-commerce experience focusing on minimalism and accessibility. We streamlined the checkout process and implemented a 3D product viewer.',
    services: ['Shopify Integration', 'Frontend Dev', 'Performance Tuning'],
    link: 'https://ruma-home.com/',
    coverImage: '/images/showcase-06.jpg',
    gallery: ['/images/showcase-06.jpg', '/images/showcase-03.jpg'],
  },
  // Add other projects here...
];
