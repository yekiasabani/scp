FROM ghcr.io/puppeteer/puppeteer:23.6.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=TRUE \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrom-stable \
    ACCESS_KEY=9354

WORKDIR /usr/src/app

COPY package*,json ./
RUN npm ci
COPY . .
CMD ["node", "index.js"]