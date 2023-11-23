import React from 'react';
import styled, { css } from 'styled-components';

export interface LeadParagraphProps {
  lead: string;
}

const LeadParagraph = ({ lead }: LeadParagraphProps) => {
  return <LeadParagraphStyled>{lead}</LeadParagraphStyled>;
};

export default LeadParagraph;

const LeadParagraphStyled = styled.p`
  ${() => {
    return css`
      font-family: 'Source Serif Pro', serif;
      font-size: 1.375rem;
      font-weight: 600;
      line-height: 2rem;
      margin: 40px auto 24px;
      max-width: 720px;
      width: 100%;
    `;
  }}
`;
