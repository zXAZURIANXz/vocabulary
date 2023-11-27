
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function TableComponent({data}) {
    console.log(data,'en table component')
    const { words } = data;

    return (
        <div className="card">
            <DataTable value={words} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="word" header="Palabra" style={{ width: '25%' }}></Column>
                <Column field="meaning" header="Definicion" style={{ width: '25%' }}></Column>
                <Column field="usexample" header="Ejemplo de uso" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}