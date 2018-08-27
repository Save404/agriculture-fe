#!/usr/bin/env bash

echo -e "\033[36mPrepare: start mysql server and redis server...... \033[0m"

# start mysql
mysql.server start

# start redis
redis-server /usr/local/etc/redis.conf

mysql.server stop

echo -e "\033[33mStop server ~~~ \033[0m"
