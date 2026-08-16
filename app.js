
let data = window.SITE_DATA;

const LANGUAGE_OPTIONS = [
  {code:'zh', short:'简', native:'简体中文', english:'Simplified Chinese', aliases:'中文 简体 普通话 Chinese Mandarin', primary:true, htmlLang:'zh-CN'},
  {code:'zh-Hant', short:'繁', native:'繁體中文', english:'Traditional Chinese', aliases:'中文 繁体 繁體 Traditional Cantonese', primary:true, htmlLang:'zh-TW'},
  {code:'en', short:'EN', native:'English', english:'English', aliases:'英语 英語 英文', primary:true, htmlLang:'en'},
  {code:'de', short:'DE', native:'Deutsch', english:'German', aliases:'德语 德語 German Germany', htmlLang:'de'},
  {code:'fr', short:'FR', native:'Français', english:'French', aliases:'法语 法語 French France Francais', htmlLang:'fr'},
  {code:'it', short:'IT', native:'Italiano', english:'Italian', aliases:'意大利语 義大利語 Italian Italy', htmlLang:'it'},
  {code:'ru', short:'RU', native:'Русский', english:'Russian', aliases:'俄语 俄語 Russian Russia Русский', htmlLang:'ru'},
  {code:'vi', short:'VI', native:'Tiếng Việt', english:'Vietnamese', aliases:'越南语 越南語 Vietnamese Vietnam Tieng Viet', htmlLang:'vi'},
  {code:'ar', short:'AR', native:'العربية', english:'Arabic', aliases:'阿拉伯语 阿拉伯語 Arabic Arab', htmlLang:'ar', rtl:true},
  {code:'ja', short:'日', native:'日本語', english:'Japanese', aliases:'日语 日語 Japanese Japan Nihongo', htmlLang:'ja'},
  {code:'ko', short:'한', native:'한국어', english:'Korean', aliases:'韩语 韓語 Korean Korea Hangul', htmlLang:'ko'}
];

const GOOGLE_TRANSLATE_LANGUAGES = [
  ['ab','Abkhaz'],['ace','Acehnese'],['ach','Acholi'],['af','Afrikaans'],['sq','Albanian'],['alz','Alur'],['am','Amharic'],['ar','Arabic'],['hy','Armenian'],['as','Assamese'],['awa','Awadhi'],['ay','Aymara'],['az','Azerbaijani'],['ban','Balinese'],['bm','Bambara'],['ba','Bashkir'],['eu','Basque'],['btx','Batak Karo'],['bts','Batak Simalungun'],['bbc','Batak Toba'],['be','Belarusian'],['bem','Bemba'],['bn','Bengali'],['bew','Betawi'],['bho','Bhojpuri'],['bik','Bikol'],['bs','Bosnian'],['br','Breton'],['bg','Bulgarian'],['bua','Buryat'],['yue','Cantonese'],['ca','Catalan'],['ceb','Cebuano'],['ny','Chichewa'],['zh-CN','Chinese (Simplified)'],['zh-TW','Chinese (Traditional)'],['cv','Chuvash'],['co','Corsican'],['crh','Crimean Tatar'],['hr','Croatian'],['cs','Czech'],['da','Danish'],['din','Dinka'],['dv','Divehi'],['doi','Dogri'],['dov','Dombe'],['nl','Dutch'],['dz','Dzongkha'],['en','English'],['eo','Esperanto'],['et','Estonian'],['ee','Ewe'],['fj','Fijian'],['fil','Filipino'],['fi','Finnish'],['fr','French'],['fy','Frisian'],['ff','Fulfulde'],['gaa','Ga'],['gl','Galician'],['lg','Ganda'],['ka','Georgian'],['de','German'],['el','Greek'],['gn','Guarani'],['gu','Gujarati'],['ht','Haitian Creole'],['cnh','Hakha Chin'],['ha','Hausa'],['haw','Hawaiian'],['he','Hebrew'],['hil','Hiligaynon'],['hi','Hindi'],['hmn','Hmong'],['hu','Hungarian'],['hrx','Hunsrik'],['is','Icelandic'],['ig','Igbo'],['ilo','Iloko'],['id','Indonesian'],['ga','Irish'],['it','Italian'],['ja','Japanese'],['jv','Javanese'],['kn','Kannada'],['pam','Kapampangan'],['kk','Kazakh'],['km','Khmer'],['cgg','Kiga'],['rw','Kinyarwanda'],['ktu','Kituba'],['gom','Konkani'],['ko','Korean'],['kri','Krio'],['ku','Kurdish (Kurmanji)'],['ckb','Kurdish (Sorani)'],['ky','Kyrgyz'],['lo','Lao'],['ltg','Latgalian'],['la','Latin'],['lv','Latvian'],['lij','Ligurian'],['li','Limburgan'],['ln','Lingala'],['lt','Lithuanian'],['lmo','Lombard'],['luo','Luo'],['lb','Luxembourgish'],['mk','Macedonian'],['mai','Maithili'],['mak','Makassar'],['mg','Malagasy'],['ms','Malay'],['ms-Arab','Malay (Jawi)'],['ml','Malayalam'],['mt','Maltese'],['mi','Maori'],['mr','Marathi'],['chm','Meadow Mari'],['mni-Mtei','Meiteilon'],['min','Minang'],['lus','Mizo'],['mn','Mongolian'],['my','Myanmar'],['nr','Ndebele (South)'],['new','Nepalbhasa'],['ne','Nepali'],['nso','Northern Sotho'],['no','Norwegian'],['nus','Nuer'],['oc','Occitan'],['or','Odia'],['om','Oromo'],['pag','Pangasinan'],['pap','Papiamento'],['ps','Pashto'],['fa','Persian'],['pl','Polish'],['pt','Portuguese'],['pt-PT','Portuguese (Portugal)'],['pt-BR','Portuguese (Brazil)'],['pa','Punjabi'],['pa-Arab','Punjabi (Shahmukhi)'],['qu','Quechua'],['rom','Romani'],['ro','Romanian'],['rn','Rundi'],['ru','Russian'],['sm','Samoan'],['sg','Sango'],['sa','Sanskrit'],['gd','Scots Gaelic'],['sr','Serbian'],['st','Sesotho'],['crs','Seychellois Creole'],['shn','Shan'],['sn','Shona'],['scn','Sicilian'],['szl','Silesian'],['sd','Sindhi'],['si','Sinhala'],['sk','Slovak'],['sl','Slovenian'],['so','Somali'],['es','Spanish'],['su','Sundanese'],['sw','Swahili'],['ss','Swati'],['sv','Swedish'],['tg','Tajik'],['ta','Tamil'],['tt','Tatar'],['te','Telugu'],['tet','Tetum'],['th','Thai'],['ti','Tigrinya'],['ts','Tsonga'],['tn','Tswana'],['tr','Turkish'],['tk','Turkmen'],['ak','Twi'],['uk','Ukrainian'],['ur','Urdu'],['ug','Uyghur'],['uz','Uzbek'],['vi','Vietnamese'],['cy','Welsh'],['xh','Xhosa'],['yi','Yiddish'],['yo','Yoruba'],['yua','Yucatec Maya'],['zu','Zulu']
].map(([code, english]) => ({code, english}));

const supportedLanguages = new Set(LANGUAGE_OPTIONS.map(item => item.code));
const storedLanguage = localStorage.getItem('hcl-language');
let lang = supportedLanguages.has(storedLanguage) ? storedLanguage : 'zh';
data = lang === 'zh-Hant' ? (window.SITE_DATA_TW || window.SITE_DATA) : window.SITE_DATA;
let themeFilter = '全部';
let yearFilter = '全部';
let keyword = '';
let currentPaper = null;
let activeGlobalLanguage = localStorage.getItem('hcl-global-language') || '';
let translationToastTimer = null;
let googleTranslateLoadPromise = null;

const zhText = {
  heroEyebrow: 'HEALING CITY / 2026',
  heroTitleA: '让城市', heroTitleB: '成为疗愈',
  scrollDown:'向下浏览',
  stat1:'主要研究<br>方向', stat2:'学术专著', stat3:'篇学术文章',
  statTeam:'位团队<br>成员',
  libraryKicker:'HEALING UPDATES', libraryTitleA:'疗愈动态', libraryTitleB:'', libraryDesc:'汇集论文成果、疗愈实践、竞赛项目与具身体验计划，点击缩略图进入完整内容。', libraryCountLabel:'项内容', libraryAuto:'AUTO SCROLL · 4.3秒自动切换',
  newsKicker:'HEALING NEWS EXPRESS', newsTitleA:'疗愈研究，', newsTitleB:'正在发生。', newsDesc:'汇集团队近期浏览的新文章与研究线索，为访客持续推送疗愈环境、城市健康与生态设计的新观点。', newsStatus:'TEAM CURATED · 持续更新', profileResearchTitle:'主要研究方向', profileResearchDesc:'完整展示城市设计、城市公共空间与疗愈环境、生态园林城市三项主要研究方向，点击卡片进入全屏滑动浏览。',
  portalHealing:'疗愈新闻', portalTeam:'团队动态', portalMore:'查看详情',
  builtProjectsKicker:'HEALING PROJECTS', builtProjectsTitleA:'疗愈项目', builtProjectsTitleB:'', builtProjectsDesc:'呈现团队已完成和正在推进的疗愈环境实践与竞赛探索，点击项目卡片进入完整项目长页。', builtProjectCountLabel:'个项目内容', competitionTitle:'竞赛项目',
  teamKicker:'THE HEALING CITY TEAM', teamTitleA:'团队介绍', teamTitleB:'', teamDesc:'由刘韩昕教授与七位研究生共同组成，点击成员头像进入个人介绍。', teamCountLabel:'位团队成员', teamLeader:'负责人 / 刘韩昕', teamLeaderEn:'TEAM LEADER', teamRoster:'团队成员', teamRosterEn:'TEAM MEMBERS', teamOrder:'排名不分先后 · TEAM MEMBERS',
  aboutKicker:'ABOUT THE LAB', aboutTitleA:'山水不是背景，', aboutTitleB:'而是身心恢复的媒介。', school:'桂林理工大学',
  moreProfile:'查看详细资料', moreAchievements:'查看科研成果概览', moreDirections:'主要研究方向',
  projectsKicker:'PUBLICATIONS / PAPERS', projectsTitle:'论文成果', projectsDesc:'19篇论文原件完整保留。点击成果卡片查看中间页，再次点击进入原文阅读。',
  paperCountLabel:'篇论文成果', readerNote:'点击成果卡片查看论文中间页，再次点击进入原文阅读；上下滑动逐页翻阅，双指缩放查看细节。',
  libraryHistoryKicker:'READING HISTORY', libraryHistoryTitle:'过往内容记录', libraryHistoryHint:'点击回看',
  libraryHistoryItem1:'古典园林与私密活动', libraryHistoryItem2:'榕湖景观提升项目', libraryHistoryItem3:'像素绿洲', libraryHistoryItem4:'空间叙事理论下城市物质文化遗产价值评估与保护策略', libraryHistoryItem5:'山水情境疗愈工坊具身体验计划', libraryHistoryItem6:'花笺寄情，春日抚心', libraryHistoryItem7:'榕湖｜叠彩疗愈工坊体验',
  navResearch:'研究方向', navNews:'疗愈动态', navPapers:'论文成果', navProjects:'疗愈项目', navTeam:'团队介绍', sectionArrival:'已进入新板块',
  profileSheetSmall:'ABOUT THE LAB', profileSheetTitle:'刘韩昕教授个人简介', close:'关闭', basicInfo:'基本信息', teachingResearch:'教学科研情况',
  achievementSmall:'RESEARCH OVERVIEW', achievementTitle:'科研成果概览', tabProjects:'科研项目', tabPapers:'代表论文', tabBooks:'著作',
  readerSmall:'PUBLICATION', readerFailed:'部分页面载入失败', readerBack:'返回', readerOpening:'正在准备论文页面', readerSourceTitle:'论文原文', readerVerified:'已收录', readerSwipeStart:'向上滑动进入原文', readerAutoLoading:'全文正在自动载入', readerAutoReady:'全文已就绪', readerOverviewLabel:'论文信息', tabOverview:'论文信息', tabRead:'论文页面', readerEnterFullscreen:'再次点击进入论文原文', readerPreviewHint:'进入后上下滑动逐页翻阅', readerBackUpper:'返回上一级', readerFullSmall:'FULL TEXT', readerPreviewReady:'再次点击论文页面进入原文阅读',
  searchAction:'搜索', searchPlaceholder:'搜索标题、作者、期刊或关键词', clearSearch:'清除搜索', searchAria:'搜索论文成果',
  musicOn:'开启背景音乐', musicOff:'关闭背景音乐',
  readNow:'在线阅读', details:'查看详情', all:'全部',
  languageSmall:'LANGUAGE', languageTitle:'选择网站语言', languageSubtitle:'已内置 Google Translate 语言目录中的192种语言与语言变体；可直接搜索并在当前网页内切换。简体中文、繁體中文和英语置顶显示。',
  primaryLanguages:'主要语言', moreLanguages:'常用语言', allLanguages:'全部内置语言 · 192', selectedLanguage:'当前语言', languageSearchPlaceholder:'搜索192种语言，例如“俄语”“Spanish”或“हिन्दी”', languageSearchAria:'搜索网站语言', languageSearchCount:'种语言可选', languageNoResults:'未找到匹配语言，请尝试中文名、英文名、本地名称或语言代码', translationEngineHint:'选择其他语种后将在当前网页内翻译，不会跳转至外部页面。自动翻译功能需要联网。', translating:'正在当前网页内切换语言', translationReady:'网页语言已切换', translationFailed:'自动翻译暂时无法载入，请检查网络后重试', contactKicker:'PROFESSOR CONTACT', contactEmail:'邮箱', contactAddress:'通讯地址', contactPostcode:'邮编'
};


const zhHantText = {
  heroEyebrow: 'HEALING CITY / 2026',
  heroTitleA: '讓城市', heroTitleB: '成為療癒',
  scrollDown:'向下瀏覽',
  stat1:'主要研究<br>方向', stat2:'學術專著', stat3:'篇學術文章',
  statTeam:'位團隊<br>成員',
  libraryKicker:'HEALING UPDATES', libraryTitleA:'療癒動態', libraryTitleB:'', libraryDesc:'匯集論文成果、療癒實踐、競賽項目與具身體驗計劃，點擊縮略圖進入完整內容。', libraryCountLabel:'項內容', libraryAuto:'AUTO SCROLL · 4.3秒自動切換',
  newsKicker:'HEALING NEWS EXPRESS', newsTitleA:'療癒研究，', newsTitleB:'正在發生。', newsDesc:'匯集團隊近期瀏覽的新文章與研究線索，為訪客持續推送療癒環境、城市健康與生態設計的新觀點。', newsStatus:'TEAM CURATED · 持續更新', profileResearchTitle:'主要研究方向', profileResearchDesc:'完整展示城市設計、城市公共空間與療癒環境、生態園林城市三項主要研究方向，點擊卡片進入全螢幕滑動瀏覽。',
  portalHealing:'療癒新聞', portalTeam:'團隊動態', portalMore:'查看詳情',
  builtProjectsKicker:'HEALING PROJECTS', builtProjectsTitleA:'療癒項目', builtProjectsTitleB:'', builtProjectsDesc:'呈現團隊已完成和正在推進的療癒環境實踐與競賽探索，點擊項目卡片進入完整項目長頁。', builtProjectCountLabel:'個項目內容', competitionTitle:'競賽項目',
  teamKicker:'THE HEALING CITY TEAM', teamTitleA:'團隊介紹', teamTitleB:'', teamDesc:'由劉韓昕教授與七位研究生共同組成，點擊成員頭像進入個人介紹。', teamCountLabel:'位團隊成員', teamLeader:'負責人 / 劉韓昕', teamLeaderEn:'TEAM LEADER', teamRoster:'團隊成員', teamRosterEn:'TEAM MEMBERS', teamOrder:'排名不分先後 · TEAM MEMBERS',
  aboutKicker:'ABOUT THE LAB', aboutTitleA:'山水不是背景，', aboutTitleB:'而是身心恢復的媒介。', school:'桂林理工大學',
  moreProfile:'查看詳細資料', moreAchievements:'查看科研成果概覽', moreDirections:'主要研究方向',
  projectsKicker:'PUBLICATIONS / PAPERS', projectsTitle:'論文成果', projectsDesc:'19篇論文原件完整保留。點擊成果卡片查看中間頁，再次點擊進入原文閱讀。',
  paperCountLabel:'篇論文成果', readerNote:'點擊成果卡片查看論文中間頁，再次點擊進入原文閱讀；上下滑動逐頁翻閱，雙指縮放查看細節。',
  libraryHistoryKicker:'READING HISTORY', libraryHistoryTitle:'過往內容記錄', libraryHistoryHint:'點擊回看',
  libraryHistoryItem1:'古典園林與私密活動', libraryHistoryItem2:'榕湖景觀提升項目', libraryHistoryItem3:'像素綠洲', libraryHistoryItem4:'空間敘事理論下城市物質文化遺產價值評估與保護策略', libraryHistoryItem5:'山水情境療癒工坊具身體驗計劃', libraryHistoryItem6:'花箋寄情，春日撫心', libraryHistoryItem7:'榕湖｜疊彩療癒工坊體驗',
  navResearch:'研究方向', navNews:'療癒動態', navPapers:'論文成果', navProjects:'療癒項目', navTeam:'團隊介紹', sectionArrival:'已進入新板塊',
  profileSheetSmall:'ABOUT THE LAB', profileSheetTitle:'劉韓昕教授個人簡介', close:'關閉', basicInfo:'基本資料', teachingResearch:'教學科研情況',
  achievementSmall:'RESEARCH OVERVIEW', achievementTitle:'科研成果概覽', tabProjects:'科研項目', tabPapers:'代表論文', tabBooks:'著作',
  readerSmall:'PUBLICATION', readerFailed:'部分頁面載入失敗', readerBack:'返回', readerOpening:'正在準備論文頁面', readerSourceTitle:'論文原文', readerVerified:'已收錄', readerSwipeStart:'向上滑動進入原文', readerAutoLoading:'全文正在自動載入', readerAutoReady:'全文已就緒', readerOverviewLabel:'論文資訊', tabOverview:'論文資訊', tabRead:'論文頁面', readerEnterFullscreen:'再次點擊進入論文原文', readerPreviewHint:'進入後上下滑動逐頁翻閱', readerBackUpper:'返回上一級', readerFullSmall:'FULL TEXT', readerPreviewReady:'再次點擊論文頁面進入原文閱讀',
  searchAction:'搜尋', searchPlaceholder:'搜尋標題、作者、期刊或關鍵詞', clearSearch:'清除搜尋', searchAria:'搜尋論文成果',
  musicOn:'開啟背景音樂', musicOff:'關閉背景音樂',
  readNow:'線上閱讀', details:'查看詳情', all:'全部',
  languageSmall:'LANGUAGE', languageTitle:'選擇網站語言', languageSubtitle:'已內置 Google Translate 語言目錄中的192種語言與語言變體；可直接搜尋並在目前網頁內切換。簡體中文、繁體中文和英語置頂顯示。',
  primaryLanguages:'主要語言', moreLanguages:'常用語言', allLanguages:'全部內置語言 · 192', selectedLanguage:'目前語言', languageSearchPlaceholder:'搜尋192種語言，例如「俄語」「Spanish」或「हिन्दी」', languageSearchAria:'搜尋網站語言', languageSearchCount:'種語言可選', languageNoResults:'找不到相符語言，請嘗試中文名、英文名、本地名稱或語言代碼', translationEngineHint:'選擇其他語種後將在目前網頁內翻譯，不會跳轉至外部頁面。自動翻譯功能需要連線。', translating:'正在目前網頁內切換語言', translationReady:'網頁語言已切換', translationFailed:'自動翻譯暫時無法載入，請檢查網路後重試', contactKicker:'PROFESSOR CONTACT', contactEmail:'電子郵件', contactAddress:'通訊地址', contactPostcode:'郵遞區號'
};

const enText = {
  heroEyebrow: 'HEALING CITY / 2026',
  heroTitleA: 'Make the city', heroTitleB: 'a place for healing',
  scrollDown:'Scroll down',
  stat1:'Major research<br>directions', stat2:'Academic books', stat3:'Academic articles',
  statTeam:'Team<br>members',
  libraryKicker:'HEALING UPDATES', libraryTitleA:'Healing Updates', libraryTitleB:'', libraryDesc:'Papers, healing practices, competition projects and embodied experiences gathered in one place. Open a thumbnail for the complete content.', libraryCountLabel:'items', libraryAuto:'AUTO SCROLL · 4.3 SECONDS',
  newsKicker:'HEALING NEWS EXPRESS', newsTitleA:'Healing research, ', newsTitleB:'as it happens.', newsDesc:'A team-curated stream of newly discovered articles and research leads across healing environments, urban health and ecological design.', newsStatus:'TEAM CURATED · UPDATED REGULARLY', profileResearchTitle:'Major Research Directions', profileResearchDesc:'The three retained directions are Urban Design, Urban Public Space & Healing Environments, and Ecological Garden City. Open a card for the full-screen swipe story.',
  portalHealing:'Healing News', portalTeam:'Team Updates', portalMore:'View details',
  builtProjectsKicker:'HEALING PROJECTS', builtProjectsTitleA:'Healing Projects', builtProjectsTitleB:'', builtProjectsDesc:'Completed, ongoing and competition-based healing-environment practices. Open a card for the full project story.', builtProjectCountLabel:'projects', competitionTitle:'Competition Projects',
  teamKicker:'THE HEALING CITY TEAM', teamTitleA:'Team', teamTitleB:'', teamDesc:'Hanxin Liu and seven graduate researchers. Open a portrait for the member profile.', teamCountLabel:'team members', teamLeader:'Team Leader / Hanxin Liu', teamLeaderEn:'TEAM LEADER', teamRoster:'Team Members', teamRosterEn:'TEAM MEMBERS', teamOrder:'IN NO PARTICULAR ORDER · TEAM MEMBERS',
  aboutKicker:'ABOUT THE LAB', aboutTitleA:'Shanshui is not a backdrop, ', aboutTitleB:'but a medium for restoration.', school:'Guilin University of Technology',
  moreProfile:'View detailed profile', moreAchievements:'View research overview', moreDirections:'Major research directions',
  projectsKicker:'PUBLICATIONS / PAPERS', projectsTitle:'Academic Publications', projectsDesc:'All 19 original papers are preserved. Tap a card for the intermediate page, then tap again to open the full text.',
  paperCountLabel:'papers and research outputs', readerNote:'Tap a card for the paper page, then tap again to open the full text. Swipe vertically between pages and pinch to zoom.',
  libraryHistoryKicker:'READING HISTORY', libraryHistoryTitle:'Previous entries', libraryHistoryHint:'Tap to revisit',
  libraryHistoryItem1:'Classical Gardens and Privacy Activities', libraryHistoryItem2:'Ronghu Landscape Enhancement', libraryHistoryItem3:'Pixel Oasis', libraryHistoryItem4:'Spatial Narrative and Urban Heritage Protection', libraryHistoryItem5:'Shanshui Healing Workshop', libraryHistoryItem6:'Floral Notes · A Spring Healing Workshop', libraryHistoryItem7:'Ronghu | Diecai Healing Workshop Experience',
  navResearch:'Research', navNews:'Healing Updates', navPapers:'Outputs', navProjects:'Healing Projects', navTeam:'Team', sectionArrival:'NOW VIEWING · NEW SECTION',
  profileSheetSmall:'ABOUT THE LAB', profileSheetTitle:'Hanxin Liu · Full Profile', close:'Close', basicInfo:'Basic Information', teachingResearch:'Teaching & Research',
  achievementSmall:'RESEARCH OVERVIEW', achievementTitle:'Research Overview', tabProjects:'Projects', tabPapers:'Selected Papers', tabBooks:'Books',
  readerSmall:'PUBLICATION', readerFailed:'Some pages failed to load', readerBack:'Back', readerOpening:'Preparing the paper page', readerSourceTitle:'Paper full text', readerVerified:'Included', readerSwipeStart:'Swipe up to enter the full text', readerAutoLoading:'Full text is loading automatically', readerAutoReady:'Full text ready', readerOverviewLabel:'Paper details', tabOverview:'Paper details', tabRead:'Paper page', readerEnterFullscreen:'Tap again to open the full text', readerPreviewHint:'Swipe vertically through pages after opening', readerBackUpper:'Back one level', readerFullSmall:'FULL TEXT', readerPreviewReady:'Tap the paper page again to open the full text',
  searchAction:'Search', searchPlaceholder:'Search title, author, journal or keywords', clearSearch:'Clear search', searchAria:'Search academic publications',
  musicOn:'Turn background music on', musicOff:'Turn background music off',
  readNow:'Read now', details:'More details', all:'All',
  languageSmall:'LANGUAGE', languageTitle:'Choose website language', languageSubtitle:'All 192 languages and variants in the Google Translate directory are built into this selector. Search and switch within the current page. Simplified Chinese, Traditional Chinese and English remain pinned.',
  primaryLanguages:'Primary languages', moreLanguages:'Common languages', allLanguages:'ALL BUILT-IN LANGUAGES · 192', selectedLanguage:'Current language', languageSearchPlaceholder:'Search 192 languages, e.g. Russian, Español or हिन्दी', languageSearchAria:'Search website languages', languageSearchCount:'languages available', languageNoResults:'No matching language. Try its native, English or Chinese name, or language code.', translationEngineHint:'Other languages are translated within the current page without opening an external page. Automatic translation requires an internet connection.', translating:'Switching language within this page', translationReady:'Page language updated', translationFailed:'Automatic translation could not load. Check your connection and try again.', contactKicker:'PROFESSOR CONTACT', contactEmail:'Email', contactAddress:'Address', contactPostcode:'Postcode'
};

const staticText = {
  zh: zhText,
  'zh-Hant': zhHantText,
  en: enText,
  ja: {...enText, heroTitleA:'都市を', heroTitleB:'癒やしの場所へ', scrollDown:'下へスクロール', stat1:'主要研究<br>プロジェクト', stat2:'学術書', stat3:'学術論文', aboutTitleA:'山水は背景ではなく、', aboutTitleB:'心身回復の媒体です。', school:'桂林理工大学', moreProfile:'詳細プロフィール', moreAchievements:'研究成果の概要', projectsTitle:'論文成果', projectsDesc:'19本の論文をウェブ上で直接閲覧できます。', paperCountLabel:'PDF成果', navResearch:'研究分野', navPapers:'研究成果', profileSheetTitle:'劉韓昕 教授 詳細プロフィール', close:'閉じる', basicInfo:'基本情報', teachingResearch:'教育・研究', achievementTitle:'研究成果概要', tabProjects:'研究プロジェクト', tabPapers:'代表論文', tabBooks:'著書', tabOverview:'概要', tabRead:'ウェブ閲覧', loadPages:'全ページを読み込む', searchAction:'検索', searchPlaceholder:'タイトル・著者・雑誌・キーワードを検索', clearSearch:'検索を消去', musicOn:'BGMをオン', musicOff:'BGMをオフ', readNow:'オンラインで読む', all:'すべて', languageTitle:'言語を選択', languageSubtitle:'中国語と英語が主要な完全コンテンツ言語です。その他の言語では画面を翻訳し、論文情報は英語を使用します。', primaryLanguages:'主要言語', moreLanguages:'その他の言語'},
  ko: {...enText, heroTitleA:'도시를', heroTitleB:'치유의 장소로', scrollDown:'아래로 보기', stat1:'주요 연구<br>프로젝트', stat2:'학술 저서', stat3:'학술 논문', aboutTitleA:'산수는 배경이 아니라,', aboutTitleB:'회복을 위한 매개입니다.', school:'구이린 이공대학교', moreProfile:'상세 프로필', moreAchievements:'연구 성과 개요', projectsTitle:'논문 성과', projectsDesc:'19편의 논문을 웹에서 직접 읽을 수 있습니다.', paperCountLabel:'PDF 성과', navResearch:'연구 분야', navPapers:'연구 성과', profileSheetTitle:'류한신 교수 상세 정보', close:'닫기', basicInfo:'기본 정보', teachingResearch:'교육 및 연구', achievementTitle:'연구 성과 개요', tabProjects:'연구 과제', tabPapers:'대표 논문', tabBooks:'저서', tabOverview:'개요', tabRead:'웹 읽기', loadPages:'전체 페이지 불러오기', searchAction:'검색', searchPlaceholder:'제목, 저자, 저널 또는 키워드 검색', clearSearch:'검색 지우기', musicOn:'배경 음악 켜기', musicOff:'배경 음악 끄기', readNow:'온라인 읽기', all:'전체', languageTitle:'언어 선택', languageSubtitle:'중국어와 영어가 주요 전체 콘텐츠 언어입니다. 다른 언어는 인터페이스를 번역하고 논문 정보는 영어를 사용합니다.', primaryLanguages:'주요 언어', moreLanguages:'더 많은 언어'},
  fr: {...enText, heroTitleA:'Faire de la ville', heroTitleB:'un lieu de guérison', scrollDown:'Faire défiler', stat1:'Axes de projets<br>de recherche', stat2:'Ouvrages académiques', stat3:'Articles scientifiques', moreProfile:'Profil détaillé', moreAchievements:'Aperçu des recherches', projectsTitle:'Publications scientifiques', projectsDesc:'Les 19 articles peuvent être lus directement sur le site.', paperCountLabel:'publications PDF', navResearch:'Recherche', navPapers:'Publications', profileSheetTitle:'Profil détaillé de Hanxin Liu', close:'Fermer', basicInfo:'Informations de base', teachingResearch:'Enseignement et recherche', achievementTitle:'Aperçu des recherches', tabProjects:'Projets', tabPapers:'Articles sélectionnés', tabBooks:'Livres', tabOverview:'Aperçu', tabRead:'Lecture web', loadPages:'Charger toutes les pages', searchAction:'Rechercher', searchPlaceholder:'Rechercher titre, auteur, revue ou mot-clé', clearSearch:'Effacer', musicOn:'Activer la musique', musicOff:'Désactiver la musique', readNow:'Lire en ligne', all:'Tous', languageTitle:'Choisir la langue', languageSubtitle:'Le chinois et l’anglais sont les langues principales du contenu complet. Les autres langues traduisent l’interface et utilisent les informations de publication en anglais.', primaryLanguages:'Langues principales', moreLanguages:'Autres langues'},
  de: {...enText, heroTitleA:'Die Stadt', heroTitleB:'zum Ort der Heilung machen', scrollDown:'Nach unten', stat1:'Forschungs-<br>projekte', stat2:'Fachbücher', stat3:'Fachartikel', moreProfile:'Ausführliches Profil', moreAchievements:'Forschungsübersicht', projectsTitle:'Publikationen', projectsDesc:'Alle 19 Beiträge können direkt im Web gelesen werden.', paperCountLabel:'PDF-Publikationen', navResearch:'Forschung', navPapers:'Publikationen', profileSheetTitle:'Detailliertes Profil von Hanxin Liu', close:'Schließen', basicInfo:'Grundinformationen', teachingResearch:'Lehre und Forschung', achievementTitle:'Forschungsübersicht', tabProjects:'Projekte', tabPapers:'Ausgewählte Artikel', tabBooks:'Bücher', tabOverview:'Überblick', tabRead:'Web-Lesen', loadPages:'Alle Seiten laden', searchAction:'Suchen', searchPlaceholder:'Titel, Autor, Zeitschrift oder Stichwort suchen', clearSearch:'Suche löschen', musicOn:'Hintergrundmusik einschalten', musicOff:'Hintergrundmusik ausschalten', readNow:'Online lesen', all:'Alle', languageTitle:'Sprache wählen', languageSubtitle:'Chinesisch und Englisch sind die primären Vollinhaltssprachen. Weitere Sprachen übersetzen die Oberfläche und verwenden englische Publikationsdaten.', primaryLanguages:'Hauptsprachen', moreLanguages:'Weitere Sprachen'},
  es: {...enText, heroTitleA:'Hacer de la ciudad', heroTitleB:'un lugar para sanar', scrollDown:'Desplazar', stat1:'Líneas de proyectos<br>de investigación', stat2:'Libros académicos', stat3:'Artículos académicos', moreProfile:'Perfil detallado', moreAchievements:'Resumen de investigación', projectsTitle:'Publicaciones académicas', projectsDesc:'Los 19 artículos pueden leerse directamente en la web.', paperCountLabel:'publicaciones PDF', navResearch:'Investigación', navPapers:'Publicaciones', profileSheetTitle:'Perfil detallado de Hanxin Liu', close:'Cerrar', basicInfo:'Información básica', teachingResearch:'Docencia e investigación', achievementTitle:'Resumen de investigación', tabProjects:'Proyectos', tabPapers:'Artículos seleccionados', tabBooks:'Libros', tabOverview:'Resumen', tabRead:'Lectura web', loadPages:'Cargar todas las páginas', searchAction:'Buscar', searchPlaceholder:'Buscar título, autor, revista o palabra clave', clearSearch:'Borrar búsqueda', musicOn:'Activar música', musicOff:'Desactivar música', readNow:'Leer en línea', all:'Todos', languageTitle:'Elegir idioma', languageSubtitle:'El chino y el inglés son los idiomas principales de contenido completo. Los demás idiomas traducen la interfaz y usan información de publicaciones en inglés.', primaryLanguages:'Idiomas principales', moreLanguages:'Más idiomas'},
  pt: {...enText, heroTitleA:'Transformar a cidade', heroTitleB:'num lugar de cura', scrollDown:'Descer', stat1:'Linhas de projetos<br>de pesquisa', stat2:'Livros acadêmicos', stat3:'Artigos acadêmicos', moreProfile:'Perfil detalhado', moreAchievements:'Visão geral da pesquisa', projectsTitle:'Publicações acadêmicas', projectsDesc:'Os 19 artigos podem ser lidos diretamente na web.', paperCountLabel:'publicações PDF', navResearch:'Pesquisa', navPapers:'Publicações', profileSheetTitle:'Perfil detalhado de Hanxin Liu', close:'Fechar', basicInfo:'Informações básicas', teachingResearch:'Ensino e pesquisa', achievementTitle:'Visão geral da pesquisa', tabProjects:'Projetos', tabPapers:'Artigos selecionados', tabBooks:'Livros', tabOverview:'Visão geral', tabRead:'Leitura web', loadPages:'Carregar todas as páginas', searchAction:'Pesquisar', searchPlaceholder:'Pesquisar título, autor, revista ou palavra-chave', clearSearch:'Limpar pesquisa', musicOn:'Ativar música', musicOff:'Desativar música', readNow:'Ler online', all:'Todos', languageTitle:'Escolher idioma', languageSubtitle:'Chinês e inglês são os principais idiomas de conteúdo completo. Outros idiomas traduzem a interface e usam informações de publicação em inglês.', primaryLanguages:'Idiomas principais', moreLanguages:'Mais idiomas'},
  it: {...enText, heroTitleA:'Rendere la città', heroTitleB:'un luogo di cura', scrollDown:'Scorri verso il basso', stat1:'Linee di progetti<br>di ricerca', stat2:'Libri accademici', stat3:'Articoli accademici', moreProfile:'Profilo dettagliato', moreAchievements:'Panoramica della ricerca', projectsTitle:'Pubblicazioni accademiche', projectsDesc:'Tutti i 19 articoli possono essere letti direttamente sul web.', paperCountLabel:'pubblicazioni PDF', navResearch:'Ricerca', navPapers:'Pubblicazioni', profileSheetTitle:'Profilo dettagliato di Hanxin Liu', close:'Chiudi', basicInfo:'Informazioni di base', teachingResearch:'Didattica e ricerca', achievementTitle:'Panoramica della ricerca', tabProjects:'Progetti', tabPapers:'Articoli selezionati', tabBooks:'Libri', tabOverview:'Panoramica', tabRead:'Lettura web', loadPages:'Carica tutte le pagine', searchAction:'Cerca', searchPlaceholder:'Cerca titolo, autore, rivista o parola chiave', clearSearch:'Cancella ricerca', musicOn:'Attiva musica', musicOff:'Disattiva musica', readNow:'Leggi online', all:'Tutti', languageTitle:'Scegli la lingua', languageSubtitle:'Cinese e inglese sono le lingue principali con contenuti completi. Le altre lingue traducono l’interfaccia e usano informazioni di pubblicazione in inglese.', primaryLanguages:'Lingue principali', moreLanguages:'Altre lingue'},
  ru: {...enText, heroTitleA:'Сделать город', heroTitleB:'местом исцеления', scrollDown:'Прокрутить вниз', stat1:'Направления<br>исследований', stat2:'Научные книги', stat3:'Научные статьи', moreProfile:'Подробный профиль', moreAchievements:'Обзор исследований', projectsTitle:'Научные публикации', projectsDesc:'Все 19 статей можно читать прямо на сайте.', paperCountLabel:'PDF-публикаций', navResearch:'Исследования', navPapers:'Публикации', profileSheetTitle:'Подробный профиль Ханьсиня Лю', close:'Закрыть', basicInfo:'Основная информация', teachingResearch:'Преподавание и исследования', achievementTitle:'Обзор исследований', tabProjects:'Проекты', tabPapers:'Избранные статьи', tabBooks:'Книги', tabOverview:'Обзор', tabRead:'Чтение в браузере', loadPages:'Загрузить все страницы', searchAction:'Поиск', searchPlaceholder:'Поиск по названию, автору, журналу или ключевому слову', clearSearch:'Очистить поиск', musicOn:'Включить музыку', musicOff:'Выключить музыку', readNow:'Читать онлайн', all:'Все', languageTitle:'Выбрать язык', languageSubtitle:'Китайский и английский — основные языки полного содержания. Другие языки переводят интерфейс и используют английские сведения о публикациях.', primaryLanguages:'Основные языки', moreLanguages:'Другие языки'},
  ar: {...enText, heroTitleA:'لنجعل المدينة', heroTitleB:'مكانًا للشفاء', scrollDown:'مرّر لأسفل', stat1:'مسارات مشاريع<br>البحث', stat2:'كتب أكاديمية', stat3:'مقالات أكاديمية', moreProfile:'الملف التفصيلي', moreAchievements:'نظرة عامة على البحث', projectsTitle:'المنشورات الأكاديمية', projectsDesc:'يمكن قراءة جميع المقالات التسعة عشر مباشرة على الويب.', paperCountLabel:'منشورات PDF', navResearch:'البحث', navPapers:'المنشورات', profileSheetTitle:'الملف التفصيلي لهانشين ليو', close:'إغلاق', basicInfo:'المعلومات الأساسية', teachingResearch:'التدريس والبحث', achievementTitle:'نظرة عامة على البحث', tabProjects:'المشاريع', tabPapers:'مقالات مختارة', tabBooks:'الكتب', tabOverview:'نظرة عامة', tabRead:'قراءة على الويب', loadPages:'تحميل جميع الصفحات', searchAction:'بحث', searchPlaceholder:'ابحث بالعنوان أو المؤلف أو المجلة أو الكلمة المفتاحية', clearSearch:'مسح البحث', musicOn:'تشغيل الموسيقى', musicOff:'إيقاف الموسيقى', readNow:'اقرأ الآن', all:'الكل', languageTitle:'اختر اللغة', languageSubtitle:'الصينية والإنجليزية هما لغتا المحتوى الكامل الرئيسيتان. اللغات الأخرى تترجم الواجهة وتستخدم معلومات النشر بالإنجليزية.', primaryLanguages:'اللغات الرئيسية', moreLanguages:'لغات أخرى'},
  hi: {...enText, heroTitleA:'शहर को', heroTitleB:'उपचार का स्थान बनाएँ', scrollDown:'नीचे जाएँ', stat1:'मुख्य शोध<br>परियोजनाएँ', stat2:'शैक्षणिक पुस्तकें', stat3:'शैक्षणिक लेख', moreProfile:'विस्तृत परिचय', moreAchievements:'शोध अवलोकन', projectsTitle:'शैक्षणिक प्रकाशन', projectsDesc:'सभी 19 लेख वेब पर सीधे पढ़े जा सकते हैं।', paperCountLabel:'PDF प्रकाशन', navResearch:'शोध', navPapers:'प्रकाशन', profileSheetTitle:'हानशिन लियू का विस्तृत परिचय', close:'बंद करें', basicInfo:'मूल जानकारी', teachingResearch:'शिक्षण और शोध', achievementTitle:'शोध अवलोकन', tabProjects:'परियोजनाएँ', tabPapers:'चयनित लेख', tabBooks:'पुस्तकें', tabOverview:'अवलोकन', tabRead:'वेब पर पढ़ें', loadPages:'सभी पृष्ठ लोड करें', searchAction:'खोजें', searchPlaceholder:'शीर्षक, लेखक, पत्रिका या कीवर्ड खोजें', clearSearch:'खोज साफ़ करें', musicOn:'संगीत चालू करें', musicOff:'संगीत बंद करें', readNow:'ऑनलाइन पढ़ें', all:'सभी', languageTitle:'भाषा चुनें', languageSubtitle:'चीनी और अंग्रेज़ी मुख्य पूर्ण-सामग्री भाषाएँ हैं। अन्य भाषाएँ इंटरफ़ेस का अनुवाद करती हैं और अंग्रेज़ी प्रकाशन जानकारी का उपयोग करती हैं।', primaryLanguages:'मुख्य भाषाएँ', moreLanguages:'अन्य भाषाएँ'},
  th: {...enText, heroTitleA:'ทำให้เมือง', heroTitleB:'เป็นพื้นที่แห่งการเยียวยา', scrollDown:'เลื่อนลง', stat1:'แนวทางโครงการ<br>วิจัย', stat2:'หนังสือวิชาการ', stat3:'บทความวิชาการ', moreProfile:'ประวัติโดยละเอียด', moreAchievements:'ภาพรวมงานวิจัย', projectsTitle:'ผลงานตีพิมพ์', projectsDesc:'บทความทั้ง 19 เรื่องอ่านได้โดยตรงบนเว็บไซต์', paperCountLabel:'ผลงาน PDF', navResearch:'งานวิจัย', navPapers:'ผลงาน', profileSheetTitle:'ประวัติโดยละเอียดของ Hanxin Liu', close:'ปิด', basicInfo:'ข้อมูลพื้นฐาน', teachingResearch:'การสอนและวิจัย', achievementTitle:'ภาพรวมงานวิจัย', tabProjects:'โครงการ', tabPapers:'บทความคัดสรร', tabBooks:'หนังสือ', tabOverview:'ภาพรวม', tabRead:'อ่านบนเว็บ', loadPages:'โหลดทุกหน้า', searchAction:'ค้นหา', searchPlaceholder:'ค้นหาชื่อเรื่อง ผู้เขียน วารสาร หรือคำสำคัญ', clearSearch:'ล้างการค้นหา', musicOn:'เปิดเพลง', musicOff:'ปิดเพลง', readNow:'อ่านออนไลน์', all:'ทั้งหมด', languageTitle:'เลือกภาษา', languageSubtitle:'ภาษาจีนและอังกฤษเป็นภาษาหลักที่มีเนื้อหาครบถ้วน ภาษาอื่นแปลส่วนติดต่อและใช้ข้อมูลสิ่งพิมพ์ภาษาอังกฤษ', primaryLanguages:'ภาษาหลัก', moreLanguages:'ภาษาเพิ่มเติม'},
  vi: {...enText, heroTitleA:'Biến thành phố', heroTitleB:'thành nơi chữa lành', scrollDown:'Cuộn xuống', stat1:'Hướng dự án<br>nghiên cứu', stat2:'Sách học thuật', stat3:'Bài báo khoa học', moreProfile:'Hồ sơ chi tiết', moreAchievements:'Tổng quan nghiên cứu', projectsTitle:'Công bố khoa học', projectsDesc:'Cả 19 bài báo có thể đọc trực tiếp trên web.', paperCountLabel:'công bố PDF', navResearch:'Nghiên cứu', navPapers:'Công bố', profileSheetTitle:'Hồ sơ chi tiết của Hanxin Liu', close:'Đóng', basicInfo:'Thông tin cơ bản', teachingResearch:'Giảng dạy và nghiên cứu', achievementTitle:'Tổng quan nghiên cứu', tabProjects:'Dự án', tabPapers:'Bài báo chọn lọc', tabBooks:'Sách', tabOverview:'Tổng quan', tabRead:'Đọc trên web', loadPages:'Tải tất cả trang', searchAction:'Tìm kiếm', searchPlaceholder:'Tìm tiêu đề, tác giả, tạp chí hoặc từ khóa', clearSearch:'Xóa tìm kiếm', musicOn:'Bật nhạc', musicOff:'Tắt nhạc', readNow:'Đọc trực tuyến', all:'Tất cả', languageTitle:'Chọn ngôn ngữ', languageSubtitle:'Tiếng Trung và tiếng Anh là hai ngôn ngữ nội dung đầy đủ chính. Các ngôn ngữ khác dịch giao diện và dùng thông tin xuất bản tiếng Anh.', primaryLanguages:'Ngôn ngữ chính', moreLanguages:'Ngôn ngữ khác'},
  id: {...enText, heroTitleA:'Jadikan kota', heroTitleB:'tempat untuk pulih', scrollDown:'Gulir ke bawah', stat1:'Jalur proyek<br>penelitian', stat2:'Buku akademik', stat3:'Artikel akademik', moreProfile:'Profil lengkap', moreAchievements:'Ikhtisar penelitian', projectsTitle:'Publikasi akademik', projectsDesc:'Semua 19 artikel dapat dibaca langsung di web.', paperCountLabel:'publikasi PDF', navResearch:'Penelitian', navPapers:'Publikasi', profileSheetTitle:'Profil lengkap Hanxin Liu', close:'Tutup', basicInfo:'Informasi dasar', teachingResearch:'Pengajaran dan penelitian', achievementTitle:'Ikhtisar penelitian', tabProjects:'Proyek', tabPapers:'Artikel pilihan', tabBooks:'Buku', tabOverview:'Ikhtisar', tabRead:'Baca di web', loadPages:'Muat semua halaman', searchAction:'Cari', searchPlaceholder:'Cari judul, penulis, jurnal, atau kata kunci', clearSearch:'Hapus pencarian', musicOn:'Nyalakan musik', musicOff:'Matikan musik', readNow:'Baca daring', all:'Semua', languageTitle:'Pilih bahasa', languageSubtitle:'Bahasa Mandarin dan Inggris adalah bahasa utama dengan konten lengkap. Bahasa lain menerjemahkan antarmuka dan menggunakan informasi publikasi bahasa Inggris.', primaryLanguages:'Bahasa utama', moreLanguages:'Bahasa lainnya'},
  ms: {...enText, heroTitleA:'Jadikan bandar', heroTitleB:'tempat penyembuhan', scrollDown:'Tatal ke bawah', stat1:'Arah projek<br>penyelidikan', stat2:'Buku akademik', stat3:'Artikel akademik', moreProfile:'Profil terperinci', moreAchievements:'Gambaran penyelidikan', projectsTitle:'Penerbitan akademik', projectsDesc:'Kesemua 19 artikel boleh dibaca terus di web.', paperCountLabel:'penerbitan PDF', navResearch:'Penyelidikan', navPapers:'Penerbitan', profileSheetTitle:'Profil terperinci Hanxin Liu', close:'Tutup', basicInfo:'Maklumat asas', teachingResearch:'Pengajaran dan penyelidikan', achievementTitle:'Gambaran penyelidikan', tabProjects:'Projek', tabPapers:'Artikel terpilih', tabBooks:'Buku', tabOverview:'Gambaran', tabRead:'Baca di web', loadPages:'Muat semua halaman', searchAction:'Cari', searchPlaceholder:'Cari tajuk, pengarang, jurnal atau kata kunci', clearSearch:'Kosongkan carian', musicOn:'Hidupkan muzik', musicOff:'Matikan muzik', readNow:'Baca dalam talian', all:'Semua', languageTitle:'Pilih bahasa', languageSubtitle:'Bahasa Cina dan Inggeris ialah bahasa utama dengan kandungan penuh. Bahasa lain menterjemah antara muka dan menggunakan maklumat penerbitan bahasa Inggeris.', primaryLanguages:'Bahasa utama', moreLanguages:'Bahasa lain'},
  tr: {...enText, heroTitleA:'Şehri', heroTitleB:'iyileşme alanına dönüştür', scrollDown:'Aşağı kaydır', stat1:'Başlıca araştırma<br>proje alanları', stat2:'Akademik kitaplar', stat3:'Akademik makaleler', moreProfile:'Ayrıntılı profil', moreAchievements:'Araştırma özeti', projectsTitle:'Akademik yayınlar', projectsDesc:'19 makalenin tamamı web üzerinden doğrudan okunabilir.', paperCountLabel:'PDF yayını', navResearch:'Araştırma', navPapers:'Yayınlar', profileSheetTitle:'Hanxin Liu ayrıntılı profili', close:'Kapat', basicInfo:'Temel bilgiler', teachingResearch:'Eğitim ve araştırma', achievementTitle:'Araştırma özeti', tabProjects:'Projeler', tabPapers:'Seçilmiş makaleler', tabBooks:'Kitaplar', tabOverview:'Genel bakış', tabRead:'Web okuma', loadPages:'Tüm sayfaları yükle', searchAction:'Ara', searchPlaceholder:'Başlık, yazar, dergi veya anahtar kelime ara', clearSearch:'Aramayı temizle', musicOn:'Müziği aç', musicOff:'Müziği kapat', readNow:'Çevrimiçi oku', all:'Tümü', languageTitle:'Dil seçin', languageSubtitle:'Çince ve İngilizce ana tam içerik dilleridir. Diğer diller arayüzü çevirir ve İngilizce yayın bilgilerini kullanır.', primaryLanguages:'Ana diller', moreLanguages:'Diğer diller'},
  nl: {...enText, heroTitleA:'Maak van de stad', heroTitleB:'een plek voor herstel', scrollDown:'Scroll omlaag', stat1:'Belangrijkste<br>onderzoeksprojecten', stat2:'Academische boeken', stat3:'Academische artikelen', moreProfile:'Uitgebreid profiel', moreAchievements:'Onderzoeksoverzicht', projectsTitle:'Academische publicaties', projectsDesc:'Alle 19 artikelen zijn direct op het web te lezen.', paperCountLabel:'PDF-publicaties', navResearch:'Onderzoek', navPapers:'Publicaties', profileSheetTitle:'Uitgebreid profiel van Hanxin Liu', close:'Sluiten', basicInfo:'Basisinformatie', teachingResearch:'Onderwijs en onderzoek', achievementTitle:'Onderzoeksoverzicht', tabProjects:'Projecten', tabPapers:'Geselecteerde artikelen', tabBooks:'Boeken', tabOverview:'Overzicht', tabRead:'Lezen op web', loadPages:'Alle pagina’s laden', searchAction:'Zoeken', searchPlaceholder:'Zoek titel, auteur, tijdschrift of trefwoord', clearSearch:'Zoekopdracht wissen', musicOn:'Muziek aan', musicOff:'Muziek uit', readNow:'Online lezen', all:'Alles', languageTitle:'Kies taal', languageSubtitle:'Chinees en Engels zijn de primaire talen met volledige inhoud. Andere talen vertalen de interface en gebruiken Engelse publicatiegegevens.', primaryLanguages:'Primaire talen', moreLanguages:'Meer talen'}
};

const heroLead = document.getElementById('heroLead');
const miniName = document.getElementById('miniName');
const miniTitle = document.getElementById('miniTitle');
const aboutDesc = document.getElementById('aboutDesc');
const profileName = document.getElementById('profileName');
const profileIntro = document.getElementById('profileIntro');
const miniFacts = document.getElementById('miniFacts');
const profileResearchGrid = document.getElementById('profileResearchGrid');
const teamLeaderCard = document.getElementById('teamLeaderCard');
const profileSheet = document.getElementById('profileSheet');
const profileSheetBody = document.getElementById('profileSheetBody');
const profileFullName = document.getElementById('profileFullName');
const profileFullIntro = document.getElementById('profileFullIntro');
const profileFullFacts = document.getElementById('profileFullFacts');
const profileDetailSection = document.getElementById('profileDetailSection');
const profileDirectionsSection = document.getElementById('profileDirectionsSection');
const libraryCarousel = document.getElementById('libraryCarousel');
const libraryTrack = document.getElementById('libraryTrack');
const librarySlides = [...document.querySelectorAll('.library-slide')];
const libraryDots = document.getElementById('libraryDots');
const libraryPrev = document.getElementById('libraryPrev');
const libraryNext = document.getElementById('libraryNext');
const libraryHistoryItems = [...document.querySelectorAll('[data-library-history-index]')];
const updateShowcase = document.getElementById('updateShowcase');
const updateShowcaseKicker = document.getElementById('updateShowcaseKicker');
const updateShowcaseTitle = document.getElementById('updateShowcaseTitle');
const updateShowcaseDate = document.getElementById('updateShowcaseDate');
const updateShowcasePlace = document.getElementById('updateShowcasePlace');
const updateShowcaseDesc = document.getElementById('updateShowcaseDesc');
const updateShowcaseArticle = document.getElementById('updateShowcaseArticle');
const updateShowcaseStream = document.getElementById('updateShowcaseStream');

const healingUpdateData = {
  'flower-letter-2026': {
    kicker:'HEALING FLORAL WORKSHOP',
    dateZh:'2026年4月26日',
    dateHant:'2026年4月26日',
    dateEn:'26 APRIL 2026',
    placeZh:'桂林理工大学 · 旅游与风景园林学院',
    placeHant:'桂林理工大學 · 旅遊與風景園林學院',
    placeEn:'College of Tourism & Landscape Architecture · Guilin University of Technology',
    titleZh:'花笺寄情，春日抚心',
    titleHant:'花箋寄情，春日撫心',
    titleEn:'Floral Notes · A Spring Healing Workshop',
    descZh:'桂林理工大学旅游与风景园林学院开展“花笺寄情，春日抚心”疗愈植物手作活动。参与者以花材、叶片与纸笺为媒介，通过选择、组合、粘贴与构图，将自然材料转化为可触摸、可保存的春日记忆。',
    descHant:'桂林理工大學旅遊與風景園林學院開展「花箋寄情，春日撫心」療癒植物手作活動。參與者以花材、葉片與紙箋為媒介，透過選擇、組合、黏貼與構圖，將自然材料轉化為可觸摸、可保存的春日記憶。',
    descEn:'The College of Tourism & Landscape Architecture at Guilin University of Technology hosted a spring plant-craft workshop using flowers, leaves and paper as tactile materials for calm, focused making.',
    sectionsZh:[
      {title:'以植物为媒介的低门槛疗愈体验',body:'活动围绕真实花材与叶片展开。参与者在桌面上完成挑选、整理、配色和组合，在反复观察与手工操作中把注意力放回材料本身，让植物的形态、色彩与触感成为连接自然和日常情绪的媒介。'},
      {title:'从花材选择到个人作品',body:'不同参与者形成了各自的花笺与信封构图：有的强调综合色彩与层次，有的保留枝叶的自然走势。作品不是统一模板的复制，而是将个人偏好、春日植物与手作过程共同留存在一张可以带走的纸笺中。'}
    ],
    sectionsHant:[
      {title:'以植物為媒介的低門檻療癒體驗',body:'活動圍繞真實花材與葉片展開。參與者在桌面上完成挑選、整理、配色和組合，在反覆觀察與手工操作中把注意力放回材料本身，讓植物的形態、色彩與觸感成為連接自然和日常情緒的媒介。'},
      {title:'從花材選擇到個人作品',body:'不同參與者形成了各自的花箋與信封構圖：有的強調综合色彩與層次，有的保留枝葉的自然走勢。作品不是統一模板的複製，而是將個人偏好、春日植物與手作過程共同留存在一張可以帶走的紙箋中。'}
    ],
    sectionsEn:[
      {title:'A low-threshold healing experience through plants',body:'Participants selected, arranged and composed real flowers and leaves. Repeated observation and careful handwork shifted attention toward colour, texture and form, turning natural materials into a direct everyday connection with nature.'},
      {title:'From material selection to personal composition',body:'Each participant produced a different floral note or envelope composition. Rather than copying a fixed template, the works preserved individual preferences, seasonal plant material and the process of making in a small object that could be taken away.'}
    ],
    images:[
      'assets/updates/flower-letter-2026/01.webp',
      'assets/updates/flower-letter-2026/02.webp',
      'assets/updates/flower-letter-2026/03.webp',
      'assets/updates/flower-letter-2026/04.webp',
      'assets/updates/flower-letter-2026/05.webp'
    ],
    captionsZh:['活动现场：围绕花材与纸笺进行植物手作','不同参与者完成的花笺与植物构图','专注于花材选择、粘贴与细部组合','从参考图像到个人花笺作品的制作过程','手部操作与花材细节'],
    captionsHant:['活動現場：圍繞花材與紙箋進行植物手作','不同參與者完成的花箋與植物構圖','專注於花材選擇、黏貼與細部組合','從參考圖像到個人花箋作品的製作過程','手部操作與花材細節'],
    captionsEn:['Workshop setting with flowers and paper craft','Floral compositions created by participants','Focused selection and arrangement of plant material','From visual reference to a personal floral note','Hands-on detail with flowers and foliage']
  },
  'ronghu-diecai-2026': {
    kicker:'RONGHU · DIECAI HEALING WORKSHOP',
    dateZh:'2026年',
    dateHant:'2026年',
    dateEn:'2026',
    placeZh:'桂林 · 榕湖—叠彩山水场景',
    placeHant:'桂林 · 榕湖—疊彩山水場景',
    placeEn:'Ronghu–Diecai landscape settings · Guilin',
    titleZh:'榕湖｜叠彩疗愈工坊体验',
    titleHant:'榕湖｜疊彩療癒工坊體驗',
    titleEn:'Ronghu | Diecai Healing Workshop Experience',
    descZh:'团队在榕湖—叠彩山水环境中开展现场疗愈工坊体验与环境感知记录。活动沿林荫、水岸与半围合空间展开，通过步行、驻足与静坐等状态，让参与者直接感受树荫、水体、视线开敞度与空间包裹感的变化。',
    descHant:'團隊在榕湖—疊彩山水環境中開展現場療癒工坊體驗與環境感知記錄。活動沿林蔭、水岸與半圍合空間展開，透過步行、駐足與靜坐等狀態，讓參與者直接感受樹蔭、水體、視線開敞度與空間包裹感的變化。',
    descEn:'The team conducted an on-site healing workshop across Ronghu and Diecai landscape settings. Walking, pausing and seated observation were used to experience shifts in shade, water proximity, visual openness and spatial enclosure.',
    sectionsZh:[
      {title:'山水场景中的具身体验',body:'现场体验不是只看风景，而是让身体进入连续变化的山水空间。参与者沿滨水步道移动，在树下、岸边和视野较开敞的位置停留；部分体验者佩戴便携式脑电采集设备，团队同步使用移动终端进行现场记录。'},
      {title:'步行、驻足与静坐的空间切换',body:'从明亮开敞的水岸到树冠覆盖、相对安静的半围合区域，体验方式在慢行、短暂停留与静坐之间切换。不同停留状态为后续比较场景感知与恢复性体验提供了更贴近日常使用方式的现场材料。'}
    ],
    sectionsHant:[
      {title:'山水場景中的具身體驗',body:'現場體驗不是只看風景，而是讓身體進入連續變化的山水空間。參與者沿濱水步道移動，在樹下、岸邊和視野較開敞的位置停留；部分體驗者佩戴便攜式腦電採集設備，團隊同步使用移動終端進行現場記錄。'},
      {title:'步行、駐足與靜坐的空間切換',body:'從明亮開敞的水岸到樹冠覆蓋、相對安靜的半圍合區域，體驗方式在慢行、短暫停留與靜坐之間切換。不同停留狀態為後續比較場景感知與恢復性體驗提供了更貼近日常使用方式的現場材料。'}
    ],
    sectionsEn:[
      {title:'Embodied experience in shanshui settings',body:'The field session treated the landscape as a sequence to move through rather than a scene to view from a distance. Participants walked along the waterfront and paused beneath trees, beside the lake and at visually open points. Some participants wore portable EEG equipment while the team recorded the session with mobile devices.'},
      {title:'Switching between walking, pausing and sitting',body:'The experience shifted from bright open waterfronts to quieter, partly enclosed areas under tree canopies. Slow walking, short pauses and seated observation provided field material that more closely reflects everyday ways of using public landscape space.'}
    ],
    images:[
      'assets/updates/ronghu-diecai-2026/01.webp',
      'assets/updates/ronghu-diecai-2026/02.webp',
      'assets/updates/ronghu-diecai-2026/03.webp',
      'assets/updates/ronghu-diecai-2026/04.webp',
      'assets/updates/ronghu-diecai-2026/05.webp'
    ],
    captionsZh:['榕湖现场：步行状态下的便携式记录','树荫下的静坐体验与设备记录','滨水空间中的静坐观察','水岸与林荫交界处的驻足体验','开敞草地环境中的便携式脑电体验'],
    captionsHant:['榕湖現場：步行狀態下的便攜式記錄','樹蔭下的靜坐體驗與設備記錄','濱水空間中的靜坐觀察','水岸與林蔭交界處的駐足體驗','開敞草地環境中的便攜式腦電體驗'],
    captionsEn:['Portable field recording during a walking session','Seated experience and recording beneath tree shade','Seated observation beside the waterfront','A pause at the threshold between water and shade','Portable EEG experience in an open lawn setting']
  }
};
const builtProjectsGrid = document.getElementById('builtProjectsGrid');
const competitionProjectsGrid = document.getElementById('competitionProjectsGrid');
const teamGrid = document.getElementById('teamGrid');
const teamMemberSheet = document.getElementById('teamMemberSheet');
const teamMemberDetailPhoto = document.getElementById('teamMemberDetailPhoto');
const teamMemberDetailCount = document.getElementById('teamMemberDetailCount');
const teamMemberDetailRole = document.getElementById('teamMemberDetailRole');
const teamMemberDetailName = document.getElementById('teamMemberDetailName');
const teamMemberDetailIntro = document.getElementById('teamMemberDetailIntro');
const teamMemberDetailSchool = document.getElementById('teamMemberDetailSchool');
const teamMemberDetailStatus = document.getElementById('teamMemberDetailStatus');
const teamMemberDetailGroup = document.getElementById('teamMemberDetailGroup');
const teamMemberSheetTitle = document.getElementById('teamMemberSheetTitle');
const teamMemberSchoolLabel = document.getElementById('teamMemberSchoolLabel');
const teamMemberStatusLabel = document.getElementById('teamMemberStatusLabel');
const teamMemberGroupLabel = document.getElementById('teamMemberGroupLabel');
const projectShowcase = document.getElementById('projectShowcase');
const projectGallery = document.getElementById('projectGallery');
const projectGalleryTrack = document.getElementById('projectGalleryTrack');
const projectGalleryCounter = document.getElementById('projectGalleryCounter');
const projectGalleryPrev = document.getElementById('projectGalleryPrev');
const projectGalleryNext = document.getElementById('projectGalleryNext');
const projectEditorialMeta = document.getElementById('projectEditorialMeta');
const projectTechnical = document.getElementById('projectTechnical');
const newsPortalContent = document.getElementById('newsPortalContent');
const newsPortalTabs = [...document.querySelectorAll('.news-portal-tab')];
const directionsGrid = profileResearchGrid;
const healingNewsItems = [
  {
    index:'01',
    date:'2026.07.24',
    tagZh:'自然联结',
    tagEn:'NATURE CONNECTEDNESS',
    titleZh:'自然联结如何支持儿童的情绪恢复与空间安全感',
    titleEn:'How nature connectedness supports children’s emotional recovery and sense of safety',
    sourceZh:'团队近期阅读 · 环境心理',
    sourceEn:'TEAM READING · ENVIRONMENTAL PSYCHOLOGY',
    summaryZh:'关注自然接触、选择感与情绪调节之间的联系，为儿童友好型疗愈空间提供新的阅读线索。',
    summaryEn:'A reading lead on the links among nature contact, perceived choice and emotional regulation in child-friendly healing spaces.',
    image:'assets/directions/02-public-space-healing-v2.webp',
    accent:'#b8d6c9'
  },
  {
    index:'02',
    date:'2026.07.21',
    tagZh:'城市健康',
    tagEn:'URBAN HEALTH',
    titleZh:'城市蓝绿空间如何影响日常心理健康',
    titleEn:'How urban blue-green spaces shape everyday mental health',
    sourceZh:'团队近期阅读 · 城市公共空间',
    sourceEn:'TEAM READING · URBAN PUBLIC SPACE',
    summaryZh:'从可达性、停留行为与恢复体验出发，持续追踪蓝绿空间促进城市健康的最新研究。',
    summaryEn:'Following recent work on accessibility, staying behavior and restorative experience in health-supportive blue-green spaces.',
    image:'assets/directions/03-ecological-garden-city-v2.webp',
    accent:'#98b96d'
  },
  {
    index:'03',
    date:'2026.07.18',
    tagZh:'方法前沿',
    tagEn:'METHOD FRONTIER',
    titleZh:'多模态感知评估正在改变恢复性环境研究',
    titleEn:'Multimodal perception assessment is reshaping restorative-environment research',
    sourceZh:'团队近期阅读 · 研究方法',
    sourceEn:'TEAM READING · RESEARCH METHODS',
    summaryZh:'聚焦图像、语言与行为数据的联合分析，探索更可解释、更高效的疗愈环境评价路径。',
    summaryEn:'Exploring interpretable and efficient evaluation through combined image, language and behavioral data.',
    image:'assets/directions/01-urban-design-v2.webp',
    accent:'#c9dc76'
  }
];
const builtProjects = [
  {
    index:'01',
    slug:'ronghu-landscape',
    kicker:'RONGHU LANDSCAPE ENHANCEMENT',
    titleZh:'榕湖景观提升设计项目',
    titleHant:'榕湖景觀提升設計項目',
    titleEn:'Ronghu Landscape Enhancement Project',
    descZh:'围绕榕湖周边公共景观节点开展提升设计，呈现建成现场、植物景观、空间界面与施工过程。',
    descHant:'圍繞榕湖周邊公共景觀節點開展提升設計，呈現建成現場、植物景觀、空間界面與施工過程。',
    descEn:'A landscape upgrade for public-space nodes around Ronghu, documented through completed views, planting, spatial interfaces and construction.',
    tagZh:'景观提升',
    tagHant:'景觀提升',
    tagEn:'LANDSCAPE ENHANCEMENT',
    images:[
      'assets/projects/ronghu/01.webp',
      'assets/projects/ronghu/02.webp',
      'assets/projects/ronghu/03.webp',
      'assets/projects/ronghu/04.webp',
      'assets/projects/ronghu/05.webp'
    ]
  },
  {
    index:'02',
    slug:'feifeng-pet-healing-classroom',
    kicker:'FEIFENG PRIMARY SCHOOL',
    titleZh:'飞凤小学宠物疗愈教室设计',
    titleHant:'飛鳳小學寵物療癒教室設計',
    titleEn:'Feifeng Primary School Pet-Assisted Healing Classroom',
    descZh:'面向儿童日常心理支持，以自然联结与人宠互动为线索，整合阅读、交流、观察和宠物友好空间。',
    descHant:'面向兒童日常心理支持，以自然聯結與人寵互動為線索，整合閱讀、交流、觀察和寵物友好空間。',
    descEn:'A daily mental-health support space for children, integrating reading, communication, observation and pet-friendly settings through nature connection and human–animal interaction.',
    tagZh:'校园疗愈',
    tagHant:'校園療癒',
    tagEn:'CAMPUS HEALING',
    images:[
      'assets/projects/feifeng/01.webp',
      'assets/projects/feifeng/02.webp',
      'assets/projects/feifeng/03.webp',
      'assets/projects/feifeng/04.webp',
      'assets/projects/feifeng/05.webp'
    ]
  },
  {
    index:'03',
    slug:'suoluo-secret-xiangshan',
    kicker:'SUOLUO SECRET REALM / XIANGSHAN RESORT',
    titleZh:'桫椤秘境——佛山大香山度假区景观提升',
    titleHant:'桫欏秘境——佛山大香山度假區景觀提升',
    titleEn:'Suoluo Secret Realm - Foshan Xiangshan Resort Landscape Enhancement',
    descZh:'以“轻介入、深体验、显生态”为设计准则，依托原生桫椤林、溪流与瀑布，串联溯溪营地门户、临水通道、瀑布体验与林下秘境节点，形成兼顾生态保护、自然教育与亲子探险的沉浸式游线。',
    descHant:'以「輕介入、深體驗、顯生態」為設計準則，依託原生桫欏林、溪流與瀑布，串聯溯溪營地門戶、臨水通道、瀑布體驗與林下秘境節點，形成兼顧生態保護、自然教育與親子探險的沉浸式遊線。',
    descEn:'Guided by minimal intervention, deep experience and visible ecology, the scheme links a creek-tracing gateway, waterside passages, waterfall experiences and forest nodes within native tree-fern habitat.',
    tagZh:'生态文旅',
    tagHant:'生態文旅',
    tagEn:'ECO-TOURISM',
    coverImage:'assets/projects/suoluo-secret/cover.webp',
    captionsZh:['桫椤秘境场景封面','概念总览','设计挑战与策略','生态保护限制','总体布局与三类游线','桫椤秘境空间结构','溯溪营地门户','临水通道提升','瀑布与水中咖啡','参与水域与坡地营地','桫椤林秘境节点'],
    captionsHant:['桫欏秘境場景封面','概念總覽','設計挑戰與策略','生態保護限制','總體佈局與三類遊線','桫欏秘境空間結構','溯溪營地門戶','臨水通道提升','瀑布與水中咖啡','參與水域與坡地營地','桫欏林秘境節點'],
    captionsEn:['Suoluo Secret Realm Cover','Concept Overview','Design Challenges and Strategy','Ecological Protection Constraints','Master Plan and Three Routes','Spatial Structure','Creek-Trekking Gateway','Waterside Passage Upgrade','Waterfall and Creek Cafe','Interactive Waters and Hillside Camp','Tree-Fern Forest Node'],
    images:[
      'assets/projects/suoluo-secret/cover.webp',
      'assets/projects/suoluo-secret/01.webp',
      'assets/projects/suoluo-secret/02.webp',
      'assets/projects/suoluo-secret/03.webp',
      'assets/projects/suoluo-secret/04.webp',
      'assets/projects/suoluo-secret/05.webp',
      'assets/projects/suoluo-secret/06.webp',
      'assets/projects/suoluo-secret/07.webp',
      'assets/projects/suoluo-secret/08.webp',
      'assets/projects/suoluo-secret/09.webp',
      'assets/projects/suoluo-secret/10.webp'
    ]
  }
];
const competitionProjects = [
  {
    index:'01',
    slug:'pixel-oasis',
    kicker:'PIXEL OASIS / COMPETITION PROJECT',
    titleZh:'竞赛项目：像素绿洲',
    titleHant:'競賽項目：像素綠洲',
    titleEn:'Competition Project: Pixel Oasis',
    descZh:'基于植物疗愈的多巴胺风格景观设计，以明快色彩、模块化场景与自然体验营造充满活力的疗愈绿洲。',
    descHant:'基於植物療癒的多巴胺風格景觀設計，以明快色彩、模組化場景與自然體驗營造充滿活力的療癒綠洲。',
    descEn:'A dopamine-style landscape concept grounded in plant-based healing, combining vivid color, modular scenes and nature experience.',
    tagZh:'竞赛项目',
    tagHant:'競賽項目',
    tagEn:'COMPETITION',
    coverImage:'assets/projects/pixel-oasis/cover-hd.webp',
    captionsZh:['像素绿洲高清竞赛展板'],
    captionsHant:['像素綠洲高清競賽展板'],
    captionsEn:['Pixel Oasis Competition Board'],
    images:['assets/projects/pixel-oasis/cover-hd.webp']
  }
];
const featureProjects = [
  {
    index:'05',
    slug:'shanshui-healing-workshop',
    kicker:'SHANSHUI HEALING WORKSHOP',
    titleZh:'山水情境疗愈工坊具身体验计划',
    titleHant:'山水情境療癒工坊具身體驗計劃',
    titleEn:'Shanshui Healing Workshop: Embodied Experience Program',
    descZh:'以桂林山水为情境，将科技疗愈融入日常生活的具身体验计划。活动时间为2026年5月6日至6月20日，地点为桂林榕湖与叠彩。',
    descHant:'以桂林山水為情境，將科技療癒融入日常生活的具身體驗計劃。活動時間為2026年5月6日至6月20日，地點為桂林榕湖與疊彩。',
    descEn:'An embodied experience program set within Guilin’s shanshui landscape, bringing technology-assisted healing into everyday life at Ronghu and Diecai from 6 May to 20 June 2026.',
    tagZh:'具身体验',
    tagHant:'具身體驗',
    tagEn:'EMBODIED EXPERIENCE',
    images:['assets/projects/shanshui-workshop/poster-2026.webp']
  }
];
const allShowcaseProjects = [...builtProjects,...competitionProjects,...featureProjects];
const portalStreams = {
  healing:[
    {
      date:'2026.07.24',
      titleZh:'自然联结如何支持儿童的情绪恢复与空间安全感',
      titleHant:'自然聯結如何支持兒童的情緒恢復與空間安全感',
      titleEn:'How nature connectedness supports children’s emotional recovery',
      summaryZh:'从自然接触、选择感与情绪调节之间的联系出发，为儿童友好型疗愈空间提供新的研究线索。',
      summaryHant:'從自然接觸、選擇感與情緒調節之間的聯繫出發，為兒童友好型療癒空間提供新的研究線索。',
      summaryEn:'A research lead on nature contact, perceived choice and emotional regulation in child-friendly healing spaces.',
      image:'assets/directions/02-public-space-healing-v2.webp',
      action:{type:'profile',section:'directions'}
    },
    {
      date:'2026.06.20',
      titleZh:'山水情境疗愈工坊：让科技疗愈融入日常生活',
      titleHant:'山水情境療癒工坊：讓科技療癒融入日常生活',
      titleEn:'Shanshui Healing Workshop: technology-assisted healing in daily life',
      image:'assets/projects/shanshui-workshop/poster-2026.webp',
      action:{type:'project',target:'shanshui-healing-workshop'}
    },
    {
      date:'2026.05.18',
      titleZh:'榕湖公共景观节点中的恢复性空间实践',
      titleHant:'榕湖公共景觀節點中的恢復性空間實踐',
      titleEn:'Restorative spatial practice at Ronghu’s public landscape nodes',
      image:'assets/projects/ronghu/01.webp',
      action:{type:'project',target:'ronghu-landscape'}
    },
    {
      date:'2026.04.26',
      titleZh:'飞凤小学宠物疗愈教室：自然联结与日常心理支持',
      titleHant:'飛鳳小學寵物療癒教室：自然聯結與日常心理支持',
      titleEn:'Feifeng healing classroom: nature connection and daily support',
      image:'assets/projects/feifeng/01.webp',
      action:{type:'project',target:'feifeng-pet-healing-classroom'}
    },
    {
      date:'2026.03.12',
      titleZh:'古典园林与私密活动：恢复性效应研究新阅读',
      titleHant:'古典園林與私密活動：恢復性效應研究新閱讀',
      titleEn:'Classical gardens and privacy-driven activities: a restorative reading',
      image:'pages/fpubh-2024/page-001.webp',
      action:{type:'paper',target:'fpubh-2024'}
    },
    {
      date:'2026.02.08',
      titleZh:'城市蓝绿空间如何影响日常心理健康',
      titleHant:'城市藍綠空間如何影響日常心理健康',
      titleEn:'How urban blue-green space shapes everyday mental health',
      image:'assets/directions/03-ecological-garden-city-v2.webp',
      action:{type:'profile',section:'directions'}
    }
  ],
  team:[
    {
      date:'2026.07.28',
      titleZh:'桫椤秘境项目内容上线：轻介入、深体验、显生态',
      titleHant:'桫欏秘境項目內容上線：輕介入、深體驗、顯生態',
      titleEn:'Suoluo Secret Realm published: minimal intervention, deep experience',
      summaryZh:'团队完成佛山大香山度假区景观提升方案的网页整理，以原生桫椤林、溪流与瀑布构建沉浸式生态游线。',
      summaryHant:'團隊完成佛山大香山度假區景觀提升方案的網頁整理，以原生桫欏林、溪流與瀑布構建沉浸式生態遊線。',
      summaryEn:'The Xiangshan Resort landscape proposal is now presented online as an immersive ecological route through native tree-fern habitat.',
      image:'assets/projects/suoluo-secret/cover.webp',
      action:{type:'project',target:'suoluo-secret-xiangshan'}
    },
    {
      date:'2026.07.22',
      titleZh:'“像素绿洲”高清竞赛展板完成更新',
      titleHant:'「像素綠洲」高清競賽展板完成更新',
      titleEn:'Pixel Oasis high-resolution competition board updated',
      image:'assets/projects/pixel-oasis/cover-hd.webp',
      action:{type:'project',target:'pixel-oasis'}
    },
    {
      date:'2026.07.16',
      titleZh:'团队成员页面更新：七位研究生完整介绍上线',
      titleHant:'團隊成員頁面更新：七位研究生完整介紹上線',
      titleEn:'Team page updated with seven postgraduate profiles',
      image:'assets/team/han-zhuang.webp',
      action:{type:'section',target:'team'}
    },
    {
      date:'2026.07.08',
      titleZh:'刘韩昕老师全屏个人简介与三项研究方向上线',
      titleHant:'劉韓昕老師全屏個人簡介與三項研究方向上線',
      titleEn:'Hanxin Liu’s full-screen profile and three research directions launched',
      image:'assets/portrait.webp',
      action:{type:'profile',section:'top'}
    },
    {
      date:'2026.06.30',
      titleZh:'19篇论文成果完成网页化阅读整理',
      titleHant:'19篇論文成果完成網頁化閱讀整理',
      titleEn:'Nineteen research papers prepared for web-based reading',
      image:'pages/baozhuo-2021/page-001.webp',
      action:{type:'paper',target:'baozhuo-2021'}
    },
    {
      date:'2026.06.18',
      titleZh:'榕湖景观提升项目阶段资料归档',
      titleHant:'榕湖景觀提升項目階段資料歸檔',
      titleEn:'Ronghu landscape project materials archived',
      image:'assets/projects/ronghu/03.webp',
      action:{type:'project',target:'ronghu-landscape'}
    }
  ]
};

const projectEditorialData = {
  'ronghu-landscape':{
    year:'2026',locationZh:'中国 · 桂林 · 榕湖',locationHant:'中國 · 桂林 · 榕湖',locationEn:'Ronghu, Guilin, China',
    statusZh:'设计实践',statusHant:'設計實踐',statusEn:'Design Practice',
    sectionsZh:[
      {title:'从湖岸日常出发',body:'项目从榕湖周边既有公共空间的日常使用出发，梳理步行、停留、观景与交往行为，重新组织景观节点之间的关系。设计希望让更新后的空间既回应山水城市特征，也能承载居民熟悉而松弛的湖岸生活。'},
      {title:'自然界面与恢复体验',body:'通过植物层次、水岸界面、休憩设施与视线通廊的协同调整，强化人在行走与停留过程中的自然联结。连续而不过度的设计介入，使水、树影与城市生活共同构成可感知的恢复性环境。'},
      {title:'从方案走向现场',body:'项目将材料、植物与施工过程一并纳入表达，关注设计意图如何在真实场地中落地。细部控制与现场反馈共同推动公共景观从图纸转化为可使用、可维护的日常空间。'}
    ],
    sectionsEn:[
      {title:'Beginning with everyday life by the lake',body:'The project starts with walking, pausing, viewing and social activity around Ronghu, reorganizing the relationships between existing public-space nodes.'},
      {title:'Natural interfaces and restorative experience',body:'Planting layers, waterfront edges, seating and view corridors are coordinated to strengthen nature connection without overpowering the familiar lakeside setting.'},
      {title:'From proposal to site',body:'Materials, planting and construction are presented as part of the design story, showing how spatial intentions become a usable and maintainable public landscape.'}
    ]
  },
  'feifeng-pet-healing-classroom':{
    year:'2026',locationZh:'中国 · 桂林 · 飞凤小学',locationHant:'中國 · 桂林 · 飛鳳小學',locationEn:'Feifeng Primary School, Guilin, China',
    statusZh:'校园空间设计',statusHant:'校園空間設計',statusEn:'Campus Interior',
    sectionsZh:[
      {title:'面向儿童的日常心理支持',body:'项目把疗愈从一次性活动转化为校园日常环境的一部分。阅读、交流、观察与安静停留被组织在同一空间中，为儿童提供可选择、可退让、可互动的多层次使用方式。'},
      {title:'自然联结与人宠互动',body:'空间以自然材料、柔和色彩与宠物友好设施建立安全、亲近的氛围。人宠互动被视作情绪表达与社会交往的媒介，同时通过明确分区保障卫生、秩序与动物福利。'},
      {title:'小尺度空间的多重场景',body:'可调整家具与模块化界面支持课程、个体观察、小组活动和开放阅读等不同情境，使有限教室能够在日常教学与疗愈活动之间灵活转换。'}
    ],
    sectionsEn:[
      {title:'Everyday mental-health support for children',body:'Healing is embedded into the everyday school environment through spaces for reading, conversation, observation and quiet retreat.'},
      {title:'Nature connection and human–animal interaction',body:'Natural materials, gentle color and pet-friendly facilities create a safe setting where interaction supports emotional expression and social connection.'},
      {title:'Multiple settings at a small scale',body:'Adjustable furniture and modular interfaces allow the classroom to shift among lessons, observation, group activity and open reading.'}
    ]
  },
  'suoluo-secret-xiangshan':{
    year:'2026',locationZh:'中国 · 佛山 · 大香山度假区',locationHant:'中國 · 佛山 · 大香山度假區',locationEn:'Xiangshan Resort, Foshan, China',
    statusZh:'景观提升方案',statusHant:'景觀提升方案',statusEn:'Landscape Proposal',
    sectionsZh:[
      {title:'轻介入，深体验，显生态',body:'项目以原生桫椤林、溪流与瀑布为最重要的场地资产。设计不追求强势造景，而是通过低干预路径、轻量设施与清晰导览，让自然本身成为空间叙事的主角。'},
      {title:'沿水展开的沉浸游线',body:'溯溪营地门户、临水通道、瀑布体验、水中咖啡与林下秘境节点被串联为层层递进的探索序列。不同年龄的访客可以在观察、涉水、停留与亲子探险中建立对场地的身体记忆。'},
      {title:'保护与使用的动态平衡',body:'方案把桫椤保护、坡地安全、雨季水文与游客承载力作为设计边界，在敏感区域减少接触，在适宜节点集中活动，让自然教育、生态保护与度假体验相互支撑。'}
    ],
    sectionsEn:[
      {title:'Minimal intervention, deep experience, visible ecology',body:'Native tree-fern forest, streams and waterfalls are treated as the site’s primary assets. Lightweight paths and facilities let nature remain the protagonist.'},
      {title:'An immersive route unfolding along water',body:'A creek gateway, waterside passages, waterfall encounters, a creek cafe and forest nodes form a progressive sequence of exploration.'},
      {title:'A dynamic balance of protection and use',body:'Tree-fern protection, slope safety, seasonal hydrology and visitor capacity define the design boundaries, concentrating activity where the landscape can support it.'}
    ]
  },
  'pixel-oasis':{
    year:'2026',locationZh:'概念场地',locationHant:'概念場地',locationEn:'Conceptual Site',
    statusZh:'竞赛方案',statusHant:'競賽方案',statusEn:'Competition Entry',
    sectionsZh:[
      {title:'植物疗愈的像素化表达',body:'“像素绿洲”将植物疗愈转译为明快、可识别的空间语言。色彩、植物与模块单元共同构成具有节奏的场景，使绿地成为能够激发情绪、参与和社交的活力媒介。'},
      {title:'可组合的多巴胺场景',body:'模块化构件支持休憩、游戏、种植与小型活动的自由组合。统一的像素逻辑让不同功能保持整体感，也为场地后续调整与生长保留弹性。'}
    ],
    sectionsEn:[
      {title:'A pixel language for plant-based healing',body:'Pixel Oasis translates plant-based healing into a vivid spatial language where color, planting and modular units create an energetic restorative setting.'},
      {title:'Combinable dopamine scenes',body:'Modular elements support resting, play, planting and small events while preserving flexibility for future change.'}
    ]
  },
  'shanshui-healing-workshop':{
    year:'2026',locationZh:'中国 · 桂林 · 榕湖与叠彩',locationHant:'中國 · 桂林 · 榕湖與疊彩',locationEn:'Ronghu & Diecai, Guilin, China',
    statusZh:'具身体验计划',statusHant:'具身體驗計劃',statusEn:'Embodied Program',
    sectionsZh:[
      {title:'把山水转化为具身体验',body:'工坊以桂林山水为真实情境，邀请参与者通过行走、观察、感知记录与互动任务重新认识日常环境。自然景观不只是观看对象，也成为情绪调节和身体认知发生的媒介。'},
      {title:'科技疗愈融入日常',body:'计划将感知反馈与体验记录融入活动过程，尝试建立从身体反应、主观感受到空间特征的关联，为疗愈环境研究与公众参与之间搭建可持续的实践路径。'}
    ],
    sectionsEn:[
      {title:'Turning shanshui into embodied experience',body:'The workshop uses Guilin’s real landscape as a setting for walking, observation, sensory recording and interaction.'},
      {title:'Technology-assisted healing in daily life',body:'Perceptual feedback and experience records connect bodily response, subjective feeling and spatial characteristics within a public-facing research program.'}
    ]
  }
};
const teamMembers = [
  {nameZh:'刘敏怡',nameEn:'Minyi Liu',degreeZh:'桂林理工大学2024级城乡规划学在读研究生',degreeHant:'桂林理工大學2024級城鄉規劃學在讀研究生',degreeEn:'2024 graduate student in Urban and Rural Planning, Guilin University of Technology',image:'assets/team/liu-minyi.webp'},
  {nameZh:'韩庄',nameEn:'Zhuang Han',degreeZh:'桂林理工大学2024级城乡规划学在读研究生',degreeHant:'桂林理工大學2024級城鄉規劃學在讀研究生',degreeEn:'2024 graduate student in Urban and Rural Planning, Guilin University of Technology',image:'assets/team/han-zhuang.webp'},
  {nameZh:'于晨阳',nameEn:'Chenyang Yu',degreeZh:'桂林理工大学2024级风景园林在读研究生',degreeHant:'桂林理工大學2024級風景園林在讀研究生',degreeEn:'2024 graduate student in Landscape Architecture, Guilin University of Technology',image:'assets/team/yu-chenyang.webp'},
  {nameZh:'潘恒恒',nameEn:'Hengheng Pan',degreeZh:'桂林理工大学2025级风景园林在读研究生',degreeHant:'桂林理工大學2025級風景園林在讀研究生',degreeEn:'2025 graduate student in Landscape Architecture, Guilin University of Technology',image:'assets/team/pan-hengheng.webp'},
  {nameZh:'蔡嘉攀',nameEn:'Jiapan Cai',degreeZh:'桂林理工大学2025级城乡规划学在读研究生',degreeHant:'桂林理工大學2025級城鄉規劃學在讀研究生',degreeEn:'2025 graduate student in Urban and Rural Planning, Guilin University of Technology',image:'assets/team/cai-jiapan.webp'},
  {nameZh:'黄田志磊',nameEn:'Tianzhilei Huang',degreeZh:'桂林理工大学2026级城乡规划学在读研究生',degreeHant:'桂林理工大學2026級城鄉規劃學在讀研究生',degreeEn:'2026 graduate student in Urban and Rural Planning, Guilin University of Technology',image:'assets/team/huang-tianzhilei.webp'},
  {nameZh:'何霁芸',nameEn:'Jiyun He',degreeZh:'桂林理工大学2024级风景园林在读研究生',degreeHant:'桂林理工大學2024級風景園林在讀研究生',degreeEn:'2024 graduate student in Landscape Architecture, Guilin University of Technology',image:'assets/team/he-jiyun.webp'}
];
const directionShowcases = [
  {
    index:'01',
    slug:'urban-design',
    titleZh:'城市设计',
    titleEn:'Urban Design',
    kicker:'URBAN DESIGN',
    image:'assets/directions/01-urban-design-v2.webp',
    accent:'#c9dc76',
    descZh:'聚焦城市空间结构、形态演变与场所更新，从街区、公共空间到城市网络，探索设计策略与空间治理的协同。',
    descEn:'Focusing on urban structure, morphological transformation and place renewal, from blocks and public spaces to citywide networks.',
    keywordsZh:['空间结构','城市更新','场所营造','设计策略'],
    keywordsEn:['Urban Structure','Urban Renewal','Place Making','Design Strategy']
  },
  {
    index:'02',
    slug:'public-space-healing',
    titleZh:'城市公共空间与疗愈环境',
    titleEn:'Urban Public Space & Healing Environments',
    kicker:'PUBLIC SPACE / HEALING',
    image:'assets/directions/02-public-space-healing-v2.webp',
    accent:'#b8d6c9',
    descZh:'关注公共空间的感知、行为与恢复性效应，通过生理反馈、环境评价与循证设计，营造支持情绪调节和日常交往的疗愈场所。',
    descEn:'Studying perception, behavior and restorative effects in public space through physiological feedback, environmental evaluation and evidence-based design.',
    keywordsZh:['恢复性环境','环境感知','行为观察','循证设计'],
    keywordsEn:['Restorative Environment','Environmental Perception','Behavior Observation','Evidence-Based Design']
  },
  {
    index:'03',
    slug:'ecological-garden-city',
    titleZh:'生态园林城市',
    titleEn:'Ecological Garden City',
    kicker:'ECOLOGICAL LANDSCAPE CITY',
    image:'assets/directions/03-ecological-garden-city-v2.webp',
    accent:'#98b96d',
    descZh:'面向山水城市与生态文明建设，研究蓝绿网络、生态修复、园林文化与低碳空间的协同转化，探索城市自然系统与公共生活的共生路径。',
    descEn:'Exploring blue-green networks, ecological restoration, garden culture and low-carbon space for symbiosis between urban natural systems and public life.',
    keywordsZh:['蓝绿网络','生态修复','园林文化','低碳韧性'],
    keywordsEn:['Blue-Green Network','Ecological Restoration','Garden Culture','Low-Carbon Resilience']
  }
];
const paperWall = document.getElementById('paperWall');
const paperCount = document.getElementById('paperCount');
const themeFilters = document.getElementById('themeFilters');
const yearFilters = document.getElementById('yearFilters');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const clearSearchButton = document.getElementById('clearSearch');
const searchSubmitButton = document.getElementById('searchSubmit');
const searchIconButton = document.getElementById('searchIconButton');
const searchFeedback = document.getElementById('searchFeedback');
const langToggle = document.getElementById('langToggle');
const langCurrent = document.getElementById('langCurrent');
const languagePrimary = document.getElementById('languagePrimary');
const languageGrid = document.getElementById('languageGrid');
const languageSearchForm = document.getElementById('languageSearchForm');
const languageSearchInput = document.getElementById('languageSearchInput');
const clearLanguageSearch = document.getElementById('clearLanguageSearch');
const languageSearchFeedback = document.getElementById('languageSearchFeedback');
const primaryLanguageLabel = document.getElementById('primaryLanguageLabel');
const moreLanguageLabel = document.getElementById('moreLanguageLabel');
const allLanguageLabel = document.getElementById('allLanguageLabel');
const allLanguageGrid = document.getElementById('allLanguageGrid');
const translationEngineNote = document.getElementById('translationEngineNote');
const translationToast = document.getElementById('translationToast');
let languageQuery = '';
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let musicEnabled = true;
let musicFadeFrame = null;
let musicLoopFadeStarted = false;
const MUSIC_VOLUME = 0.34;
const MUSIC_LOOP_FADE_SECONDS = 3;

function t(key){ return staticText[lang]?.[key] || staticText.en[key] || key; }
function usesChineseContent(){ return lang === 'zh' || lang === 'zh-Hant'; }
function usesTraditionalContent(){ return lang === 'zh-Hant'; }
function textByLang(obj, prefix){ return obj[prefix + (usesChineseContent() ? 'Zh' : 'En')] || ''; }
function currentLanguageOption(){ return LANGUAGE_OPTIONS.find(item => item.code === lang) || LANGUAGE_OPTIONS[0]; }

function updateLanguageButton(){
  if (activeGlobalLanguage) {
    const globalOption = ALL_GOOGLE_LANGUAGE_OPTIONS.find(item => item.code === activeGlobalLanguage);
    if (globalOption) {
      langCurrent.innerHTML = `<strong>${languageCodeBadge(globalOption.code)}</strong><span class="lang-main-hint">${globalOption.native}</span>`;
      langToggle.setAttribute('aria-label', `${t('languageTitle')}: ${globalOption.native}`);
      return;
    }
  }
  const option = currentLanguageOption();
  if (lang === 'zh') {
    langCurrent.innerHTML = '<strong>简</strong><span class="lang-main-hint">繁 / EN</span>';
  } else if (lang === 'zh-Hant') {
    langCurrent.innerHTML = '<strong>繁</strong><span class="lang-main-hint">简 / EN</span>';
  } else if (lang === 'en') {
    langCurrent.innerHTML = '<strong>EN</strong><span class="lang-main-hint">简 / 繁</span>';
  } else {
    langCurrent.innerHTML = `<strong>${option.short}</strong><span class="lang-main-hint">简 / 繁 / EN</span>`;
  }
  langToggle.setAttribute('aria-label', `${t('languageTitle')}: ${option.native}`);
}

function normalizeLanguageText(value){
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[\s\-_/]+/g, ' ')
    .trim();
}

function languageMatches(option, query){
  if (!query) return true;
  const haystack = normalizeLanguageText([option.native, option.english, option.aliases, option.code, option.short].join(' '));
  return normalizeLanguageText(query).split(' ').filter(Boolean).every(token => haystack.includes(token));
}

const BUILT_IN_GOOGLE_CODES = new Set(['zh','zh-CN','zh-TW','zh-Hant','en','de','fr','it','ru','vi','ar','ja','ko']);

function safeLanguageDisplayName(code, locale, fallback){
  try {
    const display = new Intl.DisplayNames([locale], {type:'language'});
    return display.of(code) || fallback;
  } catch (error) {
    return fallback;
  }
}

function expandedGoogleLanguage(option){
  const displayCode = option.code === 'zh-CN' ? 'zh-Hans' : option.code === 'zh-TW' ? 'zh-Hant' : option.code;
  return {
    ...option,
    chinese: safeLanguageDisplayName(displayCode, 'zh-CN', option.english),
    native: safeLanguageDisplayName(displayCode, displayCode, option.english)
  };
}

const ALL_GOOGLE_LANGUAGE_OPTIONS = GOOGLE_TRANSLATE_LANGUAGES.map(expandedGoogleLanguage);
const GOOGLE_LANGUAGE_OPTIONS = ALL_GOOGLE_LANGUAGE_OPTIONS.filter(option => !BUILT_IN_GOOGLE_CODES.has(option.code));
const RTL_LANGUAGE_CODES = new Set(['ar','dv','fa','he','iw','ku','ckb','ps','sd','ug','ur','yi','pa-Arab','ms-Arab']);

function languageCodeBadge(code){
  const clean = String(code).split('-')[0];
  return clean.length <= 3 ? clean.toUpperCase() : clean.slice(0,3).toUpperCase();
}

function isRightToLeftLanguage(code){
  return RTL_LANGUAGE_CODES.has(code) || /-Arab$/i.test(code);
}

function applyDocumentLanguage(code){
  const htmlCode = code === 'zh-CN' ? 'zh-Hans' : code === 'zh-TW' ? 'zh-Hant' : code;
  const rtl = isRightToLeftLanguage(code);
  document.documentElement.lang = htmlCode;
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-rtl', rtl);
}

function googleLanguageMatches(option, query){
  if (!query) return true;
  const haystack = normalizeLanguageText([option.native, option.chinese, option.english, option.code].join(' '));
  return normalizeLanguageText(query).split(' ').filter(Boolean).every(token => haystack.includes(token));
}

function showTranslationToast(message, duration=2600){
  window.clearTimeout(translationToastTimer);
  translationToast.textContent = message;
  translationToast.classList.add('show');
  translationToastTimer = window.setTimeout(() => translationToast.classList.remove('show'), duration);
}

function writeGoogleTranslationCookie(code){
  const value = code ? `/zh-CN/${code}` : '';
  const expires = code ? '' : ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = `googtrans=${value};path=/${expires};SameSite=Lax`;
  if (location.hostname && location.hostname.includes('.')) {
    document.cookie = `googtrans=${value};path=/;domain=.${location.hostname}${expires};SameSite=Lax`;
  }
}

window.googleTranslateElementInit = function(){
  if (!window.google?.translate?.TranslateElement) return;
  const includedLanguages = GOOGLE_TRANSLATE_LANGUAGES.map(item => item.code).join(',');
  new google.translate.TranslateElement({
    pageLanguage:'zh-CN',
    includedLanguages,
    autoDisplay:false,
    multilanguagePage:true
  }, 'google_translate_element');
};

function ensureGoogleTranslateEngine(){
  if (document.querySelector('.goog-te-combo')) return Promise.resolve();
  if (googleTranslateLoadPromise) return googleTranslateLoadPromise;
  googleTranslateLoadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById('google-translate-engine-script');
    const started = Date.now();
    const waitForCombo = () => {
      if (document.querySelector('.goog-te-combo')) return resolve();
      if (Date.now() - started > 12000) return reject(new Error('Google Translate timeout'));
      window.setTimeout(waitForCombo, 120);
    };
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'google-translate-engine-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => reject(new Error('Google Translate failed to load'));
      document.head.appendChild(script);
    }
    waitForCombo();
  }).catch(error => {
    googleTranslateLoadPromise = null;
    throw error;
  });
  return googleTranslateLoadPromise;
}

async function applyInPageGoogleTranslation(code){
  const option = ALL_GOOGLE_LANGUAGE_OPTIONS.find(item => item.code === code);
  if (!option) return;
  if (activeGlobalLanguage === code) {
    closeSheet('languageSheet');
    return;
  }
  if (activeGlobalLanguage && activeGlobalLanguage !== code) {
    activeGlobalLanguage = code;
    localStorage.setItem('hcl-global-language', code);
    writeGoogleTranslationCookie(code);
    window.location.reload();
    return;
  }
  lang = 'zh';
  data = window.SITE_DATA;
  localStorage.setItem('hcl-language', 'zh');
  themeFilter = zhText.all;
  yearFilter = zhText.all;
  activeGlobalLanguage = code;
  localStorage.setItem('hcl-global-language', code);
  writeGoogleTranslationCookie(code);
  applyDocumentLanguage(code);
  applyStaticText();
  applyDocumentLanguage(code);
  renderProfile();
  renderHealingNews();
  renderNewsPortal();
  renderBuiltProjects();
  renderTeam();
  renderAchievementSheet();
  renderFilters();
  renderWall();
  closeSheet('languageSheet');
  langToggle.setAttribute('aria-expanded','false');
  showTranslationToast(`${t('translating')} · ${option.native}` , 12000);
  try {
    await ensureGoogleTranslateEngine();
    const combo = document.querySelector('.goog-te-combo');
    const optionExists = [...combo.options].some(item => item.value === code);
    if (!optionExists) throw new Error(`Unsupported translation option: ${code}`);
    combo.value = code;
    combo.dispatchEvent(new Event('change', {bubbles:true}));
    applyDocumentLanguage(code);
    window.setTimeout(() => showTranslationToast(`${t('translationReady')} · ${option.native}`), 850);
  } catch (error) {
    showTranslationToast(t('translationFailed'), 4800);
  }
}

function renderLanguageSelector(){
  const makeButton = option => `
    <button class="language-option ${option.primary ? 'primary' : ''} ${!activeGlobalLanguage && option.code === lang ? 'active' : ''}" type="button" data-language="${option.code}" lang="${option.htmlLang}" ${option.rtl ? 'dir="rtl"' : ''}>
      <span class="language-badge">${option.short}</span>
      <span class="language-copy"><b>${option.native}</b><small>${option.english}</small></span>
      <i>${option.code === lang ? '✓' : '›'}</i>
    </button>`;
  const makeGoogleButton = option => `
    <button class="language-option global ${option.code === activeGlobalLanguage ? 'active' : ''}" type="button" data-global-language="${option.code}" lang="${option.code}" ${isRightToLeftLanguage(option.code) ? 'dir="rtl"' : ''}>
      <span class="language-badge">${languageCodeBadge(option.code)}</span>
      <span class="language-copy"><b>${option.native}</b><small>${option.chinese} · ${option.english}</small></span>
      <i>${option.code === activeGlobalLanguage ? '✓' : '›'}</i>
    </button>`;

  const matched = LANGUAGE_OPTIONS.filter(option => languageMatches(option, languageQuery));
  const primary = matched.filter(item => item.primary);
  const secondary = matched.filter(item => !item.primary);
  const googleMatches = GOOGLE_LANGUAGE_OPTIONS.filter(option => googleLanguageMatches(option, languageQuery));

  languagePrimary.innerHTML = primary.map(makeButton).join('');
  languageGrid.innerHTML = secondary.map(makeButton).join('');
  allLanguageGrid.innerHTML = googleMatches.map(makeGoogleButton).join('');

  primaryLanguageLabel.hidden = primary.length === 0;
  moreLanguageLabel.hidden = secondary.length === 0;
  allLanguageLabel.hidden = googleMatches.length === 0;
  translationEngineNote.hidden = googleMatches.length === 0;

  const totalMatches = matched.length + googleMatches.length;
  if (!totalMatches) {
    languageGrid.innerHTML = `<div class="language-empty">${t('languageNoResults')}</div>`;
    moreLanguageLabel.hidden = true;
    allLanguageLabel.hidden = true;
    translationEngineNote.hidden = true;
  }
  languageSearchFeedback.innerHTML = `<strong>${totalMatches}</strong> ${t('languageSearchCount')}`;
  clearLanguageSearch.hidden = !languageQuery;
}

function applyStaticText(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT') {
      el.placeholder = t(key);
    } else {
      el.innerHTML = t(key);
    }
  });
  searchInput.placeholder = t('searchPlaceholder');
  searchSubmitButton.textContent = t('searchAction');
  searchInput.setAttribute('aria-label', t('searchAria'));
  searchIconButton.setAttribute('aria-label', t('searchAction'));
  clearSearchButton.setAttribute('aria-label', t('clearSearch'));
  languageSearchInput.placeholder = t('languageSearchPlaceholder');
  languageSearchInput.setAttribute('aria-label', t('languageSearchAria'));
  languageSearchForm.querySelector('.language-search-icon').setAttribute('aria-label', t('languageSearchAria'));
  clearLanguageSearch.setAttribute('aria-label', t('clearSearch'));
  const option = currentLanguageOption();
  document.documentElement.lang = option.htmlLang;
  document.documentElement.dir = option.rtl ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-rtl', Boolean(option.rtl));
  updateLanguageButton();
  renderLanguageSelector();
  updateMusicButton();
}

function renderProfile(){
  const p = data.profile;
  if (heroLead) heroLead.textContent = textByLang(p, 'headline');
  if (miniName) miniName.textContent = usesChineseContent() ? p.nameZh : p.nameEn;
  if (miniTitle) miniTitle.textContent = textByLang(p, 'title');
  if (aboutDesc) aboutDesc.textContent = textByLang(p, 'intro');
  if (profileName) profileName.textContent = usesChineseContent() ? p.nameZh : p.nameEn;
  if (profileIntro) profileIntro.textContent = textByLang(p, 'intro');
  if (miniFacts) miniFacts.innerHTML = p.miniFacts.map(item=>`<div class="cell"><small>${usesChineseContent()?item.zh:item.en}</small><b>${usesChineseContent()?item.valueZh:item.valueEn}</b></div>`).join('');
  profileFullName.textContent = usesChineseContent() ? p.nameZh : p.nameEn;
  profileFullIntro.textContent = textByLang(p, 'intro');
  profileFullFacts.innerHTML = p.miniFacts.map(item=>`<div><small>${usesChineseContent()?item.zh:item.en}</small><b>${usesChineseContent()?item.valueZh:item.valueEn}</b></div>`).join('');
  document.getElementById('eduText').textContent = usesChineseContent() ? p.educationZh : p.educationEn;
  document.getElementById('researchAreaText').textContent = usesChineseContent() ? p.researchAreasZh : p.researchAreasEn;
  document.getElementById('basicInfoGrid').innerHTML = p.basicInfo.map(item=>`<div class="item"><small>${usesChineseContent()?item.labelZh:item.labelEn}</small><b>${usesChineseContent()?item.valueZh:item.valueEn}</b></div>`).join('');
}

function renderHealingNews(){
  const chinese = usesChineseContent();
  profileResearchGrid.innerHTML = directionShowcases.map((item,index)=>`
    <article class="news-card research-direction-card" data-direction="${index}" role="button" tabindex="0" aria-label="${chinese?'打开研究方向：':'Open research direction: '}${chinese?item.titleZh:item.titleEn}" style="--news-accent:${item.accent}">
      <figure class="news-card-media">
        <img src="${item.image}" alt="${chinese?item.titleZh:item.titleEn}" loading="${index===0?'eager':'lazy'}" decoding="async">
        <span>${item.kicker}</span>
      </figure>
      <div class="news-card-copy">
        <div class="news-card-meta"><b>ABOUT THE LAB</b><i>${item.index} / 03</i></div>
        <small>${chinese?'主要研究方向':'MAJOR RESEARCH DIRECTION'}</small>
        <h3>${chinese?item.titleZh:item.titleEn}</h3>
        <p>${chinese?item.descZh:item.descEn}</p>
        <div class="news-card-foot"><span>${chinese?'进入方向展示':'OPEN DIRECTION STORY'}</span><i aria-hidden="true">↗</i></div>
      </div>
    </article>
  `).join('');
}

let activePortalTab = 'healing';

function localizedPortalValue(item,field){
  if (usesTraditionalContent()) return item[`${field}Hant`] || item[`${field}Zh`] || '';
  if (usesChineseContent()) return item[`${field}Zh`] || '';
  return item[`${field}En`] || '';
}

function openPortalItem(item){
  if (!item?.action) return;
  if (item.action.type === 'project') openBuiltProject(item.action.target);
  if (item.action.type === 'paper') openReader(item.action.target);
  if (item.action.type === 'profile') openPersonalProfile(item.action.section || 'top');
  if (item.action.type === 'section') {
    document.getElementById(item.action.target)?.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

function renderNewsPortal({animate=false}={}){
  if (!newsPortalContent) return;
  const items = portalStreams[activePortalTab] || [];
  const featured = items[0];
  if (!featured) return;
  if (animate) newsPortalContent.classList.add('is-switching');
  newsPortalContent.innerHTML = `
    <button class="news-portal-feature" type="button" data-portal-index="0">
      <figure>
        <img src="${featured.image}" alt="${localizedPortalValue(featured,'title')}" loading="eager" decoding="async">
      </figure>
      <div class="news-portal-feature-copy">
        <small>${activePortalTab === 'healing' ? 'HEALING NEWS' : 'TEAM UPDATES'}</small>
        <h3>${localizedPortalValue(featured,'title')}</h3>
        <p>${localizedPortalValue(featured,'summary')}</p>
        <footer>
          <span aria-hidden="true">◷</span>
          <time datetime="${featured.date.replaceAll('.','-')}">${featured.date}</time>
          <b>${t('portalMore')} <i aria-hidden="true">↗</i></b>
        </footer>
      </div>
    </button>
    <div class="news-portal-list">
      ${items.slice(1).map((item,index)=>`
        <button class="news-portal-list-item" type="button" data-portal-index="${index+1}">
          <i aria-hidden="true">›</i>
          <span>${localizedPortalValue(item,'title')}</span>
          <time datetime="${item.date.replaceAll('.','-')}">${item.date}</time>
        </button>
      `).join('')}
    </div>
  `;
  newsPortalTabs.forEach(tab=>{
    const selected = tab.dataset.portalTab === activePortalTab;
    tab.classList.toggle('active',selected);
    tab.setAttribute('aria-selected',selected ? 'true' : 'false');
  });
  if (animate) {
    requestAnimationFrame(()=>requestAnimationFrame(()=>newsPortalContent.classList.remove('is-switching')));
  }
}

newsPortalTabs.forEach(tab=>tab.addEventListener('click',()=>{
  if (activePortalTab === tab.dataset.portalTab) return;
  activePortalTab = tab.dataset.portalTab;
  renderNewsPortal({animate:true});
}));
newsPortalContent?.addEventListener('click',event=>{
  const target = event.target.closest('[data-portal-index]');
  if (!target) return;
  openPortalItem((portalStreams[activePortalTab] || [])[Number(target.dataset.portalIndex)]);
});

let librarySlideIndex = 0;
let libraryAutoTimer = null;
let libraryTouchStartX = 0;
let libraryWasSwiped = false;

function setLibrarySlide(index,{animate=true,restart=true}={}){
  if (!librarySlides.length) return;
  librarySlideIndex = (index+librarySlides.length)%librarySlides.length;
  libraryTrack.style.transition = animate ? 'transform .72s cubic-bezier(.22,.78,.26,1)' : 'none';
  libraryTrack.style.transform = `translate3d(${-librarySlideIndex*100}%,0,0)`;
  librarySlides.forEach((slide,slideIndex)=>slide.classList.toggle('is-active',slideIndex===librarySlideIndex));
  libraryHistoryItems.forEach((item,itemIndex)=>{
    const active = itemIndex===librarySlideIndex;
    item.classList.toggle('is-active',active);
    item.setAttribute('aria-current',active?'true':'false');
  });
  [...libraryDots.children].forEach((dot,dotIndex)=>{
    const active = dotIndex===librarySlideIndex;
    dot.classList.toggle('active',active);
    dot.setAttribute('aria-current',active?'true':'false');
  });
  if (restart) startLibraryAutoplay();
}

function stopLibraryAutoplay(){
  if (libraryAutoTimer) window.clearInterval(libraryAutoTimer);
  libraryAutoTimer = null;
}

function startLibraryAutoplay(){
  stopLibraryAutoplay();
  if (prefersReducedMotion() || document.hidden || !librarySlides.length) return;
  libraryAutoTimer = window.setInterval(()=>setLibrarySlide(librarySlideIndex+1,{restart:false}),4300);
}

function setupLibraryCarousel(){
  if (!libraryCarousel || !librarySlides.length) return;
  libraryDots.innerHTML = librarySlides.map((_,index)=>`<button type="button" aria-label="${usesChineseContent()?`查看第${index+1}项`:`View item ${index+1}`}"></button>`).join('');
  [...libraryDots.children].forEach((dot,index)=>dot.addEventListener('click',()=>setLibrarySlide(index)));
  libraryPrev.addEventListener('click',()=>setLibrarySlide(librarySlideIndex-1));
  libraryNext.addEventListener('click',()=>setLibrarySlide(librarySlideIndex+1));
  libraryHistoryItems.forEach(item=>item.addEventListener('click',()=>{
    setLibrarySlide(Number(item.dataset.libraryHistoryIndex));
    libraryCarousel.scrollIntoView({behavior:'smooth',block:'center'});
  }));
  libraryCarousel.addEventListener('mouseenter',stopLibraryAutoplay);
  libraryCarousel.addEventListener('mouseleave',startLibraryAutoplay);
  libraryCarousel.addEventListener('focusin',stopLibraryAutoplay);
  libraryCarousel.addEventListener('focusout',event=>{
    if (!libraryCarousel.contains(event.relatedTarget)) startLibraryAutoplay();
  });
  libraryCarousel.addEventListener('touchstart',event=>{
    libraryTouchStartX = event.touches[0]?.clientX || 0;
    libraryWasSwiped = false;
    stopLibraryAutoplay();
  },{passive:true});
  libraryCarousel.addEventListener('touchend',event=>{
    const endX = event.changedTouches[0]?.clientX || libraryTouchStartX;
    const delta = endX-libraryTouchStartX;
    if (Math.abs(delta)>42) {
      libraryWasSwiped = true;
      setLibrarySlide(librarySlideIndex+(delta<0?1:-1));
      window.setTimeout(()=>{ libraryWasSwiped = false; },320);
    }
    else startLibraryAutoplay();
  },{passive:true});
  const openLibrarySlide = slide=>{
    if (libraryWasSwiped) return;
    if (slide.dataset.libraryType === 'paper') openReader(slide.dataset.libraryTarget);
    if (slide.dataset.libraryType === 'project') openBuiltProject(slide.dataset.libraryTarget);
    if (slide.dataset.libraryType === 'update') openHealingUpdate(slide.dataset.libraryTarget);
  };
  librarySlides.forEach(slide=>{
    slide.addEventListener('click',()=>openLibrarySlide(slide));
    slide.addEventListener('keydown',event=>{
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openLibrarySlide(slide);
    });
  });
  document.addEventListener('visibilitychange',()=>{
    if (document.hidden) stopLibraryAutoplay();
    else if (brandStory.hidden) startLibraryAutoplay();
  });
  setLibrarySlide(0,{animate:false,restart:false});
}

function localizedProjectValue(project,field){
  if (usesTraditionalContent()) return project[`${field}Hant`] || project[`${field}Zh`];
  if (usesChineseContent()) return project[`${field}Zh`];
  return project[`${field}En`];
}

function projectCardMarkup(project,index){
  return `
    <article class="built-project-card" data-project-slug="${project.slug}" role="button" tabindex="0" aria-label="${usesChineseContent()?'查看项目：':'View project: '}${localizedProjectValue(project,'title')}">
      <figure class="built-project-cover">
        <img src="${project.coverImage || project.images[0]}" alt="${localizedProjectValue(project,'title')}" loading="${index===0?'eager':'lazy'}" decoding="async">
        <div class="built-project-cover-top">
          <span>${localizedProjectValue(project,'tag')}</span>
        </div>
      </figure>
      <div class="built-project-copy">
        <small>${project.kicker}</small>
        <h3><span>${localizedProjectValue(project,'title')}</span></h3>
        <p>${localizedProjectValue(project,'desc')}</p>
        <div><span>${usesChineseContent()?'查看完整项目':'VIEW FULL PROJECT'}</span><i aria-hidden="true">↗</i></div>
      </div>
    </article>
  `;
}

function wireProjectCards(container){
  container.querySelectorAll('.built-project-card').forEach(card=>{
    const open = ()=>openBuiltProject(card.dataset.projectSlug);
    card.addEventListener('click',open);
    card.addEventListener('keydown',event=>{
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      open();
    });
  });
}

function renderBuiltProjects(){
  builtProjectsGrid.innerHTML = builtProjects.map(projectCardMarkup).join('');
  competitionProjectsGrid.innerHTML = competitionProjects.map(projectCardMarkup).join('');
  wireProjectCards(builtProjectsGrid);
  wireProjectCards(competitionProjectsGrid);
}


function localizedUpdateField(item,key){
  if (usesTraditionalContent()) return item[`${key}Hant`] || item[`${key}Zh`] || item[`${key}En`] || '';
  if (usesChineseContent()) return item[`${key}Zh`] || item[`${key}En`] || '';
  return item[`${key}En`] || item[`${key}Zh`] || '';
}

function localizedUpdateArray(item,key){
  if (usesTraditionalContent()) return item[`${key}Hant`] || item[`${key}Zh`] || item[`${key}En`] || [];
  if (usesChineseContent()) return item[`${key}Zh`] || item[`${key}En`] || [];
  return item[`${key}En`] || item[`${key}Zh`] || [];
}

function renderHealingUpdate(item){
  if (!item || !updateShowcase) return;
  const title = localizedUpdateField(item,'title');
  const sections = localizedUpdateArray(item,'sections');
  const captions = localizedUpdateArray(item,'captions');
  updateShowcaseKicker.textContent = item.kicker || 'HEALING UPDATE';
  updateShowcaseTitle.textContent = title;
  updateShowcaseDate.textContent = localizedUpdateField(item,'date');
  updateShowcasePlace.textContent = localizedUpdateField(item,'place');
  updateShowcaseDesc.textContent = localizedUpdateField(item,'desc');

  const sectionIndexes = new Map();
  sections.forEach((section,index)=>{
    const insertion = sections.length === 1 ? 0 : Math.round(index * Math.max(1,item.images.length-1) / Math.max(1,sections.length-1));
    if (!sectionIndexes.has(insertion)) sectionIndexes.set(insertion,[]);
    sectionIndexes.get(insertion).push({section,index});
  });

  const storyMarkup = (section,index)=>`
    <section class="project-story-section update-story-section">
      <small>HEALING NOTE / ${String(index+1).padStart(2,'0')}</small>
      <h3>${section.title}</h3>
      <p>${section.body}</p>
    </section>
  `;

  updateShowcaseStream.innerHTML = item.images.map((image,index)=>`
    ${(sectionIndexes.get(index) || []).map(entry=>storyMarkup(entry.section,entry.index)).join('')}
    <figure class="project-article-figure update-article-figure">
      <img src="${image}" alt="${title} · ${index+1}" loading="${index===0?'eager':'lazy'}" decoding="async">
      <figcaption><span>${captions[index] || (usesChineseContent()?'活动现场':'Workshop image')}</span><i>${String(index+1).padStart(2,'0')} / ${String(item.images.length).padStart(2,'0')}</i></figcaption>
    </figure>
  `).join('');
  updateShowcaseArticle.scrollTop = 0;
}

function openHealingUpdate(slug){
  const item = healingUpdateData[slug];
  if (!item || !updateShowcase) return;
  renderHealingUpdate(item);
  updateShowcase.dataset.updateSlug = slug;
  updateShowcase.hidden = false;
  updateShowcase.setAttribute('aria-hidden','false');
  document.body.classList.add('project-showcase-open');
  requestAnimationFrame(()=>{
    updateShowcase.classList.add('open');
    window.setTimeout(()=>showGestureCue(
      updateShowcase,
      `page-healing-update-${slug}-vertical`,
      {coach:true,direction:'vertical',label:usesChineseContent()?'向上滑动查看完整动态':'SWIPE UP FOR THE FULL UPDATE'}
    ),340);
  });
  pushLayerHistory('healing-update');
}

function closeHealingUpdate(options={}){
  if (!updateShowcase || updateShowcase.hidden) return;
  if (!options.fromHistory && requestLayerHistoryDismiss('healing-update')) return;
  updateShowcase.classList.remove('open');
  document.body.classList.remove('project-showcase-open');
  window.setTimeout(()=>{
    updateShowcase.hidden = true;
    updateShowcase.setAttribute('aria-hidden','true');
    updateShowcaseStream.innerHTML = '';
    updateShowcase.removeAttribute('data-update-slug');
  },240);
}

document.querySelectorAll('[data-update-close]').forEach(button=>button.addEventListener('click',closeHealingUpdate));

let currentBuiltProject = null;
let currentProjectImageIndex = 0;

function localizedProjectCaptions(project){
  if (usesTraditionalContent()) return project.captionsHant || project.captionsZh || [];
  if (usesChineseContent()) return project.captionsZh || [];
  return project.captionsEn || [];
}

function localizedEditorialSections(info){
  return usesChineseContent() ? (info.sectionsZh || []) : (info.sectionsEn || []);
}

function renderProjectArticle(project){
  const info = projectEditorialData[project.slug] || {};
  const sections = localizedEditorialSections(info);
  const captions = localizedProjectCaptions(project);
  const title = localizedProjectValue(project,'title');
  const location = localizedProjectValue(info,'location') || (usesChineseContent() ? '项目场地' : 'Project Site');
  const status = localizedProjectValue(info,'status') || localizedProjectValue(project,'tag');
  document.getElementById('projectShowcaseKicker').textContent = `${project.kicker}`;
  document.getElementById('projectShowcaseTitle').textContent = title;
  document.getElementById('projectShowcaseDesc').textContent = localizedProjectValue(project,'desc');
  projectEditorialMeta.innerHTML = `
    <div><small>${usesChineseContent()?'类型':'TYPE'}</small><b>${localizedProjectValue(project,'tag')}</b></div>
    <div><small>${usesChineseContent()?'地点':'LOCATION'}</small><b>${location}</b></div>
    <div><small>${usesChineseContent()?'阶段':'STATUS'}</small><b>${status}</b></div>
    <div><small>${usesChineseContent()?'年份 / 图像':'YEAR / IMAGES'}</small><b>${info.year || '2026'} · ${String(project.images.length).padStart(2,'0')}</b></div>
  `;

  const sectionIndexes = new Map();
  sections.forEach((section,index)=>{
    const insertion = sections.length === 1 ? 0 : Math.round(index * Math.max(1,project.images.length-1) / Math.max(1,sections.length-1));
    if (!sectionIndexes.has(insertion)) sectionIndexes.set(insertion,[]);
    sectionIndexes.get(insertion).push({section,index});
  });
  const storyMarkup = (section,index)=>`
    <section class="project-story-section">
      <small>DESIGN NARRATIVE / ${String(index+1).padStart(2,'0')}</small>
      <h3>${section.title}</h3>
      <p>${section.body}</p>
    </section>
  `;
  projectGalleryTrack.innerHTML = project.images.map((image,index)=>`
    ${(sectionIndexes.get(index) || []).map(item=>storyMarkup(item.section,item.index)).join('')}
    <figure class="project-article-figure">
      <img src="${image}" alt="${title} · ${index+1}" loading="${index===0?'eager':'lazy'}" decoding="async">
      <figcaption><span>${captions[index] || (usesChineseContent()?'项目图像':'Project Image')}</span><i>${String(index+1).padStart(2,'0')} / ${String(project.images.length).padStart(2,'0')}</i></figcaption>
    </figure>
  `).join('');

  projectTechnical.innerHTML = `
    <small>PROJECT DATA</small>
    <h3>${usesChineseContent()?'项目信息':'Project Information'}</h3>
    <dl>
      <div><dt>${usesChineseContent()?'项目名称':'Project'}</dt><dd>${title}</dd></div>
      <div><dt>${usesChineseContent()?'项目类型':'Type'}</dt><dd>${localizedProjectValue(project,'tag')}</dd></div>
      <div><dt>${usesChineseContent()?'项目地点':'Location'}</dt><dd>${location}</dd></div>
      <div><dt>${usesChineseContent()?'项目阶段':'Status'}</dt><dd>${status}</dd></div>
      <div><dt>${usesChineseContent()?'设计年份':'Year'}</dt><dd>${info.year || '2026'}</dd></div>
      <div><dt>${usesChineseContent()?'研究团队':'Team'}</dt><dd>${usesChineseContent()?'刘韩昕老师疗愈城市研究团队':'Hanxin Liu · Healing City Research Team'}</dd></div>
    </dl>
  `;
  projectGalleryCounter.textContent = `${String(currentProjectImageIndex+1).padStart(2,'0')} / ${String(allShowcaseProjects.length).padStart(2,'0')}`;
  projectGalleryPrev.disabled = currentProjectImageIndex === 0;
  projectGalleryNext.disabled = currentProjectImageIndex === allShowcaseProjects.length-1;
  projectGallery.scrollTop = 0;
}

function setProjectGalleryIndex(index){
  const nextIndex = Math.max(0,Math.min(allShowcaseProjects.length-1,index));
  if (nextIndex === currentProjectImageIndex && currentBuiltProject) return;
  currentProjectImageIndex = nextIndex;
  currentBuiltProject = allShowcaseProjects[currentProjectImageIndex];
  renderProjectArticle(currentBuiltProject);
}

function openBuiltProject(slug){
  currentProjectImageIndex = allShowcaseProjects.findIndex(project=>project.slug===slug);
  currentBuiltProject = allShowcaseProjects[currentProjectImageIndex];
  if (!currentBuiltProject) return;
  renderProjectArticle(currentBuiltProject);
  projectShowcase.hidden = false;
  projectShowcase.setAttribute('aria-hidden','false');
  document.body.classList.add('project-showcase-open');
  requestAnimationFrame(()=>{
    projectShowcase.classList.add('open');
    window.setTimeout(()=>showGestureCue(
      projectShowcase,
      'page-project-detail-vertical',
      {coach:true,direction:'vertical',label:usesChineseContent()?'向上滑动查看完整项目':'SWIPE UP FOR THE FULL PROJECT'}
    ),340);
  });
  pushLayerHistory('built-project');
}

function closeBuiltProject(options={}){
  if (projectShowcase.hidden) return;
  if (!options.fromHistory && requestLayerHistoryDismiss('built-project')) return;
  projectShowcase.classList.remove('open');
  document.body.classList.remove('project-showcase-open');
  window.setTimeout(()=>{
    projectShowcase.hidden = true;
    projectShowcase.setAttribute('aria-hidden','true');
    projectGalleryTrack.innerHTML = '';
    projectEditorialMeta.innerHTML = '';
    projectTechnical.innerHTML = '';
    currentBuiltProject = null;
  },240);
}

document.querySelectorAll('[data-project-close]').forEach(button=>button.addEventListener('click',closeBuiltProject));
projectGalleryPrev?.addEventListener('click',()=>setProjectGalleryIndex(currentProjectImageIndex-1));
projectGalleryNext?.addEventListener('click',()=>setProjectGalleryIndex(currentProjectImageIndex+1));

function renderTeam(){
  const leaderCard = teamGrid.querySelector('#teamLeaderCard') || teamLeaderCard;
  teamGrid.innerHTML = '';
  if (leaderCard) teamGrid.append(leaderCard);

  const groups = [
    {labelZh:'研究小组',labelHant:'研究小組',labelEn:'RESEARCH GROUP',members:[0,1,2]},
    {labelZh:'研究小组',labelHant:'研究小組',labelEn:'RESEARCH GROUP',members:[3,4]},
    {labelZh:'研究小组',labelHant:'研究小組',labelEn:'RESEARCH GROUP',members:[6,5]}
  ];
  const groupLabel = group=>usesTraditionalContent()?group.labelHant:(usesChineseContent()?group.labelZh:group.labelEn);
  const memberMarkup = memberIndex=>{
    const member = teamMembers[memberIndex];
    const displayIndex = String(memberIndex+2).padStart(2,'0');
    return `
      <article class="team-member-card team-member-expandable">
        <button class="team-member-avatar team-avatar-button" type="button" data-team-profile="${memberIndex}" aria-label="${usesChineseContent()?'打开团队成员介绍：':'Open team member profile: '}${usesChineseContent()?member.nameZh:member.nameEn}">
          <img src="${member.image}" alt="${usesChineseContent()?member.nameZh:member.nameEn}" loading="lazy" decoding="async">
        </button>
        <div class="team-member-copy">
          <h4>${usesChineseContent()?member.nameZh:member.nameEn}</h4>
          <small>${usesTraditionalContent()?member.degreeHant:(usesChineseContent()?member.degreeZh:member.degreeEn)}</small>
        </div>
      </article>`;
  };

  teamGrid.insertAdjacentHTML('beforeend',groups.map((group,groupIndex)=>`
    <section class="team-subgroup team-subgroup-${groupIndex+1}" aria-label="${groupLabel(group)}" data-group-size="${group.members.length}">
      <div class="team-subgroup-head"><span>${groupLabel(group)}</span></div>
      <div class="team-subgroup-grid">${group.members.map(memberMarkup).join('')}</div>
    </section>
  `).join(''));
}

function renderAchievementSheet(){
  document.getElementById('projectList').innerHTML = data.projects.map(p=>`
    <div class="list-row">
      <b>${usesChineseContent()?p.titleZh:p.titleEn}</b>
      <small>${p.year} · ${usesChineseContent()?p.sourceZh:p.sourceEn} · ${usesChineseContent()?p.typeZh:p.typeEn}</small>
      <small>${p.code} · ${usesChineseContent()?p.periodZh:p.periodEn} · ${p.fund} · ${usesChineseContent()?p.statusZh:p.statusEn}</small>
    </div>`).join('');
  document.getElementById('paperListPanel').innerHTML = data.papersList.map(p=>`
    <div class="list-row">
      <b>${usesChineseContent()?p.titleZh:p.titleEn}</b>
      <small>${p.year} · ${usesChineseContent()?p.typeZh:p.typeEn}</small>
    </div>`).join('');
  document.getElementById('bookGrid').innerHTML = data.books.map(b=>`
    <div class="book-card">
      <img src="${b.cover}" alt="${usesChineseContent()?b.titleZh:b.titleEn}">
      <h4>${usesChineseContent()?b.titleZh:b.titleEn}</h4>
      <p>${b.year} · ${usesChineseContent()?b.publisherZh:b.publisherEn}<br>${usesChineseContent()?b.roleZh:b.roleEn}</p>
    </div>`).join('');
}

function uniqueThemes(){ return [t('all'), ...new Set(data.papers.map(p=> usesChineseContent()?p.themeZh:p.themeEn))]; }
function uniqueYears(){
  const requestedOrder = ['2025','2024','2023','2022','2021','2020','2019','2017','2016'];
  return [t('all'), ...requestedOrder];
}

function renderFilters(){
  themeFilters.innerHTML = uniqueThemes().map(theme=>`<button class="chip ${theme===themeFilter?'active':''}" data-theme="${theme}">${theme}</button>`).join('');
  yearFilters.innerHTML = uniqueYears().map(year=>`<button class="chip ${year===yearFilter?'active':''}" data-year="${year}">${year}</button>`).join('');
}

function normalizeSearchText(value){
  return String(value || '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[“”‘’《》〈〉【】\[\]（）()，,。.!！?？:：;；·—_\-\/\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSearchTokens(value){
  return normalizeSearchText(value).split(' ').filter(Boolean);
}

function paperSearchText(p){
  return normalizeSearchText([
    p.titleZh, p.titleEn, p.fullTitleZh, p.fullTitleEn,
    p.authorsZh, p.authorsEn, p.themeZh, p.themeEn,
    p.venueZh, p.venueEn, p.descZh, p.descEn,
    p.year, p.file
  ].join(' '));
}

function filterPapers(){
  const tokens = getSearchTokens(keyword);
  return data.papers
    .map((paper,sourceIndex)=>({paper,sourceIndex}))
    .filter(({paper:p})=>{
      const themeName = usesChineseContent()?p.themeZh:p.themeEn;
      const passTheme = themeFilter === t('all') || themeName === themeFilter;
      const passYear = yearFilter === t('all') || p.year === yearFilter;
      const hay = paperSearchText(p);
      const passKey = tokens.length === 0 || tokens.every(token => hay.includes(token));
      return passTheme && passYear && passKey;
    })
    .sort((a,b)=>{
      const yearDifference = (Number.parseInt(b.paper.year,10)||0) - (Number.parseInt(a.paper.year,10)||0);
      return yearDifference || a.sourceIndex-b.sourceIndex;
    })
    .map(({paper})=>paper);
}

function resetSearch(){
  keyword = '';
  themeFilter = t('all');
  yearFilter = t('all');
  searchInput.value = '';
  renderFilters();
  renderWall();
  searchInput.focus({preventScroll:true});
}

function updateSearchFeedback(resultCount){
  clearSearchButton.hidden = keyword.length === 0;
  const hasFilters = themeFilter !== t('all') || yearFilter !== t('all');
  if (!keyword && !hasFilters) {
    searchFeedback.innerHTML = usesChineseContent()
      ? (usesTraditionalContent() ? `共收錄 <strong>${data.papers.length}</strong> 篇論文，可依標題、作者、期刊、年份或關鍵詞搜尋。` : `共收录 <strong>${data.papers.length}</strong> 篇论文，可按标题、作者、期刊、年份或关键词检索。`)
      : `<strong>${data.papers.length}</strong> publications. Search by title, author, journal, year or keyword.`;
    return;
  }
  const queryPart = keyword ? `“${keyword}”` : (usesTraditionalContent() ? '目前篩選條件' : (usesChineseContent() ? '当前筛选条件' : 'Current filters'));
  if (resultCount > 0) {
    searchFeedback.innerHTML = usesChineseContent()
      ? (usesTraditionalContent() ? `${queryPart} 找到 <strong>${resultCount}</strong> 篇論文。` : `${queryPart} 找到 <strong>${resultCount}</strong> 篇论文。`)
      : `${queryPart}: <strong>${resultCount}</strong> result${resultCount === 1 ? '' : 's'}.`;
  } else {
    searchFeedback.innerHTML = usesChineseContent()
      ? (usesTraditionalContent() ? `${queryPart} 暫無結果。<button type="button" class="reset-search" id="resetSearchInline">清除條件</button>` : `${queryPart} 暂无结果。<button type="button" class="reset-search" id="resetSearchInline">清除条件</button>`)
      : `No results for ${queryPart}.<button type="button" class="reset-search" id="resetSearchInline">Clear filters</button>`;
    document.getElementById('resetSearchInline')?.addEventListener('click', resetSearch);
  }
}

function renderWall(){
  const list = filterPapers();
  paperCount.textContent = data.papers.length;
  updateSearchFeedback(list.length);

  if (list.length === 0) {
    paperWall.innerHTML = `<div class="search-empty"><b>${usesTraditionalContent() ? '沒有找到符合條件的論文' : (usesChineseContent() ? '没有找到匹配论文' : 'No matching publications')}</b><p>${usesTraditionalContent() ? '可嘗試減少關鍵詞或切換至「全部」主題。' : (usesChineseContent() ? '可以尝试减少关键词或切换到“全部”主题。' : 'Try fewer keywords or choose All themes.')}</p><button type="button" id="resetSearchEmpty">${usesTraditionalContent() ? '清除搜尋與篩選' : (usesChineseContent() ? '清除搜索与筛选' : 'Clear search and filters')}</button></div>`;
    document.getElementById('resetSearchEmpty')?.addEventListener('click', resetSearch);
    return;
  }

  const showFeatured = themeFilter === t('all') && yearFilter === t('all') && keyword.length === 0;
  paperWall.innerHTML = list.map((p,idx)=>`
    <article class="paper-card ${idx === 0 && showFeatured ? 'featured' : ''}" data-slug="${p.slug}" role="button" tabindex="0" aria-label="${usesChineseContent()?'阅读：':'Read: '}${usesChineseContent()?p.fullTitleZh:p.fullTitleEn}">
      <div class="paper-thumb">
        <img src="${p.thumb}?v=20260723-hd-thumbnails-v1" alt="${usesChineseContent()?p.fullTitleZh:p.fullTitleEn}" loading="${idx === 0 ? 'eager' : 'lazy'}" decoding="async">
        <span class="theme-pill">${usesChineseContent()?p.themeZh:p.themeEn}</span>
        <b class="paper-year">${p.year}</b>
      </div>
      <div class="paper-body">
        <small>${usesChineseContent()?p.authorsZh:p.authorsEn}</small>
        <h3>${usesChineseContent()?p.fullTitleZh:p.fullTitleEn}</h3>
        <p>${usesChineseContent()?p.descZh:p.descEn}</p>
      </div>
      <button class="paper-action" type="button" tabindex="-1"><span>${t('readNow')}</span><i aria-hidden="true">↗</i></button>
    </article>`).join('');
  paperWall.querySelectorAll('.paper-card').forEach(card=>{
    card.addEventListener('click',()=>openReader(card.dataset.slug));
    card.addEventListener('keydown',event=>{
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openReader(card.dataset.slug);
    });
  });
}

function setLanguage(code){
  if (!supportedLanguages.has(code)) {
    closeSheet('languageSheet');
    return;
  }
  const leavingGlobalTranslation = Boolean(activeGlobalLanguage);
  activeGlobalLanguage = '';
  localStorage.removeItem('hcl-global-language');
  writeGoogleTranslationCookie('');
  lang = code;
  data = lang === 'zh-Hant' ? (window.SITE_DATA_TW || window.SITE_DATA) : window.SITE_DATA;
  localStorage.setItem('hcl-language', lang);
  if (leavingGlobalTranslation) {
    window.location.reload();
    return;
  }
  themeFilter = t('all');
  yearFilter = t('all');
  applyStaticText();
  renderProfile();
  renderHealingNews();
  renderNewsPortal();
  renderBuiltProjects();
  renderTeam();
  renderAchievementSheet();
  renderFilters();
  renderWall();
  closeSheet('languageSheet');
}

let readerReturnSlug = '';
let readerClosing = false;

function returnToOpenedPaperCard(){
  const slug = readerReturnSlug;
  if (!slug) return;
  window.requestAnimationFrame(()=>{
    const card = [...document.querySelectorAll('.paper-card')].find(item=>item.dataset.slug===slug);
    const target = card || document.getElementById('paperWall') || document.getElementById('papers');
    if (!target) return;
    target.scrollIntoView({behavior:'smooth',block:card?'center':'start'});
    if (card) {
      card.classList.remove('reader-return-target');
      void card.offsetWidth;
      card.classList.add('reader-return-target');
      window.setTimeout(()=>{
        try { card.focus({preventScroll:true}); } catch (error) { card.focus(); }
      },420);
      window.setTimeout(()=>card.classList.remove('reader-return-target'),1600);
    }
  });
}

let profileReturnScrollY = null;
let profileReturnTrigger = null;
let teamMemberReturnTrigger = null;
const navigationToast = document.getElementById('navigationToast');
let navigationToastTimer = null;
let safeBackReady = false;
let exitBackArmedUntil = 0;
let historyDismissPending = '';

function showNavigationToast(message,duration=1800){
  if (!navigationToast || !message) return;
  window.clearTimeout(navigationToastTimer);
  navigationToast.textContent = message;
  navigationToast.classList.add('show');
  navigationToastTimer = window.setTimeout(()=>navigationToast.classList.remove('show'),duration);
}

function historyOwnsLayer(key){
  return history.state?.hclLayer === key;
}

function requestLayerHistoryDismiss(key){
  if (!historyOwnsLayer(key)) return false;
  if (!historyDismissPending) {
    historyDismissPending = key;
    history.back();
  }
  return true;
}

function pushLayerHistory(key){
  if (!safeBackReady || !key || historyOwnsLayer(key)) return;
  try {
    history.pushState({...history.state,hclLayer:key},'',location.href);
  } catch (error) {}
}

function openSheet(id){
  const el = document.getElementById(id);
  if (!el) return;
  if (id === 'teamMemberSheet') el.classList.remove('is-entered');
  el.classList.add('open');
  el.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  pushLayerHistory(`sheet:${id}`);
  if (id === 'teamMemberSheet') window.requestAnimationFrame(()=>el.classList.add('is-entered'));
  const cueConfig = {
    achievementSheet:{direction:'horizontal',labelZh:'左右滑动切换成果',labelEn:'SWIPE TO SWITCH RESULTS'},
    profileSheet:{direction:'vertical',labelZh:'向上滑动查看完整简介',labelEn:'SWIPE UP FOR THE FULL PROFILE'},
    teamMemberSheet:{direction:'vertical',labelZh:'向上滑动查看成员介绍',labelEn:'SWIPE UP FOR THE MEMBER PROFILE'},
    readerSheet:{direction:'vertical',labelZh:'向上滑动查看论文页面',labelEn:'SWIPE UP TO VIEW THE PAPER'},
    languageSheet:{direction:'vertical',labelZh:'向上滑动查看更多语言',labelEn:'SWIPE UP FOR MORE LANGUAGES'}
  }[id];
  if (cueConfig) {
    window.setTimeout(()=>showGestureCue(
      el,
      `page-${id}-${cueConfig.direction}`,
      {coach:true,direction:cueConfig.direction,label:usesChineseContent()?cueConfig.labelZh:cueConfig.labelEn}
    ),300);
  }
}
function closeSheet(id,options={}){
  const el = document.getElementById(id);
  if (!el) return;
  if (!options.fromHistory && requestLayerHistoryDismiss(`sheet:${id}`)) return;
  if (id === 'readerSheet' && readerClosing) return;
  if (id === 'readerSheet') readerClosing = true;
  if (id === 'teamMemberSheet') el.classList.remove('is-entered');
  el.classList.remove('open');
  el.setAttribute('aria-hidden','true');
  if (id === 'languageSheet') langToggle.setAttribute('aria-expanded','false');
  if (![...document.querySelectorAll('.sheet.open')].length && !document.getElementById('fullReader')?.classList.contains('open')) document.body.style.overflow='';
  if (id === 'profileSheet' && Number.isFinite(profileReturnScrollY)) {
    const returnY = profileReturnScrollY;
    profileReturnScrollY = null;
    window.requestAnimationFrame(()=>{
      window.scrollTo({top:returnY,left:0,behavior:'auto'});
      (profileReturnTrigger || teamGrid?.querySelector('[data-team-profile="leader"]'))?.focus({preventScroll:true});
      profileReturnTrigger = null;
    });
  }
  if (id === 'teamMemberSheet') {
    const returnTrigger = teamMemberReturnTrigger;
    teamMemberReturnTrigger = null;
    window.requestAnimationFrame(()=>returnTrigger?.focus({preventScroll:true}));
  }
  if (id === 'readerSheet') {
    readerClosing = false;
    window.setTimeout(returnToOpenedPaperCard,60);
  }
}

function scrollProfileTo(section='top',behavior='smooth'){
  if (!profileSheetBody) return;
  const target = section === 'directions' ? profileDirectionsSection : section === 'details' ? profileDetailSection : null;
  const top = target ? Math.max(0,target.offsetTop-12) : 0;
  profileSheetBody.scrollTo({top,behavior});
}

function openPersonalProfile(section='top',trigger=null){
  if (!profileSheet?.classList.contains('open')) profileReturnScrollY = window.scrollY;
  if (trigger) profileReturnTrigger = trigger;
  openSheet('profileSheet');
  window.requestAnimationFrame(()=>scrollProfileTo(section,'auto'));
}

function openTeamMemberProfile(index,trigger){
  const member = teamMembers[index];
  if (!member || !teamMemberSheet) return;
  const chinese = usesChineseContent();
  const traditional = usesTraditionalContent();
  const name = chinese ? member.nameZh : member.nameEn;
  const status = traditional ? member.degreeHant : (chinese ? member.degreeZh : member.degreeEn);
  teamMemberReturnTrigger = trigger || null;
  teamMemberDetailPhoto.src = member.image;
  teamMemberDetailPhoto.alt = chinese ? `${name}团队成员照片` : `${name}, team member`;
  teamMemberDetailCount.textContent = `TEAM MEMBER · ${String(index+2).padStart(2,'0')} / 08`;
  teamMemberDetailRole.textContent = chinese ? '团队成员 · TEAM MEMBER' : 'HEALING CITY LAB · TEAM MEMBER';
  teamMemberDetailName.textContent = name;
  teamMemberDetailIntro.textContent = traditional
    ? `${name}，${status}。作為 Healing City Lab 團隊成員，參與團隊日常研究、設計實踐與學術交流。`
    : chinese
      ? `${name}，${status}。作为 Healing City Lab 团队成员，参与团队日常研究、设计实践与学术交流。`
      : `${name} is ${status}. As a member of Healing City Lab, they participate in the team’s research, design practice and academic exchange.`;
  teamMemberDetailSchool.textContent = chinese ? (traditional?'桂林理工大學':'桂林理工大学') : 'Guilin University of Technology';
  teamMemberDetailStatus.textContent = status;
  teamMemberDetailGroup.textContent = chinese ? (traditional?'Healing City Lab 團隊成員':'Healing City Lab 团队成员') : 'Healing City Lab · Team Member';
  teamMemberSheetTitle.textContent = chinese ? (traditional?'團隊成員介紹':'团队成员介绍') : 'Team Member Profile';
  teamMemberSchoolLabel.textContent = chinese ? (traditional?'學校':'学校') : 'School';
  teamMemberStatusLabel.textContent = chinese ? (traditional?'在讀資訊':'在读信息') : 'Academic Status';
  teamMemberGroupLabel.textContent = chinese ? (traditional?'團隊身份':'团队身份') : 'Team Role';
  openSheet('teamMemberSheet');
}

const copyrightPage = document.getElementById('copyrightPage');
const copyrightPageBody = copyrightPage?.querySelector('.copyright-page-body');
const openCopyrightButton = document.getElementById('openCopyright');
const copyrightCloseButton = document.getElementById('copyrightClose');
let copyrightReturnScrollY = null;
let copyrightClosing = false;

function openCopyrightPage(){
  if (!copyrightPage?.hidden || copyrightClosing) return;
  copyrightReturnScrollY = window.scrollY;
  copyrightPage.hidden = false;
  copyrightPage.setAttribute('aria-hidden','false');
  openCopyrightButton?.setAttribute('aria-expanded','true');
  document.body.classList.add('copyright-page-open');
  if (copyrightPageBody) copyrightPageBody.scrollTop = 0;
  window.requestAnimationFrame(()=>{
    copyrightPage.classList.add('open');
    window.setTimeout(()=>showGestureCue(
      copyrightPage,
      'page-copyright-vertical',
      {coach:true,direction:'vertical',label:usesChineseContent()?'向上滑动查看完整声明':'SWIPE UP FOR THE FULL NOTICE'}
    ),320);
    window.setTimeout(()=>copyrightCloseButton?.focus({preventScroll:true}),60);
  });
  pushLayerHistory('copyright');
}

function closeCopyrightPage(options={}){
  if (copyrightPage?.hidden || copyrightClosing) return;
  if (!options.fromHistory && requestLayerHistoryDismiss('copyright')) return;
  copyrightClosing = true;
  copyrightPage.classList.remove('open');
  openCopyrightButton?.setAttribute('aria-expanded','false');
  window.setTimeout(()=>{
    copyrightPage.hidden = true;
    copyrightPage.setAttribute('aria-hidden','true');
    document.body.classList.remove('copyright-page-open');
    const returnY = copyrightReturnScrollY;
    copyrightReturnScrollY = null;
    copyrightClosing = false;
    if (Number.isFinite(returnY)) window.scrollTo({top:returnY,left:0,behavior:'auto'});
    openCopyrightButton?.focus({preventScroll:true});
  },300);
}

openCopyrightButton?.addEventListener('click',openCopyrightPage);
copyrightCloseButton?.addEventListener('click',closeCopyrightPage);


function updateMusicButton(){
  if (!musicToggle) return;
  const actionLabel = musicEnabled ? t('musicOff') : t('musicOn');
  musicToggle.setAttribute('aria-label', actionLabel);
  musicToggle.setAttribute('title', actionLabel);
  musicToggle.setAttribute('aria-pressed', String(musicEnabled));
  musicToggle.classList.toggle('is-on', musicEnabled);
  musicToggle.classList.toggle('is-playing', musicEnabled && bgMusic && !bgMusic.paused);
}

function fadeMusic(targetVolume, duration = 900, onComplete){
  if (!bgMusic) return;
  if (musicFadeFrame) cancelAnimationFrame(musicFadeFrame);
  const startVolume = Number.isFinite(bgMusic.volume) ? bgMusic.volume : 0;
  const startTime = performance.now();
  const safeDuration = Math.max(1, duration);
  const step = now => {
    const progress = Math.min(1, (now - startTime) / safeDuration);
    const eased = progress < .5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    bgMusic.volume = Math.max(0, Math.min(1, startVolume + (targetVolume - startVolume) * eased));
    if (progress < 1) {
      musicFadeFrame = requestAnimationFrame(step);
    } else {
      musicFadeFrame = null;
      if (typeof onComplete === 'function') onComplete();
      updateMusicButton();
    }
  };
  musicFadeFrame = requestAnimationFrame(step);
}

async function startBackgroundMusic({restart = false} = {}){
  if (!bgMusic || !musicEnabled) return false;
  try {
    if (restart || (Number.isFinite(bgMusic.duration) && bgMusic.currentTime >= bgMusic.duration - .2)) {
      bgMusic.currentTime = 0;
    }
    musicLoopFadeStarted = false;
    bgMusic.volume = 0;
    await bgMusic.play();
    fadeMusic(MUSIC_VOLUME, 1800);
    updateMusicButton();
    return true;
  } catch (error) {
    updateMusicButton();
    return false;
  }
}

function stopBackgroundMusic(){
  if (!bgMusic) return;
  musicLoopFadeStarted = false;
  fadeMusic(0, 850, () => {
    bgMusic.pause();
    updateMusicButton();
  });
}

function toggleBackgroundMusic(){
  musicEnabled = !musicEnabled;
  if (musicEnabled) {
    startBackgroundMusic();
  } else {
    stopBackgroundMusic();
  }
  updateMusicButton();
}

musicToggle?.addEventListener('click', toggleBackgroundMusic);
bgMusic?.addEventListener('play', updateMusicButton);
bgMusic?.addEventListener('pause', updateMusicButton);
bgMusic?.addEventListener('timeupdate', () => {
  if (!musicEnabled || musicLoopFadeStarted || !Number.isFinite(bgMusic.duration)) return;
  const remaining = bgMusic.duration - bgMusic.currentTime;
  if (remaining > 0 && remaining <= MUSIC_LOOP_FADE_SECONDS) {
    musicLoopFadeStarted = true;
    fadeMusic(0, Math.max(450, remaining * 1000));
  }
});
bgMusic?.addEventListener('ended', async () => {
  if (!musicEnabled) return;
  musicLoopFadeStarted = false;
  bgMusic.currentTime = 0;
  bgMusic.volume = 0;
  try {
    await bgMusic.play();
    fadeMusic(MUSIC_VOLUME, 1800);
  } catch (error) {
    updateMusicButton();
  }
});
bgMusic?.addEventListener('seeked', () => {
  if (!Number.isFinite(bgMusic.duration) || bgMusic.duration - bgMusic.currentTime > MUSIC_LOOP_FADE_SECONDS) {
    musicLoopFadeStarted = false;
  }
});

// 默认开启；若移动浏览器限制自动播放，将在用户第一次触碰页面时继续播放。
window.addEventListener('load', () => {
  startBackgroundMusic();
});
window.addEventListener('pointerdown', () => {
  if (musicEnabled && bgMusic && bgMusic.paused) startBackgroundMusic();
}, { once: true, passive: true });

document.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click',()=>closeSheet(btn.dataset.close)));
document.getElementById('openProfileSheet')?.addEventListener('click',event=>{
  event.stopPropagation();
  openPersonalProfile('details');
});
document.getElementById('openAchievementSheet')?.addEventListener('click',event=>{
  event.stopPropagation();
  setAchievementTab('projects');
  openSheet('achievementSheet');
});
document.getElementById('openResearchDirections')?.addEventListener('click',event=>{
  event.stopPropagation();
  openPersonalProfile('directions');
});
teamGrid?.addEventListener('click',event=>{
  const trigger = event.target.closest('[data-team-profile]');
  if (!trigger) return;
  if (trigger.dataset.teamProfile === 'leader') {
    openPersonalProfile('top',trigger);
    return;
  }
  openTeamMemberProfile(Number(trigger.dataset.teamProfile),trigger);
});
profileSheet?.querySelectorAll('[data-profile-jump]').forEach(button=>button.addEventListener('click',()=>{
  scrollProfileTo(button.dataset.profileJump);
}));
profileSheet?.querySelector('[data-profile-achievement]')?.addEventListener('click',()=>{
  setAchievementTab('projects');
  openSheet('achievementSheet');
});
directionsGrid?.addEventListener('click',event=>{
  const card = event.target.closest('[data-direction]');
  if (!card) return;
  openDirectionStory(Number(card.dataset.direction),card);
});
directionsGrid?.addEventListener('keydown',event=>{
  const card = event.target.closest('[data-direction]');
  if (!card || (event.key!=='Enter' && event.key!==' ')) return;
  event.preventDefault();
  openDirectionStory(Number(card.dataset.direction),card);
});
langToggle.addEventListener('click',()=>{
  languageQuery = '';
  languageSearchInput.value = '';
  renderLanguageSelector();
  openSheet('languageSheet');
  langToggle.setAttribute('aria-expanded','true');
});
[languagePrimary, languageGrid, allLanguageGrid].forEach(container => container.addEventListener('click', event => {
  const localButton = event.target.closest('[data-language]');
  if (localButton) { setLanguage(localButton.dataset.language); return; }
  const globalButton = event.target.closest('[data-global-language]');
  if (globalButton) applyInPageGoogleTranslation(globalButton.dataset.globalLanguage);
}));

languageSearchInput.addEventListener('input', event => {
  languageQuery = event.target.value.trim();
  renderLanguageSelector();
});
languageSearchForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!languageQuery) return;
  const firstLocalMatch = document.querySelector('[data-language]');
  if (firstLocalMatch) { setLanguage(firstLocalMatch.dataset.language); return; }
  const firstGlobalMatch = document.querySelector('[data-global-language]');
  if (firstGlobalMatch) applyInPageGoogleTranslation(firstGlobalMatch.dataset.globalLanguage);
});
clearLanguageSearch.addEventListener('click', () => {
  languageQuery = '';
  languageSearchInput.value = '';
  renderLanguageSelector();
  languageSearchInput.focus();
});

themeFilters.addEventListener('click',e=>{const btn=e.target.closest('[data-theme]'); if(!btn) return; themeFilter=btn.dataset.theme; renderFilters(); renderWall();});
yearFilters.addEventListener('click',e=>{const btn=e.target.closest('[data-year]'); if(!btn) return; yearFilter=btn.dataset.year; renderFilters(); renderWall();});

let searchTimer = null;
searchInput.addEventListener('input',e=>{
  keyword = e.target.value.trim();
  clearSearchButton.hidden = keyword.length === 0;
  window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(renderWall, 120);
});
searchInput.addEventListener('keydown',e=>{
  if (e.key === 'Escape' && searchInput.value) {
    e.preventDefault();
    resetSearch();
  }
});
searchForm.addEventListener('submit',e=>{
  e.preventDefault();
  window.clearTimeout(searchTimer);
  keyword = searchInput.value.trim();
  renderWall();
  searchInput.blur();
});
clearSearchButton.addEventListener('click',resetSearch);

const directionStory = document.getElementById('directionStory');
const directionStoryShell = document.getElementById('directionStoryShell');
const directionStoryPage = document.getElementById('directionStoryPage');
const directionStoryImage = document.getElementById('directionStoryImage');
const directionStoryCaption = document.getElementById('directionStoryCaption');
const directionStoryScrollHint = document.getElementById('directionStoryScrollHint');
const directionStoryCount = document.getElementById('directionStoryCount');
const directionStoryKicker = document.getElementById('directionStoryKicker');
const directionStoryTitle = document.getElementById('directionStoryTitle');
const directionStoryDescription = document.getElementById('directionStoryDescription');
const directionStoryKeywords = document.getElementById('directionStoryKeywords');
const directionStoryDots = document.getElementById('directionStoryDots');
const directionStoryPrev = document.getElementById('directionStoryPrev');
const directionStoryNext = document.getElementById('directionStoryNext');
const directionStoryClose = document.getElementById('directionStoryClose');
const directionStoryBackdrop = document.getElementById('directionStoryBackdrop');
let currentDirectionIndex = 0;
let directionStorySourceCard = null;
let directionStoryAnimating = false;
let directionStoryTouch = null;

function directionImageMorphTransform(sourceElement,targetElement){
  const source = sourceElement?.getBoundingClientRect();
  const target = targetElement?.getBoundingClientRect();
  if (!source || !target || !source.width || !source.height || !target.width || !target.height) return 'none';
  return `translate3d(${source.left+source.width/2-target.left-target.width/2}px,${source.top+source.height/2-target.top-target.height/2}px,0) scale(${source.width/target.width},${source.height/target.height})`;
}

function populateDirectionStory(index){
  currentDirectionIndex = Math.max(0,Math.min(directionShowcases.length-1,index));
  const item = directionShowcases[currentDirectionIndex];
  const chinese = usesChineseContent();
  directionStory.style.setProperty('--direction-accent',item.accent);
  directionStoryImage.src = item.image;
  directionStoryImage.alt = `${chinese?item.titleZh:item.titleEn} · ${chinese?'研究拼贴':'research collage'}`;
  directionStoryCaption.textContent = chinese?'拼贴图 / 研究素材':'COLLAGE / RESEARCH MATERIAL';
  directionStoryScrollHint.querySelector('span').textContent = chinese?'上下滑动查看完整拼贴':'SWIPE VERTICALLY TO VIEW THE FULL COLLAGE';
  directionStoryCount.textContent = `${item.index} / 03`;
  directionStoryKicker.textContent = `${item.kicker} / ${item.index}`;
  directionStoryTitle.textContent = chinese?item.titleZh:item.titleEn;
  directionStoryDescription.textContent = chinese?item.descZh:item.descEn;
  directionStoryKeywords.innerHTML = (chinese?item.keywordsZh:item.keywordsEn).map((keyword,keywordIndex)=>`
    <span><i>${String(keywordIndex+1).padStart(2,'0')}</i>${keyword}</span>
  `).join('');
  directionStoryDots.innerHTML = directionShowcases.map((direction,dotIndex)=>`
    <i class="${dotIndex===currentDirectionIndex?'active':''}" title="${chinese?direction.titleZh:direction.titleEn}"></i>
  `).join('');
  directionStoryPrev.disabled = currentDirectionIndex === 0;
  directionStoryNext.disabled = currentDirectionIndex === directionShowcases.length-1;
  directionStoryPage.dataset.direction = item.slug;
  directionStoryShell.scrollTop = 0;
  directionStory.classList.remove('is-scrolled');
}

function openDirectionStory(index,sourceCard){
  if (!directionStory?.hidden || directionStoryAnimating) return;
  directionStoryAnimating = true;
  directionStorySourceCard = sourceCard || directionsGrid.querySelector(`[data-direction="${index}"]`);
  populateDirectionStory(index);
  directionStory.hidden = false;
  directionStory.setAttribute('aria-hidden','false');
  document.body.classList.add('direction-story-open');
  pushLayerHistory('direction-story');

  window.requestAnimationFrame(()=>{
    const sourceImage = directionStorySourceCard?.querySelector('img');
    const initialTransform = directionImageMorphTransform(sourceImage,directionStoryImage);
    directionStory.classList.add('open');
    window.setTimeout(()=>showGestureCue(
      directionStory,
      'page-direction-both',
      {coach:true,direction:'both',label:usesChineseContent()?'上下滑动阅读 · 左右滑动切换':'SWIPE VERTICALLY · SWIPE SIDEWAYS'}
    ),420);
    if (!prefersReducedMotion() && directionStoryImage.animate && initialTransform !== 'none') {
      const animation = directionStoryImage.animate([
        {transform:initialTransform,filter:'saturate(.7) brightness(.72)',borderRadius:'20px'},
        {transform:'translate3d(0,0,0) scale(1)',filter:'saturate(1) brightness(1)',borderRadius:'0px'}
      ],{
        duration:620,
        easing:'cubic-bezier(.18,.82,.22,1)',
        fill:'both'
      });
      animation.finished.catch(()=>{}).finally(()=>{
        animation.cancel();
        directionStoryAnimating = false;
        directionStoryClose.focus({preventScroll:true});
      });
    } else {
      directionStoryAnimating = false;
      directionStoryClose.focus({preventScroll:true});
    }
  });
}

function finishCloseDirectionStory(){
  directionStory.hidden = true;
  directionStory.setAttribute('aria-hidden','true');
  directionStory.classList.remove('open','is-closing');
  document.body.classList.remove('direction-story-open');
  directionStoryPage.style.transform = '';
  directionStoryPage.style.opacity = '';
  directionStoryAnimating = false;
  directionStorySourceCard?.focus({preventScroll:true});
}

function closeDirectionStory(options={}){
  if (directionStory?.hidden || directionStoryAnimating) return;
  if (!options.fromHistory && requestLayerHistoryDismiss('direction-story')) return;
  directionStoryAnimating = true;
  directionStory.classList.add('is-closing');
  directionStorySourceCard = directionsGrid.querySelector(`[data-direction="${currentDirectionIndex}"]`) || directionStorySourceCard;
  const targetImage = directionStorySourceCard?.querySelector('img');
  const finalTransform = directionImageMorphTransform(targetImage,directionStoryImage);
  if (!prefersReducedMotion() && directionStoryImage.animate && finalTransform !== 'none') {
    const animation = directionStoryImage.animate([
      {transform:'translate3d(0,0,0) scale(1)',opacity:1},
      {transform:finalTransform,opacity:.55}
    ],{
      duration:390,
      easing:'cubic-bezier(.55,.05,.8,.35)',
      fill:'both'
    });
    animation.finished.catch(()=>{}).finally(()=>{
      animation.cancel();
      finishCloseDirectionStory();
    });
  } else {
    window.setTimeout(finishCloseDirectionStory,120);
  }
}

function switchDirectionStory(nextIndex,direction=1){
  if (directionStoryAnimating || nextIndex<0 || nextIndex>=directionShowcases.length || nextIndex===currentDirectionIndex) {
    directionStoryPage.style.transform = '';
    directionStoryPage.style.opacity = '';
    return;
  }
  directionStoryAnimating = true;
  const outX = direction>0?-46:46;
  const inX = direction>0?46:-46;
  const change = ()=>{
    populateDirectionStory(nextIndex);
    directionStorySourceCard = directionsGrid.querySelector(`[data-direction="${currentDirectionIndex}"]`);
  };
  if (!prefersReducedMotion() && directionStoryPage.animate) {
    const outAnimation = directionStoryPage.animate([
      {transform:directionStoryPage.style.transform || 'translate3d(0,0,0)',opacity:1},
      {transform:`translate3d(${outX}px,0,0)`,opacity:0}
    ],{duration:180,easing:'ease-in',fill:'both'});
    outAnimation.finished.catch(()=>{}).finally(()=>{
      outAnimation.cancel();
      change();
      const inAnimation = directionStoryPage.animate([
        {transform:`translate3d(${inX}px,0,0)`,opacity:0},
        {transform:'translate3d(0,0,0)',opacity:1}
      ],{duration:330,easing:'cubic-bezier(.18,.82,.22,1)',fill:'both'});
      inAnimation.finished.catch(()=>{}).finally(()=>{
        inAnimation.cancel();
        directionStoryPage.style.transform = '';
        directionStoryPage.style.opacity = '';
        directionStoryAnimating = false;
      });
    });
  } else {
    change();
    directionStoryPage.style.transform = '';
    directionStoryPage.style.opacity = '';
    directionStoryAnimating = false;
  }
}

directionStoryClose?.addEventListener('click',closeDirectionStory);
directionStoryBackdrop?.addEventListener('click',closeDirectionStory);
directionStoryPrev?.addEventListener('click',()=>switchDirectionStory(currentDirectionIndex-1,-1));
directionStoryNext?.addEventListener('click',()=>switchDirectionStory(currentDirectionIndex+1,1));
directionStoryShell?.addEventListener('touchstart',event=>{
  if (event.touches.length!==1 || directionStoryAnimating) {
    directionStoryTouch = null;
    return;
  }
  const touch = event.touches[0];
  directionStoryTouch = {x:touch.clientX,y:touch.clientY,time:performance.now(),axis:''};
},{passive:true});
directionStoryShell?.addEventListener('scroll',()=>{
  directionStory.classList.toggle('is-scrolled',directionStoryShell.scrollTop>24);
},{passive:true});
directionStoryShell?.addEventListener('touchmove',event=>{
  if (!directionStoryTouch || event.touches.length!==1 || directionStoryAnimating) return;
  const touch = event.touches[0];
  const dx = touch.clientX-directionStoryTouch.x;
  const dy = touch.clientY-directionStoryTouch.y;
  if (!directionStoryTouch.axis && Math.max(Math.abs(dx),Math.abs(dy))>7) {
    directionStoryTouch.axis = Math.abs(dx)>Math.abs(dy)*1.18?'x':'y';
  }
  if (directionStoryTouch.axis!=='x') return;
  event.preventDefault();
  let pull = dx;
  if ((currentDirectionIndex===0 && dx>0) || (currentDirectionIndex===directionShowcases.length-1 && dx<0)) pull*=.34;
  directionStoryPage.style.transform = `translate3d(${Math.max(-110,Math.min(110,pull))}px,0,0)`;
  directionStoryPage.style.opacity = String(Math.max(.72,1-Math.abs(pull)/520));
},{passive:false});
directionStoryShell?.addEventListener('touchend',event=>{
  if (!directionStoryTouch || event.changedTouches.length!==1) return;
  const touch = event.changedTouches[0];
  const dx = touch.clientX-directionStoryTouch.x;
  const dy = touch.clientY-directionStoryTouch.y;
  const elapsed = Math.max(1,performance.now()-directionStoryTouch.time);
  const horizontal = directionStoryTouch.axis==='x' && Math.abs(dx)>Math.abs(dy)*1.1;
  const triggered = horizontal && (Math.abs(dx)>48 || Math.abs(dx)/elapsed>.36);
  directionStoryTouch = null;
  if (!triggered) {
    directionStoryPage.animate?.([
      {transform:directionStoryPage.style.transform || 'translate3d(0,0,0)',opacity:directionStoryPage.style.opacity || 1},
      {transform:'translate3d(0,0,0)',opacity:1}
    ],{duration:220,easing:'ease-out'});
    directionStoryPage.style.transform = '';
    directionStoryPage.style.opacity = '';
    return;
  }
  if (dx<0 && currentDirectionIndex<directionShowcases.length-1) switchDirectionStory(currentDirectionIndex+1,1);
  else if (dx>0 && currentDirectionIndex>0) switchDirectionStory(currentDirectionIndex-1,-1);
  else if (dx>0 && currentDirectionIndex===0) {
    directionStoryPage.style.transform = '';
    directionStoryPage.style.opacity = '';
    closeDirectionStory();
  } else {
    directionStoryPage.style.transform = '';
    directionStoryPage.style.opacity = '';
  }
},{passive:true});
directionStoryShell?.addEventListener('touchcancel',()=>{
  directionStoryTouch = null;
  directionStoryPage.style.transform = '';
  directionStoryPage.style.opacity = '';
},{passive:true});

const brandLogoButton = document.getElementById('brandLogoButton');
const brandStory = document.getElementById('brandStory');
const brandStoryPanel = document.getElementById('brandStoryPanel');
const brandStoryLogo = document.getElementById('brandStoryLogo');
const brandStoryClose = document.getElementById('brandStoryClose');
const brandStoryBackdrop = document.getElementById('brandStoryBackdrop');
const brandEntryTrigger = document.getElementById('brandEntryTrigger');
let brandStoryAnimating = false;
let brandStoryTouchStart = null;

function prefersReducedMotion(){
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function brandLogoMorphTransform(){
  const source = brandLogoButton.getBoundingClientRect();
  const target = brandStoryLogo.getBoundingClientRect();
  const sourceCenterX = source.left+source.width/2;
  const sourceCenterY = source.top+source.height/2;
  const targetCenterX = target.left+target.width/2;
  const targetCenterY = target.top+target.height/2;
  return `translate3d(${sourceCenterX-targetCenterX}px,${sourceCenterY-targetCenterY}px,0) scale(${source.width/Math.max(1,target.width)})`;
}

function openBrandStory(){
  if (!brandStory?.hidden || brandStoryAnimating) return;
  brandStoryAnimating = true;
  brandStory.hidden = false;
  brandStory.setAttribute('aria-hidden','false');
  brandLogoButton.setAttribute('aria-expanded','true');
  document.body.classList.add('brand-story-open');
  pushLayerHistory('brand-story');

  window.requestAnimationFrame(()=>{
    const initialTransform = brandLogoMorphTransform();
    brandStory.classList.add('open');
    brandLogoButton.classList.add('is-story-open');
    window.setTimeout(()=>showGestureCue(
      brandStory,
      'page-brand-vertical',
      {coach:true,direction:'vertical',allowWhileBrand:true,label:usesChineseContent()?'向上滑动查看完整说明':'SWIPE UP FOR THE FULL STORY'}
    ),420);
    if (!prefersReducedMotion() && brandStoryLogo.animate) {
      const animation = brandStoryLogo.animate([
        {transform:initialTransform,filter:'brightness(.86)'},
        {transform:'translate3d(0,0,0) scale(1)',filter:'brightness(1)'}
      ],{
        duration:620,
        easing:'cubic-bezier(.18,.82,.22,1)',
        fill:'both'
      });
      animation.finished.catch(()=>{}).finally(()=>{
        animation.cancel();
        brandStoryAnimating = false;
        brandStoryClose.focus({preventScroll:true});
      });
    } else {
      brandStoryAnimating = false;
      brandStoryClose.focus({preventScroll:true});
    }
  });
}

function closeBrandStory(options={}){
  if (brandStory?.hidden || brandStoryAnimating) return;
  if (!options.fromHistory && requestLayerHistoryDismiss('brand-story')) return;
  brandStoryAnimating = true;
  brandStory.classList.add('is-closing');
  const finish = ()=>{
    brandStory.hidden = true;
    brandStory.setAttribute('aria-hidden','true');
    brandStory.classList.remove('open','is-closing','is-entry-screen');
    brandLogoButton.classList.remove('is-story-open');
    brandLogoButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('brand-story-open');
    brandStoryAnimating = false;
    brandLogoButton.focus({preventScroll:true});
    startLibraryAutoplay();
    updateActiveNavigation();
    const activeSectionId = sectionTargets[activePrimarySectionIndex()]?.section?.id || 'news';
    announceSectionPortal(activeSectionId);
    showGestureCue(document.querySelector(`[data-section-portal="${activeSectionId}"]`),`portal-${activeSectionId}`);
  };

  if (!prefersReducedMotion() && brandStoryLogo.animate) {
    const animation = brandStoryLogo.animate([
      {transform:'translate3d(0,0,0) scale(1)',opacity:1},
      {transform:brandLogoMorphTransform(),opacity:.72}
    ],{
      duration:390,
      easing:'cubic-bezier(.55,.05,.8,.35)',
      fill:'both'
    });
    animation.finished.catch(()=>{}).finally(()=>{
      animation.cancel();
      finish();
    });
  } else {
    window.setTimeout(finish,120);
  }
}

brandLogoButton?.addEventListener('click',()=>{
  if (brandStory.hidden) openBrandStory();
  else closeBrandStory();
});
brandStoryClose?.addEventListener('click',closeBrandStory);
brandStoryBackdrop?.addEventListener('click',closeBrandStory);
brandStoryLogo?.addEventListener('click',closeBrandStory);
brandEntryTrigger?.addEventListener('click',closeBrandStory);
brandStoryPanel?.addEventListener('touchstart',event=>{
  if (event.touches.length !== 1) {
    brandStoryTouchStart = null;
    return;
  }
  const touch = event.touches[0];
  brandStoryTouchStart = {x:touch.clientX,y:touch.clientY};
},{passive:true});
brandStoryPanel?.addEventListener('touchend',event=>{
  if (!brandStoryTouchStart || event.changedTouches.length !== 1) return;
  const touch = event.changedTouches[0];
  const dx = touch.clientX-brandStoryTouchStart.x;
  const dy = touch.clientY-brandStoryTouchStart.y;
  brandStoryTouchStart = null;
  if (dx > 58 && Math.abs(dx) > Math.abs(dy)*1.3) closeBrandStory();
},{passive:true});

const achievementSheet = document.getElementById('achievementSheet');
const achievementSwipeViewport = document.getElementById('achievementSwipeViewport');
const achievementTrack = document.getElementById('achievementTrack');
const achievementTabOrder = ['projects','papers','books'];
let achievementTabIndex = 0;
let achievementCloseTimer = null;

function setAchievementTrackPosition(index=achievementTabIndex,dragX=0,animate=true){
  if (!achievementTrack) return;
  if (animate) achievementTrack.classList.remove('is-dragging');
  achievementTrack.style.transform = `translate3d(calc(-${index*33.333333}% + ${dragX}px),0,0)`;
}

function setAchievementTab(tab,options={}){
  const index = achievementTabOrder.indexOf(tab);
  const selected = achievementSheet?.querySelector(`[data-achieve-tab="${tab}"]`);
  if (index < 0 || !selected) return;
  achievementTabIndex = index;
  achievementSheet.querySelectorAll('[data-achieve-tab]').forEach(button=>{
    const active = button === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  achievementSheet.querySelectorAll('[data-achieve-panel]').forEach(panel=>{
    const active = panel.dataset.achievePanel === tab;
    panel.classList.toggle('active',active);
    panel.setAttribute('aria-hidden',String(!active));
    if (active && options.resetScroll !== false) panel.scrollTop = 0;
  });
  setAchievementTrackPosition(index,0,options.animate !== false);
}

function closeAchievementBySwipe(){
  if (!achievementTrack || achievementCloseTimer) return;
  const width = Math.max(achievementSwipeViewport?.clientWidth || 0,window.innerWidth);
  achievementTrack.classList.remove('is-dragging');
  achievementTrack.classList.add('is-closing');
  window.requestAnimationFrame(()=>{
    achievementTrack.style.transform = `translate3d(${Math.round(width*.52)}px,0,0)`;
  });
  achievementCloseTimer = window.setTimeout(()=>{
    closeSheet('achievementSheet');
    achievementTrack.classList.remove('is-closing');
    achievementCloseTimer = null;
    setAchievementTab('projects',{animate:false});
  },210);
}

function bindAchievementSwipe(){
  if (!achievementSwipeViewport || !achievementTrack) return;
  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocityX = 0;
  let lock = '';
  let tracking = false;

  const settle = (event,cancelled=false)=>{
    if (!tracking) return;
    const touch = event.changedTouches?.[0];
    const endX = touch ? touch.clientX : lastX;
    const dx = endX-startX;
    const elapsed = Math.max(1,performance.now()-startTime);
    const speed = Math.max(Math.abs(velocityX),Math.abs(dx)/elapsed);
    const width = Math.max(1,achievementSwipeViewport.clientWidth);
    const distanceTrigger = Math.min(58,Math.max(34,width*.11));
    const shouldMove = !cancelled && lock === 'horizontal'
      && (Math.abs(dx) >= distanceTrigger || (Math.abs(dx) >= 18 && speed >= .36));

    tracking = false;
    achievementTrack.classList.remove('is-dragging');

    if (!shouldMove) {
      setAchievementTrackPosition(achievementTabIndex,0,true);
      return;
    }
    if (dx < 0) {
      if (achievementTabIndex < achievementTabOrder.length-1) {
        setAchievementTab(achievementTabOrder[achievementTabIndex+1]);
      } else {
        setAchievementTrackPosition(achievementTabIndex,0,true);
      }
      return;
    }
    if (achievementTabIndex > 0) {
      setAchievementTab(achievementTabOrder[achievementTabIndex-1]);
      return;
    }
    closeAchievementBySwipe();
  };

  achievementSwipeViewport.addEventListener('touchstart',event=>{
    if (!achievementSheet.classList.contains('open') || event.touches.length !== 1 || achievementCloseTimer) {
      tracking = false;
      return;
    }
    const touch = event.touches[0];
    startX = lastX = touch.clientX;
    startY = touch.clientY;
    startTime = lastTime = performance.now();
    velocityX = 0;
    lock = '';
    tracking = true;
  },{passive:true});

  achievementSwipeViewport.addEventListener('touchmove',event=>{
    if (!tracking || event.touches.length !== 1) return;
    const touch = event.touches[0];
    const dx = touch.clientX-startX;
    const dy = touch.clientY-startY;
    if (!lock) {
      if (Math.abs(dx) < 7 && Math.abs(dy) < 7) return;
      if (Math.abs(dx) >= 8 && Math.abs(dx) > Math.abs(dy)*1.08) lock = 'horizontal';
      else if (Math.abs(dy) >= 14 && Math.abs(dy) > Math.abs(dx)*1.25) lock = 'vertical';
      else return;
    }
    if (lock !== 'horizontal') return;
    event.preventDefault();
    const now = performance.now();
    const deltaTime = Math.max(1,now-lastTime);
    velocityX = (touch.clientX-lastX)/deltaTime;
    lastX = touch.clientX;
    lastTime = now;

    let dragX = dx;
    if ((achievementTabIndex === 0 && dx > 0) || (achievementTabIndex === achievementTabOrder.length-1 && dx < 0)) {
      dragX = dx*.72;
    }
    achievementTrack.classList.add('is-dragging');
    setAchievementTrackPosition(achievementTabIndex,dragX,false);
  },{passive:false});

  achievementSwipeViewport.addEventListener('touchend',event=>settle(event),{passive:true});
  achievementSwipeViewport.addEventListener('touchcancel',event=>settle(event,true),{passive:true});
}

bindAchievementSwipe();

window.addEventListener('resize',()=>{
  if (achievementSheet?.classList.contains('open') && !achievementTrack?.classList.contains('is-dragging')) {
    setAchievementTrackPosition(achievementTabIndex,0,true);
  }
},{passive:true});

document.querySelectorAll('[data-achieve-tab]').forEach(button=>{
  button.addEventListener('click',()=>setAchievementTab(button.dataset.achieveTab));
});

const bottomNavLinks = [...document.querySelectorAll('.bottom-nav a')];
const sectionTargets = bottomNavLinks
  .map(link => ({link, section: document.querySelector(link.getAttribute('href'))}))
  .filter(item => item.section);

function getSectionScrollTop(target){
  const topbar = document.querySelector('.topbar');
  const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
  return Math.max(0, window.scrollY + target.getBoundingClientRect().top - topbarHeight - 12);
}

function setActiveNavigation(activeLink){
  bottomNavLinks.forEach(link => {
    const isActive = link === activeLink;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

let sectionJumpInProgress = false;

function scrollToSectionFirstFrame(target){
  const root = document.documentElement;
  const previousInlineBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo({top:getSectionScrollTop(target),left:0,behavior:'auto'});
  root.style.scrollBehavior = previousInlineBehavior;
}

function commitSectionJump(hash,updateHash){
  const target = document.querySelector(hash);
  if (!target) return;
  const matchingLink = bottomNavLinks.find(link => link.getAttribute('href') === hash);
  if (matchingLink) setActiveNavigation(matchingLink);
  scrollToSectionFirstFrame(target);
  if (updateHash) history.replaceState({...history.state,hclSection:hash},'',hash);
  window.requestAnimationFrame(updateActiveNavigation);
}

function jumpToSection(hash,updateHash=true,options={}){
  const target = document.querySelector(hash);
  if (!target || sectionJumpInProgress) return;
  const animate = options.transition !== false && !prefersReducedMotion();
  sectionJumpInProgress = true;
  commitSectionJump(hash,updateHash);
  const portal = target.matches('[data-section-portal]')
    ? target
    : target.querySelector('[data-section-portal]');
  if (animate && portal) {
    portal.classList.remove('nav-arrival');
    window.requestAnimationFrame(()=>portal.classList.add('nav-arrival'));
    window.setTimeout(()=>portal.classList.remove('nav-arrival'),280);
  }
  window.requestAnimationFrame(()=>{
    sectionJumpInProgress = false;
    if (portal) showGestureCue(portal,`portal-${portal.dataset.sectionPortal}`);
  });
}

document.querySelectorAll('a[href="#news"], a[href="#papers"], a[href="#projects"], a[href="#team"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const isBottomNavigation = Boolean(link.closest('.bottom-nav'));
    jumpToSection(link.getAttribute('href'),true,{transition:isBottomNavigation});
  });
});

const updateActiveNavigation = () => {
  const topbar = document.querySelector('.topbar');
  const marker = (topbar ? topbar.getBoundingClientRect().height : 0) + 28;
  let current = sectionTargets[0];
  sectionTargets.forEach(item => {
    if (item.section.getBoundingClientRect().top <= marker) current = item;
  });
  if (current) {
    setActiveNavigation(current.link);
    document.querySelectorAll('[data-section-portal]').forEach(portal=>{
      portal.classList.toggle('is-section-active',portal.dataset.sectionPortal === current.section.id);
    });
    announceSectionPortal(current.section.id);
  }
};
window.addEventListener('scroll', updateActiveNavigation, {passive:true});
window.addEventListener('resize', updateActiveNavigation);
window.addEventListener('hashchange', () => {
  if (location.hash === '#news' || location.hash === '#papers' || location.hash === '#projects' || location.hash === '#team') jumpToSection(location.hash, false, {transition:false});
});
if (location.hash === '#news' || location.hash === '#papers' || location.hash === '#projects' || location.hash === '#team') {
  window.setTimeout(() => jumpToSection(location.hash, false, {transition:false}), 80);
}

const sectionPortalNames = {
  news:{zh:'疗愈动态',en:'Healing Updates'},
  papers:{zh:'论文成果',en:'Publications'},
  projects:{zh:'疗愈项目',en:'Healing Projects'},
  team:{zh:'团队介绍',en:'Team'}
};
let announcedPortalId = '';

function activePrimarySectionIndex(){
  const activeLink = bottomNavLinks.find(link=>link.classList.contains('active'));
  const index = sectionTargets.findIndex(item=>item.link === activeLink);
  return Math.max(0,index);
}

function announceSectionPortal(id){
  if (!id || id === announcedPortalId || !brandStory?.hidden) return;
  announcedPortalId = id;
  const name = sectionPortalNames[id];
  if (!name) return;
  showNavigationToast(usesChineseContent()?`已浏览到新板块 · ${name.zh}`:`Now viewing · ${name.en}`,1450);
}

function setupSectionPortalObserver(){
  const portals = [...document.querySelectorAll('[data-section-portal]')];
  if (!portals.length) return;
  if (!('IntersectionObserver' in window)) {
    portals[0].classList.add('is-section-active');
    return;
  }
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (!entry.isIntersecting || entry.intersectionRatio < .42) return;
      const id = entry.target.dataset.sectionPortal;
      portals.forEach(portal=>portal.classList.toggle('is-section-active',portal === entry.target));
      announceSectionPortal(id);
    });
  },{threshold:[.42,.62],rootMargin:'-8% 0px -44% 0px'});
  portals.forEach(portal=>observer.observe(portal));
}

function pushMainHistoryGuard(){
  try {
    history.pushState({...history.state,hclBase:false,hclMain:true,hclLayer:null},'',location.href);
  } catch (error) {}
}

function initializeSafeBackNavigation(){
  try {
    if (!history.state?.hclBase && !history.state?.hclMain) {
      history.replaceState({...history.state,hclBase:true,hclMain:false,hclLayer:null},'',location.href);
      history.pushState({...history.state,hclBase:false,hclMain:true,hclLayer:null},'',location.href);
    } else if (history.state?.hclBase) {
      pushMainHistoryGuard();
    }
    safeBackReady = true;
  } catch (error) {
    safeBackReady = false;
  }
}

function navigateToPreviousPrimarySection(){
  const index = activePrimarySectionIndex();
  if (index <= 0) return false;
  const previous = sectionTargets[index-1];
  if (!previous) return false;
  jumpToSection(previous.link.getAttribute('href'),false,{transition:false});
  const name = sectionPortalNames[previous.section.id];
  showNavigationToast(usesChineseContent()?`返回上一级 · ${name.zh}`:`Back one level · ${name.en}`);
  return true;
}

function navigateUpOneLevel(){
  if (fullReader?.classList.contains('open')) {
    requestCloseFullReader();
    return true;
  }
  if (!directionStory?.hidden) {
    closeDirectionStory();
    return true;
  }
  if (updateShowcase && !updateShowcase.hidden) {
    closeHealingUpdate();
    return true;
  }
  if (!projectShowcase?.hidden) {
    closeBuiltProject();
    return true;
  }
  if (!copyrightPage?.hidden) {
    closeCopyrightPage();
    return true;
  }
  const openSheets = [...document.querySelectorAll('.sheet.open')];
  if (openSheets.length) {
    const topSheet = openSheets[openSheets.length-1];
    closeSheet(topSheet.id);
    return true;
  }
  if (!brandStory?.hidden) {
    closeBrandStory();
    return true;
  }
  if (navigateToPreviousPrimarySection()) return true;
  showNavigationToast(usesChineseContent()?'当前为首个板块 · 浏览器再次返回可退出':'You are at the first section · use Back again to exit',2200);
  return false;
}

function setupEdgeBackGesture(){
  let edgeTouch = null;
  document.addEventListener('touchstart',event=>{
    if (event.touches.length !== 1) {
      edgeTouch = null;
      return;
    }
    const touch = event.touches[0];
    if (touch.clientX > 28) {
      edgeTouch = null;
      return;
    }
    edgeTouch = {x:touch.clientX,y:touch.clientY,time:performance.now()};
    document.documentElement.classList.add('edge-back-tracking');
  },{passive:true});
  document.addEventListener('touchend',event=>{
    document.documentElement.classList.remove('edge-back-tracking');
    if (!edgeTouch || event.changedTouches.length !== 1) {
      edgeTouch = null;
      return;
    }
    const touch = event.changedTouches[0];
    const dx = touch.clientX-edgeTouch.x;
    const dy = touch.clientY-edgeTouch.y;
    const elapsed = performance.now()-edgeTouch.time;
    edgeTouch = null;
    if (dx < 72 || elapsed > 950 || Math.abs(dx) < Math.abs(dy)*1.3) return;
    navigateUpOneLevel();
  },{passive:true});
  document.addEventListener('touchcancel',()=>{
    edgeTouch = null;
    document.documentElement.classList.remove('edge-back-tracking');
  },{passive:true});
}

updateActiveNavigation();

function updateReaderOverview(p){
  document.getElementById('readerOverview').innerHTML = `
    <div class="overview-grid">
      <div class="info-card">
        <h4>${usesChineseContent()?'成果信息':'Publication Overview'}</h4>
        <p>${usesChineseContent()?p.descZh:p.descEn}</p>
      </div>
      <div class="info-card">
        <h4>${usesChineseContent()?'元数据':'Metadata'}</h4>
        <div class="info-table">
          <div class="item"><small>${usesChineseContent()?'年份':'Year'}</small><b>${p.year}</b></div>
          <div class="item"><small>${usesChineseContent()?'主题':'Theme'}</small><b>${usesChineseContent()?p.themeZh:p.themeEn}</b></div>
          <div class="item"><small>${usesChineseContent()?'作者':'Authors'}</small><b>${usesChineseContent()?p.authorsZh:p.authorsEn}</b></div>
          <div class="item"><small>${usesChineseContent()?'期刊 / 来源':'Venue'}</small><b>${usesChineseContent()?p.venueZh:p.venueEn}</b></div>
          <div class="item"><small>${usesChineseContent()?'页数':'Pages'}</small><b>${p.pageCount}</b></div>
          <div class="item"><small>${usesChineseContent()?'文件':'File'}</small><b>PDF</b></div>
        </div>
      </div>
    </div>`;
}

const readerSheet = document.getElementById('readerSheet');
const readerOverviewTab = document.getElementById('readerOverviewTab');
const readerWebTab = document.getElementById('readerWebTab');
const readerOverviewPane = document.getElementById('readerOverviewPane');
const readerWebPane = document.getElementById('readerWebPane');
const readerPreviewImage = document.getElementById('readerPreviewImage');
const readerPreviewMeta = document.getElementById('readerPreviewMeta');
const readerPreviewStatus = document.getElementById('readerPreviewStatus');
const openFullReaderButton = document.getElementById('openFullReader');
const fullReader = document.getElementById('fullReader');
const fullReaderTitle = document.getElementById('fullReaderTitle');
const readerScroll = document.getElementById('readerScroll');
const readerPageCounter = document.getElementById('readerPageCounter');
const readerProgressBar = document.getElementById('readerProgressBar');
const readerZoomIndicator = document.getElementById('readerZoomIndicator');
let readerScrollFrame = null;
let fullReaderWasFullscreen = false;
let fullReaderClosing = false;
let fullReaderHistoryPushed = false;
const fullReaderZoom = {
  page:null,
  img:null,
  scale:1,
  x:0,
  y:0,
  mode:'',
  startDistance:0,
  startScale:1,
  anchorX:0,
  anchorY:0,
  panStartX:0,
  panStartY:0,
  startX:0,
  startY:0
};

function clampNumber(value,min,max){
  return Math.min(max,Math.max(min,value));
}

function touchDistance(first,second){
  return Math.hypot(second.clientX-first.clientX,second.clientY-first.clientY);
}

function touchMidpoint(first,second){
  return {
    x:(first.clientX+second.clientX)/2,
    y:(first.clientY+second.clientY)/2
  };
}

function currentFullReaderPage(){
  const pages = [...document.querySelectorAll('#readerPages .reader-page')];
  if (!pages.length) return null;
  const pageHeight = Math.max(1,readerScroll.clientHeight);
  const index = clampNumber(Math.round(readerScroll.scrollTop/pageHeight),0,pages.length-1);
  return pages[index];
}

function setFullReaderZoomTarget(page){
  if (!page) return false;
  const img = page.querySelector('img');
  if (!img) return false;
  if (fullReaderZoom.img && fullReaderZoom.img !== img) resetFullReaderZoom();
  fullReaderZoom.page = page;
  fullReaderZoom.img = img;
  return true;
}

function clampFullReaderPan(){
  const {page,img,scale} = fullReaderZoom;
  if (!page || !img || scale <= 1) {
    fullReaderZoom.x = 0;
    fullReaderZoom.y = 0;
    return;
  }
  const maxX = Math.max(0,(img.offsetWidth*scale-page.clientWidth)/2);
  const maxY = Math.max(0,(img.offsetHeight*scale-page.clientHeight)/2);
  fullReaderZoom.x = clampNumber(fullReaderZoom.x,-maxX,maxX);
  fullReaderZoom.y = clampNumber(fullReaderZoom.y,-maxY,maxY);
}

function renderFullReaderZoom(){
  const {page,img,scale,x,y} = fullReaderZoom;
  const zoomed = Boolean(img && scale > 1.001);
  if (img) img.style.transform = zoomed ? `translate3d(${x}px,${y}px,0) scale(${scale})` : '';
  page?.classList.toggle('is-zoomed',zoomed);
  fullReader.classList.toggle('is-zoomed',zoomed);
  readerZoomIndicator.textContent = `${Math.round(scale*100)}%`;
}

function resetFullReaderZoom(){
  if (fullReaderZoom.img) fullReaderZoom.img.style.transform = '';
  fullReaderZoom.page?.classList.remove('is-zoomed');
  Object.assign(fullReaderZoom,{
    page:null,
    img:null,
    scale:1,
    x:0,
    y:0,
    mode:'',
    startDistance:0,
    startScale:1,
    anchorX:0,
    anchorY:0,
    panStartX:0,
    panStartY:0,
    startX:0,
    startY:0
  });
  fullReader.classList.remove('is-zoomed','is-zoom-interacting');
  readerZoomIndicator.textContent = '100%';
}

function beginFullReaderPinch(event){
  const page = event.target.closest?.('.reader-page') || currentFullReaderPage();
  if (!setFullReaderZoomTarget(page)) return;
  const [first,second] = event.touches;
  const midpoint = touchMidpoint(first,second);
  const rect = fullReaderZoom.page.getBoundingClientRect();
  fullReaderZoom.mode = 'pinch';
  fullReaderZoom.startDistance = Math.max(1,touchDistance(first,second));
  fullReaderZoom.startScale = fullReaderZoom.scale;
  fullReaderZoom.anchorX = (midpoint.x-(rect.left+rect.width/2)-fullReaderZoom.x)/fullReaderZoom.scale;
  fullReaderZoom.anchorY = (midpoint.y-(rect.top+rect.height/2)-fullReaderZoom.y)/fullReaderZoom.scale;
  fullReader.classList.add('is-zoom-interacting');
  event.preventDefault();
}

function beginFullReaderPan(event){
  if (fullReaderZoom.scale <= 1 || event.touches.length !== 1) return;
  const page = event.target.closest?.('.reader-page');
  if (page !== fullReaderZoom.page) return;
  const touch = event.touches[0];
  fullReaderZoom.mode = 'pan';
  fullReaderZoom.panStartX = touch.clientX;
  fullReaderZoom.panStartY = touch.clientY;
  fullReaderZoom.startX = fullReaderZoom.x;
  fullReaderZoom.startY = fullReaderZoom.y;
  fullReader.classList.add('is-zoom-interacting');
  event.preventDefault();
}

readerScroll.addEventListener('touchstart',event=>{
  if (!fullReader.classList.contains('open')) return;
  if (event.touches.length === 2) beginFullReaderPinch(event);
  else if (event.touches.length === 1) beginFullReaderPan(event);
},{passive:false});

readerScroll.addEventListener('touchmove',event=>{
  if (!fullReader.classList.contains('open')) return;
  if (event.touches.length === 2) {
    if (fullReaderZoom.mode !== 'pinch') beginFullReaderPinch(event);
    if (fullReaderZoom.mode !== 'pinch' || !fullReaderZoom.page) return;
    const [first,second] = event.touches;
    const midpoint = touchMidpoint(first,second);
    const rect = fullReaderZoom.page.getBoundingClientRect();
    fullReaderZoom.scale = clampNumber(
      fullReaderZoom.startScale*(touchDistance(first,second)/fullReaderZoom.startDistance),
      1,
      4
    );
    fullReaderZoom.x = midpoint.x-(rect.left+rect.width/2)-fullReaderZoom.anchorX*fullReaderZoom.scale;
    fullReaderZoom.y = midpoint.y-(rect.top+rect.height/2)-fullReaderZoom.anchorY*fullReaderZoom.scale;
    clampFullReaderPan();
    renderFullReaderZoom();
    event.preventDefault();
    return;
  }
  if (event.touches.length === 1 && fullReaderZoom.mode === 'pan' && fullReaderZoom.scale > 1) {
    const touch = event.touches[0];
    fullReaderZoom.x = fullReaderZoom.startX+(touch.clientX-fullReaderZoom.panStartX);
    fullReaderZoom.y = fullReaderZoom.startY+(touch.clientY-fullReaderZoom.panStartY);
    clampFullReaderPan();
    renderFullReaderZoom();
    event.preventDefault();
  }
},{passive:false});

readerScroll.addEventListener('touchend',event=>{
  if (!fullReaderZoom.mode) return;
  if (event.touches.length === 1 && fullReaderZoom.scale > 1) {
    const touch = event.touches[0];
    fullReaderZoom.mode = 'pan';
    fullReaderZoom.panStartX = touch.clientX;
    fullReaderZoom.panStartY = touch.clientY;
    fullReaderZoom.startX = fullReaderZoom.x;
    fullReaderZoom.startY = fullReaderZoom.y;
    return;
  }
  fullReaderZoom.mode = '';
  fullReader.classList.remove('is-zoom-interacting');
  if (fullReaderZoom.scale < 1.04) {
    fullReaderZoom.scale = 1;
    fullReaderZoom.x = 0;
    fullReaderZoom.y = 0;
  }
  clampFullReaderPan();
  renderFullReaderZoom();
},{passive:true});

readerScroll.addEventListener('touchcancel',()=>{
  fullReaderZoom.mode = '';
  fullReader.classList.remove('is-zoom-interacting');
  clampFullReaderPan();
  renderFullReaderZoom();
},{passive:true});

function setPublicationTab(tab){
  const showOverview = tab !== 'web';
  readerOverviewTab.classList.toggle('active', showOverview);
  readerWebTab.classList.toggle('active', !showOverview);
  readerOverviewTab.setAttribute('aria-selected', String(showOverview));
  readerWebTab.setAttribute('aria-selected', String(!showOverview));
  readerOverviewPane.hidden = !showOverview;
  readerWebPane.hidden = showOverview;
  if (!showOverview) {
    window.setTimeout(()=>openFullReaderButton.focus({preventScroll:true}),30);
  }
}

document.querySelectorAll('[data-reader-tab]').forEach(button=>{
  button.addEventListener('click',()=>setPublicationTab(button.dataset.readerTab));
});

function bindHorizontalSwipe(element, onSwipe){
  if (!element) return;
  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let tracking = false;
  let verticalGesture = false;

  element.addEventListener('touchstart', event=>{
    if (event.touches.length !== 1) {
      tracking = false;
      return;
    }
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startTime = performance.now();
    tracking = true;
    verticalGesture = false;
  }, {passive:true});

  element.addEventListener('touchmove', event=>{
    if (!tracking || event.touches.length !== 1) return;
    const touch = event.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dy) > 18 && Math.abs(dy) > Math.abs(dx)) verticalGesture = true;
  }, {passive:true});

  element.addEventListener('touchend', event=>{
    if (!tracking || verticalGesture || event.changedTouches.length !== 1) {
      tracking = false;
      return;
    }
    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    const elapsed = performance.now() - startTime;
    tracking = false;
    if (elapsed > 900 || Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
    onSwipe(dx > 0 ? 'right' : 'left');
  }, {passive:true});

  element.addEventListener('touchcancel', ()=>{
    tracking = false;
  }, {passive:true});
}

bindHorizontalSwipe(readerSheet, direction=>{
  if (!readerSheet.classList.contains('open') || fullReader.classList.contains('open')) return;
  if (direction === 'right') closeSheet('readerSheet');
});

function updateReaderPagePosition(){
  readerScrollFrame = null;
  if (!currentPaper || !fullReader.classList.contains('open')) return;
  const pageHeight = Math.max(1, readerScroll.clientHeight);
  const pageIndex = Math.min(currentPaper.pageCount, Math.max(1, Math.round(readerScroll.scrollTop / pageHeight) + 1));
  readerPageCounter.textContent = `${pageIndex} / ${currentPaper.pageCount}`;
  readerProgressBar.style.width = `${(pageIndex / currentPaper.pageCount) * 100}%`;
}

readerScroll.addEventListener('scroll',()=>{
  if (readerScrollFrame) return;
  readerScrollFrame = window.requestAnimationFrame(updateReaderPagePosition);
},{passive:true});

function resetFullReaderPages(){
  const wrap = document.getElementById('readerPages');
  resetFullReaderZoom();
  readerScroll.scrollTop = 0;
  wrap.innerHTML = '';
  wrap.dataset.loaded = '';
  readerPageCounter.textContent = currentPaper ? `1 / ${currentPaper.pageCount}` : '1 / 1';
  readerProgressBar.style.width = currentPaper ? `${100 / currentPaper.pageCount}%` : '0%';
}

function loadFullReaderPages(p){
  const wrap = document.getElementById('readerPages');
  if (wrap.dataset.loaded === p.slug) return;
  wrap.innerHTML = p.pages.map((src, idx)=>`
    <figure class="reader-page" data-page="${idx+1}">
      <img src="${src}" alt="${(usesChineseContent()?p.fullTitleZh:p.fullTitleEn)} · ${usesChineseContent()?'第':'Page'} ${idx+1} ${usesChineseContent()?'页':''}" decoding="async" loading="${idx < 2 ? 'eager' : 'lazy'}" fetchpriority="${idx < 2 ? 'high' : 'low'}">
      <figcaption>${idx+1} / ${p.pageCount}</figcaption>
    </figure>`).join('');
  wrap.dataset.loaded = p.slug;
  readerScroll.scrollTop = 0;
  readerPageCounter.textContent = `1 / ${p.pageCount}`;
  readerProgressBar.style.width = `${100 / p.pageCount}%`;

  [...wrap.querySelectorAll('img')].forEach(img=>{
    const settle = ok=>{
      const page = img.closest('.reader-page');
      if (page.dataset.settled) return;
      page.dataset.settled = 'true';
      if (ok) page.classList.add('is-ready');
      else {
        page.classList.add('is-error');
        img.remove();
        page.insertAdjacentHTML('afterbegin', `<span>${usesChineseContent()?'本页暂未载入':'This page could not be loaded'}</span>`);
      }
    };
    img.addEventListener('load',()=>settle(true),{once:true});
    img.addEventListener('error',()=>settle(false),{once:true});
    if (img.complete) settle(img.naturalWidth > 0);
  });
}

function pushFullReaderHistory(){
  if (history.state?.hclFullReader) {
    fullReaderHistoryPushed = true;
    return;
  }
  try {
    history.pushState({...(history.state || {}), hclFullReader:true, slug:currentPaper?.slug || ''}, '', location.href);
    fullReaderHistoryPushed = true;
  } catch (error) {
    fullReaderHistoryPushed = false;
  }
}

function openFullReader(){
  if (!currentPaper || fullReader.classList.contains('open')) return;
  fullReaderTitle.textContent = usesChineseContent()?currentPaper.fullTitleZh:currentPaper.fullTitleEn;
  resetFullReaderPages();
  loadFullReaderPages(currentPaper);
  fullReader.classList.add('open');
  fullReader.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  pushFullReaderHistory();
  window.setTimeout(()=>showGestureCue(
    fullReader,
    'page-reader-vertical',
    {coach:true,direction:'vertical',label:usesChineseContent()?'向上滑动逐页阅读':'SWIPE UP TO READ PAGE BY PAGE'}
  ),360);

  const requestFullscreen = fullReader.requestFullscreen || fullReader.webkitRequestFullscreen;
  if (requestFullscreen && !(document.fullscreenElement || document.webkitFullscreenElement)) {
    try {
      const request = requestFullscreen === fullReader.requestFullscreen
        ? requestFullscreen.call(fullReader,{navigationUI:'hide'})
        : requestFullscreen.call(fullReader);
      request?.then?.(()=>{ fullReaderWasFullscreen = true; }).catch?.(()=>{});
    } catch (error) {}
  }
}

function finishCloseFullReader(){
  resetFullReaderZoom();
  fullReader.classList.remove('open');
  fullReader.setAttribute('aria-hidden','true');
  fullReaderWasFullscreen = false;
  fullReaderClosing = false;
  if (![...document.querySelectorAll('.sheet.open')].length) document.body.style.overflow='';
  if (readerSheet?.classList.contains('open')) {
    window.setTimeout(()=>{
      setPublicationTab('web');
      try { openFullReaderButton.focus({preventScroll:true}); } catch (error) {}
    },40);
  } else {
    document.body.style.overflow='';
    window.setTimeout(returnToOpenedPaperCard,60);
  }
}

function closeFullReader(options={}){
  if (!fullReader.classList.contains('open') || fullReaderClosing) return;
  fullReaderClosing = true;
  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
  if (fullscreenElement && !options.skipFullscreenExit) {
    const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;
    try {
      const result = exitFullscreen?.call(document);
      if (result?.then) {
        result.catch(()=>{}).finally(finishCloseFullReader);
        return;
      }
    } catch (error) {}
  }
  finishCloseFullReader();
}

function requestCloseFullReader(){
  if (fullReaderHistoryPushed && history.state?.hclFullReader) {
    if (!historyDismissPending) {
      historyDismissPending = 'full-reader';
      history.back();
    }
  } else {
    closeFullReader();
  }
}

function openReader(slug){
  readerReturnSlug = slug;
  currentPaper = data.papers.find(x=>x.slug===slug);
  if (!currentPaper) return;
  document.getElementById('readerTitle').textContent = usesChineseContent()?currentPaper.fullTitleZh:currentPaper.fullTitleEn;
  document.getElementById('readerSourceMeta').textContent = usesChineseContent()
    ? `${currentPaper.authorsZh} · ${currentPaper.year} · ${currentPaper.pageCount} 页`
    : `${currentPaper.authorsEn} · ${currentPaper.year} · ${currentPaper.pageCount} pages`;
  updateReaderOverview(currentPaper);
  readerPreviewMeta.textContent = usesChineseContent()
    ? `${currentPaper.pageCount} 页`
    : `${currentPaper.pageCount} pages`;
  readerPreviewStatus.textContent = usesChineseContent()?'正在载入论文第一页':'Loading the first page';
  readerPreviewImage.src = '';
  readerPreviewImage.alt = `${usesChineseContent()?currentPaper.fullTitleZh:currentPaper.fullTitleEn} · ${usesChineseContent()?'第一页':'first page'}`;
  readerPreviewImage.src = currentPaper.pages[0];
  setPublicationTab('web');
  resetFullReaderPages();
  openSheet('readerSheet');
}

readerPreviewImage.addEventListener('load',()=>{
  readerPreviewStatus.textContent = t('readerPreviewReady');
  openFullReaderButton.classList.add('is-ready');
});
readerPreviewImage.addEventListener('error',()=>{
  readerPreviewStatus.textContent = t('readerFailed');
  openFullReaderButton.classList.remove('is-ready');
});
openFullReaderButton.addEventListener('click',openFullReader);
bindHorizontalSwipe(fullReader, direction=>{
  if (fullReader.classList.contains('is-zoomed') || fullReader.classList.contains('is-zoom-interacting')) return;
  if (direction === 'right') requestCloseFullReader();
});

function handleFullReaderFullscreenChange(){
  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
  if (fullscreenElement === fullReader) {
    fullReaderWasFullscreen = true;
    return;
  }
  if (!fullscreenElement && fullReaderWasFullscreen && fullReader.classList.contains('open') && !fullReaderClosing) {
    if (history.state?.hclFullReader) history.back();
    else closeFullReader({skipFullscreenExit:true});
  }
}
document.addEventListener('fullscreenchange',handleFullReaderFullscreenChange);
document.addEventListener('webkitfullscreenchange',handleFullReaderFullscreenChange);

window.addEventListener('popstate',event=>{
  historyDismissPending = '';
  if (fullReader.classList.contains('open')) {
    fullReaderHistoryPushed = false;
    closeFullReader();
    return;
  }
  if (!directionStory.hidden) {
    closeDirectionStory({fromHistory:true});
    return;
  }
  if (updateShowcase && !updateShowcase.hidden) {
    closeHealingUpdate({fromHistory:true});
    return;
  }
  if (!projectShowcase.hidden) {
    closeBuiltProject({fromHistory:true});
    return;
  }
  if (!copyrightPage.hidden) {
    closeCopyrightPage({fromHistory:true});
    return;
  }
  const openSheets = [...document.querySelectorAll('.sheet.open')];
  if (openSheets.length) {
    closeSheet(openSheets[openSheets.length-1].id,{fromHistory:true});
    return;
  }
  if (!brandStory.hidden) {
    closeBrandStory({fromHistory:true});
    return;
  }
  if (event.state?.hclBase) {
    if (navigateToPreviousPrimarySection()) {
      pushMainHistoryGuard();
      return;
    }
    if (Date.now() < exitBackArmedUntil) {
      exitBackArmedUntil = 0;
      history.back();
      return;
    }
    exitBackArmedUntil = Date.now()+1800;
    showNavigationToast(usesChineseContent()?'已返回首个板块 · 再返回一次退出网页':'At the first section · press Back again to exit',1800);
    pushMainHistoryGuard();
  }
});

document.addEventListener('keydown',event=>{
  if (!brandStory.hidden && event.key === 'Escape') {
    event.preventDefault();
    event.stopImmediatePropagation();
    closeBrandStory();
    return;
  }
  if (!copyrightPage.hidden && event.key === 'Escape') {
    event.preventDefault();
    closeCopyrightPage();
    return;
  }
  if (updateShowcase && !updateShowcase.hidden) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeHealingUpdate();
      return;
    }
  }
  if (!projectShowcase.hidden) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeBuiltProject();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setProjectGalleryIndex(currentProjectImageIndex-1);
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setProjectGalleryIndex(currentProjectImageIndex+1);
      return;
    }
  }
  if (!directionStory.hidden) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDirectionStory();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      switchDirectionStory(currentDirectionIndex-1,-1);
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      switchDirectionStory(currentDirectionIndex+1,1);
      return;
    }
  }
  if (fullReader.classList.contains('open')) {
    if (event.key === 'Escape') {
      event.preventDefault();
      requestCloseFullReader();
      return;
    }
    const forward = event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ';
    const backward = event.key === 'ArrowUp' || event.key === 'PageUp';
    if (!forward && !backward) return;
    if (fullReader.classList.contains('is-zoomed')) return;
    event.preventDefault();
    readerScroll.scrollBy({top:(forward ? 1 : -1) * readerScroll.clientHeight,behavior:'smooth'});
    return;
  }
  if (event.key === 'Escape') document.querySelectorAll('.sheet.open').forEach(el=>closeSheet(el.id));
});

const shownGestureCues = new Set();

function gestureCueMarkup(direction,label){
  const horizontalArrow = '<path class="gesture-arrow gesture-arrow-x" d="M7 29h22m-22 0 4-3m-4 3 4 3m18-3-4-3m4 3-4 3"/>';
  const verticalArrow = '<path class="gesture-arrow gesture-arrow-y" d="M31 7v20m0-20-3 4m3-4 3 4m-3 16-3-4m3 4 3-4"/>';
  const arrow = direction === 'horizontal'
    ? horizontalArrow
    : direction === 'both'
      ? `${horizontalArrow}${verticalArrow}`
      : verticalArrow;
  return `
    <svg viewBox="0 0 38 34" aria-hidden="true">
      <rect class="gesture-phone" x="9" y="2" width="18" height="29" rx="4"/>
      <rect class="gesture-screen" x="12" y="6" width="12" height="19" rx="1.5"/>
      <g class="gesture-hand">
        <path d="M24.4 18.2c-.2-1.3-1.7-1.7-2.4-.8l-.1-4c0-1.7-2.5-1.7-2.5 0v5.2l-1-1.2c-1-1.2-2.8.3-1.9 1.5l2.9 4c.6.8 1.5 1.2 2.5 1.2h2.4c1.6 0 2.8-1.2 2.8-2.8v-3c0-1.4-1.8-1.8-2.7-.9z"/>
      </g>
      ${arrow}
    </svg>
    <small>${label}</small>`;
}

function ensureGestureCue(target,key,options={}){
  if (!target) return null;
  let cue = target.querySelector(`.gesture-cue[data-gesture-key="${key}"]`);
  if (cue) return cue;
  const direction = options.direction || (key.includes('horizontal')?'horizontal':key.includes('both')?'both':'vertical');
  cue = document.createElement('div');
  cue.className = `gesture-cue gesture-cue--${direction}${options.coach?' gesture-cue--coach':''}`;
  cue.dataset.gestureKey = key;
  cue.setAttribute('aria-hidden','true');
  const chinese = usesChineseContent();
  const label = options.label || (
    direction === 'horizontal'
      ? (chinese?'左右滑动查看更多':'SWIPE FOR MORE')
      : direction === 'both'
        ? (chinese?'上下滑动阅读 · 左右滑动切换':'SWIPE VERTICALLY · SWIPE SIDEWAYS')
        : (chinese?'向上滑动查看更多':'SWIPE UP FOR MORE')
  );
  cue.innerHTML = gestureCueMarkup(direction,label);
  target.appendChild(cue);
  return cue;
}

function showGestureCue(target,key,options={}){
  if (!target || shownGestureCues.has(key) || (document.body.classList.contains('brand-story-open') && !options.allowWhileBrand)) return;
  const cue = ensureGestureCue(target,key,options);
  if (!cue) return;
  shownGestureCues.add(key);
  window.requestAnimationFrame(()=>cue.classList.add('is-visible'));
  const dismiss = ()=>{
    cue.classList.remove('is-visible');
    target.removeEventListener('touchstart',dismiss);
    target.removeEventListener('pointerdown',dismiss);
    target.removeEventListener('wheel',dismiss);
  };
  target.addEventListener('touchstart',dismiss,{passive:true});
  target.addEventListener('pointerdown',dismiss,{passive:true});
  target.addEventListener('wheel',dismiss,{passive:true});
  window.setTimeout(dismiss,options.coach?2350:2600);
}

function initGestureGuides(){
  const verticalPortals = [...document.querySelectorAll('[data-section-portal]')];
  verticalPortals.forEach(portal=>ensureGestureCue(portal,`portal-${portal.dataset.sectionPortal}`));
  ensureGestureCue(libraryCarousel,'library-horizontal');

  const directionMini = directionStoryScrollHint?.querySelector('i');
  if (directionMini) {
    directionMini.className = 'gesture-mini';
    directionMini.textContent = '';
  }

  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (!entry.isIntersecting || entry.intersectionRatio < .58) return;
      const target = entry.target;
      if (target === libraryCarousel) showGestureCue(target,'library-horizontal');
      else showGestureCue(target,`portal-${target.dataset.sectionPortal}`);
    });
  },{threshold:[.58]});
  verticalPortals.forEach(portal=>observer.observe(portal));
  if (libraryCarousel) observer.observe(libraryCarousel);
}


/* V17 · Arabic numerals restored. Transition-page numbering is hidden by CSS only. */
applyStaticText();
renderProfile();
renderHealingNews();
renderNewsPortal();
setupLibraryCarousel();
initGestureGuides();
renderBuiltProjects();
renderTeam();
renderAchievementSheet();
renderFilters();
renderWall();
initializeSafeBackNavigation();
setupSectionPortalObserver();
setupEdgeBackGesture();
if (!brandStory.hidden) {
  pushLayerHistory('brand-story');
  window.requestAnimationFrame(()=>brandStoryClose?.focus({preventScroll:true}));
}
if (activeGlobalLanguage && ALL_GOOGLE_LANGUAGE_OPTIONS.some(item => item.code === activeGlobalLanguage)) {
  window.setTimeout(() => {
    const storedCode = activeGlobalLanguage;
    activeGlobalLanguage = '';
    applyInPageGoogleTranslation(storedCode);
  }, 80);
}
