import React, { useState, useEffect } from 'react';

import './card-styles.css';

export interface InfoCardProps {
  data: string;
  cardTitle: string;
}

export default function InfoCard({ data, cardTitle }: InfoCardProps) {
  return (
    <>
      <div className="kpi-card">
        <p>{cardTitle}</p>
        <h4>{data}</h4>
      </div>
    </>
  );
}
