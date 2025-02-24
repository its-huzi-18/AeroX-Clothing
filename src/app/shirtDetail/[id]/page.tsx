import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => { 
  return (
    <div>{params.id}</div>
  );
};

export default Page;
