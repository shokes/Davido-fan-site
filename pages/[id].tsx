import React from 'react';
import { useRouter } from 'next/router';
import work from '../data';

const WorkDetails = () => {
  const router = useRouter();

  // const { id } = router.query;

  const id = router.query.id as string;

  // console.log(typeof id);

  const project = work.find((item) => +id === item.id);

  console.log(project);

  return <div>WorkDetails{id}</div>;
};

export default WorkDetails;
