import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import (accuracy_score, classification_report)
from sklearn.model_selection import train_test_split
from imblearn.over_sampling import SMOTE

attrition = pd.read_csv('../datasets/Attrition.csv')

target_map = {'Yes':1, 'No':0}
attrition["Attrition_numerical"] = attrition["Attrition"].apply(lambda x: target_map[x])
attrition = attrition.drop(['Attrition_numerical'], axis=1)
categorical = []
for col, value in attrition.iteritems():
    if value.dtype == 'object':
        categorical.append(col)
numerical = attrition.columns.difference(categorical)
attrition_cat = attrition[categorical]
attrition_cat = attrition_cat.drop(['Attrition'], axis=1)
attrition_cat = pd.get_dummies(attrition_cat)
attrition_cat.head(3)
attrition_num = attrition[numerical]
attrition_final = pd.concat([attrition_num, attrition_cat], axis=1)

target_map = {'Yes':1, 'No':0}
target = attrition["Attrition"].apply(lambda x: target_map[x])
target.head(3)

train, test, target_train, target_val = train_test_split(attrition_final,
                                                         target,
                                                         train_size= 0.80,
                                                         random_state=0);

oversampler=SMOTE(random_state=0)
smote_train, smote_target = oversampler.fit_sample(train,target_train)

seed = 0
rf_params = {
    'n_jobs': -1,
    'n_estimators': 1000,
#     'warm_start': True,
    'max_features': 0.3,
    'max_depth': 4,
    'min_samples_leaf': 2,
    'max_features' : 'sqrt',
    'random_state' : seed,
    'verbose': 0
}

rf = RandomForestClassifier(**rf_params)
rf.fit(smote_train, smote_target)
rf_predictions = rf.predict(test)

divide_str = "="*30
print(divide_str, "Random Forest prediction results", divide_str)
print(classification_report(target_val, rf_predictions))
print("\nAccuracy score: {}".format(accuracy_score(target_val, rf_predictions)))

gb_params ={
    'n_estimators': 1500,
    'max_features': 0.9,
    'learning_rate' : 0.25,
    'max_depth': 4,
    'min_samples_leaf': 2,
    'subsample': 1,
    'max_features' : 'sqrt',
    'random_state' : seed,
    'verbose': 0
}

gb = GradientBoostingClassifier(**gb_params)

gb.fit(smote_train, smote_target)

gb_predictions = gb.predict(test)

print(divide_str, "Gradient Boosting prediction results", divide_str)
print(classification_report(target_val, gb_predictions))
print("\nAccuracy score: {}".format(accuracy_score(target_val, gb_predictions)))
