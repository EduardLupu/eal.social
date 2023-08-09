echo "Building React app..."
npm run build

echo "Copying build to server..."
scp -r dist/* edi@138.68.65.44:/var/www/eal.social

echo "Done!"

