# SBOR
# SBOR Вадик, просто копируешь ссылку из кнопки <code> заходишь в командную консоль и пишешь там:
cd расположение папки в которую хочешь знакинуть его 
c\говно\моча git clone у тебя всё туда скачивается 
а, когда я буду вносить изменения в проект просто напишешь в консоли git pull  
Если ты сам создал изменения то пишешь в консоли:
git status и тебе показываются изменения, которые ты внёс в проект
git add index.html (для примера) находится в статусе перед добавлением в репозиторий
git commit -m "Add index.html" файл готов к переносу в репозиторий
git push добавляет файл в репозиторий
тебя попросят твой ник в гитхабе и потом пароль. Но это будет только один раз.
Теперь файл в репозитории
git pull восполняет все недостающие файлы из репозитория на твой компьютер

если ты изменил несколько файлов, то пишешь
git add -A 
git status (покажет тебе изменённые файлы красным, а готовые к переносу зелёным)
git commit -m "Всё то угодно пиши только на английском"
git push (файлы ушли в репозиторий)
