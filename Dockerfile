# base image
#FROM python:3.5-alpine
FROM frolvlad/alpine-python-machinelearning

# set working directory
WORKDIR /usr/src/app

# add and install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# add app
COPY . /usr/src/app

EXPOSE 5000

# run server
CMD FLASK_APP=server/server.py flask run --host=0.0.0.0
