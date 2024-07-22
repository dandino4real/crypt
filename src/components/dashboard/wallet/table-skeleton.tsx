const TableSkeleton = () => {
    const skeletonRows = Array.from({ length: 5 }).map((_, index) => (
      <tr key={index} >
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
        <td className="px-6 py-2">
          <div className="h-4 bg-gray-700 rounded"></div>
        </td>
      </tr>
    ));
  
    return <tbody className="animate-pulse">{skeletonRows}</tbody>;
  };
  

  export default TableSkeleton