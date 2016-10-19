docker login -e $DOCKER_EMAIL -p $DOCKER_PASS -u $DOCKER_USER
docker tag -f leadsstevenzeilercom_webapp stevenzeiler/leads.stevenzeiler.com:latest
docker push stevenzeiler/leads.stevenzeiler.com:latest
