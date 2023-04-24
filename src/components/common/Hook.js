import React from 'react';

export function Hook(props) {
  const { className, withHolder } = props;

  return (
    <svg className={className} width="22" height="89" viewBox="0 0 22 89" fill="none" xmlns="http://www.w3.org/2000/svg">
      {withHolder && <path d="M18.9189 88.2841C18.2523 83.6174 15.8189 74.3841 11.4189 74.7841" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>}
      <path d="M16.8496 70.5293C17.3629 64.5389 11.8859 62.9985 8.80541 62.9985V56.3235H13.7686V60.6023C19.759 60.6023 22.1552 66.935 21.8132 70.5293C21.8132 73.7812 19.4167 79.7716 11.5439 79.7716C2.48113 79.7716 2.13012 71.7273 3.67079 68.1331C3.49964 77.2043 16.1574 78.6092 16.8496 70.5293Z" fill="#003399"/>
      <circle cx="11.2017" cy="53.0714" r="4.96346" fill="black"/>
      <path d="M6.41895 24.7715V0.771484" stroke="black"/>
      <path d="M15.4189 24.7715V0.771484" stroke="black"/>
      <path d="M2.20933 27.3118C1.84455 23.7735 4.62063 20.6965 8.1777 20.6965H14.3048C17.8374 20.6965 20.6055 23.7333 20.2791 27.2509L18.4973 46.4547C18.211 49.5404 15.6219 51.9004 12.523 51.9004H10.1575C7.082 51.9004 4.50449 49.5749 4.18911 46.5157L2.20933 27.3118Z" fill="#039CFD" stroke="#003399" strokeWidth="2"/>
      {withHolder && <path d="M4.41895 88.2841C5.08561 83.6174 7.51895 74.3841 11.9189 74.7841" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>}
    </svg>
  );
}