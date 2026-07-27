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
{student:'Amy',topic:'City',title:'State Library Victoria',id:'izSIXZX0-oU',desc:'從宏偉的閱讀空間出發，記錄圖書館安靜而有秩序的氛圍。',verified:true},
{student:'Amy',topic:'Media',title:'ACMI',id:'ZeOrZwx5vco',desc:'挑選展覽中吸引自己的畫面，整理成一段個人的媒體觀察。',verified:true},
{student:'Amy',topic:'Art',title:'NGV & Hosier Lane',id:'zO8M4di5G5I',desc:'把美術館與街頭塗鴉放在一起，呈現兩種不同的藝術空間。',verified:true},
{student:'Amy',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'WWfKFiqpOpk',desc:'從早餐的選擇與用餐畫面，留下旅途中簡單真實的生活片段。',verified:true},
{student:'Sasa',topic:'Campus',title:'The University of Melbourne',id:'ECOtsDBiSx4',desc:'沿著校園移動與觀察，記錄第一次走進墨爾本大學的印象。',verified:true},
{student:'Sasa',topic:'Cooking',title:'Hospitality Training',id:'VmRDcmC7VWc',desc:'從共同實作的過程中，挑出最能呈現現場氣氛的片段。',verified:true},
{student:'Sasa',topic:'City',title:'State Library Victoria',id:'L6JKYIZ7q6I',desc:'以自己的視角帶大家走進圖書館，感受建築與閱讀空間的特色。',verified:true},
{student:'Sasa',topic:'Media',title:'ACMI',id:'OEn79kznF7U',desc:'從動畫與互動展覽出發，記錄自己對影像創作的發現。',verified:true},
{student:'Sasa',topic:'City',title:'Queen Victoria Market',id:'BiCWoLvd7yU',desc:'在攤位、人群與商品之間移動，捕捉市場最有生活感的瞬間。',verified:true},
{student:'Sasa',topic:'Art',title:'NGV & Hosier Lane',id:'Y-7WuzJ_6XY',desc:'從室內美術館走到戶外巷弄，觀察藝術如何出現在不同場域。',verified:true},
{student:'Sasa',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'hrXj_pIzN7s',desc:'用早餐開啟一天，記錄墨爾本早晨的節奏與旅行日常。',verified:true},
{student:'Eric',topic:'Campus',title:'RMIT University',id:'HN45B6gle14',desc:'聚焦校園建築的造型與細節，呈現 RMIT 鮮明的設計特色。',verified:true},
{student:'Eric',topic:'Campus',title:'The University of Melbourne',id:'ytDU1QmET0w',desc:'從校園建築與環境著手，整理自己對大學空間的第一印象。',verified:true},
{student:'Eric',topic:'Cooking',title:'Hospitality Training',id:'m-__-qDSX6U',desc:'把備料、操作與完成料理的過程，剪輯成清楚流暢的短片。',verified:true},
{student:'Eric',topic:'City',title:'State Library Victoria',id:'PQ-xrloySx0',desc:'結合圖書館的歷史與現場畫面，完成一段自己的英文介紹。',verified:true},
{student:'Eric',topic:'City',title:'Queen Victoria Market',id:'-CYxembBuyQ',desc:'透過攤位與街景的變化，呈現傳統市場熱鬧而多元的一面。',verified:true},
{student:'Eric',topic:'Vlog',title:'Weekend in Melbourne Vlog',id:'L1C2ZzJEt1Q',desc:'跟著週末行程移動，用鏡頭記錄自由探索城市的一天。',verified:true},
{student:'Louis',topic:'Campus',title:'The University of Melbourne',id:'hFIo6WTkM2A',desc:'帶著鏡頭走進校園，留下建築、步道與學生生活的片段。',verified:true},
{student:'Louis',topic:'Cooking',title:'Hospitality Training',id:'JLW8rfcw7_I',desc:'記錄料理實作中的分工、操作順序與彼此合作的現場節奏。',verified:true},
{student:'Louis',topic:'City',title:'State Library Victoria',id:'PbfrhEOU8NY',desc:'從入口走進主要閱讀空間，捕捉圖書館令人印象深刻的場景。',verified:true},
{student:'Louis',topic:'City',title:'Queen Victoria Market',id:'7_0sq_BjihI',desc:'穿梭不同市場區域，記錄商品、人群與攤販交織的日常風景。',verified:true},
{student:'Louis',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'PT5n0S2PMUo',desc:'用輕鬆的方式記錄早餐時光，呈現旅程中的生活感。',verified:true},
{student:'Frankie',topic:'Campus',title:'RMIT University',id:'7lqEnLICljs',desc:'尋找校園裡最有設計感的角落，用影像呈現建築的個性。',verified:true},
{student:'Frankie',topic:'Campus',title:'The University of Melbourne',id:'YmcVV5JAGA8',desc:'與 Eason 一起取景與整理素材，完成兩人共同觀察的校園紀錄。',verified:true},
{student:'Frankie',topic:'Cooking',title:'Hospitality Training',id:'AO1iiXFGmh4',desc:'從實際操作中選出關鍵畫面，讓料理流程更容易被看懂。',verified:true},
{student:'Frankie',topic:'City',title:'State Library Victoria',id:'HsYwLh6qD9Q',desc:'透過不同角度的取景，呈現圖書館空間的層次與規模。',verified:true},
{student:'Frankie',topic:'Media',title:'ACMI',id:'erSd6FhoQf4',desc:'與 Eason 合作觀察展覽，將兩人的素材整合成一支作品。',verified:true},
{student:'Frankie',topic:'Art',title:'NGV & Hosier Lane',id:'pH8g7z2NIgY',desc:'在經典展館與街頭創作之間切換，記錄墨爾本多元的藝術面貌。',verified:true},
{student:'Frankie',topic:'Vlog',title:'Weekend in Melbourne Vlog',id:'3cvQu3pXyuU',desc:'從個人視角整理週末行程，留下城市探索中的重要片段。',verified:true},
{student:'Frankie',topic:'Vlog',title:'Melbourne Breakfast Vlog 2',id:'XjTIejuVuD4',desc:'與 Eason 共同完成第二支早餐紀錄，呈現兩人合作拍攝的生活片段。',verified:true},
{student:'Phoebe',topic:'Campus',title:'The University of Melbourne',id:'jLXukWq-ksw',desc:'從校園裡最吸引自己的景色出發，記錄第一次參訪的感受。',verified:true},
{student:'Phoebe',topic:'City',title:'State Library Victoria',id:'-eCeqR42WJ4',desc:'用鏡頭慢慢探索館內空間，留下對圖書館建築的觀察。',verified:true},
{student:'Phoebe',topic:'Media',title:'ACMI',id:'Tqnz8Op37Qw',desc:'走進互動展覽，觀察影像、科技與故事如何結合在一起。',verified:true},
{student:'Phoebe',topic:'Art',title:'NGV',id:'_20ZGJ_vMuI',desc:'挑選自己感興趣的展品與空間，整理成一段美術館觀察。',verified:true},
{student:'Phoebe',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'FOjnEEbtlqo',desc:'以早餐作為旅程切片，記錄當天的食物與生活氣氛。',verified:true},
{student:'Lawrence',topic:'Campus',title:'The University of Melbourne',id:'4d5AKFSmSOE',desc:'用簡單直接的畫面介紹校園，留下自己眼中的墨爾本大學。',verified:true},
{student:'Lawrence',topic:'City',title:'State Library Victoria',id:'BPEwBMZGAxg',desc:'從建築外觀到館內空間，記錄圖書館最具代表性的畫面。',verified:true},
{student:'Lawrence',topic:'Media',title:'ACMI',id:'C725uPKdz4A',desc:'從有趣的互動內容出發，記錄自己在展覽裡看到的新事物。',verified:true},
{student:'Lawrence',topic:'Vlog',title:'Melbourne Breakfast Vlog',id:'zEy2UbT48eE',desc:'用早餐和街景組成短篇日記，留下墨爾本早晨的印象。',verified:true},
{student:'Eason',topic:'Campus',title:'RMIT University',id:'N_-KDqwCkM4',desc:'第一次嘗試拍攝校園建築，記錄 RMIT 大膽又特別的設計。',verified:true},
{student:'Eason',topic:'Campus',title:'The University of Melbourne',id:'YmcVV5JAGA8',desc:'與 Frankie 分工拍攝，將兩人在校園中的觀察整理成作品。',verified:true},
{student:'Eason',topic:'Cooking',title:'Hospitality Training',id:'5rKX6YnLAXY',desc:'抓住料理過程中的重要步驟，用簡潔節奏完成實作紀錄。',verified:true},
{student:'Eason',topic:'Media',title:'ACMI',id:'erSd6FhoQf4',desc:'與 Frankie 分享素材與想法，合作完成一支展覽觀察影片。',verified:true},
{student:'Eason',topic:'Vlog',title:'Melbourne Breakfast Vlog 2',id:'XjTIejuVuD4',desc:'與 Frankie 一起拍攝早餐日常，完成第二次合作的生活紀錄。',verified:true}
];

const teachingVideos=[
{title:'Flinders Street Station',id:'GSuttIwNFKY',desc:'從建築特色與歷史故事出發，認識這座陪伴墨爾本人成長的重要交通地標。'},
{title:'Federation Square',id:'V4K0Rs8EAT8',desc:'介紹 介紹 Federation Square 從不被市民接受，到逐漸成為墨爾本城市客廳的轉變故事。'}
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
