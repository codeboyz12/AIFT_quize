
echo " Building Docker images..."
docker-compose build

echo " Starting services..."
docker-compose up -d

echo " Showing logs (press Ctrl+C to exit)..."
docker-compose logs -f