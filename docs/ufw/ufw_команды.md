

---

### 🛠 1. Установка и базовое управление

## Установка UFW

```bash
sudo apt update && sudo apt install ufw -y

```

## Включение файрвола

```bash
sudo ufw enable

```

## Отключение файрвола

```bash
sudo ufw disable

```

## Перезагрузка правил

```bash
sudo ufw reload

```

## Сброс до заводских настроек

```bash
sudo ufw reset

```

---

### 🔍 2. Просмотр состояния и проверка правил

## Краткий статус (какие порты открыты)

```bash
sudo ufw status

```

## Подробный статус (с интерфейсами)

```bash
sudo ufw status verbose

```

## Список правил с номерами (для удаления)

```bash
sudo ufw status numbered

```

## Просмотр добавленных правил (до включения)

```bash
sudo ufw show added

```

## Отчет о структуре (Dry Run)

```bash
sudo ufw show report

```

## Просмотр сырого файла правил

```bash
cat /etc/ufw/user.rules

```

---

### 🟢 3. Разрешение трафика (Allow) и Комментарии

## Открыть текущий порт SSH (с комментарием)

```bash
sudo ufw allow 58216/tcp comment 'Custom SSH port'

```

## Открыть диапазон портов (TCP)

```bash
sudo ufw allow 21115:21119/tcp comment 'RustDesk TCP'

```

## Открыть конкретный порт (UDP)

```bash
sudo ufw allow 21116/udp comment 'RustDesk UDP'

```

## Разрешить всё с конкретного IP

```bash
sudo ufw allow from 1.2.3.4 comment 'Admin home IP'

```

## Разрешить IP доступ к конкретному порту

```bash
sudo ufw allow from 1.2.3.4 to any port 10000 proto tcp

```

---

### 🔴 4. Блокировка и Ограничение трафика (Deny / Limit)

## Заблокировать порт для всех

```bash
sudo ufw deny 80/tcp

```

## Заблокировать конкретный IP

```bash
sudo ufw deny from 1.2.3.4

```

## Заблокировать подсеть

```bash
sudo ufw deny from 192.168.1.0/24

```

## Защита от брутфорса (Лимит подключений для SSH)

```bash
sudo ufw limit 22/tcp comment 'Rate limit SSH'

```

---

### 🗑 5. Удаление правил

## Узнать номера правил

```bash
sudo ufw status numbered

```

## Удалить правило по номеру

```bash
sudo ufw delete 1

```

## Удалить по точному описанию

```bash
sudo ufw delete allow 80/tcp

```

---

### ⚙️ 6. Базовые политики и Конфигурация

## Запретить все входящие (по умолчанию)

```bash
sudo ufw default deny incoming

```

## Разрешить все исходящие (по умолчанию)

```bash
sudo ufw default allow outgoing

```

## Отключить поддержку IPv6 (установить IPV6=no)

```bash
sudo nano /etc/default/ufw

```

---

### 📝 7. Управление логированием

## Включить логи (базовый уровень)

```bash
sudo ufw logging on

```

## Выключить логи

```bash
sudo ufw logging off

```

## Задать уровень логирования (low, medium, high)

```bash
sudo ufw logging low

```

---

### 💡 8. Профили приложений (App Profiles)

## Посмотреть список доступных профилей приложений

```bash
sudo ufw app list

```

## Узнать, какие порты использует профиль (например, Nginx)

```bash
sudo ufw app info 'Nginx Full'

```

## Разрешить трафик по профилю

```bash
sudo ufw allow 'Nginx Full'

```