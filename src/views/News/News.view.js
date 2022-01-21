import React from 'react';
import CardNews from '../../components/CardNews/CardNews.component';

import { generalStyles } from './News.styles';

export default function News() {
  const classes = generalStyles();

  return <CardNews />;
}
