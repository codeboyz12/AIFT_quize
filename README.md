
# AI Thailand Hackathon 2025 - Quize API Project

This repository use by **พระจอมพร้อมกระโจน** for quize submision.

## Installation

### 1. Clone git repository
```bash
  git clone https://github.com/codeboyz12/AIFT_quize.git
  cd AIFT_quize
```
### 2. Docker build up
```bash
  docker compose up --build
```

## Usage/Examples

You'll see html page. the button will send request to python service and update text on the screen.

#### Access to NodeJS Service
```bash
  https://127.0.0.1:3000
```

#### Test connection to Python Service
```bash
  https://127.0.0.1:3000/callPython
```
This method using for APIs request to python service.

## API Reference

#### Node Service

```http
  GET https://127.0.0.1:3000/
```
Get greeting page with giant button.

```http
  GET https://127.0.0.1:3000/callPython
```

Get data from Python Service.

#### Python Service

```http
  GET https://127.0.0.1:8080/data
```

Return "Hello from Flask Python Service"


## Tech Stack

**Programing Language:** Python, JavaScript

**Tools:** Docker

