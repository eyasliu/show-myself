import React from 'react';
import {render} from 'react-dom';
import Hello from './Hello';

if(process.env.NODE_ENV == 'development'){
__webpack_public_path__ = 'http://127.0.0.1:3000/static/'
}

render(
<Hello />
, document.getElementById('root'))