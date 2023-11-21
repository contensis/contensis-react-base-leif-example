import { ContentTypeMapping } from '@zengenti/contensis-react-base';
import { entryMapper } from '@zengenti/contensis-react-base/util';
import { ContentTypes } from '~/schema';
import loadable from '@loadable/component';
import { injectSearch } from '~/redux/dynamic';
import { BlogMappings } from '~/pages/blog/blog.mapper';
import { BlogPageProps } from '~/pages/blog/blog';
import { HomePageProps } from '~/pages/home/home';

const Homepage = loadable<HomePageProps>(
  () => import('~/pages/home/home.page')
);
const Blogpage = loadable<BlogPageProps>(
  () => import('~/pages/blog/blog.page')
);

const ContentTypeMappings: ContentTypeMapping[] = [
  {
    contentTypeID: ContentTypes.Homepage,
    component: Homepage,
    injectRedux: injectSearch,
  },
  {
    contentTypeID: ContentTypes.Blog,
    component: Blogpage,
    entryMapper: entryMapper(BlogMappings),
  },
];

export default ContentTypeMappings;
