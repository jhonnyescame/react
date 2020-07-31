import React from 'react';
import Routes from './routes';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App () {
  return (
    <div>
    	<Routes />
    </div>
   
  );
};

export default App;
