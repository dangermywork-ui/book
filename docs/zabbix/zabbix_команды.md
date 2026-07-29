## Установка агента
```
sudo apt install zabbix-agent2
```

## Редактирование конфигурационного файла
```
sudo nano /etc/zabbix/zabbix_agent2.conf
```
## Просмотр логов в реальном времени
```
sudo tail -f /var/log/zabbix/zabbix_agent2.log
```

## Корректное обновление сервера
```
sudo systemctl stop zabbix-server && mysqldump -u zabbix -p --single-transaction zabbix > ~/zabbix_pre_upgrade.sql && sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y && sudo apt clean -y && sudo reboot
```