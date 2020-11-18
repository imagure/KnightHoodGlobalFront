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
    )
  }

  let columns_entries = [];
  for (let column of props.columns) {
    columns_entries.push(
      {
        Header: column,
        accessor: column
      }
    )
  }

  const columns = React.useMemo(
    () => [
      {
        Header: props.ranking_name,
        columns: columns_entries
      }
    ],
    []
  )

  return(
    <Styles>
    <div>
      <Table columns={columns} data={props.ranking} />
    </div>
    </Styles>
  );
};

export default RankingItem;
