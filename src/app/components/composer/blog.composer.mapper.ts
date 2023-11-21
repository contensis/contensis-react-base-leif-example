import { BlogComposerComponents } from '~/schema';

export const MarkupMapper = { text: '.' };

export const ImageMapper = {
  src: 'asset.sys.uri',
  alt: 'asset.altText',
  caption: 'asset.caption',
};

export const BlogComposerPropsMapping = {
  [BlogComposerComponents.Markup]: MarkupMapper,
  [BlogComposerComponents.Image]: ImageMapper,
};
