/**
 * @file 	    InfoCard.tsx
 * @brief	    info card component
 * @author      Tom Aston
 * @version     1.0
 * @copyright   tomaston.dev
 */

import React, { useState, useEffect } from 'react';

import '../info-card-styles.css';

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
