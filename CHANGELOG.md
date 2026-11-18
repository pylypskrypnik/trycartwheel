## 2026-11-18
- catering.html: секция What our clients say теперь на белом фоне; секция FAQ на фирменном сером градиенте (`var(--grad-gray)`, серый к белому) вместо белого. Как проверить: catering.html на 1280 и 390 px, блоки между eBook и демо-формой.
- catering.html, блок Free eBook · Catering delivery: секция на сплошном салатовом фоне (`var(--teal-wash)`), левая текстовая часть карточки теперь белая (`var(--surface)`), фото справа без изменений. У следующей секции What our clients say убрана верхняя линия: её градиент начинается с того же салатового, и две секции читаются как один фон. Как проверить: catering.html на 1280 и 390 px, блок над отзывами.
- catering.html, блок Third-party catering delivery: верхний padding секции уменьшен с `clamp(60px,8vw,90px)` до `clamp(28px,4vw,52px)`, чтобы отступ над текстом (от блока Ask AI) был примерно равен отступу снизу до фона Pricing (на 1280 px около 58 и 64 px). Нижний padding не менялся. Как проверить: catering.html на 1280 и 390 px, блок между Ask AI и Pricing.
- catering.html, hero: подпись "Trusted by 350+ brands" отодвинута от логотипов (отступ 12 → 22 px), вся полоса с логотипами поднята на 20 px (распорка над ней уменьшена на 20 px), так что визуально стоит по центру между мятным фоном и следующей секцией. Нижняя граница мятного фона пересчитана (`bottom` слоёв `.rp-*` 167 → 157 px), положение фона не изменилось. Как проверить: catering.html на 1280 и 390 px. Проверено Playwright, скролла нет.
- catering.html: (1) First-party catering: телефоны поменяны по высоте, первый (с трекингом) стоит выше, второй (с отзывом) ниже, чтобы композиция отличалась от ezCater compliance; нахлёст и тень-пол сохранены. (2) Pricing: содержимое прежнее, градиентный фон салатовый → белый теперь на всю ширину экрана (`margin:0 calc(50% - 50vw)`, `padding:28px calc(50vw - 50%)`), рамка и скругление убраны. Как проверить: catering.html на 1280 и 390 px, фон Pricing упирается в края экрана, горизонтального скролла нет.
- catering.html: фирменный светло-салатовый (тот же, что под блоком Ask AI, `rgba(42,223,180,.13)` на белом = `#E3FBF5`). (1) `--grad-teal` теперь `#E3FBF5 → #FFFFFF` (раньше `#E6F6F6`, серо-бирюзовый): так выглядят градиенты Pricing, цитат-блоков и остальных секций; `--teal-wash` тоже `#E3FBF5` (ezCater compliance, плашки иконок, превью карточек инструментов). (2) Блок "From the blog · Restaurant Catering Workshop" теперь на сплошном салатовом фоне, карточка белая. (3) Следующая секция "Hybrid delivery for catering" на белом фоне без рамок. (4) Pricing снова на градиенте салатовый → белый (внешняя рамка как была). Hero-слои (`.rp-panel`, `.hero-amb`) не менялись. Точечная текстура остаётся только в блоке Ask AI. Как проверить: catering.html, 1280 и 390 px. Тёмная тема без изменений.
- catering.html: исправлено по замечаниям. (1) Блок Pricing возвращён как был (внешняя рамка с градиентом, кнопка справа), доработаем позже. (2) Hero: прошлая правка отступа сдвинула мятный фон вверх, и значки SOC 2 / 97% оказались впритык к его нижнему краю. Отступ над лентой логотипов возвращён как был, а сокращена сама полоса с логотипами: высота строки 72 → 56 px (padding слота 6×16), отступ подписи "Trusted by 350+ brands" 24 → 12 px, нижний padding hero на 30 px меньше. Нижняя граница мятного фона (`bottom` слоёв `.rp-*`) пересчитана на 225 → 167 px, чтобы фон остался на прежнем месте относительно значков. Исключение из правила "высота строки логотипов 72 px" сделано по просьбе дизайнера. Как проверить: catering.html на 1280 и 390 px, под значками SOC 2 и 97% виден мятный фон, лента логотипов ниже и компактнее. Проверено Playwright, скролла нет.
- catering.html, доработки дизайна: (1) блок ezCater compliance теперь на сплошном светло-мятном фоне `var(--teal-wash)` без перехода в белый, линия между ним и First-party catering убрана; (2) цитата Gracie Prasanson на белом фоне (раньше градиент рядом с блоком Ask AI); (3) у всех h2 страницы `text-wrap:balance` (нет висячих слов); (4) под телефонами ezCater добавлена такая же тень-пол, как у First-party; (5) блок Pricing без внешней рамки, кнопка Book a demo по центру; (6) в тёмном блоке Hybrid engine колонка Catering fleet: крупное "50+" (24 px, Ubuntu 700) и подпись "trusted catering delivery providers"; (7) воздух между hero-иллюстрацией и надписью "Trusted by 350+ brands" сокращён до ~60 px (`.logo-glass{margin-top:56px}`, распорка убрана). Как проверить: открыть catering.html на 1280 и 390 px, светлая и тёмная тема. Проверено Playwright на 1280, 1000 и 390 px: горизонтального скролла нет.
- catering.html, блок First-party catering: два телефона теперь одного размера (по 50% ширины блока), телефон с отзывом (звёздочки) стоит позади и выше телефона с трекингом, его левый край заходит под первый (margin-left:-10%, z-index 1 против 2). Под ними мягкая эллиптическая тень-пол (`radial-gradient` + blur), у телефонов облегчены drop-shadow. Как проверить: страница catering.html, секция First-party catering, светлая и тёмная тема. Проверено Playwright на 1280 и 390 px, горизонтального скролла нет.
- catering.html, third-party-delivery.html, platform-overview.html: плашка с текстом "50+ catering DSPs" (на platform-overview "50+ local DSPs") в тёмной теме становилась тёмной, в отличие от белых плашек с логотипами. Теперь у неё inline `background:#fff;color:#31373F`, как у соседних. Как проверить: включить тёмную тему, блок с логотипами Uber Direct, DoorDash Drive, Grubhub, Skipcart: последняя плашка белая. Размеры не менялись, на 390 px раскладка та же.
- Раздел Book a demo (карта-фон, эффекты, Cartwheel Demo Form) с главной теперь стоит на всех страницах вместо старых CTA и форм: 13 страниц кейсов (старый блок #cta заменён), blog-1a, blog-1b, blog-article, newsroom, delivery-types, case-studies, news-article, press-release, quote-library. Секция скопирована с index.html (заголовок "See Cartwheel in action."), форма подключена через dc-import. Эффекты (точечная сетка, курсор) вынесены в js/demo-fx.js и подключаются после support.js; ссылки CTA в хедере ведут на #demo. Намеренно не менялись: demo.html, platform-overview (своя встроенная форма), integrations (свой заголовок, та же форма), catering-ebook и pizza-ebook (форма скачивания eBook). Как проверить: открыть любую страницу кейса, внизу над футером секция с картой и формой, кнопка Book a demo в хедере прокручивает к ней. Проверено Playwright на 1280 и 390 px (10 страниц): форма работает, один футер, горизонтального скролла нет (кроме ранее известного newsroom).
- case-studies.html: карточки кейсов (13 штук, включая крупную карточку Jason's Deli) вели на реальный сайт trycartwheel.com/case-studies/... в новой вкладке. Теперь ведут на локальные страницы кейсов (case-portillos.html, case-calif-chicken.html, case-pf-changs.html, case-potbelly.html, case-mandys.html, case-illegal-petes.html, case-national-pizza.html, case-wings-over.html, case-nj-chicken.html, case-flyboy.html, case-butchery.html, case-mrjims.html, case-jasons-deli.html) в том же окне. Сами страницы кейсов уже были перенесены из Claude Design и остаются редактируемыми. Как проверить: на case-studies.html нажать любую карточку, откроется страница кейса в том же окне (проверено Playwright на 1280 px для всех 13, горизонтального скролла нет).

## 2026-11-17
- platform-overview.html: переключатель светлой и тёмной темы снова не работал. Причина: новая страница из Claude Design пришла с атрибутом `data-theme`, который перебивается атрибутом просмотрщика артефактов. Все 18 вхождений (CSS и корневой div) переименованы в `data-cw-theme`, как на остальных страницах. Как проверить: на странице нажать переключатель темы в хедере, тема меняется туда и обратно (проверено Playwright с внешним `data-theme="dark"` на `<html>`). Правило для новых страниц из Claude Design: сразу заменять `data-theme` на `data-cw-theme`.
- Все страницы: в выпадающем меню Solution добавлена четвёртая карточка Hybrid Delivery (ссылка на hybrid-delivery.html, картинка assets/menu-hybrid-map.webp), сетка карточек 4 колонки (`.nav-mega .sol-grid`, gap 16 px); в мобильное меню Solution добавлен пункт Hybrid Delivery. Страница hybrid-delivery.html из присланного архива совпала с уже перенесённой, не менялась. Как проверить: на 1280 px навести на Solution, карточка Hybrid Delivery открывает hybrid-delivery.html в том же окне; на 390 px открыть гамбургер, Solution, пункт Hybrid Delivery. Проверено на 1280 px (Playwright, переход в том же окне); на 390 px пункт добавлен в тот же список, что и остальные.
- Единый хедер и футер на всех страницах (35 html): хедер и футер взяты из эталона (Catering eBook / главная) и подставлены на каждую страницу. Меняются только активный пункт меню и ссылка CTA (#demo на страницах с формой, иначе demo.html#demo). Недостающие CSS-правила хедера добавлены блоком `/* shared header/footer */`. У blog-1a, blog-1b, blog-article, news-article, press-release добавлен `footer#company{line-height:1.6}` (иначе футер был ниже на 58 px). Как проверить: на 1280 и 390 px хедер 69 px, футер одинаковой высоты (497 px на десктопе, 1013 px на 390), меню Solution / Use Cases / Integrations / Resources открываются по наведению. Известно: newsroom.html имел горизонтальный скролл (1296 px) до этой правки.
- platform-overview.html заменена на актуальную страницу из Claude Design (файл Cartwheel_Platform_Overview.html, распакован: 124 ресурса в assets/po/, скрипты заменены на локальные support.js и image-slot.js, иконки Tabler и шрифты теперь локальные). Хедер и футер приведены к общим. Форма в этой странице встроена в сам файл, а не подключена через Cartwheel Demo Form (по правилу CLAUDE.md её нужно подключить dc-import). В исходном футере были иконки LinkedIn, X, Facebook, в общем футере их нет. Старая версия: git history. Как проверить: открыть на 1280 и 390 px, hero Delivery that runs itself, горизонтального скролла нет.
- Все страницы (1611 ссылок): у внутренних ссылок на локальные .html (мега-меню Use Cases, Platform и др., карточки, футер) убраны `target="_blank"` и `rel="noopener"`. Причина: в Claude Design ссылки открывались в новой вкладке, из-за чего в просмотрщике артефактов страница открывалась в другом браузере и вела на главную. Внешние ссылки (ChatGPT Ask AI, партнёрские страницы) остались в новой вкладке. Проверка: Use Cases > Catering на 1280 px открывает catering.html в том же окне (проверено Playwright), на 390 px то же.
- Иконка SOC 2 (index, hybrid-delivery, restaurants, catering, pizza, platform-overview): вместо временной заглушки подставлен настоящий бейдж AICPA SOC (assets/soc2-badge.png, 256 px, обрезан по кругу). Как проверить: блок со счётчиками под hero, иконка над надписью SOC 2.
- Все страницы на движке Claude Design и Cartwheel Demo Form.dc.html: атрибут темы `data-theme` переименован в `data-cw-theme`. Причина: просмотрщик артефактов Claude ставит свой `data-theme="dark"` на родительский элемент, скрипты страниц находили его вместо своего и светлая тема не включалась. Как проверить: открыть любую страницу, переключатель темы в хедере меняет светлую и тёмную тему (в том числе внутри артефакта).
- Первые 9 страниц (index, platform-overview, restaurants, catering, pizza, toast, team, delivery-types, integrations) заменены ручной вёрстки на оригиналы Claude Design, запускаемые родным движком (`support.js`): Homepage v5, Platform Overview v2, Restaurants v2, Toast v2, Team v2, Catering, Pizza, Delivery Types, Integrations. Причина: ручные версии расходились с дизайном (отступы, иконки, шрифты, тени при наведении). Старые версии остаются в истории git. Добавлены недостающие картинки (assets/news/catering-hero.png, assets/gracie-prasanson.png, uploads/Group 427319741.png, uploads/proof-phones-portillos.png). Иконка SOC 2: внешняя ссылка на surveycto.com заменена на локальный assets/soc2-badge.svg (временная заглушка, заменить официальным бейджем). Как проверить: открыть страницы по http на 390 и 1280 px, hover на карточках Solution (зелёная тень), логотипы в Third-party fleet внутри рамки.
- Перенос в репозиторий (запуск через движок Claude Design, `support.js`, React и Babel грузятся с unpkg, нужен интернет): hybrid-delivery.html, third-party-delivery.html, demo.html, blog-1a.html, blog-1b.html, blog-article.html, case-studies.html, 13 страниц кейсов (case-*.html), newsroom.html, press-release.html, news-article.html, catering-ebook.html, pizza-ebook.html, quote-library.html. Форма берётся из единого источника `Cartwheel Demo Form.dc.html` (лежит в корне, подключается через dc-import). Внутренние ссылки trycartwheel.com в `<a>` заменены на локальные файлы (ссылки на партнёрские страницы /uber-direct/, /par/ и др. остались внешними). Блог: в экспорте была сравнительная доска двух вариантов, оба сохранены как blog-1a и blog-1b, ссылки на блог ведут на blog-1a (выбрать финальный вариант). Картинки: в assets/ и uploads/ добавлены только файлы, которые используют эти страницы. news-article: tanya-besedina.png заменён на tanya-besedina-v9.png (исходный файл в экспорте отсутствовал). Как проверить: открыть страницу по http (например `python3 -m http.server`), ширина 390 px и 1280 px, консоль без ошибок, картинки на месте.
- Все страницы: атрибут темы `data-theme` переименован в `data-cw-theme` (css/styles.css, js/main.js, все html). Причина: если страницу встраивает внешний просмотрщик, который сам ставит `data-theme` на <html>, переключатель темы застревал на тёмной. Проверить: переключатель меняет тему светлая/тёмная на любой странице, в том числе при внешнем `data-theme="dark"` на <html>.
- Перенос в репозиторий: страница Integrations (integrations.html) собрана из экспорта Claude Design. Контент (hero с анимированной картой, навигация по категориям, плашки POS / Online ordering / Marketplaces / Delivery partners, блок "Connected in weeks") взят из экспорта; хедер, форма Book a demo и футер общие с остальными страницами. H1: зелёная градиентная часть вынесена на вторую строку через <br>. Плашки интеграций без обводки (hover: подъём и тень), добавлены в css/styles.css. Добавлены логотипы assets/dp-*. Проверить: открыть integrations.html на 1280 px и 390 px, горизонтального скролла нет.

## 2026-11-16
- Cartwheel Pizza: блок Ask AI перенесён перед схемой Hybrid Delivery (#hybrid). Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Catering: блок Ask AI перенесён выше блока Third-party delivery (после цитаты-разделителя). Export-копия пересоздана из актуальной Cartwheel Catering.dc.html (со сжатыми картинками), Cartwheel Catering.html пересобран и теперь содержит все сегодняшние правки. Проверить на десктопе и 390 px.
- Ask AI блоки (по документу uploads/ask_ai_blocks_topic_pages.md): добавлены на Cartwheel Pizza (X2), Cartwheel Catering (X3), Cartwheel Hybrid Delivery (X5) перед FAQ; на Cartwheel Platform Overview (X4) заменены заголовок и все 5 ссылок существующего блока. У каждого блока id="ask-ai". Заголовки и URL дословно из документа (в HTML & экранирован как &amp;). Standalone Pizza и Catering пересобраны. Проверить ссылки в обычной вкладке браузера (в превью ChatGPT/Google/Claude дают ERR_BLOCKED_BY_RESPONSE), на десктопе и 390 px.
- Cartwheel Pizza, блок The model, кейс National pizza chain: фото заменено на реальное фото пиццы в коробках (assets/case-pizza.jpg). Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model, кейс National pizza chain: заголовок "National pizza chain saves $100K+…" перенесён вправо над цифрами; eyebrow "Case study · National pizza chain" под фото. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model: карточка кейса National pizza chain возвращена к прежней раскладке (слева текст и фото, справа результаты); перемещены только eyebrow и заголовок, теперь они над фото. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, hero: подзаголовок переписан: "Delivery software for pizza brands. Your drivers take the orders that pay best, third-party fleets cover the rush, and every pie arrives hot and on brand." Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza: полоса кейса MrJim's Pizza перенесена внутрь предыдущего блока (Third-party delivery), отдельная секция #case-mrjims удалена. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model: в карточке кейса National pizza chain eyebrow и заголовок "National pizza chain saves $100K+…" перенесены наверх, на всю ширину карточки; ниже фото со ссылкой и три строки результатов. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model: кейс National pizza chain в отдельном виде, отличном от стандартных полос: светло-бирюзовая карточка, слева широкое невысокое фото, eyebrow, заголовок и ссылка; справа три строки результатов с иконками (63 → 47 min, 15%, $100K+). Компактнее прежнего большого варианта. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model: тёмная полоса кейса National pizza chain отменена. Теперь стандартная белая карточка кейса, но крупнее остальных: фото 320 px, заголовок 20–24 px, 3 цифры 28–34 px. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model: карточка кейса National pizza chain переделана в компактную тёмную полосу (графит с градиентом): маленькое фото 84 px, заголовок, ссылка, справа 3 цифры с разделителями. Отличается от белых полос кейсов. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок Economics: контент переписан под пиццу (вместо ставок 3PD). H2 "Faster pizza, fewer calls, more repeat orders." Четыре пункта и визуала: Up to 3 hours a day back (auto-dispatch, батчинг), 22% faster deliveries (route optimization), Tracking that brings guests back (up to 10% repeat orders), Proven at a national pizza chain (63 → 47 min, -15% refunds, $100K+). Интерактив и стиль панелей сохранены. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, hero: телефон с трекингом Lou Malnati's заменён на экран Hungry Howie's в той же рамке (assets/hungry-howies-tracking-phone.png). Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model: большой кейс National pizza chain заменён компактной горизонтальной карточкой (фото слева, заголовок, 3 цифры: 63 → 47 min, 15%, $100K+, ссылка). H2 убран, в блоке снова один заголовок. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza: исправлена перестановка кейсов. В блоке The model (#model) теперь большой кейс National pizza chain (фото, 3 карточки результатов); после Third-party отдельная секция #case-mrjims с компактной полосой MrJim's Pizza. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza: кейсы поменяны местами. В блоке The model (#model) теперь полоса National pizza chain; отдельная секция кейса после Third-party теперь MrJim's Pizza (#case-mrjims: Unlimited backup drivers at peak, 0 new hires, ссылка на кейс). Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, hero: eyebrow "Dough-livery management software" заменён на "Pizza delivery management software". Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model (#model): полоса кейса MrJim's Pizza возвращена вместо National pizza chain (кейс National pizza chain остаётся отдельной секцией ниже). Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza: блок In-house delivery ("Everything your own fleet needs.") перенесён после схемы Hybrid Delivery (#hybrid) и перед блоком Third-party delivery. Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, блок The model (#model): кейс MrJim's Pizza заменён полосой кейса National pizza chain (как на Restaurants v2). Standalone пересобран. Проверить на десктопе и 390 px.
- Cartwheel Pizza, hero: первое предложение подзаголовка заменено на "Fill more pizza orders at a better margin." (связка с H1 "Deliver more. Earn more."). Standalone-копия пересобрана. Проверить на десктопе и 390 px.
- Cartwheel Catering, блок First-party catering (#branded): фон изменён на белый (--surface). Проверить на десктопе и 390 px.
- Cartwheel Catering, блок Catering delivery tools (#tools): фон изменён на светло-серый (--grad-gray). Проверить на десктопе и 390 px.
- Cartwheel Catering, полоса блога Workshop: кадрирование фото сбалансировано (object-position 60% 70%), сверху срезается меньше. Проверить на десктопе и 390 px.
- Cartwheel Catering, полоса блога Workshop: полоса снова на всю ширину контейнера, текст расширен до двух предложений, фото прижато к низу (object-position 100%), обрезается только пространство сверху. Проверить на десктопе и 390 px.
- Cartwheel Catering, полоса блога Restaurant Catering Workshop: блок уменьшен примерно вдвое (макс. ширина 880 px, картинка до 220 px высотой, меньше паддинги). Заголовок "Three lessons on ending catering delivery chaos" (H2 меньшего размера), текст сокращён до одной фразы. Проверить на десктопе и 390 px.
- Cartwheel Catering, тариф Pay as you go: "$30 flat" заменено на "$30 per order", "10% of subtotal" на "10% of order subtotal", чтобы было ясно, что плата за заказ. Проверить на десктопе и 390 px.
- Cartwheel Catering, тарифы: подписи к ценам ("per location per month" и др.) в обоих тарифах (Pay as you go и Subscription) придвинуты к цифре слева вместо выравнивания по правому краю. Проверить на десктопе и 390 px.
- Cartwheel Catering, тарифы: примечание "NYC radius limited to 5 miles" перенесено в строку "20-mile radius, 90 minutes lead time" (в скобках, мелким серым). Кнопка Book a demo выровнена вправо. Проверить на десктопе и 390 px.

## 2026-11-13
- Cartwheel Catering: фон блока "Why tracking matters" изменён на светло-серый (--grad-gray). Проверить на десктопе и 390 px.
- Cartwheel Catering: блок с цитатой ("Orders come in from ezCater…") был перенесён над схемой и возвращён обратно под неё (без изменений).
- Cartwheel Catering, полоса блога Restaurant Catering Workshop: заголовок и текст заменены на текст от пользователя. Проверить на десктопе и 390 px.
- Cartwheel Catering, #tracking: убран логотип ezCater из подзаголовка "How Cartwheel handles it". Проверить на десктопе и 390 px.
- Cartwheel Catering, полоса блога Restaurant Catering Workshop: заголовок и текст переписаны (Cartwheel выступал с докладом). Проверить на десктопе и 390 px.
- Cartwheel Catering: полоса блога Restaurant Catering Workshop перенесена сразу после блока Catering delivery tools (#tools), получила собственный вертикальный паддинг и верхнюю линию. Проверить на десктопе и 390 px.
- Cartwheel Catering, тарифы: в Subscription добавлена подпись "Platform fee. Deliveries billed per order."; в оба тарифа добавлена строка Delivery fee на одном уровне; убраны пункты про покрытие сборов провайдера и pre-negotiated rates; кнопка переименована в "Book a demo". Проверить на десктопе и 390 px.
- Cartwheel Catering, тарифы: рядом со сноской добавлена кнопка "Book a call" (ведёт к форме #demo). Проверить на десктопе и 390 px.
- Cartwheel Catering, тарифы: убрана подпись "Both plans"; общие условия (чаевые, радиус и lead time) оформлены горизонтальной полосой на всю ширину под обоими тарифами. Проверить на десктопе и 390 px.
- Cartwheel Catering, тариф Subscription: удалён плейсхолдер rate detail, пункт читается "Cartwheel’s pre-negotiated rates with catering providers". Проверить на десктопе и 390 px.
- Cartwheel Catering, #branded: экраны перенесены влево, текст вправо (на 390 px экраны идут над текстом). Проверить на десктопе и 390 px.
- Cartwheel Catering, тариф Subscription: цена "from $40 per location per month", пункт "Includes all Cartwheel features". Плейсхолдер rate detail остаётся. Проверить на десктопе и 390 px.
- Cartwheel Catering, секция #tracking: полоса с иконками сторов и рейтингом 4.6 удалена и возвращена по запросу (без изменений).
- Cartwheel Catering: карточка тарифов перенесена под левую колонку секции Third-party catering delivery на всю ширину (grid-column:1/-1); верхняя часть секции разбита на две колонки: заголовок с текстом слева, четыре пункта о провайдерах справа. Проверить на десктопе и 390 px.
- Cartwheel Catering, секция Third-party catering delivery: карточка Matching fees заменена на два тарифа (Pay as you go и Subscription) с общими условиями ниже. Плейсхолдеры подписки видны в квадратных скобках. Проверить на десктопе и 390 px (тарифы складываются в колонку).
- Cartwheel Catering: после eBook-полосы добавлена полоса в том же стиле со ссылкой на пост блога о Restaurant Catering Workshop (фото assets/catering-workshop-panel.jpg). Проверить на десктопе и 390 px.
- Cartwheel Catering: из карусели отзывов удалён отзыв JackRabbit (Kevin Polk). Проверить карусель на десктопе и 390 px.
- Cartwheel Catering: фон #branded изменён на светло-серый (--grad-gray), фон #tools на белый (--surface). Проверить на десктопе и 390 px.
- Cartwheel Catering: блок "Catering delivery tools" (#tools) перенесён ниже блока first-party branded experience (#branded). Проверить порядок секций на десктопе и на 390 px.

## 2026-11-13
- **Cartwheel Catering.dc.html**, #tracking (ezCater compliance): под списком добавлен рейтинг driver app: кнопки Google Play / App Store (44 px, ссылки на сторы), 4.6 со звёздами, 1.5k ratings, подпись "Top-rated driver app". Проверить: 1440 px и 390 px.
- **Cartwheel Pizza.dc.html**, отзывы: H2 "Trusted by pizza brands from Chicago to the UK." заменён на "Trusted by pizza brands / across the US and beyond." (видимый заголовок и seo-static). Проверить: 1440 px и 390 px.
- **Cartwheel Pizza.dc.html**: блок Pizza eBook перенесён сразу после секции Economics. Проверить порядок секций: 1440 px и 390 px.
- **Cartwheel Pizza.dc.html**: кейс National pizza chain (#case-national-pizza) перенесён сразу после блока Third-party delivery. Проверить порядок секций: 1440 px и 390 px.
- **Cartwheel Pizza.dc.html**: блок Pizza eBook перенесён прямо перед секцией Economics. Проверить порядок секций: 1440 px и 390 px.
- **Cartwheel Pizza.dc.html**, hero: фото пицц Da Pizza Tavern заменено на нейтральное фото доставки пиццы (курьер передаёт две коробки у двери, assets/pizza-hero-delivery.jpg). Проверить: 1440 px и 390 px.
- **Cartwheel Pizza.dc.html**, Economics → Rate engine: цена Grubhub исправлена на "from $4.60" (была $6.99). Проверить: 1440 px и 390 px (в мобильной раскладке картинка в аккордеоне).
- **Cartwheel Pizza.dc.html**, hero: экран трекинга Portillo's заменён на трекинг Lou Malnati's (assets/lou-malnatis-tracking-phone-v2.png: логотип Lou Malnati's, фото пиццы в промо-баннере). Проверить: 1440 px и 390 px.
- **Cartwheel Pizza.dc.html**, структура по трифолду и листовке: hero "Dough-livery management software" / "Deliver more. / Earn more.", в ленте первыми Lou Malnati's и Giordano's. Блок цифр заменён на "Without vs with Cartwheel" (3 пары проблема → решение: 20% revenue, 93% / 10% tracking, 3 часа в день → +24% on-time). Engine: H2 "In-house when you can. / Third-party when you need." Секция Catering убрана, вместо неё отдельный кейс National pizza chain (проблема + 63→47 min, 15% fewer refunds, $100K+/yr), сразу за ним Pizza eBook. Стрип MrJim's перенесён во вкладку модели вместо National pizza. На ≤860 px пары идут столбиком, стрелка вниз. Проверить: 1440 px и 390 px (Cartwheel Pizza (Mobile).dc.html).
- **Cartwheel Pizza.dc.html** (новая) + витрина **Cartwheel Pizza (Mobile).dc.html**: страница trycartwheel.com/pizza/ на базе Restaurants v2 (тот же первый экран, хедер, футер, форма через dc-import). Hero: eyebrow Pizza, H1 "Every pie hot. / Every rush covered.", фото пицц (assets/pizza-hero.webp); лента логотипов начинается с Giordano's, Lou Malnati's, Hungry Howie's, MrJim's. Блок Solutions заменён на "Pizza runs on delivery." (4 цифры из Pizza eBook, сетка 4 / 2 / 1). Кейсы по странице: National pizza chain (Model), MrJim's Pizza (Third-party), Flyboy (In-house). Catering eBook убран, Pizza eBook оставлен. Отзывы только пиццерий: Giordano's, Hungry Howie's, MrJim's. FAQ + JSON-LD: вопрос про пиковые вечера. Meta/canonical/OG на /pizza/. Проверить: 1440 px и 390 px.

## 2026-11-12
- Cartwheel Toast v2: блок отзывов "Trusted by the brands…" перенесён ниже Toast Catering, перед FAQ. Проверить на десктопе и 390 px.
- Cartwheel Toast v2: убран сгруппированный блок "Toast restaurants running delivery on Cartwheel". Кейсы Toast расставлены стрипами по странице: Wings Over (Engine), Premium LA Butchery (Toast Catering); Mandy's остаётся в Third-party (без дубля), Flyboy (Integrations). Модель сохраняет National pizza / Calif Chicken / NJ. Проверить на десктопе и 390 px.

## 2026-11-12
- Cartwheel Toast v2: блок кейса Mici заменён блоком «Case studies» со всеми кейсами, где упомянут Toast (Mandy's, California Chicken Cafe, National pizza chain, Wings Over, NJ fried chicken brand, Flyboy, Premium LA Butchery) в стандартном дизайне карточек кейсов, ссылки на trycartwheel.com/case-studies/…; проверить на десктопе и 390 px.

## 2026-11-09
- **Cartwheel Team v2.dc.html** (новая) + витрина **Cartwheel Team v2 (Mobile).dc.html**: каркас новой страницы trycartwheel.com/team/ на хедере/футере Toast v2 (активный пункт Resources, форма через dc-import). Блоки: hero "For operators, by operators." с коллажем фото и 4 цифрами, Our story (таймлайн 2012 → Today), Founders (Alex, Magdim, Dan), Team (11 человек + плашка 15 experts), Advisors + Investors, In the press (бегущая лента логотипов, ~42 px/с, статично на ≤640 px), Meet us offline (4 фото), Book a demo. У кого нет фото, стоят инициалы на мятном круге. Meta/canonical/AboutPage JSON-LD на /team/. Проверить: 1440 px и 390 px.
- **Cartwheel Catering.dc.html**, hero: подзаголовок сокращён по комментарию до одного предложения. Проверить: 1440 px и 390 px.
- **Cartwheel Catering.dc.html**, блок EZCATER COMPLIANCE: подзаголовок под "Every ezCater order, managed in one place." переписан по комментарию (всё в одном месте + соответствие требованиям ezCater). Мобильная раскладка не менялась. Проверить: 1440 px и 390 px.

## 2026-11-02
- **Cartwheel Toast v2.dc.html**, по презентации для Toast (uploads/Copy of Presentation for Toast Team'26.pdf): шаг 01 в "How it works" перечисляет источники заказов (Toast Online Ordering, Toast Catering & Events, другие системы, телефон); после него новый блок кейса Mici "Saving costs with Cartwheel and Toast" (challenge / solution / 4 результата, логотип assets/logo-mici.png); полоса Toast Catering заменена на секцию "Seamless catering delivery for Toast" (3 пункта, 97% on-time, 20 mi* радиус, 90 min lead time, сноска NYC 5 миль, ссылка на /catering/) с кейсом Catalogue (цитата Laura Rankin). Проверить: 1440 px и 390 px.
- **Cartwheel Toast v2.dc.html**: блок "Hybrid Delivery benefits" (10% / 27% / 20%) заменён на блок "Challenges that Hybrid Delivery solves" со страницы Restaurants v2 (вкладки, анимации, кейсы, полоса Emerging fleets). Проверить: 1440 px и 390 px.
- **Cartwheel Toast v2.dc.html**, секция "How it works with Toast": заголовок по центру, 7 шагов в горизонтальный ряд (≥1000 px) с пунктирной линией между иконками; ниже 1000 px и на 390 px шаги идут вертикальным списком с разделителями. Проверить: 1440 px, 900 px, 390 px.
- **Cartwheel Toast v2.dc.html**, первый экран переделан в "техничный" стиль для страниц интеграций (отличается от use-case страниц): тёмная скруглённая панель (#31373F→#1D2A2B) с сеткой, бейдж "Toast integration, live" моноширинным шрифтом, H1 "Deliver more. / Earn more." (градиент), чипы Toast POS / Online Ordering / Catering & Events, справа консоль "toast → cartwheel": Toast POS → API → Dispatch с бегущим пакетом и лог событий (order.received … review.requested). Лента логотипов вынесена под панель. Проверить: 1440 px и 390 px (лог в 2 колонки), prefers-reduced-motion.
- **Cartwheel Toast v2.dc.html** (новая) + витрина **Cartwheel Toast v2 (Mobile).dc.html**: страница trycartwheel.com/toast/ пересобрана в новой системе на базе Restaurants v2 (хедер, футер, форма через dc-import). Блоки: hero (Cartwheel integrates with Toast, "Deliver more. Earn more.", trust-ряд, лента логотипов), Hybrid Delivery benefits (10% / 27% / 20%), The Toast flow (7 шагов списком), Engine, Third-party, Google Review booster (60% / 20%, тёмный градиент), In-house, Integrations, отзывы, Toast Catering & Events (ссылка на /catering/), FAQ, Book a demo. Meta/canonical на /toast/. Проверить: 1440 px и 390 px.

## 2026-10-30
- Cartwheel Demo (international): SkipGo removed from Canada providers; Puerto Rico removed from the country toggle; Refund management section, refund FAQ (visible + JSON-LD) and refund mentions in meta/OG descriptions, FAQ #1 and the "Going direct / One layer" cards removed. Check: country toggle shows CA/UK/IE/AU only, Canada providers = DoorDash Drive + Uber Direct, no "refund" text on page; checked at 390 px via Cartwheel Demo (Mobile).dc.html.

## 2026-11-16
- Cartwheel Catering, #tracking ("Every ezCater order, managed in one place."): phones image replaced with assets/tracking-driver-app-v2.png. Check: #tracking, desktop and 390 px.

## 2026-10-28
- Cartwheel Catering: new section #branded "First-party catering: Your catering channel, branded end to end." after #tools (branded real-time tracking, review collection, one experience for all orders) with Jason's Deli tracking and review phone screens. Check: #branded, desktop and 390 px.
- Cartwheel Catering, hero: image replaced with a courier loading trays into a thermal bag at an office catering table (assets/news/catering-hero.png). Check: hero, desktop and 390 px.
- Cartwheel Catering: "Catering delivery tools" section (#tools) moved directly after the ezCater compliance block (#tracking). Check: section order, desktop and 390 px.
- Cartwheel Catering, #tracking: right-side phone image replaced with the driver app composite (assets/tracking-driver-app.png). Hero image unchanged. Check: #tracking, desktop and 390 px.
- Cartwheel Catering, #tracking: H2 changed to "Every ezCater order, / managed in one place." (full ezCater management toolset). Check: #tracking header, desktop and 390 px.
- Cartwheel Catering, #tracking (ezCater compliance): added a third point about the driver app (navigation, order checklists, photo and signature proof of delivery). Check: #tracking list, desktop and 390 px.
- Cartwheel Catering, hero: image with white tablecloth buffet replaced with a simple office catering setup (kraft boxes of sandwiches on an office table; assets/news/catering-boxes.webp). Check: hero image, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: latest post image replaced with an abstract brand graphic (dark slate, teal routes converging on one hub; assets/blog/visibility-abstract-v2.png). Check: Blog tab featured card, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: removed the "Cartwheel blog" source label from every blog card (date only). Check: Blog tab, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: latest post "Better delivery decisions start with better visibility" now has an image: Cartwheel live dispatch map (assets/dispatch-map.png). Check: Blog tab featured card, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: added "Marketing collaboration contact" label and email tanya.besedina@trycartwheel.com under Tanya Besedina (same style as the media contact block). Check: Blog tab, desktop and 390 px.
- Cartwheel Newsroom, Media coverage: featured card "Cartwheel shifts restaurant delivery into high gear" (Pizza Marketplace) image replaced with a pizza doorstep hand-off photo (final: overhead photo of two open pizza boxes, 13_PizzaBoxes.jpg; real photo, wide ratio, crops cleanly). Check: Media coverage tab, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: Tanya portrait reframed with head higher in the circle to match Magdim, Alex and Allison (tanya-besedina-v9.png). Check: Blog tab, desktop and 390 px.
- Cartwheel Newsroom, Press releases tab: contact is now Allison Champion, PR Advisor (email allison@allisontchampion.com, LinkedIn); portrait on the same textured teal circle (assets/allison-champion.png). Media coverage keeps Magdim. Check: Press releases tab, desktop and 390 px.
- Cartwheel Newsroom: Tanya photo on the same textured teal background as Magdim (tanya-besedina-v8.png); Alex photo without the light outer ring (alex-vasilkin-round.png) so all three match; contact column top-aligned so portraits stay at the same height across tabs. Check: switch all 4 tabs, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: Tanya photo recut (assets/tanya-besedina-v5.png): head centered, smoother feathered edge. Check: Blog tab, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: Tanya Besedina photo added (assets/tanya-besedina-v3.png), background recolored to brand teal to match Magdim and Alex. Check: Blog tab, desktop and 390 px.
- Cartwheel Newsroom, Blog tab: layout matches Media coverage (contact column + featured card + grid). Contact: Tanya Besedina, Head of Marketing, LinkedIn link; initials placeholder until photo arrives. Check: Blog tab on desktop and 390 px.
- Cartwheel Newsroom: added LinkedIn links under name/role for Magdim Metshin (media/press tabs) and Alex Vasilkin (perspective/blog tabs). Check: switch tabs, link opens the right profile; at 390 px the link sits under the role, 44 px tap height.

## 2026-10-27
- Cartwheel Newsroom: вкладка и чипы «Press coverage» переименованы в «Media coverage». Проверить: вкладки и чипы карточек на десктопе и 390 px.

## 2026-10-26
- **Cartwheel Newsroom.dc.html**: контент перенесён один в один из присланной папки (uploads/01_text-content): Cartwheel in Media 63, Thought Leadership 21, Press Releases 32, Blog 27 карточек, порядок как в файлах, обложки по номеру из строки Cover image. Пустые поля (дата, обложка) не показываются. Ссылки Hungry Howie's и Enterprise Pizza Brands ведут на локальные страницы. Проверить: все 4 вкладки, 390 px.
- **Форма Book a demo, все страницы**: Cartwheel Demo Form.dc.html стал единым источником формы. В Homepage v4, Homepage v5, Catering, Restaurants, Restaurants v2, Hybrid Delivery, Platform Overview, Third-Party Delivery, Integrations старая встроенная форма заменена на подключение эталона (`dc-import`, режим embedded). Правило добавлено в CLAUDE.md. Мобильные витрины берут страницы через iframe и обновляются автоматически. Проверить: секция #demo на каждой странице, 1440 px и 390 px, светлая и тёмная тема.
- **Cartwheel News Article.dc.html** (и мобильная витрина): страница упрощена: убраны плашки в hero, карточки брендов, чипы-якоря, нумерация разделов, плашки стека, иконки в списке, тёмный блок с цифрами, карточка автора, Keep reading и CTA-баннер. Оставлены текст, фото, цитаты в мятных карточках и FAQ. Проверить: 390 px и 1440 px.
- **Cartwheel Press Release.dc.html** (и мобильная витрина): страница упрощена: убраны "4 min read" и нижний CTA-блок, лишний закрывающий div. Остались hero, текст релиза, две выделенные цитаты, About-блоки и контакт. Проверить: 390 px и 1440 px.
- **Cartwheel Demo Form.dc.html**: новый файл, только форма Book a demo с главной (Homepage v4): роль, рынок с флагами (US / Canada, UK, Ireland, Australia, Puerto Rico), локации для международных, объём для курьеров, экран для водителей, ошибки валидации. Для международных ресторанов с 1-2 локациями добавлен вопрос «Do you have in-house drivers?»: Yes → после отправки сразу переход на Calendly (ссылка-заглушка CALENDLY_URL, заменить на реальную), No → сразу переход на trycartwheel.com/demo/. Проверить: 1440 px и 390 px, все ветки формы.
- **Cartwheel Press Release.dc.html**: убраны доп. блоки (полоса фактов, сайдбар, блок с цифрами, карточки About, More from the newsroom). Остались hero, текст релиза с цитатами в карточках, About и Media Contact обычным текстом, CTA. Проверить: 390 px и 1440 px.
- Cartwheel Catering.dc.html: цитата Gracie Prasanson вынесена из #tools в отдельную секцию-разделитель (мятная полоса, крупная центрированная цитата). Проверить: после #tools, 390 px.
- Cartwheel Catering.dc.html: в секцию #tools (Catering delivery tools) под карточками добавлена цитата Gracie Prasanson (VP of Sales, Jason's Deli), оформление как на Homepage v4. Проверить: #tools, 390 px.
- **Cartwheel Newsroom.dc.html**: вкладки переименованы: Press coverage, Perspectives, Press releases, Blog. На вкладке Perspectives возвращён блок Alex Vasilkin (фото, роль, био) рядом с featured-карточкой. Чипы на карточках тоже переименованы: Perspective, Press coverage. Проверить: вкладки на 1440 px и 390 px.
- **Cartwheel Press Release.dc.html** + **Cartwheel Press Release (Mobile).dc.html**: новая страница пресс-релиза (Hungry Howie's Modernizes Delivery Operations with Cartwheel), текст релиза дословно с сайта: тёмный hero с фото, полоса ключевых фактов, цитаты, сайдбар (контакт для прессы, FS/TEC), тёмный блок с цифрами, About-карточки. В Newsroom этот пресс-релиз ведёт на новую страницу. Проверить: 390 px и 1440 px.
- **Cartwheel News Article.dc.html** + **Cartwheel News Article (Mobile).dc.html**: новая страница новости (пример: How Enterprise Pizza Brands Are Modernizing Delivery with Cartwheel): hero с градиентным H1, обложка внахлёст, карточки трёх брендов, стек-плашки, цитаты, тёмный блок со статистикой, FAQ, Keep reading, CTA, прогресс чтения. В Newsroom этот пост из Blog ведёт на новую страницу. Проверить: 390 px и 1440 px, светлая и тёмная тема.
- **Cartwheel Newsroom.dc.html**: вкладка Blog, обложки из uploads/Blog для 26 постов (без обложки: "Better delivery decisions start with better visibility"). Проверить: вкладка Blog, 390 px.
- **Cartwheel Newsroom.dc.html**: обложки постов из присланных папок: Cartwheel in Media (assets/news/media/), Thought Leadership и Press Releases (uploads/). Вкладка Press releases расширена до 33 постов, как на trycartwheel.com/newsroom. Без обложки (нет фото на сайте): блог (кроме двух), несколько постов media/press. Проверить: все 4 вкладки, 390 px.
- Cartwheel Newsroom: на вкладках кроме Media/Press featured-карточка убрана, все материалы идут единой сеткой в 3 колонки. Проверка: вкладка Blog, первая запись в общей сетке; на 390 px одна колонка.
- Cartwheel Newsroom: убран блок Alex Vasilkin (фото, роль, био) в интро на вкладках кроме Media/Press; featured-карточка растягивается на всю ширину. Проверка: открыть вкладку All/Blog, блока нет; на 390 px карточка в одну колонку.
- Cartwheel Catering.dc.html: в блок «Why tracking matters» под статистикой добавлена карточка кейса Jason's Deli (из Restaurants v2). Проверить: под логотипами, 390 px.
- Cartwheel Catering.dc.html: блок статистики под логотипами переименован (eyebrow «Why tracking matters», H2 «Catering orderers expect to see their order on the way.») и переоформлен: единая панель с 4 ячейками и тонкими разделителями (2×2 на ≤860 px), крупные цифры; источник уточнён (только 3 цифры из опроса ezCater). Проверить: под логотипами, 390 px.
- Cartwheel Catering.dc.html: удалён блок отзывов «Turn happy customers into public reviews.». Проверить: страница целиком, 390 px.
- Cartwheel Catering.dc.html: блок «In-house delivery»: списки трёх карточек (Dispatch and driver tools, Marketing suite, Reports and analytics) и ссылка CTA взяты из обновлённой версии в Cartwheel Restaurants v2.dc.html. Подзаголовок оставлен кейтеринговый. Проверить: секция, 390 px.
- Cartwheel Catering.dc.html: в «Vehicle types» коллаж из трёх кадров заменён на один кадр (загрузка кейтеринга в багажник, assets/cat-vehicle-trunk.png), без лишнего визуального шума. Проверить: #tools, 390 px.
- Cartwheel Catering.dc.html: фото в «Vehicle types» вписано целиком (contain на мятном фоне), смягчено фильтром (меньше насыщенность/контраст). Проверить: #tools, 390 px.
- Cartwheel Catering.dc.html: в карточке «Vehicle types» (#tools) фото офиса диспетчера заменено на cat-vehicle-rules.png (машина/фургон вместо велосипеда). Проверить: #tools, 390 px.
- Cartwheel Catering.dc.html: подпись ленты логотипов заменена на «Trusted by 350+ brands, large and small» (как на Hybrid Delivery). Проверить: под hero, 390 px.
- Cartwheel Catering.dc.html: карточки «Hybrid Delivery for catering» переведены на пункты с галочками из Cartwheel Hybrid Delivery.dc.html (в т.ч. заголовок «Access specialized catering fleets»). Проверить: секция, 390 px.
- Cartwheel Catering.dc.html: тексты трёх карточек «Hybrid Delivery for catering» сокращены с сохранением смысла. Проверить: секция Hybrid Delivery for catering, 390 px.
- Cartwheel Catering.dc.html: в hero экран трекинга заменён на брендированный экран Jason's Deli (assets/tracking-phone.png). Проверить: первый экран, 390 px.
- Cartwheel Catering.dc.html: фон hero заменён на светлый, как на Restaurants v2 (wash + слои + светло-бирюзовая панель); цвета текста, кнопок и trust-строки переведены на переменные --hero-*. Проверить: первый экран, светлая/тёмная тема, 390 px.
- Cartwheel Catering.dc.html: заголовок секции Real-time tracking заменён на «Every catering order, tracked live.» (без упоминания комиссий). Проверить: #tracking, 390 px.
- Cartwheel Catering.dc.html: в секции Real-time tracking убран текст про комиссии ezCater и рейтинг; абзац теперь о трекинге и процессе. Проверить: секция #tracking, 390 px.
- Cartwheel Catering.dc.html: блок «What catering customers say» (95% / 91% / 76% / Up to 10% + источник) перенесён из секции Real-time tracking в отдельную полосу сразу после ленты логотипов; на десктопе 4 карточки в ряд, на мобильном складываются. Проверить: секция под логотипами, 390 px.

## 2026-10-23
- **Cartwheel Hybrid Delivery.dc.html**, **Cartwheel Restaurants v2.dc.html**, **Cartwheel Homepage v4.dc.html**, мобильная версия (≤640 px), карусель отзывов: высота карточки не меняется (600 px); для длинных цитат шрифт автоматически уменьшается с 17 px шагом 0.5 до минимум 13 px, пока текст не помещается и не налезает на имя (метод _fitQuotes, пересчёт при загрузке шрифтов и resize). Проверить: 390 px, пролистать все отзывы.
- **Cartwheel Hybrid Delivery.dc.html**, мобильная версия, схема "The engine": включены линии от источников к шестерёнке и от шестерёнки к выходам с бегущими точками и подсветкой карточек (раньше рисовались только от 900 px). Проверить: 390 px и 1440 px.
- **Cartwheel Hybrid Delivery.dc.html**, мобильная версия (≤640 px), hero: карта стоит между лидом и кнопками (высота 360 px, обрезка по ширине), порядок: eyebrow → заголовок → лид → карта → кнопки → trust-ряд. Проверить: 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, мобильная версия, лента "Trusted by 350+ brands": вместо статичной сетки снова бегущая карусель (как на главной, 34 s); статичная сетка остаётся только при prefers-reduced-motion. Проверить: 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, мобильная версия (≤640 px), hero: eyebrow, заголовок, лид и trust-ряд по центру; кнопки Book a demo / See how it works на всю ширину (до 340 px) одна под другой. Проверить: 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, мобильная версия, блок "The model": перенесён мобильный вариант со страницы Restaurants v2: вкладки скрыты, три модели идут подряд (текст → схема, разделители), плашка Coming soon под третьей схемой; схема In-house: плашки статуса в строке заголовка (11 px), подпись "Third-party" вместо "Third-party fleets", логотипы провайдеров ×2 в две строки, стейдж 440 px; схема Manual backup: поток, плашки по центру над лентами, хаос сеткой без наложений на карте, зелёный блок отдельно с центрированными карточками. Десктоп без изменений. Проверить: 390 px и 1440 px.
- **Cartwheel Demo.dc.html**, правки текста по "Demo page copy fixes": title/og/description (Toast restaurants, без провайдеров и "International Brands"); H1 "Commission-free delivery / for Toast restaurants."; статичный лид hero; "Pricing in {страна}", "per location per month", "Email support, replies within 24 hours"; валюта C$/A$ без суффиксов CAD/AUD; диапазоны Under X / X to Y / Over Y; "Outside London"; последняя строка Stuart "£17.60 / £17.45 + £1.50 per extra mile"; Ireland в km; новые формулировки сносок и налоговых примечаний; в статичных текстах провайдеры не называются (problem/solution, visibility, refunds, large orders, FAQ); "under one second" в FAQ; 27% и $0.29 убраны из FAQ; "Canceled" (US spelling); "Provider refunds" в визуале. V9: из исходника удалены неиспользуемые данные (_toast, rule cards, testimonials, catering/engine rows). GST для Australia не добавлен (V4 в ожидании). Проверить: все страны, 1440 px и 390 px, FAQ и JSON-LD совпадают.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия (≤560 px), схема "In-house delivery": плашки статуса ("At capacity" / "Drivers back", "Open") стоят в той же строке, что заголовок с иконкой (иконка + "Your drivers" / "Third-party" слева, плашка справа), шрифт плашки 11 px, подпись нижней панели на мобильном сокращена до "Third-party"; стейдж 440 px, панели 32% / 40%. Проверить: 390 px, анимация заказов.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия (≤560 px), схема "In-house delivery": логотипы провайдеров (Uber Direct, DoorDash Drive, Grubhub) увеличены в 2 раза и разложены в две строки: два сверху, один по центру снизу. Проверить: 390 px.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия, схема "Manual backup": исправлен фон: карта на тёмном фоне теперь только внутри красного блока хаоса, зелёный блок Hybrid Delivery отдельно на светло-бирюзовом; плашки наполовину заходят на свои блоки, как на десктопе. Проверить: 390 px.
- **Cartwheel Restaurants v2.dc.html**, hero, мобильная версия: отступ eyebrow "Restaurants" до заголовка уменьшен до 12 px (как на других страницах). Проверить: 390 px.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия (≤560 px), схема "Manual backup": стейдж перестроен в поток: подпись "Friday, 6:40 pm" по центру, красная и зелёная плашки стоят по центру над своими лентами и не перекрывают заголовки лент; в красной ленте "беспорядок" разложен сеткой 2 колонки (реплики на всю ширину), без наложений, лента выше (~360 px); в зелёной ленте тексты карточек и заголовки колонок отцентрованы. Десктоп без изменений. Проверить: 390 px.
- **Cartwheel Restaurants v2.dc.html**, тёмная тема: секция "Solutions" переведена с жёсткого #F9FAFC на var(--panel) (белый текст на белом фоне исправлен); плашка "ORD 4821 · 42 trays" в Catering получила фиксированный тёмный текст #31373F. Аудит контраста по всем секциям в тёмной теме: других проблем нет. Проверить: переключить тему, 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия (≤900 px), блок "Challenges that Hybrid Delivery solves": вкладки скрыты, три модели (In-house / Manual backup / One third-party provider) идут подряд: текст, затем схема, с разделителями. На десктопе вкладки без изменений.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия (≤860 px), секция "Economics": все четыре пункта раскрыты сразу (текст + картинка под каждым), автопереключение и клики отключены, прогресс-линии скрыты. На десктопе без изменений.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия (≤700 px), баннеры Catering eBook и Pizza eBook: контент по центру, порядок eyebrow → заголовок → фото (увеличено на 30%, 234 px) → кнопка.
- Мобильная витрина грузит тот же файл, все десктопные правки этого дня в ней присутствуют; проверено на 390 px: переполнений нет.
- **Cartwheel Hybrid Delivery.dc.html**: применён документ "Hybrid Delivery page copy fixes" (uploads/). Meta/og description, hero (Hybrid Delivery™, $1 billion in order value routed, Third-party driver), лента логотипов, The model (H2 + новый подзаголовок), правила (карточки и SEO-список синхронизированы: ninth, for example, $100 or more, every shift and location; интро без "most advanced" и ™), catering card 3, Your fleet (bullets, 1,500 ratings, CTA, "Carrier" вместо AT&T), Third-party providers label + CTA, live map и tracking тексты, branded experience, заголовки integrations, атрибуции цитат, удалён отзыв Kevin Polk (V5: карусель и SEO-блок), Results (H2, теги Hybrid Delivery / AI auto-dispatch, thousands, backup, 63→47, New Jersey), FAQ (JSON-LD и видимый текст синхронно). На странице не найдены: "Full control on Toast" (Flyboy), заголовок "Catering & Events". Пункты из Restaurants doc (G1–G10, форма, футер) не применялись: документа нет в проекте. Проверить: 1440 px и 390 px.

**Cartwheel Restaurants v2.dc.html**: применены правки копирайта из uploads/Restaurants page copy fixes.md.
- Meta/og description, описания пунктов меню, hero H1 ("Grow delivery on your terms."), подзаголовок hero, "Top-rated driver app", подпись ленты логотипов (исходная строка в sentence case, uppercase через CSS).
- Solutions: Catering/Enterprise/Emerging тексты; Hybrid-табы 1-3 (H3, абзацы, буллеты); карточки правил; кейс New Jersey fried chicken brand.
- Engine-схема: "Rule-based dispatch engine", "Dozens of catering-focused providers", "Third-party providers".
- Third-party: интро и 4 пункта (двоеточие после жирного лида, без 27% и $0.29); Economics: карточки 1-4, bid board "Under 1 second…", "Canceled".
- In-house: рейтинг 4.6 / 1,500, объединён пункт отзывов, "Refund status for third-party providers", CTA "Explore dispatch and driver tools". Enterprise: White-glove и API описания. Интеграции: заголовки колонок, "Dozens of catering providers".
- Отзывы: "What our customers say", должности (VP, Off-Premise Dining и т. д.). Scarpino и "fulfilment" не тронуты (раздел 8).
- FAQ (видимый, _faqs, JSON-LD синхронно), форма (опции, ошибки, opt-in, driver notice), футер (tagline, "Refer a restaurant", "CCPA notice"), мобильное меню в sentence case.
- Глобально: "third-party fleet(s)" → "third-party provider(s)", "DSP" убран. Вступление Catering не менялось (V3 на удержании).
- Проверка: открыть страницу на десктопе и 390 px (мобильная витрина грузит тот же файл), пройти по секциям и сверить с таблицами из uploads.


## 2026-10-26
- Cartwheel Newsroom: на вкладках кроме Media/Press featured-карточка убрана, все материалы идут единой сеткой в 3 колонки. Проверка: вкладка Blog, первая запись в общей сетке; на 390 px одна колонка.
- **Cartwheel Demo.dc.html** (и мобильная витрина): карточка Pricing, отступы между внутренними блоками (провайдеры, тарифы) сокращены с 24+20 / 28+24 px до 20+20 px, gap заголовка тарифов 14 px, как в карточках остальных страниц. Проверить: 390 px.
- **Cartwheel Demo.dc.html** (и мобильная витрина): в карточке Pricing по центру: заголовок "Pricing in…", "Available delivery providers" с логотипами, "Third-party delivery rates", логотипы DoorDash/Uber в карточках тарифов и зелёные плашки-заголовки групп. Проверить: 390 px и 1440 px.
- **Cartwheel Demo.dc.html** (и мобильная витрина): выбор страны с флагами перенесён из верха hero вниз, между YouTube-видео и карточкой Pricing, по центру. Проверить: 390 px и 1440 px, переключить страну.
- **Cartwheel Demo (Mobile).dc.html**: новая мобильная витрина (iframe 390 px в рамке телефона) для Cartwheel Demo.dc.html. Проверить: открыть файл, прокрутить внутри рамки.

## 2026-10-23
- **Cartwheel Demo.dc.html**, правки текста по "Demo page copy fixes": title/og/description (Toast restaurants, без провайдеров и "International Brands"); H1 "Commission-free delivery / for Toast restaurants."; статичный лид hero; "Pricing in {страна}", "per location per month", "Email support, replies within 24 hours"; валюта C$/A$ без суффиксов CAD/AUD; диапазоны Under X / X to Y / Over Y; "Outside London"; последняя строка Stuart "£17.60 / £17.45 + £1.50 per extra mile"; Ireland в km; новые формулировки сносок и налоговых примечаний; в статичных текстах провайдеры не называются (problem/solution, visibility, refunds, large orders, FAQ); "under one second" в FAQ; 27% и $0.29 убраны из FAQ; "Canceled" (US spelling); "Provider refunds" в визуале. V9: из исходника удалены неиспользуемые данные (_toast, rule cards, testimonials, catering/engine rows). GST для Australia не добавлен (V4 в ожидании). Проверить: все страны, 1440 px и 390 px, FAQ и JSON-LD совпадают.
- **Cartwheel Restaurants v2.dc.html**, hero, мобильная версия (≤900 px): тёмная плашка заменена на светло-бирюзовый градиент как на десктопе (тёмная тема: slate-градиент); eyebrow, заголовок, лид, кнопки и trust-ряд отцентрованы; фото телефона (tracking) и квадратное фото handoff сохранены в той же композиции, что на десктопе, в уменьшенном виде (блок 320 px: фото ~275 px, телефон ~38% справа внизу), между лидом и кнопками. Проверить: 390 px в Cartwheel Restaurants v2 (Mobile).dc.html, десктоп 1440 px без изменений.
- **Cartwheel Hybrid Delivery (Mobile).dc.html** / **Cartwheel Hybrid Delivery.dc.html**: мобильная версия проверена на 390 px по всем 24 секциям: переполнений по ширине нет, гамбургер активен, футер в 2 колонки. Переиспользуемые блоки (The engine, Integrations, Results, Proof/отзывы, FAQ, CTA, футер) по структуре и стилям совпадают с мобильной версией главной (Engine: те же 4 источника 74×110, ядро, 3 выхода в ряд по 101 px; отличается только текст выходов). Правок не потребовалось. Проверить: открыть Cartwheel Hybrid Delivery (Mobile).dc.html.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Your fleet" (For drivers): рейтинг переоформлен как в hero главной: 4.6 + 4,5 закрашенных жёлтых звезды + 1.5k, подпись "Top-rated driver app, 1.5k ratings"; чип со звездой убран. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2 (Mobile).dc.html** (новый): мобильная витрина страницы ресторанов, телефон 390 px, грузит Cartwheel Restaurants v2.dc.html. Проверить: открыть, прокрутить все секции.
- **Cartwheel Restaurants v2.dc.html**, мобильная версия: добавлены переопределения для 390 px: лид hero (фиксированные width/height 450×124 сброшены на ≤640 px), заголовок баннера Catering eBook (width 389 px сброшен на ≤700 px). Переиспользуемые блоки (Solutions, Model, Engine, Catering, Enterprise, Integrations, Testimonials, FAQ, CTA, футер) проверены на 390 px: высоты и раскладка совпадают с главной и Hybrid Delivery; переполнений по ширине нет, гамбургер и 2-колоночный футер работают.
- **Cartwheel Restaurants v2.dc.html**, баннер "Pizza eBook": пиксели на тёмно-сером сделаны нейтральными в тон фона (rgba(255,255,255,.10)), без бирюзы. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, баннер "Pizza eBook": добавлен пиксельный интерактивный фон (canvas `.ai-px`, бирюзовые точки на тёмно-сером). Проверить: 1440 px (движение курсора) и 390 px.
- **Cartwheel Restaurants v2.dc.html**: после секции "Enterprise" добавлен второй баннер "Pizza eBook" в стиле баннера Catering eBook, на тёмно-сером фоне (var(--slate)): eyebrow "Free eBook · Pizza delivery", заголовок "How to increase delivery revenue for your pizza restaurant: 5 main trends", CTA "Get the eBook" → https://trycartwheel.com/pizza-delivery-ebook/, фото из страницы Pizza eBook (`assets/ebook-pizza-photo.png`) с анимированными контурами (белый + бирюзовый). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция "Economics": пиксельный фон убран, сплошной светло-бирюзовый (var(--teal-wash)). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, баннер "Catering eBook": текст и фото сдвинуты к центру (grid auto auto, justify-content:center, gap до 48 px), фото увеличено на 20% (180–264 px). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**: в баннер "Catering eBook" и секцию "Economics" добавлен пиксельный интерактивный фон с главной (canvas `.ai-px`, точки расходятся от курсора; фон rgba(42,223,180,.13)). Инициализация обобщена на все `.ai-sec` на странице. Проверить: 1440 px (движение курсора над секциями) и 390 px (статичная сетка), тёмная тема.
- **Cartwheel Restaurants v2.dc.html**, чередование фонов: баннер "Catering eBook" целиком на светло-бирюзовом (var(--teal-wash), диагональная панель убрана), секция "Third-party delivery" переведена на белый (var(--surface)), секция "Economics" на светло-бирюзовый. Проверить: 1440 px и 390 px, тёмная тема.
- **Cartwheel Restaurants v2.dc.html**, секция "Catering eBook": баннер сделан компактным: паддинг 20–28 px, картинка 150–220 px, заголовок 18–22 px, абзац убран, остались eyebrow + заголовок + CTA. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**: баннер eBook вынесен в отдельную полноширинную секцию "Catering eBook" после "Catering": светло-бирюзовый фон с диагональной панелью как в hero (без тёмной плашки), фото из страницы Catering eBook с анимированными контурами (SVG blob, `assets/ebook-catering-photo.png`), eyebrow "Free eBook", H2, текст, CTA "Get the eBook" → https://trycartwheel.com/catering-delivery-ebook/. На ≤700 px панель на всю ширину, колонки складываются. Проверить: 1440 px и 390 px, тёмная тема.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Branded tracking": цвет круга под телефонами заменён на бирюзу плашек FAQ (rgba(42,223,180,.13)). Проверить: 1440 px и 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Branded tracking": телефоны больше не накладываются, стоят рядом (flex, gap 4%, ширина 46% каждый), левый смещён вниз на 5%, правый вверх; бирюзовый круг (var(--teal-wash)) занимает всю ширину блока (380 px). Проверить: 1440 px и 390 px, прокрутка до секции.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Branded tracking": пара "Without / With Cartwheel" заменена на два экрана Jason's Deli (tracking + review, `assets/tracking-phone-map.png`, `assets/tracking-phone-review.png`) на светло-бирюзовом круге (var(--teal-wash)). Появление при прокрутке (IntersectionObserver, порог 35%): круг раскрывается, телефоны выезжают снизу с задержкой; под prefers-reduced-motion статично. Проверить: 1440 px и 390 px, прокрутить до секции.
- **Cartwheel Demo.dc.html**, Pricing: ряд "Available delivery providers" перенесён сразу под цену Cartwheel (над тарифами провайдеров). Проверить: все страны, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, карточка Pricing: под тарифами добавлен ряд логотипов "Available delivery providers in {страна}" (без подложки, высота строки 72 px). Canada: DoorDash Drive, Uber Direct, SkipGo; UK: Uber Direct, JET Go, Stuart; Ireland: JET Go; Australia: Uber Direct. Список задаётся в _ctys.providers. Проверить: все страны, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Pricing (Canada): таблицы тарифов переоформлены: карточки провайдеров одинаковой высоты, группы с плашками "Standard delivery" / "Catering", отступ между группами, без лишней линии под последней строкой, "per extra km". Проверить: Canada, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Pricing: логотип Uber Direct в таблицах тарифов уменьшен (max-height 18 px против 28 px у остальных), чтобы визуально совпадать с DoorDash, JET Go, Stuart. Проверить: Canada / UK / Australia, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Pricing (UK, Stuart): "+£1.50/mile" сокращено до "+£1.50/mi", чтобы помещалось в одну строку. Проверить: UK, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Pricing (Australia): таблица Uber Direct заменена на формулу из двух плиток: Base fee $10 AUD per delivery + Distance fee $1.10 AUD per km, подпись "Deliveries up to 10 km". Проверить: Australia, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Pricing (Ireland): горизонтальная таблица со скроллом заменена на сетку плиток "диапазон / цена": 6 в ряд на десктопе (2 ряда), 3 в ряд на ≤640 px (4 ряда), без скролла. Проверить: Ireland, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Pricing: если у страны один провайдер и одна ценовая колонка (Ireland, JET Go), таблица тарифов горизонтальная: строки "Distance" / "Flat fee", диапазоны по колонкам; на узких экранах горизонтальный скролл с закреплённой первой колонкой. Проверить: Ireland, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Australia: провайдер в таблице тарифов: Uber Direct с логотипом. Проверить: Australia, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, Australia: формулировки тарифов без "flat fee" (подзаголовок "Pre-negotiated rates", колонка "Fee", сноска без routed-дистанции). Проверить: Australia, 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, контент Ireland и Australia (из one-pager'ов + Ireland 3PD Pricing): лид hero, примечания; Ireland: таблица JET Go (€, 12 диапазонов в милях) + VAT; Australia: базовый тариф $10 AUD/доставка + $1.10 AUD/км, доставки до 10 км (без логотипа провайдера: в one-pager не указан). Карточка тарифа поддерживает провайдера без логотипа (показывается название). Проверить: 1440 px и 390 px, Ireland / Australia.
- **Cartwheel Hybrid Delivery.dc.html**, секция "The model" (шаг 1, New orders): анимация заказов приведена к версии со страницы Restaurants v2: чип появляется у иконки источника почти в полном размере, проявляется и летит по плавной дуге (.85 s, без пружины); иконка при спавне мягко подсвечивается бирюзой вместо "отскока" с кольцом. Проверить: 1440 px и 390 px, prefers-reduced-motion.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Your fleet" (For drivers): рейтинг 4.6 переоформлен в стиле статов hero: иконка-чип со звездой (44 px, teal-wash), число 4.6 / 5 (Ubuntu 22 px) и подпись в две строки. Проверить: 1440 px и 390 px.
- **Cartwheel Demo.dc.html**: брендированный трекинг и отзывы доступны только в Канаде. Секция "Your brand, protected" и FAQ "Can customers still track the order on my brand?" показываются только для Canada; в карточке "One layer over every provider" фраза про branded page только для Canada; дефолтный лид hero заменён на текст one-pager без трекинга; H2 финального CTA "Start delivering through Cartwheel." Также: логотип JET Go заменён на оранжевый (assets/logo-jetgo.png), исправлено "+£1.50/mile" у Stuart. Проверить: 1440 px и 390 px, Canada / UK / Ireland.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Why hybrid" (HYBRID FOR CATERING): фон заменён на светло-серый (var(--panel), #F9FAFC), чтобы отделить от белой секции выше. Проверить: 1440 px и 390 px, обе темы.
- **Cartwheel Demo.dc.html**, контент UK (из Toast UK One-pager + UK 3PD Pricing): лид hero, примечания (month to month, VAT) и три таблицы тарифов с логотипами: Uber Direct, JET Go и Stuart (London / Non-London). Таблицы тарифов обобщены под несколько ценовых колонок. Логотип Stuart вырезан из прайса: assets/logo-stuart.png. Проверить: 1440 px и 390 px, переключение Canada / UK.
- **Cartwheel Hybrid Delivery.dc.html**, hero: фон заменён с почти чёрного (#121B22) на фирменный серый (#31373F, панели #2C323A). Проверить: 1440 px и 390 px (Mobile-витрина грузит тот же файл).
- **Cartwheel Hybrid Delivery.dc.html**, секция "Brands who trust us": фон теперь белый (var(--page)), без градиента. Проверить: 1440 px и 390 px, обе темы.
- **Cartwheel Demo.dc.html**: секция "Toast + Cartwheel" (преимущества + order flow) удалена. Проверить: 1440 px и 390 px, Canada.
- **Cartwheel Demo.dc.html**, карточка Pricing (Canada): блок тарифов заменён на две таблицы с логотипами: DoorDash Drive (0–7 km $8.50; 7–12 km $8.50 + $1/km; catering 0–10 km $30; 10+ km $30 + $5/km) и Uber Direct (0–5 / 5–10 / 10–15 km: $6.49 / $9.99 / $11.99 CAD) + сноска о routed-дистанции. Проверить: 1440 px и 390 px.
- **Cartwheel Demo.dc.html**, контент по стране (Canada, из Toast Canada One-pager): при выборе Canada меняется лид hero, в карточке Pricing появляются тарифы доставки по расстоянию (0–5 / 5–10 / 10–15 km: $6.49 / $9.99 / $11.99 CAD) и примечания (month to month, provincial taxes); после hero добавлена секция "Toast + Cartwheel" (3 преимущества + 5 шагов order flow). Для остальных стран эти блоки скрыты до получения one-pager'ов. Проверить: 1440 px и 390 px, переключение Canada / UK.
- **Cartwheel Demo.dc.html**, hero: переключатель стран (Canada / UK / Ireland / Australia / Puerto Rico) вынесен из карточки Pricing наверх hero как переключатель всей страницы ("Select your country"); eyebrow карточки теперь "Pricing, {страна}". Контент секций по странам будет добавлен после получения one-pager'ов (данные в `_ctys`). В список рядом с ценой добавлен пункт "Pricing applies to Toast restaurants only". Проверить: 1440 px и 390 px (Cartwheel Demo (Mobile+Desktop).dc.html), переключение стран.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Branded tracking": шапка переписана про единый опыт для in-house и 3PD заказов (eyebrow "One experience, every order", H2 "Every delivery looks like yours.", новый лид) + стат 95% из Catering (ezCater survey) с подписью источника. Проверить: 1440 px и 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Your fleet": над чек-листами добавлены заголовки H3: "Top-rated driver apps for iOS and Android." (For drivers) и "One dispatch view for every order and driver." (For dispatchers). Проверить: 1440 px и 390 px, переключение вкладок.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Your brand, protected", левая колонка: добавлены пункты "One consistent experience across every delivery, in-house or third-party" и "Show or hide the delivery provider's name" (теперь 5 и 5). Проверить: 1440 px и 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Your brand, protected", правая колонка: добавлены пункты "Collect reviews for food and delivery separately" и "Integration with third-party guest review collection tools". Проверить: 1440 px и 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Why hybrid", третья карточка: заголовок "Orchestrate specialized catering fleets", абзац заменён на три пункта с галочками. Проверить: 1440 px и 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Why hybrid", карточка "Keep the best orders in-house": абзац заменён на три пункта с галочками. Проверить: 1440 px и 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, секция "Why hybrid", карточка "Cover driver shortages": абзац заменён на три пункта с галочками (Backup fleets when your drivers are unavailable / Consistent service through peaks and staffing gaps / No added permanent headcount). Проверить: 1440 px и 390 px.

## 2026-10-22
- **Cartwheel Restaurants v2.dc.html**, hero: кнопка "Book a demo" переведена на фирменный градиент (120deg, #00997D → #2ADFB4 → #00997D) с перетеканием при hover, как у кнопки в хедере; белый текст. Проверить: 1440 px и 390 px, светлая и тёмная тема.
- **Cartwheel Restaurants v2.dc.html**, секция Solutions: фон сплошной светло-серый #F9FAFC вместо градиента. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**: фоны поменяны местами: секция Solutions получила --grad-gray (ранее у Hybrid Delivery / #model), секция Hybrid Delivery стала белой (--surface). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…": иконки на трёх кнопках-вкладках увеличены на 15% (Tabler 20 → 23 px, иконка водителей 41×31 → 47×36). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): новая анимация вылета заказа без пружины и "выстрела": иконка New orders не дёргается, вместо кольца внутри неё на 0.7 s мягко вспыхивает бирюзовое свечение; чип рождается по центру иконки (scale .92, прозрачный), проявляется и плавно уплывает к цели по лёгкой дуге (.85 s, ease-in-out). Проверить: 1440 px и 390 px, вкладка In-house.
- **Cartwheel Restaurants v2.dc.html**: разделительная линия между логотипами брендов и Solutions теперь на всю ширину экрана (border-top секции Solutions) вместо ширины .wrap. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция Third-party delivery: фон сплошной светло-бирюзовый (--teal-wash) вместо градиента. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**: фоны секций поменяны местами: Third-party delivery получила --grad-teal с линиями сверху/снизу (ранее у Economics), Economics стала белой (--surface) без рамок. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**: между блоком логотипов "Trusted by 350+ brands" и секцией Solutions добавлена разделительная линия 1 px (--border) по ширине .wrap на верхней границе секции Solutions; отступы секции сохранены. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…": иконка "One third-party fleet" (вкладка и чип в тексте) заменена с `ti-topology-star-3` (снежинка) на `ti-truck-delivery`. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, секция Solutions: строка "Over $1 billion…" возвращена к исходному стилю (Inter 600, uppercase, letter-spacing .09em, вся зелёная --teal-d), но крупнее: clamp(15px,1.3vw,17px) вместо 13 px. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция Solutions: строка "Over $1 billion…" уменьшена до clamp(23px,2.4vw,28px) (между H2 секций и H3 карточек 17 px). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция Solutions: строка "Over $1 billion…" переведена на размер H2 секций, как у заголовка "Challenges that Hybrid Delivery solves": Ubuntu 700, clamp(27px,3.2vw,36px), line-height 1.12; допускается перенос на две строки. Проверить: 1440 px и 390 px.
- **Cartwheel Hybrid Delivery.dc.html**, блок The model (#model): eyebrow "The model", H2 "What changes when you go hybrid?" и подзаголовок оставлены; всё остальное (вкладки, анимированные сцены, кейсы, стили .hxm-*, логика _hxmVals/_hxmSim*) перенесено из Cartwheel Restaurants v2. Проверить: 1440 px и 390 px (мобильная витрина грузит тот же файл), переключение вкладок и анимация сцены 1.
- **Cartwheel Restaurants v2.dc.html**, секция Solutions: строка "Over $1 billion…" уменьшена до размера заголовков карточек (Ubuntu 700, 17 px), в одну строку без переноса (nowrap); на ≤640 px перенос разрешён. Проверить: 1440 px (одна строка) и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция Solutions: строка "Over $1 billion in restaurant order value powered by Cartwheel" выделена: вместо 13 px uppercase-eyebrow теперь заголовочный Ubuntu 700, clamp(22px,2.4vw,30px), тёмный текст, цифра "Over $1 billion" сплошным зелёным (--teal-d), отступ сверху 40 px. Проверить: 1440 px и 390 px.

## 2026-10-21
- **Cartwheel Restaurants v2.dc.html**, сцена 1: правки после проверки: скрытый чип остаётся в слоте и гаснет там (раньше на миг возвращался к источнику при затухании); из чипа убрана иконка блюда, остался только номер (#821) с паддингом 4 px, чтобы содержимое помещалось в ширину слота (38 px). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): чип заказа теперь того же размера, что слот водителя (width --sw, height --c), и садится точно в слот; номер сокращён до трёх цифр (#821). Полёт переведён с transition на keyframes (из --sx/--sy к цели, .6 s, рост от .3 до 1): чип стартует сразу в момент "толчка" иконки, без паузы над ней, и затем ~0.6 s лежит в слоте до исчезновения. Проверить: 1440 px и 390 px, вкладка In-house.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): эффект "рождения" заказа. Чип заказа той же высоты, что иконка New orders (48 px, на ≤560 px 38 px), появляется маленьким (scale .3) у правого края иконки, растёт из своей левой стороны и увеличивается в полёте до цели; при выталкивании иконка пружинит (сжатие/отскок, класс hxm-pop) и от неё расходится бирюзовое кольцо-вспышка. Посадка на слоты водителей и партнёров центрирована по новой высоте. Проверить: 1440 px и 390 px, вкладка In-house.
- **Cartwheel Restaurants v2.dc.html**, секция Enterprise, четыре карточки (White-glove implementation / Scale in weeks / API-first / 24/7 live support): добавлен hover-эффект как у карточек In-house delivery (класс `grad-hover`: подъём, бирюзовая тень, бегущий градиент по контуру). Проверить: 1440 px, навести на карточки.
- **Cartwheel Restaurants v2.dc.html**, раздел In-house delivery, три карточки (Dispatch and driver tools / Marketing suite / Reports and analytics): убрана разделительная линия под последним пунктом списка. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): источник возвращён к прежнему виду: иконка заказа (блюдо) в тёмной рамке с подписью "New orders"; из неё вылетает один светло-салатовый чип с иконкой блюда и номером. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, карточка кейса Jason's Deli (секция catering): фото заменено на новое (стол с едой сверху), файл `assets/cs/jasons-deli-food-v2.jpg` (1600 px, JPEG). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, In-house delivery / Reports and analytics: добавлен пункт "Third-party delivery providers refund status updates". Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, In-house delivery / Dispatch and driver tools: строка-рейтинг "4.6 ★ average driver app rating" заменена обычным пунктом списка "Driver app with 4.6 stars rating". Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): карточки хаоса распределены по всей высоте панели: справа #1043 → 2%, Ana → 24%, #1045 → 50%, "Can I batch…" → низ; слева Mike → 20%, "Call DoorDash…" → 38%, #1044 → 58%. Пустоты внизу нет. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, In-house delivery / карточка Marketing suite: добавлены пункты "Native review collection tool" и "Integrations with third-party marketing tools". Проверить: 1440 px и 390 px, высота трёх карточек.
- **Cartwheel Restaurants v2 -Model wide-.dc.html**, вкладка Manual backup: подзаголовок (абзац) возвращён под заголовок в левый столбец; в правом столбце остался только список преимуществ (без верхней линии). Проверить: 1440 px.
- **Cartwheel Restaurants v2 -Model wide-.dc.html**: широкая раскладка (текст в два столбца над анимацией, панели в ряд) применяется только к вкладке Manual backup (класс hxm-wide ставится при активной вкладке 1). Вкладки In-house и One third-party fleet вернулись к исходной раскладке: текст слева, анимация справа. Проверить: 1440 px, переключить все три вкладки.
- **Cartwheel Restaurants v2 -Model wide-.dc.html** (новая страница, копия Cartwheel Restaurants v2): вариант раздела "What changes when you go hybrid". На десктопе (≥901 px) текст вкладки идёт над анимацией в два столбца (слева иконка, eyebrow и заголовок; справа абзац и список), анимация во всю ширину ниже. В сцене Manual backup красная и зелёная панели стоят в ряд (50/50), плашки "~10 min lost per order" и "Under 1 second" сидят на верхних правых краях своих панелей, высота сцены 400 px. На ≤900 px раскладка прежняя (в столбик). Проверить: 1440 px и 390 px, вкладка Manual backup.
- **Cartwheel Restaurants v2.dc.html**: секция Enterprise перенесена после In-house delivery, перед Integrations. Проверить: 1440 px и 390 px, чередование фонов секций.
- **Cartwheel Restaurants v2.dc.html**: удалена секция "Full visibility on every order" (.vis-map). Проверить: 1440 px и 390 px, соседние секции стыкуются без лишних отступов.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): панель Manual backup укорочена 270 → 246 px, чтобы зелёная плашка "Under 1 second" (top 304 px) не наезжала на неё: между панелями 12 px зазора над плашкой. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup), панель Hybrid Delivery: плашка "Under 1 second" вынесена на уровень сцены и сидит наполовину над верхним правым краем панели (top 304 px при top панели 324 px), размер и шрифт как у красной (40 px, 16 px, иконка 19 px), заливка --teal. У панели зелёный контур 1.5 px (--teal). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция Hybrid Delivery Engine (#hybrid): удалена карточка кейса Portillo's. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): плашка "~10 min lost per order" стала красной (#D93434) и вынесена из панели на уровень сцены: сидит на верхнем правом крае панели, наполовину над ней (top 26 px при top панели 46 px). У панели Manual backup красный контур 1.5 px. Проверить: 1440 px и 390 px, вкладка Manual backup.
- **Cartwheel Restaurants v2.dc.html**, The model / One third-party fleet: пункты 3 и 4 списка поменяны местами (сначала SLA-based auto-refunds, затем dispatch rules). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): летящий чип заказа стал светло-салатовым: фон --teal-wash, обводка rgba(0,153,125,.35), иконка и номер в teal-d. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): источник заказов стал иконкой ресторана (Tabler `building-store`, 26 px) в тёмной рамке с подписью "Restaurant"; чипы заказов (иконка блюда + номер) вылетают из него. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): в летящем чипе заказа отображалось две иконки блюда, потому что правило маски `.hxm-s1-tk span` цепляло и span с номером заказа. Правило сужено до первого span: теперь одна иконка + номер заказа. Проверить: 1440 px, вкладка In-house.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): у поля с карточками хаоса (`.hxm-mess`) снят `overflow:hidden`, из-за которого верхние карточки обрезались при повороте; обрезка остаётся только на уровне самой панели (скругление). Поле поднято на 6 px ближе к шапке. Проверить: 1440 px и 390 px, верхние карточки видны целиком при качании.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): плашка "~10 min lost per order" сдвинута в правый нижний угол панели (right/bottom 14 px), чтобы не перекрывать карточки заказов. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): плашка "~10 min lost per order" перенесена из шапки панели вниз, по центру нижнего края (absolute, bottom 14 px), увеличена: высота 40 px, текст 16 px, иконка 19 px, бирюзовая заливка с тенью. Проверить: 1440 px и 390 px, вкладка Manual backup.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): плашки "~10 min lost per order" (сверху) и "Under 1 second" (снизу) выделены: высота 24 → 32 px, текст 13 → 14 px, иконка 17 px, заливка сплошная бирюзовая (--teal) с белым текстом. Проверить: 1440 px и 390 px, вкладка Manual backup.
- **Cartwheel Restaurants v2.dc.html**, The model / Manual backup: в список добавлен пункт "Increased repeat orders". Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, сцена 2 (Manual backup): тёмная заливка поверх карты стала прозрачнее (.86/.92 → .62/.70), карта читается лучше; бегущие пунктирные линии стали светлыми (rgba(255,255,255,.7)) вместо красных. Проверить: 1440 px и 390 px, вкладка Manual backup.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): в полёте всегда один чип заказа. Раньше предыдущий чип ещё затухал у цели, когда у источника появлялся следующий (два видимых). Теперь чип исчезает сразу по прилёту (без фазы затухания на месте), возврат к источнику без transition по позиции. Проверить: 1440 px, вкладка In-house: одновременно виден только один чип.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): летящие чипы заказов в том же тёмном стиле, что и иконка-источник: фон #2C323A, белая иконка и белый номер заказа, тёмная тень (вместо белой плашки с зелёной иконкой). Проверить: 1440 px и 390 px, вкладка In-house.
- **Cartwheel Restaurants v2.dc.html**, сцена 1 (In-house delivery): высота сцены на десктопе 500 → 465 px, отступы сверху и снизу от контента уменьшены вдвое (~35 → ~17 px). Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, hero: плашка зависит от темы. Светлая тема: светло-бирюзовый градиент (#CFEDEB → #E6F6F6 → #F1FAF9), стеклянные слои и фон в мятных оттенках, текст slate, eyebrow и акцент заголовка teal-d, "Book a demo" teal с белым текстом, ghost-кнопка с бирюзовой обводкой. Тёмная тема (data-theme=dark): прежний тёмно-серый градиент, белый текст, белая кнопка. Цвета вынесены в CSS-переменные --hero-*. Проверить: 1440 px и 390 px, переключить тему в хедере.
- **Cartwheel Restaurants v2.dc.html**, The model / Manual backup: фон блока "Manual backup" с красного на фирменный тёмно-серый (#31373F→#2C323A поверх карты). Красные бейджи "?", "Keep?", "3PD?" и красные пунктирные линии сохранены. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…", сцена 1 (In-house delivery): макет телефона с очередью заказов убран; вместо него слева иконка заказа в тёмной рамке (как на вкладке "One third-party fleet") с подписью "New orders", по центру высоты; чипы заказов вылетают из неё. Высота сцены на десктопе уменьшена 600 → 500 px (меньше отступы сверху и снизу). Проверить: 1440 px и 390 px, вкладка In-house: чипы стартуют от иконки, попадают в слоты водителей и к партнёрам.
- **Cartwheel Restaurants v2.dc.html**, секция Hybrid Delivery (#model): черновой подзаголовок под H2 "Challenges that Hybrid Delivery solves" заменён на финальный текст. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, hero: проба тёмно-серого варианта. Основная плашка: градиент #22272E → #31373F (--slate) → #4A525C вместо зелёного; три стеклянных слоя и фон-wash переведены в серые оттенки (wash #F3F4F6). Зелёный остался в акценте заголовка, кнопках и UI. Проверить: 1440 px, перезагрузить.
- **Cartwheel Newsroom.dc.html**: карточка Magdim Metshin подписана "Media contact" и теперь показывается во вкладках "Cartwheel in media" и "Press releases". Проверить: 1440 px и 390 px, обе вкладки.
- **Cartwheel Newsroom.dc.html**: добавлена четвёртая вкладка "Blog" (27 статей с trycartwheel.com/blog, ссылки на оригиналы). Проверить: 1440 px и 390 px, вкладка Blog, клик по карточке.
- **Cartwheel Restaurants v2.dc.html**, The model / Manual backup: красный блок "Manual backup" укорочен до 270 px, сцена 660→600 px (на мобильном 860→720 px), карточки внутри разложены по рядам без наложений. Остальные вкладки подогнаны под 600 px, общая высота ряда 680 px. Проверить: 1440 px, переключить вкладки; 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция The model: на десктопе (≥901 px) все три вкладки одной высоты, 660 px как у Manual backup. Анимация In-house обёрнута в `.hxm-s1-in` и центрирована, у One third-party fleet сцена 598 px + плашка Coming soon. На мобильном без изменений. Проверить: 1440 px, переключить три вкладки, высота блока не прыгает; 390 px.
- **Cartwheel Restaurants v2.dc.html**, hero: в подзаголовок добавлено слово hybrid ("your own drivers, third-party fleets, or hybrid"). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция The model, вкладка Manual backup: черновой абзац заменён на финальный текст (10 минут на заказ, опоздания, зависимость от одного диспетчера). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, плашка "Coming soon" в Hybrid Delivery Engine: вместо бледной пунктирной рамки залита фирменным градиентом кнопок (120deg, #00997D → #2ADFB4), текст и иконки белые. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, плашка "Coming soon" в Hybrid Delivery Engine: иконки Autonomous EVs / Drones / Sidewalk robots увеличены на 20% (18→22 px, 20→24 px). Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, карточка кейса Portillo's в Hybrid Delivery Engine: фон карточки полностью прозрачный (виден фон секции), фото растворяется в прозрачность. Бегущий градиент по контуру вынесен в псевдоэлемент `::before` с маской только на рамку (1.5 px), чтобы не просвечивать через прозрачный фон. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**: hover-эффект как у карточек Solutions (подъём 3 px, бирюзовая тень, бегущий по контуру градиент ctaSpin) добавлен на карточки "Device-based tracking" и "Phone-free tracking" (секция Full visibility) и на три карточки раздела In-house delivery (Dispatch and driver tools / Marketing suite / Reports and analytics) через класс `grad-hover`. Проверить: 1440 px и 390 px, навести на карточки.
- **Cartwheel Restaurants v2.dc.html**, карточка кейса Jason's Deli (секция catering): убран скачок карточки при наведении. Причина: общее правило `a.feat-card:hover{margin:36px 0 0}` сбрасывало её собственный margin (0 0 28px). Добавлен класс `cs-jd` и правило, сохраняющее margin на hover; остаются только тень и бирюзовая обводка. Проверить: 1440 px, навести на карточку: раскладка не двигается.
- **Cartwheel Restaurants v2.dc.html**, секция Hybrid Delivery Engine, карточка кейса Portillo's под схемой: фото справа теперь растворяется в прозрачность (mask-image 35%→100%) вместо перехода в тёмный цвет, фон карточки единый тёмный (#2F353D); рамка стала зелёной с бегущим по контуру градиентом (ctaSpin 3.2 s, при hover 2.2 s), как у ghost-кнопок. Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…": неактивные кнопки-вкладки теперь постоянно (без наведения) показывают бегущий по контуру градиент, как ghost-кнопка "See how it works" на главной (ctaSpin 3.2 s, при hover ускоряется до 2.2 s). Проверить: 1440 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…": у неактивных кнопок-вкладок при наведении по контуру бежит бирюзово-мятный градиент (тот же `ctaSpin`/conic-gradient, что у ghost-CTA и карточек Solutions) вместо заливки --teal-wash. Под prefers-reduced-motion: статичная бирюзовая обводка и светлая заливка. Проверить: 1440 px, навести на неактивную вкладку.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…": иконка группы водителей увеличена на 20%: на вкладке "In-house delivery, no backup" 34×26 → 41×31, в карточке "Third-party fleets" 36×26 → 43×31. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 2, Manual backup): пульсирующие плашки-вопросы на карточках заказов ("?", "Keep?", "3PD?") стали красными (#D93434) вместо тёмно-серых. Проверить: 1440 px и 390 px, вкладка Manual backup.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…": три кнопки-вкладки (In-house / Manual backup / One third-party fleet) переведены на стиль кнопок сайта: пилюля 999px, font 500 15px Inter, паддинг 15×26, без uppercase. Активная: градиент teal→mint→teal как у "Book a demo", при hover градиент перетекает (background-position). Неактивные: белая пилюля с бирюзовой обводкой 1.5px и бирюзовым текстом (как secondary-кнопки), hover заливается --teal-wash. Проверить: 1440 px и 390 px, кликать по вкладкам и наводить курсор.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 2, Manual backup): пунктирные линии между карточками хаоса стали красными (#FF5A5A) вместо белых, пунктир бежит вдоль линий (stroke-dashoffset, 1.4–2.1 s, часть в обратную сторону), сами линии удлинены и сильнее переплетены между плашками (многосегментные кривые через всё поле). Проверить: 1440 px и 390 px, вкладка Manual backup: красный пунктир движется, линии пересекаются друг с другом.
- **Cartwheel Restaurants v2.dc.html**, секция Solutions: при наведении на карточку по её контуру бежит бирюзово-мятный градиент (тот же эффект `ctaSpin` + conic-gradient, что у ghost-CTA и карточек интеграций), вместо статичной бирюзовой обводки. Под prefers-reduced-motion остаётся статичная бирюзовая обводка. Проверить: 1440 px и 390 px, навести на любую карточку Solutions.
- **Cartwheel Restaurants v2.dc.html**, hero: основная зелёная плашка сужена на 100 px (правый край сдвинут влево), освободившееся место отдано стеклянным полосам: теперь они 92/61/31 px (всего 184 px), дальний край остался на прежнем месте. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, hero: слои плашки стали разной ширины: ближний к основной 42 px, средний 28 px, дальний 14 px (дальний край остался на 84 px). Добавлен слой `.rp-wash` светло-бирюзового фирменного фона (`--teal-wash`), выезжающий слева до правого края экрана на высоту плашки (задержка .35 s). Проверить: 1440 px, перезагрузить: белого фона за плашкой нет, справа от тёмной плашки три сужающиеся полосы на мятном фоне.
- **Cartwheel Restaurants v2.dc.html**, hero: зелёная плашка стала многослойной. Под основной (самой яркой) добавлены три полупрозрачных слоя (`.rp-layer .rp-l1/.rp-l2/.rp-l3`) той же скошенной формы, каждый шире предыдущего на 26/54/84 px и светлее (мятные оттенки с blur), вылетают слева с задержкой .1/.2/.3 s, эффект "гармошки"/стекла. На ≤900 px и при prefers-reduced-motion слои скрыты/без анимации. Проверить: 1440 px, перезагрузить: плашка выезжает слоями, справа от тёмной видны три светлеющие полосы.
- **Cartwheel Restaurants v2.dc.html**, hero: фотография сдвинута влево ещё на 20 px (итого на 40 px от исходного положения), телефон на месте. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html**, hero: фотография (handoff) сдвинута влево на 20 px (left/right смещены на 20 px), телефон поверх остался на месте. Проверить: 1440 px, фото левее, телефон не сдвинулся.
- **Cartwheel Restaurants v2.dc.html**, hero: убраны слои карты заднего фона (размытая карта, резкая карта под курсором, белая дымка и градиент), фон секции теперь просто белый (`--page`). Зелёная плашка укорочена на 15 px снизу, блок "Brands who trust us" поднят на 15 px (margin-top 85→70), нижний отступ секции до Solutions уменьшен на 15 px. Проверить: 1440 px и 390 px, hero без карты, расстояние плашка→логотипы и логотипы→Solutions визуально меньше.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 2, Manual backup): верхняя плашка "хаоса" получила фоном карту из раздела Hybrid Delivery Engine (`assets/eng-map-bg.jpg`) с красным затенением (градиент rgba(176,38,38,.72)→rgba(140,24,24,.8)), красноватая обводка. Заголовок плашки и тег стали белыми, пунктирные линии между карточками стали белыми полупрозрачными; сами карточки заказов/водителей и их хаотичная анимация остались поверх. Проверить: 1440 px и 390 px, вкладка Manual backup: сверху красная карта с шумом карточек, снизу салатовый порядок.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 2, Manual backup): нижняя плашка "With Hybrid Delivery" получила фирменный светло-салатовый фон (`--teal-wash`), карточки заказов внутри стали белыми с лёгкой тенью и тонкой бирюзовой обводкой; обе колонки (Your drivers / Third-party) растянуты на одну высоту, карточки внутри равны по высоте. Верхняя плашка (хаос) без изменений. Проверить: 1440 px и 390 px, вкладка Manual backup: нижняя плашка салатовая, карточки белые, левый и правый столбцы одинаковой высоты.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 1): порядок назначения заказов водителям исправлен. Заказ летит только к серому (свободному) водителю, всегда к первому свободному слева направо; водитель становится зелёным только в момент прилёта чипа, а не при старте полёта. Пока чип летит, слот уже зарезервирован, поэтому следующий заказ берёт следующего свободного. Проверить: 1440 px, 1–2 минуты: чип никогда не летит к зелёной ячейке, заполнение идёт слева направо по свободным слотам.

## 2026-10-20
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 1): бесконечная случайная симуляция (повторно, исправлено). Очередь на телефоне всегда полная (6 видимых строк + 1 скрытая, новые заказы добавляются снизу), каждый 2-й тик заказ летит случайному свободному водителю (занят 12–18 тиков), при 5/5 занятых заказ уходит случайному партнёрскому логотипу, освободившиеся водители снова серые и снова принимают заказы. Строки и чипы заказов используют фиксированные слоты, чтобы анимации не прыгали. Проверить: 1440 px, 1–2 минуты наблюдения: окно заказов не пустеет, водители освобождаются и заполняются, логотипы подсвечиваются только при перегрузке.
- **Cartwheel Restaurants v2.dc.html**: откат бесконечной симуляции в сцене 1 секции "What changes…": возвращён фиксированный цикл из 24 шагов (как до правки).
- **Cartwheel Restaurants v2.dc.html**, панель Third-party fleets: иконка группы водителей увеличена до 36×26 px (визуально как иконка в "Your drivers"); логотипы уменьшены на ~20% (ширина 80% колонки, max-height 20 px), gap между ними 24 px; Grubhub дополнительно уменьшен на 10% (72%, 16 px). Проверить: 1440 px, логотипы визуально одного размера.
- **Cartwheel Restaurants v2.dc.html**: исправлен скачок карточек кейсов (a.feat-card) при hover: глобальное правило сбрасывало margin в 0, карточка прижималась к блоку выше и сдвигала всё ниже. Теперь margin-top 36 px сохраняется на hover. Проверить: 1440 px, навести на карточку кейса в секции "What changes…", раскладка не двигается.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 1): в плашке "Your drivers" ячейки водителей и полоса загрузки сдвинуты ниже (58 px и 72 px от верха вместо 50/62), чтобы содержимое было центрировано по вертикали и не оставалось пустоты снизу. Проверить: 1440 px, отступ над ячейками и под полосой визуально равны.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 1): мини-телефон переработан: высота равна двум плашкам справа (top 13% → 89%), ширина до отступа 8% от плашек (как зазор между плашками), тонкая тёмная рамка 5 px с чёлкой и home-индикатором, белый экран со списком заказов строками-разделителями. Проверить: 1440 px, верх/низ телефона совпадают с верхом первой и низом второй плашки, зазор телефон–плашки равен зазору между плашками.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 1): источник заказов переделан: вместо пунктирного квадрата слева стоит мини-телефон с экраном "New orders" и очередью заказов (#4821…, суммы). Верхний заказ подсвечивается и вылетает из телефона белым чипом (номер + иконка) к водителю или партнёрскому логотипу; очередь сдвигается вверх. Проверить: 1440 px, заказы вылетают именно из первой строки телефона, чёрных квадратов нет.
- **Cartwheel Restaurants v2.dc.html**, секция "What changes…" (сцена 1): (а) 5 ячеек водителей растянуты на всю ширину полосы загрузки (--sw), иконка водителя 24 px; (б) в панели Third-party fleets тег "Delivery stays open" перенесён в правый верхний угол напротив названия, иконка группы водителей уменьшена до высоты иконки в "Your drivers"; (в) логотипы Uber Direct / DoorDash / Grubhub стоят в один ряд, равные колонки, gap 16 px, визуально одной высоты; заказ прилетает в колонку своего логотипа. Проверить: 1440 px, ячейки водителей совпадают по краям с полосой, заказы попадают в колонки логотипов.
- **Cartwheel Restaurants v2.dc.html**: все карточки-ссылки кейсов (a.feat-card, в т.ч. в секции "What changes…") не подпрыгивают при hover: только тень и бирюзовая обводка. Проверить: 1440 px, навести на карточки кейсов в разных секциях.
- **Cartwheel Restaurants v2.dc.html**: панель Third-party fleets: оставлены 3 логотипа (Uber Direct, DoorDash Drive, Grubhub), стоят столбиком у правого края; Skipcart и 1Mile убраны. Каждый заказ, прилетающий в панель, летит к случайному логотипу, и именно он становится цветным в момент приёма (а не все сразу). Подсветка сбрасывается при новом цикле. Проверить: 1440 px, 3 заказа подряд в нижнюю панель, цветным становится логотип в строке прилёта.
- **Cartwheel Restaurants v2.dc.html**: секция "What changes…", панель Third-party fleets: лента логотипов больше не бежит, 5 логотипов стоят статично в один ряд (space-between). Когда заказ приходит в панель (шаг 11–17 цикла), случайные 1–3 логотипа становятся цветными и чуть увеличиваются, остальные серые. Проверить: 1440 px, дождаться прихода заказа в нижнюю панель, набор цветных логотипов меняется от цикла к циклу.
- **Cartwheel Restaurants v2.dc.html**: фото в hero заменено с пиццы на кадр передачи заказа курьеру (assets/hero-handoff.png, object-position center 40%). Проверить: 1440 px, кадрирование лиц и пакета.
- **Cartwheel Restaurants v2.dc.html**: карточка кейса Potbelly в секции "One live map" больше не подпрыгивает при hover (transform отключён); остаётся только тень и бирюзовая обводка. Проверить: 1440 px, навести на карточку кейса.
- **Cartwheel Restaurants v2.dc.html**, The model: во вкладке "One third-party fleet" показывается кейс NJ fried chicken brand (+52% delivery volume, $7,323 added revenue, ссылка nj-chicken-brand-case-study). National pizza chain теперь только на вкладке "In-house delivery, no backup". Проверка: переключение вкладок, десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "One third-party fleet": добавлены пункты "Set up rules based on price and speed" и "Keep delivery providers accountable with SLA-based auto-refunds" (перед пунктом про новые виды доставки). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": причина для Mike #1043 изменена на "High-value order, large tip". Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": причина для #1045 изменена на "No in-house capacity". Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": в колонку Third-party добавлен заказ #1046 "Small order, far away". Проверка: вкладка 2 на десктопе и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": бейдж Batched вынесен отдельной строкой под причину (не перекрывает номера), полоса Hybrid Delivery получила больше места, причины укорочены. Проверка: вкладка 2 на 924 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": в полосе Hybrid Delivery указаны водители: Ana берёт батч #1042+#1044 (только in-house), Mike берёт VIP #1043 после текущей доставки, #1045 уходит в third-party (нет свободного водителя вовремя). Проверка: вкладка 2 на десктопе и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": полоса "With Hybrid Delivery" переделана в две колонки (Your drivers / Third-party) с въезжающими карточками заказов и причиной под каждым: #1043 VIP, #1045 0.9 mi, #1042+#1044 батч в одну поездку 3PD (бейдж Batched). Проверка: вкладка 2 на десктопе и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": на доску диспетчера добавлена заметка "Can I batch #1042 and #1044?"; схема чуть выше, элементы перераспределены по рядам. Проверка: вкладка 2 на десктопе и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": бейдж "~10 min lost per order" показывается постоянно (без мигания); на мобильном исправлены наложения Mike/Ana и нижняя полоса Hybrid Delivery (чипы 2 в ряд). Проверка: вкладка 2 на десктопе и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": доска диспетчера увеличена по высоте, элементы разнесены по рядам (правые привязаны к правому краю, на узких экранах скрыты мили), наложения убраны; бейдж "Minutes lost" заменён на "~10 min lost per order". Проверка: вкладка 2 на 924 px и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "Manual backup": схема ручного бэкапа переделана в "хаотичную доску" диспетчера: 4 заказа с вопросами "In-house?/3PD?", 2 водителя (busy, 12 min out), заметки "Call DoorDash for #1044?", "Remember: #1043 is VIP", запутанные пунктирные связи, лёгкое покачивание. Нижняя полоса "With Hybrid Delivery" показывает те же 4 заказа, автоматически распределённые (Your driver / Third-party). Проверка: вкладка 2 на десктопе и 390 px, prefers-reduced-motion.
- **Cartwheel Restaurants v2.dc.html**, The model: во вкладке "Manual backup" вместо кейса National pizza chain показывается кейс California Chicken Cafe (3 hrs dispatch saved daily, +24% on-time delivery, ссылка на calif-chicken-cafe-case-study). На двух других вкладках остаётся National pizza chain. Проверка: переключение вкладок, десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: в карточке кейса National pizza chain заменён текст на "Improved delivery speed and saved on third-party refunds with Hybrid Delivery.". Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: градиент плашки hero затемнён для читаемости белого текста: #006A58 → #008870 → #12B894. Проверить: 1440 px, контраст подзаголовка на правом (бирюзовом) краю.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "In-house delivery, no backup": добавлен пункт "Faster deliveries with more drivers available at peak". Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, The model, вкладка "In-house delivery, no backup": в описание добавлено предложение о риске для отношений с клиентами из-за задержанных или отменённых заказов. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: диагональная плашка hero (.rp-panel) перекрашена из тёмно-серого в фирменный градиент #00806A → #00997D → #2ADFB4 (бирюза справа). Проверить: 1440 px, читаемость белого текста на плашке.
- **Cartwheel Restaurants v2.dc.html**, блок The model: заголовок изменён на "Challenges that Hybrid Delivery solves". Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: кейс Portillo's в блоке Hybrid Delivery сужен до ширины схемы (max-width 906 px, по центру), фото-колонка уменьшена до 300 px, текстовая занимает остаток. Проверить: 1440 px, края карточки совпадают с краями плиток POS и Catering fleet.
- **Cartwheel Restaurants v2.dc.html**: кейс Portillo's в тёмной секции Hybrid Delivery переведён в стиль плиток флота: прозрачная тёмная подложка с hairline-обводкой (9 px), eyebrow и цифры в акцентном #2ADFB4, белый заголовок, приглушённое фото с затемнением к тексту, hover-подсветка обводки. Проверить: 1440 px, карточка не выбивается белым пятном из тёмного блока.
- **Cartwheel Hybrid Delivery.dc.html**, блок The model ("What changes when you go hybrid"): содержимое вкладок перенесено из Cartwheel Restaurants v2 (во вкладке "One third-party fleet" пункт про роботов, дроны и автономные авто и пунктирная плашка "Coming soon" под схемой); отдельная полоса "New delivery modes, same model." удалена. Проверка: переключить три вкладки на десктопе и на 390 px (Cartwheel Hybrid Delivery (Mobile).dc.html).
- **Cartwheel Restaurants v2.dc.html**, блок The model: полоса "New delivery modes, same model." удалена; вместо неё во вкладке "One third-party fleet" добавлен пункт списка про роботов, дроны и автономные авто и пунктирная плашка "Coming soon" под схемой. Проверка: вкладка 3 на десктопе и 390 px.
- **Cartwheel Catering.dc.html**: блок Third-party catering delivery перебалансирован в две колонки без нижнего ряда. Слева: заголовок, интро и 4 пункта (Local catering fleets, DoorDash Large Order Program, Uber Direct, 97% on-time вместо неподходящего для кейтеринга "$0.29 recovered per order"). Справа: карточка Matching fees ($30 / 10%) со списком включённого (комиссии DSP, 100% чаевых, 20 миль / 90 минут) и сноской. Отдельная карточка What’s included удалена. Проверка: десктоп и 390 px.
- **Cartwheel Catering.dc.html**: в блоке Third-party catering delivery тёмная карточка "Rate engine" с неверными тарифами DSP удалена, на её место (правая колонка) перенесена карточка "Matching fees". Карточка "What’s included" осталась строкой ниже на всю ширину. Проверка: десктоп и 390 px.
- **Cartwheel Catering.dc.html**: в блок Third-party catering delivery добавлен ряд из двух карточек: "Matching fees" (Dispatch fee: $30 flat до $300, 10% от subtotal свыше $300, оплата еженедельно) и "What’s included" (комиссии DSP покрываем, 100% чаевых водителям, 97% on-time, радиус 20 миль / NYC 5 миль, 90 минут lead time, дашборд). Проверка: десктоп и 390 px (карточки складываются в одну колонку).
- **Cartwheel Catering.dc.html**: в Proof of delivery фото KFC в видоискателе камеры заменено на упакованный кейтеринг Portillo's (uploads/proof-phones-portillos.png). Проверка: десктоп и 390 px.
- **Cartwheel Catering.dc.html**: изображение телефонов в Proof of delivery обрезано по содержимому (uploads/proof-phones-trim.png) и выровнено как в Order checklists (отступ сверху 16 px, по нижнему краю), размер экранов теперь соответствует левой карточке. Проверка: десктоп и 390 px.
- **Cartwheel Catering.dc.html**: в карточке Proof of delivery из изображения телефонов убран серый круг с картой (новый файл uploads/proof-phones-nobg.png, прозрачный фон). Фото KFC в видоискателе пока не заменено: ждём фото упакованной еды Portillo's. Проверка: десктоп и 390 px.
- **Cartwheel Catering.dc.html**: в карточках Order checklists и Proof of delivery фото заменены на скриншоты приложения водителя (чек-лист заказа; фото + подпись), вписаны через object-fit:contain на светло-бирюзовой подложке. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: ссылка "Explore Dispatch & Driver Apps" ведёт на https://trycartwheel.com/product/. Проверка: клик на десктопе и 390 px.
- **Cartwheel Restaurants v2.dc.html**, блок Catering: под списком добавлена ссылка "Read more about catering delivery →" на https://trycartwheel.com/catering/. Проверка: десктоп и 390 px.
- **Cartwheel Catering.dc.html**: в блоке Tracking четыре стат-карточки выстроены в ровную сетку 2×2 (`repeat(2,minmax(0,1fr))`) вместо auto-fit (3+1). Проверка: десктоп и 390 px.
## 2026-10-16
- **Cartwheel Restaurants v2.dc.html**: карточка кейса Jason's Deli перенесена из блока Catering на место кейса P.F. Chang's (P.F. Chang's удалён). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок "Why restaurants go hybrid / What changes when you go hybrid." (три строки Today/результат) заменён блоком "The model" со страницы Cartwheel Hybrid Delivery (три вкладки с анимированными сценариями + полоса "New delivery modes, same model."). Карточка кейса National pizza chain сохранена под блоком. Проверка: переключение вкладок, анимация первой вкладки, десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок In-house delivery возвращён на прежнее место (после ECONOMICS) со всем содержимым: 3 карточки, строка рейтинга 4.6, полоса кейса P.F. Chang's, ссылка Explore Dispatch & Driver Apps. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок In-house delivery ("Everything your own fleet needs.", с полосой кейса P.F. Chang's) удалён. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: кнопка "Read more about Hybrid Delivery" теперь ведёт на https://trycartwheel.com/product/. Проверка: клик по кнопке.
- **Cartwheel Restaurants v2.dc.html**: блок Google review booster удалён. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок ENTERPRISE перенесён перед блоком Full visibility on every order. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, блок The Hybrid Delivery engine: под схемой, над кнопкой Read more about Hybrid Delivery, добавлена полоса кейса Portillo's (65 locations launched, 10 weeks to full rollout) → trycartwheel.com/case-studies/portillos-case-study/. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: в блок Full visibility добавлена полоса кейса Potbelly (430 locations onboarded, 3 days to onboard 1000s of drivers) → trycartwheel.com/case-studies/potbelly-case-study/. Сразу после блока добавлен блок ENTERPRISE с главной (Homepage v5). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок CATERING перенесён на место перед блоком Full visibility on every order. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: полоса кейса Portillo's заменена кейсом National pizza chain (фото national-pizza-food.jpg, текстовое название вместо логотипа, $100K+ saved per year, 63→47 min delivery time) → trycartwheel.com/case-studies/national-pizza-chain-case-study/. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: после блока In-house delivery добавлен блок CATERING с главной (Homepage v5): "One place for every catering order.", 3 пункта с картинками, тикеры заказа, цитата Jason's Deli. Ссылка Book a demo заменена кнопкой "Learn more about catering delivery" → https://trycartwheel.com/catering/. Внизу полоса кейса Jason's Deli (242 locations, 4.7+ driver rating) → trycartwheel.com/case-studies/jasons-deli-case-study/. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, SOLUTIONS: порядок карточек: Pizza, Catering, Enterprise chains, Emerging brands. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок ECONOMICS перенесён сразу после блока Third-party delivery. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, hero: подзаголовок под H1 переписан: любые размеры сетей, типы ресторанов и режимы доставки на одной платформе, подтверждено кейсами (до 490% ROI). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, блок The Hybrid Delivery engine: под схемой добавлена кнопка "Read more about Hybrid Delivery" со стрелкой, ведёт на https://trycartwheel.com/delivery-types/. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок DISPATCH RULES ("Your rules, not a black box.", #rules) удалён вместе с его таймером. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, блок Third-party delivery: внизу добавлена полоса кейса Mandy's (тот же формат, что у P.F. Chang's: фото + логотип, 490% ROI, $2,300 saved per month, ссылка на trycartwheel.com/case-studies/mandys/). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: после блока SOLUTIONS добавлен блок ECONOMICS ("Delivery you control is delivery you can price.", 4 пункта с визуалами rate engine / bid board / refund matrix / extended radius) с Platform Overview, логика _initEcoVid/_initEcoPlate и стили синхронизированы. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: карточка кейса P.F. Chang's перенесена из блока Third-party delivery в блок In-house delivery (под три карточки, над ссылкой Explore Dispatch & Driver Apps). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: блок SOLUTIONS перенесён выше блока "Why restaurants go hybrid" (сразу после hero). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: после блока "What changes when you go hybrid" добавлен блок SOLUTIONS ("Built for how you run delivery.", 4 карточки) с главной (Cartwheel Homepage v5), данные карточек синхронизированы. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**: между блоками Dispatch rules и Third-party delivery добавлен блок "Full visibility on every order" ("One live map. Every driver.") со страницы Hybrid Delivery: чек-лист, анимированная живая карта, линза по курсору, карточки Device-based / Predictive AI tracking. На карте маршруты чередуются: in-house (зелёные) и third-party (белые). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, карточка Dispatch and driver tools: под списком добавлена строка "4.6 ★ average driver app rating, 1.5k ratings". Проверка: десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: удалён блок «What is Hybrid Delivery?» (#what, дорога с остановками). Ссылки на #what ведут на #model. Проверка: десктоп и Mobile 390 px, блок отсутствует, ошибок в консоли нет.
- **Cartwheel Hybrid Delivery.dc.html**: после первого экрана (hero + лента логотипов), перед «What is Hybrid Delivery?», добавлен блок «What changes when you go hybrid?» из Hybrid Model Explorer v2 Tabs (3 вкладки с анимациями + полоса «New delivery modes, same model.»). Классы и keyframes с префиксом `hxm-`, в тёмной теме блок остаётся светлым. Проверка: открыть страницу на десктопе и в Cartwheel Hybrid Delivery (Mobile).dc.html на 390 px, переключить вкладки.

## 2026-10-16
- **Cartwheel Catering.dc.html**, блок Real-time tracking: новый заголовок "Tracked orders, no fee, no hit to your score.", текст про сбор ezCater и рейтинг, список "How Cartwheel handles it" поднят выше; статистика уменьшена в компактные плашки; старый блок про ezCater compliance удалён. Проверить: десктоп и 390 px.
- **Cartwheel Catering.dc.html**: первый экран переделан по образцу Cartwheel Restaurants v2 (тёмная диагональная панель с текстом, размытая карта с линзой при наведении, фото + телефон с трекингом справа, белый trust-ряд). Тексты каталога сохранены, кнопка "See how it works" ведёт на #tracking. Проверить: десктоп и 390 px (панель превращается в блок со скошенным низом).


## 2026-10-16
- **Cartwheel Restaurants v2.dc.html**, hero: фоновая плашка под заголовком (.rp-panel, на мобильном фон .rp-text) перекрашена из зелёного градиента в фирменный тёмно-серый градиент #2C323A → #31373F → #21544C. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, блок правил (#rules): заменён на анимированный блок DISPATCH RULES с Platform Overview ("Your rules, not a black box.", 8 карточек с подсветкой по очереди каждые 3 с, hover выбирает карточку, SEO-копия списка). Цвета карточек на токенах, тёмная тема работает. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, Google review booster: фон картинки удалён, ширина уменьшена до 320 px. Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, Google review booster: картинка заменена на assets/review-screen-google.png (Lou Malnati's, приглашение оставить отзыв в Google). Проверка: десктоп и 390 px.
- **Cartwheel Restaurants v2.dc.html**, блок Google review booster: добавлен экран оценки заказа (assets/review-screen.png) справа; текст и две карточки со статистикой теперь в левой колонке. На мобильном телефон уходит под карточки. Проверка: десктоп и 390 px.

## 2026-10-15
- **Cartwheel Demo.dc.html**, Pricing: Puerto Rico $99 за локацию в месяц. Проверка: выбрать Puerto Rico, десктоп и 390 px.

## 2026-10-15
- **Cartwheel Demo.dc.html**, Pricing: убраны строки о количестве включённых доставок и цене за заказ сверх лимита, осталась цена за локацию. Проверка: десктоп и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html.

## 2026-10-15
- **Cartwheel Demo.dc.html**: цены в Pricing: Canada C$40, UK £23, Ireland €27, Australia A$45 за локацию в месяц; Puerto Rico и поля "XXX deliveries" / "X.XX per order" пока заглушки. Блок отзывов клиентов (и его SEO-копия) удалён. Проверка: переключить страны, десктоп и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html.

## 2026-10-15
- **Cartwheel Demo.dc.html**: H1 теперь "Put your brand on / every delivery." (убрано DoorDash). В блоке Your brand, protected два телефона (Without / With Cartwheel) заменены новой картинкой assets/brand-protected-phones.png (трекинг Jason's Deli + отзыв в Google). Проверка: десктоп и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html.

## 2026-10-15
- **Cartwheel Demo.dc.html**, hero: карточка Pricing перенесена под видео (ширина 960 px по центру). Страны в один ряд, слева цена и Sign up, справа список и примечание о провайдерах. Проверка: десктоп и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html.

## 2026-10-15
- **Cartwheel Demo.dc.html**, карточка Pricing: добавлена Канада первой в списке стран (флаг, заглушки C$XX / XXX / C$X.XX). Проверка: десктоп и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html.

## 2026-10-15
- **Cartwheel Demo.dc.html**: форма внизу убрана, вместо неё тёмная полоса с H2 и кнопкой Sign up (HubSpot). Кнопки в хедере и мобильном меню ведут на Sign up. В карточке Pricing ссылка Book a demo заменена примечанием "Available delivery providers vary by country.". Проверка: десктоп и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html.

## 2026-10-15
- **Cartwheel Demo.dc.html** пересобрана: страница только для международных рынков и только для third-party (по one-pager DDD). База: Cartwheel Third-Party Delivery. Hero: "Put your brand on every DoorDash delivery.", видео и карточка Pricing с переключателем стран (UK, Ireland, Australia, Puerto Rico, флаги); цены-заглушки £XX / €XX / A$XX / $XX, XXX доставок, X.XX сверх (заменить в _ctys). Блоки: Problem and solution, Your brand protected (Branded tracking), Full visibility, Refund management, Large order fulfillment, отзывы, FAQ, форма. Убраны Provider network, Bid board, Integrations, Proof, Hybrid, In-house, How it works. Проверка: десктоп, 924 px и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html, переключить страны.

## 2026-10-15
- **Cartwheel Demo.dc.html** (новая страница, замена trycartwheel.com/demo/): собрана на базе Cartwheel Restaurants. Hero: PRODUCT DEMO, "See Cartwheel in action.", trust-блок, видео YouTube (hn7KITkjmWo) и карточка Self-serve pricing ($99/мес за локацию, 400 доставок, $0.25 за заказ сверх, 3 пункта, Sign up на HubSpot-форму, ссылка Book a demo для 3+ локаций). Далее лента логотипов, Hybrid Delivery engine, правила, What changes, Third-party + кейсы Portillo's и P.F. Chang's, In-house, новый блок How it works (6 шагов), Google review booster, интеграции, отзывы, FAQ, форма. Мета: canonical /demo/, og-demo.png (нужно 1200×630). Сетка видео + цена: 2fr/1fr, на ≤900 px одна колонка (цена под видео на всю ширину). Проверка: десктоп, 924 px и 390 px через Cartwheel Demo (Mobile+Desktop).dc.html.

## 2026-10-13
- Cartwheel Restaurants v2: блок "Why restaurants go hybrid" перенесён перед схемой Hybrid Delivery (ENGINE), под H2 добавлен вводный абзац. Проверка: блок идёт сразу после hero, на 390 px текст в одну колонку.
## 2026-10-13
- **Cartwheel Catering.dc.html**: блок Free eBook уменьшен примерно вдвое: компактный прямоугольный баннер (текст и CTA слева, фото справа), убраны логотипы, контуры и карточка $388B. Проверка: на 390 px фото уходит под текст, высота 220 px.
- **Cartwheel Catering.dc.html**: блок Free eBook переделан в стиле hero страницы Catering eBook: текст, CTA и логотипы брендов слева, фото в органичной форме с контурами и карточкой $388B справа. Проверка: блок перед отзывами; на 390 px колонки складываются, фото под текстом.
- **Cartwheel Catering.dc.html**: блок "Hybrid Delivery for catering" перенесён выше схемы "The Hybrid Delivery engine". Проверка: блок идёт после Real-time tracking и перед схемой engine; проверено на 390 px.

## 2026-10-09

- **Cartwheel Restaurants v2.dc.html**, первый экран: убрана белая подложка под лентой логотипов «Brands who trust us», логотипы лежат прямо на фоне hero (карте). Проверить: десктоп и 390 px.

- **Cartwheel Restaurants v2.dc.html**, первый экран: на белый фон справа от зелёной панели добавлена фоновая карта из блока «One live map. Every driver.» (Platform Overview): размытая и светлая, при наведении курсора проявляется чёткой линзой. Проверить: десктоп (наведение справа); на 390 px карта остаётся статичным светлым фоном, линза отключена.

- **Cartwheel Restaurants v2.dc.html**, первый экран: eyebrow «Restaurants» и «On your terms.» в H1 теперь сплошные белые, градиент с текста убран. Проверить: десктоп и 390 px.

## 2026-10-08

- **Cartwheel Restaurants.dc.html и Cartwheel Catering.dc.html**, первый экран: блок доверия (Driver App 4.6, SOC 2, 97%) заменён на эталон с главной: иконки Google Play / App Store, звёзды и 1.5k, логотип SOC 2, иконка 97%, разделители. Выравнивание по левому краю под текст. Проверить: десктоп, на Catering в тёмном hero.

- **Cartwheel Catering.dc.html**, первый экран: чек удлинён снизу (+86 px), плашка «Delivered 11:41 / Photo proof saved» лежит поверх пустой нижней части чека, не перекрывая текст. Проверить: десктоп.

- **Cartwheel Catering.dc.html**, первый экран: убрана тёмная подложка под лентой логотипов, лента лежит прямо на фоне hero. Проверить: десктоп.

- **Cartwheel Catering.dc.html**, первый экран (чек): зубчатый нижний край чека развёрнут, вырезы теперь снизу. Проверить: десктоп.

- **Cartwheel Catering.dc.html**: первый экран заменён на вариант 2c (тёмный экран, чек заказа #4821 на $430, карточка «Delivered 11:41» с фото под чеком). Лента логотипов сохранена. Мобильную отдельно не правили. Проверить: десктоп.

- **Catering, первый экран: 3 варианта** в копиях страницы Cartwheel Catering -Hero 2a- / 2b- / 2c-.dc.html, сводка в Catering Hero Options.dc.html. 2a: доска заказов (Preparing / En route / Delivered). 2b: редакционная раскладка + путь заказа в 5 шагов. 2c: тёмный экран с чеком заказа $430 и фото-подтверждением. Тексты, кнопки (пилюли, градиентный контур) и trust-метрики взяты с текущей страницы. Оригинал не тронут. Проверить: Options, 1280 px и 390 px.

- **Cartwheel Restaurants.dc.html**, первый экран: телефон с трекингом опущен на 25 px и увеличен на 15% (ширина 31% → 35.65%). Проверить: десктоп.

- **Cartwheel Restaurants.dc.html**, первый экран: кнопки возвращены к стандарту сайта: пилюли (var(--cta-radius)), Book a demo с градиентной заливкой, See how it works с анимированным градиентным контуром (.cta-ghost), как на главной. Проверить: десктоп, hover обеих кнопок.

- **Cartwheel Restaurants.dc.html**, первый экран: фото и две карточки (заказ $430, маршрутизация) сдвинуты влево на 25 px, телефон остался на месте. Проверить: десктоп.

- **Cartwheel Restaurants.dc.html**: первый экран заменён на вариант 1a (светлый split: текст слева, справа фото кейтеринга, карточка заказа $430, карточка маршрутизации, телефон с трекингом). Лента логотипов сохранена. Мобильную версию пока не правили по просьбе. Проверить: десктоп 1280+ px.

- **Cartwheel Restaurants -Hero 1a-.dc.html** (копия страницы Restaurants): первый экран заменён на вариант 1a (split: текст + сцена заказа), лента логотипов сохранена, цвета через токены (поддержка тёмной темы). Оригинал Cartwheel Restaurants.dc.html не тронут. Проверить: Cartwheel Restaurants Hero 1a (Mobile+Desktop).dc.html, телефон 390 px и монитор.

- **Restaurants, первый экран: варианты редизайна** (Restaurants Hero Options.dc.html, файлы Restaurants Hero 1a / 1b.dc.html). 1a: светлый split, текст слева, справа сцена заказа (фото кейтеринга, карточка $430, карточка маршрутизации «Your driver / Third-party fleet», телефон с трекингом). 1b: тёмный в стиле блока Hybrid Delivery engine, карта города, узел Cartwheel и плашки провайдеров, полоса доверия снизу. Боевая страница не изменена. Проверить: обе версии в Options на 1280 px и 390 px (рамка телефона).

- **Новый хедер (из Cartwheel Homepage v5) перенесён на все актуальные страницы**: Cartwheel Homepage v4.dc.html, Cartwheel Hybrid Delivery.dc.html, Cartwheel Platform Overview.dc.html, Cartwheel Third-Party Delivery.dc.html, Cartwheel Delivery Types.dc.html, Cartwheel Restaurants.dc.html, Cartwheel Catering.dc.html, Cartwheel Integrations.dc.html, Cartwheel Toast.dc.html, Cartwheel Pizza eBook.dc.html, Cartwheel Catering eBook.dc.html, Cartwheel Newsroom.dc.html, Cartwheel Quote Library.dc.html, Cartwheel Blog Article.dc.html, Cartwheel Blog 1a.dc.html, Cartwheel Blog 1b.dc.html, Cartwheel Team.dc.html, Cartwheel Case Studies.dc.html, Cartwheel Case Study Butchery -No chrome-.dc.html, Cartwheel Case Study Butchery.dc.html, Cartwheel Case Study Calif Chicken -No chrome-.dc.html, Cartwheel Case Study Calif Chicken.dc.html, Cartwheel Case Study Flyboy -No chrome-.dc.html, Cartwheel Case Study Flyboy.dc.html, Cartwheel Case Study Illegal Petes -No chrome-.dc.html, Cartwheel Case Study Illegal Petes.dc.html, Cartwheel Case Study Jasons Deli -No chrome-.dc.html, Cartwheel Case Study Jasons Deli.dc.html, Cartwheel Case Study Mandys -No chrome-.dc.html, Cartwheel Case Study Mandys.dc.html, Cartwheel Case Study MrJims -No chrome-.dc.html, Cartwheel Case Study MrJims.dc.html, Cartwheel Case Study NJ Chicken -No chrome-.dc.html, Cartwheel Case Study NJ Chicken.dc.html, Cartwheel Case Study National Pizza -No chrome-.dc.html, Cartwheel Case Study National Pizza.dc.html, Cartwheel Case Study PF Changs -No chrome-.dc.html, Cartwheel Case Study PF Changs.dc.html, Cartwheel Case Study Portillos -No chrome-.dc.html, Cartwheel Case Study Portillos.dc.html, Cartwheel Case Study Potbelly -No chrome-.dc.html, Cartwheel Case Study Potbelly.dc.html, Cartwheel Case Study Wings Over -No chrome-.dc.html, Cartwheel Case Study Wings Over.dc.html. Полноширинные выпадающие панели Solution (карточки с картинками), Use Cases (5 карточек), Integrations (9 логотипов), Resources (Learn / Company / Latest); навигация слева у логотипа; CTA-пилюля; мобильное меню с аккордеонами. CTA и активный пункт сохранены для каждой страницы (eBook: Get the eBook → #download). CSS хедера вынесен в блок `/* v5 header (shared) */` в style каждой страницы; на страницах без логики хедера добавлен общий renderVals-обёртка (_pageVals). Старый хедер сохранён целиком в **Archive Old Header v4.dc.html** (копия главной v4 до переноса). Не тронуты: старые версии и экспорты (Homepage, v2, v3, v4 copy, Hero Centered, -export-, -standalone-, Platform Overview v2, Catering eBook v1, Blog canvas). Проверить: hover на каждом пункте меню на 3–4 страницах, 390 px гамбургер, тёмная тема.

## 2026-10-09
- **Cartwheel Restaurants v2.dc.html**: блок "Brands who trust us" поднят и центрирован по вертикали между нижним краем зелёной плашки и низом hero (паддинг-низ hero и спейсер над логотипами пересчитаны, плашка и контент на месте). Проверить: 1440 px, отступы над и под лентой логотипов визуально равны.
- **Cartwheel Restaurants v2.dc.html**: карточки "New catering order" и "Routed in 0.4 s" в hero плавно парят над фото (классы hv-float-a / hv-float-b, 5 и 6 с, со сдвигом фаз). Проверить: 1440 px, карточки двигаются вверх-вниз не синхронно.
- **Cartwheel Restaurants v2.dc.html**: у кнопки Book a demo в hero убран подъём при hover (вызывал дрожание на краю), остаётся только смена фона. Проверить: навести курсор на край кнопки, 1440 px.
- **Cartwheel Restaurants v2.dc.html**: градиентная плашка hero удлинена вправо (ширина 50% + 440 px), скос теперь проходит через середину фото. Проверить: 1440 px.
- **Cartwheel Restaurants v2.dc.html** (новый вариант hero): бирюзово-зелёная градиентная плашка с резким диагональным скосом выезжает слева при загрузке вместе с текстом, заходит под фото и карточки. Текст, кнопки и trust-блок в белом. На ≤900 px плашка становится фоном текстового блока со скосом снизу. Проверить: перезагрузить страницу (анимация въезда), ширина 1440 px. Мобильная версия пока не делается (по запросу), витрина удалена.

## 2026-10-06

- **Cartwheel Catering.dc.html**, блок Real-time tracking: «Up to 10%» в одну строку (nowrap), размер цифр в карточках уменьшен до clamp(30px,3vw,38px), чтобы все четыре цифры были одного размера и помещались. Проверить: десктоп и 390 px через Cartwheel Catering (Mobile+Desktop).dc.html.

- **Cartwheel Catering.dc.html**: добавлен отдельный блок Real-time tracking сразу после hero (id="tracking", на него ведёт кнопка See how it works): заголовок, 4 цифры (95% / 91% / 76% из опроса ezCater, до 10% повторных заказов), карточка соответствия стандарту трекинга ezCater (с 31.03.2026, Delivery API, ezDispatch), макет брендированной страницы трекинга Jason's Deli. Карточка Real-time tracking убрана из Catering delivery tools (осталось 3). В FAQ добавлен вопрос про требования ezCater (JSON-LD и _faqs синхронизированы). Проверить: десктоп и 390 px через Cartwheel Catering (Mobile+Desktop).dc.html.

- **Cartwheel Catering.dc.html** (новая страница, замена trycartwheel.com/catering/): собрана на базе Cartwheel Restaurants (хедер, футер, движок Hybrid Delivery, интеграции, отзывы, форма). Hero: CATERING, "Grow repeat catering orders." Разделы: Catering delivery tools (4 карточки с фото: Real-time tracking, Order checklists, Proof of delivery, Vehicle types), Hybrid Delivery for catering (3 карточки) + кейс Illegal Pete's, Third-party catering delivery (RMDA, DoorDash Large Order Program, Uber Direct, $0.29 refunds) + кейс P.F. Chang's, In-house (Scheduled deliveries вместо alcohol), Google review booster, интеграции, баннер eBook, отзывы, FAQ под кейтеринг (JSON-LD и _faqs синхронизированы), форма. Мета: canonical /catering/, og-catering.png (нужно изображение 1200×630). Проверить: десктоп и 390 px через Cartwheel Catering (Mobile+Desktop).dc.html.

- **Cartwheel Restaurants.dc.html** (новая страница, замена trycartwheel.com/restaurants/): собрана на базе Homepage v5 (хедер с мега-меню, активен Use Cases; футер, форма, отзывы). Разделы: hero (RESTAURANTS, "Grow your delivery business. On your terms."), Hybrid Delivery engine, 8 правил, "What changes when you go hybrid" (было/стало) + кейс Portillo's, Third-party delivery + кейс P.F. Chang's, In-house delivery (3 карточки инструментов), Google review booster (60% / 20%), интеграции (с Platform Overview), отзывы, FAQ под рестораны (JSON-LD синхронизирован), форма. How it works убран. Мета: canonical /restaurants/, og-restaurants.png (нужно изображение 1200×630). Проверить: десктоп и 390 px через Cartwheel Restaurants (Mobile+Desktop).dc.html.

## 2026-10-01

- **Cartwheel Homepage v4.dc.html**, форма Book a demo: кнопка отправки снова видна всегда, текст во всех ветках «Proceed». Проверить: десктоп и 390 px (Cartwheel Homepage v4 (Mobile).dc.html), пройти каждую ветку.

- **Cartwheel Homepage v4.dc.html**, форма Book a demo: кнопка отправки скрыта, пока не отвечены все вопросы ветки и не заполнены имя, email и телефон; затем появляется с итоговым текстом (Book a demo / Start self-onboarding / Start self sign-up / Talk to partnerships). Проверить: десктоп и 390 px, пройти каждую ветку.

- **Cartwheel Homepage v4.dc.html**, форма Book a demo: для Restaurant operator (US или ещё не выбран рынок) кнопка показывала «Apply to drive», теперь «Book a demo». Проверить: десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**, форма Book a demo: вопрос рынка переименован в «Where do your restaurants operate?». Проверить: десктоп и 390 px, выбрать Restaurant operator.

- **Cartwheel Homepage v4.dc.html**, форма Book a demo, ветка Restaurant operator: вместо вопросов о локациях и водителях теперь вопрос рынка с флагами: United States → Book a demo; Canada, UK, Ireland, Australia, Puerto Rico → вопрос о числе локаций (1–2 → Start self-onboarding, 3+ → Book a demo). Вопрос о водителях удалён, добавлена ошибка «Select where your restaurants operate.». Проверить: десктоп и 390 px (мобильная витрина грузит тот же файл), пройти обе ветки и отправить форму пустой.

## 2026-10-07

- **Cartwheel Newsroom.dc.html**, контакты Magdim: отступ от должности больше (+10 px, итого 24 px), между email и телефоном 2 px, чтобы читались одним блоком. Проверить: вкладка Cartwheel in media, десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: кнопка Media contact (press@) убрана из строки с табами, табы снова по центру под заголовком. Контакты остаются у Magdim и в нижнем блоке Got questions. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: под должностью Magdim Metshin добавлены контакты (из RCW Lunch and Learn): magdim@trycartwheel.com и 310.562.9225, ссылки mailto/tel с SVG-иконками. Проверить: вкладка Cartwheel in media, десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**, Media contact: плашка стала пилюлей (radius 999px, паддинг 6/22/6/6), подложка иконки конверта круглая. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: у Magdim Metshin текст био убран (остались фото, имя, должность); у Alex Vasilkin био остаётся. Проверить: вкладки Cartwheel in media и Thought leadership, десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: табы выровнены по левому краю, Media contact возвращён в строку с табами справа; под должностью Magdim снова текст био. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: выделенная публикация рядом с персоной занимает ширину двух карточек сетки ниже (обе сетки 3 колонки, карточка span 2). ≤1000 px: персона и карточка друг под другом, сетка в 2 колонки; ≤640 px одна колонка. Проверить: десктоп, ~900 px, 390 px.

- **Хедер на всех страницах** (Cartwheel Catering eBook.dc.html, Cartwheel Catering.dc.html, Cartwheel Homepage v4 Hero Centered.dc.html, Cartwheel Homepage v4 copy.dc.html, Cartwheel Homepage v4.dc.html, Cartwheel Homepage v5.dc.html, Cartwheel Hybrid Delivery.dc.html, Cartwheel Integrations.dc.html, Cartwheel Newsroom.dc.html, Cartwheel Pizza eBook.dc.html, Cartwheel Platform Overview.dc.html, Cartwheel Quote Library.dc.html, Cartwheel Restaurants.dc.html, Cartwheel Third-Party Delivery.dc.html): стрелки выпадающих меню (десктоп и мобильное меню) заменены с шрифтовой иконки Tabler на inline SVG (chevron-down, stroke 2, currentColor). **Cartwheel Newsroom.dc.html**: иконка конверта в Media contact тоже SVG. Проверить: hover на пунктах меню, мобильное меню 390 px, тёмная тема.

- **Cartwheel Newsroom.dc.html**: табы отцентрированы под заголовком; плашка Media contact перенесена под должность Magdim Metshin вместо текста био (на вкладке Cartwheel in media); у Alex Vasilkin текст био остаётся. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: вкладка All удалена; по умолчанию открывается Cartwheel in media (Magdim Metshin). Thought leadership и Press releases: Alex Vasilkin. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**, табы и Media contact: активный таб с градиентом как у Book a demo (сдвиг градиента при hover); неактивные табы и плашка Media contact с переливающимся градиентным контуром (как cta-ghost на главной), при hover подъём и тень как у карточек. При prefers-reduced-motion контур статичный. Проверить: десктоп и 390 px, тёмная тема.

- **Cartwheel Newsroom.dc.html**: хедер и футер заменены на эталонные с главной (Cartwheel Homepage v4): sticky-хедер с blur, выпадающие меню Solution / Use Cases / Integrations / Resources (Resources подсвечен), переключатель темы (тёмная тема работает), градиентная кнопка-пилюля Book a demo, мобильное меню с аккордеонами (≤1000 px); футер идентичен главной. Токены :root и dark-тема взяты с главной (кнопки стали пилюлями). Проверить: десктоп, hover на пунктах меню, тема; 390 px, гамбургер, футер в 2 колонки.

- **Cartwheel Newsroom.dc.html**: заголовок, подзаголовок, табы и Media contact объединены в одну верхнюю плашку (grad-teal); отдельная серая полоса с табами удалена. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: табы не переносят текст внутри пилюли (nowrap, flex:none), при нехватке места Media contact уходит на следующую строку; фото персоны рендерится только после загрузки данных (убрана ошибка загрузки картинки). Проверить: ~920 px и 390 px.

- **Cartwheel Newsroom.dc.html**: оставлен только вариант 1a; вариант 1b и бейдж «1a» удалены, канвас-рамка убрана, страница теперь обычная полноширинная, как остальные. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: hero (eyebrow, H1, lead) отцентрирован; плашка Media contact перенесена в полосу с табами справа (на мобильном уходит под табы); у полосы табов нижний паддинг равен верхнему. Проверить: десктоп и 390 px.

- **Cartwheel Newsroom.dc.html**: ряд «персона + выделенная публикация» теперь и на вкладке All. На All и Cartwheel in media: Magdim Metshin, Co-Founder and CMO (фото assets/magdim-metshin.png из проекта RCW Lunch and Learn; текст био временно как у Алекса). Thought leadership и Press releases: Alex Vasilkin. Проверить: все вкладки на десктопе и 390 px.

- **Cartwheel Newsroom.dc.html**, вкладки Cartwheel in media / Thought leadership / Press releases: вверху сетки новый ряд из двух колонок: слева блок Alex Vasilkin (фото 96–124 px, имя H2, должность, био; текст пока одинаковый для всех вкладок), справа выделенная карточка первой публикации вкладки (картинка 180–260 px, заголовок 19–22 px). Остальные публикации идут сеткой ниже. Вкладка All без изменений. Проверить: переключить вкладки на десктопе и на 390 px (колонки складываются в одну).

## 2026-10-05

- **eBook-страницы** (Cartwheel Catering eBook v1.dc.html, Cartwheel Catering eBook.dc.html, Cartwheel Pizza eBook.dc.html): кнопки снова пилюли, как на главной (`--cta-radius:999px` вместо 10px). Проверить: hero и CTA на десктопе и 390 px (мобильные витрины грузят те же файлы).

## 2026-09-30

- **Cartwheel Pizza eBook.dc.html**, hero, логотипы брендов: Mr Jim's заменён на Hungry Howie's (assets/logo-hungry-howies.png, max-height 40 px). Проверить: десктоп и 390 px (мобильная витрина подгружает тот же файл).

- **Cartwheel Homepage v5.dc.html**, мега-меню Resources: колонки Company и Learn поменяны местами (Company первая), пункт Refer a restaurant удалён (десктоп и мобильное меню). Проверить: десктоп, hover на Resources; 390 px, гамбургер, Resources.

- **Cartwheel Homepage v5.dc.html**, мега-меню Resources, колонка Company: у пункта About us восстановлено описание "Our story and the team behind Cartwheel". Проверить: десктоп, hover на Resources.

- **Cartwheel Homepage v5.dc.html**, хедер: убрана ссылка Log in (десктоп и мобильное меню). Проверить: десктоп и 390 px.

- **Cartwheel Homepage v5.dc.html**, меню Use Cases: панель на всю ширину, пять карточек Restaurants / Couriers / Pizza / Alcohol / Catering (иконка раздела 34 px, заголовок 17 px Ubuntu, описание 14 px) на teal-wash; hover: подъём, тень, заголовок зеленеет. Проверить: десктоп, hover на Use Cases; тёмная тема.

- **Cartwheel Homepage v5.dc.html**, меню Solution и Integrations: панели приведены к стилю Resources, раскрываются на всю ширину хедера (скругление снизу 16 px). Solution: три карточки на всю ширину, картинка 160 px; Delivery types теперь показывает карту map-bg + map-overlay. Integrations: 9 плашек в один ряд на teal-wash подложке. Проверить: десктоп ≥1000 px, hover на Solution и Integrations; тёмная тема.

- **Cartwheel Homepage v5.dc.html**, меню Solution: три карточки Product / Features / Delivery types (картинка с главного экрана соответствующей страницы сверху, заголовок 17 px Ubuntu, краткое описание 13.5 px); hover: подъём, тень, заголовок зеленеет. Картинки: hero-dev-laptop (Product), hero-dev-tablet (Features), map-third-party (Delivery types). Проверить: десктоп, hover на Solution; тёмная тема.

- **Cartwheel Homepage v5.dc.html**, меню Integrations: подписи под логотипами убраны (остались только у All integrations и слово Catering под Toast в плашке Toast Catering); логотипы выровнены визуально: Olo 32 px, PAR 30 px, Toast 20 px, Uber Direct 17 px. Проверить: десктоп, hover на Integrations.

- **Cartwheel Homepage v5.dc.html**, меню Integrations: вместо списка с иконками сетка 3×3 белых плашек на teal-wash подложке; первая плашка All integrations с шестерёнкой (Tabler settings), остальные восемь: реальные логотипы Olo, ChowNow, Toast, Toast Catering, ezCater, Uber Direct, MonkeyMedia, PAR с подписью; hover: подъём и тень, без обводки. Проверить: десктоп, hover на Integrations; тёмная тема (плашки остаются белыми).

- **Cartwheel Homepage v5.dc.html**, мега-меню Resources: три колонки равной ширины (repeat(3,1fr)); содержимое каждой колонки растянуто на общую высоту (пункты Learn и карточки Latest flex:1), чтобы визуально блоки занимали одинаковое место. Проверить: десктоп, hover на Resources.

- **Cartwheel Homepage v5.dc.html**, мега-меню Resources: карточки Latest компактнее (паддинг 14×18, заголовок 15 px, тег 12 px, отступ между карточками 10 px, не растягиваются по высоте); колонка Learn шире (сетка 1.5fr / 1fr / 1fr). Проверить: десктоп, hover на Resources.

- **Cartwheel Homepage v5.dc.html**, мега-меню Resources: eyebrow Learn / Company выровнены по левому краю с текстом колонок (убран сдвиг на 10 px); колонка Company: пункты растянуты на высоту колонки Learn, между ними тонкие разделители и паддинг 14 px; карточки Latest растянуты на ту же высоту. Проверить: десктоп, hover на Resources, три колонки одной высоты.

- **Cartwheel Homepage v5.dc.html** (только v5, на другие страницы не переносить до утверждения), хедер: навигация теперь стоит сразу после логотипа (слева), справа группа Log in + переключатель темы + Book a demo; порядок пунктов Solution / Use Cases / Integrations / Case studies / Resources. Resources раскрывается во всю ширину хедера (мега-меню): три колонки Learn (Blog с подпунктами Guides and playbooks, FAQs and explainers, Product updates; Ebooks), Company (Newsroom, About us, Refer a restaurant), Latest (две карточки на teal-wash с тегом, заголовком и датой; hover: подъём и зелёная рамка). В мобильном меню добавлены Log in и Book a demo внизу. Проверить: десктоп ≥1000 px, hover на Resources; 390 px, гамбургер, кнопки внизу списка; тёмная тема.

- **Cartwheel Homepage v5.dc.html**, **Cartwheel Homepage v5 (Mobile).dc.html**: созданы как копия v4 для нового дизайна меню. Меню меняется только в v5; на остальные страницы не переносится до утверждения. Проверить: обе версии открываются и идентичны v4 (десктоп и 390 px).

## 2026-09-29

- **Hybrid Model Explorer v2 Tabs.dc.html**, полоса под табами: убрана цепочка режимов с пунктирными связками и последовательной анимацией. Две группы: "In your network today" (Your drivers, Third-party fleets) и "Coming soon" (Autonomous EVs, Drones, Sidewalk robots, приглушены по цвету иконок, пунктирная рамка, один тег). Новые заголовок и текст, aria-label на группах. Проверить: десктоп, группы рядом; 390 px, группы стопкой.

- **Cartwheel Pizza eBook.dc.html**, блок "The ebook includes": веер листов заменён списком-оглавлением, как на Catering eBook (белая карточка, строки с точечной линией до иконки справа, появление строк по очереди, hover: заголовок зеленеет, иконка поворачивается). На ≤560 px точечная линия скрыта. Проверить: десктоп, все главы в списке; 390 px, текст не обрезается, строки ≥48 px.

## 2026-09-23

- **Cartwheel Integrations.dc.html**, карта в hero: исправлен съезд с дороги на северо-восточной улице (Olo/ezCater ехали по крышам). Эта улица и юго-восточная примыкают к кольцу в восточном узле, маршруты теперь въезжают и съезжают именно там. Проверить: машинки Olo, ezCater, Grubhub, Toast не пересекают кварталы; 390 px так же.
- **Cartwheel Integrations.dc.html**, hero: контурная кнопка "Browse integrations" переведена на стиль .cta-ghost (бегущий по контуру conic-градиент, ускоряется при наведении, стрелка сдвигается вправо), как "What's inside" на Pizza eBook и контурные кнопки главной. Проверить: десктоп и 390 px, контур анимируется на тёмном hero.
- **Cartwheel Integrations.dc.html**, секция "Connected in weeks, not quarters." (и остальные .feat-card на странице): при наведении контур карточки становится перетекающим зелёным conic-градиентом, как на Pizza eBook и главной; при prefers-reduced-motion статичный teal. Проверить: навести на карточки 1–4; 390 px (tap) так же.
- **Cartwheel Integrations.dc.html**, карта в hero: машинки перерисованы реалистичнее (вид сверху: кузов с бликом, лобовое и заднее стекло, крыша, зеркала, фары и стоп-сигналы, тень). В плашках над машинками вместо текста логотипы партнёров (DoorDash, Uber Eats, ezCater, Olo, Grubhub, Toast, ChowNow). Маршруты перестроены: машинки въезжают на кольцо, объезжают его против часовой стрелки дугой и съезжают на следующую дорогу, а не через центр. Проверить: десктоп и 390 px, машинки идут по дорогам и кольцу, логотипы читаются.
- **Cartwheel Integrations.dc.html**, hero: с карты убрана иконка ресторана (map-store-75.png), машинки и дороги без изменений. Проверить: десктоп и 390 px, на карте нет значка ресторана.
- **Cartwheel Catering eBook.dc.html**: страница переоформлена в стиле Pizza eBook, контент кейтеринга сохранён. Hero: фото курьера с коробками (assets/ebook-catering-photo.png) в морфящейся blob-маске с двумя контурами, кнопки как на главной (градиентный свайп + бегущий контур), логотипы без подложки, H1 с градиентом на второй строке, плашка $388B. "The ebook includes": веер листов-документов (загнутый угол, иконка сверху, номер снизу, симметричный наклон ±8°/16°/24°). "Catering delivery management, handled.": контур карточек с перетекающим градиентом. "About the author": карусель 4 статей с точками. Старая версия сохранена как Cartwheel Catering eBook v1.dc.html. Проверить: десктоп все секции; 390 px через Cartwheel Catering eBook (Mobile+Desktop).dc.html.
- **Cartwheel Pizza eBook.dc.html**, блок "The ebook includes": карточки оформлены как страницы документа. Пропорция листа 190×262, загнутый уголок справа сверху, скругление 4 px. Иконка сверху крупнее (56 px, глиф 30 px), заголовок по центру листа, номер страницы снизу по центру между тонкими штрихами. Мобильная версия: сетка 2 колонки, лист с aspect-ratio 1/1.3. Проверить: десктоп веер и подъём листа при наведении; 390 px, две колонки, текст не обрезается.
- **Cartwheel Pizza eBook.dc.html**, тот же блок: шаг веера увеличен 152 → 184 px (ширина веера 1310 px, масштабируется), чтобы центрированный текст листов не перекрывался соседним листом. Проверить: на десктопе все 7 заголовков читаются целиком; 390 px без изменений.
- **Cartwheel Pizza eBook.dc.html**, тот же блок: убрано дрожание при наведении на край листа. Hover-зона (.fan-step) теперь неподвижна, поднимается только внутренний лист (.fan-page). Проверить: медленно вести курсор по нижнему краю листа, дёрганья нет; 390 px, лёгкий подъём на 4 px.
- **Cartwheel Pizza eBook.dc.html**, тот же блок: тень листа больше не обрисовывает прямоугольник вокруг загнутого угла. Угол вырезан clip-path, тень через filter: drop-shadow повторяет реальный контур листа. Проверить: навести на лист, тень огибает срез угла; 390 px так же.
- **Cartwheel Pizza eBook.dc.html**, тот же блок: веер перестроен по дуге вокруг общей оси (transform-origin 1450 px ниже верха листа). Наклон строго симметричен (1↔7 ±24°, 2↔6 ±16°, 3↔5 ±8°, 4 прямо), шаг наклона увеличен 6.2° → 8°, нахлёст между всеми соседними листами одинаковый. Проверить: на десктопе веер симметричен; 390 px без изменений (сетка).
- **Cartwheel Pizza eBook.dc.html**, секция "Dough-livery management, handled.": контур карточек при наведении, перетекающий conic-градиент (как на главной, .ai-row/.cta-ghost), 2.2 с на оборот; при prefers-reduced-motion статичный teal. Проверить: навести на каждую из 4 карточек; 390 px (tap) так же.
- **Cartwheel Pizza eBook.dc.html**, секция "About the author": 4 публикации в прессе собраны в карусель. Одна крупная по центру, две уменьшенные слева и справа, четвёртая скрыта позади. Каждые 3.8 с слайды сдвигаются по кругу (центр уходит влево, правая увеличивается в центр); пауза при наведении, клик по боковой открывает её. Снизу 4 зелёные точки, активная растягивается в пилюлю и плавно перетекает. При prefers-reduced-motion автопрокрутки нет. Проверить: десктоп автосмена и клик по точкам; 390 px, сцена в колонку, точки 44 px по высоте.

## 2026-09-22

- **Cartwheel Pizza eBook.dc.html**: кнопки hero приведены к стилю главной: "Get your free eBook" с градиентным свипом при наведении, "What's inside" как контурная кнопка с бегущим по контуру бликом (класс .cta-ghost, conic-gradient + @property --ga) и стрелкой. Проверить: hero, hover обеих кнопок, десктоп и 390 px.

- **Все страницы проекта (*.dc.html)**: убран пульсирующий полукруглый градиент снизу секций (слои `var(--glow)` / `var(--glow-dark)` с анимацией `glowPulse`). Hero и тёмные CTA-секции теперь на сплошном фоне (`var(--page)`, `var(--dark)`, `var(--dark-2)`), keyframes удалены. Эффект больше не используется на сайте. Затронуто файлов: 52. Проверить: hero и CTA-блоки на любой странице, десктоп и 390 px.

- **Cartwheel Pizza eBook.dc.html**: правая часть hero заменена по референсу: фотография курьера с пиццей (`assets/ebook-pizza-photo.png`) обрезана SVG-маской в форме "капли" (присланные контуры Ellipse 396/397), вокруг два контура (тёмно-серый и зелёный). Маска и оба контура плавно перетекают из одной формы в другую и обратно (SMIL animate d, 11/14/17 с, ease-in-out), контуры отодвинуты от фото (смещение 30–40 px, масштаб 1.04–1.05) и движутся не в фазе; темп перетекания ускорен до 7/8/9 с; композиция увеличена на 30% (svg width:130% колонки, выходит за её границы; на ≤640 px 100%). Карточка книги убрана, плавающая плашка-факт "350 slices every second" оставлена поверх фотографии (правый нижний угол). Проверить: hero на десктопе и 390 px, плавное изменение формы.

- **Cartwheel Pizza eBook.dc.html** (новая страница) + витрина **Cartwheel Pizza eBook (Mobile+Desktop).dc.html**: лендинг eBook по пицце на основе Catering eBook с контентом с trycartwheel.com/pizza-delivery-ebook: hero "How to increase delivery revenue for your pizza restaurant. 5 main trends" (акцент на второй строке), лид про $55B и нехватку водителей, логотипы Lou Malnati's / Giordano's / Mr Jim's без подложек, карточка-факт "350 slices every second", 8 глав в веере, секция "Dough-livery management, handled.", автор, форма скачивания со ссылкой на docsend. Хедер и футер актуальные (как на главной и Integrations), активный пункт Resources, CTA "Get the eBook". Добавлены `assets/logo-mr-jims.png` и обложка `assets/ebook-pizza-devices.png` (устройства с обложкой "Top 5 trends affecting pizza delivery revenue in 2026"); подпись на карточке книги приведена к обложке. Проверить: десктоп и 390 px, веер глав, мобильное меню.

- **Cartwheel Integrations.dc.html** (мобильная витрина через iframe): hero переведён на тёмный фон в стиле hero страницы Hybrid Delivery (класс .hero-dark, те же переменные). Нарисованная SVG-карта заменена картой `assets/hybrid-hero-map-dark3.png` (opacity .35, сдвиг 3.5%) с иконкой ресторана Cartwheel на кольце. Машинки партнёров (DoorDash, Uber Eats, ezCater, olo, Grubhub, Toast, ChowNow) с подписями теперь едут по реальным дорогам этой карты (вертикальная магистраль, диагонали ЮЗ-СВ и СЗ-ЮВ через кольцо, петля ChowNow) на SVG animateMotion. Тексты hero без изменений. Проверить: hero на десктопе и 390 px, машинки лежат на дорогах.

- **Cartwheel Integrations.dc.html** (мобильная витрина (Mobile+Desktop) через iframe): блок "Book a demo" (#demo) и футер заменены на версии с главной / Platform Overview. Секция с картой-фоном (blur, подсветка под курсором, пиксельная сетка на canvas, курсор-метка Cartwheel), форма: выпадающий список "What best describes you?", вопросы о локациях и своих водителях по сценарию, подсказка трека, поля с классами .finp, кастомный чекбокс, кнопка с меняющейся подписью. Форма взята с главной (Homepage v4) один в один: без предвыбранных значений (Select one), вопрос об объёме заказов для курьеров, плашка "Cartwheel does not hire drivers", валидация с сообщениями об ошибках под полями. Тексты левой колонки (заголовок, три пункта) оставлены прежними. Футер скопирован из Platform Overview целиком. Проверить: выбор пунктов формы, hover по секции, десктоп и 390 px.

- **Cartwheel Integrations.dc.html** (мобильная витрина (Mobile+Desktop) открывает тот же файл через iframe): страница приведена к дизайну главной и Platform Overview, контент без изменений. Хедер заменён на актуальный: полупрозрачный фон с blur, выпадающие меню Solution / Use Cases / Integrations (с иконками) / Resources, Case Studies, активный пункт Integrations, градиентная CTA-кнопка, мобильное меню-аккордеон ≤1000 px (иконка гамбургера меняется на крестик). Кнопка hero "Book a meeting" с градиентным свипом, акцент H1 перенесён на отдельную строку. Отступы по дизайн-системе: секции clamp(60px,8vw,90px), заголовок-контент 36 px, сетка карточек gap 14 px, паддинг карточек 28 px с подъёмом при hover. Плитки Delivery partners без обводки, единая высота 104 px, как в остальных каталогах. Проверить: hover по пунктам меню, мобильное меню на 390 px, каталоги и hero на десктопе и 390 px.

- **Canvas-8.dc.html**: блок переименован в "What changes when you go hybrid?" (eyebrow THE MODEL, подзаголовок "Keep control where it matters. Add delivery capacity when you need it."). В каждую из трёх карточек добавлена небольшая анимированная иллюстрация на CSS (без JS): 1) заполнение пяти точек занятости водителей и переезд нового заказа в пилюлю "Third-party"; 2) три ручных шага (Notice / Find a driver / Assign it) схлопываются в строку "Backup covered automatically"; 3) от узла Orders к Fleet A дорисовываются линии к Fleet B и Fleet C, Fleet A притухает. Текст карточек переписан по схеме проблема → выгода → 2-3 пункта. Нижняя полоса заменена на "And the network keeps evolving." с цепочкой иконок your drivers → local fleets → robots → drones (мягкая подсветка по очереди). Все анимации зациклены, при prefers-reduced-motion выключаются и остаются в конечном состоянии. Проверить: десктоп и 390 px.

- **Canvas-8.dc.html**: блок "Who needs Hybrid Delivery" перестроен из интерактивной дороги в сегментацию. Полностью удалены дорога, SVG машинки и робота, пины, номера, перетаскивание, автопрокрутка и вся логика (файл теперь без JS). Вместо них три одинаковых по структуре карточки (лейбл / заголовок-симптом / цифра / две строки изменений): In-house delivery, no backup; Manual backup; One third-party fleet. Под ними полноширинная полоса "Whatever you run today" с пунктирной верхней границей, утопленным фоном и тремя линейными иконками (робот, дрон, автомобиль), не карточка. Подзаголовок заменён на "Three common setups, and what changes in each." Карточки складываются в одну колонку ≤860 px, полоса остаётся на всю ширину. Проверить: десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: правки блока "The engine" (четвёртая карточка Emerging fleets, смена подписи движка, строка "50+ fleets connected", переформулировки карточек) внесены и по просьбе полностью откачены. Секция вернулась к прежнему виду: три карточки в нижнем ряду, подпись "AI-powered dispatch with rule-based engine" с иконкой sparkles, "Your drivers + Cartwheel tools", "Over 50 trusted catering delivery providers". Проверить: секция The engine на десктопе (три сплошные линии с точками потока) и на 390 px.

## 2026-09-21

- **Cartwheel Homepage v4.dc.html**, **Cartwheel Platform Overview.dc.html** (и мобильные версии): звёзды рейтинга "4.6 / 1.5k / Top-Rated Driver App" заменены с иконок Tabler-шрифта (прогружались с задержкой) на инлайн SVG (4 полные + половинная; незакрашенная половина последней звезды серая #D6DAE0, закрашенная жёлтая). Проверить: звёзды видны сразу при загрузке, без мигания; на 390 px без изменений.
- **Cartwheel Pizza eBook.dc.html**, тот же блок: убрано дрожание при наведении на край листа. Hover-зона (.fan-step) теперь неподвижна, поднимается только внутренний лист (.fan-page). Проверить: медленно вести курсор по нижнему краю листа, дёрганья нет; 390 px, лёгкий подъём на 4 px.
- **Cartwheel Pizza eBook.dc.html**, тот же блок: тень листа больше не обрисовывает прямоугольник вокруг загнутого угла. Угол вырезан clip-path, тень через filter: drop-shadow повторяет реальный контур листа. Проверить: навести на лист, тень огибает срез угла; 390 px так же.
- **Cartwheel Pizza eBook.dc.html**, тот же блок: веер перестроен по дуге вокруг общей оси (transform-origin 1450 px ниже верха листа). Наклон строго симметричен (1↔7 ±24°, 2↔6 ±16°, 3↔5 ±8°, 4 прямо), шаг наклона увеличен 6.2° → 8°, нахлёст между всеми соседними листами одинаковый. Проверить: на десктопе веер симметричен; 390 px без изменений (сетка).
- **Cartwheel Pizza eBook.dc.html**, секция "Dough-livery management, handled.": контур карточек при наведении, перетекающий conic-градиент (как на главной, .ai-row/.cta-ghost), 2.2 с на оборот; при prefers-reduced-motion статичный teal. Проверить: навести на каждую из 4 карточек; 390 px (tap) так же.
- **Cartwheel Pizza eBook.dc.html**, секция "About the author": 4 публикации в прессе собраны в карусель. Одна крупная по центру, две уменьшенные слева и справа, четвёртая скрыта позади. Каждые 3.8 с слайды сдвигаются по кругу (центр уходит влево, правая увеличивается в центр); пауза при наведении, клик по боковой открывает её. Снизу 4 зелёные точки, активная растягивается в пилюлю и плавно перетекает. При prefers-reduced-motion автопрокрутки нет. Проверить: десктоп автосмена и клик по точкам; 390 px, сцена в колонку, точки 44 px по высоте.

## 2026-09-21

- **Canvas-8.dc.html** (+ пересобран `Hybrid Delivery Model Block.html`): из блока "The model" удалена остановка Catering delivery вместе с её панелью, остановки перераспределены по дороге (8 / 36 / 64 / 92 %), нумерация 1–4, иконка машинки для кейтеринга убрана, робот теперь на остановке 4. Подпись остановки 3 переименована с "Hybrid Delivery" на "One fleet". Проверить: четыре пина, клики и перетаскивание машинки, десктоп и 390 px.

- **Cartwheel Keep or Outsource.dc.html** (+ пересобран `Keep or Outsource.html`): четвёртая вкладка "As new modes arrive" добавлена и по просьбе откатена, блок вернулся к трём сценариям (Normal day / Friday rush / Lunch peak), пунктирный чип "New modes" остался в карточке OUTSOURCE. Попутно исправлен баг: атрибут key с меняющимся значением на одиночных абзацах приводил к накоплению подписей (три caption подряд), ключи сняты, у чипов ключ снова стабильный (id заказа), поэтому переезд между полосами снова анимируется. Тот же key снят с заголовка решения в **Cartwheel Order Router.dc.html**. Проверить: переключение сценариев несколько раз подряд, под лентой одна строка выборки и одна подпись; десктоп и 390 px.

- **Cartwheel Keep or Outsource.dc.html** (+ пересобран `Keep or Outsource.html`): в сценарии Lunch peak кейтеринг-заказ $ 480 остаётся в in-house ("High tip, your team handles setup"), чаевые и качество обслуживания остаются у своей команды. Занятость снижена до 5 / 8 ("Three drivers free"), чтобы число оставленных заказов совпадало с числом свободных водителей; подпись сценария переписана. Проверить: вкладка Lunch peak, десктоп и 390 px.

- **Cartwheel Keep or Outsource.dc.html** (+ пересобран `Keep or Outsource.html`): контент переписан под энтерпрайз. Штат водителей 5 → 8 (8 точек занятости), 6 постоянных заказов вместо 4, кейтеринг-заказ добавляется седьмым сверху в третьем сценарии. Добавлены плашка "Downtown location" в карточке KEEP, строка выборки под лентой ("Showing 6 of 24 orders in the last 15 minutes", меняется по сценарию) и строка под блоком "The same rules run across every location." Сценарии теперь объясняют три разные причины маршрутизации: экономика заказа (Normal day), занятость водителей (Friday rush), требования заказа (Lunch peak). Заказ $ 75 в пик уходит на проверенный флот, в in-house остаётся ближайший $ 19. Мобильная раскладка: при ≤760 px карточки KEEP/OUTSOURCE и лента складываются вместе, сдвиг чипа отключается, у каждого чипа бейдж Keep / Outsource. Проверить: три сценария, десктоп и 390 px.

- **Cartwheel Keep or Outsource.dc.html** (новый блок Hybrid Delivery, вариант "выгода для оператора"): "Keep the orders you want. Outsource the rest." Слева карточка KEEP (свои водители, шкала занятости ● ● ● ○ ○ и подпись "3 / 5 drivers busy"), справа OUTSOURCE (третьи стороны, чипы Local / National / Catering и пунктирный "New modes"). Ниже дорожки заказов: один и тот же заказ $ 42 · 1.8 mi переезжает из левой полосы в правую при переключении сценария. Сценарии: Normal day, Friday rush, Catering ($ 480, 25 meals, scheduled). Переехавшая карточка подсвечивается импульсом, под блоком меняется поясняющая строка. Автоперебор сценариев с паузой при наведении и остановкой после клика, стрелки клавиатуры, prefers-reduced-motion. ≤760 px карточки на всю ширину с бейджем Keep / Outsource. Проверить: переключение сценариев, десктоп и 390 px.

- **Cartwheel Order Router.dc.html** (новый вариант блока Hybrid Delivery): "Every order. The right delivery resource." Три полосы: карточки входящих заказов (значение, расстояние, время, метка назначенного ресурса), слой решения Cartwheel с пояснением из трёх пунктов, и сеть доставки из пяти ресурсов (свои водители, локальные партнёры, национальные флоты, кейтеринг-флоты, будущие технологии пунктиром). Кривые-связи считаются по реальным координатам элементов (ResizeObserver), активный путь подсвечен и анимирован. Выбор заказа мышью и клавиатурой, автоперебор с паузой при наведении и остановкой после клика, prefers-reduced-motion. ≤980 px раскладка складывается в одну колонку, связи скрываются. Проверить: клики по заказам, стрелки, десктоп и 390 px.

- **Cartwheel Hybrid Coverage Model.dc.html** (новый файл) + автономная сборка `Hybrid Delivery Coverage Model.html`: секция "The model / What is Hybrid Delivery?" в виде радиальной диаграммы покрытия: магазин в центре, внутренний диск (in-house, радиус меняется по времени суток 5.0 / 1.8 / 4.5 / 2.5 / 5.0 миль), внешнее поле третьих сторон 12 миль (15 при включённом "What is next"), кольца 2/5/8/12 миль, 14 точек заказов (размер, стоимость; цвет, исполнитель) и одна крупная точка на 9.1 мили с правилом-исключением (tether, подсказка по наведению и фокусу). Таблист на 5 состояний со стрелками клавиатуры, блок статистики (in-house, with fleets, кратность площади), подпись под диаграммой, тумблер "What is next", медленная авто-смена состояний с паузой при наведении и остановкой после взаимодействия, prefers-reduced-motion. Проверить: смена состояний, переход 9:00 → 12:30, тумблер, десктоп и 390 px.

- ~~**Cartwheel Delivery Types.dc.html**: добавлен блок "The model" ("What is Hybrid Delivery?") со страницы Cartwheel Hybrid Delivery: интерактивная дорога с 5 остановками, перетаскиваемая машинка (на 5-й остановке меняется на робота), панели с текстом и карточкой. Вставлен сразу после hero, перед секцией Hybrid delivery. Перенесены CSS `.rdw-*` и логика `_initRoad()` (вызов в componentDidMount, снятие resize-слушателя в componentWillUnmount). Мобильная витрина (Mobile+Desktop) открывает тот же файл через iframe. Проверить: секция #what, клики по пинам, перетаскивание машинки, стрелки клавиатуры; десктоп и 390 px.~~ (отменено: правка страницы не требовалась)

- **Canvas-8.dc.html**: собран отдельный файл только с блоком "The model" ("What is Hybrid Delivery?") из Cartwheel Hybrid Delivery: интерактивная дорога с 5 остановками, перетаскиваемая машинка, панели с текстом и карточкой. Проверить: клики по пинам, перетаскивание, стрелки клавиатуры; десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: фон секции "Brands who trust us" изменён с белого на фирменный светло-салатовый градиент `var(--grad-teal)`. Проверить: секция под hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**, карта hero: картинке карты задана простая прозрачность 65% (`opacity:.35`, без масок). Проверить: hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**, карта hero: сняты радиальная маска и `opacity:.45` с картинки карты, карта показывается как есть (opacity 1, собственный мягкий край файла сохранён). Смещение 3.5% вниз и маршруты без изменений. Проверить: hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: секция "Brands who trust us" переведена на светлый фон (`var(--page)`, класс `.logo-light` вместо `.logo-dark`): снят тёмный фон и отрицательный отступ от hero, убрана инверсия логотипов P.F. Chang's и Lou Malnati's, Potbelly показывается цветной версией. Лента и её анимация без изменений. Проверить: секция сразу под hero, десктоп и 390 px (Cartwheel Hybrid Delivery (Mobile).dc.html).

- **Cartwheel Hybrid Delivery.dc.html**, карта hero: пунктир вертикального маршрута (ресторан → точка сверху) не отображался: у строго вертикального пути нулевая ширина bbox, и фильтр `#hm-glow` с областью в процентах схлопывался. Фильтр переведён на `filterUnits="userSpaceOnUse"` (область -10…110). Проверить: второй зелёный маршрут вверх, пунктир виден между иконкой ресторана и точкой; десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**, карта hero: все шесть маршрутов перетрассированы по центру дорог новой карты (с учётом сдвига картинки на 3.5% вниз): плавные повороты заданы кривыми Q (съезды с кольца), конечные точки совмещены с перекрёстками карты; точки o1…o6 передвинуты на перекрёстки. Короткий маршрут вверх начинается от верха кольца (y 46.3), пунктир виден. Проверка наложением: screenshots/roads-check4.png. Проверить: hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**, карта hero: последовательность маршрута теперь: точка (при двух точках: первая, затем вторая через 420 мс) → рисуется пунктирный путь и едет водитель → пауза → затухание. Второй зелёный маршрут (вверх, к o2) удлинён от края иконки ресторана (`M50.4,47.5 L50.4,39.7`), чтобы пунктир был виден, а не скрывался под иконкой. Проверить: hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**, карта hero: порядок зелёных маршрутов изменён: первым (с подписью "Your driver") идёт маршрут через две точки (o1 → o3), третьим стал маршрут к одной точке (o1). Точки привязаны к маршрутам (`RD`): первый показывает обе точки, третий одну. Проверить: hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**, карта hero: (1) пунктирный контур зоны вынесен в отдельный polygon `.hm-zone-edge`, сплошной `#2ADFB4` без прозрачности, с мягким свечением (drop-shadow, в тёмном hero пульсирует 3 с); заливка зоны прежняя (22%). (2) Точки назначения (`.hm-o1…o6`, класс `.hm-dot`) больше не появляются заранее: точка появляется (pop) в момент старта своего маршрута, гаснет вместе с маршрутом и водителем; при prefers-reduced-motion показываются точки двух статичных маршрутов. Проверить: hero на десктопе и 390 px (Cartwheel Hybrid Delivery (Mobile).dc.html), последовательность точка → путь → водитель.

- **Cartwheel Hybrid Delivery.dc.html**: иконка ресторана на карте hero: заливка круга сделана на 25% прозрачной (новый файл `assets/map-store-75.png`, глиф и светлая обводка без изменений). Проверить: hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: карта в hero заменена на новый рендер `assets/hybrid-hero-map-dark3.png` (тот же размер 1254×1254 и та же дорожная сетка, зона и маршруты без изменений; у файла собственный прозрачный край, маска и opacity .45 сохранены). Проверить: hero на десктопе и 390 px (Cartwheel Hybrid Delivery (Mobile).dc.html), маршруты лежат на дорогах.

## 2026-09-18

- **Cartwheel Hybrid Delivery.dc.html**: секция "Their drivers" заменена блоком Third-party delivery с главной страницы (Cartwheel Homepage v4): двухколоночная раскладка, заголовок "Run third-party delivery without handing over the customer.", четыре пункта с иконками (dispatch on your terms, up to 27% below direct rates, your brand on every order, $0.29 recovered per order), тёмная карточка Rate engine с логотипами DoorDash Drive / Uber Direct / Grubhub и ценами. Eyebrow оставлен прежним: "Their drivers". Ссылка Explore Third-Party Delivery ведёт на trycartwheel.com/delivery-types/. Добавлено правило `.rate-grid` для ≤640 px. Мобильная витрина открывает тот же файл через iframe. Проверить: секция Their drivers, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: правка со шкалой отменена по просьбе, блок "What is Hybrid Delivery?" возвращён к прежнему виду (дорога с пинами без оси, заливки и нумерации уровней). Проверить: секция #what, десктоп и 390 px.

- ~~**Cartwheel Hybrid Delivery.dc.html**: блок "What is Hybrid Delivery?" (дорога с остановками) перестроен как шкала зрелости от "нет подстраховки" к полностью автоматизированной. Добавлены: подпись-ось над дорогой ("Least automated" / градиентная линия / "Most automated"), заливка пройденного участка дороги (`.rdw-fill`, ширина по проценту активной остановки, плавный переход), нумерация уровней 1–5 под пинами на десктопе, состояние `is-past` для пройденных пинов (полупрозрачный бирюзовый). Тексты остановок и панелей не менялись. Мобильная витрина Cartwheel Hybrid Delivery (Mobile).dc.html открывает тот же файл через iframe. Проверить: секция #what, клики по пинам и перетаскивание машинки, десктоп и 390 px.~~ (отменено)

- **Cartwheel Integrations.dc.html (+ export-pages/integrations.html, export-src-integrations.html), Homepage v4 copy / -export-**: плитка 1Mile в каталоге Third-party fleet заменена на JetGo (тёмная версия `assets/dp-jetgo.svg`, max-height 36 px), в старых копиях главной заменена белая версия в схеме. Мобильные витрины ((Mobile) / (Mobile+Desktop)) открывают те же файлы через iframe, отдельной правки не требуют. Проверить: каталог интеграций и схему Third-party fleet на десктопе и 390 px.

- **Homepage v4, Hybrid Delivery, Platform Overview, Hero Centered**: в блоке "Third-party fleet" логотип 1Mile заменён на JetGo (`assets/dp-jetgo-white.svg`, белая версия присланного SVG, пропорции 474×232, высота уменьшена на 20% относительно прежнего слота 1Mile, чтобы визуально совпадать с соседними логотипами). Проверить: секция с провайдерами, тёмная плашка, десктоп и 390 px.

## 2026-09-17

- **Cartwheel Homepage v4.dc.html**: точки-индикаторы карусели отзывов в тёмной теме сделаны светлее (неактивные `rgba(255,255,255,.42)` через переменную `--dot-idle` на `.t-dots`), в светлой теме без изменений. Проверить: секция отзывов, тёмная тема, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: пресс-лента в секции "In the press" на тёмной теме: все логотипы изданий, включая Food On Demand, переводятся в сплошной белый (`[data-theme="dark"] .press-marquee .logo-track img`, фильтр grayscale+invert, opacity .85); для Food On Demand в тёмной теме используется прозрачный PNG `assets/press/food-on-demand-dark.png` (без белой подложки), который показывается только в тёмной теме через классы `.lg-dk` / `.lg-lt`. В светлой теме без изменений. Проверить: переключить тему, лента под карточками, десктоп и 390 px (мобильная витрина Cartwheel Homepage v4 (Mobile).dc.html открывает тот же файл в iframe).

- **Cartwheel Homepage v4.dc.html**: в форме "Book a demo" добавлена валидация с сообщениями об ошибках. При отправке проверяются: выбран ли пункт "What best describes you?", число локаций, наличие своих водителей, объём заказов (для курьеров), имя, email (формат name@company.com), телефон (минимум 7 цифр). Ошибка подсвечивает поле красной рамкой (`data-invalid`) и выводит пояснение под ним (`.ferr`, иконка `ti-alert-circle`); сообщение исчезает при исправлении. Фокус переводится на первое поле с ошибкой. Проверить: секция #demo, нажать кнопку с пустой формой и с неверным email, десктоп и 390 px (мобильная витрина Cartwheel Homepage v4 (Mobile).dc.html открывает тот же файл в iframe).

- **Cartwheel Hybrid Delivery.dc.html**: логотипы в ленте "Brands who trust us" на тёмном фоне приведены к правилу главной страницы: остаются цветными, в белый переводятся только P.F. Chang's и Lou Malnati's; Potbelly цветной, как на главной. Проверить: лента под hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: иконка стороннего водителя в hero перекрашена: белый круг с тёмно-графитовыми фигурами (`assets/map-third-party-white.png`), свечение с неё снято; подпись Third party driver белая. Проверить: hero, второй этап анимации, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: анимация водителей в hero теперь строго по очереди: свой водитель прорисовывает путь, держится и исчезает, только затем появляется сторонний водитель; две иконки одновременно не видны (`_initHeroMap`: цикл из двух последовательных этапов DRAW 1.5 с, HOLD 1.1 с, FADE .45 с). Проверить: hero, полный цикл анимации на десктопе и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: hero, все пунктирные пути привязаны к осям дорог по трассировке пикселей карты: северо-западный белый путь идёт с изломом (44.7,50.7 → 39.2,48.2 → 21.7,27.8) по реальной дороге вдоль озера; юго-западные зелёные пути выходят из кольца в точке съезда (45.3,52.9 → 42.3,56.1 → 33.7,62.5, далее к 26.3,57.1); северо-восточный белый путь исправлен по углу дороги (конец 64.6,39.3), точка перенесена туда же. Проверить: hero на десктопе и 390 px, пути не пересекают кварталы.

- **Cartwheel Hybrid Delivery.dc.html**: hero, точки по эскизу пользователя: третья зелёная точка перенесена на перекрёсток слева (26.3%, 57.1%), путь к ней идёт по дорогам через юго-западный перекрёсток (44.7,50.7 → 33.7,62.5 → 26.3,57.1); северная зелёная точка на (50.4%, 39.7%). Белые точки без изменений. Проверить: hero на десктопе и 390 px, цикл анимации.

- **Cartwheel Hybrid Delivery.dc.html**: hero. Карта прозрачнее ещё на 20% (`opacity:.45`). Зона сдвинута на 25 px вниз и 15 px вправо (left 18.3%, top 36.7%). Белые точки (сторонние заказы) вынесены за пределы зоны дальше по дорогам: северо-восточная на (65.4%, 39.9%); зелёные внутри зоны: северная опущена до (50.4%, 40.5%), нижняя южная перенесена с вертикальной дороги на левую диагональ, середина пути к юго-западному перекрёстку (39.2%, 56.6%). Проверить: hero на десктопе и 390 px, зелёные точки внутри поля, белые снаружи, все на дорогах.

- **Cartwheel Hybrid Delivery.dc.html**: hero. 1) Все 6 точек заказов и пунктирные пути к ним пересчитаны под дороги новой карты: север и юг по вертикальной магистрали (x 50.4%), юго-запад по диагонали до перекрёстка (33.7%, 62.5%), северо-запад по диагонали вдоль озера до перекрёстка (21.7%, 27.8%), северо-восток и юго-восток по прямым дорогам от правого съезда кольца (63%, 42.5%) и (73%, 61.5%); иконка ресторана выровнена по центру кольца. 2) Зона доставки перекрашена в сплошной фирменный бирюзовый #00997D (без градиента): реализована inline-SVG полигоном (`svg.hm-zone`, заливка `fill-opacity=.22`, пунктирный контур 3 px `stroke-dasharray 14 8`), растровые файлы зоны удалены, под зоной тень (`drop-shadow`) для отделения от карты. 3) Карта с прозрачностью 35% (`opacity:.65`). 4) Тёмный фон продлён под ленту "Brands who trust us" (класс `.logo-dark`: фон #121B22, логотипы белые, Potbelly через `-white`), лента поднята на 25 px (`margin-top:-25px`, верхний паддинг 0). Проверить: hero + лента на десктопе и 390 px, полный цикл анимации маршрутов.

- **Cartwheel Hybrid Delivery.dc.html**: карта в hero заменена на новую тёмную (`assets/hybrid-hero-map-dark2.png`, непрозрачный фон). Края растворяются в фон секции через радиальную CSS-маску (`mask-image`), карта сдвинута вниз на 3.5% (кольцо под иконкой ресторана), снято внешнее свечение картинки. Проверить: hero на десктопе и 390 px, отсутствие видимой границы картинки.

- **Cartwheel Hybrid Delivery.dc.html**: зона доставки в hero перекрашена в брендовый градиент (#00997D → #2ADFB4, как на кнопках и иконках) вместо сплошного зелёного; заливка прозрачная (~18%), карта видна сквозь зону; пунктирный контур в том же градиенте, непрозрачный. Файл `assets/map-zone-dark.png` перегенерирован. Проверить: hero на десктопе и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: зона доставки в hero снова чёткая: снято размытие/свечение с `.hm-zone`, изображение заменено на `assets/map-zone-dark.png` (пунктирный контур мятный #2ADFB4, заливка почти прозрачная ~9%, чтобы читалась тёмная карта). Glow остался только на иконке магазина в центре, точках и водителях. Проверить: hero на десктопе и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: hero переведён на тёмный фон (класс `.hero-dark` с локальными токенами: фон #121B22, белый заголовок, мятный eyebrow/акценты). Карта заменена на тёмную неоновую (`assets/hybrid-hero-map-dark.png`, прозрачность 100%, сдвиг вниз 4% сохранён). Анимация маршрутов: пунктир тоньше (0.32 вместо 0.55, шаг .9/.8), линии с SVG-свечением (`filter#hm-glow`), свои маршруты мятные #2ADFB4, сторонние светлые #DCEBF1. Точки заказов, магазин и иконки водителей получили glow (drop-shadow) с пульсацией; тёмные точки сторонних заказов инвертированы в белые. Зона со свечением, прозрачность 75%. Задержки появления точек сохранены. Проверить: hero на десктопе и 390 px (через Hybrid Delivery (Mobile)), полный цикл анимации, prefers-reduced-motion.

- **Cartwheel Hybrid Delivery.dc.html**: точки заказов в hero привязаны к дорогам новой карты: нижняя точка (o3) опущена по вертикальной дороге до перекрёстка (49.9%, 66.8%), её путь идёт строго по дороге; левая нижняя точка (o1) перенесена на диагональную юго-западную дорогу внутри зелёной зоны (40.5%, 63.2%), путь идёт по диагонали от кольца. Пунктирный контур зоны получил бирюзовое свечение (`filter:drop-shadow` на `.hm-zone`). Проверить: hero после проигрывания анимации, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: карта в hero сдвинута вниз на 4% (`transform:translateY(4%)`), чтобы центральный круг дорог совпал с иконкой ресторана; прозрачность карты 50%. Проверить: hero на десктопе и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: базовая карта в hero заменена на новую (`assets/hybrid-hero-map-v2.png`, круглая карта с растворяющимися краями, река справа). Зона, метки и анимация маршрутов поверх карты без изменений. Проверить: hero на десктопе и 390 px, позиции точек store/orders относительно новой карты.

## 2026-09-16

- **Все страницы (Homepage v4, Hybrid Delivery, Platform Overview, Integrations + старые копии/экспорты)**: логотип Motoclick заменён на 1Mile. Новые файлы `assets/dp-1mile-white.png` (перекрашен в белый, для тёмной плашки Third-party fleet) и `assets/dp-1mile.png` (цветной, плитка Integrations), обрезаны по контенту, 480 px. В плашке Third-party fleet высота логотипа удвоена относительно Motoclick (квадратная пропорция). Проверить: Third-party fleet на десктопе и 390 px, плитка в каталоге Integrations.

- **Cartwheel Hybrid Delivery.dc.html**: лента "Brands who trust us" в тёмной теме приведена к главной: логотипы остаются цветными (снят общий белый фильтр и подмена на `-white` варианты); в белый переводятся только P.F. Chang's и Lou Malnati's, как на главной. Проверить: переключить тему, лента в hero, десктоп и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: hero-карта: подписи "Your driver" / "Third party driver" показываются только у первых двух иконок (первый цикл маршрутов); в следующих циклах иконки водителей идут без текста. После полного круга (3 цикла) подписи снова появляются на первом. Проверить: смотреть анимацию карты ~15 с на десктопе и 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: секция "The model" (интерактивная дорога): отключена автопрокрутка остановок, машинка больше не переезжает сама каждые 3 с. Осталась только ручная навигация: клик по пину/подписи, перетаскивание машинки, стрелки с клавиатуры; при появлении секции машинка один раз въезжает на остановку 1. Проверить: секция "What is Hybrid Delivery?" на десктопе и 390 px (витрины Desktop/Mobile используют тот же файл в iframe), подождать 10 с, содержимое не меняется само.

## 2026-09-16

- **Cartwheel Hybrid Delivery.dc.html**: секция "What is Hybrid Delivery?": заголовочный блок (eyebrow, H2, lead) отцентрован (`margin:0 auto;text-align:center`). Проверить: десктоп и 390 px.

## 2026-09-15

- **Cartwheel Homepage v4.dc.html**: секция Catering, мобильные картинки пунктов (`catMImgs`) приведены в точное соответствие десктопным hover-слоям: 1 Catering-specific features → `cat-dispatch-office.png`, 2 Right vehicle → `case-chicken.jpg`, 3 Specialized fleets → `cat-vehicle-rules-wide.jpg`, 4 ezCater → `cat-setup-serve-wide.jpg`. Проверить: картинки под пунктами на 390 px совпадают с десктопным hover.

- **Cartwheel Homepage v4.dc.html**: Hero: переход градиента в белый над логотипами сделан длиннее и мягче (вуаль уходит в белый с 45% высоты слоя, а не с 82%); с секции hero убран пульсирующий радиальный glow (`var(--glow)` + `glowPulse`), фон секции теперь ровный `var(--page)`. Проверить: низ hero и блок логотипов на десктопе и 390 px, ничего не "дышит".

- **Cartwheel Homepage v4.dc.html**: Hero: фоновый градиент (`.hero-amb`) больше не спускается под блок логотипов "Brands who trust us": слой ограничен по высоте (`height:calc(100% - 185px)`), у нижней кромки плавно уходит в белый (в тёмной теме в `#151B22`); блок `.logo-glass` получил фон страницы `var(--page)`. На ≤640 px (логотипы в 3 ряда) высота слоя `calc(100% - 350px)`. Логотипы теперь на чистом белом. Проверить: граница градиента над подписью BRANDS WHO TRUST US на десктопе и 390 px, обе темы.

- **Cartwheel Homepage v4.dc.html**: секция Catering: ссылка "Catering delivery software" заменена на "Book a demo" и ведёт на секцию формы `#demo`. Проверить: ссылка под списком пунктов Catering, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: hero: вторая кнопка "See the platform" переименована в "Ask AI about Cartwheel" и ведёт на секцию Ask AI (секции добавлен `id="ask-ai"`) вместо страницы Platform Overview. Проверить: клик по кнопке скроллит к блоку Ask AI, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: форма Book a demo: при выборе "Driver" поля Full name / Work email / Phone, чекбокс согласия, кнопка и юридическая сноска скрываются; вместо них показывается блок "Cartwheel does not hire drivers." с пояснением, что найм водителей ведут рестораны и курьерские компании. Проверить: выбрать Driver в селекте формы, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Catering: фото пунктов поменяны местами: "Specialized fleets" получил фото из "Catering-specific features" (`cat-vehicle-rules-wide.jpg`), а "Catering-specific features" фото из третьего пункта (`cat-dispatch-office.png`). Десктопные hover-слои и мобильный `catMImgs` (пункты 1 и 3) обновлены. Проверить: hover по пунктам 1 и 3 на десктопе, картинки пунктов на 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Team ("Built by people who ran delivery."): под текстом добавлена ссылка-кнопка "Read more about us" со стрелкой, ведёт на `https://trycartwheel.com/team/`. Проверить: ссылка под абзацем в секции Team, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: карточкам `.press-card` перенесена тень покоя карточек кейсов (`0 14px 34px -14px rgba(20,28,24,.35), 0 2px 6px rgba(20,28,24,.08)`) вместо лёгкой `var(--shadow)`; hover (подъём 3 px, зелёная `--shadow-lift`, teal-обводка) уже был идентичен. Проверить: карточки Press и кейсов выглядят одинаково в покое и при наведении, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: в карточке EBOOK к ссылке "Download the ebook" добавлена стрелка `ti-arrow-up-right`, как в остальных карточках. Проверить: четвёртая карточка Press, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: карточка INDUSTRY PRESS (Hungry Howie's, Food On Demand) перемещена на первое место, остальные три сдвинуты вправо в прежнем порядке. Проверить: порядок карточек Press, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: лента "As featured in": слоты больше не фиксированной ширины; каждому логотипу задан точный размер (по его пропорциям), слот обтягивает логотип, между логотипами одинаковый отступ 56 px. На ≤640 px сетка 3 колонки, логотипы вписываются по ширине ячейки. Проверить: равные промежутки между логотипами в ленте на десктопе; 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: удалена подпись "As featured in" над лентой логотипов (правка из визуального редактора). Проверить: под карточками Press сразу идёт лента логотипов, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: четвёртая карточка (EBOOK, "3 ways hybrid delivery helps pizza restaurants…") ведёт на `https://trycartwheel.com/catering-delivery-ebook/` вместо `/newsroom/`. Проверить: клик по четвёртой карточке Press, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: лента "As featured in": шаг между логотипами уменьшен на 25% (слот 170 px + 12 px gap → слот 150 px без gap, логотипы центрированы в слоте). Проверить: лента под карточками Press на десктопе; 390 px без изменений (сетка 3 колонки).

- **Cartwheel Homepage v4.dc.html**: лента "As featured in": логотипы Food On Demand и Restaurant Dive увеличены ещё на 25% (max-width 172 px, высота 55 px); горизонтальный паддинг слотов ленты обнулён, чтобы логотипы уместились в слот 170 px. Проверить: лента под карточками Press, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press, "As featured in": сетка логотипов заменена на бегущую ленту как у логотипов брендов в hero (те же классы `.logo-marquee`/`.logo-track`, CSS-анимация влево, маска по краям, пауза при hover, слоты 170×72 px, gap 12 px, дублированный трек `aria-hidden`). Логотипы Food On Demand и Restaurant Dive увеличены (max-width 138 px, высота 44 px). На ≤640 px и при prefers-reduced-motion: статичная сетка в 3 колонки без дубликатов. Проверить: лента движется под карточками Press на десктопе; на 390 px сетка 3 колонки.

- **Cartwheel Homepage v4.dc.html**: секция Team, второе фото коллажа (`ts-2`, `assets/team-expo-pizza.jpg`): заменено на новый снимок стенда Cartwheel (Hybrid Delivery, вид сверху). Исходник IMG_1440 сжат до 1600 px по ширине, JPEG q80. Проверить: коллаж Team на десктопе и 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Enterprise, плашка Proof at scale: цифры (SOC 2, 99.9%, 97%) приведены к стилю цен в плашке Rate engine: `Ubuntu 700, clamp(26px,2.6vw,34px), line-height 1, letter-spacing -.02em, #2ADFB4`; eyebrow "Proof at scale" получил тот же вид, что "Rate engine" (точка-индикатор, серо-белый цвет, tracking .11em). Проверить: обе тёмные плашки рядом на десктопе, цифры одного размера и шрифта; 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Enterprise (блок с флагами): добавлен Пуэрто-Рико. Текст стал "Operating in the United States, Puerto Rico, Canada, the United Kingdom, Ireland, and Australia.", в ряд флагов добавлена круглая иконка `assets/flag-pr-n.png` (240×240, нарисована в стиле остальных флагов). Проверить: ряд флагов и подпись в секции Enterprise на десктопе и 390 px (мобильная версия рендерит тот же файл через iframe).

- **Cartwheel Homepage v4.dc.html**: секция Catering: убраны цветные амбиентные пятна фона (`.hero-amb.cat-amb`), остался ровный фон `var(--grad-gray)`, как у секции Results (кейсы). Проверить: фон Catering совпадает с фоном кейсов на десктопе и 390 px.

- **Cartwheel Homepage v4.dc.html**: Hero: убрана анимация квадратных пикселей на фоне (canvas `.hero-px` удалён из разметки, вызов `_initHeroPixels()` снят; метод оставлен в коде неиспользуемым). Мягкие пятна `.hero-amb` и вуаль сохранены. Проверить: фон hero без пиксельной сетки на десктопе и 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Case studies (лента `.case-card`): hover приведён к эффекту карточек Press: подъём 3 px, тень `var(--shadow-lift)`, обводка teal, та же кривая `cubic-bezier(.22,.7,.2,1)`. На ≤640 px hover по-прежнему отключён. Проверить: наведение на карточки кейсов и Press на десктопе, одинаковый эффект.

- **Cartwheel Homepage v4.dc.html**: секция Team (коллаж `team-scatter`): второе фото (`ts-2`, команда у Portillo's) заменено на снимок стенда Cartwheel на Pizza Expo `assets/team-expo-pizza.jpg`. Исходник 4032×3024 (3.7 MB) сжат до 1600×1200 JPEG q80 (385 KB). Проверить: коллаж в секции Team на десктопе и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: четвёртая карточка (eBook) получила новое фото `assets/press-ebook-van.png` (курьер с коробками у белого фургона), кадрирование по центру. Проверить: четвёртая карточка в блоке Press, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: сетка логотипов "As featured in" растянута на всю ширину `.wrap` (как ряд из четырёх карточек выше), на десктопе (≥1000 px) фиксировано 9 колонок: 18 логотипов ложатся ровно в две строки. Ниже 1000 px auto-fit, на 390 px 3 колонки. Проверить: две строки логотипов на десктопе, 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: текстовая строка "As featured in Nation's Restaurant News · ..." заменена на подпись "As featured in" и сетку из 18 логотипов изданий (`assets/press/`: NRN, Business Insider, Fortune, AP, Food On Demand, Restaurant Dive, QSR, FSR, PMQ Pizza, Hospitality Technology, QSRweb, Fast Casual, Pizza Marketplace, Foodmarket, PR Newswire, Newswire, socaltech, dot.LA). Логотипы без подложки, слот 72 px с паддингом 14×16, единая высота 36 px, индивидуальный max-width для визуального выравнивания; SVG очищены от c2pa-метаданных; белый логотип Foodmarket затемнён через `filter:brightness(0)`. Сетка `repeat(auto-fit,minmax(min(112px,100%),1fr))`, gap 12 px: на 390 px укладывается в 3 колонки. Проверить: блок под карточками Press на десктопе и на 390 px (мобильная версия рендерит тот же файл через iframe).

- **Cartwheel Homepage v4.dc.html**: блок Press: карточка Hungry Howie's получила собственное фото (`assets/press-5.png`, вырезано из скриншота статьи, 16:10). Проверить: третья карточка в блоке Press, десктоп и 390 px.

- **Cartwheel Homepage v4.dc.html**: блок Press: третья карточка заменена на статью Food On Demand "Hungry Howie's opts for hybrid delivery amid tech revamp" (ссылка на foodondemand.com, обновлены заголовок и alt картинки). Проверить: клик по карточке открывает статью; блок на 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Third-party delivery: вводный абзац сокращён до одной фразы про интеграцию (Uber Direct, DoorDash Drive, Grubhub, Skipcart, 50+ local fleets); добавлен первый пункт списка "Dispatch on your terms" (иконка `ti-route`), стало четыре пункта с разделителями; формулировки пунктов 2 и 3 обновлены ("Up to 27% below direct rates", "...review prompt at the doorstep"). Проверить: секция на десктопе и на 390 px (мобильная версия рендерится из того же файла через iframe).

- **Cartwheel Homepage v4.dc.html**: секция Catering: картинки пунктов Catering-specific features и Specialized fleets поменяны местами (десктопные слои и мобильный `catMImgs`). Проверить: hover по этим двум пунктам на десктопе и картинки на 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Catering: картинки возвращены к исходному набору и порядку (база `case-chicken.jpg`, слои `cat-vehicle-rules-wide.jpg`, `cat-setup-serve-wide.jpg`, `cat-dispatch-office.png`; мобильный `catMImgs` как раньше). Порядок текстовых пунктов не менялся. Проверить: hover по пунктам на десктопе и картинки на 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Catering, картинки приведены в соответствие пунктам: Catering-specific features — `cat-dispatch-office.png` (больше не совпадает с Specialized fleets), The right vehicle — `cat-vehicle-rules-wide.jpg`, Specialized fleets — `cat-setup-serve-wide.jpg`, ezCater — `cat-ezcater-wide.jpg`. Обновлены и десктопные слои, и мобильный массив `catMImgs`. Проверить: hover по четырём пунктам на десктопе и картинки на 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Catering: пункт "Catering-specific features" переставлен на первое место в списке (`_catData`), вместе с ним переехало и его изображение. Остальные три пункта сохранили порядок. Проверить: секция Catering на десктопе и на 390 px, первая карточка, hover меняет картинку.

- **Cartwheel Homepage v4.dc.html**: секция Results на ≤640 px приведена к продуктовой странице: карточки кейсов ровные (без наклона), ширина `100vw - 92px`, скролл пальцем со snap, точки-индикаторы (`.cd-dot`), drag мышью, автопрокрутка ленты на мобильном выключена (`_initCaseDots`, guard в `_initMarquees`). Проверить: Results на 390 px, свайп и точки.
- **Cartwheel Homepage v4.dc.html**: карусель отзывов: добавлен `_initTSwipe` (свайп пальцем/мышью между слайдами), как на продуктовой. Проверить: отзывы на 390 px, свайп влево/вправо.
- **Cartwheel Homepage v4.dc.html**: коллаж фото команды (`.team-scatter`): на тач-устройствах и ≤640 px фотографии сразу стоят ровно в сетке (состояние hover применено по умолчанию). Проверить: секция с фото на 390 px.

- **Cartwheel Homepage v4.dc.html**: карточка Rate engine (Third-party delivery): сетка `repeat(3,minmax(0,1fr))` вместо `1fr` (не переполняется), на ≤640 px логотипы ужаты (max-width 100%, высота 22/16/13 px), цены 22 px, паддинг колонок 4 px. Проверить: карточка на 390 px, все три колонки внутри карточки.

- **Cartwheel Homepage v4.dc.html**: hero, блок доверия на ≤640 px: gap между тремя элементами увеличен с 14 до 28 px. Проверить: hero на 390 px.

- **Cartwheel Homepage v4.dc.html**: секция "The Hybrid Delivery engine" на мобильном (≤899 px) приведена к раскладке продуктовой страницы: 4 источника в один ряд, 3 fleet-плашки в ряд, линии от блоков к шестерне и от шестерни к плашкам рисуются и на мобильном (убран ранний return в `_ecdPaint`, восстановлены `@media(max-width:899px)` обёртки в CSS, удалены старые правила 2 колонки / 1 колонка). Текст не менялся. Проверить: секция engine на 390 px, линии присутствуют, десктоп без изменений.
- **Cartwheel Homepage v4.dc.html**: hero, блок доверия на ≤640 px: порядок SOC 2, Driver App, 97% (через `order`). Проверить: hero на 390 px.

- **Cartwheel Homepage v4.dc.html**: hero, блок доверия (Driver App / SOC 2 / 97%) на ≤640 px: вместо flex с `min-width:96px` теперь сетка из 3 равных колонок, gap 14 px, паддинг 8 px по краям, поэтому блок центрирован и отступы слева/справа и между элементами одинаковые. Проверить: hero на 390 px.

- **Cartwheel Homepage v4 (Mobile).dc.html** (новая): отдельная мобильная витрина главной v4, живой экран 390 px в рамке телефона через iframe на Cartwheel Homepage v4.dc.html (как у Hybrid Delivery (Mobile)). Ссылка на десктопную версию в шапке. Проверить: открыть страницу, прокрутить содержимое внутри рамки, гамбургер-меню, обе темы.

- **Cartwheel Homepage v4.dc.html**: те же правки логотипов в карусели цитат, что на продуктовой: на тёмной теме логотипы цветные (инвертируется только P.F. Chang's, Potbelly в белой версии), JackRabbit +50% (158×54), Hungry Howie's +30% (137×47). Проверить: карусель цитат в обеих темах.

- **Cartwheel Platform Overview.dc.html**: в карусели цитат логотип JackRabbit увеличен на 50% (158×54), Hungry Howie's на 30% (137×47). Проверить: слайды Hungry Howie's и JackRabbit в карусели цитат, 1440 и 390 px.

- **Cartwheel Platform Overview.dc.html**: логотипы брендов в карусели цитат на тёмной теме больше не перекрашиваются в белое целиком (заливка съедала картинку логотипа): показываются цветные, как в hero; в белый инвертируется только P.F. Chang's, для Potbelly подставляется белая версия. Проверить: карусель цитат в тёмной теме, все 8 слайдов.

- **Cartwheel Homepage v4.dc.html**: секция Catering: статичное радиальное пятно справа убрано, вместо него тот же движущийся амбиент-фон, что в hero (`.hero-amb`: перетекающий градиент 38 с + три размытых пятна), но без пиксельной сетки. Вуаль ровная по всей ширине (`.cat-amb .veil`), тёмная тема аналогично. Проверить: секция Catering в обеих темах, 1440 и 390 px, читаемость текста.

- **Cartwheel Homepage v4.dc.html**: секция Solutions приведена к стилю продуктовой страницы: фон `var(--surface)` вместо жёсткого светлого градиента, поэтому в тёмной теме секция корректно становится тёмной (карточки уже были одинаковыми). Проверить: секция Solutions в обеих темах, 1440 и 390 px.

- **Cartwheel Homepage v4.dc.html**: пиксельная сетка hero в тёмной теме ещё на 30% прозрачнее: opacity .6 → .42. Проверить: hero в тёмной теме.

- **Cartwheel Platform Overview.dc.html**: в схеме Hybrid Delivery engine логотипы плашки Third-party fleet (Uber Direct 32 px, DoorDash Drive 18 px, Grubhub 11 px) теперь применяются на всех ширинах, как на главной: правила вынесены из `@media(max-width:899px)`. Проверить: секция engine на 1440 и 390 px, логотипы не выходят за плашку.

- **Cartwheel Platform Overview.dc.html**: всплывающие плашки карточки Third-Party Delivery (Auto-refunds и список провайдеров) на тёмной теме остаются белыми, поэтому внутри них переопределены переменные `--head/--muted/--border/--teal-wash/--teal-d` на светлые значения: весь текст снова читается. Проверить: секция Platform, hover на карточке Third-Party Delivery в тёмной теме.

- **Cartwheel Homepage v4.dc.html**: тёмная тема hero: зелёный амбиент-градиент ослаблен на 40% (стопы #182A2A/#134A42/#0F5E52 → #172425/#143835/#12433D, ближе к слейту), размытые зелёные пятна и пиксельная сетка получили opacity .6. Проверить: hero в тёмной теме на 1440 и 390 px.

- **Cartwheel Homepage v4.dc.html**: логотипы брендов в hero ("Brands who trust us") на тёмной теме снова цветные, как на продуктовых страницах: удалено общее правило `[data-theme="dark"] .logo-track img{filter:grayscale…invert}`, которое перекрывало позднее правило. В белый инвертируются только тёмные одноцветные марки (P.F. Chang's, Lou Malnati's), Potbelly показывается в цветной версии. Проверить: hero в тёмной теме на 1440 и 390 px.

## 2026-09-14

- **Cartwheel Homepage v4.dc.html**: центр hero (зона заголовка и текста) защищён светлым эллипсом (радиальная вуаль 46×62%, белая до 96%), зелёный градиент и размытые пятна живут по краям и сверху/снизу; пятна ходят вдоль боковых сторон, пиксели в центре скрыты маской. Тёмная тема: аналогичный слейтовый эллипс. Проверить: hero на 1440 и 390 px в обеих темах, центр остаётся светлым.

- **Cartwheel Homepage v4.dc.html**: амбиент-фон hero теперь движется по вертикали: базовый градиент высотой 260% (белый → светлая бирюза #E6F6F6 → #BFEDE3 → насыщенная #7FD9C4 и обратно) медленно проезжает сверху вниз и назад за 38 с (`@keyframes ambFlow`), размытые пятна тоже ходят сверху вниз по разделу (ambA/ambB вниз, ambC вверх). Тёмная тема: слейт → тёмная зелень #0F5E52. Отключается при prefers-reduced-motion. Проверить: hero в обеих темах на 1440 и 390 px, плавность движения, читаемость H1 и логотипов брендов.

- **Cartwheel Homepage v4.dc.html**: пиксели амбиент-фона hero сделаны заметнее: режим наложения screen (осветляют фон, сильнее всего на тёмных участках градиента), светлота 88–98% на светлой теме и 34–60% на тёмной, непрозрачность повышена (.75 / .5). Проверить: hero на 1440 и 390 px в обеих темах, читаемость H1.

- **Cartwheel Homepage v4.dc.html**: в секции Catering фото пункта "Fully compatible with ezCater" (девушка за компьютером) заменено на `assets/cat-dispatch-office.png` с экраном Cartwheel, также в мобильной версии. Базовое фото карточки без изменений. Проверить: секция Catering, hover на четвёртом пункте; 390 px.

- **Cartwheel Homepage v4.dc.html**: карточка "Proof at scale" (секция Enterprise) приведена к стилю карточки Rate engine: добавлена бирюзовая сетка 44 px (rgba(42,223,180,.07)) и бирюзовое радиальное свечение в правом верхнем углу. Проверить: секция Enterprise, обе темы.

- **Cartwheel Homepage v4.dc.html**: в карточке "Proof at scale" надпись SOC 2 переведена в акцентный бирюзовый (#2ADFB4) и тот же размер, что 99.9% и 97% (без градиента, по правилу проекта). Проверить: секция Enterprise.

- **Cartwheel Homepage v4.dc.html**: фото панельной дискуссии (`.ts-1`) в коллаже "Built by operators" кадрировано выше (object-position center 20%), чтобы головы не обрезались сверху. Проверить: секция Built by operators, статичное и hover состояние.

- **Cartwheel Homepage v4.dc.html**: водяной знак логотипа в карточке "Proof at scale" сдвинут к правому краю (центр на правой границе, видна левая половина). Проверить: секция Enterprise.

- **Cartwheel Homepage v4.dc.html**: в амбиент-фон hero добавлена пиксельная сетка как в футере (canvas `.hero-px`, ячейки 22 px с зазором 3 px, ~34% заполнения). Пиксели разных зелёных оттенков (hue 150–192) медленно меняют цвет и яркость (синусоида, период ~30–80 с), центр под текстом приглушён радиальной маской; в тёмной теме тёмно-зелёные тона. Отключается при prefers-reduced-motion. Метод `_initHeroPixels`. Проверить: hero на 1440 и 390 px, обе темы, читаемость H1.

- **Cartwheel Homepage v4.dc.html**: водяной знак логотипа в карточке "Proof at scale" (секция Enterprise) отцентрован по карточке и увеличен на 25% (300 → 375 px). Проверить: секция Enterprise на 1440 и 390 px.

- **Cartwheel Homepage v4.dc.html**: секция Enterprise: левые плашки растягиваются по высоте (`flex:1 1 0`) до высоты карточки "Proof at scale", содержимое плашек центрировано по вертикали; у правой карточки уменьшены вертикальные паддинги (24 px, строки 14 px). Проверить: секция Enterprise на 1440 px, обе колонки одной высоты.

- **Cartwheel Homepage v4.dc.html**: секция Enterprise: заголовок с eyebrow и lead вынесен над двумя колонками и отцентрован (max-width 640). Карточка "Proof at scale" растянута по высоте левой колонки (align-items:stretch, строки SOC 2 / uptime / retention распределены равномерно, sticky снят). Проверить: секция Enterprise на 1440 px, высота правой карточки равна четырём плашкам слева; 390 px.

- **Cartwheel Homepage v4.dc.html**: в карточке "Proof at scale" (секция Enterprise) стопка флагов вынесена над строкой географии (колонка, gap 14 px). Проверить: секция Enterprise на 1440 и 390 px.

- **Cartwheel Homepage v4.dc.html**: добавлена секция "Ask AI about Cartwheel" из Platform Overview (мятный фон, интерактивная сетка точек на canvas, пять ссылок: ChatGPT, Google AI, Perplexity, Grok, Claude с готовым промптом), размещена сразу после секции Solutions. Перенесены CSS-правила `.ai-row` и инициализация `_initAiPx()`. Проверить: секция между Solutions и Hybrid Delivery engine на 1440 и 390 px, точки расходятся от курсора, обе темы.

- **Cartwheel Homepage v4.dc.html**: коллаж "Built by operators" на hover: фото занимают всю высоту контейнера (верхний ряд 50%, нижний 47%), кадрирование смещено вверх (object-position center 22%), чтобы головы не обрезались. Проверить: секция Built by operators, hover на коллаже.

- **Cartwheel Homepage v4.dc.html**: секция Enterprise перекомпонована в две колонки: слева eyebrow + H2 + короткий lead и четыре преимущества в виде горизонтальных карточек с иконкой-чипом (White-glove implementation, Scale in weeks, API-first, 24/7 support); справа тёмная карточка "Proof at scale" со строками SOC 2 / 99.9% uptime / 97% retention, стопкой флагов и строкой географии, водяной знак логотипа. На ≥1000 px колонки одной высоты: тёмная карточка растягивается на высоту левой колонки, строки статистики распределяются равномерно. На мобильном одна колонка. Проверить: секция Enterprise на 1440 и 390 px, hover карточек, обе темы.

- **Cartwheel Homepage v4.dc.html**: секция "The Hybrid Delivery engine" перенесена из Cartwheel Homepage v4 Hero Centered (разметка, функция отрисовки линий `_ecdPaint` с подсветкой активной карточки-источника и мобильные размеры логотипов; выравнивание логотипов Uber Direct, DoorDash Drive, Grubhub, Skipcart, Motoclick в карточке Third-party fleet). Проверить: секция engine на 1440 и 390 px, бегущие точки по линиям подсвечивают карточки POS / Online ordering и т.д.

- **Cartwheel Homepage v4.dc.html**: пробный амбиент-фон hero: слой `.hero-amb` (три размытых пятна: бирюза #2ADFB4, зелень #00997D, тёмная зелень #006B58) медленно дрейфуют (30/36/42 с), поверх белая вуаль для читаемости; в тёмной теме пятна в режиме screen на тёмной подложке. Отключается тумблером Tweaks "heroAmbient" (класс `amb-off`), при prefers-reduced-motion анимация выключена. Проверить: hero на 1440 и 390 px, обе темы, контраст текста и trust-строки.

- **Cartwheel Homepage v4.dc.html**: коллаж "Built by operators" синхронизирован с Hero Centered: добавлено четвёртое фото (команда на стенде FSTEC, `assets/team-expo-booth.jpg`, `.ts-4`, левый нижний угол), первое фото уменьшено, раскладка на hover обновлена (2x2). Проверить: секция Built by operators на 1440 и 390 px, hover выравнивает 4 фото в сетку.

- **Cartwheel Homepage v4.dc.html**: первый экран заменён на центрированный hero из Cartwheel Homepage v4 Hero Centered (надзаголовок Delivery management software, центрированные H1/lead/кнопки, лента брендов внутри hero). Фоновая карта, трекинг водителя и кастомный курсор убраны: фон hero только var(--glow)/var(--page). Мониторы и телефон из старого hero убраны. Сохранена строка доверия (4.6 Top-Rated Driver App / SOC 2 / 97% enterprise retention) под кнопками, по центру. Проверить: hero на 1440 и 390 px, светлая и тёмная тема, trust-строка по центру под кнопками, курсор обычный.

- **Cartwheel Homepage v4.dc.html**: блок IN THE PRESS перемещён выше секции отзывов ("What our clients say" / "Trusted by the brands that move the most food."), то есть теперь идёт сразу после Built by operators, перед скрытым SEO-блоком отзывов. Проверить: порядок секций Built by operators → IN THE PRESS → отзывы → FAQ → CTA.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: в коллаж "Built by operators" добавлено четвёртое фото: команда на стенде FSTEC (`assets/team-expo-booth.jpg`, `.ts-4`, левый нижний угол); первое фото уменьшено, чтобы освободить место; раскладка на hover обновлена. Проверить: секция Built by operators на 1440 и 390 px, hover выравнивает 4 фото в сетку.

- **Cartwheel Homepage v4.dc.html**: в карточках блока IN THE PRESS внутренний контейнер получил flex:1, чтобы ссылка "Read the article" прижималась к низу во всех карточках одинаково. Проверить: секция IN THE PRESS, ссылки на одной линии при заголовках разной длины.

- **Cartwheel Homepage v4.dc.html**: добавлен блок медиа-присутствия (IN THE PRESS, "Our operators write the playbook.") между FAQ и финальным CTA: 4 карточки со скриншотами статей (assets/press-1..4.png), ссылки на trycartwheel.com/newsroom/, строка "As featured in ..." и ссылка See the newsroom. Проверить: секция перед #demo на 1440 и 390 px, hover карточек, ссылки открываются в новой вкладке.

- **Cartwheel Homepage v4.dc.html**: форма Book a demo унаследована с Hybrid Delivery: не предзаполнена (whoIdx/locIdx/drvIdx/volIdx = null, селект "Select one", чекбокс снят), опция "Enquire about partnership", шаг "How many orders do you deliver per month?" для Courier company (1000+ → Book a demo, Under 1000 → Start self sign-up), зелёная плашка трека убрана. Проверить: секция #demo, выбрать Restaurant operator / 1-2 / Yes-No и Courier company, подпись кнопки меняется.

- **Cartwheel Homepage v4.dc.html**: блок Solutions заменён версией с Platform Overview: eyebrow SOLUTIONS, заголовок "Built for how you run delivery.", 4 карточки (Enterprise chains, Pizza restaurants, Catering operators, Emerging brands) с бенефитом через галочку и подписью про $1B order value. Фан-раскладка отключена, карточки плоские в сетке 4/2/1. Проверить: секция #solutions на 1440, 900 и 390 px.

- **Cartwheel Homepage v4.dc.html**: под кнопками hero добавлена та же полоса доверия, что на Platform Overview: рейтинг драйверского приложения 4.6 / 1.5k со ссылками на Google Play и App Store, SOC 2 Type I compliant, 97% enterprise retention. Добавлены мобильные правила (.hero-trust на ≤640 px: перенос в строки, разделители скрыты). Проверить: hero на 1440 и 390 px, ссылки на сторы открываются в новой вкладке.

- **Cartwheel Hybrid Delivery.dc.html**: тексты формы: опция "Become a partner" → "Enquire about partnership", вопрос "How many orders per month?" → "How many orders do you deliver per month?". Проверить: секция #demo, селект и шаг для Courier company.

- **Cartwheel Hybrid Delivery.dc.html**: для Courier company добавлен шаг "How many orders per month?" (1000 + → Book a demo, Under 1000 → Start self sign-up). Зелёная плашка с подсказкой трека из формы убрана. Проверить: секция #demo, выбрать Courier company, появляется вопрос про объём, подпись кнопки меняется по ответу.

- **Cartwheel Hybrid Delivery.dc.html**: форма Book a demo больше не предзаполнена: селект "What best describes you?" стартует с "Select one" (whoIdx/locIdx/drvIdx = null), радиокнопки локаций и водителей без выбора, чекбокс рассылки снят. Подсказка трека и подпись кнопки нейтральные до выбора. Проверить: секция #demo, ничего не выбрано, вопросы про локации и водителей появляются только после выбора ресторана / 1-2 локаций.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: оба набора маршрутов трекинга (светлая и тёмная карта) перепроложены внутри реально видимого окна hero (x 72–136 и 364–428, y 78–192 единиц viewBox), по улицам каждой карты. Fallback фильтра видимости больше не показывает все маршруты подряд: если ни один не помещается, берётся маршрут с минимальным выходом за край. Запас до края 40 px. Проверить: 1280, 1440, 1920 px, обе темы, каждый маршрут целиком в кадре.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: фильтр видимости маршрутов трекинга ужесточён: проверка выполняется при каждом выборе следующего маршрута (а не только при загрузке и ресайзе), запас до края hero увеличен до 64 px с учётом иконок 48–52 px, при нулевых размерах (до раскладки) проверка не отбрасывает маршруты. Проверить: светлая и тёмная тема на 1280 и 1440 px, ресторан, адрес и весь пунктир каждого маршрута целиком в кадре.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: в тёмной теме матовый слой hero сделан полностью непрозрачным (карта скрыта на 100%, проявляется только под едущим водителем и по клику). Проверить: тёмная тема, hero без анимации карта не видна.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: тёмная тема hero использует карту из секции Hybrid Delivery engine (`eng-map-bg.jpg`) как фон и как слой проявления. Для неё алгоритмически проложен отдельный набор из 8 маршрутов по улицам этой карты (`ROUTES_DARK`); набор переключается автоматически при смене темы (MutationObserver на data-theme), маршрут перезапускается. Проверить: переключить тему, в hero пунктир и водитель идут по улицам тёмной карты.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: в тёмной теме слои проявления карты в hero (под водителем и по клику) теперь используют тёмную карту `demo-map-bg.png` из секции Book a demo (правило перебивало inline-фон, добавлен `!important`). Проверить: тёмная тема, hero, под водителем проявляется тёмная карта.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: в тёмной теме логотипы брендов в hero теперь цветные, как на Platform Overview (удалены устаревшие правила, обесцвечивавшие все логотипы; в белый инвертируются только P.F. Chang's и Lou Malnati's). Проверить: переключить тему, лента логотипов.

- **Cartwheel Homepage v4 Hero Centered.dc.html, Cartwheel Platform Overview.dc.html**: Third-party fleet: отступ между DoorDash Drive и Grubhub увеличен на 5 px. Проверить: секция Hybrid Delivery engine.

- **Cartwheel Homepage v4 Hero Centered.dc.html, Cartwheel Platform Overview.dc.html**: у логотипа Uber Direct (Third-party fleet) внутренние поля картинки компенсированы отрицательными margin (-14/-12 px, в компактной раскладке -8/-7 px), чтобы визуальные отступы до DoorDash Drive и Grubhub были одинаковыми. Проверить: секция Hybrid Delivery engine.

- **Cartwheel Homepage v4 Hero Centered.dc.html, Cartwheel Platform Overview.dc.html**: плашка Third-party fleet: обе строки логотипов приведены к одинаковым отступам (gap 14 px, min-height 30 px), Skipcart и Motoclick увеличены на 25% (22.5 и 15 px). Проверить: секция Hybrid Delivery engine.

- **Cartwheel Homepage v4 Hero Centered.dc.html, Cartwheel Platform Overview.dc.html**: размеры логотипов Third-party fleet увеличены и в компактной раскладке (media-правила `.ecd-out img[alt=…]`): Uber Direct 16→32, DoorDash Drive 9→18, Grubhub 7.5→11 px. Проверить: секция Hybrid Delivery engine на ширине <900 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: схема линий под шестерёнкой (Hybrid Delivery engine) синхронизирована с Platform Overview: центральная карточка получает прямую линию, боковые линии расходятся строго по сторонам, добавлены разнесённые по времени прибытия точек и подсветка плашек-источников (`.ecd-hot`). Проверить: секция Hybrid Delivery engine на 1440 px, линии не пересекаются.
- **Cartwheel Platform Overview.dc.html**: логотипы в плашке "Third-party fleet" приведены к тем же размерам, что на главной (Uber Direct 56, DoorDash Drive 28, Grubhub 16 px).

- **Cartwheel Homepage v4 Hero Centered.dc.html**: в плашке "Third-party fleet" (Hybrid Delivery engine) логотипы выровнены по визуальному размеру: Uber Direct 28→56 px, DoorDash Drive 14→28 px, Grubhub 11→16 px. Проверить: секция Hybrid Delivery engine, правая плашка.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: отступ между кнопками hero и блоком брендов увеличен с 50 до 85 px (`.logo-glass{margin-top:85px}`). Проверить: hero на 1440 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: над заголовком hero добавлен eyebrow "Delivery management software" (13 px, uppercase, teal-d, как на Platform Overview). Проверить: hero на 1440 и 390 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: клик в любом месте hero проявляет карту вокруг курсора тем же пятном, что у водителя (радиус 230 px), пятно держится ~0.9 с и плавно гаснет. Проверить: кликнуть по hero, карта проявляется вокруг точки клика и исчезает.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: курсорная линза в hero отключена: наведение больше не проявляет карту, карту подсвечивает только едущая иконка водителя. Кастомный курсор-пин сохранён. Проверить: навести на hero, карта под курсором не проявляется.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: заголовок hero: "Deliver more." тёмно-серым (var(--head)), "Earn more." на отдельной строке бирюзовым градиентом. Проверить: hero на 1440 и 390 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: сценарий трекинга в hero переработан: сначала виден только ресторан, из него выезжает водитель, пунктир прорисовывается позади него по мере движения (SVG-маска по длине пути), иконка пункта назначения появляется, когда водитель проехал 80% пути, по прибытии водитель исчезает, затем всё гаснет и начинается следующий маршрут. Проверить: hero, полный цикл около 8 с.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: пунктир маршрутов в hero стал вдвое толще (2.2 px, штрих 4.8/7.2). Иконка пункта назначения приведена к стилю иконки ресторана: белый кружок 48 px с зелёной обводкой и зелёной иконкой. Проверить: hero на 1440 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: добавлен восьмой маршрут трекинга слева от текста по эскизу (вправо по верхней улице, вниз мимо пина, затем вправо к нижнему краю). Маршруты теперь фильтруются по видимости: при загрузке и ресайзе в цикл попадают только те, чей путь целиком (ресторан, адрес, линия, водитель) помещается в видимую область hero с запасом 34 px. Проверить: 1440 и 1200 px, все точки маршрута видны, ни один маршрут не обрезан краем.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: добавлен седьмой маршрут трекинга справа от текста hero по эскизу: от точки у кнопки вправо, затем вверх по улице к верхнему краю карты, по реальным улицам. Проверить: hero на 1440 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: иконки трекинга в hero увеличены вдвое (ресторан 48 px, адрес 42 px, водитель 52 px), радиус подсветки карты под водителем увеличен вдвое (230 px). Проверить: hero на 1440 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: нижние маршруты трекинга перестроены выше ленты логотипов (ограничение y ≤ 630 px исходной карты), трекинг и подсветка скрыты на ширине ≤1100 px, чтобы не пересекать центральную колонку текста. Проверить: 1440 px, ни один маршрут не заходит под логотипы; 1000 px, трекинга нет.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: добавлены ещё два маршрута трекинга в средней полосе карты, слева и справа от текста hero (рядом с пинами), также проложены по реальным улицам. Всего 6 маршрутов, чередуются слева и справа. Проверить: hero на 1440 px, новые маршруты не заходят на текст.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: маршруты трекинга в hero теперь построены алгоритмически по реальным улицам фоновой карты: белые дороги выделены из картинки (локальный максимум яркости), по сетке улиц проложен кратчайший путь, полилиния упрощена и вставлена как SVG-путь. Четыре отрезка в левой и правой частях карты, вне зоны заголовка, кнопок и логотипов. Проверить: hero, пунктир идёт ровно по белым улицам между кварталами.

## 2026-09-14

- **Cartwheel Homepage v4.dc.html**: в карточках блока IN THE PRESS внутренний контейнер получил flex:1, чтобы ссылка "Read the article" прижималась к низу во всех карточках одинаково. Проверить: секция IN THE PRESS, ссылки на одной линии при заголовках разной длины.

- **Cartwheel Homepage v4.dc.html**: добавлен блок медиа-присутствия (IN THE PRESS, "Our operators write the playbook.") между FAQ и финальным CTA: 4 карточки со скриншотами статей (assets/press-1..4.png), ссылки на trycartwheel.com/newsroom/, строка "As featured in ..." и ссылка See the newsroom. Проверить: секция перед #demo на 1440 и 390 px, hover карточек, ссылки открываются в новой вкладке.

- **Cartwheel Homepage v4.dc.html**: форма Book a demo унаследована с Hybrid Delivery: не предзаполнена (whoIdx/locIdx/drvIdx/volIdx = null, селект "Select one", чекбокс снят), опция "Enquire about partnership", шаг "How many orders do you deliver per month?" для Courier company (1000+ → Book a demo, Under 1000 → Start self sign-up), зелёная плашка трека убрана. Проверить: секция #demo, выбрать Restaurant operator / 1-2 / Yes-No и Courier company, подпись кнопки меняется.

- **Cartwheel Homepage v4.dc.html**: блок Solutions заменён версией с Platform Overview: eyebrow SOLUTIONS, заголовок "Built for how you run delivery.", 4 карточки (Enterprise chains, Pizza restaurants, Catering operators, Emerging brands) с бенефитом через галочку и подписью про $1B order value. Фан-раскладка отключена, карточки плоские в сетке 4/2/1. Проверить: секция #solutions на 1440, 900 и 390 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: маршруты трекинга перенесены на тонкие белые улицы по левому и правому краю карты, вне зоны заголовка, кнопок и ленты логотипов. Проверить: hero на 1440 и 390 px, пунктир и водитель не пересекают текст и логотипы.

## 2026-09-14

- **Cartwheel Homepage v4.dc.html**: в карточках блока IN THE PRESS внутренний контейнер получил flex:1, чтобы ссылка "Read the article" прижималась к низу во всех карточках одинаково. Проверить: секция IN THE PRESS, ссылки на одной линии при заголовках разной длины.

- **Cartwheel Homepage v4.dc.html**: добавлен блок медиа-присутствия (IN THE PRESS, "Our operators write the playbook.") между FAQ и финальным CTA: 4 карточки со скриншотами статей (assets/press-1..4.png), ссылки на trycartwheel.com/newsroom/, строка "As featured in ..." и ссылка See the newsroom. Проверить: секция перед #demo на 1440 и 390 px, hover карточек, ссылки открываются в новой вкладке.

- **Cartwheel Homepage v4.dc.html**: форма Book a demo унаследована с Hybrid Delivery: не предзаполнена (whoIdx/locIdx/drvIdx/volIdx = null, селект "Select one", чекбокс снят), опция "Enquire about partnership", шаг "How many orders do you deliver per month?" для Courier company (1000+ → Book a demo, Under 1000 → Start self sign-up), зелёная плашка трека убрана. Проверить: секция #demo, выбрать Restaurant operator / 1-2 / Yes-No и Courier company, подпись кнопки меняется.

- **Cartwheel Homepage v4.dc.html**: блок Solutions заменён версией с Platform Overview: eyebrow SOLUTIONS, заголовок "Built for how you run delivery.", 4 карточки (Enterprise chains, Pizza restaurants, Catering operators, Emerging brands) с бенефитом через галочку и подписью про $1B order value. Фан-раскладка отключена, карточки плоские в сетке 4/2/1. Проверить: секция #solutions на 1440, 900 и 390 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: маршрут трекинга в hero перерисован по реальным дорогам фоновой карты (4 отрезка по магистралям, расходящимся от круговой развязки). Линия стала тоньше (1.1 px, non-scaling-stroke, штрих 2.4/3.6), иконки магазина, адреса и водителя уменьшены (24/21/26 px), радиус подсветки карты под водителем 115 px. Проверить: hero, пунктир ложится на дороги карты, не перекрывает кварталы.

## 2026-09-13

- **Cartwheel Homepage v4 Hero Centered.dc.html**: в hero добавлен авто-трекинг доставки по фоновой карте. Каждые ~8 с появляется точка заказа (пин ресторана) и адрес получателя, между ними пунктиром рисуется маршрут (бегущие штрихи), затем по маршруту едет иконка водителя. Вокруг водителя карта проявляется как под курсором (радиус 150 px), позади него снова уходит под матовый слой. Отключено при prefers-reduced-motion. Проверить: открыть страницу, не двигая курсором, hero сам проигрывает цикл, карта видна только под водителем.

## 2026-09-12

- **Cartwheel Homepage v4 Hero Centered.dc.html**: лента логотипов в hero останавливается при наведении курсора (убрано правило, принудительно возвращавшее движение на hover; добавлен `focus-within`). Проверить: навести курсор на логотипы, движение замирает и возобновляется при уходе курсора.

## 2026-09-12

- **Cartwheel Homepage v4 Hero Centered.dc.html**: градиентная прозрачность матового слоя в hero отменена, возвращён исходный вариант (`rgba(255,255,255,.88)` + blur 6 px). Карта проявляется только под курсором (линза). Проверить: hero на 1440 и 390 px, наведение открывает карту.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: блок логотипов "Brands who trust us" перенесён внутрь hero-секции (один контейнер), поэтому карта-подложка и матовый слой продолжаются под логотипами, а линза при наведении открывает карту и в зоне логотипов. Сила проявления карты уменьшена на 25% (центр маски `rgba(0,0,0,.25)` вместо полностью прозрачного). Hero-секция стала колонкой (`flex-direction:column`); подзаголовок hero расширен (блок 880 px, `max-width:100%`), чтобы укладывался в три строки; отступ от подзаголовка до кнопок 50 px и от кнопок до блока логотипов 50 px; кнопки "Book a demo" и "See the platform" одинаковой ширины (`min-width:210px`, контент по центру). Проверить: провести курсором по заголовку и по логотипам, 1440 и 390 px.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: заголовок hero теперь в одну строку "Deliver more. Earn more." и целиком в зелёном градиенте (`#00997D → #2ADFB4`), без тёмной части. Проверить: 1440 и 390 px, на узком экране строка переносится естественно.
- **Cartwheel Homepage v4 Hero Centered.dc.html** (новый файл, копия Homepage v4): вариант hero без иллюстрации (монитор и телефон удалены). Заголовок, подзаголовок и кнопки отцентрованы, текстовый блок 760 px (подзаголовок до 56ch), кнопки по центру; высота секции уменьшена до `clamp(470px,54vh,620px)`. Карта-подложка, стеклянный слой и курсор-пин сохранены. Проверить: 1440 и 390 px, сравнить с Homepage v4.

## 2026-09-12

- **Cartwheel Homepage v4 Hero Centered.dc.html**: градиентная прозрачность матового слоя в hero отменена, возвращён исходный вариант (`rgba(255,255,255,.88)` + blur 6 px). Карта проявляется только под курсором (линза). Проверить: hero на 1440 и 390 px, наведение открывает карту.

- **Cartwheel Homepage v4 Hero Centered.dc.html**: блок логотипов "Brands who trust us" перенесён внутрь hero-секции (один контейнер), поэтому карта-подложка и матовый слой продолжаются под логотипами, а линза при наведении открывает карту и в зоне логотипов. Сила проявления карты уменьшена на 25% (центр маски `rgba(0,0,0,.25)` вместо полностью прозрачного). Hero-секция стала колонкой (`flex-direction:column`); подзаголовок hero расширен (блок 880 px, `max-width:100%`), чтобы укладывался в три строки; отступ от подзаголовка до кнопок 50 px и от кнопок до блока логотипов 50 px; кнопки "Book a demo" и "See the platform" одинаковой ширины (`min-width:210px`, контент по центру). Проверить: провести курсором по заголовку и по логотипам, 1440 и 390 px.

- **Cartwheel Platform Overview.dc.html**, секция Economics: автопереключение пунктов остановлено, пока курсор на списке. Наведение на пункт открывает его и замораживает зелёный индикатор прогресса (видео продолжает играть); отсчёт стартует заново только при уходе курсора со списка (`mouseleave` на `.eco-list`). Проверить: навести на "Up to 27% lower rates" и подержать 15 с, блок не должен переключиться; убрать курсор, переключение возобновляется.

## 2026-09-11

- **Cartwheel Homepage v4.dc.html**, секция "Third-party delivery": тёмная карточка "Bid board" (список провайдеров с ценами и ETA, стат 0.4s) заменена на карточку "Rate engine" с продуктовой страницы: логотипы DoorDash Drive / Uber Direct / Grubhub в три колонки с ценами from $6.99 / $5.10 / $6.99, шапка "50+ PROVIDERS", подпись про pre-negotiated rates; блик сдвинут вправо как в оригинале. Проверить: секция на 1440 и 390 px, логотипы белые на тёмном, три колонки не ломаются.

- **Cartwheel Homepage v4.dc.html**, форма в финальном CTA: добавлен шаг "объём заказов" и квалификационная логика. Ресторан: 3+ локаций → Book a demo; 1-2 локации без своих водителей → Start self-onboarding; 1-2 локации со своими водителями → вопрос "Orders per location, per month?" (1000+ → Book a call, меньше → Start self-onboarding). Courier company: вопрос "Orders per month?" (1000+ → Book a demo, меньше → Start self sign-up). Partner и Driver без изменений. Проверить: переключать "What best describes you?" и радиокнопки, следить за подписью трека и текстом кнопки.

- **Cartwheel Homepage v4.dc.html**: удалены секции Economics ("Delivery you control is delivery you can price") и Under the hood ("The technology doing the work") — они полностью дублируются на Platform Overview. Добавлена новая секция Third-Party Delivery сразу после Hybrid-движка и перед Catering: заголовок "Run third-party delivery without handing over the customer.", три пункта (27% lower rates / Your brand on every order / $0.29 recovered per order), визуал — bid board (ORD 4821, 4 провайдера, победитель подсвечен, 0.4s), ссылка на trycartwheel.com/delivery-types/. Блок Case studies заменён на версию с Platform Overview (заголовок "Operators see this in their numbers, not just their ops.", "fulfillment", ссылки на trycartwheel.com/case-studies/). Enterprise: "SOC 2 certified" → "SOC 2 Type I compliant" (в alt и в тексте), 99% client retention → 97% enterprise retention. Скрытый .seo-static заголовок "What operators say" заменён на `<p>Trusted by the brands that move the most food.</p>`. В `<head>` добавлены canonical, OG/Twitter теги и link rel=alternate на llms.txt; `<html lang="en">`. Проверить: порядок секций, бид-борд на 390 px (колонка), автопрокрутка кейсов.

- **Cartwheel Hybrid Delivery.dc.html**: добавлена секция "Your brand, protected" ("Your brand doesn't stop at the door.") полностью скопирована со страницы Third-Party Delivery, вставлена сразу после блока "Full visibility on every order" и перед Integrations. В helmet добавлены правила `.tp-brand-grid` / `.tp-phones`. Проверить: две колонки чеклистов с телефонами по центру на 1180 px, на ≤919 px телефоны уходят наверх и всё складывается в одну колонку (390 px).

- **Cartwheel Hybrid Delivery.dc.html**, дорога в "What is Hybrid Delivery": полотно растянуто на всю ширину экрана (`.rdw-road{left:calc(50% - 50vw);right:calc(50% - 50vw)}`, без скруглений, разметка до краёв); пины, подписи и машинка остаются в контейнере. Проверить: края дороги уходят за экран на 1440 и 390 px, горизонтального скролла нет (body overflow-x:clip).

- **Cartwheel Hybrid Delivery.dc.html**, секция "What is Hybrid Delivery" (дорога): пины над дорогой заменены на фирменный знак Cartwheel (inline SVG из `assets/cartwheel-mark.svg`); неактивный пин тёмно-серый с прозрачностью .42, активный зелёный. Машинка заменена на новую иконку грузовика (SVG из uploads/Ресурс 1): кузов зелёный, колёса и бамперы `#2C323A`, кружок с галочкой из иконки удалён (вырез под него залит зелёным, viewBox обрезан сверху). На борту кузова белая пиктограмма Tabler (`.rdw-ico`, центр кузова: left 32.8% / top 40.4% от бокса машинки; при разворотe right 32.8%), меняется по прибытии на остановку: 1 user-plus, 2 bolt, 3 git-merge, 4 package, 5 robot (на пятой остановке машинка сменяется на дрон из uploads/Ресурс 2: корпус и лучи зелёные, коробка тёмно-серая `#2C323A`, лёгкое парение 2.6 с; пиктограмма скрыта). Смена: старая уходит вверх с fade, новая приходит снизу (~0.2 с); при prefers-reduced-motion мгновенно. Размер машинки 80×54 (≤760 px: 66×45, иконка 18 px). При движении к пину слева (или драге влево) машинка разворачивается (`.rdw-car.is-rev`, scaleX(-1) на грузовике; пиктограмма на борту остаётся прямой и переезжает на кузов). Автопрокрутка: когда дорога в зоне видимости, машинка сама переезжает к следующему пину каждые 3 с (по кругу 1→5→1). Любое действие пользователя (клик по пину/подписи, стрелки, драг) выполняется и сбрасывает отсчёт на 3 с; при наведении курсора на блок дороги автопрокрутка приостанавливается, при уходе продолжается; вне вьюпорта и в скрытой вкладке останавливается; при prefers-reduced-motion выключена. Проверить: подождать без действий, кликнуть пин и убедиться, что следующий автопереход через 3 с; 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: анимация схемы поверх карты в hero переведена на JS (`_initHeroMap` в логике, запуск через 3.2 с после интро зона → магазин → 6 точек). Цикл из трёх фаз (по ~5.3 с): из магазина по дороге рисуется зелёный пунктир к зелёной точке, и вместе с ним по пути едет иконка Your driver (getPointAtLength), затем тёмный пунктир и Third party driver едут к тёмной точке; после паузы оба пути и водители гаснут, следующая фаза идёт к другой паре точек. Маршруты трассированы по центрам дорог карты полилиниями по увеличенным квадрантам (свои: SW, N, S; third party: NE, E, NW), точки заказов стоят на концах дорог; тёмные маршруты (NE, E, NW) выровнены по измеренным центрам дорог; тёмные точки вне зоны (NE 65.2/39.3, E 73.1/58.6, NW 26.3/33.3). Магазин выровнен по центру развязки (top 44.8%). Пути: SVG viewBox 0 0 100 100, PNG-пунктиры не используются. Анимация останавливается вне вьюпорта (IntersectionObserver); при prefers-reduced-motion статичная фаза 1. Проверить: перезагрузить, смотреть ~20 с; 390 px.

- **Cartwheel Hybrid Delivery.dc.html**: в hero справа удалена карточка "Incoming orders" (список заказов, плашка "Your rules, one engine", строка "1B+ rule combinations"). Вместо неё вставлена картинка карты `assets/hybrid-hero-map.png` (width:120%, max-width 672px, увеличена на 20%). Проверить: hero на 1180+ px и 390 px, картинка не выходит за колонку.

## 2026-09-10

- Cartwheel Hybrid Delivery.dc.html: секция "Everything your own fleet needs" — eyebrow YOUR FLEET, добавлен segmented-переключатель For drivers / For dispatchers (радиокнопки, доступны с клавиатуры), два чек-листа + свои стат-строки кроссфейдом, скриншот в телефоне меняется вместе с состоянием (driver app / dispatcher map). Высота зафиксирована сеткой (оба состояния в одной ячейке). Проверить: переключение мышью и Tab+стрелками, 390 px и десктоп.

## 2026-09-10

- Cartwheel Hybrid Delivery.dc.html: секция "Hybrid for catering" — иконка первой карточки заменена на users-plus; под карточками добавлена ссылка "Learn more about catering delivery" на https://trycartwheel.com/catering/. Проверить: клик по ссылке, 390 px и десктоп.

## 2026-09-10

- Cartwheel Hybrid Delivery.dc.html: секция "Hybrid for catering" — переписаны три карточки (Cover driver shortages / Keep the best orders in-house / Tap specialized catering fleets), иконки заменены на релевантные (user-off, star, truck-delivery). Проверить: блок "Why catering operators run hybrid", 390 px и десктоп.

# Cartwheel: журнал правок для разработчика

Каждая запись: дата, страница, что изменено, как проверить. Новые записи добавлять сверху.
Файл-источник правок: `Cartwheel Platform Overview.dc.html` (мобильная витрина: `Cartwheel Platform Overview (Mobile+Desktop).dc.html`).

---

## 2026-09-10

### Hybrid Delivery: TM в hero-eyebrow
- Файл: `Cartwheel Hybrid Delivery.dc.html`, hero eyebrow «HYBRID DELIVERY».
- Добавлен значок TM (`<sup>`, 0.62em, выравнивание по верху).
- Как проверить: hero, надпись над H1.

### Hybrid Delivery: иконка в hero-строке доверия
- Файл: `Cartwheel Hybrid Delivery.dc.html`, hero, пункт «$1 Billion in food delivered».
- Иконка `ti-adjustments-alt` заменена на релевантную `ti-truck-delivery`.
- Как проверить: hero, первый пункт строки доверия.

### Hybrid Delivery: блок «What is Hybrid Delivery?» переделан в интерактивную дорогу
- Файл: `Cartwheel Hybrid Delivery.dc.html`, секция `#what`.
- Eyebrow THE MODEL, заголовок без изменений, вместо двух абзацев один вводный абзац (max 60ch) и интерактивный селектор.
- Селектор: горизонтальная дорога с пунктирной осевой, 5 пинов с подписями, машинка-фургон в брендовом зелёном. Машинку можно тащить мышью и пальцем (снап к ближайшей остановке), клик по пину или подписи, стрелки клавиатуры. При въезде секции в экран машинка приезжает слева на остановку 1. На остановке 5 фургон меняется на робота, у пина бейдж Soon.
- Под дорогой две колонки с кроссфейдом: текст слева, белая карточка со uppercase-лейблом и мятной выделенной строкой справа.
- Как проверить: открыть страницу, доскроллить до «What is Hybrid Delivery?», перетащить машинку, кликнуть пины, проверить стрелки. На 390 px: подписи скрыты, под дорогой номера 1–5 и подпись активной остановки, контент в одну колонку.

---

## 2026-09-04

### Third-Party Delivery: визуал в блоке Provider network
- Файл: `Cartwheel Third-Party Delivery.dc.html`.
- Визуал справа заменён на карточку «Rate engine» из блока Economics продуктовой страницы: логотипы DoorDash Drive / Uber Direct / Grubhub со ставками from $6.99 / $5.10 / $6.99 и подписью про пре-негошиэйтед тарифы.
- Проверить: карточка тёмная, логотипы белые, на 390 px три колонки помещаются без переполнения.

### Third-Party Delivery: блоки Integrations / Case studies / Reviews с продуктовой страницы
- Файл: `Cartwheel Third-Party Delivery.dc.html`.
- Секция Integrations заменена на версию с Platform Overview (заголовок «Plug into what you already run.», ряды POS / Delivery providers / Catering, Onosys и Stream вместо ChowNow, «50+ catering DSPs», Monkey Media в Catering).
- Секция Proof (кейсы) заменена на ленту `case-marquee` с продуктовой страницы: 12 карточек кейсов с фото, тегами и логотипами партнёров, скрытый SEO-список `case-figures`, ссылка «See all case studies». Прежний ряд логотипов и три стат-карточки удалены. Добавлены стили `.case-dots` / `.cd-dot` и метод `_initCaseDots()` (точки и drag-скролл на ≤640 px), вызов добавлен в `componentDidMount`.
- Заголовок секции отзывов и SEO-блока приведён к продуктовому: «Trusted by the brands that move the most food.».
- Проверить: секция кейсов едет непрерывной лентой влево, hover приподнимает карточку; на 390 px лента листается свайпом с точками; блок Integrations совпадает с Platform Overview.

### Third-Party Delivery: синхронизация с продуктовой страницей
- Файл: `Cartwheel Third-Party Delivery.dc.html`.
- Хедер заменён на эталонный с Platform Overview: выпадающие меню Solution / Use Cases / Integrations / Resources с иконками, мобильный аккордеон, активный пункт Delivery Types. Добавлены стили `.nav-dd*`, `.int-a`, `.int-ico` и логика `menuIcon`, `mobSol/mobUse/mobInt/mobRes`.
- Добавлена секция отзывов (карусель с Platform Overview, заголовок «In their words.», чтобы не дублировать h2 секции кейсов) и скрытый SEO-блок `#testimonials-static`. Массив `_testimonials` синхронизирован с продуктовой страницей: убраны Square, ChowNow и Olo, добавлены Giordano's и Hungry Howie's.
- Форма в блоке «Book a demo» заменена на эталонную: выпадающий список типа клиента, ветвление вопросов, поля имя / email / телефон, чекбокс согласия, динамические подсказка и текст кнопки. Добавлены стили `.fdd*`, `.finp`, `.fchk`.
- Удалён мёртвый массив `_faqs` (не рендерился на странице, содержал устаревшие формулировки).
- SEO: добавлены `lang="en"`, canonical, Open Graph и Twitter-теги, ссылка на `llms.txt`.
- Ссылки на локальные файлы `.dc.html` заменены на боевые URL (`/catering/`, `/integrations/`, `/case-studies/`); Privacy Policy в форме ведёт на `/privacy-policy/`.
- Тексты: `fulfilment` → `fulfillment`, «SOC 2 certified» → «SOC 2 Type I compliant».
- Проверить: 390 px и 1440 px, выпадающие меню и мобильный аккордеон, карусель отзывов (стрелки, точки, автопрокрутка), все ветки формы демо, тёмная тема.

### Hybrid Delivery: анимация мокапа приложения и бренд на скриншоте
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- В секции «Your drivers» мокап телефона снова анимирован: 5 экранов циклично сменяются на существующих кейфреймах `dspK1..5` (класс `.yd-phone`, работает без ховера); при `prefers-reduced-motion` остаётся один экран.
- На скриншоте списка заказов «McDonalds» заменён на «P.F. Chang's»: новый файл `uploads/driver-orders-pfchangs.png`, ссылки в файле обновлены (2 места).
- Проверить: смену экранов в мокапе и подпись P.F. Chang's.

### Hybrid Delivery: кейсы вынесены в отдельную секцию
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- Лента кейсов, точки, скрытый список и ссылка «See all case studies» вынесены из Proof в отдельную секцию Results (фон `--grad-gray`, заголовок «Operators see this in their numbers, not just their ops.»), как на Platform Overview. Секция стоит перед Proof, в котором осталась только карусель отзывов.
- Проверить: порядок секций Integrations → Results → Proof, лента кейсов едет, карусель отзывов работает.

### Hybrid Delivery: сокращён блок «What is Hybrid Delivery?»
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- Eyebrow «Definition» → «The model». Заголовок не менялся. Два абзаца заменены одним коротким. В плашке теперь три пункта: IN-HOUSE, THIRD-PARTY и выделенный HYBRID (teal-подложка, левый бордер, крупнее текст). Вертикальный паддинг секции уменьшен до `clamp(48px,6vw,70px)`. FAQ #1 не тронут.
- В секции «Why operators run hybrid» переписан текст карточки «Cost you control».
- Проверить: блок на 390 px и на десктопе, что определение не дублируется дословно с FAQ #1.

### Hybrid Delivery: лента логотипов перед определением
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- Из секции Proof удалён статичный ряд логотипов (`.tp-lg-row`).
- Между hero и секцией «What is Hybrid Delivery» добавлена лента брендов с Platform Overview («BRANDS WHO TRUST US», бегущая строка `.logo-marquee`).
- Проверить: лента едет и ставится на паузу по ховеру, на ≤640 px превращается в сетку 3 в ряд.

### Hybrid Delivery: восстановление секций после сбоя правки
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- При предыдущей правке из разметки выпали секции Your drivers, Their drivers, Full visibility, Integrations, Proof и карточки Why hybrid. Секции восстановлены: Why hybrid (3 карточки), Your drivers (4 пункта + рейтинг 4.6★ / 1.5k ratings + мокап приложения), Their drivers (описание + борд выбора провайдера), Full visibility (живая карта с Platform Overview), Integrations и Proof (логотипы, карусель отзывов, лента кейсов, ссылка на кейсы).
- Проверить: на странице 11 секций, лента логотипов интеграций, карусель отзывов и лента кейсов работают.

### Hybrid Delivery: лента кейсов, рейтинг приложения, hero
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- В секции Proof строка из трёх статистических карточек заменена лентой кейсов с Platform Overview (`.case-marquee` с 12 карточками, точки на мобильном, скрытый список `.case-figures`). Добавлены стили `.case-dots`/`.cd-dot`, мобильные правила ленты и метод `_initCaseDots()`.
- Карточка драйвер-аппа: «4.7k ratings» → «1.5k ratings».
- Из hero-строки доверия удалён пункт «< 1s per decision».
- Проверить: ленту кейсов на десктопе (автопрокрутка, пауза на ховере) и на 390 px (свайп + точки).

### Hybrid Delivery: блоки Integrations и отзывы скопированы с Platform Overview
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- Секция Integrations полностью заменена версией с Platform Overview (POS/ordering: Toast, Olo, PAR, Qu, Onosys, Stream; провайдеры: чип «50+ catering DSPs»; catering: добавлен Monkey Media; заголовок «Plug into what you already run.»).
- В секции Proof три статичные карточки-цитаты заменены каруселью отзывов с Platform Overview плюс скрытый SEO-блок `#testimonials-static`. Массив `_testimonials` синхронизирован: добавлены Giordano's и Hungry Howie's, удалены Square и ChowNow.
- Проверить: секция Integrations и карусель отзывов на 390 px и на десктопе, переключение стрелками и точками, автопрокрутка.

### Hybrid Delivery: синхронизация с продуктовой страницей
- Файл: `Cartwheel Hybrid Delivery.dc.html`.
- Хедер заменён на эталонный из Platform Overview: выпадающие меню Solution / Use Cases / Integrations / Resources с иконками, мобильное меню-аккордеон, активный пункт Delivery Types. Добавлены соответствующие стили `.nav-dd*`, `.int-a`, `.int-ico` и логика `menuIcon`, `mobSol/mobUse/mobInt/mobRes`.
- Секция «The engine»: соединительные линии (`.ecd-mjoin`, `.ecd-mdown`), подпись «AI-powered dispatch with rule-based engine» вместо «Your rules, decided in < 1 second», иконка POS из Platform Overview, логотипы Skipcart и Motoclick в блоке третьих сторон, ширина сцены 920 px, общий набор адаптивных правил.
- Форма в блоке «Book a demo» заменена на эталонную: выпадающий список типа клиента, ветвление вопросов, поля имя / email / телефон, чекбокс согласия, динамические подпись-подсказка и текст кнопки. Добавлены стили `.fdd*`, `.finp`, `.fchk`.
- SEO: добавлены `lang="en"`, canonical, Open Graph и Twitter-теги, ссылка на `llms.txt`.
- Ссылки на локальные файлы `.dc.html` заменены на боевые URL (`/integrations/`, `/case-studies/`, `/delivery-types/`); ссылка Privacy Policy ведёт на `/privacy-policy/`.
- Тексты и цифры: `fulfilment` → `fulfillment`, «SOC 2 Type II» → «SOC 2 Type I compliant» (в плашке доверия и в массиве `_faqs`), «99% client retention» → «97% enterprise retention».
- Проверить: 390 px и 1440 px, выпадающие меню в хедере и мобильный аккордеон, диаграмма движка, все ветки формы демо, тёмная тема.

---

## 2026-09-03

### Новая страница: Quote Library
- Файл: `Cartwheel Quote Library.dc.html`.
- Собраны все 13 цитат, встречающихся в проекте (Platform Overview, Homepage v3/v4, Hybrid Delivery, Third-Party Delivery, плюс цитата Gracie Prasanson из секции Catering). Каждая цитата, отдельная секция с карточкой: логотип бренда, иконка кавычек, текст, аватар с именем и должностью.
- Хедер и футер, как на остальных страницах; фоны секций чередуются: surface и grad-teal.
- Проверить: 390 px и 1440 px, тёмная тема (логотипы инвертируются), отсутствие дублей.

### Главная: в Catering вернулась смена фото по строкам
- Файл: `Cartwheel Homepage v4.dc.html`.
- Перенесены отсутствовавшие данные и вычисления: `_catTicks`, состояние `catStep` с интервалом 1400 мс, `catTicks`, `catOp1..3` и `catPe1..3`.
- Теперь наведение на строку слева переключает изображение в правом медиа-блоке, как на продуктовой странице; чек-лист доставки анимируется.
- Проверить: наведение по всем четырём строкам, смена картинки и бегущий чек-лист.

### Главная: секция Catering точно как на продуктовой
- Файл: `Cartwheel Homepage v4.dc.html`.
- Заголовок "One place for every catering order." и вся секция совпадают с продуктовой; в логику перенесены `_catData` (иконки, изображения, тексты) и расчёт `catRows` (hover-подсветка чипа, стрелка, мобильные изображения).
- Проверить: hover по строкам списка меняет иконку и стрелку; на ≤860 px под строкой раскрывается картинка.

### Главная (Homepage v4): блоки синхронизированы с продуктовой страницей
- Файл: `Cartwheel Homepage v4.dc.html`, источник: `Cartwheel Platform Overview.dc.html`.
- Хедер: перенесён целиком (дропдауны Solution / Use Cases / Integrations / Resources с иконками, мобильное меню-аккордеон, бургер превращается в крестик). Активный раздел не подсвечен, главная не входит в меню.
- Футер: перенесён целиком (5 колонок, водяной знак, полоса "As featured in", складывание в 2 колонки на ≤640 px).
- Отзывы: добавлена карусель (её на главной не было) с иконкой кавычек, аватарами и логотипами брендов, без отзыва Olo; вставлена перед FAQ.
- Форма Book a demo: перенесена версия с продуктовой (кастомный дропдаун `.fdd`, поля `.finp`, чекбокс согласия, ветвление "1 - 2 / 3 +" и "In-house drivers?", CTA и подсказка-трек). Прежние чипы `whoOpts/locOpts/drvOpts` удалены из логики.
- Секции Hybrid Delivery (engine), Catering, лента логотипов: заменены на версии с продуктовой страницы вместе с их CSS.
- Добавлена секция Economics (её на главной не было) с контроллерами `_initEcoVid` / `_initEcoPlate`.
- Проверить: 390 px и 1440 px, работу дропдауна в форме, автопереключение Economics, карусель отзывов (логотип и фото на слайде), мобильное меню.

### Book a demo: ветвление формы (логика по схеме)
- Страница: Platform Overview, форма `#demo`.
- Ветвление: "Restaurant operator" показывает "Number of locations?"; при "1 - 2" появляется "In-house drivers?"; при "3 +" вопрос про водителей скрыт.
- Итог влияет на CTA и подсказку-трек: 1-2 + No драйверов, "Start self-onboarding"; 1-2 + Yes, "Book a call"; 3 +, "Book a demo"; Courier company, "Book a demo"; Become a partner, "Talk to partnerships"; Driver, "Apply to drive".
- Под вопросами добавлена плашка-подсказка (teal-wash) с описанием выбранного трека.
- Проверить: переключение варианта в дропдауне скрывает/показывает вопросы, меняется текст кнопки и подсказки; на 390 px раскладка в одну колонку.

### Book a demo: возвращены поля контактов и чекбокс согласия
- Страница: Platform Overview, форма `#demo`.
- Перед кнопкой "Book a demo" возвращены три поля (`.finp`, 48 px): Full name, Work email, Phone number, и чекбокс согласия на рассылку (`.fchk`, галочка на teal, по умолчанию включён).
- Стили: хайрлайн --border, радиус 10 px, hover и focus в teal, placeholder --muted; курсор text внутри полей.
- Проверить: ввод текста, focus-кольцо, переключение чекбокса, ширина на 390 px.

### Book a demo: убран вариант "100+"
- Страница: Platform Overview, форма `#demo`, вопрос "Number of locations?": вариант "100+" удалён. Остались "1 - 2" и "3 +".

### Book a demo: убран вариант "26 to 100"
- Страница: Platform Overview, форма `#demo`, вопрос "Number of locations?": вариант "26 to 100" удалён. Остались "1 - 2", "3 +", "100+".

### Book a demo: вариант "3 +"
- Страница: Platform Overview, форма `#demo`, вопрос "Number of locations?": "6 to 25" заменено на "3 +".

### Book a demo: вариант "1 - 2"
- Страница: Platform Overview, форма `#demo`, вопрос "Number of locations?": "1 to 2" заменено на "1 - 2".

### Book a demo: кастомный дропдаун как в навигации
- Страница: Platform Overview, форма `#demo`, вопрос "What best describes you?".
- Нативный `<select>` заменён на кастомный дропдаун (`.fdd`) в стиле меню хедера: панель на var(--surface), хайрлайн, радиус 12 px, тень --shadow, пункты 15 px с hover teal-wash, выбранный пункт teal-d/600, шеврон поворачивается на 180 градусов.
- Кнопка 46 px, открытие по клику, закрытие по выбору или клику вне (слушатель на document в componentDidMount).
- Проверить: открытие/закрытие, выбор пункта меняет подпись кнопки, светлая и тёмная тема, 390 px.

### Book a demo: селект в стиле дизайн-системы
- Страница: Platform Overview, форма `#demo`, поле "What best describes you?" (`.fsel`).
- Inter 15px/500, цвет текста --head, радиус 10 px, хайрлайн --border, высота 46 px; шеврон teal (в тёмной теме --accent); hover: рамка teal + лёгкая teal-подложка; focus: рамка teal + кольцо rgba(0,153,125,.14).
- Проверить: светлая и тёмная тема, hover и focus, ширина на 390 px.

### Book a demo: вариант "1 to 2"
- Страница: Platform Overview, форма `#demo`, вопрос "Number of locations?".
- Первый вариант "1 to 5" заменён на "1 to 2".

### Отзывы: цитата Hungry Howie's уже была (дубль убран)
- Страница: Platform Overview, карусель отзывов.
- Отзыв Moe Shrikian (EVP and General Counsel, Hungry Howie's) уже присутствовал в списке с логотипом `assets/logo-hungry-howies.png` и фото. Добавленный дубль удалён, изменений в контенте нет.
- Проверить: в карусели 8 слайдов, отзыв Hungry Howie's встречается один раз, с логотипом.

### Book a demo: выпадающий список вместо кнопок
- Страница: Platform Overview, форма в секции `#demo`, вопрос "What best describes you?".
- Радио-кнопки заменены на нативный `<select class="fsel" name="who">` (4 варианта, высота 46 px, hover/focus в teal, кастомная иконка-шеврон, вариант для тёмной темы).
- Остальные вопросы формы (locations, in-house drivers) остались кнопками.
- Проверить: список открывается по клику, курсор pointer, на 390 px занимает всю ширину.

### Отзывы: кавычки и удаление отзыва Olo
- Страница: Platform Overview, секция отзывов (карусель).
- Вернули иконку кавычек (teal, 26px) над текстом цитаты.
- Убрали отзыв Noah Glass (Olo) из карусели и из SEO-блока `#testimonials-static`.
- Проверить: в карусели больше нет слайда с логотипом Olo; над каждой цитатой есть зелёные кавычки.

### Отзывы: добавлена цитата Hungry Howie's
- Страница: Platform Overview, слайдер отзывов (`_testimonials`).
- Новый слайд: Moe Shrikian, Executive Vice President and General Counsel, Hungry Howie's; логотип `assets/logo-hungry-howies.png`. Фото спикера нет (заглушка с инициалами), при наличии файла добавить в поле `photo`.
- Проверить: слайд идёт пятым, между Portillo's и Potbelly.

### Отзывы: убрана иконка кавычек
- Страница: Platform Overview, слайдер отзывов (`.t-quoterow`).
- Удалён декоративный знак кавычек (`ti-quote`) над текстом отзыва. Логотип бренда, текст, фото и подпись без изменений.
- Проверить: пролистать слайдер, над цитатой нет зелёного символа кавычек.

### Book a demo: обычный курсор над формой
- Страница: Platform Overview, секция `#demo`.
- Кастомный курсор-логотип показывается только над фоном секции. Над карточкой формы (`.demo-form`) он скрывается, возвращается системный курсор (стрелка на тексте, pointer на вариантах ответа, кнопке и ссылке).
- Проверить: на десктопе навести на тёмный фон секции (логотип-курсор), затем на форму (системный курсор), затем обратно.

### Мобильное меню: аккордеон и крестик
- Страница: Platform Overview, хедер, ≤1000 px.
- Кнопка-бургер при открытом меню показывает иконку крестика (`ti-x`), повторное нажатие закрывает меню.
- Пункты Solution, Use Cases, Integrations, Resources стали сворачиваемыми группами: строка 48 px с названием и шевроном справа; тап раскрывает список ссылок, шеврон поворачивается на 180°. По умолчанию все группы свёрнуты.
- Case Studies остаётся обычной ссылкой без списка.
- Все интерактивные строки не ниже 44 px.
- Проверка: ширина 390 px, открыть меню, тап по каждой группе, повторный тап сворачивает.

### Хедер (десктоп): выравнивание Case Studies и единые дропдауны
- Ссылка Case Studies сидела выше остальных пунктов: у дропдаун-кнопок был `padding:12px 0`, у ссылки не было. Добавлено `align-items:center` на `.nav-links` и одинаковый `padding:12px 0; line-height:1.2` для ссылок верхнего уровня.
- Инлайновые стили на кнопках дропдаунов убраны, состояние задаётся классами: `.nav-dd-btn` (muted, 400) и `.nav-dd-btn.is-active` (teal-d, 600, активный раздел).
- Все четыре выпадающих меню используют одни правила: отступ пункта 9px 18px, размер 15 px, hover teal-d + teal-wash, задержка закрытия 0.35 с, невидимый мостик между кнопкой и меню.
- Иконки в пунктах только у Use Cases и Integrations (SVG 19 px, тёмные на светлой теме, белые на тёмной, зелёные на hover). В Solution и Resources иконок нет.

---

## Ранее (до ведения журнала, кратко)

- Header: навигация приведена к trycartwheel.com (Solution, Use Cases, Integrations, Resources, Case Studies), все внешние ссылки в новой вкладке.
- Hybrid Delivery (mobile): схема четыре источника → шестерня → три флота, цветовые анимации.
- Economics (mobile): картинка карточки раскрывается по тапу под карточкой, вписана в 390 px.
- Catering (mobile): четыре пункта статично с картинками, анимация только на первом.
- Логотипы в таблицах Catering и Rate engine ограничены 60×16 px.
- Third-party fleet: текст «50+ local DSPs» заменён логотипами Skipcart и Motoclick (белый вариант Motoclick для тёмного фона).
