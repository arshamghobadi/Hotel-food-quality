import React from 'react';
import { PeopleDataTable } from './data-table';
import { column } from './column';
import { people } from '@/people';

type Props = {};

const PeoplePage = (props: Props) => {
  return <PeopleDataTable columns={column} data={people} />;
};

export default PeoplePage;
