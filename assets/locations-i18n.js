/* ==========================================================================
   Locations page — trilingual city data (EN / ZH / VI)
   Each city has: tag, pinyin (fixed), desc, facts{see,do,eat}, did (optional)
   Rendered dynamically into #grid-china / #grid-taiwan / #grid-singapore
   ========================================================================== */
(function () {
  'use strict';

  var CITIES = {
    china: [
      { id:'beijing', pinyin:'Běijīng · 北京',
        en:{tag:'Capital city', name:'Beijing', desc:"China's capital and cultural heart. A city of dynasties, hutongs and the Great Wall — where ancient history meets contemporary energy.", see:'Forbidden City, Temple of Heaven, Summer Palace, Tiananmen Square', do_:'Walk the Great Wall at Mutianyu, stroll historic hutongs, hire Qing dynasty costumes', eat:'Beijing roast duck (北京烤鸭), zhajiangmian noodles, Qing dynasty pastries', did:"'Beijing' was formerly romanised as 'Peking' — which is why you still see 'Peking duck' in the West."},
        zh:{tag:'首都', name:'北京', desc:'中國的首都與文化重心。這是一座王朝更迭、胡同縱橫、長城環繞的城市——古老歷史與現代活力在此交會。', see:'故宮、天壇、頤和園、天安門廣場', do_:'漫步慕田峪長城、走訪歷史胡同、體驗清代服飾租借', eat:'北京烤鴨、炸醬麵、清宮點心', did:'「北京」舊時羅馬拼音為「Peking」，這也是西方仍稱「Peking duck」的由來。'},
        vi:{tag:'Thủ đô', name:'Bắc Kinh', desc:'Thủ đô và trái tim văn hóa của Trung Quốc. Một thành phố của các triều đại, ngõ hutong và Vạn Lý Trường Thành — nơi lịch sử cổ xưa gặp gỡ nhịp sống hiện đại.', see:'Tử Cấm Thành, Thiên Đàn, Di Hòa Viên, Quảng trường Thiên An Môn', do_:'Đi bộ trên Vạn Lý Trường Thành đoạn Mutianyu, dạo quanh các ngõ hutong cổ, thuê trang phục thời nhà Thanh', eat:'Vịt quay Bắc Kinh (北京烤鸭), mì tương đậu, bánh ngọt cung đình Thanh triều', did:"“Bắc Kinh” trước đây được phiên âm La-tinh là “Peking” — đó là lý do phương Tây vẫn gọi món “Peking duck”."} },
      { id:'shanghai', pinyin:'Shànghǎi · 上海',
        en:{tag:'Financial hub', name:'Shanghai', desc:"China's largest city and a global financial powerhouse. Its futuristic skyline and vibrant street life make it one of the world's most exciting cities.", see:'The Bund waterfront, Shanghai Tower, Jade Buddha Temple, Jing\'an Temple', do_:'Riverboat tour on the Huangpu, shopping on Nanjing Lu, explore Xintiandi', eat:'Xiaolongbao soup dumplings, shengjianbao pan-fried buns, steamed crab', did:"The character '沪' (Hù) on Shanghai number plates recalls the city's ancient name 'Hudu' — once a small fishing village."},
        zh:{tag:'金融中心', name:'上海', desc:'中國最大的城市，也是全球金融重鎮。未來感十足的天際線與活力四射的街頭生活，使它成為全球最令人興奮的城市之一。', see:'外灘、上海中心大廈、玉佛寺、靜安寺', do_:'搭乘黃浦江遊船、南京路購物、探索新天地', eat:'小籠包、生煎包、清蒸大閘蟹', did:'上海車牌上的「滬」字，源自這座城市古稱「滬瀆」——曾是一座小漁村。'},
        vi:{tag:'Trung tâm tài chính', name:'Thượng Hải', desc:'Thành phố lớn nhất Trung Quốc và là trung tâm tài chính toàn cầu. Đường chân trời hiện đại cùng nhịp sống đường phố sôi động khiến nơi đây trở thành một trong những thành phố hấp dẫn nhất thế giới.', see:'Bến Thượng Hải (The Bund), Tháp Thượng Hải, Chùa Phật Ngọc, Chùa Tĩnh An', do_:'Du thuyền trên sông Hoàng Phố, mua sắm tại phố Nam Kinh, khám phá Tân Thiên Địa', eat:'Bánh bao súp Tiểu Long Bao, bánh bao chiên Sinh Tiên, cua hấp', did:"Chữ “沪” (Hộ) trên biển số xe Thượng Hải gợi nhắc tên cổ “Hộ Độc” của thành phố — từng chỉ là một làng chài nhỏ."} },
      { id:'chengdu', pinyin:'Chéngdū · 成都',
        en:{tag:'Panda capital', name:'Chengdu', desc:'The relaxed capital of Sichuan province, famous for its spicy cuisine, giant pandas and a laid-back lifestyle rarely found in Chinese megacities.', see:'Giant Panda Research Base, Jinsha Museum, Wuhou Shrine', do_:'Sip tea in Renmin Park, explore ancient Jinli Street, day-trip to Leshan Giant Buddha', eat:'Mapo tofu, hotpot, Dan Dan noodles, rabbit heads (a local delicacy!)', did:'Chengdu is known as a city that never hurries — locals say it has the best work-life balance in China.'},
        zh:{tag:'熊貓之都', name:'成都', desc:'四川省悠閒的省會城市，以麻辣美食、大熊貓與少見於中國大城市的悠閒生活步調聞名。', see:'大熊貓繁育研究基地、金沙遺址博物館、武侯祠', do_:'在人民公園品茶、漫步古老的錦里街、一日遊樂山大佛', eat:'麻婆豆腐、火鍋、擔擔麵、兔頭（當地特色小吃！）', did:'成都被稱為「一座來了就不想走的城市」——當地人說這裡有全中國最好的工作與生活平衡。'},
        vi:{tag:'Kinh đô gấu trúc', name:'Thành Đô', desc:'Thủ phủ thư thái của tỉnh Tứ Xuyên, nổi tiếng với ẩm thực cay nồng, gấu trúc khổng lồ và nhịp sống chậm rãi hiếm thấy ở các đại đô thị Trung Quốc.', see:'Trung tâm Nghiên cứu Gấu trúc, Bảo tàng Kim Sa, Đền Vũ Hầu', do_:'Nhâm nhi trà tại Công viên Nhân Dân, dạo phố cổ Cẩm Lý, tham quan Đại Phật Lạc Sơn trong ngày', eat:'Đậu phụ Ma Bà, lẩu Tứ Xuyên, mì Đạm Đạm, đầu thỏ (đặc sản địa phương!)', did:'Thành Đô được biết đến là thành phố “không bao giờ vội” — người dân địa phương nói đây là nơi cân bằng công việc - cuộc sống tốt nhất Trung Quốc.'} },
      { id:'hangzhou', pinyin:'Hángzhōu · 杭州',
        en:{tag:'Garden city', name:'Hangzhou', desc:'Known for the legendary West Lake, Hangzhou blends natural beauty with silk heritage and the ancient Grand Canal. Marco Polo called it a city without equal in beauty and splendour.', see:'West Lake, Lingyin Temple, China National Silk Museum', do_:'Cruise the Grand Canal, cycle around West Lake, visit Longjing tea gardens', eat:'Dongpo pork, West Lake vinegar fish, lotus root soup', did:"Hangzhou's Longjing (Dragon Well) green tea is considered one of China's finest teas and has been served to foreign dignitaries for centuries."},
        zh:{tag:'花園城市', name:'杭州', desc:'以傳奇的西湖聞名，杭州融合了自然美景、絲綢文化與古老的京杭大運河。馬可波羅曾稱讚它是世間罕見的華美城市。', see:'西湖、靈隱寺、中國絲綢博物館', do_:'搭船遊覽大運河、環湖騎行、造訪龍井茶園', eat:'東坡肉、西湖醋魚、蓮藕排骨湯', did:'杭州龍井綠茶被譽為中國最頂級的茶葉之一，數百年來一直是接待外賓的珍品。'},
        vi:{tag:'Thành phố vườn', name:'Hàng Châu', desc:'Nổi tiếng với Tây Hồ huyền thoại, Hàng Châu hòa quyện vẻ đẹp thiên nhiên với di sản tơ lụa và Đại Vận Hà cổ xưa. Marco Polo từng ca ngợi đây là thành phố tráng lệ bậc nhất mà ông từng thấy.', see:'Tây Hồ, Chùa Linh Ẩn, Bảo tàng Tơ lụa Quốc gia Trung Quốc', do_:'Du thuyền trên Đại Vận Hà, đạp xe quanh Tây Hồ, thăm vườn trà Long Tỉnh', eat:'Thịt kho Đông Pha, cá chua ngọt Tây Hồ, canh củ sen', did:'Trà xanh Long Tỉnh (Dragon Well) của Hàng Châu được xem là một trong những loại trà thượng hạng nhất Trung Quốc, từng dùng để tiếp đãi quốc khách suốt nhiều thế kỷ.'} },
      { id:'xian', pinyin:"Xī'ān · 西安",
        en:{tag:'Ancient capital', name:"Xi'an", desc:"The starting point of the Silk Road and home to the famous Terracotta Warriors, Xi'an is one of the world's greatest ancient capitals.", see:'Terracotta Army, Xi\'an City Walls, Big Wild Goose Pagoda, Muslim Quarter', do_:"Cycle on top of the ancient city walls, explore the Muslim Quarter's night market", eat:'Roujiamo (Chinese burger), biangbiang noodles, yangrou paomo lamb soup', did:"Xi'an was formerly known as 'Chang'an' and served as China's capital for over 1,000 years across multiple dynasties."},
        zh:{tag:'古都', name:'西安', desc:'絲綢之路的起點，也是舉世聞名的兵馬俑所在地，西安是世界上最偉大的古都之一。', see:'兵馬俑、西安城牆、大雁塔、回民街', do_:'登上古城牆騎行、逛回民街夜市', eat:'肉夾饃、biangbiang麵、羊肉泡饃', did:'西安古稱「長安」，曾作為中國多個朝代的首都長達千年以上。'},
        vi:{tag:'Cố đô', name:'Tây An', desc:'Điểm khởi đầu của Con đường Tơ lụa và là nơi lưu giữ đội quân đất nung nổi tiếng, Tây An là một trong những cố đô vĩ đại nhất thế giới.', see:'Đội quân đất nung, Thành cổ Tây An, Tháp Đại Nhạn, Khu phố Hồi', do_:'Đạp xe trên thành cổ, khám phá chợ đêm khu phố Hồi', eat:'Bánh kẹp thịt Roujiamo, mì biangbiang, canh thịt cừu Paomo', did:'Tây An trước đây có tên “Trường An”, từng là kinh đô của Trung Quốc suốt hơn 1.000 năm qua nhiều triều đại.'} },
      { id:'shenzhen', pinyin:'Shēnzhèn · 深圳',
        en:{tag:'Tech hub', name:'Shenzhen', desc:"China's Silicon Valley. A city that grew from a fishing village to a global tech powerhouse in just 40 years — the ultimate story of modern China.", see:'OCT Loft creative park, Shenzhen Museum, Window of the World', do_:'Explore electronics markets in Huaqiangbei, hike Wutong Mountain', eat:'Fresh seafood, Cantonese dim sum, oyster omelette', did:'In 1980, Shenzhen had a population of around 30,000. Today it exceeds 17 million — one of the fastest urban growth stories in history.'},
        zh:{tag:'科技重鎮', name:'深圳', desc:'中國的矽谷。一座在短短40年間，從小漁村蛻變為全球科技重鎮的城市——最能代表現代中國的故事。', see:'華僑城創意園、深圳博物館、世界之窗', do_:'逛華強北電子市場、登梧桐山健行', eat:'新鮮海鮮、廣式點心、蠔烙', did:'1980年深圳人口僅約3萬人，如今已超過1,700萬——是歷史上城市成長最快速的案例之一。'},
        vi:{tag:'Trung tâm công nghệ', name:'Thâm Quyến', desc:'“Thung lũng Silicon” của Trung Quốc. Một thành phố từ làng chài nhỏ vươn lên thành trung tâm công nghệ toàn cầu chỉ trong 40 năm — câu chuyện tiêu biểu nhất của Trung Quốc hiện đại.', see:'Công viên sáng tạo OCT Loft, Bảo tàng Thâm Quyến, Cửa sổ Thế giới', do_:'Khám phá chợ điện tử Hoa Cường Bắc, leo núi Ngô Đồng', eat:'Hải sản tươi sống, dim sum Quảng Đông, trứng chiên hàu', did:'Năm 1980, dân số Thâm Quyến chỉ khoảng 30.000 người. Ngày nay đã vượt 17 triệu — một trong những câu chuyện tăng trưởng đô thị nhanh nhất lịch sử.'} },
      { id:'guangzhou', pinyin:'Guǎngzhōu · 广州',
        en:{tag:'Cantonese culture', name:'Guangzhou', desc:"One of China's oldest trading cities, Guangzhou is the birthplace of Cantonese cuisine and a vibrant gateway between China and the world.", see:'Chen Clan Ancestral Hall, Canton Tower, Shamian Island', do_:'Yum cha (dim sum brunch), explore the Flower Market, cruise the Pearl River', eat:'Char siu, roast goose, wonton noodle soup, egg tarts', did:'Guangzhou hosts the Canton Fair — the world\'s largest trade fair — twice a year, attracting buyers from over 200 countries.'},
        zh:{tag:'粵文化重鎮', name:'廣州', desc:'中國最古老的商貿城市之一，粵菜的發源地，也是連結中國與世界的活力門戶。', see:'陳家祠、廣州塔、沙面島', do_:'飲早茶、逛花市、遊珠江夜景', eat:'叉燒、燒鵝、雲吞麵、蛋撻', did:'廣州每年舉辦兩屆「廣交會」——全球規模最大的貿易展會，吸引超過200個國家的採購商參與。'},
        vi:{tag:'Văn hóa Quảng Đông', name:'Quảng Châu', desc:'Một trong những thành phố thương mại lâu đời nhất Trung Quốc, Quảng Châu là cái nôi của ẩm thực Quảng Đông và là cửa ngõ sôi động nối Trung Quốc với thế giới.', see:'Từ đường họ Trần, Tháp Quảng Châu, Đảo Sa Diện', do_:'Uống trà sáng (yum cha), dạo chợ hoa, du thuyền sông Châu Giang', eat:'Xá xíu, ngỗng quay, mì hoành thánh, bánh trứng tart', did:'Quảng Châu tổ chức Hội chợ Quảng Châu — hội chợ thương mại lớn nhất thế giới — hai lần mỗi năm, thu hút khách mua từ hơn 200 quốc gia.'} },
      { id:'dalian', pinyin:'Dàlián · 大连',
        en:{tag:'Coastal city', name:'Dalian', desc:"A clean, European-flavoured port city on China's northeastern coast — known for its beaches, seafood and unusually orderly streets.", see:'Xinghai Square, Tiger Beach, Binhai Road scenic route', do_:'Beach swimming, tram rides through the old city, visit Lushun (Port Arthur)', eat:'Fresh sea urchin, steamed scallops, sea cucumber', did:'Dalian has almost no mosquitoes due to its sea breezes — making it a beloved summer destination for Chinese tourists.'},
        zh:{tag:'濱海城市', name:'大連', desc:'位於中國東北沿海，帶有歐式風情的整潔港市——以海灘、海鮮與異常整齊的街道聞名。', see:'星海廣場、老虎灘、濱海路風景線', do_:'海灘戲水、搭乘有軌電車遊老城區、造訪旅順口', eat:'新鮮海膽、清蒸扇貝、海參', did:'大連因海風吹拂幾乎沒有蚊子——這讓它成為中國遊客深受喜愛的夏季度假勝地。'},
        vi:{tag:'Thành phố biển', name:'Đại Liên', desc:'Một thành phố cảng sạch sẽ mang phong cách châu Âu ở vùng duyên hải đông bắc Trung Quốc — nổi tiếng với bãi biển, hải sản và những con phố ngăn nắp hiếm thấy.', see:'Quảng trường Tinh Hải, Bãi biển Hổ Than, Cung đường Bân Hải', do_:'Tắm biển, đi tàu điện tham quan khu phố cổ, thăm Lữ Thuận (Cảng Arthur)', eat:'Nhím biển tươi, sò điệp hấp, hải sâm', did:'Đại Liên gần như không có muỗi nhờ gió biển — khiến nơi đây trở thành điểm đến mùa hè yêu thích của du khách Trung Quốc.'} },
      { id:'chongqing', pinyin:'Chóngqìng · 重庆',
        en:{tag:'Mountain city', name:'Chongqing', desc:'China\'s mountainous mega-city, sprawling across misty hills and river gorges. Famous for the spiciest hotpot in China and a jaw-dropping skyline.', see:'Hongya Cave, Ciqikou Ancient Town, Jiefangbei pedestrian area', do_:'Yangtze River cruise, night city views from Nanbin Road', eat:'Chongqing hotpot, spicy mala noodles, grilled skewers', did:'Chongqing\'s hilly terrain means the city has virtually no flat roads — and almost no bicycles. Everything goes up or down!'},
        zh:{tag:'山城', name:'重慶', desc:'中國的山城巨型都市，坐落於雲霧繚繞的山丘與峽谷之間。以全中國最辣的火鍋與令人驚嘆的天際線聞名。', see:'洪崖洞、磁器口古鎮、解放碑步行街', do_:'長江遊船、南濱路夜景', eat:'重慶火鍋、麻辣小麵、烤串', did:'重慶地形起伏，全城幾乎沒有平坦道路——也幾乎看不到腳踏車。上坡下坡是日常！'},
        vi:{tag:'Thành phố núi', name:'Trùng Khánh', desc:'Siêu đô thị miền núi của Trung Quốc, trải dài trên những ngọn đồi sương mù và hẻm núi sông. Nổi tiếng với món lẩu cay nhất Trung Quốc và đường chân trời choáng ngợp.', see:'Động Hồng Nhai, Phố cổ Từ Khí Khẩu, Khu đi bộ Giải Phóng Bi', do_:'Du thuyền trên Trường Giang, ngắm thành phố về đêm từ đường Nam Tân', eat:'Lẩu Trùng Khánh, mì cay Ma La, xiên nướng', did:'Địa hình đồi núi khiến Trùng Khánh gần như không có con đường nào bằng phẳng — và cũng gần như không có xe đạp. Mọi thứ đều lên dốc hoặc xuống dốc!'} },
      { id:'shijiazhuang', pinyin:'Shíjiāzhuāng · 石家庄',
        en:{tag:'Hebei capital', name:'Shijiazhuang', desc:"A gateway to northern China's cultural heartland, with easy access to the ancient Zhaozhou Bridge and the cliff-carved Cangyan Mountain temples.", see:'Zhaozhou Bridge, Longxing Temple, Cangyan Mountain', do_:"Day-trip to Baoding's famous Baiyangdian Lake wetlands", eat:'Baoding donkey meat, handmade noodles, braised meat on rice', did:null},
        zh:{tag:'河北省會', name:'石家莊', desc:'通往中國北方文化腹地的門戶，鄰近古老的趙州橋與雕鑿於懸崖上的蒼岩山寺廟群。', see:'趙州橋、隆興寺、蒼岩山', do_:'一日遊保定白洋淀濕地', eat:'保定驢肉、手工麵條、滷肉飯', did:null},
        vi:{tag:'Thủ phủ Hà Bắc', name:'Thạch Gia Trang', desc:'Cửa ngõ vào vùng văn hóa cốt lõi phía bắc Trung Quốc, gần cầu Triệu Châu cổ kính và các ngôi chùa khắc vào vách đá núi Thương Nham.', see:'Cầu Triệu Châu, Chùa Long Hưng, Núi Thương Nham', do_:'Tham quan trong ngày đầm Bạch Dương Điện nổi tiếng ở Bảo Định', eat:'Thịt lừa Bảo Định, mì thủ công, cơm thịt kho', did:null} },
      { id:'kunming', pinyin:'Kūnmíng · 昆明',
        en:{tag:'Spring city', name:'Kunming', desc:"Known as the 'Spring City' for its year-round mild weather. A gateway to Yunnan's stunning landscapes — from stone forests to ethnic minority villages.", see:'Stone Forest, Dianchi Lake, Yunnan Nationalities Village', do_:"Day-trip to the Stone Forest (Shilin), explore Yunnan's ethnic markets", eat:'Crossing-the-bridge rice noodles (过桥米线), goat cheese (乳饼)', did:"Kunming enjoys 2,445 hours of sunshine per year and virtually no extreme weather — earning it the nickname '春城' (Spring City)."},
        zh:{tag:'春城', name:'昆明', desc:'因終年氣候溫和而有「春城」之稱。是通往雲南壯麗風光的門戶——從石林到少數民族村落一應俱全。', see:'石林、滇池、雲南民族村', do_:'一日遊石林、探索雲南民族市集', eat:'過橋米線、乳餅', did:'昆明每年日照時數達2,445小時，幾乎沒有極端天氣——因此獲得「春城」的美稱。'},
        vi:{tag:'Thành phố mùa xuân', name:'Côn Minh', desc:'Được mệnh danh là “Thành phố mùa xuân” nhờ khí hậu ôn hòa quanh năm. Là cửa ngõ vào những cảnh quan tuyệt đẹp của Vân Nam — từ rừng đá đến các bản làng dân tộc thiểu số.', see:'Rừng Đá (Thạch Lâm), Hồ Điền Trì, Làng Dân tộc Vân Nam', do_:'Tham quan Rừng Đá trong ngày, khám phá chợ phiên dân tộc Vân Nam', eat:'Mì qua cầu (过桥米线), phô mai dê (乳饼)', did:'Côn Minh có tới 2.445 giờ nắng mỗi năm và hầu như không có thời tiết cực đoan — vì vậy được gọi là “Xuân Thành” (春城).'} }
    ],
    taiwan: [
      { id:'taichung', pinyin:'Táizhōng · 台中',
        en:{tag:'Cultural capital', name:'Taichung', desc:"Taiwan's third-largest city is a vibrant arts and culture hub, famed for its creative markets, bubble tea origins and pleasant mountain-meets-coast climate.", see:'National Taichung Theater, Rainbow Village, Fengjia Night Market', do_:'Day-trip to Sun Moon Lake, cycle along the Houfeng Bike Path', eat:'Bubble tea (invented here!), sun cakes (太陽餅), pineapple cakes', did:'Bubble tea (珍珠奶茶) was invented in Taichung in the 1980s — making it the birthplace of one of Asia\'s most iconic drinks.'},
        zh:{tag:'文化之都', name:'台中', desc:'台灣第三大城市，是充滿活力的藝文重鎮，以創意市集、珍珠奶茶發源地與宜人的山海交融氣候聞名。', see:'台中國家歌劇院、彩虹眷村、逢甲夜市', do_:'一日遊日月潭、騎乘后豐鐵馬道', eat:'珍珠奶茶（發源於此！）、太陽餅、鳳梨酥', did:'珍珠奶茶於1980年代誕生於台中——使其成為亞洲最具代表性飲品之一的發源地。'},
        vi:{tag:'Thủ phủ văn hóa', name:'Đài Trung', desc:'Thành phố lớn thứ ba của Đài Loan là trung tâm nghệ thuật văn hóa sôi động, nổi tiếng với các khu chợ sáng tạo, cái nôi của trà sữa trân châu và khí hậu dễ chịu giữa núi và biển.', see:'Nhà hát Quốc gia Đài Trung, Làng Cầu Vồng, Chợ đêm Phùng Giáp', do_:'Tham quan Hồ Nhật Nguyệt trong ngày, đạp xe dọc đường Hậu Phong', eat:'Trà sữa trân châu (khởi nguồn từ đây!), bánh mặt trời (太陽餅), bánh dứa', did:'Trà sữa trân châu (珍珠奶茶) ra đời tại Đài Trung vào thập niên 1980 — biến nơi đây thành quê hương của một trong những thức uống biểu tượng nhất châu Á.'} },
      { id:'newtaipei', pinyin:'Xīn Běipèi · 新北市',
        en:{tag:'Most populous', name:'New Taipei City', desc:'Surrounding Taipei, New Taipei City offers a perfect blend of urban convenience and natural escapes — from the sea at Danshui to the mountains of Wulai.', see:'Danshui Old Street, Jiufen old town, Shifen waterfall', do_:'Lantern releasing at Shifen, hot springs in Wulai, cycling along the riverside', eat:'Oyster vermicelli (蚵仔麵線), fishball soup, fresh seafood at Danshui', did:null},
        zh:{tag:'人口最多', name:'新北市', desc:'環繞台北，新北市完美融合都會便利與自然逃逸——從淡水的海景到烏來的山林一應俱全。', see:'淡水老街、九份老街、十分瀑布', do_:'十分放天燈、烏來泡溫泉、沿河騎行', eat:'蚵仔麵線、魚丸湯、淡水新鮮海鮮', did:null},
        vi:{tag:'Đông dân nhất', name:'Tân Bắc', desc:'Bao quanh Đài Bắc, Tân Bắc mang đến sự kết hợp hoàn hảo giữa tiện nghi đô thị và những góc thiên nhiên trốn tránh — từ biển ở Đạm Thủy đến núi rừng Ô Lai.', see:'Phố cổ Đạm Thủy, Phố cổ Cửu Phần, Thác Thập Phần', do_:'Thả đèn trời ở Thập Phần, tắm suối nước nóng Ô Lai, đạp xe ven sông', eat:'Bún hàu (蚵仔麵線), canh chả cá, hải sản tươi tại Đạm Thủy', did:null} },
      { id:'tainan', pinyin:'Táinán · 台南',
        en:{tag:'Ancient capital', name:'Tainan', desc:"Taiwan's oldest city and culinary capital. Its Dutch-era forts, Japanese colonial buildings and endless street food stalls make it a living museum of Taiwanese history.", see:'Anping Fort, Chihkan Tower, Hayashi Department Store', do_:'Temple-hopping, explore the Anping tree house, evening riverside stroll', eat:'Milkfish congee, shrimp roll (蝦捲), coffin bread (棺材板)', did:'Tainan has more temples per square kilometre than any other city in Taiwan — locals say you\'re never more than 5 minutes from a god.'},
        zh:{tag:'古都', name:'台南', desc:'台灣最古老的城市，也是美食之都。荷蘭時期的城堡、日治時代的建築與數不盡的小吃攤，使它成為一座活生生的台灣歷史博物館。', see:'安平古堡、赤崁樓、林百貨', do_:'廟宇巡禮、探訪安平樹屋、傍晚河畔散步', eat:'虱目魚粥、蝦捲、棺材板', did:'台南每平方公里的廟宇數量居台灣之冠——當地人說你永遠離神明不超過5分鐘路程。'},
        vi:{tag:'Cố đô', name:'Đài Nam', desc:'Thành phố lâu đời nhất Đài Loan và cũng là kinh đô ẩm thực. Các pháo đài thời Hà Lan, kiến trúc thời Nhật thuộc cùng vô số gánh hàng rong khiến nơi đây trở thành bảo tàng sống của lịch sử Đài Loan.', see:'Pháo đài An Bình, Tháp Xích Khảm, Bách hóa Hayashi', do_:'Vãn cảnh chùa miếu, khám phá nhà cây An Bình, dạo ven sông buổi tối', eat:'Cháo cá măng sữa, chả tôm cuốn (蝦捲), bánh quan tài (棺材板)', did:'Đài Nam có mật độ đền miếu trên mỗi km² cao nhất Đài Loan — người dân nói rằng bạn không bao giờ cách một vị thần quá 5 phút đi bộ.'} },
      { id:'kaohsiung', pinyin:'Gāoxióng · 高雄',
        en:{tag:'Harbour city', name:'Kaohsiung', desc:"Taiwan's second city is a laid-back port town that has reinvented itself as an arts and culture destination, with a beautiful harbour and world-class museums.", see:'Pier-2 Art Centre, Lotus Pond, Fo Guang Shan Buddha Museum', do_:'Ferry across the Love River, explore the Dragon and Tiger Pagodas', eat:'Sanhe night market, fresh mango ice, local beef noodle soup', did:null},
        zh:{tag:'港都', name:'高雄', desc:'台灣第二大城市，是一座悠閒的港都，如今已蛻變為藝文勝地，擁有美麗的港灣與世界級博物館。', see:'駁二藝術特區、蓮池潭、佛光山佛陀紀念館', do_:'搭渡輪遊愛河、探訪龍虎塔', eat:'三和夜市、新鮮芒果冰、在地牛肉麵', did:null},
        vi:{tag:'Thành phố cảng', name:'Cao Hùng', desc:'Thành phố lớn thứ hai Đài Loan là một cảng thị thư thái đã lột xác thành điểm đến nghệ thuật văn hóa, với bến cảng tuyệt đẹp và các bảo tàng đẳng cấp thế giới.', see:'Trung tâm nghệ thuật Pier-2, Hồ Sen, Bảo tàng Phật Quang Sơn', do_:'Đi phà trên sông Tình Yêu, khám phá Tháp Long Hổ', eat:'Chợ đêm Tam Hòa, kem xoài tươi, mì bò địa phương', did:null} },
      { id:'penghu', pinyin:'Pénghú · 澎湖',
        en:{tag:'Island paradise', name:'Penghu', desc:"An archipelago of 90 islands with turquoise waters, basalt sea cliffs and pristine beaches. Taiwan's most unique outdoor immersion experience.", see:'Kuibi Basalt Coast, Ocean Art Park, Tongpan Island', do_:'Snorkelling, windsurfing, island-hopping by bike', eat:'Fresh oysters, sea urchin, Penghu peanut candy', did:null},
        zh:{tag:'島嶼天堂', name:'澎湖', desc:'由90座島嶼組成的群島，擁有碧綠海水、玄武岩海崖與純淨沙灘。是台灣最獨特的戶外沉浸體驗。', see:'桶盤嶼玄武岩海岸、海洋藝術公園、桶盤嶼', do_:'浮潛、風帆衝浪、騎車跳島遊', eat:'新鮮生蚵、海膽、澎湖花生糖', did:null},
        vi:{tag:'Thiên đường đảo', name:'Bành Hồ', desc:'Quần đảo gồm 90 hòn đảo với làn nước xanh ngọc, vách đá bazan và những bãi biển hoang sơ. Trải nghiệm hòa mình ngoài trời độc đáo nhất của Đài Loan.', see:'Bờ biển bazan Quỳ Bích, Công viên Nghệ thuật Đại dương, Đảo Đồng Bàn', do_:'Lặn ngắm san hô, lướt ván buồm, đạp xe khám phá các đảo', eat:'Hàu tươi, nhím biển, kẹo đậu phộng Bành Hồ', did:null} },
      { id:'pingtung', pinyin:'Píngdōng · 屏東',
        en:{tag:'Southern Taiwan', name:'Pingtung', desc:"A laid-back southern county with tropical weather, indigenous Paiwan culture and easy access to Kenting National Park — Taiwan's top beach destination.", see:'Kenting National Park, Sandimenmen Mountain, Liukuei Maolin', do_:'Beach, surfing, explore Paiwan indigenous villages', eat:'Pingtung black pearl wax apple, grilled wild boar, indigenous millet wine', did:null},
        zh:{tag:'台灣南境', name:'屏東', desc:'悠閒的南部縣份，擁有熱帶氣候、排灣族原住民文化，並鄰近墾丁國家公園——台灣首屈一指的海灘勝地。', see:'墾丁國家公園、三地門山、六龜茂林', do_:'海灘戲水、衝浪、探訪排灣族部落', eat:'屏東黑珍珠蓮霧、烤山豬肉、原住民小米酒', did:null},
        vi:{tag:'Miền Nam Đài Loan', name:'Bình Đông', desc:'Một huyện miền nam thư thái với khí hậu nhiệt đới, văn hóa bản địa Paiwan và dễ dàng tiếp cận Công viên Quốc gia Khẩn Đinh — điểm đến bãi biển hàng đầu của Đài Loan.', see:'Công viên Quốc gia Khẩn Đinh, Núi Tam Địa Môn, Lục Quy Mậu Lâm', do_:'Tắm biển, lướt sóng, khám phá bản làng người Paiwan bản địa', eat:'Mận đen Bình Đông, thịt heo rừng nướng, rượu kê bản địa', did:null} },
      { id:'yilan', pinyin:'Yílán · 宜蘭',
        en:{tag:'Nature escape', name:'Yilan', desc:"Nestled between mountains and sea on Taiwan's northeast coast, Yilan is famous for its organic farms, hot springs and the Kavalan whisky distillery.", see:'Cingshuei Cliff, Dongshan River Water Park, Jiaoxi hot springs', do_:'Hot spring bathing, cycling through rice paddies, visit Kavalan Distillery', eat:'Scallion pancakes (蔥油餅), sa-gi-ba (sticky rice rolls), fresh seafood', did:"Yilan's Kavalan whisky has won multiple 'World's Best Single Malt' awards, beating Scotch whisky in global competitions."}
        , zh:{tag:'自然秘境', name:'宜蘭', desc:'坐落於台灣東北海岸的山海之間，宜蘭以有機農場、溫泉與噶瑪蘭威士忌酒廠聞名。', see:'清水斷崖、冬山河親水公園、礁溪溫泉', do_:'泡溫泉、騎行穿越稻田、造訪噶瑪蘭酒廠', eat:'蔥油餅、糍粑（sa-gi-ba）、新鮮海鮮', did:'宜蘭的噶瑪蘭威士忌多次榮獲「世界最佳單一麥芽威士忌」獎項，在國際競賽中擊敗蘇格蘭威士忌。'},
        vi:{tag:'Trốn về thiên nhiên', name:'Nghi Lan', desc:'Nằm giữa núi và biển ở bờ đông bắc Đài Loan, Nghi Lan nổi tiếng với các trang trại hữu cơ, suối nước nóng và nhà máy rượu whisky Kavalan.', see:'Vách đá Thanh Thủy, Công viên nước sông Đông Sơn, Suối nước nóng Giao Khê', do_:'Ngâm suối nước nóng, đạp xe qua ruộng lúa, thăm nhà máy rượu Kavalan', eat:'Bánh hành (蔥油餅), bánh nếp sa-gi-ba, hải sản tươi', did:'Rượu whisky Kavalan của Nghi Lan từng nhiều lần giành giải “Whisky Single Malt ngon nhất thế giới”, vượt qua cả whisky Scotland trong các cuộc thi quốc tế.'} }
    ],
    singapore: [
      { id:'singapore', pinyin:'Xīnjiāpō · 新加坡',
        en:{tag:'City-state', name:'Singapore', desc:"One of the world's most cosmopolitan cities — a gleaming, efficient city-state where Mandarin, English, Malay and Tamil coexist. A unique and immersive environment for learning Chinese in a modern global context.", see:'Marina Bay Sands, Gardens by the Bay, Chinatown, Little India', do_:'Night Safari, explore Sentosa Island, walk the Singapore Botanic Gardens', eat:'Hainanese chicken rice, chilli crab, laksa, char kway teow, kaya toast', did:'Singapore is one of only three city-states in the world — alongside Monaco and Vatican City — and packs extraordinary cultural diversity into 733 km².'},
        zh:{tag:'城市國家', name:'新加坡', desc:'全球最國際化的城市之一——一座井然有序、高效運作的城市國家，普通話、英語、馬來語與泰米爾語在此共存。是在現代全球化脈絡下學習中文的獨特沉浸環境。', see:'濱海灣金沙、濱海灣花園、牛車水、小印度', do_:'夜間野生動物園、探索聖淘沙島、漫步新加坡植物園', eat:'海南雞飯、辣椒螃蟹、叻沙、炒粿條、咖椰吐司', did:'新加坡是全球僅有的三個城市國家之一——與摩納哥、梵蒂岡並列——在733平方公里的土地上蘊藏著驚人的文化多樣性。'},
        vi:{tag:'Quốc đảo', name:'Singapore', desc:'Một trong những thành phố quốc tế nhất thế giới — quốc đảo hiện đại, hiệu quả, nơi tiếng Hoa, tiếng Anh, tiếng Mã Lai và tiếng Tamil cùng tồn tại. Một môi trường hòa mình độc đáo để học tiếng Trung trong bối cảnh toàn cầu hiện đại.', see:'Marina Bay Sands, Gardens by the Bay, Khu phố Tàu, Little India', do_:'Sở thú đêm (Night Safari), khám phá đảo Sentosa, dạo Vườn Bách thảo Singapore', eat:'Cơm gà Hải Nam, cua sốt ớt, laksa, char kway teow, bánh mì kaya toast', did:'Singapore là một trong chỉ ba quốc đảo thành phố trên thế giới — cùng với Monaco và Vatican — chứa đựng sự đa dạng văn hóa phi thường trong diện tích chỉ 733 km².'} }
    ]
  };

  var LOC_LABELS = {
    en:{count:{china:'11 cities available',taiwan:'7 cities available',singapore:'City-state'}},
    zh:{count:{china:'共 11 座城市',taiwan:'共 7 座城市',singapore:'城市國家'}},
    vi:{count:{china:'11 thành phố',taiwan:'7 thành phố',singapore:'Quốc đảo'}}
  };

  function esc(s){ return s == null ? '' : s; }

  function cityCard(city, lang, dict){
    var t = city[lang];
    var did = t.did ? '<div class="loc-city-did">💡 ' + t.did + '</div>' : '';
    return (
      '<div class="loc-city-card" onclick="toggleCity(this)">' +
        '<div>' +
          '<div class="loc-city-tag">' + t.tag + '</div>' +
          '<div class="loc-city-name">' + t.name + '</div>' +
          '<div class="loc-city-pinyin">' + city.pinyin + '</div>' +
        '</div>' +
        '<div class="loc-city-detail">' +
          '<p class="loc-city-desc">' + t.desc + '</p>' +
          '<div class="loc-city-facts">' +
            '<div class="loc-city-fact"><strong>' + dict['loc.fact.see'] + '</strong> ' + t.see + '</div>' +
            '<div class="loc-city-fact"><strong>' + dict['loc.fact.do'] + '</strong> ' + t.do_ + '</div>' +
            '<div class="loc-city-fact"><strong>' + dict['loc.fact.eat'] + '</strong> ' + t.eat + '</div>' +
          '</div>' +
          did +
        '</div>' +
        '<div class="loc-city-toggle">' + dict['loc.explore'] + '</div>' +
      '</div>'
    );
  }

  function render(lang){
    var dict = (window.translations || {})[lang] || {};
    if (!dict['loc.explore']) return; // translations not loaded yet

    ['china','taiwan','singapore'].forEach(function(country){
      var grid = document.getElementById('grid-' + country);
      if (!grid) return;
      var html = CITIES[country].map(function(c){ return cityCard(c, lang, dict); }).join('');
      if (country === 'singapore') {
        html += '<div class="loc-city-card" style="background:var(--jade);cursor:default;justify-content:center;align-items:flex-start;gap:20px;">' +
          '<div class="eyebrow" style="color:#D9CFA8;">' + dict['loc.cta.eyebrow'] + '</div>' +
          '<h3 style="font-size:20px;font-weight:700;color:var(--paper);margin:0;">' + dict['loc.cta.h2'] + '</h3>' +
          '<a class="btn-primary" href="contact.html" style="margin-top:8px;display:inline-block;">' + dict['nav.cta'] + '</a>' +
        '</div>';
      }
      grid.innerHTML = html;
    });

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    var countCh = document.getElementById('count-china');
    var countTw = document.getElementById('count-taiwan');
    var countSg = document.getElementById('count-singapore');
    if (countCh) countCh.textContent = dict['loc.count.china'];
    if (countTw) countTw.textContent = dict['loc.count.taiwan'];
    if (countSg) countSg.textContent = dict['loc.count.singapore'];
  }

  document.addEventListener('lingoinn:langchange', function(e){ render(e.detail.lang); });
  document.addEventListener('DOMContentLoaded', function(){
    var lang = (window.getLingoinnLang && window.getLingoinnLang()) || localStorage.getItem('lingoinn_lang') || 'vi';
    render(lang);
    // re-apply hash-based tab opening after render (cards now exist)
    if (window.location.hash) {
      var hash = window.location.hash.replace('#', '');
      var matchTab = document.querySelector('[data-target="' + hash.replace('loc-','') + '"]');
      if (matchTab) matchTab.click();
    }
  });
})();