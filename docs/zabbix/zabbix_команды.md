## Корректное обновление сервера
```
sudo systemctl stop zabbix-server && mysqldump -u zabbix -p --single-transaction zabbix > ~/zabbix_pre_upgrade.sql && sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y && sudo apt clean -y && sudo reboot
```