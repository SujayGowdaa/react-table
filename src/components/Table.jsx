import {
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getCoreRowModel,
} from '@tanstack/react-table';
import { tableData } from '../data/data';
import { columnsDef } from '../components/columns';
import { useMemo, useState } from 'react';

export default function Table() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  // Memoize the table data using the useMemo hook
  const data = useMemo(() => tableData, []);

  // Memoize the column definitions using the useMemo hook
  const column = useMemo(() => columnsDef, []);

  // Create a table instance using the useReactTable hook
  const table = useReactTable({
    columns: column, // Define the columns for the table using the columnsDef array
    data: data, // Provide the data to be displayed in the table
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {flexRender(
                        // Render the header of the column using the flexRender function
                        header.column.columnDef.header,
                        // Pass the context of the column to the flexRender function for rendering
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {flexRender(
                      // Render the header of the column using the flexRender function
                      cell.column.columnDef.cell,
                      // Pass the context of the column to the flexRender function for rendering
                      cell.getContext()
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => table.setPageIndex(0)}>First</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last
        </button>
      </div>
      <div>
        Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
        {table.getRowCount().toLocaleString()} Rows
      </div>
    </div>
  );
}
