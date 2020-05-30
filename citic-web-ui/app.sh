envApp=${1}
echo "envApp full path [ ${envApp}]"
cd /jenkins/home/workspace/${envApp}
echo "================================"
pwd
echo "================================"
echo "rm -rf node_modules dist"
npm install
echo "execute npm run build"
npm run build
cd dist

echo "===============execute tar czvf ================="
rm -rf citicWebUi.tar.gz
tar czvf citicWebUi.tar.gz ./
echo "================================"

echo "===============execute ls ================="
pwd

ls
echo "================================"
