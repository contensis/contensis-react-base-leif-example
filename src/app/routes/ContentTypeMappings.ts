import { ContentTypeMapping } from '@zengenti/contensis-react-base';
import { entryMapper } from '@zengenti/contensis-react-base/util';
import { ContentTypes } from '~/schema';
import loadable from '@loadable/component';
import { BlogMappings } from '~/pages/blog/blog.mapper';
import { BlogPageProps } from '~/pages/blog/blog';

const Blogpage = loadable<BlogPageProps>(
  () => import(/* webpackChunkName: "blog-page" */ '~/pages/blog/blog.page')
);

const ContentTypeMappings: ContentTypeMapping[] = [
  {
    contentTypeID: ContentTypes.Blog,
    component: Blogpage,
    entryMapper: entryMapper(BlogMappings),
  },
];

export default ContentTypeMappings;
