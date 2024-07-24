import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'task', headerName: 'Task', width: 300 },
];

const rows = [
  { id: 1, task: 'do homework'},
  { id: 2, task: 'do homework'},
  { id: 3, task: 'do homework'},
  { id: 4, task: 'do homework'},
  { id: 5, task: 'do homework'},
  { id: 6, task: 'do homework'},
  { id: 7, task: 'do homework'},
  { id: 8, task: 'do homework'},
  { id: 9, task: 'do homework'},
  { id: 10, task: 'do homework'},
];

export default function TodoTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
