import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";    
import localeEnMessages from "./locales/en";    
import JobsList from "./components/jobslist";

const local = navigator.language


let language;
if (local == 'en-US')
{
	language = localeEnMessages
}else{
	local = 'es-CO'
	language = localeEsMessages
}


ReactDOM.render(
	<IntlProvider locale={local} messages= {language}>
		<JobsList len={local}/>
	</IntlProvider>, document.getElementById("root")
);