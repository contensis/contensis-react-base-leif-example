import React from 'react';

interface MarkupProps {
  _type: 'markup';
  text: string;
}
interface ImageProps {
  _type: 'image';
  src: string;
  alt: string;
  caption: string;
}

export interface BlogComposerProps {
  items: BlogComposerItemProps;
}

export type BlogComposerItemProps = MarkupProps | ImageProps;

const BlogComposer = ({ items }: BlogComposerProps) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <div className="composer__blog">
      {items.map((props: BlogComposerItemProps, i: number) => {
        if (!props._type) return null;

        if (props._type === 'markup') {
          return (
            <div
              key={`${props._type}-${i}`}
              dangerouslySetInnerHTML={{ __html: props.text }}
            />
          );
        }
        if (props._type === 'image') {
          return (
            <figure key={`${props._type}-${i}`} style={{ margin: 0 }}>
              <img
                src={props.src}
                alt={props.alt}
                style={{ maxWidth: '100%', width: '100%' }}
              />
              {props.caption && (
                <figcaption style={{ margin: '8px 0 0 0' }}>
                  {props.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        console.error(`Composer Component ${(props as any)._type} not found!`);
        return <></>;
      })}
    </div>
  );
};

export default BlogComposer;
