
'use strict';

const PREFIX = 'ios-wallpapers';
const HASH = '15109c68';
const OFFLINE_CACHE = `${PREFIX}-${HASH}`;

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(OFFLINE_CACHE).then(function(cache) {
			return cache.addAll([
				'/',
				'/scripts/bundle.min.css',
				'/scripts/popup.min.js',
				'/scripts/wallpapers.json',
				'/scripts/bundle.min.css',
				'/scripts/wallpapers.json',
				'/index.html',
				'/07c98a74.js',
				'/0c22fb08.js',
				'/159285f9.js',
				'/4dc35523.js',
				'/78442ab1.js',
				'/7ad1bf17.js',
				'/89d8085b.js',
				'/d5268a95.js',
				'/f00f4ecc.js',
				'/f3ac39e9.js',
				'/f8f4c779.js',
				'/scripts/popup.min.js',
				'/images/extra/safari-pinned-tab.svg',
				'/images/1/01.png',
				'/images/1/02.png',
				'/images/1/03.png',
				'/images/1/05.png',
				'/images/1/06.png',
				'/images/1/07.png',
				'/images/1/08.png',
				'/images/1/09.png',
				'/images/1/10.png',
				'/images/1/11.png',
				'/images/1/13.png',
				'/images/1/14.png',
				'/images/1/16.png',
				'/images/1/17.png',
				'/images/1/18.png',
				'/images/1/19.png',
				'/images/1/20.png',
				'/images/1/21.png',
				'/images/1/22.png',
				'/images/1/apple-iphone-clown-fish-not-included-in-iOS1-only-in-beta.jpg',
				'/images/1/loading.gif',
				'/images/10/070.MountainStars-1024w-1366h@2x~ipad.png',
				'/images/10/109.Planets_Mars-1024w-1366h@2x~ipad.png',
				'/images/10/110.Planets_Jupiter-1024w-1366h@2x~ipad.png',
				'/images/10/111.Planets_Neptune-1024w-1366h@2x~ipad.png',
				'/images/10/112.Powder_Pink-1024w-1366h@2x~ipad.png',
				'/images/10/113.Powder_Yellow-1024w-1366h@2x~ipad.png',
				'/images/10/114.Powder_Blue-1024w-1366h@2x~ipad.png',
				'/images/10/200.Eric_Cahan_GB_NY_Sunrise-1024w-1366h@2x~ipad.png',
				'/images/10/201.Eric_Cahan_BI_RI_Sunset-1024w-1366h@2x~ipad.png',
				'/images/10/202.Blue_Gradient-1024w-1366h@2x~ipad.png',
				'/images/10/203.Dots_White-1024w-1366h@2x~ipad.png',
				'/images/10/204.Dots_Grey-1024w-1366h@2x~ipad.png',
				'/images/10/205.Dots_Black-1024w-1366h@2x~ipad.png',
				'/images/10/325.Waves_Hero-1024w-1366h@2x~ipad.jpg',
				'/images/10/330.Mars_HERO-1024w-1366h@2x~ipad.jpg',
				'/images/11/305.Earth-1024w-1366h@2x~ipad.jpg',
				'/images/11/310.Moon-1024w-1366h@2x~ipad.jpg',
				'/images/11/315.Earth_Night-1024w-1366h@2x~ipad.jpg',
				'/images/11/320.Beach_Hero-1024w-1366h@2x~ipad.jpg',
				'/images/11/334.Aura_Red-granite-414w-736h@3x~iphone.jpg',
				'/images/11/335.EF_Flower_AECHMEA-1024w-1366h@2x~ipad.jpg',
				'/images/11/340.EF_Flower_GLORIOSA-1024w-1366h@2x~ipad.jpg',
				'/images/11/345.EF_Flower_AQUILEGIA-1024w-1366h@2x~ipad.jpg',
				'/images/11/350.EF_Flower_FRITILLARIA-1024w-1366h@2x~ipad.jpg',
				'/images/11/355.EF_Flower_MUSCARI-1024w-1366h@2x~ipad.jpg',
				'/images/11/360.EF_Flower_HELLEBORUS-1024w-1366h@2x~ipad.jpg',
				'/images/11/365.Heritage_Stripe_Green-1024w-1366h@2x~ipad.jpg',
				'/images/11/370.Heritage_Stripe_Yellow-1024w-1366h@2x~ipad.jpg',
				'/images/11/375.Heritage_Stripe_Orange-1024w-1366h@2x~ipad.jpg',
				'/images/11/380.Heritage_Stripe_Red-1024w-1366h@2x~ipad.jpg',
				'/images/11/385.Heritage_Stripe_Purple-1024w-1366h@2x~ipad.jpg',
				'/images/11/390.Heritage_Stripe_Blue-1024w-1366h@2x~ipad.jpg',
				'/images/11/395.Heritage_Stripe_Black-1024w-1366h@2x~ipad.jpg',
				'/images/11/400.Solid_Black-1024w-1366h@2x~ipad.png',
				'/images/11/Aura_Black-granite.jpg',
				'/images/11/Aura_Gold-granite.jpg',
				'/images/11/Aura_Silver-granite.jpg',
				'/images/12/1010.pink-375w-812h.m4v',
				'/images/12/1010.pink-375w-812h@3x~iphone.jpg',
				'/images/12/1015.green-375w-812h.m4v',
				'/images/12/1015.green-375w-812h@3x~iphone.jpg',
				'/images/12/1020.yellow-375w-812h.m4v',
				'/images/12/1020.yellow-375w-812h@3x~iphone.jpg',
				'/images/12/1030.OrangeInk-375w-812h.m4v',
				'/images/12/1030.OrangeInk-375w-812h@3x~iphone.jpg',
				'/images/12/1035.BlueInk-375w-812h.m4v',
				'/images/12/1035.BlueInk-375w-812h@3x~iphone.jpg',
				'/images/12/1040.PinkInk-375w-812h.m4v',
				'/images/12/1040.PinkInk-375w-812h@3x~iphone.jpg',
				'/images/12/1120.BubbleA-argon-375w-812h@3x~iphone.jpg',
				'/images/12/1120.BubbleA-argon-375w-812h@3x~iphone.mp4',
				'/images/12/1120.BubbleA-argon-414w-896h@3x~iphone.jpg',
				'/images/12/1120.BubbleA-argon-414w-896h@3x~iphone.mp4',
				'/images/12/1125.BubbleB-argon-375w-812h@3x~iphone.jpg',
				'/images/12/1125.BubbleB-argon-375w-812h@3x~iphone.mp4',
				'/images/12/1125.BubbleB-argon-414w-896h@3x~iphone.jpg',
				'/images/12/1125.BubbleB-argon-414w-896h@3x~iphone.mp4',
				'/images/12/1130.BubbleC-argon-375w-812h@3x~iphone.jpg',
				'/images/12/1130.BubbleC-argon-375w-812h@3x~iphone.mp4',
				'/images/12/1130.BubbleC-argon-414w-896h@3x~iphone.jpg',
				'/images/12/1130.BubbleC-argon-414w-896h@3x~iphone.mp4',
				'/images/12/320.Beach_Hero-1024w-1366h@2x~ipad.jpg',
				'/images/12/325.Waves_Hero-1024w-1366h@2x~ipad.jpg',
				'/images/12/410.RoseGold-marble-1024w-1366h@2x~ipad.jpg',
				'/images/12/415.Sparrow-marble-1024w-1366h@2x~ipad.jpg',
				'/images/12/420.Albany_Gold-marble-1024w-1366h@2x~ipad.jpg',
				'/images/12/500.WWDC2018-1024w-1366h@2x~ipad.jpg',
				'/images/12/530.Bubble_Gray-414w-896h@2x~iphone.jpg',
				'/images/12/531.Bubble_Blue-414w-896h@2x~iphone.jpg',
				'/images/12/532.Bubble_Orange-414w-896h@2x~iphone.jpg',
				'/images/12/533.Bubble_White-414w-896h@2x~iphone.jpg',
				'/images/12/534.Bubble_Yellow-414w-896h@2x~iphone.jpg',
				'/images/12/535.Bubble_Red-414w-896h@2x~iphone.jpg',
				'/images/12/536.DoubleBubble_Gray-414w-896h@2x~iphone.jpg',
				'/images/12/537.DoubleBubble_Blue-414w-896h@2x~iphone.jpg',
				'/images/12/538.DoubleBubble_Orange-414w-896h@2x~iphone.jpg',
				'/images/12/539.DoubleBubble_White-414w-896h@2x~iphone.jpg',
				'/images/12/540.DoubleBubble_Yellow-414w-896h@2x~iphone.jpg',
				'/images/12/541.DoubleBubble_Red-414w-896h@2x~iphone.jpg',
				'/images/12/IMG_6118.jpg',
				'/images/12/IMG_6119.jpg',
				'/images/12/IMG_6120.jpg',
				'/images/12/IMG_6121.jpg',
				'/images/12/IMG_6122.jpg',
				'/images/12/IMG_6212.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Earth_Night.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Earth.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Flower_AECHMEA.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Flower_AQUILEGIA.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Flower_FRITILLARIA.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Flower_GLORIOSA.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Flower_MUSCARI.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Heritage_Stripe_Black.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Heritage_Stripe_Blue.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Heritage_Stripe_Green.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Heritage_Stripe_Orange.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Heritage_Stripe_Purple.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Heritage_Stripe_Red.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Heritage_Stripe_Yellow.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Moon.jpg',
				'/images/12/iOS_11_GM_Wallpaper_Solid_Black.png',
				'/images/12/Silver.jpg',
				'/images/2/01.png',
				'/images/2/02.png',
				'/images/2/03.png',
				'/images/2/05.png',
				'/images/2/06.png',
				'/images/2/07.png',
				'/images/2/08.png',
				'/images/2/09.png',
				'/images/2/10.png',
				'/images/2/11.png',
				'/images/2/13.png',
				'/images/2/14.png',
				'/images/2/16.png',
				'/images/2/17.png',
				'/images/2/18.png',
				'/images/2/19.png',
				'/images/2/20.png',
				'/images/2/21.png',
				'/images/2/22.png',
				'/images/2/apple-iphone-clown-fish-not-included-in-iOS1-only-in-beta.jpg',
				'/images/3/100_iPad.png',
				'/images/3/101_iPad.png',
				'/images/3/102_iPad.png',
				'/images/3/103_iPad.png',
				'/images/3/104_iPad.png',
				'/images/3/105_iPad.png',
				'/images/3/106_iPad.png',
				'/images/3/107_iPad.png',
				'/images/3/108_iPad.png',
				'/images/3/109_iPad.png',
				'/images/3/110_iPad.png',
				'/images/3/111_iPad.png',
				'/images/3/112_iPad.png',
				'/images/3/113_iPad.png',
				'/images/3/114_iPad.png',
				'/images/3/115_iPad.png',
				'/images/3/116_iPad.png',
				'/images/3/117_iPad.png',
				'/images/3/118_iPad.png',
				'/images/3/19.png',
				'/images/4/100_iPad.png',
				'/images/4/101_iPad.png',
				'/images/4/102_iPad.png',
				'/images/4/103_iPad.png',
				'/images/4/104_iPad.png',
				'/images/4/105_iPad.png',
				'/images/4/106_iPad.png',
				'/images/4/107_iPad.png',
				'/images/4/108_iPad.png',
				'/images/4/109_iPad.png',
				'/images/4/110_iPad.png',
				'/images/4/111_iPad.png',
				'/images/4/113_iPad.png',
				'/images/4/114_iPad.png',
				'/images/4/115_iPad.png',
				'/images/4/116_iPad.png',
				'/images/4/117_iPad.png',
				'/images/4/118_iPad.png',
				'/images/4/119_iPad.png',
				'/images/4/120_iPad.png',
				'/images/4/121_iPad.png',
				'/images/4/122_iPad.png',
				'/images/4/123_iPad.png',
				'/images/4/124_iPad.png',
				'/images/4/125_iPad.png',
				'/images/4/126_iPad.png',
				'/images/4/127_iPad.png',
				'/images/4/128_iPad.png',
				'/images/4/129_iPad.png',
				'/images/4/130_iPad.png',
				'/images/5/100_iPad@2x~ipad.png',
				'/images/5/101_iPad@2x~ipad.jpg',
				'/images/5/102_iPad@2x~ipad.jpg',
				'/images/5/103_iPad@2x~ipad.png',
				'/images/5/104_iPad@2x~ipad.jpg',
				'/images/5/105_iPad@2x~ipad.png',
				'/images/5/107_iPad@2x~ipad.png',
				'/images/5/108_iPad@2x~ipad.png',
				'/images/5/109_iPad@2x~ipad.jpg',
				'/images/5/110_iPad@2x~ipad.jpg',
				'/images/5/111_iPad@2x~ipad.jpg',
				'/images/5/112_iPad@2x~ipad.png',
				'/images/5/113_iPad@2x~ipad.jpg',
				'/images/5/114_iPad@2x~ipad.png',
				'/images/5/115_iPad@2x~ipad.jpg',
				'/images/5/117_iPad@2x~ipad.jpg',
				'/images/5/118_iPad@2x~ipad.png',
				'/images/5/119_iPad@2x~ipad.jpg',
				'/images/5/120_iPad@2x~ipad.png',
				'/images/5/121_iPad@2x~ipad.jpg',
				'/images/5/122_iPad@2x~ipad.jpg',
				'/images/5/123_iPad@2x~ipad.png',
				'/images/5/124_iPad@2x~ipad.png',
				'/images/5/125_iPad@2x~ipad.png',
				'/images/5/126_iPad@2x~ipad.png',
				'/images/5/127_iPad@2x~ipad.png',
				'/images/5/128_iPad@2x~ipad.jpg',
				'/images/5/129_iPad@2x~ipad.png',
				'/images/5/130_iPad@2x~ipad.png',
				'/images/5/131_iPad@2x~ipad.png',
				'/images/5/132_iPad@2x~ipad.jpg',
				'/images/5/133_iPad@2x~ipad.png',
				'/images/5/134_iPad@2x~ipad.jpg',
				'/images/6/100_iPad@2x~ipad.png',
				'/images/6/101_iPad@2x~ipad.png',
				'/images/6/102_iPad@2x~ipad.png',
				'/images/6/104_iPad@2x~ipad.png',
				'/images/6/115_iPad@2x~ipad.png',
				'/images/6/116_iPad@2x~ipad.png',
				'/images/6/117_iPad@2x~ipad.png',
				'/images/6/119_iPad@2x~ipad.png',
				'/images/6/121_iPad@2x~ipad.png',
				'/images/6/122_iPad@2x~ipad.png',
				'/images/6/1231_iPad@2x~ipad.png',
				'/images/6/1232_iPad@2x~ipad.png',
				'/images/6/1233_iPad@2x~ipad.png',
				'/images/6/1234_iPad@2x~ipad.png',
				'/images/6/1235_iPad@2x~ipad.png',
				'/images/6/128_iPad@2x~ipad.png',
				'/images/6/1291_iPad@2x~ipad.png',
				'/images/6/1292_iPad@2x~ipad.png',
				'/images/6/1293_iPad@2x~ipad.png',
				'/images/6/1294_iPad@2x~ipad.png',
				'/images/6/1295_iPad@2x~ipad.png',
				'/images/6/132_iPad@2x~ipad.png',
				'/images/6/134_iPad@2x~ipad.png',
				'/images/7/101@2x~ipad.png',
				'/images/7/102@2x~ipad.png',
				'/images/7/103@2x~ipad.png',
				'/images/7/104@2x~ipad.png',
				'/images/7/105@2x~ipad.png',
				'/images/7/106@2x~ipad.png',
				'/images/7/107@2x~ipad.png',
				'/images/7/108@2x~ipad.png',
				'/images/7/109@2x~ipad.png',
				'/images/7/110@2x~ipad.png',
				'/images/7/111@2x~ipad.png',
				'/images/7/112@2x~ipad.png',
				'/images/7/113@2x~ipad.png',
				'/images/7/114@2x~ipad.png',
				'/images/7/115@2x~ipad.png',
				'/images/7/116@2x~ipad.png',
				'/images/7/117@2x~ipad.png',
				'/images/7/118@2x~ipad.png',
				'/images/7/119@2x~ipad.png',
				'/images/7/120@2x~ipad.png',
				'/images/7/121@2x~ipad.png',
				'/images/7/122@2x~ipad.png',
				'/images/7/123@2x~ipad.png',
				'/images/7/124@2x~ipad.png',
				'/images/7/125@2x~ipad.png',
				'/images/7/126@2x~ipad.png',
				'/images/8/100.MountainStars@2x~ipad.png',
				'/images/8/101.Trees@2x~ipad.png',
				'/images/8/102.Mountains@2x~ipad.png',
				'/images/8/103.Water@2x~ipad.png',
				'/images/8/104.DarkSea@2x~ipad.png',
				'/images/8/105.Earth@2x~ipad.png',
				'/images/8/106.Space@2x~ipad.png',
				'/images/8/107.Moon@2x~ipad.png',
				'/images/8/108.Flower_Bouquet@2x~ipad.png',
				'/images/8/109.Flower_White@2x~ipad.png',
				'/images/8/110.Flower_Purple@2x~ipad.png',
				'/images/8/111.Flower_Red@2x~ipad.png',
				'/images/8/112.Flower_Pink@2x~ipad.png',
				'/images/8/113.RedSpider@2x~ipad.png',
				'/images/8/114.Purple_Dahlia@2x~ipad.png',
				'/images/8/115.Leaf@2x~ipad.png',
				'/images/8/200.Dots_White@2x~ipad.png',
				'/images/8/201.Dots_Grey@2x~ipad.png',
				'/images/8/202.Dots_Black@2x~ipad.png',
				'/images/8/203.Dots_Pink@2x~ipad.png',
				'/images/8/204.Dots_Yellow@2x~ipad.png',
				'/images/8/205.Dots_Blue@2x~ipad.png',
				'/images/8/206.Dots_Green@2x~ipad.png',
				'/images/8/207.Eric_Cahan_GB_NY_Sunrise@2x~ipad.png',
				'/images/8/208.Eric_Cahan_BI_RI_Sunset@2x~ipad.png',
				'/images/8/209.Eric_Cahan_GB_NY_Sunrise@2x~ipad.png',
				'/images/8/210.Blue_Gradient@2x~ipad.png',
				'/images/8/211.Inhouse_Chicklets_Multi@2x~ipad.png',
				'/images/8/212.Inhouse_Triangles_Multi@2x~ipad.png',
				'/images/8/213.Inhouse_Triangles_Teal@2x~ipad.png',
				'/images/8/214.Inhouse_Confetti@2x~ipad.png',
				'/images/8/300.Kent_Shiraishi_White_Forest@2x~ipad.png',
				'/images/8/301.Classic_Beach@2x~ipad.png',
				'/images/8/302.Keegan_Gibbs_Water@2x~ipad.png',
				'/images/8/303.Classic_Wave@2x~ipad.png',
				'/images/8/304.Ansel_Adams_Lake@2x~ipad.png',
				'/images/8/305.NASA_Nebula@2x~ipad.png',
				'/images/8/306.Zoltan_Kenwell_Arora@2x~ipad.png',
				'/images/8/307.NASA_Earth@2x~ipad.png',
				'/images/8/308.Jason_Madara_Sunset@2x~ipad.png',
				'/images/8/309.Classic_Grass@2x~ipad.png',
				'/images/8/310.Inhouse_Poppy_Multiple@2x~ipad.png',
				'/images/8/311.Classic_Lily@2x~ipad.png',
				'/images/9/100.Mars_HERO~ipad.png',
				'/images/9/101.Mars2~ipad.png',
				'/images/9/102.Mars3~ipad.png',
				'/images/9/103.Feathers_Red~ipad.png',
				'/images/9/104.Feathers_Grey~ipad.png',
				'/images/9/105.Feathers_Blue~ipad.png',
				'/images/9/106.Flowers_Purple_Rose~ipad.png',
				'/images/9/107.Flowers_Fireworks~ipad.png',
				'/images/9/108.Leaves_Blue~ipad.png',
				'/images/9/109.Planets_Mars~ipad.png',
				'/images/9/110.Planets_Jupiter~ipad.png',
				'/images/9/111.Planets_Neptune~ipad.png',
				'/images/9/112.Powder_Pink~ipad.png',
				'/images/9/113.Powder_Yellow~ipad.png',
				'/images/9/114.Powder_Blue~ipad.png',
				'/images/9/115.Flower_Blue~ipad.png',
				'/images/9/116.Flower_Pink~ipad.png',
				'/images/9/117.Flower_Red~ipad.png',
				'/images/9/118.RedSpider~ipad.png',
				'/images/9/119.Leaf_Green~ipad.png',
				'/images/9/120.Purple_Dahlia~ipad.png',
				'/images/9/200.Eric_Cahan_GB_NY_Sunrise~ipad.png',
				'/images/9/201.Eric_Cahan_BI_RI_Sunset~ipad.png',
				'/images/9/202.Blue_Gradient~ipad.png',
				'/images/9/203.Dots_White~ipad.png',
				'/images/9/204.Dots_Grey~ipad.png',
				'/images/9/205.Dots_Black~ipad.png',
				'/images/9/IMG_5493.png',
				'/images/extra/144.png',
				'/images/extra/152.png',
				'/images/extra/16.png',
				'/images/extra/192.png',
				'/images/extra/196.png',
				'/images/extra/32.png',
				'/images/extra/512.png',
				'/images/extra/android-chrome-96x96.png',
				'/images/extra/apple copy.png',
				'/images/extra/apple-touch-icon.png',
				'/images/extra/apple.png',
				'/images/extra/browserconfig.xml',
				'/images/extra/favicon-16x16.png',
				'/images/extra/favicon-32x32.png',
				'/images/extra/favicon.ico',
				'/images/extra/mstile-150x150.png',
				'/images/extra/safari-pinned-tab.svg',
				'/images/extra/site.webmanifest',
				'/images/iphone-6s/1000.FishBlueRed-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1000.FishBlueRed.m4v',
				'/images/iphone-6s/1001.FishBlueWhite-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1001.FishBlueWhite.m4v',
				'/images/iphone-6s/1002.FishBlueYellow-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1002.FishBlueYellow.m4v',
				'/images/iphone-6s/1003.FishOrange-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1003.FishOrange.m4v',
				'/images/iphone-6s/1004.FishBlueOrange-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1004.FishBlueOrange.m4v',
				'/images/iphone-6s/1005.FishLightBlue-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1005.FishLightBlue.m4v',
				'/images/iphone-6s/1006.InkPurple-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1006.InkPurple.m4v',
				'/images/iphone-6s/1007.InkWhite-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1007.InkWhite.m4v',
				'/images/iphone-6s/1008.InkLightBlue-414w-736h@3x~iphone.jpg',
				'/images/iphone-6s/1008.InkLightBlue.m4v',
				'/images/iphone-7/BDropBlueB.jpg',
				'/images/iphone-7/BDropGreenA.jpg',
				'/images/iphone-7/BDropGreenB.jpg',
				'/images/iphone-7/BDropPinkB.jpg',
				'/images/iphone-7/BDropPurpleA.jpg',
				'/images/iphone-7/BDropPurpleB.jpg',
				'/images/iphone-7/BDropSilverAA.jpg',
				'/images/iphone-7/BDropSilverBB.jpg',
				'/images/iphone-7/BDropYellowB.jpg',
				'/images/iphone-7/droplet_blue.jpg',
				'/images/iphone-7/droplet_yellow.jpg',
				'/images/iphone-7/iOS-10.2-iPhone-Wallpaper-Droplet_Red.png',
				'/images/iphone-7/WDropBlueB.jpg',
				'/images/iphone-7/WDropGreenA.jpg',
				'/images/iphone-7/WDropGreenB.jpg',
				'/images/iphone-7/WDropPinkA.jpg',
				'/images/iphone-7/WDropPinkB.jpg',
				'/images/iphone-7/WDropPurpleA.jpg',
				'/images/iphone-7/WDropPurpleB.jpg',
				'/images/iphone-7/WDropSilverAA.jpg',
				'/images/iphone-7/WDropSilverBB.jpg',
				'/images/iphone-7/WDropYellowA.jpg',
				'/images/iphone-7/WDropYellowB.jpg',
				'/images/iphone-se/130.Nudibranch_Pink-zinc@2x~iphone.png',
				'/images/iphone-se/135.Nudibranch_Blue-zinc@2x~iphone.png',
				'/images/iphone-se/140.Nudibranch_Gold-zinc@2x~iphone.png',
				'/images/iphone-se/145.Nudibranch_Red-zinc@2x~iphone.png',
				'/images/iphone-x/1010.pink-375w-812h.m4v',
				'/images/iphone-x/1010.pink-375w-812h@3x~iphone.jpg',
				'/images/iphone-x/1015.green-375w-812h.m4v',
				'/images/iphone-x/1015.green-375w-812h@3x~iphone.jpg',
				'/images/iphone-x/1020.yellow-375w-812h.m4v',
				'/images/iphone-x/1020.yellow-375w-812h@3x~iphone.jpg',
				'/images/iphone-x/1030.OrangeInk-375w-812h.m4v',
				'/images/iphone-x/1030.OrangeInk-375w-812h@3x~iphone.jpg',
				'/images/iphone-x/1035.BlueInk-375w-812h.m4v',
				'/images/iphone-x/1035.BlueInk-375w-812h@3x~iphone.jpg',
				'/images/iphone-x/1040.PinkInk-375w-812h.m4v',
				'/images/iphone-x/1040.PinkInk-375w-812h@3x~iphone.jpg',
				'/images/iphone-x/IMG_6118.jpg',
				'/images/iphone-x/IMG_6119.jpg',
				'/images/iphone-x/IMG_6120.jpg',
				'/images/iphone-x/IMG_6121.jpg',
				'/images/iphone-x/IMG_6122.jpg',
				'/images/iphone-x/IMG_6212.jpg',
				'/images/iphone-xr/530.Bubble_Gray-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/531.Bubble_Blue-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/532.Bubble_Orange-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/533.Bubble_White-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/534.Bubble_Yellow-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/535.Bubble_Red-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/536.DoubleBubble_Gray-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/537.DoubleBubble_Blue-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/538.DoubleBubble_Orange-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/539.DoubleBubble_White-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/540.DoubleBubble_Yellow-414w-896h@2x~iphone.jpg',
				'/images/iphone-xr/541.DoubleBubble_Red-414w-896h@2x~iphone.jpg',
				'/images/iphone-xs-max/1120.BubbleA-argon-414w-896h@3x~iphone.jpg',
				'/images/iphone-xs-max/1120.BubbleA-argon-414w-896h@3x~iphone.mp4',
				'/images/iphone-xs-max/1125.BubbleB-argon-414w-896h@3x~iphone.jpg',
				'/images/iphone-xs-max/1125.BubbleB-argon-414w-896h@3x~iphone.mp4',
				'/images/iphone-xs-max/1130.BubbleC-argon-414w-896h@3x~iphone.jpg',
				'/images/iphone-xs-max/1130.BubbleC-argon-414w-896h@3x~iphone.mp4',
				'/images/iphone-xs/1120.BubbleA-argon-375w-812h@3x~iphone.jpg',
				'/images/iphone-xs/1120.BubbleA-argon-375w-812h@3x~iphone.mp4',
				'/images/iphone-xs/1125.BubbleB-argon-375w-812h@3x~iphone.jpg',
				'/images/iphone-xs/1125.BubbleB-argon-375w-812h@3x~iphone.mp4',
				'/images/iphone-xs/1130.BubbleC-argon-375w-812h@3x~iphone.jpg',
				'/images/iphone-xs/1130.BubbleC-argon-375w-812h@3x~iphone.mp4'
			]); // Computed at build time.
		})
	);
});

self.addEventListener('activate', function(event) {
	// Delete old asset caches.
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(
				keys.map(function(key) {
					if (
						key != OFFLINE_CACHE &&
						key.startsWith(`${PREFIX}-`)
					) {
						return caches.delete(key);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	if (event.request.mode == 'navigate') {
		//console.log('Handling fetch event for', event.request.url);
		//console.log(event.request);
		event.respondWith(
			fetch(event.request).catch(function(exception) {
				// The `catch` is only triggered if `fetch()` throws an exception,
				// which most likely happens due to the server being unreachable.
				console.error(
					'Fetch failed; returning offline page instead.',
					exception
				);
				return caches.open(OFFLINE_CACHE).then(function(cache) {
					return cache.match('/');
				});
			})
		);
	} else {
		// It’s not a request for an HTML document, but rather for a CSS or SVG
		// file or whatever…
		event.respondWith(
			caches.match(event.request).then(function(response) {
				return response || fetch(event.request);
			})
		);
	}

});