// Define an array containing column definitions for a table
export const columnsDef = [
  // Column for displaying the 'id' attribute
  {
    accessorKey: 'id', // Key to access the 'id' attribute in the data
    header: 'id', // Header text displayed for this column
  },
  {
    accessorFn: (value) => `${value.first_name} ${value.last_name}`,
    header: 'full name', // Header text displayed for this column
    cell: (value) => value.getValue().replace(' ', '-'), // the cell property is used to customize the rendering of individual cells within the table. It allows you to define how the content of each cell should be displayed based on the data in that cell. for eg: here we are replacing spaces with hyphens...
  },
  {
    accessorKey: 'first_name', // Key to access the 'first_name' attribute in the data
    header: 'first name', // Header text displayed for this column
  },
  // Column for displaying the 'last_name' attribute
  {
    accessorKey: 'last_name', // Key to access the 'last_name' attribute in the data
    header: 'last name', // Header text displayed for this column
  },

  // Column for displaying the 'email' attribute
  {
    accessorKey: 'email', // Key to access the 'email' attribute in the data
    header: 'email', // Header text displayed for this column
  },
  // Column for displaying the 'gender' attribute
  {
    accessorKey: 'gender', // Key to access the 'gender' attribute in the data
    header: 'gender', // Header text displayed for this column
  },
  // Column for displaying the 'ip_address' attribute
  {
    accessorKey: 'ip_address', // Key to access the 'ip_address' attribute in the data
    header: 'address', // Header text displayed for this column
  },
  // Column for displaying the 'phone' attribute
  {
    accessorKey: 'phone', // Key to access the 'phone' attribute in the data
    header: 'phone', // Header text displayed for this column
  },
  // Column for displaying the 'date' attribute
  {
    accessorKey: 'date', // Key to access the 'date' attribute in the data
    header: 'date', // Header text displayed for this column
  },
];

// Another way to create the column for displaying the 'header'.

/*
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

export const columnsDef2 = [
  // Column for displaying the 'id' attribute
  {
    columnHelper.accessor('id', {
      header: 'column id',
    })
  },
];

*/

/*
  // Column for displaying the 'full name' merging data of first name and last name...
  {
    accessorFn: (value) => `${value.first_name} ${value.last_name}`,
    header: 'full name', // Header text displayed for this column
  },

*/
