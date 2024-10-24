import React from 'react';
import { Card, Container, Tab, Tabs } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './home-page.css';
import CandlestickChart from '../charts/CandlestickChart';
import Table, { TableType } from '../table/components/Table';

export const HomePage = () => {
  const DUMMY_TABS = ['QQQ', 'VUSA', 'VUAG', 'LON:VISA'];
  return (
    <div className="page-container-home">
      <div style={{ display: 'flex', flexDirection: 'column', width: 1450, gap: 50 }}>
        <Container fluid>
          <Card>
            <Tabs defaultActiveKey={DUMMY_TABS[0]} id="uncontrolled-tab-example" className="mb-3">
              {DUMMY_TABS.map((stock, index) => {
                return (
                  <Tab key={index} eventKey={stock} title={stock}>
                    <Card.Body>
                      <CandlestickChart symbol={stock} />
                      <br></br>
                      <Table symbol={stock} type={TableType.SECTOR} />
                      <br></br>
                      <Table symbol={stock} type={TableType.HOLDING} />
                      <br></br>
                    </Card.Body>
                  </Tab>
                );
              })}
            </Tabs>
          </Card>
        </Container>
      </div>
    </div>
  );
};
