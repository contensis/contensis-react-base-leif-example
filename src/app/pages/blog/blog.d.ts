import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { AvatarProps } from '~/components/avatar/avatar';
import { BlogHeroProps } from '~/components/blogHero/blogHero';
import { BlogComposerProps } from '~/components/composer/blog.composer';
import { LeadParagraphProps } from '~/components/leadParagraph/leadParagraph';

export interface MappedBlogPage {
  heroProps: BlogHeroProps;
  avatarProps: AvatarProps;
  leadParagraphProps: LeadParagraphProps;
  composerProps: BlogComposerProps;
}

export type BlogPageProps = RouteComponentProps<MappedBlogPage>;
