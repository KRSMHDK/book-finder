import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <div>
        {location.state.totalItems !== 0
          ? location.state.items.map((r) => (
              <p key={r.id}>{r.volumeInfo.title}</p>
            ))
          : null}
      </div>
    </div>
  );
};

export default Results;
