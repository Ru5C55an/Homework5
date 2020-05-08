import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

import '../scss/style.scss';

import 'bootstrap';

require.context('../img/', true, /\.(png|gif|svg|jpg)$/);

$('#btn-tooltip').tooltip();

