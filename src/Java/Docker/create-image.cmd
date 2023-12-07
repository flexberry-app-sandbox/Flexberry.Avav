docker build --no-cache -f SQL\Dockerfile.PostgreSql -t avav-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t avav-java/app ../../..
