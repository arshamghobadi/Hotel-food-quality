import xlsx, { IJsonSheet } from 'json-as-xlsx';
import axios from 'axios';

export async function downloadToExcel() {
  try {
    const response = await axios.get('/api/webhook/getsurvey');

    if (response.status === 200) {
      const data = response.data;

      let columns: IJsonSheet[] = [
        {
          sheet: 'Persons',
          columns: [
            { label: 'Person ID', value: 'id' },
            { label: 'Name', value: 'name' },
            { label: 'Room', value: 'room' },
            { label: 'Food', value: 'food' },
            { label: 'Quality', value: 'quality' },
          ],
          content: data,
        },
      ];

      let settings = {
        fileName: 'People Excel',
      };

      xlsx(columns, settings);
    } else {
      console.error('Failed to fetch data:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
