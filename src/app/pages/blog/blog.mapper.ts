import { BlogHeroMappings } from '~/components/blogHero/blogHero.mapper';
import { BlogComposerPropsMapping } from '~/components/composer/blog.composer.mapper';
import { mapComposer } from '@zengenti/contensis-react-base/util';
import { AvatarMappings } from '~/components/avatar/avatar.mapper';
import { LeadParagraphMappings } from '~/components/leadParagraph/leadParagraph.mapper';

export const BlogMappings = {
  heroProps: BlogHeroMappings,
  avatarProps: AvatarMappings,
  leadParagraphProps: LeadParagraphMappings,
  composerProps: {
    items: ({ postBody }: any) =>
      mapComposer(postBody, BlogComposerPropsMapping),
  },
};
