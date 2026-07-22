---
title: Команды Ansible 🐧 
---

# Команды Ansible


## 📁 Работа с инвентарем

## Проверка структуры инвентаря

```bash
ansible-inventory --list -i inventory.ini
```

```bash
ansible-inventory --graph -i inventory.ini
```

## Проверка хостов в инвентаре

```bash
ansible all -i inventory.ini --list-hosts
```

```bash
ansible webservers -i inventory.ini --list-hosts  # для конкретной группы
```

## Тестирование подключения

```bash
ansible all -i inventory.ini -m ping
```

```bash
ansible webservers -i inventory.ini -m ping -u root  # с указанием пользователя
```

## 🚀 Запуск плейбуков

## Основные опции

```bash
ansible-playbook zabbix-agent.yml  # Базовый запуск
```

```bash
ansible-playbook zabbix-agent.yml --syntax-check  # Проверка синтаксиса
```

```bash
ansible-playbook zabbix-agent.yml --check  # Имитация выполнения (check mode)
```

```bash
ansible-playbook zabbix-agent.yml --step  # Пошаговый запуск (с подтверждением)
```

## Уровни детализации (verbose)

```bash
ansible-playbook zabbix-agent.yml -v    # Базовый
```

```bash
ansible-playbook zabbix-agent.yml -vv   # Подробный
```

```bash
ansible-playbook zabbix-agent.yml -vvv  # Еще подробнее
```

```bash
ansible-playbook zabbix-agent.yml -vvvv # Максимальная детализация
```

## Управление хостами и группами

```bash
ansible-playbook zabbix-agent.yml --limit "web01,web02"  # Для конкретных хостов
```

```bash
ansible-playbook zabbix-agent.yml --limit "webservers"  # Для группы хостов
```

```bash
ansible-playbook zabbix-agent.yml -i production.ini  # С другим инвентарем
```

## Работа с переменными

```bash
ansible-playbook zabbix-agent.yml -e "zabbix_server=192.168.1.100"  # Передача переменной
```

```bash
ansible-playbook zabbix-agent.yml --extra-vars "@vars.json"  # Загрузка из файла
```

## Использование тегов

```bash
ansible-playbook zabbix-agent.yml --tags "install,configure"  # Запуск определенных тегов
```

```bash
ansible-playbook zabbix-agent.yml --skip-tags "restart"  # Пропуск тегов
```

## Работа с Vault

```bash
ansible-playbook zabbix-agent.yml --ask-vault-pass  # Запрос пароля
```

```bash
ansible-playbook zabbix-agent.yml --vault-password-file ~/.vault_pass  # Файл с паролем
```

## Производительность

```bash
ansible-playbook zabbix-agent.yml -f 10  # Количество параллельных потоков (по умолчанию 5)
```

## 🔧 Работа с ролями и коллекциями

## Создание ролей

```bash
ansible-galaxy init role_name  # Базовая структура роли
```

```bash
ansible-galaxy init role_name --init-path ./roles  # В определенной директории
```

## Установка из Galaxy

```bash
ansible-galaxy role install geerlingguy.nginx  # Установка роли
```

```bash
ansible-galaxy role install -r requirements.yml  # Установка из requirements файла
```

```bash
ansible-galaxy collection install community.zabbix  # Установка коллекции
```

```bash
ansible-galaxy collection install -r requirements.yml  # Установка коллекций из файла
```

## Управление установленными

```bash
ansible-galaxy role list  # Список установленных ролей
```

```bash
ansible-galaxy collection list  # Список установленных коллекций
```

```bash
ansible-galaxy role search nginx --author geerlingguy  # Поиск ролей
```

```bash
ansible-galaxy role remove geerlingguy.nginx  # Удаление роли
```

## 📦 Работа с модулями (Ad-hoc команды)

## Управление пакетами

::: code-group

```bash [Debian/Ubuntu]
ansible all -m apt -a "name=zabbix-agent state=present"
```

```bash [CentOS/RHEL]
ansible all -m yum -a "name=zabbix-agent state=present"
```

```bash [Fedora]
ansible all -m dnf -a "name=zabbix-agent state=present"
```

:::

## Управление сервисами

```bash
ansible all -m service -a "name=zabbix-agent state=started enabled=yes"  # Запуск и автозагрузка
```

```bash
ansible all -m systemd -a "name=zabbix-agent state=restarted"  # Перезапуск через systemd
```

## Копирование файлов

```bash
ansible all -m copy -a "src=/etc/zabbix/zabbix_agentd.conf dest=/etc/zabbix/ backup=yes"  # С резервным копированием
```

```bash
ansible all -m template -a "src=zabbix_agentd.conf.j2 dest=/etc/zabbix/zabbix_agentd.conf"  # Использование шаблонов
```

## Выполнение команд

```bash
ansible all -m command -a "systemctl status zabbix-agent"  # Простые команды (без shell)
```

```bash
ansible all -m shell -a "ps aux | grep zabbix"  # Shell команды с пайпами
```

```bash
ansible all -m raw -a "echo 'test' > /tmp/test.txt"  # Raw команды (без Python)
```

## Сбор информации о системе

```bash
ansible all -m setup  # Все факты
```

```bash
ansible web01 -m setup -a "filter=ansible_os_family"  # Фильтр по OS
```

```bash
ansible all -m setup -a "gather_subset=network"  # Только сетевые настройки
```

## Управление файлами и пользователями

```bash
ansible all -m file -a "path=/tmp/test state=directory mode=0755"  # Создание директории
```

```bash
ansible all -m file -a "path=/tmp/test state=absent"  # Удаление
```

```bash
ansible all -m user -a "name=zabbix state=present groups=sudo"  # Создание пользователя
```

## 🔐 Работа с Ansible Vault

## Основные операции

```bash
ansible-vault encrypt secrets.yml  # Шифрование файла
```

```bash
ansible-vault encrypt vars/production.yml  # Шифрование файла в директории
```

```bash
ansible-vault decrypt secrets.yml  # Расшифровка
```

```bash
ansible-vault view secrets.yml  # Просмотр (без расшифровки на диск)
```

```bash
ansible-vault edit secrets.yml  # Редактирование
```

```bash
ansible-vault rekey secrets.yml  # Смена пароля
```

## Шифрование строк

```bash
ansible-vault encrypt_string 'my_password' --name 'db_password'  # Шифрование строки
```

```bash
# Результат можно использовать в переменных:
# db_password: !vault |
#   $ANSIBLE_VAULT;1.1;AES256
#   663864396532363436...
```

## 🐍 Работа с Python окружением

## Проверка версий

```bash
ansible --version
```

```bash
python3 --version
```

## Установка и обновление

```bash
pip install ansible  # Установка
```

```bash
pip install ansible-core  # Минимальная версия
```

```bash
pip install ansible --upgrade  # Обновление
```

```bash
ansible-galaxy collection install community.general  # Установка коллекций
```

```bash
ansible-galaxy collection install community.docker
```

## 📊 Команды для Zabbix

## Проверка статуса

```bash
ansible all -m shell -a "systemctl status zabbix-agent | grep Active"  # Статус сервиса
```

```bash
ansible all -m command -a "zabbix_agentd -t agent.version"  # Версия агента
```

## Логи и отладка

```bash
ansible all -m shell -a "tail -n 20 /var/log/zabbix/zabbix_agentd.log"  # Просмотр логов
```

```bash
ansible all -m systemd -a "name=zabbix-agent state=restarted" -v  # Перезапуск с отладкой
```

```bash
ansible all -m shell -a "zabbix_agentd -T"  # Тест конфигурации
```

```bash
ansible all -m shell -a "zabbix_agentd -p"  # Все доступные метрики
```

## 🛠 Диагностика и отладка

## Проверка соединений

```bash
ansible web01 -m ping -vvv  # Детальный ping
```

```bash
ansible web01 -m setup | less  # Сбор информации о хосте
```

## Повышенные привилегии

```bash
ansible all -m ping -b --become-user=root  # Становимся root
```

```bash
ansible-playbook playbook.yml -b -K  # Запуск с sudo (запросит пароль)
```

## Проверка плейбуков

```bash
for playbook in *.yml; do 
  ansible-playbook $playbook --syntax-check
done  # Проверка синтаксиса всех плейбуков
```

```bash
ansible-playbook zabbix-agent.yml --list-tasks  # Просмотр задач
```

```bash
ansible-playbook zabbix-agent.yml --list-tags  # Просмотр доступных тегов
```

## Документация модулей

```bash
ansible-doc -l | grep zabbix  # Список всех модулей
```

```bash
ansible-doc zabbix_agent  # Документация конкретного модуля
```

## 📝 Работа с конфигурацией

## Просмотр настроек

```bash
ansible-config view  # Текущая конфигурация
```

```bash
ansible-config dump  # Все настройки со значениями
```

```bash
ansible-config dump | grep gathering  # Поиск конкретной настройки
```

## Создание конфигурации

```bash
ansible-config init --disabled > ansible.cfg  # Создание базового файла
```

## 🔄 Дополнительные утилиты

## Ansible Console (интерактивный режим)

```bash
ansible-console -i inventory.ini  # Запуск консоли
```

```bash
# Примеры команд внутри консоли:
# ping all
# apt name=nginx state=present
# service name=nginx state=started
```

## Работа с Galaxy

```bash
ansible-galaxy role info geerlingguy.nginx  # Информация о роли
```

```bash
ansible-galaxy role init --role-skeleton=./skeleton  # Создание requirements файла
```

## 📚 Полезные ссылки

- [Официальная документация Ansible](https://docs.ansible.com/)
- [Ansible Galaxy](https://galaxy.ansible.com/)
- [Ansible Cheat Sheet](https://cheat.readthedocs.io/en/latest/ansible/)
```

