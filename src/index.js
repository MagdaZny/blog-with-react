import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApiClient from './WeatherApiClient'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WeatherApiClient />, document.getElementById('root'));

serviceWorker.unregister();
