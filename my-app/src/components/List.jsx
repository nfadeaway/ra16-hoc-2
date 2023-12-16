import React from 'react';
import Video from './Video.jsx';
import Article from './Article.jsx';
import PopularContent from './PopularContent.jsx';

const List = (props) => {

  let ProcessedContent

  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        ProcessedContent = PopularContent(Video)
        return (
          <ProcessedContent {...item} />
        );

      case 'article':
        ProcessedContent = PopularContent(Article)
        return (
          <ProcessedContent {...item} />
        );
    }
  });
};

export default List;