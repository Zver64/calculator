import React, {memo, useCallback} from 'react';

export default memo((props) => {
  const {onClick, value} = props;
  const handleClick = useCallback((event) => {
    onClick(value);
  })
  return (
    <button className="button" onClick={handleClick}>
      {value}
    </button>
  )
})