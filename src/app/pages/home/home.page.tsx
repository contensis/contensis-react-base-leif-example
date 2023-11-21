import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';

import {
  UseMinilistProps,
  useMinilist,
} from '@zengenti/contensis-react-base/search';
import mappers from '~/search/transformations';
import { CardProps } from '~/components/blogCard/blogCard';

const Header = loadable(() => import('~/components/header/header'));
const Hero = loadable(() => import('~/components/hero/hero'));
const Blogs = loadable(() => import('~/components/blogListing/blogListing'));
const Footer = loadable(() => import('~/components/footer/footer'));

const InitalState = { id: '', mapper: (e: any = []) => e } as UseMinilistProps;

const Homepage = () => {
  const [blogsConfig, setBlogsConfig] = useState(InitalState);
  useEffect(() => {
    setTimeout(() => {
      setBlogsConfig({
        id: 'blogs',
        mapper: mappers.results,
      });
    }, 500);
  }, []);

  const { results } = useMinilist<CardProps>(blogsConfig);

  return (
    <>
      <Header />
      <main>
        <Hero title="Our blogs" />
        <Blogs blogs={results} />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
