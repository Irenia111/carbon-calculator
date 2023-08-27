import React, { useState } from 'react';
import { TableDataCell, TableRow, TextInput } from 'react95';

const TransportInput = (props: { title: string; getInputValue: (arg: string) => void }) => {
  const { title, getInputValue } = props;
  const [inputValue, setInputValue] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    getInputValue(e.target.value);
  };
  return (
    <TableRow>
      <TableDataCell style={{ textAlign: 'left' }}>{title}</TableDataCell>
      <TableDataCell style={{ padding: '0' }}>
        <TextInput placeholder="... ..." fullWidth value={inputValue} onChange={handleChange} />
      </TableDataCell>
    </TableRow>
  );
};

export default TransportInput;
