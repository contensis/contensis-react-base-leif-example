import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';
import styled, { css } from 'styled-components';

import {
  UseMinilistProps,
  useMinilist,
} from '@zengenti/contensis-react-base/search';
import mappers from '~/search/transformations';
import { CardProps } from '~/components/blogCard/blogCard';

const Header = loadable(() => import(/* webpackChunkName: "header-component" */'~/components/header/header'));
const Hero = loadable(() => import(/* webpackChunkName: "hero-component" */'~/components/hero/hero'));
const Blogs = loadable(() => import(/* webpackChunkName: "blogs-component" */'~/components/blogListing/blogListing'));
const Footer = loadable(() => import(/* webpackChunkName: "footer-component" */'~/components/footer/footer'));

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
      <HomeStyled>
        <Hero title="Our blogs" />
        <Blogs blogs={results} />
      </HomeStyled>
      <Footer />
    </>
  );
};

export default Homepage;

const HomeStyled = styled.main`
  ${() => {
    return css``;
  }}
`;
