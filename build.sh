#!/usr/bin/env bash

set -ex

EMSCRIPTEN_EMSDK_VERSION=3.1.74
OPENCV_VERSION=4.13.0
OPENCVJS_ENVIRONMENT=$1

cd $(dirname $0)
ROOT_DIR=$(pwd)

cd "${ROOT_DIR}"
git clone https://github.com/opencv/opencv.git opencv_repo || true

cd opencv_repo
git checkout ${OPENCV_VERSION}

if [ "${OPENCVJS_ENVIRONMENT}" = "web" ]; then
    docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) \
        emscripten/emsdk:$EMSCRIPTEN_EMSDK_VERSION \
        emcmake python3 ./platforms/js/build_js.py \
        --clean_build_dir \
        --build_flags='-s ENVIRONMENT=web -s EXPORT_ES6=1 -s MODULARIZE=1 ' \
        build_js_web
    cd "${ROOT_DIR}"
    cp opencv_repo/build_js_web/bin/opencv_js.js packages/web/lib/opencv_js.js
elif [ "${OPENCVJS_ENVIRONMENT}" = "worker" ]; then
    docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) \
        emscripten/emsdk:$EMSCRIPTEN_EMSDK_VERSION \
        emcmake python3 ./platforms/js/build_js.py \
        --clean_build_dir \
        --build_flags='-s ENVIRONMENT=worker -s EXPORT_ES6=1 -s MODULARIZE=1 ' \
        build_js_worker
    cd "${ROOT_DIR}"
    cp opencv_repo/build_js_worker/bin/opencv_js.js packages/worker/lib/opencv_js.js
elif [ "${OPENCVJS_ENVIRONMENT}" = "node" ]; then
    docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) \
        emscripten/emsdk:$EMSCRIPTEN_EMSDK_VERSION \
        emcmake python3 ./platforms/js/build_js.py \
        --clean_build_dir \
        --build_flags='-s ENVIRONMENT=node -s MODULARIZE=1 ' \
        build_js_node
    cd "${ROOT_DIR}"
    cp opencv_repo/build_js_node/bin/opencv_js.js packages/node/lib/opencv_js.js
else
    echo "Invalid environment: ${OPENCVJS_ENVIRONMENT}"
    exit 1
fi

cd "${ROOT_DIR}"
git add --all
git commit -m "chore: auto commit by build.sh"

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "${CURRENT_BRANCH}" != "master" ]; then
    git push origin "${CURRENT_BRANCH}"
fi
