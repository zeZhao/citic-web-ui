FROM registry-vpc.cn-beijing.aliyuncs.com/citiccloud/devops:tomcat8.5-jdk1.8-apm
ADD ./server.xml $CATALINA_HOME/conf/server.xml
ADD ./web.xml $CATALINA_HOME/conf/web.xml
RUN mkdir $CATALINA_HOME/webapps/citic-web-ui/
ADD dist/citicWebUi.tar.gz $CATALINA_HOME/webapps/citic-web-ui/

ENTRYPOINT catalina.sh run
