#!/bin/bash

port=80
if [ $# -gt 0 ]; then
    port=$1
fi

python3.6 manage.py runserver 0.0.0.0:$port
