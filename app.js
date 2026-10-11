/* JaduLoader translations. To add a language: add an entry in `languages` and a block in `strings`.
   Missing keys automatically fall back to English. */
window.JADULOADER_I18N = {
  languages: [
    { code: 'en', name: 'English',  html: 'en',    hl: 'en',    dir: 'ltr' },
    { code: 'ur', name: 'اردو',     html: 'ur',    hl: 'ur',    dir: 'rtl' },
    { code: 'ar', name: 'العربية',  html: 'ar',    hl: 'ar',    dir: 'rtl' },
    { code: 'zh', name: '中文',      html: 'zh-CN', hl: 'zh-CN', dir: 'ltr' },
    { code: 'fr', name: 'Français', html: 'fr',    hl: 'fr',    dir: 'ltr' },
    { code: 'es', name: 'Español',  html: 'es',    hl: 'es',    dir: 'ltr' },
    { code: 'hi', name: 'हिन्दी',    html: 'hi',    hl: 'hi',    dir: 'ltr' }
  ],
  strings: {
    en: {
      doc_title: 'Jaduloader — Search, Play & Convert',
      lang_label: 'Language', nav_history: 'History', nav_convert: 'Convert file', nav_faq: 'FAQ', nav_about: 'About',
      checking: 'Checking backend…', backend_ok: 'Backend connected', search_key: 'Search key needed', backend_down: 'Backend unavailable',
      kicker: 'YOUR MEDIA, IN ONE PLACE', h1a: 'Search it.', h1b: 'Play it. Convert it.',
      intro: 'Search videos from all YouTube channels, preview what you find, and prepare MP3 or MP4 files only when you have permission to download them.',
      search_label: 'Search YouTube or paste a video URL', placeholder: 'Search YouTube or paste a video link…',
      clear: 'Clear search', copy: 'Copy search text or URL', search_btn: 'Search videos', searching: 'Searching…', suggestions: 'Search suggestions',
      hint: 'Search results may come from any channel. A fresh YouTube Data API key is required on the backend for search.',
      step1: 'Search', step2: 'Play', step3: 'Choose MP3 or MP4',
      results_title: 'Video results', results_meta: 'Results: {n} · all channels', badge: 'ALL CHANNELS',
      disclaimer_b: 'Download responsibly:', disclaimer: 'MP3/MP4 processing is available across search results only after you confirm that you own the video or have permission to download it. Platform restrictions still apply; the service does not use cookies or bypass sign-in challenges.',
      history_title: 'Recent downloads', history_sub: 'Stored only in this browser. Clear it any time.', clear_history: 'Clear history',
      history_empty: 'No downloads yet. Your completed downloads will appear here.', history_prepared: 'Download prepared', history_cleared: 'Local history cleared.',
      convert_title: 'Convert a file you own', convert_sub: 'Upload an authorized audio/video file and save a converted copy.',
      drop_title: 'Drop a media file here or choose one', drop_hint: 'Maximum 150 MB · up to 2 hours', output_format: 'Output format',
      fmt_mp3: 'MP3 audio', fmt_mp4: 'MP4 video', convert_btn: 'Convert & download',
      convert_idle: 'Choose a file to start. Files are processed temporarily on the backend.',
      convert_privacy: 'Only convert files you own or have permission to use. Temporary uploaded files and outputs are deleted automatically.',
      about_k: 'ABOUT', about_title: 'Built for a simple flow.',
      about_text: 'Jaduloader is a static HTML, CSS and vanilla JavaScript frontend connected to a separately configured API backend. It has no account system and no third-party frontend scripts.',
      faq_k: 'FAQ', faq_title: 'Quick answers',
      q1: 'Why are downloads confirmed per video?', a1: 'The confirmation records that you own or have permission for the particular media. Do not download content you are not authorized to use.',
      q2: 'Why might a YouTube download fail?', a2: 'YouTube may block automated access or a video may be private, unavailable, or restricted. The backend does not use sign-in cookies or bypass those restrictions.',
      q3: 'Where is my history stored?', a3: 'Recent-download history is saved locally in this browser and is not sent to the backend.',
      contact_k: 'CONTACT', contact_title: 'Need help with Jaduloader?', contact_default: 'Set a support email in config.js to display a contact link.',
      contact_email: 'Email {email} for support.', contact_btn: 'Contact',
      privacy_t: 'Privacy Policy', privacy_p: 'Search queries and typing suggestions are sent to the configured backend, the YouTube Data API and Google’s suggestion service. Download history stays in this browser. Uploaded files and prepared outputs are temporary and subject to the backend’s retention settings.',
      terms_t: 'Terms', terms_p: 'Use Jaduloader only for media you own or are authorized to process. Respect copyright and platform terms. The tool does not guarantee that every video or format will be available.',
      copyright: '© 2026 Jaduloader. All rights reserved.',
      dlg_k: 'ONE VIDEO · ONE CONFIRMATION', dlg_title: 'Confirm download rights',
      dlg_copy: 'Download this video only if you own it or have permission from the rights holder. Jaduloader will not bypass YouTube sign-in, privacy, or access restrictions.',
      dlg_check: 'I confirm I am authorized to download this video.', dlg_cancel: 'Cancel', dlg_confirm: 'Continue to download',
      dlg_fallback: 'Selected YouTube video', close: 'Close',
      play: 'Play', playing: 'Playing', card_note: 'Download requires confirmation that you have rights to this video.',
      preparing: 'Preparing…', converting: 'Converting…', uploading: 'Uploading and converting. Keep this tab open.',
      err_backend: 'Could not reach the backend. Check API_BASE_URL in config.js, the API service, and its CORS origin settings.',
      err_request: 'Backend request failed ({n}).', err_convert: 'Conversion failed ({n}).', err_no_url: 'The backend did not return a download URL.',
      enter_query: 'Enter a search term or paste a YouTube video link.', status_searching: 'Searching public video results across YouTube channels…',
      no_results: 'No videos found. Try a different title or video URL.', found: 'Videos found: {n}.', copied: 'Copied to clipboard.',
      copy_first: 'Enter a search term or video URL first.',
      prepared: '{name} prepared. The temporary link expires in {min} minutes.', file_ready: '{name} is ready. Temporary download expires in {min} minutes.',
      key_needed: 'Backend is running. Add a fresh YOUTUBE_API_KEY to the backend .env file to enable all-channel search.',
      down_msg: 'Backend unavailable. Configure API_BASE_URL in config.js and check the backend CORS settings.',
      yt_video: 'YouTube video', yt_channel: 'YouTube channel', thumb_alt: 'Thumbnail for {title}', player_title: 'YouTube player: {title}'
    },
    ur: {
      doc_title: 'جادو لوڈر — تلاش کریں، چلائیں اور تبدیل کریں',
      lang_label: 'زبان', nav_history: 'ہسٹری', nav_convert: 'فائل تبدیل کریں', nav_faq: 'عمومی سوالات', nav_about: 'تعارف',
      checking: 'بیک اینڈ چیک ہو رہا ہے…', backend_ok: 'بیک اینڈ جڑا ہوا ہے', search_key: 'سرچ کی درکار ہے', backend_down: 'بیک اینڈ دستیاب نہیں',
      kicker: 'آپ کا میڈیا، ایک ہی جگہ', h1a: 'تلاش کریں۔', h1b: 'چلائیں۔ تبدیل کریں۔',
      intro: 'یوٹیوب کے تمام چینلز سے ویڈیوز تلاش کریں، پری ویو دیکھیں، اور MP3 یا MP4 فائل صرف اسی وقت تیار کریں جب آپ کو ڈاؤن لوڈ کی اجازت ہو۔',
      search_label: 'یوٹیوب پر تلاش کریں یا ویڈیو لنک پیسٹ کریں', placeholder: 'یوٹیوب پر تلاش کریں یا ویڈیو لنک پیسٹ کریں…',
      clear: 'تلاش صاف کریں', copy: 'تلاش کا متن یا لنک کاپی کریں', search_btn: 'ویڈیوز تلاش کریں', searching: 'تلاش جاری ہے…', suggestions: 'تلاش کی تجاویز',
      hint: 'نتائج کسی بھی چینل سے آ سکتے ہیں۔ تلاش کے لیے بیک اینڈ پر نئی YouTube Data API کی درکار ہے۔',
      step1: 'تلاش', step2: 'چلائیں', step3: 'MP3 یا MP4 چنیں',
      results_title: 'ویڈیو نتائج', results_meta: 'نتائج: {n} · تمام چینلز', badge: 'تمام چینلز',
      disclaimer_b: 'ذمہ داری سے ڈاؤن لوڈ کریں:', disclaimer: 'MP3/MP4 پروسیسنگ صرف اس تصدیق کے بعد ممکن ہے کہ ویڈیو آپ کی ملکیت ہے یا آپ کو ڈاؤن لوڈ کی اجازت حاصل ہے۔ پلیٹ فارم کی پابندیاں پھر بھی لاگو رہتی ہیں؛ سروس کوکیز استعمال نہیں کرتی اور سائن اِن کی رکاوٹیں عبور نہیں کرتی۔',
      history_title: 'حالیہ ڈاؤن لوڈز', history_sub: 'صرف اسی براؤزر میں محفوظ ہے۔ جب چاہیں صاف کریں۔', clear_history: 'ہسٹری صاف کریں',
      history_empty: 'ابھی کوئی ڈاؤن لوڈ نہیں۔ مکمل ڈاؤن لوڈز یہاں نظر آئیں گے۔', history_prepared: 'ڈاؤن لوڈ تیار ہوا', history_cleared: 'مقامی ہسٹری صاف ہو گئی۔',
      convert_title: 'اپنی فائل تبدیل کریں', convert_sub: 'اجازت شدہ آڈیو/ویڈیو فائل اپلوڈ کریں اور تبدیل شدہ کاپی محفوظ کریں۔',
      drop_title: 'میڈیا فائل یہاں ڈراپ کریں یا منتخب کریں', drop_hint: 'زیادہ سے زیادہ 150 MB · 2 گھنٹے تک', output_format: 'آؤٹ پٹ فارمیٹ',
      fmt_mp3: 'MP3 آڈیو', fmt_mp4: 'MP4 ویڈیو', convert_btn: 'تبدیل کریں اور ڈاؤن لوڈ کریں',
      convert_idle: 'شروع کرنے کے لیے فائل چنیں۔ فائلیں بیک اینڈ پر عارضی طور پر پروسیس ہوتی ہیں۔',
      convert_privacy: 'صرف وہی فائلیں تبدیل کریں جو آپ کی ہیں یا جن کے استعمال کی اجازت ہے۔ عارضی اپلوڈ اور آؤٹ پٹ خودبخود حذف ہو جاتے ہیں۔',
      about_k: 'تعارف', about_title: 'سادہ انداز کے لیے بنایا گیا۔',
      about_text: 'جادو لوڈر ایک اسٹیٹک HTML، CSS اور وینیلا JavaScript فرنٹ اینڈ ہے جو الگ سے سیٹ اپ شدہ API بیک اینڈ سے جڑا ہے۔ اس میں اکاؤنٹ سسٹم نہیں اور کوئی تھرڈ پارٹی فرنٹ اینڈ اسکرپٹ نہیں۔',
      faq_k: 'عمومی سوالات', faq_title: 'فوری جوابات',
      q1: 'ہر ویڈیو کے لیے تصدیق کیوں لی جاتی ہے؟', a1: 'یہ تصدیق ریکارڈ کرتی ہے کہ مخصوص میڈیا آپ کی ملکیت ہے یا آپ کو اس کی اجازت حاصل ہے۔ جس مواد کے استعمال کی اجازت نہ ہو اسے ڈاؤن لوڈ نہ کریں۔',
      q2: 'یوٹیوب ڈاؤن لوڈ ناکام کیوں ہو سکتا ہے؟', a2: 'یوٹیوب خودکار رسائی روک سکتا ہے یا ویڈیو پرائیویٹ، غیر دستیاب یا پابندی والی ہو سکتی ہے۔ بیک اینڈ سائن اِن کوکیز استعمال نہیں کرتا اور ان پابندیوں کو عبور نہیں کرتا۔',
      q3: 'میری ہسٹری کہاں محفوظ ہوتی ہے؟', a3: 'حالیہ ڈاؤن لوڈ ہسٹری اسی براؤزر میں محفوظ ہوتی ہے اور بیک اینڈ کو نہیں بھیجی جاتی۔',
      contact_k: 'رابطہ', contact_title: 'جادو لوڈر کے بارے میں مدد چاہیے؟', contact_default: 'رابطے کا لنک دکھانے کے لیے config.js میں سپورٹ ای میل سیٹ کریں۔',
      contact_email: 'مدد کے لیے {email} پر ای میل کریں۔', contact_btn: 'رابطہ کریں',
      privacy_t: 'پرائیویسی پالیسی', privacy_p: 'تلاش کے الفاظ اور ٹائپنگ تجاویز بیک اینڈ، YouTube Data API اور گوگل کی تجاویز سروس کو بھیجی جاتی ہیں۔ ڈاؤن لوڈ ہسٹری اسی براؤزر میں رہتی ہے۔ اپلوڈ شدہ فائلیں اور تیار آؤٹ پٹ عارضی ہیں اور بیک اینڈ کی ریٹینشن سیٹنگز کے تحت ہیں۔',
      terms_t: 'شرائط', terms_p: 'جادو لوڈر صرف اسی میڈیا کے لیے استعمال کریں جو آپ کا ہو یا جسے پروسیس کرنے کی اجازت ہو۔ کاپی رائٹ اور پلیٹ فارم کی شرائط کا احترام کریں۔ ہر ویڈیو یا فارمیٹ کے دستیاب ہونے کی ضمانت نہیں۔',
      copyright: '© 2026 جادو لوڈر۔ جملہ حقوق محفوظ ہیں۔',
      dlg_k: 'ایک ویڈیو · ایک تصدیق', dlg_title: 'ڈاؤن لوڈ کے حقوق کی تصدیق کریں',
      dlg_copy: 'یہ ویڈیو صرف تب ڈاؤن لوڈ کریں جب یہ آپ کی ہو یا حقوق رکھنے والے کی اجازت ہو۔ جادو لوڈر یوٹیوب کے سائن اِن، پرائیویسی یا رسائی کی پابندیاں عبور نہیں کرے گا۔',
      dlg_check: 'میں تصدیق کرتا/کرتی ہوں کہ مجھے یہ ویڈیو ڈاؤن لوڈ کرنے کی اجازت ہے۔', dlg_cancel: 'منسوخ کریں', dlg_confirm: 'ڈاؤن لوڈ جاری رکھیں',
      dlg_fallback: 'منتخب یوٹیوب ویڈیو', close: 'بند کریں',
      play: 'چلائیں', playing: 'چل رہی ہے', card_note: 'ڈاؤن لوڈ کے لیے اس ویڈیو کے حقوق کی تصدیق ضروری ہے۔',
      preparing: 'تیار ہو رہا ہے…', converting: 'تبدیل ہو رہا ہے…', uploading: 'اپلوڈ اور تبدیلی جاری ہے۔ یہ ٹیب کھلا رکھیں۔',
      err_backend: 'بیک اینڈ تک رسائی نہیں ہو سکی۔ config.js میں API_BASE_URL، API سروس اور CORS سیٹنگز چیک کریں۔',
      err_request: 'بیک اینڈ درخواست ناکام ہوئی ({n})۔', err_convert: 'تبدیلی ناکام ہوئی ({n})۔', err_no_url: 'بیک اینڈ نے ڈاؤن لوڈ لنک واپس نہیں کیا۔',
      enter_query: 'تلاش کا لفظ لکھیں یا یوٹیوب ویڈیو کا لنک پیسٹ کریں۔', status_searching: 'یوٹیوب چینلز میں عوامی ویڈیوز تلاش ہو رہی ہیں…',
      no_results: 'کوئی ویڈیو نہیں ملی۔ کوئی اور عنوان یا ویڈیو لنک آزمائیں۔', found: 'ملنے والی ویڈیوز: {n}۔', copied: 'کلپ بورڈ پر کاپی ہو گیا۔',
      copy_first: 'پہلے تلاش کا لفظ یا ویڈیو لنک لکھیں۔',
      prepared: '{name} تیار ہو گئی۔ عارضی لنک {min} منٹ میں ختم ہو جائے گا۔', file_ready: '{name} تیار ہے۔ عارضی ڈاؤن لوڈ {min} منٹ میں ختم ہو جائے گا۔',
      key_needed: 'بیک اینڈ چل رہا ہے۔ تمام چینلز کی تلاش کے لیے بیک اینڈ کی .env فائل میں نئی YOUTUBE_API_KEY شامل کریں۔',
      down_msg: 'بیک اینڈ دستیاب نہیں۔ config.js میں API_BASE_URL سیٹ کریں اور بیک اینڈ کی CORS سیٹنگز چیک کریں۔',
      yt_video: 'یوٹیوب ویڈیو', yt_channel: 'یوٹیوب چینل', thumb_alt: '{title} کی تھمب نیل', player_title: 'یوٹیوب پلیئر: {title}'
    },
    ar: {
      doc_title: 'جادو لودر — ابحث وشغّل وحوّل',
      lang_label: 'اللغة', nav_history: 'السجل', nav_convert: 'تحويل ملف', nav_faq: 'الأسئلة الشائعة', nav_about: 'حول',
      checking: 'جارٍ فحص الخادم…', backend_ok: 'الخادم متصل', search_key: 'مفتاح البحث مطلوب', backend_down: 'الخادم غير متاح',
      kicker: 'وسائطك في مكان واحد', h1a: 'ابحث.', h1b: 'شغّل. حوّل.',
      intro: 'ابحث عن مقاطع الفيديو من جميع قنوات يوتيوب، وعاينها، وجهّز ملفات MP3 أو MP4 فقط عندما يكون لديك إذن بتنزيلها.',
      search_label: 'ابحث في يوتيوب أو الصق رابط فيديو', placeholder: 'ابحث في يوتيوب أو الصق رابط فيديو…',
      clear: 'مسح البحث', copy: 'نسخ نص البحث أو الرابط', search_btn: 'بحث عن فيديوهات', searching: 'جارٍ البحث…', suggestions: 'اقتراحات البحث',
      hint: 'قد تأتي النتائج من أي قناة. يتطلب البحث مفتاح YouTube Data API جديدًا على الخادم.',
      step1: 'ابحث', step2: 'شغّل', step3: 'اختر MP3 أو MP4',
      results_title: 'نتائج الفيديو', results_meta: 'النتائج: {n} · جميع القنوات', badge: 'جميع القنوات',
      disclaimer_b: 'نزّل بمسؤولية:', disclaimer: 'تتوفر معالجة MP3/MP4 بعد تأكيدك أنك تملك الفيديو أو لديك إذن بتنزيله. تظل قيود المنصة سارية؛ فالخدمة لا تستخدم ملفات تعريف الارتباط ولا تتجاوز طلبات تسجيل الدخول.',
      history_title: 'التنزيلات الأخيرة', history_sub: 'محفوظة في هذا المتصفح فقط. يمكنك مسحها في أي وقت.', clear_history: 'مسح السجل',
      history_empty: 'لا توجد تنزيلات بعد. ستظهر تنزيلاتك المكتملة هنا.', history_prepared: 'تم تجهيز التنزيل', history_cleared: 'تم مسح السجل المحلي.',
      convert_title: 'حوّل ملفًا تملكه', convert_sub: 'ارفع ملف صوت/فيديو مصرحًا به واحفظ نسخة محوّلة.',
      drop_title: 'أفلت ملف وسائط هنا أو اخترْه', drop_hint: 'الحد الأقصى 150 ميغابايت · حتى ساعتين', output_format: 'صيغة الإخراج',
      fmt_mp3: 'صوت MP3', fmt_mp4: 'فيديو MP4', convert_btn: 'تحويل وتنزيل',
      convert_idle: 'اختر ملفًا للبدء. تتم معالجة الملفات مؤقتًا على الخادم.',
      convert_privacy: 'حوّل فقط الملفات التي تملكها أو لديك إذن باستخدامها. تُحذف الملفات المرفوعة والمخرجات المؤقتة تلقائيًا.',
      about_k: 'حول', about_title: 'مصمم لتجربة بسيطة.',
      about_text: 'جادو لودر واجهة أمامية ثابتة بـ HTML وCSS وJavaScript خالصة، متصلة بخادم API مُعدّ بشكل منفصل. لا يوجد نظام حسابات ولا سكربتات خارجية في الواجهة.',
      faq_k: 'الأسئلة الشائعة', faq_title: 'إجابات سريعة',
      q1: 'لماذا يُطلب التأكيد لكل فيديو؟', a1: 'يسجّل التأكيد أنك تملك الوسائط المحددة أو لديك إذن بها. لا تنزّل محتوى لا يحق لك استخدامه.',
      q2: 'لماذا قد يفشل تنزيل يوتيوب؟', a2: 'قد يحظر يوتيوب الوصول الآلي، أو قد يكون الفيديو خاصًا أو غير متاح أو مقيّدًا. لا يستخدم الخادم ملفات تعريف تسجيل الدخول ولا يتجاوز هذه القيود.',
      q3: 'أين يُحفظ سجلي؟', a3: 'يُحفظ سجل التنزيلات الأخيرة محليًا في هذا المتصفح ولا يُرسل إلى الخادم.',
      contact_k: 'اتصل بنا', contact_title: 'تحتاج مساعدة بخصوص جادو لودر؟', contact_default: 'عيّن بريد دعم في config.js لعرض رابط الاتصال.',
      contact_email: 'راسلنا على {email} للحصول على الدعم.', contact_btn: 'اتصل بنا',
      privacy_t: 'سياسة الخصوصية', privacy_p: 'تُرسل عبارات البحث واقتراحات الكتابة إلى الخادم المُعدّ وYouTube Data API وخدمة الاقتراحات من Google. يبقى سجل التنزيلات في هذا المتصفح. الملفات المرفوعة والمخرجات المجهزة مؤقتة وتخضع لإعدادات الاحتفاظ في الخادم.',
      terms_t: 'الشروط', terms_p: 'استخدم جادو لودر فقط للوسائط التي تملكها أو المصرح لك بمعالجتها. احترم حقوق النشر وشروط المنصات. لا تضمن الأداة توفر كل فيديو أو صيغة.',
      copyright: '© 2026 جادو لودر. جميع الحقوق محفوظة.',
      dlg_k: 'فيديو واحد · تأكيد واحد', dlg_title: 'تأكيد حقوق التنزيل',
      dlg_copy: 'نزّل هذا الفيديو فقط إذا كنت تملكه أو لديك إذن من صاحب الحقوق. لن يتجاوز جادو لودر قيود تسجيل الدخول أو الخصوصية أو الوصول في يوتيوب.',
      dlg_check: 'أؤكد أنني مخوّل بتنزيل هذا الفيديو.', dlg_cancel: 'إلغاء', dlg_confirm: 'متابعة التنزيل',
      dlg_fallback: 'فيديو يوتيوب المحدد', close: 'إغلاق',
      play: 'تشغيل', playing: 'قيد التشغيل', card_note: 'يتطلب التنزيل تأكيد امتلاكك حقوق هذا الفيديو.',
      preparing: 'جارٍ التجهيز…', converting: 'جارٍ التحويل…', uploading: 'جارٍ الرفع والتحويل. أبقِ هذه التبويبة مفتوحة.',
      err_backend: 'تعذّر الوصول إلى الخادم. تحقق من API_BASE_URL في config.js وخدمة API وإعدادات CORS.',
      err_request: 'فشل طلب الخادم ({n}).', err_convert: 'فشل التحويل ({n}).', err_no_url: 'لم يُرجع الخادم رابط تنزيل.',
      enter_query: 'أدخل كلمة بحث أو الصق رابط فيديو يوتيوب.', status_searching: 'جارٍ البحث عن فيديوهات عامة في قنوات يوتيوب…',
      no_results: 'لم يتم العثور على فيديوهات. جرّب عنوانًا أو رابطًا آخر.', found: 'الفيديوهات الموجودة: {n}.', copied: 'تم النسخ إلى الحافظة.',
      copy_first: 'أدخل كلمة بحث أو رابط فيديو أولًا.',
      prepared: 'تم تجهيز {name}. ينتهي الرابط المؤقت خلال {min} دقيقة.', file_ready: '{name} جاهز. ينتهي التنزيل المؤقت خلال {min} دقيقة.',
      key_needed: 'الخادم يعمل. أضف YOUTUBE_API_KEY جديدًا إلى ملف .env في الخادم لتفعيل البحث في جميع القنوات.',
      down_msg: 'الخادم غير متاح. اضبط API_BASE_URL في config.js وتحقق من إعدادات CORS.',
      yt_video: 'فيديو يوتيوب', yt_channel: 'قناة يوتيوب', thumb_alt: 'صورة مصغرة لـ {title}', player_title: 'مشغّل يوتيوب: {title}'
    },
    zh: {
      doc_title: 'Jaduloader — 搜索、播放与转换',
      lang_label: '语言', nav_history: '历史记录', nav_convert: '转换文件', nav_faq: '常见问题', nav_about: '关于',
      checking: '正在检查后端…', backend_ok: '后端已连接', search_key: '需要搜索密钥', backend_down: '后端不可用',
      kicker: '你的媒体，一站搞定', h1a: '搜索。', h1b: '播放。转换。',
      intro: '搜索所有 YouTube 频道的视频，预览结果，仅在你有权下载时才生成 MP3 或 MP4 文件。',
      search_label: '搜索 YouTube 或粘贴视频链接', placeholder: '搜索 YouTube 或粘贴视频链接…',
      clear: '清除搜索', copy: '复制搜索文字或链接', search_btn: '搜索视频', searching: '搜索中…', suggestions: '搜索建议',
      hint: '搜索结果可能来自任何频道。后端需要新的 YouTube Data API 密钥才能搜索。',
      step1: '搜索', step2: '播放', step3: '选择 MP3 或 MP4',
      results_title: '视频结果', results_meta: '结果：{n} · 所有频道', badge: '所有频道',
      disclaimer_b: '请负责任地下载：', disclaimer: '只有在你确认拥有该视频或已获得下载许可后，才能处理 MP3/MP4。平台限制依然适用；本服务不使用 Cookie，也不会绕过登录验证。',
      history_title: '最近下载', history_sub: '仅保存在此浏览器中，可随时清除。', clear_history: '清除历史',
      history_empty: '暂无下载。已完成的下载会显示在这里。', history_prepared: '下载已准备好', history_cleared: '本地历史已清除。',
      convert_title: '转换你自己的文件', convert_sub: '上传已获授权的音频/视频文件并保存转换后的副本。',
      drop_title: '将媒体文件拖到此处或点击选择', drop_hint: '最大 150 MB · 最长 2 小时', output_format: '输出格式',
      fmt_mp3: 'MP3 音频', fmt_mp4: 'MP4 视频', convert_btn: '转换并下载',
      convert_idle: '选择文件开始。文件会在后端临时处理。',
      convert_privacy: '仅转换你拥有或获准使用的文件。临时上传文件和输出文件会自动删除。',
      about_k: '关于', about_title: '为简单流程而生。',
      about_text: 'Jaduloader 是由静态 HTML、CSS 和原生 JavaScript 构成的前端，连接到单独配置的 API 后端。没有账号系统，也没有第三方前端脚本。',
      faq_k: '常见问题', faq_title: '快速解答',
      q1: '为什么每个视频都要确认？', a1: '确认用于记录你拥有该媒体或已获许可。请勿下载你无权使用的内容。',
      q2: 'YouTube 下载为什么会失败？', a2: 'YouTube 可能阻止自动访问，或视频为私享、不可用或受限。后端不使用登录 Cookie，也不会绕过这些限制。',
      q3: '我的历史记录存放在哪里？', a3: '最近下载记录仅保存在此浏览器本地，不会发送到后端。',
      contact_k: '联系', contact_title: '需要 Jaduloader 的帮助？', contact_default: '在 config.js 中设置支持邮箱即可显示联系链接。',
      contact_email: '请发送邮件至 {email} 获取支持。', contact_btn: '联系我们',
      privacy_t: '隐私政策', privacy_p: '搜索词和输入建议会发送到所配置的后端、YouTube Data API 和 Google 建议服务。下载历史仅保存在此浏览器中。上传文件和生成的输出均为临时文件，受后端保留设置约束。',
      terms_t: '条款', terms_p: '仅将 Jaduloader 用于你拥有或获准处理的媒体。请尊重版权和平台条款。本工具不保证所有视频或格式都可用。',
      copyright: '© 2026 Jaduloader。保留所有权利。',
      dlg_k: '一个视频 · 一次确认', dlg_title: '确认下载权限',
      dlg_copy: '仅当你拥有该视频或已获权利人许可时才可下载。Jaduloader 不会绕过 YouTube 的登录、隐私或访问限制。',
      dlg_check: '我确认我有权下载此视频。', dlg_cancel: '取消', dlg_confirm: '继续下载',
      dlg_fallback: '所选 YouTube 视频', close: '关闭',
      play: '播放', playing: '播放中', card_note: '下载前需确认你拥有此视频的权利。',
      preparing: '准备中…', converting: '转换中…', uploading: '正在上传并转换。请保持此标签页打开。',
      err_backend: '无法连接后端。请检查 config.js 中的 API_BASE_URL、API 服务及 CORS 设置。',
      err_request: '后端请求失败（{n}）。', err_convert: '转换失败（{n}）。', err_no_url: '后端未返回下载链接。',
      enter_query: '请输入搜索词或粘贴 YouTube 视频链接。', status_searching: '正在搜索 YouTube 频道的公开视频…',
      no_results: '未找到视频。请尝试其他标题或视频链接。', found: '找到视频：{n}。', copied: '已复制到剪贴板。',
      copy_first: '请先输入搜索词或视频链接。',
      prepared: '{name} 已准备好。临时链接将在 {min} 分钟后失效。', file_ready: '{name} 已就绪。临时下载将在 {min} 分钟后失效。',
      key_needed: '后端正在运行。请在后端 .env 文件中添加新的 YOUTUBE_API_KEY 以启用全频道搜索。',
      down_msg: '后端不可用。请在 config.js 中配置 API_BASE_URL，并检查后端 CORS 设置。',
      yt_video: 'YouTube 视频', yt_channel: 'YouTube 频道', thumb_alt: '{title} 的缩略图', player_title: 'YouTube 播放器：{title}'
    },
    fr: {
      doc_title: 'Jaduloader — Rechercher, lire et convertir',
      lang_label: 'Langue', nav_history: 'Historique', nav_convert: 'Convertir un fichier', nav_faq: 'FAQ', nav_about: 'À propos',
      checking: 'Vérification du serveur…', backend_ok: 'Serveur connecté', search_key: 'Clé de recherche requise', backend_down: 'Serveur indisponible',
      kicker: 'VOS MÉDIAS, AU MÊME ENDROIT', h1a: 'Cherchez.', h1b: 'Lisez. Convertissez.',
      intro: 'Recherchez des vidéos sur toutes les chaînes YouTube, prévisualisez-les et préparez des fichiers MP3 ou MP4 uniquement si vous avez l’autorisation de les télécharger.',
      search_label: 'Rechercher sur YouTube ou coller un lien vidéo', placeholder: 'Rechercher sur YouTube ou coller un lien vidéo…',
      clear: 'Effacer la recherche', copy: 'Copier le texte ou le lien', search_btn: 'Rechercher', searching: 'Recherche…', suggestions: 'Suggestions de recherche',
      hint: 'Les résultats peuvent provenir de n’importe quelle chaîne. Une clé YouTube Data API récente est requise sur le serveur.',
      step1: 'Rechercher', step2: 'Lire', step3: 'Choisir MP3 ou MP4',
      results_title: 'Résultats vidéo', results_meta: 'Résultats : {n} · toutes les chaînes', badge: 'TOUTES LES CHAÎNES',
      disclaimer_b: 'Téléchargez de façon responsable :', disclaimer: 'Le traitement MP3/MP4 n’est disponible qu’après avoir confirmé que vous possédez la vidéo ou avez l’autorisation de la télécharger. Les restrictions de la plateforme s’appliquent toujours ; le service n’utilise pas de cookies et ne contourne pas les connexions.',
      history_title: 'Téléchargements récents', history_sub: 'Stocké uniquement dans ce navigateur. Effaçable à tout moment.', clear_history: 'Effacer l’historique',
      history_empty: 'Aucun téléchargement pour l’instant. Vos téléchargements terminés apparaîtront ici.', history_prepared: 'Téléchargement préparé', history_cleared: 'Historique local effacé.',
      convert_title: 'Convertir un fichier dont vous êtes propriétaire', convert_sub: 'Importez un fichier audio/vidéo autorisé et enregistrez une copie convertie.',
      drop_title: 'Déposez un fichier média ici ou choisissez-en un', drop_hint: 'Maximum 150 Mo · jusqu’à 2 heures', output_format: 'Format de sortie',
      fmt_mp3: 'Audio MP3', fmt_mp4: 'Vidéo MP4', convert_btn: 'Convertir et télécharger',
      convert_idle: 'Choisissez un fichier pour commencer. Les fichiers sont traités temporairement sur le serveur.',
      convert_privacy: 'Ne convertissez que des fichiers que vous possédez ou avez le droit d’utiliser. Les fichiers temporaires sont supprimés automatiquement.',
      about_k: 'À PROPOS', about_title: 'Conçu pour la simplicité.',
      about_text: 'Jaduloader est une interface statique en HTML, CSS et JavaScript pur, reliée à un serveur API configuré séparément. Pas de comptes, pas de scripts tiers côté interface.',
      faq_k: 'FAQ', faq_title: 'Réponses rapides',
      q1: 'Pourquoi confirmer pour chaque vidéo ?', a1: 'La confirmation atteste que vous possédez ce média ou en avez l’autorisation. Ne téléchargez pas de contenu que vous n’avez pas le droit d’utiliser.',
      q2: 'Pourquoi un téléchargement YouTube peut-il échouer ?', a2: 'YouTube peut bloquer l’accès automatisé, ou la vidéo peut être privée, indisponible ou restreinte. Le serveur n’utilise pas de cookies de connexion et ne contourne pas ces restrictions.',
      q3: 'Où est stocké mon historique ?', a3: 'L’historique est enregistré localement dans ce navigateur et n’est pas envoyé au serveur.',
      contact_k: 'CONTACT', contact_title: 'Besoin d’aide avec Jaduloader ?', contact_default: 'Définissez un e-mail de support dans config.js pour afficher un lien de contact.',
      contact_email: 'Écrivez à {email} pour obtenir de l’aide.', contact_btn: 'Contact',
      privacy_t: 'Politique de confidentialité', privacy_p: 'Les recherches et suggestions de saisie sont envoyées au serveur configuré, à l’API YouTube Data et au service de suggestions de Google. L’historique reste dans ce navigateur. Les fichiers importés et générés sont temporaires et soumis aux réglages de conservation du serveur.',
      terms_t: 'Conditions', terms_p: 'Utilisez Jaduloader uniquement pour des médias que vous possédez ou êtes autorisé à traiter. Respectez le droit d’auteur et les conditions des plateformes. Aucune garantie de disponibilité de toutes les vidéos ou de tous les formats.',
      copyright: '© 2026 Jaduloader. Tous droits réservés.',
      dlg_k: 'UNE VIDÉO · UNE CONFIRMATION', dlg_title: 'Confirmer les droits de téléchargement',
      dlg_copy: 'Ne téléchargez cette vidéo que si vous en êtes propriétaire ou avez l’accord du titulaire des droits. Jaduloader ne contournera pas la connexion, la confidentialité ou les restrictions d’accès de YouTube.',
      dlg_check: 'Je confirme être autorisé(e) à télécharger cette vidéo.', dlg_cancel: 'Annuler', dlg_confirm: 'Continuer le téléchargement',
      dlg_fallback: 'Vidéo YouTube sélectionnée', close: 'Fermer',
      play: 'Lire', playing: 'En lecture', card_note: 'Le téléchargement nécessite de confirmer que vous détenez les droits de cette vidéo.',
      preparing: 'Préparation…', converting: 'Conversion…', uploading: 'Importation et conversion en cours. Gardez cet onglet ouvert.',
      err_backend: 'Impossible de joindre le serveur. Vérifiez API_BASE_URL dans config.js, le service API et les paramètres CORS.',
      err_request: 'Échec de la requête serveur ({n}).', err_convert: 'Échec de la conversion ({n}).', err_no_url: 'Le serveur n’a pas renvoyé de lien de téléchargement.',
      enter_query: 'Saisissez un terme de recherche ou collez un lien YouTube.', status_searching: 'Recherche de vidéos publiques sur les chaînes YouTube…',
      no_results: 'Aucune vidéo trouvée. Essayez un autre titre ou lien.', found: 'Vidéos trouvées : {n}.', copied: 'Copié dans le presse-papiers.',
      copy_first: 'Saisissez d’abord un terme de recherche ou un lien.',
      prepared: '{name} est prêt. Le lien temporaire expire dans {min} minutes.', file_ready: '{name} est prêt. Le téléchargement temporaire expire dans {min} minutes.',
      key_needed: 'Le serveur fonctionne. Ajoutez une nouvelle YOUTUBE_API_KEY au fichier .env du serveur pour activer la recherche sur toutes les chaînes.',
      down_msg: 'Serveur indisponible. Configurez API_BASE_URL dans config.js et vérifiez les paramètres CORS.',
      yt_video: 'Vidéo YouTube', yt_channel: 'Chaîne YouTube', thumb_alt: 'Miniature de {title}', player_title: 'Lecteur YouTube : {title}'
    },
    es: {
      doc_title: 'Jaduloader — Buscar, reproducir y convertir',
      lang_label: 'Idioma', nav_history: 'Historial', nav_convert: 'Convertir archivo', nav_faq: 'Preguntas', nav_about: 'Acerca de',
      checking: 'Comprobando el servidor…', backend_ok: 'Servidor conectado', search_key: 'Falta la clave de búsqueda', backend_down: 'Servidor no disponible',
      kicker: 'TUS MEDIOS, EN UN SOLO LUGAR', h1a: 'Busca.', h1b: 'Reproduce. Convierte.',
      intro: 'Busca vídeos de todos los canales de YouTube, previsualízalos y prepara archivos MP3 o MP4 solo cuando tengas permiso para descargarlos.',
      search_label: 'Busca en YouTube o pega un enlace de vídeo', placeholder: 'Busca en YouTube o pega un enlace de vídeo…',
      clear: 'Borrar búsqueda', copy: 'Copiar texto o enlace', search_btn: 'Buscar vídeos', searching: 'Buscando…', suggestions: 'Sugerencias de búsqueda',
      hint: 'Los resultados pueden venir de cualquier canal. El servidor necesita una clave nueva de YouTube Data API para buscar.',
      step1: 'Buscar', step2: 'Reproducir', step3: 'Elegir MP3 o MP4',
      results_title: 'Resultados de vídeo', results_meta: 'Resultados: {n} · todos los canales', badge: 'TODOS LOS CANALES',
      disclaimer_b: 'Descarga con responsabilidad:', disclaimer: 'El procesamiento MP3/MP4 solo está disponible tras confirmar que eres propietario del vídeo o tienes permiso para descargarlo. Las restricciones de la plataforma siguen vigentes; el servicio no usa cookies ni evita los inicios de sesión.',
      history_title: 'Descargas recientes', history_sub: 'Se guarda solo en este navegador. Bórralo cuando quieras.', clear_history: 'Borrar historial',
      history_empty: 'Aún no hay descargas. Las descargas completadas aparecerán aquí.', history_prepared: 'Descarga preparada', history_cleared: 'Historial local borrado.',
      convert_title: 'Convierte un archivo que te pertenece', convert_sub: 'Sube un archivo de audio/vídeo autorizado y guarda una copia convertida.',
      drop_title: 'Suelta un archivo multimedia aquí o elige uno', drop_hint: 'Máximo 150 MB · hasta 2 horas', output_format: 'Formato de salida',
      fmt_mp3: 'Audio MP3', fmt_mp4: 'Vídeo MP4', convert_btn: 'Convertir y descargar',
      convert_idle: 'Elige un archivo para empezar. Los archivos se procesan temporalmente en el servidor.',
      convert_privacy: 'Convierte solo archivos que te pertenezcan o tengas permiso para usar. Los archivos temporales se eliminan automáticamente.',
      about_k: 'ACERCA DE', about_title: 'Hecho para que sea sencillo.',
      about_text: 'Jaduloader es una interfaz estática en HTML, CSS y JavaScript puro, conectada a un servidor API configurado por separado. No hay cuentas ni scripts de terceros en la interfaz.',
      faq_k: 'PREGUNTAS', faq_title: 'Respuestas rápidas',
      q1: '¿Por qué se confirma cada vídeo?', a1: 'La confirmación indica que eres propietario del contenido o tienes permiso. No descargues contenido que no estés autorizado a usar.',
      q2: '¿Por qué puede fallar una descarga de YouTube?', a2: 'YouTube puede bloquear el acceso automatizado, o el vídeo puede ser privado, no estar disponible o tener restricciones. El servidor no usa cookies de sesión ni evita esas restricciones.',
      q3: '¿Dónde se guarda mi historial?', a3: 'El historial se guarda localmente en este navegador y no se envía al servidor.',
      contact_k: 'CONTACTO', contact_title: '¿Necesitas ayuda con Jaduloader?', contact_default: 'Define un correo de soporte en config.js para mostrar un enlace de contacto.',
      contact_email: 'Escribe a {email} para obtener ayuda.', contact_btn: 'Contacto',
      privacy_t: 'Política de privacidad', privacy_p: 'Las búsquedas y sugerencias al escribir se envían al servidor configurado, a la API de YouTube Data y al servicio de sugerencias de Google. El historial permanece en este navegador. Los archivos subidos y generados son temporales y están sujetos a la retención del servidor.',
      terms_t: 'Términos', terms_p: 'Usa Jaduloader solo con contenido que te pertenezca o estés autorizado a procesar. Respeta los derechos de autor y los términos de las plataformas. No se garantiza que todos los vídeos o formatos estén disponibles.',
      copyright: '© 2026 Jaduloader. Todos los derechos reservados.',
      dlg_k: 'UN VÍDEO · UNA CONFIRMACIÓN', dlg_title: 'Confirma los derechos de descarga',
      dlg_copy: 'Descarga este vídeo solo si es tuyo o tienes permiso del titular de los derechos. Jaduloader no evitará el inicio de sesión, la privacidad ni las restricciones de acceso de YouTube.',
      dlg_check: 'Confirmo que estoy autorizado/a para descargar este vídeo.', dlg_cancel: 'Cancelar', dlg_confirm: 'Continuar con la descarga',
      dlg_fallback: 'Vídeo de YouTube seleccionado', close: 'Cerrar',
      play: 'Reproducir', playing: 'Reproduciendo', card_note: 'Para descargar debes confirmar que tienes derechos sobre este vídeo.',
      preparing: 'Preparando…', converting: 'Convirtiendo…', uploading: 'Subiendo y convirtiendo. Mantén esta pestaña abierta.',
      err_backend: 'No se pudo conectar con el servidor. Revisa API_BASE_URL en config.js, el servicio API y la configuración CORS.',
      err_request: 'La solicitud al servidor falló ({n}).', err_convert: 'La conversión falló ({n}).', err_no_url: 'El servidor no devolvió un enlace de descarga.',
      enter_query: 'Escribe un término de búsqueda o pega un enlace de YouTube.', status_searching: 'Buscando vídeos públicos en canales de YouTube…',
      no_results: 'No se encontraron vídeos. Prueba con otro título o enlace.', found: 'Vídeos encontrados: {n}.', copied: 'Copiado al portapapeles.',
      copy_first: 'Primero escribe un término de búsqueda o un enlace.',
      prepared: '{name} está listo. El enlace temporal caduca en {min} minutos.', file_ready: '{name} está listo. La descarga temporal caduca en {min} minutos.',
      key_needed: 'El servidor está activo. Añade una YOUTUBE_API_KEY nueva al archivo .env del servidor para activar la búsqueda en todos los canales.',
      down_msg: 'Servidor no disponible. Configura API_BASE_URL en config.js y revisa la configuración CORS.',
      yt_video: 'Vídeo de YouTube', yt_channel: 'Canal de YouTube', thumb_alt: 'Miniatura de {title}', player_title: 'Reproductor de YouTube: {title}'
    },
    hi: {
      doc_title: 'Jaduloader — खोजें, चलाएँ और बदलें',
      lang_label: 'भाषा', nav_history: 'इतिहास', nav_convert: 'फ़ाइल बदलें', nav_faq: 'अक्सर पूछे सवाल', nav_about: 'परिचय',
      checking: 'बैकएंड जाँचा जा रहा है…', backend_ok: 'बैकएंड जुड़ा है', search_key: 'सर्च की चाहिए', backend_down: 'बैकएंड उपलब्ध नहीं',
      kicker: 'आपका मीडिया, एक ही जगह', h1a: 'खोजें।', h1b: 'चलाएँ। बदलें।',
      intro: 'YouTube के सभी चैनलों से वीडियो खोजें, उनका प्रीव्यू देखें, और MP3 या MP4 फ़ाइल तभी बनाएँ जब आपके पास डाउनलोड की अनुमति हो।',
      search_label: 'YouTube पर खोजें या वीडियो लिंक पेस्ट करें', placeholder: 'YouTube पर खोजें या वीडियो लिंक पेस्ट करें…',
      clear: 'खोज साफ़ करें', copy: 'खोज का टेक्स्ट या लिंक कॉपी करें', search_btn: 'वीडियो खोजें', searching: 'खोज जारी है…', suggestions: 'खोज सुझाव',
      hint: 'नतीजे किसी भी चैनल से आ सकते हैं। खोज के लिए बैकएंड पर नई YouTube Data API की चाहिए।',
      step1: 'खोजें', step2: 'चलाएँ', step3: 'MP3 या MP4 चुनें',
      results_title: 'वीडियो नतीजे', results_meta: 'नतीजे: {n} · सभी चैनल', badge: 'सभी चैनल',
      disclaimer_b: 'ज़िम्मेदारी से डाउनलोड करें:', disclaimer: 'MP3/MP4 प्रोसेसिंग तभी उपलब्ध है जब आप पुष्टि करें कि वीडियो आपका है या आपके पास डाउनलोड की अनुमति है। प्लेटफ़ॉर्म की पाबंदियाँ लागू रहती हैं; सेवा कुकीज़ का उपयोग नहीं करती और साइन-इन की रुकावट पार नहीं करती।',
      history_title: 'हाल के डाउनलोड', history_sub: 'सिर्फ़ इसी ब्राउज़र में सेव है। कभी भी साफ़ करें।', clear_history: 'इतिहास साफ़ करें',
      history_empty: 'अभी कोई डाउनलोड नहीं। पूरे हुए डाउनलोड यहाँ दिखेंगे।', history_prepared: 'डाउनलोड तैयार', history_cleared: 'स्थानीय इतिहास साफ़ हो गया।',
      convert_title: 'अपनी फ़ाइल बदलें', convert_sub: 'अनुमति वाली ऑडियो/वीडियो फ़ाइल अपलोड करें और बदली हुई कॉपी सेव करें।',
      drop_title: 'मीडिया फ़ाइल यहाँ छोड़ें या चुनें', drop_hint: 'अधिकतम 150 MB · 2 घंटे तक', output_format: 'आउटपुट फ़ॉर्मैट',
      fmt_mp3: 'MP3 ऑडियो', fmt_mp4: 'MP4 वीडियो', convert_btn: 'बदलें और डाउनलोड करें',
      convert_idle: 'शुरू करने के लिए फ़ाइल चुनें। फ़ाइलें बैकएंड पर अस्थायी रूप से प्रोसेस होती हैं।',
      convert_privacy: 'सिर्फ़ वही फ़ाइलें बदलें जो आपकी हैं या जिनके उपयोग की अनुमति है। अस्थायी अपलोड और आउटपुट अपने-आप हट जाते हैं।',
      about_k: 'परिचय', about_title: 'सरल अनुभव के लिए बना।',
      about_text: 'Jaduloader स्टैटिक HTML, CSS और वैनिला JavaScript का फ़्रंटएंड है, जो अलग से सेट किए गए API बैकएंड से जुड़ा है। इसमें अकाउंट सिस्टम नहीं है और कोई थर्ड-पार्टी फ़्रंटएंड स्क्रिप्ट नहीं।',
      faq_k: 'सवाल-जवाब', faq_title: 'झटपट जवाब',
      q1: 'हर वीडियो के लिए पुष्टि क्यों ली जाती है?', a1: 'पुष्टि दर्ज करती है कि वह मीडिया आपका है या आपके पास उसकी अनुमति है। जिस सामग्री के उपयोग की अनुमति नहीं है उसे डाउनलोड न करें।',
      q2: 'YouTube डाउनलोड फ़ेल क्यों हो सकता है?', a2: 'YouTube ऑटोमेटेड एक्सेस रोक सकता है, या वीडियो प्राइवेट, अनुपलब्ध या प्रतिबंधित हो सकता है। बैकएंड साइन-इन कुकीज़ का उपयोग नहीं करता और इन पाबंदियों को पार नहीं करता।',
      q3: 'मेरा इतिहास कहाँ सेव होता है?', a3: 'हाल के डाउनलोड का इतिहास इसी ब्राउज़र में लोकल सेव होता है और बैकएंड को नहीं भेजा जाता।',
      contact_k: 'संपर्क', contact_title: 'Jaduloader में मदद चाहिए?', contact_default: 'संपर्क लिंक दिखाने के लिए config.js में सपोर्ट ईमेल सेट करें।',
      contact_email: 'सहायता के लिए {email} पर ईमेल करें।', contact_btn: 'संपर्क करें',
      privacy_t: 'गोपनीयता नीति', privacy_p: 'खोज शब्द और टाइपिंग सुझाव कॉन्फ़िगर किए गए बैकएंड, YouTube Data API और Google की सुझाव सेवा को भेजे जाते हैं। डाउनलोड इतिहास इसी ब्राउज़र में रहता है। अपलोड की गई फ़ाइलें और तैयार आउटपुट अस्थायी हैं और बैकएंड की रिटेंशन सेटिंग के अधीन हैं।',
      terms_t: 'शर्तें', terms_p: 'Jaduloader का उपयोग सिर्फ़ उसी मीडिया के लिए करें जो आपका है या जिसे प्रोसेस करने की अनुमति है। कॉपीराइट और प्लेटफ़ॉर्म की शर्तों का सम्मान करें। हर वीडियो या फ़ॉर्मैट के उपलब्ध होने की गारंटी नहीं।',
      copyright: '© 2026 Jaduloader। सर्वाधिकार सुरक्षित।',
      dlg_k: 'एक वीडियो · एक पुष्टि', dlg_title: 'डाउनलोड अधिकार की पुष्टि करें',
      dlg_copy: 'यह वीडियो तभी डाउनलोड करें जब यह आपका हो या अधिकार-धारक की अनुमति हो। Jaduloader YouTube के साइन-इन, प्राइवेसी या एक्सेस प्रतिबंध पार नहीं करेगा।',
      dlg_check: 'मैं पुष्टि करता/करती हूँ कि मुझे यह वीडियो डाउनलोड करने की अनुमति है।', dlg_cancel: 'रद्द करें', dlg_confirm: 'डाउनलोड जारी रखें',
      dlg_fallback: 'चुना गया YouTube वीडियो', close: 'बंद करें',
      play: 'चलाएँ', playing: 'चल रहा है', card_note: 'डाउनलोड के लिए इस वीडियो के अधिकार की पुष्टि ज़रूरी है।',
      preparing: 'तैयार हो रहा है…', converting: 'बदला जा रहा है…', uploading: 'अपलोड और कन्वर्ज़न जारी है। यह टैब खुला रखें।',
      err_backend: 'बैकएंड तक नहीं पहुँच सके। config.js में API_BASE_URL, API सेवा और CORS सेटिंग जाँचें।',
      err_request: 'बैकएंड अनुरोध विफल रहा ({n})।', err_convert: 'कन्वर्ज़न विफल रहा ({n})।', err_no_url: 'बैकएंड ने डाउनलोड लिंक नहीं लौटाया।',
      enter_query: 'खोज शब्द लिखें या YouTube वीडियो लिंक पेस्ट करें।', status_searching: 'YouTube चैनलों में सार्वजनिक वीडियो खोजे जा रहे हैं…',
      no_results: 'कोई वीडियो नहीं मिला। कोई और शीर्षक या वीडियो लिंक आज़माएँ।', found: 'मिले वीडियो: {n}।', copied: 'क्लिपबोर्ड पर कॉपी हो गया।',
      copy_first: 'पहले खोज शब्द या वीडियो लिंक लिखें।',
      prepared: '{name} तैयार है। अस्थायी लिंक {min} मिनट में समाप्त हो जाएगा।', file_ready: '{name} तैयार है। अस्थायी डाउनलोड {min} मिनट में समाप्त हो जाएगा।',
      key_needed: 'बैकएंड चल रहा है। सभी चैनलों की खोज चालू करने के लिए बैकएंड की .env फ़ाइल में नई YOUTUBE_API_KEY जोड़ें।',
      down_msg: 'बैकएंड उपलब्ध नहीं। config.js में API_BASE_URL सेट करें और बैकएंड की CORS सेटिंग जाँचें।',
      yt_video: 'YouTube वीडियो', yt_channel: 'YouTube चैनल', thumb_alt: '{title} का थंबनेल', player_title: 'YouTube प्लेयर: {title}'
    }
  }
};

(() => {
  'use strict';
  console.info('JaduLoader build 6 (translations bundled)');
  const CONFIG = window.JADULOADER_CONFIG || {};
  const I18N = window.JADULOADER_I18N || { languages: [{ code: 'en', name: 'English', html: 'en', hl: 'en', dir: 'ltr' }], strings: { en: {} } };
  const API_BASE_URL = String(CONFIG.API_BASE_URL || '').trim().replace(/\/+$/, '');
  const HISTORY_KEY = 'jaduloader.downloadHistory.v1';
  const LANG_KEY = 'jaduloader.lang.v1';
  const $ = id => document.getElementById(id);
  let toastTimer = null;
  let pendingDownload = null;
  let apiStateKey = 'checking';
  let resultCount = 0;

  /* ---------- Language ---------- */
  function langMeta(code) { return I18N.languages.find(l => l.code === code) || I18N.languages[0]; }
  function pickLang() {
    try { const saved = localStorage.getItem(LANG_KEY); if (saved && I18N.strings[saved]) return saved; } catch { /* storage may be disabled */ }
    for (const tag of navigator.languages || [navigator.language || 'en']) {
      const base = String(tag).toLowerCase().split('-')[0];
      if (I18N.strings[base]) return base;
    }
    return 'en';
  }
  let lang = pickLang();
  function t(key, vars) {
    let text = I18N.strings[lang]?.[key] ?? I18N.strings.en?.[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) text = text.split(`{${k}}`).join(String(v));
    return text;
  }
  function applyI18n() {
    const meta = langMeta(lang);
    document.documentElement.lang = meta.html; document.documentElement.dir = meta.dir; document.title = t('doc_title');
    const known = key => Boolean(I18N.strings[lang]?.[key] ?? I18N.strings.en?.[key]);
    document.querySelectorAll('[data-i18n]').forEach(el => { if (known(el.dataset.i18n)) el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { if (known(el.dataset.i18nPlaceholder)) el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      for (const pair of el.dataset.i18nAttr.split(',')) { const [attr, key] = pair.split(':'); if (attr && key && known(key.trim())) el.setAttribute(attr.trim(), t(key.trim())); }
    });
    renderHistory(); updateChip(); updateResultsMeta(); updateContact();
  }
  function setLang(code) {
    if (!I18N.strings[code]) return;
    lang = code; try { localStorage.setItem(LANG_KEY, code); } catch { /* ignore */ }
    closeSuggest(); applyI18n();
  }
  function buildLangSelect() {
    const select = $('langSelect');
    for (const l of I18N.languages) { const o = document.createElement('option'); o.value = l.code; o.textContent = l.name; select.append(o); }
    select.value = lang; select.addEventListener('change', () => setLang(select.value));
  }
  function locale() { return langMeta(lang).hl; }

  /* ---------- Helpers ---------- */
  function apiUrl(path) { return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`; }
  function absoluteUrl(url) { return new URL(url, API_BASE_URL || window.location.origin).href; }
  function setStatus(message, kind = '') {
    const status = $('searchStatus'); status.textContent = message;
    status.classList.toggle('error', kind === 'error'); status.classList.toggle('success', kind === 'success');
  }
  function toast(message, isError = false) {
    const el = $('toast'); el.textContent = message; el.classList.toggle('error', isError); el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
  }
  async function jsonRequest(path, body) {
    let response;
    try { response = await fetch(apiUrl(path), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); }
    catch { throw new Error(t('err_backend')); }
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || t('err_request', { n: response.status }));
    return data;
  }
  function updateChip() {
    const chip = $('apiState'); const map = { checking: '', online: 'backend_ok', keyNeeded: 'search_key', offline: 'backend_down' };
    chip.classList.toggle('online', apiStateKey === 'online' || apiStateKey === 'keyNeeded'); chip.classList.toggle('offline', apiStateKey === 'offline');
    const label = t(apiStateKey === 'checking' ? 'checking' : map[apiStateKey]); chip.querySelector('span').textContent = label; chip.title = label;
  }
  function updateResultsMeta() { if (resultCount) $('resultsMeta').textContent = t('results_meta', { n: resultCount }); }
  function updateContact() {
    const email = CONFIG.CONTACT_EMAIL; const valid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    $('contactLink').hidden = !valid; if (valid) { $('contactLink').href = `mailto:${email}`; $('contactText').textContent = t('contact_email', { email }); }
  }
  function setConvertStatus(message, kind = '') {
    const el = $('convertStatus'); el.removeAttribute('data-i18n'); el.textContent = message; el.className = `conversion-status${kind ? ` ${kind}` : ''}`;
  }

  /* ---------- Video / history ---------- */
  function saveHistory({ title, videoId: id, format, filename }) {
    const items = readHistory(); items.unshift({ title, videoId: id || '', format, filename, createdAt: new Date().toISOString() });
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, 12))); } catch { /* Storage can be disabled by private browsing. */ }
    renderHistory();
  }
  function readHistory() {
    try { const value = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); return Array.isArray(value) ? value.filter(x => x && typeof x.title === 'string') : []; }
    catch { return []; }
  }
  function renderHistory() {
    const host = $('historyList'); const items = readHistory(); host.replaceChildren(); $('clearHistory').hidden = !items.length;
    if (!items.length) { const empty = document.createElement('div'); empty.className = 'empty-history'; empty.textContent = t('history_empty'); host.append(empty); return; }
    for (const item of items) {
      const row = document.createElement('article'); row.className = 'history-item';
      const main = document.createElement('div'); main.className = 'history-main';
      const title = document.createElement('div'); title.className = 'history-name'; title.textContent = item.title; title.dir = 'auto';
      const when = new Date(item.createdAt); const details = document.createElement('div'); details.className = 'history-sub';
      details.textContent = `${item.filename || t('history_prepared')} · ${Number.isNaN(when.getTime()) ? '' : when.toLocaleString(locale())}`;
      const badge = document.createElement('span'); badge.className = 'history-format'; badge.textContent = String(item.format || '').toUpperCase();
      main.append(title, details); row.append(main, badge); host.append(row);
    }
  }
  function createCard(item) {
    const id = String(item.videoId || ''); const validId = /^[A-Za-z0-9_-]{11}$/.test(id); const label = item.title || t('yt_video');
    const article = document.createElement('article'); article.className = 'video-card';
    const thumb = document.createElement('div'); thumb.className = 'thumb';
    const image = document.createElement('img'); image.src = item.thumbnail || `https://i.ytimg.com/vi/${encodeURIComponent(id)}/mqdefault.jpg`; image.alt = t('thumb_alt', { title: label }); image.loading = 'lazy'; image.referrerPolicy = 'strict-origin-when-cross-origin'; thumb.append(image);
    const info = document.createElement('div'); info.className = 'video-info';
    const title = document.createElement('div'); title.className = 'video-title'; title.textContent = label; title.dir = 'auto';
    const meta = document.createElement('div'); meta.className = 'meta'; meta.dir = 'auto';
    meta.textContent = `${item.channel || t('yt_channel')}${item.publishedAt ? ` · ${new Date(item.publishedAt).toLocaleDateString(locale())}` : ''}`;
    const actions = document.createElement('div'); actions.className = 'card-actions';
    const play = document.createElement('button'); play.type = 'button'; play.className = 'btn play'; play.dataset.i18n = 'play'; play.textContent = t('play');
    play.addEventListener('click', () => {
      const frame = document.createElement('iframe'); frame.title = t('player_title', { title: label }); frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&controls=1`;
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'; frame.referrerPolicy = 'strict-origin-when-cross-origin'; frame.allowFullscreen = true;
      thumb.replaceChildren(frame); play.dataset.i18n = 'playing'; play.textContent = t('playing'); play.disabled = true;
    });
    const mkBtn = format => { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn real-download'; b.textContent = format.toUpperCase(); b.disabled = !validId; b.addEventListener('click', () => requestRights(item, format, b)); return b; };
    const note = document.createElement('p'); note.className = 'card-note'; note.dataset.i18n = 'card_note'; note.textContent = t('card_note');
    actions.append(play, mkBtn('mp3'), mkBtn('mp4')); info.append(title, meta, actions, note); article.append(thumb, info); return article;
  }
  async function search(query) {
    const button = $('searchBtn'); button.disabled = true; button.classList.add('loading'); button.querySelector('span').textContent = t('searching');
    $('results').replaceChildren(); $('resultsSection').hidden = true; resultCount = 0; setStatus(t('status_searching'));
    try {
      const data = await jsonRequest('/api/search', { query }); const items = Array.isArray(data.items) ? data.items : [];
      if (!items.length) { setStatus(t('no_results')); return; }
      const list = document.createDocumentFragment(); for (const item of items) list.append(createCard(item)); $('results').append(list);
      resultCount = items.length; updateResultsMeta();
      $('resultsSection').hidden = false; setStatus(t('found', { n: items.length }), 'success'); $('resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) { setStatus(error.message, 'error'); }
    finally { button.disabled = false; button.classList.remove('loading'); button.querySelector('span').textContent = t('search_btn'); }
  }
  function requestRights(item, format, button) {
    pendingDownload = { item, format, button };
    $('rightsVideoTitle').textContent = item.title || t('dlg_fallback'); $('rightsCheck').checked = false; $('confirmRights').disabled = true;
    $('rightsDialog').showModal();
  }
  async function prepareDownload({ item, format, button }) {
    const original = button.textContent; button.disabled = true; button.textContent = t('preparing');
    try {
      const data = await jsonRequest('/api/youtube-download', { videoId: item.videoId, format, authorized: true });
      if (!data.downloadUrl) throw new Error(t('err_no_url'));
      const link = document.createElement('a'); link.href = absoluteUrl(data.downloadUrl); link.download = data.filename || `Jaduloader.${format}`; link.rel = 'noopener'; document.body.append(link); link.click(); link.remove();
      saveHistory({ title: item.title || t('yt_video'), videoId: item.videoId, format, filename: data.filename });
      toast(t('prepared', { name: data.filename || format.toUpperCase(), min: data.expiresInMinutes || 60 }));
    } catch (error) { toast(error.message, true); }
    finally { button.disabled = false; button.textContent = original; }
  }
  async function convertFile() {
    const file = $('fileInput').files?.[0]; if (!file) return;
    const button = $('convertBtn'); button.disabled = true; button.textContent = t('converting'); setConvertStatus(t('uploading'));
    const form = new FormData(); form.append('media', file); form.append('format', $('format').value);
    try {
      let response; try { response = await fetch(apiUrl('/api/convert'), { method: 'POST', body: form }); } catch { throw new Error(t('err_backend')); }
      const data = await response.json().catch(() => ({})); if (!response.ok) throw new Error(data.error || t('err_convert', { n: response.status }));
      const link = document.createElement('a'); link.href = absoluteUrl(data.downloadUrl); link.download = data.filename || 'converted-media'; link.rel = 'noopener'; document.body.append(link); link.click(); link.remove();
      saveHistory({ title: file.name, format: $('format').value, filename: data.filename });
      setConvertStatus(t('file_ready', { name: data.filename, min: data.expiresInMinutes || 60 }), 'success');
    } catch (error) { setConvertStatus(error.message, 'error'); }
    finally { button.disabled = !$('fileInput').files?.length; button.textContent = t('convert_btn'); }
  }
  function showPickedFile(file) {
    const title = $('fileTitle'); title.removeAttribute('data-i18n'); title.textContent = `${file.name} · ${(file.size / 1048576).toFixed(1)} MB`;
  }

  /* ---------- Search suggestions ---------- */
  const sg = { items: [], active: -1, timer: null, abort: null, seq: 0, cache: new Map() };
  function closeSuggest() {
    sg.seq += 1; clearTimeout(sg.timer); sg.abort?.abort();
    const list = $('suggestList'); list.hidden = true; list.replaceChildren(); sg.items = []; sg.active = -1;
    $('query').setAttribute('aria-expanded', 'false'); $('query').removeAttribute('aria-activedescendant');
  }
  function setActive(index) {
    const nodes = $('suggestList').children; sg.active = index;
    [...nodes].forEach((n, i) => { n.classList.toggle('active', i === index); n.setAttribute('aria-selected', String(i === index)); });
    if (index >= 0) { $('query').setAttribute('aria-activedescendant', nodes[index].id); nodes[index].scrollIntoView({ block: 'nearest' }); }
    else $('query').removeAttribute('aria-activedescendant');
  }
  function chooseSuggestion(text) { $('query').value = text; $('clearSearch').hidden = false; closeSuggest(); search(text); }
  function renderSuggest(items) {
    const list = $('suggestList'); list.replaceChildren(); sg.items = items; sg.active = -1;
    if (!items.length) { list.hidden = true; $('query').setAttribute('aria-expanded', 'false'); return; }
    items.forEach((text, i) => {
      const li = document.createElement('li'); li.id = `sg-${i}`; li.setAttribute('role', 'option'); li.setAttribute('aria-selected', 'false'); li.dir = 'auto'; li.textContent = text;
      li.addEventListener('mousedown', e => e.preventDefault()); /* keep input focused */
      li.addEventListener('click', () => chooseSuggestion(text)); /* click, not pointerdown: scrolling the list on touch must not select */
      list.append(li);
    });
    list.hidden = false; $('query').setAttribute('aria-expanded', 'true');
  }
  async function fetchSuggestions(q, seq) {
    const hl = locale(); const key = `${hl}|${q.toLowerCase()}`;
    if (sg.cache.has(key)) { renderSuggest(sg.cache.get(key)); return; }
    const controller = new AbortController(); sg.abort = controller;
    try {
      const response = await fetch(apiUrl(`/api/suggest?q=${encodeURIComponent(q)}&hl=${encodeURIComponent(hl)}`), { signal: controller.signal });
      if (!response.ok) throw new Error('suggest failed');
      const data = await response.json();
      const items = Array.isArray(data.suggestions) ? data.suggestions.filter(s => typeof s === 'string' && s.trim()).slice(0, 8) : [];
      if (sg.cache.size > 200) sg.cache.clear(); sg.cache.set(key, items);
      if (seq === sg.seq && document.activeElement === $('query')) renderSuggest(items);
    } catch { if (!controller.signal.aborted && seq === sg.seq) renderSuggest([]); }
  }
  function onQueryInput() {
    $('clearSearch').hidden = !$('query').value; const q = $('query').value.trim(); sg.seq += 1; const seq = sg.seq; clearTimeout(sg.timer); sg.abort?.abort();
    if (q.length < 2 || /^https?:\/\//i.test(q) || /^(www\.|youtu\.?be)/i.test(q)) { renderSuggest([]); return; }
    sg.timer = setTimeout(() => fetchSuggestions(q, seq), 220);
  }
  function onQueryKeydown(e) {
    const n = sg.items.length;
    if (e.key === 'ArrowDown' && n) { e.preventDefault(); setActive((sg.active + 1) % n); }
    else if (e.key === 'ArrowUp' && n) { e.preventDefault(); setActive(sg.active <= 0 ? n - 1 : sg.active - 1); }
    else if (e.key === 'Enter' && sg.active >= 0) { e.preventDefault(); chooseSuggestion(sg.items[sg.active]); }
    else if (e.key === 'Escape' && n) { e.preventDefault(); closeSuggest(); }
  }

  /* ---------- Events ---------- */
  function attachEvents() {
    const query = $('query');
    query.addEventListener('input', onQueryInput); query.addEventListener('keydown', onQueryKeydown); query.addEventListener('blur', closeSuggest); query.addEventListener('focus', () => { if (query.value.trim().length >= 2) onQueryInput(); });
    $('searchForm').addEventListener('submit', e => {
      e.preventDefault(); closeSuggest(); const q = query.value.trim();
      if (!q) { setStatus(t('enter_query'), 'error'); query.focus(); return; }
      search(q);
    });
    $('clearSearch').addEventListener('click', () => { query.value = ''; $('clearSearch').hidden = true; closeSuggest(); $('results').replaceChildren(); $('resultsSection').hidden = true; resultCount = 0; setStatus(''); query.focus(); });
    $('copySearch').addEventListener('click', async () => {
      const value = query.value.trim(); if (!value) { toast(t('copy_first'), true); return; }
      try { await navigator.clipboard.writeText(value); } catch { query.select(); document.execCommand('copy'); }
      toast(t('copied'));
    });
    $('fileInput').addEventListener('change', () => { const file = $('fileInput').files?.[0]; if (file) showPickedFile(file); else { $('fileTitle').dataset.i18n = 'drop_title'; $('fileTitle').textContent = t('drop_title'); } $('convertBtn').disabled = !file; });
    const drop = $('drop'); for (const ev of ['dragenter', 'dragover']) drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('drag'); }); for (const ev of ['dragleave', 'drop']) drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('drag'); });
    drop.addEventListener('drop', e => { const file = e.dataTransfer.files?.[0]; if (!file) return; const transfer = new DataTransfer(); transfer.items.add(file); $('fileInput').files = transfer.files; showPickedFile(file); $('convertBtn').disabled = false; });
    $('convertBtn').addEventListener('click', convertFile);
    $('clearHistory').addEventListener('click', () => { try { localStorage.removeItem(HISTORY_KEY); } catch { /* ignore */ } renderHistory(); toast(t('history_cleared')); });
    $('rightsCheck').addEventListener('change', () => { $('confirmRights').disabled = !$('rightsCheck').checked; });
    $('closeRights').addEventListener('click', () => $('rightsDialog').close()); $('cancelRights').addEventListener('click', () => $('rightsDialog').close());
    $('rightsDialog').addEventListener('close', () => { pendingDownload = null; $('rightsCheck').checked = false; $('confirmRights').disabled = true; });
    $('confirmRights').addEventListener('click', async () => { if (!$('rightsCheck').checked || !pendingDownload) return; const request = pendingDownload; pendingDownload = null; $('rightsDialog').close(); await prepareDownload(request); });
  }
  async function initialize() {
    buildLangSelect(); applyI18n(); attachEvents();
    try {
      const response = await fetch(apiUrl('/api/status')); const data = await response.json(); if (!response.ok) throw new Error(data.error || 'Backend unavailable.');
      apiStateKey = data.youtubeSearchConfigured ? 'online' : 'keyNeeded'; updateChip();
      if (!data.youtubeSearchConfigured) setStatus(t('key_needed'), 'error');
    } catch { apiStateKey = 'offline'; updateChip(); setStatus(t('down_msg'), 'error'); }
  }
  initialize();
})();