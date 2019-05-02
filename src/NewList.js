import React from 'react'
import NewHeader from './NewHeader.js'
import NewItem from './NewItem.js'
import './NewList.css'

export default class NewList extends React.Component{
    render(){
        var testData = {
            "by" : "bane",
            "descendants" : 49,
            "id" : 11600137,
            "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
            "score" : 56,
            "time" : 1461985332,
            "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
            "type" : "story",
            "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
        };
        return(
            <div className='newsList'>
                <NewHeader />
                <div className="newsList-newsItem">
                    <NewItem item={testData} rank={1} />
                    <NewItem item={testData} rank={2} />
                    <NewItem item={testData} rank={3} />
                    <NewItem item={testData} rank={4} />
                    <NewItem item={testData} rank={5} />
                    <NewItem item={testData} rank={6} />
                </div>
            </div>
        )
    }
}