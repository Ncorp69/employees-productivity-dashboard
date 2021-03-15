import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Warn } from './TableElements';

const getColumns = columns => columns.map(( column, ind ) => <Th key={ind} minWidth={column.minWidth}
                                                                 right={column.right}>{ column.label }</Th> );

const getRows = ( columns, rows ) => rows.map( row => <Tr key={row.get( 'id' )} switching={row.get( 'switching' )}>
    {columns.map(( column, ind ) => <Td key={ind} right={column.right}>{ row.get( column.key ) }</Td> )}
</Tr>);

const TableComponent = ({ columns, rows }) => {
    return <React.Fragment>
        <Warn/>
        <Table>
            <Thead>
                <Tr>
                    { getColumns( columns )}
                </Tr>
            </Thead>
            <Tbody>
                { getRows( columns, rows )}
            </Tbody>
        </Table>
    </React.Fragment>
};

export default React.memo( TableComponent );