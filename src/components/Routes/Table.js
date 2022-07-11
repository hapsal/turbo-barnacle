import React, {useState} from "react";
import { useTable, useSortBy, usePagination, useFilters} from "react-table";
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ columns, data }) {
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        prepareRow, 
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        setFilter, 
    } =
        useTable({
        columns,
        data,
        },  useFilters, useSortBy, usePagination);

    const [filterInput, setFilterInput] = useState("");

    const handleFilterChange = e => {
        const value = e.target.value;
        setFilter("longName", value);
        setFilterInput(value);
    }

    return (
    <>
        <input value={filterInput} onChange={handleFilterChange} placeholder="Etsi reitti" className="form-control" />
        <table {...getTableProps()} className="table table-bordered table-striped">
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                        {column.isSorted ? column.isSortedDesc ? <i className="bi bi-sort-alpha-up"></i> : <i className="bi bi-sort-alpha-down"></i> : ''}
                    </span>
                    </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
                </tr>
            );
            })}
        </tbody>
        </table>
        <div>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="btn btn-outline-dark">
            {<><i class="bi bi-arrow-left"></i><i class="bi bi-arrow-left"></i></>}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="btn btn-outline-dark">
            {<i class="bi bi-arrow-left"></i>}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-outline-dark">
            {<i class="bi bi-arrow-right"></i>}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="btn btn-outline-dark">
            {<><i class="bi bi-arrow-right"></i><i class="bi bi-arrow-right"></i></>}
            </button>{' '}
            <span>
            Sivu{' '}
            <strong>
                {pageIndex + 1} / {pageOptions.length}
            </strong>{' '}
            </span>
            <span>
            | Syötä sivunumero:{' '}
            <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
                }}
                style={{ width: '30px', marginLeft: "5px", marginRight: "5px", height: "25px" }}
            />
            </span>{' '}
            <select
            value={pageSize}
            onChange={e => {
                setPageSize(Number(e.target.value))
            }}
            >
            {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                Näytä {pageSize}
                </option>
            ))}
            </select>
        </div>
    </>
  );
}

export default Table;