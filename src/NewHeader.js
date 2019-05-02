import React from 'react'
import './NewsHeader.css'
import pic1 from './photos/logo.gif'

export default class NewHeader extends React.Component{
    
    getLogo(){
        return (
            <div className="newsHeader-log">
                <a href="https://news.ycombinator.com/"><img src={pic1} /></a>
            </div>
        )
    }
    getTitle(){
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
            </div>
        )
    }
    getNav() {
        var navLinks = [
        {
          name: 'new',
          url: 'newest'
        },
        {
          name: 'comments',
          url: 'newcomments'
        },
        {
          name: 'show',
          url: 'show'
        },
        {
          name: 'ask',
          url: 'ask'
        },
        {
          name: 'jobs',
          url: 'jobs'
        },
        {
          name: 'submit',
          url: 'submit'
        }
        ];
      
        return (
            <div className="newsHeader-nav">
              {
                navLinks.map(function(navLink,index) {
                  return (
                      <a key={`navLinks-item-${index}`} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/" + navLink.url} >
                        {navLink.name}
                      </a>
                      );
                })
              }
            </div>
            );
      }
      getLogin() {
        return (
            <div className="newsHeader-login">
              <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
            </div>
            );
      }


    render(){
        return (
            <div className='newsHeader'>
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
                {this.getLogin()}
            </div>
        )
    }
}
