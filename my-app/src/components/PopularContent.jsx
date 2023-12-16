import React from 'react';
import New from './New.jsx';
import Popular from './Popular.jsx';

const PopularContent = (WrappedComponent) => {
  const ProcessedContent = props => {
    console.log(props)
    if (props.views >= 1000) {
      return (
        <Popular>
          <WrappedComponent {...props} />
        </Popular>
      );
    } else if (props.views < 100) {
      return (
        <New>
          <WrappedComponent {...props} />
        </New>
      );
    } else {
      return (
        <>
          <WrappedComponent {...props} />
        </>
      );
    }
  }
  return ProcessedContent;
};

export default PopularContent;