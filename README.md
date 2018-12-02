[![Build Status](https://travis-ci.org/phillipxkang/kim-cheeze.svg?branch=master)](https://travis-ci.org/phillipxkang/kim-cheeze)



<p align="center">[<img style="max-height: 900px" src="client/logo.png" />](https://bring-clarity.com)</p>
<p align="center">Bringing clear insights into your employees' well-being</p>

## Overview:
### Random Forest and Gradient Boosting Classifiers:
Random Forest and Gradient Boosting classifiers were desirable for predicting employee attrition because they are much stronger learners than the decision trees but still retain the property of explainability that other classifiers like neural networks or support vector machines lack.

Created by IBM, our dataset of employee attrition consisted of 1470 examples of employees decribed by 34 features and a label detailing whether or not they left the company:
https://www.kaggle.com/pavansubhasht/ibm-hr-analytics-attrition-dataset

We added a 35th feature representing how well an employee is connected to others within the company, as a normalized between 0 and 1. For the purpose of this hackathon the data was mocked, but would otherwise be quantified via their interactions on SAS workflows like slack and github. The strength of each employee's relationships with other employees would be estimated, and any relationships with employees that have left the company would negatively impact their final connectedness score.

## Key Technologies:
for example: Flask, Tensor Flow, Keras

## Steps to Build and Test:
### Production build and deploy:
Our project is heavily integrated into CI tools. Our frontend uses Netlify to build and deploy our React web frontend. Our backend uses TravisCI 
### Local client build and deploy:
  ```
  cd client
  npm start
  ```
### Local web server build and deploy:
  ```
  cd server
  docker-compose up
  ```
### Train & view performance metrics for each classifier
  ```
  cd server
  python model.py
  ```
  
  ==================== Random Forest prediction results ====================
              precision    recall  f1-score   support

No Attrition       0.94      0.98      0.96       245
   Attrition       0.89      0.67      0.77        49

   micro avg       0.93      0.93      0.93       294
   macro avg       0.91      0.83      0.86       294
weighted avg       0.93      0.93      0.93       294

Total Accuracy: 0.9319727891156463 

==================== Gradient Boosting prediction results ====================
              precision    recall  f1-score   support

No Attrition       0.94      0.99      0.96       245
   Attrition       0.94      0.67      0.79        49

   micro avg       0.94      0.94      0.94       294
   macro avg       0.94      0.83      0.88       294
weighted avg       0.94      0.94      0.93       294

Total Accuracy: 0.9387755102040817

Accuracy, precision, and recall were use to gauge the balance of false positives/false negatives and evaluate model performance. As seen above, Gradient Boosting performs as well as or slightly better than Random Forest for accuracy, precision, and recall.
