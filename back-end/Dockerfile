FROM python:3.10.12

WORKDIR /workspace

COPY ./requirements.txt /accordi-web/back-end/requirements.txt
 
RUN pip install --no-cache-dir --upgrade -r /accordi-web/back-end/requirements.txt
COPY . ./