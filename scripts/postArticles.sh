#!/bin/bash

cat $1 | http \
  -a api:$API_KEY \
  :8081/articles
