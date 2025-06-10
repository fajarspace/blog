---
date: 2025-06-10
categories: [docker, terminal]
title: "Build dan Push Docker Image ke Docker Hub"
---

Build Docker image dan mengunggahnya ke Docker Hub, termasuk opsi untuk membuat image multi-architecture (`amd64`, `arm64`).

---

## Login ke Docker Hub

```bash
docker login
```

## Build Docker Image

```bash
docker build -t <name> .
```

## Tag Docker Image

```bash
docker tag <name> fajarspace/<repo>:latest
```

## Push ke Docker Hub

```bash
docker push fajarspace/<name>:latest
```

# (Opsional): Build Multi-Architecture Image

## Aktifkan buildx (jika belum)

```bash
docker buildx create --use
```

## Build dan Push Multi-Arch

```bash
docker buildx build --platform linux/amd64,linux/arm64 \
  -t fajarspace/<repo>:latest \
  --push .
```
