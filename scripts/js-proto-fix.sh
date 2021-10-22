#! /usr/bin/env bash

system=$(uname -s | tr '[:upper:]' '[:lower:]')
regex='s/if (goog.DEBUG/if (true || goog.DEBUG/g'

if [[ "$system" == 'darwin' ]]; then
    sed -i '' "$regex" impl/javascript/proto/*.js
elif [[ "$system" == 'linux' ]]; then
    sed -i "$regex" impl/javascript/proto/*.js
fi
