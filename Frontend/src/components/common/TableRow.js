import React from 'react';

const TableRow = ({ book, index }) => {
  console.log('book ', book)
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{book.title}</td>
      <td>{book.author.fullName}</td>
    </tr>
  )
}

export default TableRow;