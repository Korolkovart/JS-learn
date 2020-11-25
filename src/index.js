'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest'
elementClosest(window)
require('formdata-polyfill')
import "es6-promise/auto";
import 'fetch-polyfill';


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import changePhoto from './modules/changePhoto';
import imputRegEx from './modules/imputRegEx';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import slider from './modules/slider';


//timer
countTimer('24 november 2020') 
//toggleMenu
toggleMenu()
//popup
togglePopUp()
// табы
tabs() 
//смена фото
changePhoto()
//regExp
imputRegEx()
//калькулятор
calc()
//send_aiax-form
sendForm()
// слайдер
slider()