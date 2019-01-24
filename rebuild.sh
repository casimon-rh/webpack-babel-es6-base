 docker build -t webpack-babel-es6-base . &&
 (
    docker rm -f frontend 2>/dev/null;
    docker run --network red -e 'ENDPOINTS=/api=http://host:3001/api' --name frontend -p 80:80 -it webpack-babel-es6-base;
 )