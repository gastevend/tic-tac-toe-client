#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
#EMAIL=ava@bob.com PASSWORD=yeahyeah assests/scripts/books/sign-up.sh
  URL_PATH="/sign-up"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'",
        "password_confirmation": "'"${PASSWORD}"'"
      }
    }'

# data output from curl doesn't have a trailing newline
echo
