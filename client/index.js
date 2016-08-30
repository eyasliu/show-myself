import 'babel-polyfill';
import {render} from 'react-dom';
import 'common/style';
import './utils/globals';
import APP from 'fw';

if(process.env.NODE_ENV == 'development'){
__webpack_public_path__ = 'http://127.0.0.1:3000/static/'
}

render(APP, document.getElementById('root'))