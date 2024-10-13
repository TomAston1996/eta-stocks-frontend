import React from 'react';

import { CollapsibleSection } from './CollapsibleSection';

export const Changelog = () => {
  const title1 = '12/10/2024';
  const description1 = '12/10/2024: \nInitial commit with changelog implementation.';

  return (
    <>
      <CollapsibleSection title={title1} body={description1} />
    </>
  );
};
