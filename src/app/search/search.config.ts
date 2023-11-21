import {
  SearchConfig,
  SearchFacet,
  Listing,
} from '@zengenti/contensis-react-base/search';

import { BlogFields, ContentTypes } from '~/schema';

export const config = {
  tabs: [{}],
  facets: {} as { [key: string]: SearchFacet },
  listings: {} as { [key: string]: Listing },
  minilist: {
    blogs: {
      title: 'Blogs',
      queryParams: {
        contentTypeIds: [ContentTypes.Blog],
        fields: [...BlogFields],
        pageSize: 9,
      },
    },
  } as { [key: string]: Listing },
} as SearchConfig;
