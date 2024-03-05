# Shoppy app | Dockerfile

## Build an image from a `Dockerfile`

```bash
docker build -t <image_name>:<tab_image_name> .

## Example
docker build -t img_react_shoppy_app:v0.0.1 .
```

## Create and run a new container from an image

Flags:

- `-d`: detached
- `-p`: ports (`HOST:CONTAINER`)
- **Change** the `your-secret-key`


```bash
docker run -d -p 7007:7007 \
    --name cont_react_shoppy_app \
    -e VITE_APP_PORT='7007' \
    -e VITE_FBBASE_API_KEY='<your_api_key>' \
    -e VITE_FBBASE_AUTH_DOMAIN='cli-firebase-example-01.firebaseapp.com' \
    -e VITE_FBBASE_PROJECT_ID='cli-firebase-example-01' \
    -e VITE_FBBASE_STORAGE_BUCKET='cli-firebase-example-01.appspot.com' \
    -e VITE_FBBASE_MESSAGING_SENDER_ID='585117997308' \
    -e VITE_FBBASE_APP_ID='1:585117997308:web:7a6d263752929e0c425f79' \
    img_react_shoppy_app:v0.0.1
```

## Environment variables

- Container is **running**

```bash
docker exec <container_name_or_id> env

# example
docker exec cont_react_shoppy_app env
```

- Container is **not running**

```bash
docker container inspect <container_name_or_id> --format='{{json .Config.Env}}'

# example
docker container inspect cont_react_shoppy_app --format='{{json .Config.Env}}'
```
