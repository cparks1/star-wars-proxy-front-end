This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the front end
1. Type a Star Wars character name into the search bar.
2. Press the `ENTER` key on your keyboard or press `Search`.

## Running the front end via Docker
1. Pull the Docker image: Run `docker pull ghcr.io/cparks1/star-wars-proxy-front-end:<latest>`, where `latest` is the latest version of that package.
2. Run the Docker container: Run `docker run -p 3000:3000 ghcr.io/cparks1/star-wars-proxy-front-end:<latest>`, where `latest` is the latest version of that package.
3. The Docker container should now be running and you can now access the front end via [http://localhost:3000](http://localhost:3000). If you want to stop running the Docker container, press `Ctrl + C` in the terminal where the container is running.

### Building a Docker image of the front end
1. From the root of the project directory, run the command `docker build -t star-wars-proxy-front-end .`

### Pushing the new Docker image to GitHub
1. Find the image ID of the newly built Docker image via `docker image ls`.
2. Run `docker tag <image_id> ghcr.io/<github_username>/star-wars-proxy-front-end:1.0.0`, where 1.0.0 is the next version following semantic versioning specification.
3. Login to the GitHub container registry by running `docker login ghcr.io -u <github_username>`. The password it expects is your personal access token with Package write permissions.
4. Run `docker push ghcr.io/<github_username>/<image_name>:<tag>`.
