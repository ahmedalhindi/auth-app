# auth-app

This is a node express authentication service containerized with docker.

Dockerfile builds an image of node with contents of src. to build the image:

```sh
docker build -t auth-app:0 .
```

if /src is mounted at /app/src changes can be reflected to the container. this is very useful during development. run container with:

```sh
docker run auth-app:0 -v $(pwd)/src:/app/src
```
