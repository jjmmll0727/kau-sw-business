import React from 'react';
import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';

const Calendar = () => {
  return <ContentFrame title="캘린더" state={1}></ContentFrame>;
};

export default withHead(Calendar, '');
