// import React from "react";
// import { Key } from '@react-types/shared';
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Input,
//   Button,
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Chip,
//   User,
//   Pagination,
//   Selection,
// } from "@nextui-org/react";
// import { PlusIcon } from "./plus-icon";
// import { VerticalDotsIcon } from "./vertical-dots-icon";
// import { SearchIcon } from "./search-icon";
// import { ChevronDownIcon } from "./chevron-icon";
// import { columns, users, statusOptions } from "./data";
// import { capitalize } from "./utils";

// type UserType = {
//   id: number;
//   name: string;
//   role: string;
//   team: string;
//   status: string;
//   age: string;
//   avatar: string;
//   email: string;
// };

// type ColumnType = {
//   name: string;
//   uid: string;
//   sortable?: boolean;
// };

// type SortDescriptor = {
//   column?: keyof UserType | "actions";
//   direction: "ascending" | "descending";
// };

// const statusColorMap: { [key: string]: "success" | "danger" | "warning" | "default" | "primary" | "secondary" | undefined } = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

// const INITIAL_VISIBLE_COLUMNS: string[] = ["name", "role", "status", "actions"];

// export default function App() {
//   const [filterValue, setFilterValue] = React.useState<string>("");
//   const [selectedKeys, setSelectedKeys] = React.useState<Set<React.Key>>(new Set([]));
//   const [visibleColumns, setVisibleColumns] = React.useState<Set<string>>(new Set(INITIAL_VISIBLE_COLUMNS));
//   const [statusFilter, setStatusFilter] = React.useState<Set<string>>(new Set(["all"]));
//   const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
//   const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
//     column: "age",
//     direction: "ascending",
//   });
//   const [page, setPage] = React.useState<number>(1);

//   const selectedKeysIterable: Iterable<Key> = selectedKeys;

//   const hasSearchFilter = Boolean(filterValue);

//   const headerColumns = React.useMemo(() => {
//     if (visibleColumns.size === columns.length) return columns;
//     return columns.filter((column) => visibleColumns.has(column.uid));
//   }, [visibleColumns]);

//   const filteredItems = React.useMemo(() => {
//     let filteredUsers = [...users];
//     if (hasSearchFilter) {
//       filteredUsers = filteredUsers.filter((user) =>
//         user.name.toLowerCase().includes(filterValue.toLowerCase())
//       );
//     }
//     if (!statusFilter.has("all") && statusFilter.size !== statusOptions.length) {
//       filteredUsers = filteredUsers.filter((user) =>
//         statusFilter.has(user.status)
//       );
//     }
//     return filteredUsers;
//   }, [filterValue, statusFilter]);

//   const pages = Math.ceil(filteredItems.length / rowsPerPage);

//   const items = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     return filteredItems.slice(start, end);
//   }, [page, filteredItems, rowsPerPage]);

//   const sortedItems = React.useMemo(() => {
//     return [...items].sort((a, b) => {
//       if (sortDescriptor.column === "actions") {
//         return 0;
//       }
//       const first = a[sortDescriptor.column as keyof UserType];
//       const second = b[sortDescriptor.column as keyof UserType];
//       const cmp = first < second ? -1 : first > second ? 1 : 0;
//       return sortDescriptor.direction === "descending" ? -cmp : cmp;
//     });
//   }, [sortDescriptor, items]);

//   const renderCell = React.useCallback((user: UserType, columnKey: keyof UserType | "actions") => {
//     const cellValue = user[columnKey as keyof UserType];
//     switch (columnKey) {
//       case "name":
//         return (
//           <User
//             avatarProps={{ radius: "lg", src: user.avatar }}
//             description={user.email}
//             name={cellValue}
//           >
//             {user.email}
//           </User>
//         );
//       case "role":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-small capitalize">{cellValue}</p>
//             <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
//           </div>
//         );
//       case "status":
//         return (
//           <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
//             {cellValue}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <div className="relative flex justify-end items-center gap-2">
//             <Dropdown>
//               <DropdownTrigger>
//                 <Button isIconOnly size="sm" variant="light">
//                   <VerticalDotsIcon className="text-default-300" width={undefined} height={undefined} />
//                 </Button>
//               </DropdownTrigger>
//               <DropdownMenu>
//                 <DropdownItem>View</DropdownItem>
//                 <DropdownItem>Edit</DropdownItem>
//                 <DropdownItem>Delete</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         );
//       default:
//         return cellValue;
//     }
//   }, []);

//   const onNextPage = React.useCallback(() => {
//     if (page < pages) {
//       setPage(page + 1);
//     }
//   }, [page, pages]);

//   const onPreviousPage = React.useCallback(() => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   }, [page]);

//   const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(1);
//   }, []);

//   const onSearchChange = React.useCallback((value: string) => {
//     if (value) {
//       setFilterValue(value);
//       setPage(1);
//     } else {
//       setFilterValue("");
//     }
//   }, []);

//   const onClear = React.useCallback(() => {
//     setFilterValue("");
//     setPage(1);
//   }, []);

//   const handleStatusFilterChange = React.useCallback((keys: Selection) => {
//     if (keys === "all") {
//       setStatusFilter(new Set(statusOptions.map((option) => option.uid)));
//     } else {
//       setStatusFilter(new Set(Array.from(keys) as string[]));
//     }
//   }, []);
  
//   const handleVisibleColumnsChange = React.useCallback((keys: Selection) => {
//     if (keys === "all") {
//       setVisibleColumns(new Set(columns.map((column) => column.uid)));
//     } else {
//       setVisibleColumns(new Set(Array.from(keys) as string[]));
//     }
//   }, []);

//   const handleSelectionChange = React.useCallback((keys: Selection) => {
//     if (keys === 'all') {
//       // Handle the 'all' selection case if necessary
//     } else {
//       setSelectedKeys(new Set(keys as Set<React.Key>));
//     }
//   }, []);

//   const handleSortChange = (descriptor: SortDescriptor) => {
//     setSortDescriptor(descriptor);
//   };

//   const topContent = React.useMemo(() => {
//     return (
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between gap-3 items-end">
//           <Input
//             isClearable
//             className="w-full sm:max-w-[44%]"
//             placeholder="Search by name..."
//             startContent={<SearchIcon />}
//             value={filterValue}
//             onClear={onClear}
//             onValueChange={onSearchChange}
//           />
//           <div className="flex gap-3">
//             <Dropdown>
//               <DropdownTrigger className="hidden sm:flex">
//                 <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
//                   Status
//                 </Button>
//               </DropdownTrigger>
//               <DropdownMenu
//                 disallowEmptySelection
//                 aria-label="Table Columns"
//                 closeOnSelect={false}
//                 selectedKeys={Array.from(statusFilter)} // Convert Set to array
//                 selectionMode="multiple"
//                 onSelectionChange={handleStatusFilterChange} // Use the new handler
//               >
//                 {statusOptions.map((status) => (
//                   <DropdownItem key={status.uid} className="capitalize">
//                     {capitalize(status.name)}
//                   </DropdownItem>
//                 ))}
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown>
//               <DropdownTrigger className="hidden sm:flex">
//                 <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
//                   Columns
//                 </Button>
//               </DropdownTrigger>
//               <DropdownMenu
//                 disallowEmptySelection
//                 aria-label="Table Columns"
//                 closeOnSelect={false}
//                 selectedKeys={Array.from(visibleColumns)} // Convert Set to array
//                 selectionMode="multiple"
//                 onSelectionChange={handleVisibleColumnsChange} // Use the new handler
//               >
//                 {columns.map((column) => (
//                   <DropdownItem key={column.uid} className="capitalize">
//                     {capitalize(column.name)}
//                   </DropdownItem>
//                 ))}
//               </DropdownMenu>
//             </Dropdown>
//             <Button color="primary" endContent={<PlusIcon width={undefined} height={undefined} />}>
//               Add New
//             </Button>
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-default-400 text-small">Total {users.length} users</span>
//           <label className="flex items-center text-default-400 text-small">
//             Rows per page:
//             <select
//               className="bg-transparent outline-none text-default-400 text-small"
//               onChange={onRowsPerPageChange}
//             >
//               <option value="5">5</option>
//               <option value="10">10</option>
//               <option value="15">15</option>
//             </select>
//           </label>
//         </div>
//       </div>
//     );
//   }, [
//     filterValue,
//     onClear,
//     onSearchChange,
//     statusFilter,
//     visibleColumns,
//     users.length,
//     onRowsPerPageChange,
//     handleStatusFilterChange,
//     handleVisibleColumnsChange,
//   ]);

//   const bottomContent = React.useMemo(() => {
//     return (
//       <div className="flex w-full justify-between items-center">
//         <Pagination isCompact showControls page={page} total={pages} onChange={setPage} />
//         <div className="hidden sm:flex gap-2">
//           <Button isDisabled={page === 1} onPress={onPreviousPage} size="sm" variant="flat">
//             Previous
//           </Button>
//           <Button isDisabled={page === pages} onPress={onNextPage} size="sm" variant="flat">
//             Next
//           </Button>
//         </div>
//       </div>
//     );
//   }, [page, pages, onNextPage, onPreviousPage]);

//   return (
//     <Table
//       aria-label="Users table with custom cells, column visibility, and sorting"
//       bottomContent={bottomContent}
//       selectedKeys={selectedKeysIterable}
//       selectionMode="multiple"
//       sortDescriptor={sortDescriptor}
//       topContent={topContent}
//       onSelectionChange={handleSelectionChange}
//       onSortChange={handleSortChange} 
//     >
//       <TableHeader columns={headerColumns}>
//         {(column) => (
//           <TableColumn
//             align={column.uid === "actions" ? "center" : "start"}
//             key={column.uid}
//             allowsSorting={column.sortable}
//           >
//             {column.name}
//           </TableColumn>
//         )}
//       </TableHeader>
//       <TableBody emptyContent="No users found" items={sortedItems}>
//         {(item) => (
//           <TableRow key={item.id}>
//             {(columnKey) => (
//               <TableCell>{renderCell(item, columnKey as keyof UserType)}</TableCell>
//             )}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }
