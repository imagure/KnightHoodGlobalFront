import React from 'react';
import styled from "styled-components";
import { useTable } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      background: #7457CB;
      color: white;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const RankingItem = props => {

  function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )}

  const hall_of_fame_columns = React.useMemo(
    () => [
      {
        Header: props.ranking_name,
        columns: [
          {
            Header: 'Photo',
            accessor: 'photo',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Guild',
            accessor: 'guild',
          },
          {
            Header: 'About',
            accessor: 'about',
          }
        ],
      }
    ],
    []
  )

  return(
    <Styles>
    <div>
      <Table columns={hall_of_fame_columns} data={props.hall_of_fame} />
    </div>
    </Styles>
  )
};

export default RankingItem;
