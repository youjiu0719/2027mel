// ============ 共用設定與資料 ============
// 這個檔案被 index.html、photos.html、student.html 共用。
// 之後要更新影片總清單、學生年級,只要改這個檔案就好,三個頁面會一起同步。

const REPO_OWNER='youjiu0719';
const REPO_NAME='2027mel';
const REPO_BRANCH='main';

const knownStudents=['amy','eason','eric','frankie','lawrence','louis','phoebe','sasa'];

const studentGradeMap={phoebe:'G3',lawrence:'G3',louis:'G7',amy:'G7',eric:'G12',eason:'G11',sasa:'Uni Y1',frankie:'G8'};

const officialShorts=[
{title:'Queen Victoria Market',id:'rv_YN2nfF5w',desc:'官方視角記錄的市場散策，捕捉現場的日常氣氛。'},
{title:'First Day in Melbourne',id:'6iOlGmBeddU',desc:'抵達墨爾本的第一天，記錄旅程的開始。'},
{title:'Hospitality Training',id:'BPvgBIr6Pmo',desc:'餐旅實作課程的完整紀錄，呈現學生的操作過程。'},
{title:'University of Melbourne',id:'d99US-Zp-2A',desc:'墨爾本大學參訪的官方記錄，涵蓋整天的正式行程。'}
];

const works=[
{student:'Amy',topic:'City',title:'State Library Victoria',id:'izSIXZX0-oU',desc:'走進圖書館，記錄空間與閱讀氛圍的故事。',verified:true},
{student:'Amy',topic:'Media',title:'ACMI',id:'ZeOrZwx5vco',desc:'從展覽觀察出發，選擇素材並完成影片。',verified:true},
{student:'Amy',topic:'Art',title:'NGV & Hosier Lane',id:'zO8M4di5G5I',desc:'從美術館到塗鴉街，記錄兩種截然不同的藝術樣貌。',verified:true},
{student:'Amy',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'WWfKFiqpOpk',desc:'從一頓早餐開始，記錄墨爾本日常的生活步調。',verified:true},
{student:'Sasa',topic:'City',title:'The University of Melbourne',id:'ECOtsDBiSx4',desc:'走進校園，記錄第一次踏進墨爾本大學的所見所感。',verified:true},
{student:'Sasa',topic:'Cooking',title:'Hospitality Training',id:'VmRDcmC7VWc',desc:'從共同任務中找出值得留下的畫面。',verified:true},
{student:'Sasa',topic:'City',title:'State Library Victoria',id:'L6JKYIZ7q6I',desc:'走進圖書館，記錄空間與閱讀氛圍的故事。',verified:true},
{student:'Sasa',topic:'Media',title:'ACMI',id:'OEn79kznF7U',desc:'從展覽出發，記錄自己對動畫與影像創作的觀察。',verified:true},
{student:'Sasa',topic:'City',title:'Queen Victoria Market',id:'BiCWoLvd7yU',desc:'穿梭市場之間，捕捉日常又鮮活的畫面。',verified:true},
{student:'Sasa',topic:'Art',title:'NGV & Hosier Lane',id:'Y-7WuzJ_6XY',desc:'從美術館到塗鴉街，記錄兩種截然不同的藝術樣貌。',verified:true},
{student:'Sasa',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'hrXj_pIzN7s',desc:'從一頓早餐開始，記錄墨爾本日常的生活步調。',verified:true},
{student:'Eric',topic:'City',title:'RMIT University',id:'HN45B6gle14',desc:'用鏡頭記錄 RMIT 校園裡讓人驚豔的建築細節。',verified:true},
{student:'Eric',topic:'City',title:'The University of Melbourne',id:'ytDU1QmET0w',desc:'走進校園，記錄第一次踏進墨爾本大學的所見所感。',verified:true},
{student:'Eric',topic:'Cooking',title:'Hospitality Training',id:'m-__-qDSX6U',desc:'把實作過程整理成清楚、有節奏的短片。',verified:true},
{student:'Eric',topic:'City',title:'State Library Victoria',id:'PQ-xrloySx0',desc:'把圖書館的歷史與空間整理成自己的英文故事。',verified:true},
{student:'Eric',topic:'City',title:'Queen Victoria Market',id:'-CYxembBuyQ',desc:'穿梭在 Queen Victoria Market 裡，捕捉市場的日常畫面。',verified:true},
{student:'Eric',topic:'Vlog',title:'Weekend in Melbourne Vlog',id:'L1C2ZzJEt1Q',desc:'用鏡頭記錄假日在墨爾本自由探索的一天。',verified:true},
{student:'Louis',topic:'City',title:'The University of Melbourne',id:'hFIo6WTkM2A',desc:'走進校園，記錄第一次踏進墨爾本大學的所見所感。',verified:true},
{student:'Louis',topic:'Cooking',title:'Hospitality Training',id:'JLW8rfcw7_I',desc:'從餐旅實作中記錄合作、流程與現場節奏。',verified:true},
{student:'Louis',topic:'City',title:'State Library Victoria',id:'PbfrhEOU8NY',desc:'走進圖書館，記錄空間與閱讀氛圍的故事。',verified:true},
{student:'Louis',topic:'City',title:'Queen Victoria Market',id:'7_0sq_BjihI',desc:'穿梭市場之間，捕捉日常又鮮活的畫面。',verified:true},
{student:'Louis',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'PT5n0S2PMUo',desc:'從一頓早餐開始，記錄墨爾本日常的生活步調。',verified:true},
{student:'Frankie',topic:'City',title:'RMIT University',id:'7lqEnLICljs',desc:'用影像捕捉 RMIT 校園裡富有設計感的角落。',verified:true},
{student:'Frankie',topic:'City',title:'The University of Melbourne',id:'YmcVV5JAGA8',desc:'與 Eason 合作，記錄兩人在校園裡的觀察。',verified:true},
{student:'Frankie',topic:'Cooking',title:'Hospitality Training',id:'AO1iiXFGmh4',desc:'把實作過程整理成清楚、有節奏的短片。',verified:true},
{student:'Frankie',topic:'City',title:'State Library Victoria',id:'HsYwLh6qD9Q',desc:'走進圖書館，記錄空間與閱讀氛圍的故事。',verified:true},
{student:'Frankie',topic:'Media',title:'ACMI',id:'erSd6FhoQf4',desc:'與 Eason 合作，從展覽出發完成的作品。',verified:true},
{student:'Frankie',topic:'Art',title:'NGV & Hosier Lane',id:'pH8g7z2NIgY',desc:'從美術館到塗鴉街，用鏡頭記錄墨爾本的藝術面貌。',verified:true},
{student:'Frankie',topic:'Vlog',title:'Weekend in Melbourne Vlog',id:'3cvQu3pXyuU',desc:'用鏡頭記錄假日在墨爾本自由探索的一天。',verified:true},
{student:'Frankie',topic:'Vlog',title:'Melbourne Breakfast Vlog 2',id:'XjTIejuVuD4',desc:'與 Eason 合作的第二支早餐 vlog，記錄墨爾本的日常步調。',verified:true},
{student:'Phoebe',topic:'City',title:'The University of Melbourne',id:'jLXukWq-ksw',desc:'走進校園，記錄第一次踏進墨爾本大學的所見所感。',verified:true},
{student:'Phoebe',topic:'City',title:'State Library Victoria',id:'-eCeqR42WJ4',desc:'走進圖書館，記錄空間與閱讀氛圍的故事。',verified:true},
{student:'Phoebe',topic:'Media',title:'ACMI',id:'Tqnz8Op37Qw',desc:'探索影像、科技與互動敘事的可能。',verified:true},
{student:'Phoebe',topic:'Art',title:'NGV',id:'_20ZGJ_vMuI',desc:'從展覽出發，記錄自己對美術館作品的觀察。',verified:true},
{student:'Phoebe',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'FOjnEEbtlqo',desc:'從一頓早餐開始，記錄墨爾本日常的生活步調。',verified:true},
{student:'Lawrence',topic:'City',title:'The University of Melbourne',id:'4d5AKFSmSOE',desc:'走進校園，記錄第一次踏進墨爾本大學的所見所感。',verified:true},
{student:'Lawrence',topic:'City',title:'State Library Victoria',id:'BPEwBMZGAxg',desc:'走進圖書館，記錄空間與閱讀氛圍的故事。',verified:true},
{student:'Lawrence',topic:'Media',title:'ACMI',id:'C725uPKdz4A',desc:'探索影像、科技與互動敘事的可能。',verified:true},
{student:'Lawrence',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'zEy2UbT48eE',desc:'從一頓早餐開始，記錄墨爾本日常的生活步調。',verified:true},
{student:'Eason',topic:'City',title:'RMIT University',id:'N_-KDqwCkM4',desc:'第一次用鏡頭記錄 RMIT 特別的建築設計。',verified:true},
{student:'Eason',topic:'City',title:'The University of Melbourne',id:'YmcVV5JAGA8',desc:'與 Frankie 合作，記錄兩人在校園裡的觀察。',verified:true},
{student:'Eason',topic:'Cooking',title:'Hospitality Training',id:'5rKX6YnLAXY',desc:'抓住實作的重要片段，完成簡潔的影片敘事。',verified:true},
{student:'Eason',topic:'Media',title:'ACMI',id:'erSd6FhoQf4',desc:'與 Frankie 合作，從展覽出發完成的作品。',verified:true},
{student:'Eason',topic:'Vlog',title:'Melbourne Breakfast Vlog 2',id:'XjTIejuVuD4',desc:'與 Frankie 合作的第二支早餐 vlog，記錄墨爾本的日常步調。',verified:true}
];

const teachingVideos=[
{title:'Hosier Lane',id:'pzLdNGH4qwc',desc:'從塗鴉街的歷史與故事說起，帶大家認識這個充滿藝術能量的巷弄。'},
{title:'The University of Melbourne',id:'OcYQRtqDYZM',desc:'介紹墨爾本大學的校園背景與故事，補充學生參訪時沒提到的細節。'},
{title:'Flinders Street Station',id:'GSuttIwNFKY',desc:'從車站的歷史說起，帶大家認識這座墨爾本市區的地標建築。'},
{title:'National Gallery of Victoria',id:'q94BhAclOb4',desc:'介紹 NGV 美術館的館藏與故事，補充學生參訪時沒提到的細節。'},
{title:'RMIT',id:'99RFujwmd0k',desc:'介紹 RMIT 校園的背景與設計故事，補充學生參訪時沒提到的細節。'}
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
