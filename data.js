// ============ 共用設定與資料 ============
// 這個檔案被 index.html、photos.html、student.html 共用。
// 之後要更新影片總清單、學生年級,只要改這個檔案就好,三個頁面會一起同步。

const REPO_OWNER='youjiu0719';
const REPO_NAME='2027mel';
const REPO_BRANCH='main';

const knownStudents=['amy','eason','eric','frankie','lawrence','louis','phoebe','sasa'];

const studentGradeMap={phoebe:'G3',lawrence:'G3',louis:'G7',amy:'G7',eric:'G12',eason:'G11',sasa:'Uni Y1',frankie:'G8'};

const officialShorts=[
{title:'Queen Victoria Market',id:'rv_YN2nfF5w',desc:'穿梭市場攤位與人群之間，記錄 Queen Victoria Market 鮮活又日常的一面。'},
{title:'First Day in Melbourne',id:'6iOlGmBeddU',desc:'從抵達、移動到第一次走進城市，記錄這趟墨爾本旅程正式展開的時刻。'},
{title:'Hospitality Training',id:'BPvgBIr6Pmo',desc:'走進餐旅實作課程，記錄學生從動手操作、彼此協助到完成任務的過程。'},
{title:'University of Melbourne',id:'d99US-Zp-2A',desc:'走進墨爾本大學校園，記錄學生參訪、觀察與共同完成議題提案的過程。'}
];

const works=[
{student:'Amy',topic:'Media',title:'ACMI',id:'ZeOrZwx5vco',desc:'從抵達 ACMI 開始，透過遊戲、影像作品、燈光裝置與互動體驗，記錄她在展覽中的探索過程。',verified:true},
{student:'Amy',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'WWfKFiqpOpk',desc:'親手將 Nutella 塗上吐司並完成烘烤，用簡單的步驟記錄旅途中準備早餐的日常。',verified:true},
{student:'Amy',topic:'Art',title:'NGV & Hosier Lane',id:'zO8M4di5G5I',desc:'先欣賞 Hosier Lane 色彩鮮明的街頭塗鴉，再走進 NGV 拍攝雕塑與畫作，記錄兩種截然不同的藝術風景。',verified:true},
{student:'Amy',topic:'City',title:'State Library Victoria',id:'izSIXZX0-oU',desc:'以英文帶大家走進維多利亞州立圖書館，從宏偉的外觀、穹頂閱讀室到館藏畫作，介紹她眼中美麗的建築細節。',verified:true},
{student:'Eric',topic:'Cooking',title:'Hospitality Training',id:'m-__-qDSX6U',desc:'記錄料理課中揉製麵團、製作手工義大利麵與鬆餅的過程，並延伸到下午前往 IKEA、Kmart 尋找釣魚用品的行程。',verified:true},
{student:'Eric',topic:'City',title:'Queen Victoria Market',id:'-CYxembBuyQ',desc:'原本計畫在市場購買袋鼠肉作為晚餐，詢問攤商後因沒有現貨改買魚，最後回到住處親自煎魚完成料理。',verified:true},
{student:'Eric',topic:'Campus',title:'RMIT University',id:'HN45B6gle14',desc:'以快速轉場與特寫鏡頭，捕捉機械手臂、校園階梯、現代建築及街頭海報，呈現 RMIT 周邊鮮明的科技與城市感。',verified:true},
{student:'Eric',topic:'City',title:'State Library Victoria',id:'PQ-xrloySx0',desc:'以英文介紹維多利亞州立圖書館，透過棋盤、穹頂閱讀室與古典畫作呈現館內特色，並加入玩具袋鼠與當日餐點作為生活紀錄。',verified:true},
{student:'Eric',topic:'Campus',title:'The University of Melbourne',id:'ytDU1QmET0w',desc:'從團體參訪與領導力工作坊出發，記錄校園導覽、溫室空間、課堂互動及與同伴用餐的完整行程。',verified:true},
{student:'Eric',topic:'Vlog',title:'Weekend in Melbourne Vlog',id:'L1C2ZzJEt1Q',desc:'以快速節奏記錄週末造訪 Melbourne Central，拍下地標大鐘、商場店鋪與復古電車展示，留下輕鬆的城市探索片段。',verified:true},
{student:'Sasa',topic:'Campus',title:'The University of Melbourne',id:'ECOtsDBiSx4',desc:'記錄墨爾本大學的一日課程，從製作身分地圖、規劃動物救援非營利組織到分組簡報，再以校園導覽與結業證書完成學習體驗。',verified:true},
{student:'Sasa',topic:'Cooking',title:'Hospitality Training',id:'VmRDcmC7VWc',desc:'親手擀製義大利麵並搭配培根奶油白醬，也製作「Crepes」法式可麗餅，透過實作記錄成功與失敗中學到的料理技巧。',verified:true},
{student:'Sasa',topic:'City',title:'State Library Victoria',id:'L6JKYIZ7q6I',desc:'從圖書館的創建歷史與 Redmond Barry 雕像開始，帶大家參觀戶外巨型西洋棋、館藏畫作與著名穹頂閱讀室。',verified:true},
{student:'Sasa',topic:'Media',title:'ACMI',id:'OEn79kznF7U',desc:'介紹 ACMI 的五大展區與 Lens 收藏體驗，並聚焦 Cuphead 幻影箱、互動電影場景及 LAIKA 停格動畫的製作展示。',verified:true},
{student:'Sasa',topic:'City',title:'Queen Victoria Market',id:'BiCWoLvd7yU',desc:'以美食為主題探索維多利亞女王市場，依序品嚐熱果醬甜甜圈、德式香腸堡及現場炙燒棉花糖的Campfire Chocolate。',verified:true},
{student:'Sasa',topic:'Art',title:'NGV & Hosier Lane',id:'Y-7WuzJ_6XY',desc:'從 Hosier Lane 不斷變化的街頭塗鴉走進 NGV，細看《The Rescue》對火光與陰影的運用，再延伸探索埃及文物與當代藝術。',verified:true},
{student:'Sasa',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'hrXj_pIzN7s',desc:'將小鬆餅加熱後搭配生菜與英式火腿，記錄第一次品嚐新食材並獨立完成早餐的生活體驗。',verified:true},
{student:'Louis',topic:'Campus',title:'The University of Melbourne',id:'hFIo6WTkM2A',desc:'記錄墨爾本大學的環境與廢棄物課程，透過分組活動認識回收與減少浪費，並留下校園午餐、紀念玩偶及晚餐的生活片段。',verified:true},
{student:'Louis',topic:'Cooking',title:'Hospitality Training',id:'JLW8rfcw7_I',desc:'穿上廚師服跟著老師學習料理，從揉製麵團、操作製麵機到完成一盤奶油義大利麵，記錄合作實作與學習新技巧的過程。',verified:true},
{student:'Louis',topic:'City',title:'State Library Victoria',id:'PbfrhEOU8NY',desc:'以活潑的剪輯帶大家走進維多利亞州立圖書館，拍下寬闊的穹頂閱讀室、歷史展品與紅色展間中的肖像畫作。',verified:true},
{student:'Louis',topic:'City',title:'Queen Victoria Market',id:'7_0sq_BjihI',desc:'從 Box Hill 搭火車前往維多利亞女王市場，品嚐甜甜圈與午餐；原本想買袋鼠肉，因店家未營業而改買魚，回到住處共同完成晚餐。',verified:true},
{student:'Louis',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'PT5n0S2PMUo',desc:'以快轉方式記錄第一次自己煎牛排，從熱鍋、翻面到搭配蒜片擺盤，完成一份約七分熟的蒜片牛排早餐。',verified:true},
{student:'Frankie',topic:'Campus',title:'RMIT University',id:'7lqEnLICljs',desc:'從特色午餐展開 RMIT 行程，參觀機械手臂與 3D 列印技術，再透過校園導覽觀察幾何外牆、人臉造型建築及公共休憩空間。',verified:true},
{student:'Frankie',topic:'Campus',title:'The University of Melbourne',id:'YmcVV5JAGA8',desc:'與 Eason 記錄身分地圖及非營利組織創業挑戰課程，並在校園導覽中探索歷史建築、蜜蜂旅館與自然空間。',verified:true},
{student:'Frankie',topic:'Cooking',title:'Hospitality Training',id:'AO1iiXFGmh4',desc:'穿上廚師服學習揉製麵團、烹調培根蛋醬義大利麵與可麗餅，完成料理後再以電車資訊按鈕與返程畫面收錄當日交通體驗。',verified:true},
{student:'Frankie',topic:'City',title:'State Library Victoria',id:'HsYwLh6qD9Q',desc:'走進穹頂閱讀室翻閱館藏書籍，探索館內畫廊、Ned Kelly 盔甲與趣味動物雕塑，呈現圖書館結合閱讀、歷史與藝術的一面。',verified:true},
{student:'Frankie',topic:'Media',title:'ACMI',id:'erSd6FhoQf4',desc:'與 Eason 從 Box Hill 搭火車前往 ACMI，沿途介紹 Flinders Street Station，再體驗電影台詞互動、幻影箱與每秒24格的動畫原理。',verified:true},
{student:'Frankie',topic:'Art',title:'NGV & Hosier Lane',id:'pH8g7z2NIgY',desc:'先記錄 Hosier Lane 不斷變化的街頭塗鴉，再走進 NGV 欣賞大型南瓜、彩色玻璃天花板、埃及文物與數位藝術作品。',verified:true},
{student:'Frankie',topic:'Vlog',title:'Weekend in Melbourne Vlog',id:'3cvQu3pXyuU',desc:'搭乘大眾運輸前往 Melbourne Central，逛訪 LEGO 商店、拍攝地標大鐘並體驗購物互動，留下輕鬆有趣的週末城市紀錄。',verified:true},
{student:'Frankie',topic:'Vlog',title:'Melbourne Breakfast Vlog 2',id:'XjTIejuVuD4',desc:'與 Eason 分工準備巧克力牛奶穀片、培根、煎蛋與吐司，完整記錄從下鍋、翻面到組合擺盤的早餐製作過程。',verified:true},
{student:'Phoebe',topic:'Campus',title:'The University of Melbourne',id:'jLXukWq-ksw',desc:'記錄墨爾本大學的課堂體驗，與組員討論環境議題、製作海報並上台分享，最後以校園午餐完成一日學習紀錄。',verified:true},
{student:'Phoebe',topic:'City',title:'State Library Victoria',id:'-eCeqR42WJ4',desc:'以活潑的字幕與畫面介紹圖書館宏偉的外觀、高聳的穹頂、館內西洋棋及畫作與歷史展品。',verified:true},
{student:'Phoebe',topic:'Media',title:'ACMI',id:'Tqnz8Op37Qw',desc:'從團體抵達 ACMI 開始，記錄彩色燈光裝置、動畫展示與聲音體驗，呈現她在互動展覽中親自探索的樂趣。',verified:true},
{student:'Phoebe',topic:'Art',title:'NGV',id:'_20ZGJ_vMuI',desc:'以照片拼貼記錄 NGV 的水牆、古典畫作、金屬雕塑與大型南瓜裝置，並延伸收錄 Hosier Lane 的街頭塗鴉。',verified:true},
{student:'Phoebe',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'FOjnEEbtlqo',desc:'自己從冰箱拿出果汁並倒入杯中，再將 Nutella 均勻塗上吐司，記錄簡單又甜蜜的早餐準備過程。',verified:true},
{student:'Lawrence',topic:'Campus',title:'The University of Melbourne',id:'4d5AKFSmSOE',desc:'從校園建築走進大學教室，記錄課堂學習與植物主題活動，呈現他第一次參與墨爾本大學課程的體驗。',verified:true},
{student:'Lawrence',topic:'City',title:'State Library Victoria',id:'BPEwBMZGAxg',desc:'從圖書館外觀走進寬闊的穹頂閱讀室，拍下排列整齊的書架、藝術展間與館內畫作，呈現空間的宏偉與美麗。',verified:true},
{student:'Lawrence',topic:'Media',title:'ACMI',id:'C725uPKdz4A',desc:'以快速剪輯記錄 ACMI 的彩色燈光、旋轉動畫與影像裝置，聚焦展覽中能夠親自操作的互動內容。',verified:true},
{student:'Lawrence',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'zEy2UbT48eE',desc:'以輕快貼圖與特效記錄準備可頌的過程，從拆開包裝、放上烤盤到完成早餐，呈現簡單的旅居日常。',verified:true},
{student:'Eason',topic:'Campus',title:'RMIT University',id:'N_-KDqwCkM4',desc:'從 RMIT 鮮明的建築外牆與藝術設計出發，參觀機械手臂操作展示及周邊現代建築，改變了他原本對建築的看法。',verified:true},
{student:'Eason',topic:'Campus',title:'The University of Melbourne',id:'YmcVV5JAGA8',desc:'記錄分組專題、校園午餐與導覽行程，參觀植物空間及特色展覽，最後以完成領導力工作坊並取得證書作結。',verified:true},
{student:'Eason',topic:'Cooking',title:'Hospitality Training',id:'5rKX6YnLAXY',desc:'穿上廚師服學習操作製麵機、烹煮奶油義大利麵及製作水果可麗餅，完成料理實作後再前往 IKEA 採買。',verified:true},
{student:'Eason',topic:'Media',title:'ACMI',id:'erSd6FhoQf4',desc:'與 Frankie 分享素材與拍攝視角，將互動裝置、影像展品與現場體驗整理成一支共同完成的 ACMI 探索影片。',verified:true},
{student:'Eason',topic:'Vlog',title:'Weekend in Melbourne Vlog',id:'oW-OPEPMsrE',desc:'記錄週末走訪維多利亞州立圖書館，欣賞穹頂閱讀室、歷史畫作與《Raven》漫畫展品，最後再回到 Melbourne Central 探索。',verified:true},
{student:'Eason',topic:'Art',title:'NGV & Hosier Lane',id:'UqpsPJMDZcc',desc:'從街頭塗鴉走進 NGV，拍下館外雕塑、水牆與大型南瓜裝置，並將 Royal Arcade 等沿途城市景點串成一日藝術探索。',verified:true},
{student:'Eason',topic:'Vlog',title:'Melbourne Breakfast Vlog 2',id:'XjTIejuVuD4',desc:'與 Frankie 共同拍攝早餐準備過程，透過兩人的分工與生活畫面，完成第二支合作日常紀錄。',verified:true}
];

const teachingVideos=[
{title:'Flinders Street Station',id:'GSuttIwNFKY',desc:'從建築特色與歷史故事出發，認識這座陪伴墨爾本人成長的重要交通地標。'},
{title:'Federation Square',id:'V4K0Rs8EAT8',desc:'介紹 介紹 Federation Square 從不被市民接受，到逐漸成為墨爾本城市客廳的轉變故事。'},
{title:'National Gallery of Victoria',id:'q94BhAclOb4',desc:'從建築、館藏與展覽空間出發，認識澳洲歷史最悠久的公共美術館。'},
{title:'Hosier Lane',id:'pzLdNGH4qwc',desc:'從巷弄的發展與街頭藝術文化出發，認識 Hosier Lane 如何成為墨爾本最具代表性的創作空間之一。'},
{title:'The University of Melbourne',id:'OcYQRtqDYZM',desc:'走進墨爾本大學的歷史與校園故事，認識這所大學如何影響城市的教育與文化發展。'},
{title:'RMIT',id:'99RFujwmd0k',desc:'從校園建築與設計理念出發，觀察 RMIT 如何把創意、科技與城市空間連結在一起。'}
];

function formatDayTitle(folderName){
  const m=folderName.match(/^(\d+)[-_](.+)$/);
  if(!m)return folderName;
  const num=m[1].padStart(2,'0');
  let slug=m[2].replace(/[-_]+/g,' ').trim();
  slug=slug.length<=5?slug.toUpperCase():slug.replace(/\b\w/g,c=>c.toUpperCase());
  return `Day ${num} · ${slug}`;
}

async function ghApiFallback(){
  try{
    const r=await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${REPO_BRANCH}?recursive=1`,{cache:'no-store'});
    if(!r.ok)return {files:[],error:`GitHub API 失敗(狀態碼 ${r.status})`};
    const j=await r.json();
    return {files:(j.tree||[]).filter(e=>e.type==='blob').map(e=>e.path),error:null};
  }catch(e){return {files:[],error:`GitHub API 失敗:${e.message}`};}
}

async function getRepoFileList(){
  try{
    const r=await fetch(`https://data.jsdelivr.com/v1/package/gh/${REPO_OWNER}/${REPO_NAME}@${REPO_BRANCH}/flat`,{cache:'no-store'});
    if(!r.ok)return {files:[],error:`jsDelivr 回應失敗(狀態碼 ${r.status})`};
    const j=await r.json();
    return {files:(j.files||[]).map(f=>f.name.replace(/^\//,'')),error:null};
  }catch(e){return {files:[],error:`網路請求失敗:${e.message}`};}
}

async function loadFileList(){
  let {files,error}=await ghApiFallback();
  if(error){
    const fallback=await getRepoFileList();
    if(!fallback.error){files=fallback.files;error=null;}
    else{error=`${error}；${fallback.error}`;}
  }
  return {files,error};
}

function detectStudent(filename){
  const lower=filename.toLowerCase();
  return knownStudents.find(n=>lower.startsWith(n))||null;
}
