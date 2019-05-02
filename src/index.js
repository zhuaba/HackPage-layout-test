import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewList from './NewList'
import './index.css'

//#region 
// function get(url) {
//     return Promise.resolve($.ajax(url));
//   }
  
//   get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
//     return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
//   }).then(function(items) {
//     render(<NewList items={items} />, $('body')[0]);
//   }).catch(function(err) {
//     console.log('error occur', err);
//   });
//#endregion


render(<NewList />, $('#content')[0]);