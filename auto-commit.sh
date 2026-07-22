#!/bin/bash

for i in {1..9}
do
    echo "Auto commit $i - $(date)" >> auto-log.txt
    git add .
    git commit -m "Automated commit"
    echo "Commit $i completed at $(date)"
    sleep 600
done
