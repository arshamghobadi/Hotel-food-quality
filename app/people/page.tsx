import { PeopleDataTable } from './data-table';
import { column } from './column';

import prisma from '../../lib/prismadb';
const PeoplePage = async () => {
  const listingServuy = await prisma.survey.findMany();

  return <PeopleDataTable columns={column} data={listingServuy} />;
};

export default PeoplePage;
