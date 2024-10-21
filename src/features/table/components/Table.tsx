import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { useGetEtfProfileDataQuery } from '../../../services/backend';
import { IHoldingItem, ISectorItem } from '../../../services/query.interface';
import DummyData from '../files/dummyEtfProfileData.json';
import { holdingTableColumns, sectorTableColumns } from '../tableColumns';

import '../table.css';

const USE_DUMMY = true;

export enum TableType {
  SECTOR,
  HOLDING,
}

interface TableProps {
  symbol: string;
  type: TableType;
}

export default function Table({ symbol, type }: TableProps) {
  const [sectorData, setSectorData] = useState<ISectorItem[]>([]);
  const [holdingData, setHoldingData] = useState<IHoldingItem[]>([]);

  const pollingInterval = 0;

  const { data, error, isLoading, isFetching } = useGetEtfProfileDataQuery(symbol, {
    pollingInterval,
  });

  useEffect(() => {
    if (data) {
      setSectorData(data.sectorsData);
      setHoldingData(data.topTenHoldings);
      console.info(sectorData);
    }
  }, [data]);

  const paginationOptions = {
    sizePerPage: 10,
    firstPageText: 'First',
    lastPageText: 'Last',
    alwaysShowAllBtns: true,
    showTotal: true,
    sizePerPageList: [
      {
        text: '10',
        value: 10,
      },
      {
        text: '15',
        value: 15,
      },
      {
        text: '25',
        value: 25,
      },
    ],
  };

  return (
    <>
      {isLoading ? null : data || USE_DUMMY ? (
        <div className="etf-table">
          <h4>{type == TableType.SECTOR ? 'Sectors Breakdown' : 'Holdings Breakdown'}</h4>
          <BootstrapTable
            keyField="weight"
            data={
              type == TableType.HOLDING
                ? USE_DUMMY
                  ? DummyData.topTenHoldings
                  : holdingData
                : USE_DUMMY
                  ? DummyData.sectorsData
                  : sectorData
            }
            columns={type == TableType.HOLDING ? holdingTableColumns : sectorTableColumns}
            hover
            bordered={false}
            pagination={paginationFactory(paginationOptions)}
            filter={filterFactory()}
          />
        </div>
      ) : null}
    </>
  );
}
