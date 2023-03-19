FROM node:16-alpine
 
RUN npm install -g pnpm
 
WORKDIR /app
COPY . .
RUN pnpm install 

 
COPY . .
RUN pnpm build
 
EXPOSE 3000
CMD ["yarn", "dev"]
RUN npm run dev -- --host