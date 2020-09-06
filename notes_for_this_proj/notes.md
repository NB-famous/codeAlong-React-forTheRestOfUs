# Notes for this project

- To run this project we must install some dependencies so input all commands in the terminal
    -> npm install react
    -> npm install react-dom
    -> npm install webpack
    -> npm install webpack-cli
    -> webpack-dev-server
    -> npm install @babel/core
    -> npm install @babel/preset-env
    -> npm install @babel/preset-react
    -> npm install babel-loader

- within main/index.js file must import the react packages 
    ->import React from 'react'
    ->import ReactDOM from 'react-dom'
    -> Also to render the function we must 

- To run server must first 
    -> Create "dev" inside package.json within section on -----> scripts : {<add it in here>}
    -> This is what to write inside: "dev": "webpack-dev-server"
    -> need to also create a webpack.config.js file to activate it --> look at the webpack note md file
    -> To run the server from terminal
        -> npm run dev



- To route on to another page we use a package called react-router-dom
    -> npm install react-router-dom
    -> import on to the main/index file 
        -> import {BrowserRouter, Switch, Route} from 'react-router-dom'

- From the hyperlink path when the url is located in the html which was "a" html tag
    -> We must import {Link} from 'react-router-dom package'
        -> instead of the conventional <a href="url"> we replace this with <Link to="url"></Link> 

- Inside our webpack server under devServer section we must add 
    ->historyApiFallback: {index: <our index/main.html file>}

-Buiding a snippet for react components
 -> must go to command palette 
    -> shift+ctrl+p 
    -> type snippet -> preference snippet -> javascript react -> could not make it work for react so put it on javascript 
    -> to build snippet go to www.snippet-generator.app

-Learned about Composition method -> check out page component