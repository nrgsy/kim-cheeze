[![Build Status](https://travis-ci.org/phillipxkang/kim-cheeze.svg?branch=master)](https://travis-ci.org/phillipxkang/kim-cheeze)


<p align="center"><img href="https://bring-clarity.com" style="max-height: 900px" src="client/logo.png" /></p>
<p align="center">Bringing clear insights into your employees' well-being</p>

## Overview:
Please describe this product or service including any machine learning models used

## Key Technologies:
Flask, React, Scikit Learn

## Steps to Build and Test:
### Production build and deploy:
Our project is heavily integrated into CI tools. Our frontend uses Netlify to build and deploy our React web frontend. Our backend uses TravisCI to build and package for deployment to Amazon ECS.
### Local client build and deploy:
  ```
  cd client
  npm start
  ```
### Local server build and deploy:
  ```
  cd server
  docker-compose up
  ```
