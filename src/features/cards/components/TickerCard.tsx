import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../ticker-card-styles.css';

export type TickerCardProps = {
  symbol: string;
  name: string;
  region: string;
  currency: string;
  type: string;
};

export const TickerCard = ({ symbol, name, region, currency, type }: TickerCardProps) => {
  return (
    <div className="ticker-card-container">
      <Card className="text-center">
        <Card.Header>
          <b>{symbol}</b>
        </Card.Header>
        <Card.Body>
          <Button variant="success" disabled>
            {currency}
          </Button>
          <p>{name}</p>
        </Card.Body>
        <Card.Footer className="text-muted">
          <>Region: </>
          <>{region}</>
        </Card.Footer>
      </Card>
    </div>
  );
};
