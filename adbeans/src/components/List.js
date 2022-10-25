import React from 'react';
import MaterialTable from 'material-table'
import useAxios from "../hooks/useAxios"
import { currencyFormat } from '../utils';

function List() {

    const { response } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    const columns = [
        { title: "Name", field: "name", sorting: true, filtering: true },
        { title: "Symbol", field: "symbol", filterPlaceholder: "filter", sorting: true, },
        { title: 'Asset', field: 'image',  filtering: false, sorting: false, render: item => <img src={item.image} className="img-fluid" alt={item.name}  /> },
        {
            title: "Price", field: "current_price", emptyValue: () => <em>0</em>,
            render: (rowData) => <p>{currencyFormat(rowData.current_price)}</p>,
            searchable: false, sorting: true
        },
        // {
        //   title: "Price", field: "current_price", emptyValue: () => <em>null</em>,
        //   render: (rowData) => <div style={{ background: rowData.age >= 18 ? "#008000aa" : "#f90000aa",borderRadius:"4px",paddingLeft:5 }}>{rowData.age >= 18 ? "18+" : "18-"}</div>,
        //    searchable: false, export: false
        // },
        { title: "Total Volume", field: "total_volume", sorting: true, searching: true },
        {
            title: "Market Cap Change", field: "market_cap_change_percentage_24h", emptyValue: () => <em>0</em>,
            render: (rowData) =>
                <span className={`flex gap-1 ${rowData.market_cap_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {
                        Number(
                            rowData.market_cap_change_percentage_24h
                        ).toFixed(2)}%
                </span>,
            searchable: false, sorting: true
        },
    ]
    return (
        <MaterialTable columns={columns} data={response}
            options={{
                sorting: true, search: true,
                searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
                filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
                rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                headerStyle: { background: "#f44336", color: "#fff" }
            }}
            title="Crypto List"
        />
    );
}

export default List;  