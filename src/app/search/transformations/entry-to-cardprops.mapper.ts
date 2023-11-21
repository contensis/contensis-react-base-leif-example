import { mapEntries } from '@zengenti/contensis-react-base/util';
import type { Entry } from 'contensis-delivery-api/lib/models';

const baseMapping = {
  title: 'entryTitle',
  description: 'entryDescription',
  category: 'category.entryTitle',
  id: 'sys.id',
  path: 'sys.uri',
  image: {
    src: 'thumbnailImage.asset.sys.uri',
    alt: 'thumbnailImage.altText',
  },
};

export const mappers = { default: baseMapping };

const mapEntriesToResults = (entries: Entry[]) => mapEntries(entries, mappers);

export default mapEntriesToResults;
