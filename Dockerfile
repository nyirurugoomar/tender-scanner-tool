# -------- BUILD STAGE --------
    FROM node:24.12.0-alpine AS builder

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm ci
    
    COPY . .
    RUN npm run build
    
    # -------- RUN STAGE --------
    FROM node:24.12.0-alpine
    
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm ci --only=production
    
    COPY --from=builder /app/dist ./dist
    
    EXPOSE 3000
    
    CMD ["node", "dist/main.js"]
    