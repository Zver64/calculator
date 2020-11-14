import React, { memo, useCallback, useState } from "react";
import Button from '../Button';
import './styles.scss';
import { formatResult } from "./utils";

export default memo(() => {
  const [state, setState] = useState('');
  const handleButtonClick = useCallback((value) => {
    setState(formatResult(state, value));
  })
  return (
    <div className="calculator">
      <div className="calculator__screen">{state}</div>
      <div className="calculator__helpers">
      <Button value="CE" onClick={handleButtonClick} />
      <Button value="<" onClick={handleButtonClick} />
      </div>
      <div className="calculator__buttons">
        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="0" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
      </div>
      <div className="calculator__operators">
        <Button value="+" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />
        <Button value="/" onClick={handleButtonClick} />
        <Button value="(" onClick={handleButtonClick} />
        <Button value=")" onClick={handleButtonClick} />
      </div>
    </div>
  );
});
