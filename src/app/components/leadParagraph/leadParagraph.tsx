import React from 'react';
import styles from './leadParagraph.module.css';

export interface LeadParagraphProps {
  lead: string;
}

const LeadParagraph = ({ lead }: LeadParagraphProps) => {
  return <p className={styles.lead}>{lead}</p>;
};

export default LeadParagraph;
