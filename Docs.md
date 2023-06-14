Configure Apache
useradd www-user
cd / var /www/html/
mkdir demo_nodejs
chown -Rf www-user:apache demo_nodejs
vi /etc/httpd/conf/httpd.conf

Listen 81
NameVirtualHost *:81
<VirtualHost *:81>
    DocumentRoot /var/www/html/demo_nodejs
    <Directory "/var/www/html/demo_nodejs">
        Order deny,allow
        Allow from all 
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

:wq -->

service httpd start
service httpd status
service httpd restart


3 Creating ssh key

sudo su -www-user
ssh-keygen -t rsa
--Enter

Your identification has been saved in /root/.ssh/id_rsa
Your public key has been saved in /root/.ssh/id_rsa.pub


cd /root/.ssh
mv id_rsa.pub authorized keys

chmod 600 authorized_keys

cd var/www/html/demon_nodejs
rồi clone code về 

4 Coppy private key to Jenkins server
cd/home 
mkdir Jenkinsv
vi web-server.pem 
chown -Rf jenkins:root
chmod 400 web-server.pem 

