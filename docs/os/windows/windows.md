---
title: Windows 💻
---

# 💻 Руководство по Windows (PowerShell / CMD)

Добро пожаловать в мир Windows! Здесь собраны основные команды и приёмы для эффективной работы в командной строке и PowerShell. 🚀

---

## 📁 Навигация и файлы

| Команда | Назначение |
|--------|------------|
| `dir`, `ls` (в PowerShell) | 📋 Просмотр содержимого каталога |
| `cd`, `cd ..`, `cd ~`, `cd /` | 🧭 Навигация по файловой системе |
| `cd` (без параметров) | 📍 Текущий путь |
| `mkdir dir` | 📂 Создать каталог |
| `rmdir dir` | 🗑️ Удалить **пустой** каталог |
| `rmdir /s dir` | ⚠️ Удалить **непустой** каталог |
| `copy src dst`, `xcopy src dst /e` | 📄 Копирование файлов и папок |
| `move old new` | ✏️ Переименование / перемещение |
| `del file` | 🗑️ Удалить файл |
| `type nul > file` | 📄 Создать пустой файл |
| `echo. > file` | 📄 Создать файл (другой способ) |

---

## 📄 Просмотр и редактирование файлов

| Команда | Назначение |
|--------|------------|
| `type file` | 📃 Вывести всё содержимое |
| `more file` | 📖 Постраничный просмотр |
| `find "text" file` | 🔎 Поиск текста в файле |
| `notepad file` | ✍️ Открыть в Блокноте |
| `notepad++ file` | ✍️ Открыть в Notepad++ (если установлен) |
| `code file` | ✍️ Открыть в VS Code (если установлен) |

---

## ⚙️ Управление процессами

| Команда | Описание |
|--------|----------|
| `tasklist` | 🔍 Список процессов |
| `tasklist /v` | 🔍 Детальный список процессов |
| `taskkill /PID 1234` | 🛑 Завершить процесс по PID |
| `taskkill /IM notepad.exe` | 🛑 Завершить процесс по имени |
| `taskkill /F /IM notepad.exe` | 💀 Принудительно завершить процесс |
| `start notepad.exe` | 🚀 Запустить программу |
| `start /B command` | 🎛️ Запустить в фоне (без окна) |

---

## 📊 Системная информация

| Команда | Описание |
|--------|----------|
| `systeminfo` | 🖥️ Полная информация о системе |
| `wmic os get caption,version` | 🏷️ Версия ОС |
| `wmic cpu get name` | 🧠 Информация о процессоре |
| `wmic memorychip get capacity` | 🧠 Информация о памяти |
| `wmic diskdrive get model,size` | 💾 Информация о дисках |
| `wmic logicaldisk get size,freespace,caption` | 📊 Свободное место на дисках |
| `fsutil volume diskfree C:` | 📊 Свободное место на диске C: |
| `systeminfo | findstr "Время"` | ⏱️ Время работы системы |
| `hostname` | 🏠 Имя компьютера |
| `whoami` | 👤 Текущий пользователь |

---

## 🔐 Права доступа

| Команда | Описание |
|--------|----------|
| `cacls file` | 🔒 Просмотр прав доступа (устаревшая) |
| `icacls file` | 🔒 Просмотр/изменение прав доступа (современная) |
| `icacls file /grant user:F` | 🔓 Дать полный доступ пользователю |
| `icacls file /grant user:R` | 🔓 Дать доступ только на чтение |
| `icacls file /remove user` | ❌ Удалить права пользователя |
| `takeown /f file` | 👤 Стать владельцем файла |
| `takeown /f folder /r` | 👤 Стать владельцем папки рекурсивно |

---

## 🌐 Сетевые команды

| Команда | Описание |
|--------|----------|
| `ipconfig` | 🌐 Сетевые интерфейсы (базовый) |
| `ipconfig /all` | 🌐 Сетевые интерфейсы (детальный) |
| `ping host` | 📡 Проверить доступность |
| `ping -t host` | 📡 Бесконечный ping (Ctrl+C для остановки) |
| `tracert host` | 🧭 Трассировка маршрута |
| `nslookup example.com` | 🌍 DNS-запросы |
| `netstat -an` | 🔌 Все соединения и порты |
| `netstat -b` | 🔌 Соединения с именами процессов |
| `netstat -ano | findstr :80` | 🔍 Какой процесс слушает порт 80 |
| `telnet host port` | 🧪 Проверить открытость порта |
| `Test-NetConnection host -Port 80` (PS) | 🧪 Проверить порт (PowerShell) |
| `ssh user@host` | 🔑 Подключение по SSH (требуется установка) |
| `curl -O URL` | ⬇️ Загрузка файлов (в PowerShell 7+) |

---

## 📦 Архивация и сжатие

| Формат | Архивация | Распаковка |
|--------|-----------|------------|
| `.zip` | `Compress-Archive -Path dir -Dest archive.zip` (PS) | `Expand-Archive archive.zip -Dest dir` (PS) |
| `.zip` | `powershell Compress-Archive ...` (из CMD) | `powershell Expand-Archive ...` (из CMD) |
| `.7z` | `7z a archive.7z dir` (требует 7-Zip) | `7z x archive.7z` |

> 💡 Установка 7-Zip: скачать с [7-zip.org](https://www.7-zip.org/) или через winget:
> `winget install 7zip.7zip`

---

## ⏰ Планировщик задач

### Просмотр задач
```cmd
schtasks
```

### Создание задачи (ежедневно в 02:00)
```cmd
schtasks /create /tn "MyBackup" /tr "C:\backup.bat" /sc daily /st 02:00
```

### Запустить задачу
```cmd
schtasks /run /tn "MyBackup"
```

### Удалить задачу
```cmd
schtasks /delete /tn "MyBackup" /f
```

### Просмотр деталей задачи
```cmd
schtasks /query /tn "MyBackup" /v
```

**🔄 Альтернатива - PowerShell Scheduled Tasks:**
```powershell
Get-ScheduledTask
Register-ScheduledTask -TaskName "MyBackup" -Action (New-ScheduledTaskAction -Execute "C:\backup.bat") -Trigger (New-ScheduledTaskTrigger -Daily -At 2am)
Unregister-ScheduledTask -TaskName "MyBackup" -Confirm:$false
```

---

## 💾 Работа с дисками

| Команда | Описание |
|--------|----------|
| `wmic logicaldisk get name,size,freespace` | 💿 Список дисков и свободное место |
| `diskpart` | 🛠️ Утилита управления дисками (интерактивная) |
| `diskpart /s script.txt` | 🛠️ Выполнить скрипт diskpart |
| `chkdsk C:` | 🔍 Проверка диска C: на ошибки |
| `chkdsk C: /f` | 🔧 Исправить ошибки на диске C: |
| `chkdsk C: /r` | 🔧 Восстановить повреждённые сектора |
| `defrag C:` | 🧩 Дефрагментация диска C: |

### Пример скрипта diskpart:
```
list disk
select disk 1
clean
create partition primary
format fs=ntfs quick
assign letter=D
```

---

## 🔍 Поиск и фильтрация

| Команда | Описание |
|--------|----------|
| `find "text" file` | 🔎 Найти строки с "text" в файле |
| `findstr "text" file` | 🔎 Расширенный поиск (regex) |
| `findstr /s "text" *.txt` | 🔄 Рекурсивный поиск |
| `findstr /i "Text" file` | 🔤 Без учёта регистра |
| `findstr /v "text" file` | ❌ Инверсия (всё, кроме совпадений) |
| `dir /s *.log` | 📂 Поиск файлов по имени |
| `where file` | 📂 Найти файл в PATH |
| `Get-ChildItem -Recurse *.log` (PS) | 📂 Рекурсивный поиск (PowerShell) |

---

## 📈 Мониторинг и журналы

| Команда | Описание |
|--------|----------|
| `tasklist /v` | 📊 Детальный список процессов |
| `wmic process get name,pmem,cpu` | 📊 Процессы с использованием памяти/CPU |
| `perfmon` | 📊 Системный монитор (графический) |
| `resmon` | 📊 Монитор ресурсов (графический) |
| `Get-Process | Sort-Object CPU -Descending` (PS) | 📊 Процессы по CPU (PowerShell) |
| `wevtutil qe System /c:10` | 📜 Последние 10 системных событий |
| `wevtutil qe Application /c:5 /rd:true /f:text` | 📜 Последние 5 событий приложений |
| `Get-WinEvent -LogName System -MaxEvents 10` (PS) | 📜 Системные события (PowerShell) |

---

## 🛠 Управление программами (Windows)

| Команда | Описание |
|--------|----------|
| `winget search keyword` | 🔍 Поиск программы |
| `winget install pkg` | 📦 Установить программу |
| `winget uninstall pkg` | ❌ Удалить программу |
| `winget list` | 📋 Список установленных программ |
| `winget upgrade` | ⬆️ Проверить обновления |
| `choco search keyword` (требует Chocolatey) | 🔍 Поиск программы |
| `choco install pkg` | 📦 Установить программу |
| `choco uninstall pkg` | ❌ Удалить программу |

---

## 🧰 Полезные утилиты

| Команда | Описание |
|--------|----------|
| `doskey /history` | 📜 История команд (CMD) |
| `Get-History` (PS) | 📜 История команд (PowerShell) |
| `$env:Path` (PS) | 🔍 Переменная PATH (PowerShell) |
| `echo %PATH%` | 🔍 Переменная PATH (CMD) |
| `setx PATH "%PATH%;C:\MyTools"` | ⚡ Добавить в PATH (CMD) |
| `timeout /t 5` | ⏹️ Задержка на 5 секунд |
| `shutdown /s /t 0` | ⏹️ Выключить компьютер сейчас |
| `shutdown /r /t 0` | 🔄 Перезагрузить компьютер сейчас |
| `shutdown /l` | 🚪 Выйти из системы |
| `shutdown /a` | ❌ Отменить выключение |

---

## 🧹 Очистка системы

```cmd
# Очистка временных файлов
del /f /s /q %temp%\*.*
del /f /s /q C:\Windows\Temp\*.*

# Очистка кэша DNS
ipconfig /flushdns

# Очистка кэша обновлений Windows
net stop wuauserv
del /f /s /q C:\Windows\SoftwareDistribution\Download\*.*
net start wuauserv

# Очистка диска с помощью встроенной утилиты
cleanmgr /sageset:1
cleanmgr /sagerun:1
```

---

## 🔍 Поиск больших файлов (>30 МБ)

**PowerShell:**
```powershell
Get-ChildItem -Path C:\ -Recurse -File -ErrorAction SilentlyContinue | 
Where-Object { $_.Length -gt 30MB } | 
Sort-Object Length -Descending | 
Select-Object FullName, @{N='Size(MB)';E={[math]::Round($_.Length/1MB,2)}}
```

**CMD (требует PowerShell):**
```cmd
powershell -Command "Get-ChildItem -Path C:\ -Recurse -File -ErrorAction SilentlyContinue | Where-Object { $_.Length -gt 30MB } | Sort-Object Length -Descending | Select-Object FullName, @{N='Size(MB)';E={[math]::Round($_.Length/1MB,2)}}"
```

---

## 👤 Работа с пользователями

| Команда | Описание | Пример |
|--------|----------|--------|
| `whoami` | 👤 Показать текущего пользователя | `whoami` |
| `net user` | 👥 Список пользователей | `net user` |
| `net user username` | 👤 Информация о пользователе | `net user alice` |
| `net user username password /add` | 👤 Создать пользователя | `net user alice P@ssw0rd /add` |
| `net user username /delete` | 🗑️ Удалить пользователя | `net user alice /delete` |
| `net user username /active:no` | 🔒 Заблокировать пользователя | `net user alice /active:no` |
| `net user username /active:yes` | 🔓 Разблокировать | `net user alice /active:yes` |
| `net localgroup` | 👥 Список групп | `net localgroup` |
| `net localgroup group username /add` | 👥 Добавить в группу | `net localgroup Administrators alice /add` |
| `net localgroup group username /delete` | 👥 Удалить из группы | `net localgroup Users alice /delete` |

---

## 🔑 Управление правами администратора

### Запуск от имени администратора из CMD:
```cmd
runas /user:Administrator "cmd.exe"
runas /user:Administrator "powershell.exe -Command 'Start-Process cmd -Verb RunAs'"
```

### PowerShell с правами администратора:
```powershell
Start-Process PowerShell -Verb RunAs
```

### Проверка прав администратора:
```cmd
net session
```
Если ошибка - запустите от имени администратора.

---

## 📋 Переменные окружения

| Команда | Описание |
|--------|----------|
| `echo %USERNAME%` | 👤 Имя текущего пользователя |
| `echo %COMPUTERNAME%` | 🖥️ Имя компьютера |
| `echo %CD%` | 📍 Текущий каталог |
| `echo %DATE%` | 📅 Текущая дата |
| `echo %TIME%` | ⏰ Текущее время |
| `echo %RANDOM%` | 🎲 Случайное число |
| `echo %PATH%` | 🔍 Переменная PATH |
| `set` | 📋 Все переменные окружения |

---

## 🚀 Запуск программ и файлов

| Команда | Описание |
|--------|----------|
| `start notepad.exe` | 🚀 Запустить программу |
| `start "" "C:\Program Files\App\app.exe"` | 🚀 Запустить с пробелами в пути |
| `start file.txt` | 📄 Открыть файл в ассоциированной программе |
| `start folder` | 📂 Открыть папку в Проводнике |
| `start .` | 📂 Открыть текущую папку |
| `start /min notepad.exe` | 🚀 Запустить в свёрнутом окне |
| `start /max notepad.exe` | 🚀 Запустить в развёрнутом окне |

---

::: warning ⚠️ Внимание
Будьте осторожны с командами `del` и `rmdir /s`. Они удаляют файлы без возможности восстановления из Корзины!
:::

---

## 🔄 Соответствие команд Linux ↔ Windows

| Linux | Windows (CMD) | Windows (PowerShell) |
|-------|---------------|---------------------|
| `ls` | `dir` | `ls`, `Get-ChildItem` |
| `cd` | `cd` | `cd`, `Set-Location` |
| `cp` | `copy` | `copy`, `Copy-Item` |
| `mv` | `move` | `move`, `Move-Item` |
| `rm` | `del` | `del`, `Remove-Item` |
| `mkdir` | `mkdir` | `mkdir`, `New-Item -ItemType Directory` |
| `rmdir` | `rmdir` | `rmdir`, `Remove-Item -Recurse` |
| `cat` | `type` | `type`, `Get-Content` |
| `grep` | `findstr` | `findstr`, `Select-String` |
| `ps` | `tasklist` | `tasklist`, `Get-Process` |
| `kill` | `taskkill` | `taskkill`, `Stop-Process` |
| `ping` | `ping` | `ping` |
| `ifconfig` | `ipconfig` | `ipconfig`, `Get-NetIPAddress` |
| `uname -a` | `systeminfo` | `systeminfo`, `Get-ComputerInfo` |
| `whoami` | `whoami` | `whoami` |
| `sudo` | `runas` | `Start-Process -Verb RunAs` |
| `clear` | `cls` | `cls`, `Clear-Host` |

---

