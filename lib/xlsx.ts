import { people } from '@/people';
import xlsx, { IJsonSheet } from 'json-as-xlsx';

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: 'Persons',
      columns: [
        { label: 'Person ID', value: 'id' },
        { label: 'Name', value: 'first_name' },
        { label: 'Room', value: 'room' },
        { label: 'Food', value: 'food' },
        { label: 'Quality', value: 'quality' },
      ],
      content: people,
    },
  ];

  let settings = {
    fileName: 'People Excel',
  };
  xlsx(columns, settings);
}
