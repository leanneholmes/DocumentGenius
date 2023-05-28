# docker image prune --filter "label!=documentgenius-unified"
set -e
docker build . -f Dockerfile.prod -t documentgenius-unified
docker run --rm --network=host --env-file=env_file --name docgen documentgenius-unified
