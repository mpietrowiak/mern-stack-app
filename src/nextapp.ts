import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const nextapp = next({ 
  dev,
  dir: 'frontend'
});

export default nextapp;