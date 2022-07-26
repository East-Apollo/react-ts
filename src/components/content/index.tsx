import React from 'react';

const Content: React.FC = () => {
  return <div>{'Content'}</div>;
};

Content.displayName = 'Content';

export default React.memo(Content);
