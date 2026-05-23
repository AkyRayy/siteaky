const projects = {
  akycheatcheck: {
    kicker: 'Plugin • AkyDevv • Post 642',
    title: 'AkyCheatCheck v1.2',
    subtitle: 'Современный и удобный плагин для проведения проверок игроков на читы. Основа — /revise, GUI-режимы, зона проверки, BossBar и автоматические наказания.',
    source: 'https://t.me/akydevv1/642',
    download: 'downloads/akycheatcheck/AkyCheatCheck.jar',
    fileLabel: 'Скачать AkyCheatCheck.jar',
    content: `
      <div class="info-grid">
        <div class="info-box"><b>Платформа</b><span>Paper 1.21.4</span></div>
        <div class="info-box"><b>Java</b><span>21</span></div>
        <div class="info-box"><b>Команда</b><span>/revise &lt;ник&gt;</span></div>
        <div class="info-box"><b>Статус</b><span>Бесплатный ресурс</span></div>
      </div>
      <h3>Основные возможности</h3>
      <ul>
        <li>Вызов игрока на проверку через <b>/revise &lt;ник&gt;</b>.</li>
        <li>GUI-меню с выбором способа проверки: Discord или AnyDesk.</li>
        <li>Отображение ника, IP-адреса, количества аккаунтов на IP и brand-name клиента Minecraft.</li>
        <li>Автоматическая телепортация в зону проверки.</li>
        <li>Полное ограничение действий игрока: можно только писать в чат.</li>
        <li>Таймер проверки в BossBar.</li>
        <li>Автобан за игнор проверки, токсичность и выход с сервера во время проверки.</li>
      </ul>
      <h3>Управление</h3>
      <ul>
        <li><b>/revise stop</b> — успешно завершить проверку.</li>
        <li><b>/revise ban &lt;причина&gt; &lt;время&gt;</b> — забанить игрока.</li>
        <li><b>/revise addtime</b> — добавить время к таймеру.</li>
        <li><b>/revise history</b> — просмотр истории проверок игрока.</li>
        <li><b>/revise reload</b> — перезагрузка конфигурации без рестарта.</li>
        <li><b>/revise stats</b> — просмотр общей статистики плагина.</li>
        <li><b>/revise leaderboard</b> — топ-10 модераторов по проверкам.</li>
      </ul>
      <h3>Что добавлено в v1.2</h3>
      <ul>
        <li>Добавлен title-экран при вызове на проверку с типом проверки и подзаголовком "Вы вызваны на проверку читов".</li>
        <li>Добавлены шаблоны причин бана в config.yml (killaura, fly, speed, reach, autoclicker, scaffold, xray, other) с дефолтными длительностями.</li>
        <li>Команда /revise ban теперь поддерживает использование шаблонов: /revise ban &lt;шаблон&gt; [время].</li>
        <li>Добавлена таблица moderator_stats в БД для отслеживания статистики модераторов.</li>
        <li>Реализована команда /revise history для просмотра истории проверок игрока.</li>
        <li>Реализована команда /revise reload для перезагрузки конфигурации без рестарта.</li>
        <li>Реализована команда /revise stats для просмотра общей статистики плагина.</li>
        <li>Реализована команда /revise leaderboard для отображения топ-10 модераторов по проверкам.</li>
        <li>checkInactivity(), autoBanToxic() и autoBanDisconnect() теперь используют runTask() для thread-safety.</li>
        <li>onMove() использует setTo() вместо teleport() для лучшей производительности.</li>
        <li>ChatListener кеширует UUID игрока вместо повторных вызовов getUniqueId().</li>
        <li>При отключении плагина теперь очищаются все BossBar через bossBarService.removeAll().</li>
        <li>Добавлены литералы 1000L для избежания int overflow в вычислениях времени.</li>
        <li>Добавлены разрешения: akycheatcheck.history, akycheatcheck.reload, akycheatcheck.stats, akycheatcheck.leaderboard.</li>
        <li>Добавлены индексы в БД для оптимизации запросов истории и статистики.</li>
      </ul>
    `
  },
  akyrunes: {
    kicker: 'Plugin • AkyDevv • Post 641',
    title: 'AkyRunes v1.2',
    subtitle: 'Плагин добавляет на сервер пять рун с пассивными эффектами. Руны сочетаются друг с другом, одинаковые не стакаются, а эффекты работают пока предмет лежит в инвентаре.',
    source: 'https://t.me/akydevv1/641',
    download: 'downloads/akyrunes/AkyRunes.jar',
    fileLabel: 'Скачать AkyRunes.jar',
    content: `
      <div class="info-grid">
        <div class="info-box"><b>Платформа</b><span>Paper 1.21.4</span></div>
        <div class="info-box"><b>Java</b><span>21</span></div>
        <div class="info-box"><b>Выдача</b><span>/akyrunes &lt;игрок&gt; &lt;руна&gt;</span></div>
        <div class="info-box"><b>Права</b><span>akyrunes.give, по умолчанию OP</span></div>
      </div>
      <h3>Пять рун</h3>
      <ul>
        <li><b>Анти-падение</b> — режет урон от падения на 80%.</li>
        <li><b>Твёрдость брони</b> — уменьшает износ надетой брони на 20%.</li>
        <li><b>Твёрдость</b> — снижает входящий урон на 4.5%.</li>
        <li><b>Курьер</b> — даёт +6% к скорости передвижения.</li>
        <li><b>Киллер</b> — добавляет 4% к урону в ближнем бою и со снарядами.</li>
      </ul>
      <div class="code-box">/akyrunes Steve killer

ID рун:
anti_fall
armor_hardness
hardness
courier
killer</div>
      <h3>Настройка</h3>
      <ul>
        <li>Автодополнение подсказывает игроков и названия рун.</li>
        <li>Поддерживаются HEX/RGB цвета и MiniMessage-градиенты.</li>
        <li>Названия рун и сообщения легко подогнать под стиль сервера.</li>
        <li>Активные руны кэшируются, лишних проверок каждый тик нет.</li>
      </ul>
      <h3>Что изменилось в v1.2</h3>
      <ul>
        <li>Кеш очищается только у конкретного игрока при выходе/смерти.</li>
        <li>getEquipmentSlot() использует сравнение ItemMeta.</li>
        <li>Устаревший PlayerPickupItemEvent заменён на EntityPickupItemEvent.</li>
        <li>ConfigManager кеширует Material enum значения.</li>
        <li>CommandManager переиспользует один экземпляр AkyRunesCommand.</li>
        <li>runeCache заменён на ConcurrentHashMap для thread-safety.</li>
        <li>Добавлены @NotNull/@Nullable аннотации и валидация конфига.</li>
      </ul>
    `
  },
  akydecompiler: {
    kicker: 'Tool • AkyDevv • Posts 634/635',
    title: 'AkyDecompiler 2.5',
    subtitle: 'Инструмент для декомпиляции Java-плагинов в готовый для рекода проект. Версия 2.5 получила новые функции, улучшенную производительность и чёрно-лаймовую тему.',
    source: 'https://t.me/akydevv1/634',
    download: 'downloads/akydecompiler/AkyDecomp2.5.7z',
    fileLabel: 'Скачать AkyDecomp2.5.7z',
    content: `
      <div class="info-grid">
        <div class="info-box"><b>Тип</b><span>Desktop/Web tool на Node.js</span></div>
        <div class="info-box"><b>Формат архива</b><span>.7z</span></div>
        <div class="info-box"><b>Источник описания</b><span>Пост 634</span></div>
        <div class="info-box"><b>Источник файла</b><span>Пост 635</span></div>
      </div>
      <h3>Что умеет</h3>
      <ul>
        <li>Декомпилирует Java-плагины в структуру, удобную для рекода.</li>
        <li>Отображает <b>.yml</b> файлы.</li>
        <li>Может находить <b>pom.xml</b> в плагинах — функция тестовая.</li>
        <li>Экспортирует результат в исходники.</li>
        <li>Добавляет красивое форматирование файлов и кода.</li>
        <li>Глобальный поиск по всем файлам (Ctrl+Shift+F).</li>
        <li>Миникарта кода в редакторе с навигацией.</li>
        <li>Закладки в файлах (Ctrl+B).</li>
        <li>Фильтр по типу файлов в дереве пакетов.</li>
      </ul>
      <h3>Изменения версии 2.5</h3>
      <ul>
        <li>Исправлена логика подсчёта статистики (классы, пакеты, строки теперь отображаются корректно).</li>
        <li>Улучшена обработка ошибок и надёжность работы с большими файлами (добавлен таймаут 5 минут).</li>
        <li>Обновлены цвета иконок во всех частях приложения для консистентности с новой темой.</li>
        <li>Добавлена проверка существования JAR-файлов перед обработкой.</li>
        <li>Улучшена очистка временных файлов при ошибках.</li>
        <li>Добавлено отображение размера файлов в дереве пакетов.</li>
        <li>Добавлено отображение даты изменения файлов в дереве пакетов.</li>
        <li>Добавлен индикатор прогресса декомпиляции с процентами и сообщениями о статусе.</li>
        <li>Добавлен глобальный поиск по всем файлам (Ctrl+Shift+F) с отображением результатов и переходом к файлу.</li>
        <li>Добавлена миникарта кода в редакторе с синхронизацией прокрутки и возможностью клика для навигации.</li>
        <li>Добавлены закладки в файлах (Ctrl+B) с индикаторами в номерах строк и кнопкой в заголовке редактора.</li>
        <li>Добавлен фильтр по типу файлов в дереве пакетов (Java, XML, YAML, JSON, POM, Properties, Manifest).</li>
        <li>Изменена тема приложения на чёрно-лаймовый.</li>
      </ul>
      <h3>Инструкция запуска</h3>
      <ul>
        <li>Скачать и установить Node.js.</li>
        <li>Открыть консоль Windows.</li>
        <li>Перейти в папку с исходниками декомпилятора: <b>cd путь_к_папке</b>.</li>
        <li>Выполнить <b>npm install</b>.</li>
        <li>Запустить проект: <b>npm start</b> или <b>npm run start</b>.</li>
      </ul>
    `
  },
  akycustomitems: {
    kicker: 'Paid Plugin • AkyDevv',
    title: 'AkyCustomItems',
    subtitle: 'Платный плагин с набором кастомных предметов и способностей для Minecraft-сервера. Для покупки писать в Telegram @AkyRayy.',
    source: 'https://t.me/AkyRayy',
    buy: 'https://t.me/AkyRayy',
    download: '',
    fileLabel: '',
    content: `
      <div class="price-panel">
        <strong>450₽</strong>
        <p>Для покупки и получения файла напишите в Telegram <b>@AkyRayy</b>.</p>
      </div>
      <div class="info-grid">
        <div class="info-box"><b>Тип</b><span>Кастомные предметы</span></div>
        <div class="info-box"><b>Модельки</b><span>custom-model-data 1000–1008</span></div>
        <div class="info-box"><b>Права</b><span>Можно отключить, permissions уже прописаны</span></div>
        <div class="info-box"><b>Покупка</b><span>@AkyRayy</span></div>
      </div>
      <h3>Кастомные предметы</h3>
      <div class="item-grid">
        <div class="item-box">
          <small>custom-model-data: 1000</small>
          <h4>Лук Бомбила</h4>
          <p>Лук, который выстреливает TNT. Требует 1 TNT в инвентаре, проверяет offhand, взрыв не ломает блоки.</p>
          <ul><li>Fuse: 40 тиков</li><li>Yield: 3.0</li><li>Частицы EXPLOSION_EMITTER</li><li>Permission: akyitems.bombilabow.use</li></ul>
        </div>
        <div class="item-box">
          <small>custom-model-data: 1001</small>
          <h4>Меч Прометея</h4>
          <p>Золотой меч с мощью незеритового. Даёт пассивную огнестойкость, а Shift + ЛКМ поджигает врагов в радиусе 5 блоков.</p>
          <ul><li>Урон: 8.0</li><li>Attack speed: 1.6</li><li>Игнор брони у активки</li><li>Кулдаун: 60 тиков</li></ul>
        </div>
        <div class="item-box">
          <small>custom-model-data: 1002–1005</small>
          <h4>Броня Геракла</h4>
          <p>Полный сет из незеритовой брони: шлем, нагрудник, поножи и ботинки. Даёт регенерацию и шанс отражения урона.</p>
          <ul><li>Protection IV, Unbreaking III, Mending</li><li>Регенерация при полном сете</li><li>45% шанс отразить урон ×2.2</li><li>max-reflection-damage: 100</li></ul>
        </div>
        <div class="item-box">
          <small>custom-model-data: 1006</small>
          <h4>Кирка Гнома</h4>
          <p>Незеритовая кирка, которая ломает блоки 2×2 по паттерну CROSS. Есть шанс перегрузки и кулдаун 10 секунд.</p>
          <ul><li>Efficiency X, Unbreaking III</li><li>45% шанс перезарядки</li><li>allowed/denied blocks</li><li>max-blocks-per-use: 5</li></ul>
        </div>
        <div class="item-box">
          <small>custom-model-data: 1007</small>
          <h4>Голова Медведя</h4>
          <p>Шлем-голова с активным рыком: при sneak даёт Resistance III на 15 секунд и Slowness II на 10 секунд.</p>
          <ul><li>+6 брони</li><li>Protection IV, Unbreaking III</li><li>Кулдаун: 30 секунд</li><li>Звуки медведя и частицы ANGRY_VILLAGER</li></ul>
        </div>
        <div class="item-box">
          <small>custom-model-data: 1008</small>
          <h4>Меч Короля Демонов</h4>
          <p>Незеритовый меч с Sharpness VII и тёмной ценой: минус 2 сердца максимального здоровья и шанс самоповреждения.</p>
          <ul><li>Урон: 8.0</li><li>10% шанс получить 35% урона себе</li><li>Self-damage не убивает</li><li>SOUL_FIRE_FLAME эффекты</li></ul>
        </div>
      </div>
      <h3>Сообщения и ограничения</h3>
      <ul>
        <li>Для каждого предмета есть отдельные permissions: <b>akyitems.*.use</b>.</li>
        <li>В конфиге предусмотрены cooldown-сообщения, received-сообщения и тексты ошибок.</li>
        <li>Большинство ограничений можно включить/выключить: pvp-only, require-permission, require-full-set и другие.</li>
      </ul>
      <div class="code-box">Примеры предметов:
- Bombila Bow: TNT-выстрелы без разрушения блоков
- Prometheus Sword: fire resistance + массовый поджог
- Heracles Armor: regen + reflect
- Gnome Pickaxe: 2x2 mining + overload
- Bear Head: roar buff
- Demon King Sword: Sharpness VII + health penalty</div>
    `
  }
};

const modal = document.getElementById('projectModal');
const modalPanel = document.querySelector('.modal-panel');
const modalTitle = document.getElementById('modalTitle');
const modalKicker = document.getElementById('modalKicker');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalActions = document.getElementById('modalActions');
const modalContent = document.getElementById('modalContent');
let lastFocused = null;

function buildActions(project) {
  const actions = [];
  if (project.download) {
    actions.push(`<a class="btn primary" href="${project.download}" download>${project.fileLabel || 'Скачать файл'}</a>`);
  }
  if (project.buy) {
    actions.push(`<a class="btn buy" href="${project.buy}" target="_blank" rel="noreferrer">Купить за 450₽</a>`);
  }
  if (project.source) {
    const text = project.buy ? 'Написать продавцу' : 'Открыть пост в Telegram';
    actions.push(`<a class="btn ghost" href="${project.source}" target="_blank" rel="noreferrer">${text}</a>`);
  }
  return actions.join('');
}

function openProject(id) {
  const project = projects[id];
  if (!project) return;
  lastFocused = document.activeElement;
  modalTitle.textContent = project.title;
  modalKicker.textContent = project.kicker;
  modalSubtitle.textContent = project.subtitle;
  modalActions.innerHTML = buildActions(project);
  modalContent.innerHTML = project.content;
  
  // Get accent color from card
  const card = document.querySelector(`[data-project="${id}"]`);
  const accentColor = card ? getComputedStyle(card).getPropertyValue('--accent') : 'var(--acid)';
  modalPanel.style.setProperty('--modal-accent', accentColor);
  
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', event => {
    if (event.target.closest('a')) return;
    openProject(card.dataset.project);
  });
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});
