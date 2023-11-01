import { PeopleDataTable } from './data-table';
import { column } from './column';
import { people } from '@/people';

const PeoplePage = () => {
  return <PeopleDataTable columns={column} data={people} />;
};

export default PeoplePage;
