'use client';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Person } from '@/people';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const column: ColumnDef<Person>[] = [
  {
    header: 'Person ID',
    accessorKey: 'id',
  },
  {
    header: 'User Name',
    accessorKey: 'first_name',
  },
  {
    header: 'Room number',
    accessorKey: 'room',
  },
  {
    header: 'Food',
    accessorKey: 'food',
  },
  {
    header: 'Quality',
    accessorKey: 'quality',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const person = row.original;
      const personId = person.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className=" w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(personId.toString());
              }}
            >
              copy person name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
