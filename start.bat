Write-Host " Building Docker images..."
docker-compose build

Write-Host " Starting services..."
docker-compose up -d

Write-Host " Showing logs (press Ctrl+C to stop)..."
docker-compose logs -f
