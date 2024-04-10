import { useReactTable, flexRender } from '@tanstack/react-table';
import { tableData } from '../data/data';
import { columnsDef } from '../components/columns';
import React from 'react';

export default function Table() {
  // Memoize the table data using the useMemo hook
  const data = React.useMemo(() => tableData, []);

  // Memoize the column definitions using the useMemo hook
  const column = React.useMemo(() => columnsDef, []);

  // Create a table instance using the useReactTable hook
  const table = useReactTable({
    columns: column, // Define the columns for the table using the columnsDef array
    data: data, // Provide the data to be displayed in the table
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((header) => {
            return (
              <tr key={header.id}>
                {header.headers.map((column) => {
                  return (
                    <th key={column.id}>
                      {flexRender(
                        // Render the header of the column using the flexRender function
                        column.column.columnDef.header,
                        // Pass the context of the column to the flexRender function for rendering
                        column.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}
