import React from 'react';

import { BrowserRouter , Switch, Route, Link} from "react-router-dom";


import Main from './pages/Main';
import SobreEmpresa from './pages/SobreEmpresa';
import Contato from './pages/Contato';
import Api from './pages/Api';
import Palestrantes from './pages/Palestrantes';

function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/contato" component={Contato} />
				<Route path="/api" component={Api} />
				<Route path="/palestrantes" component={Palestrantes} />
				<Route path="/sobre-empresa" component={SobreEmpresa} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;