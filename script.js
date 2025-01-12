let selectedTicker = 'Ticker';
let selectedTime = 'Time';
let selectedBlock = 'Block';
let selectedB2tm = 'Time';
let selectedB2blk = 'Block';
let selectedtodo_Time = 'Time';//todo
let selectedtodo_Block = 'Block';//todo
let selectedtodo_B2tm = 'Time';//todo
let selectedtodo_B2blk = 'Block';//todo
let selectedTfc = 'Time';
let selectedDecisiveTime = 'Time';
let selectedDecisiveBlock = 'Block';
let selectedC1tm = 'Time';
let selectedC1nc = 'c';
let selectedC2tm = 'Time';
let selectedC2nc = 'c';
let selectedC3tm = 'Time';
let selectedC3nc = 'c';
let selectedBroker = 'Broker';

// スプレッドデータの定義
const spreadData = {
    'BTC_XM': 9000,
    'ETH_XM': 700,
    'BTC_TITAN': 7500,
    'ETH_TITAN': 900,
    'SOL_XM': 200,
    'SOL_TITAN': 150,
    'JP225_XM': 9,
    'JP225_TITAN': 100,
    'US30_XM': 650,
    'US30_TITAN': 80,
    'XAUUSD_XM': 60,
    'XAUUSD_TITAN': 30,
};

function filterTickers() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const tickerSelect = document.getElementById('ticker');
    const options = Array.from(tickerSelect.options);  // オプションを配列に変換

    // 検索結果に一致するオプションと一致しないオプションを分ける
    const matchedOptions = options.filter(option => option.text.toLowerCase().includes(searchValue));
    const unmatchedOptions = options.filter(option => !option.text.toLowerCase().includes(searchValue));

    // 一致するオプションを最初に、次に一致しないオプションを配置
    const sortedOptions = [...matchedOptions, ...unmatchedOptions];

    // <select>内のオプションを再配置
    tickerSelect.innerHTML = '';  // 現在のオプションをクリア
    sortedOptions.forEach(option => tickerSelect.appendChild(option));  // 新しい順番で追加
}

// `input` イベントで即座にフィルタリング
document.getElementById('search').addEventListener('input', filterTickers);


function updateTicker(value) {
    selectedTicker = value;
}

function updateTime(value) {
    selectedTime = value;
}

function updateBlock(value) {
    selectedBlock = value;
}

function updateB2tm(value) {
    selectedB2tm = value;
}

function updateB2blk(value) {
    selectedB2blk = value;
}

//todo
function updatetodo_Time(value) {
    selectedtodo_Time = value;
}

function updatetodo_Block(value) {
    selectedtodo_Block = value;
}

function updatetodo_B2tm(value) {
    selectedtodo_B2tm = value;
}

function updatetodo_B2blk(value) {
    selectedtodo_B2blk = value;
}

/*
function updateTfc(value) {
    selectedTfc = value;
}

function updateDecisiveTime(value) {
    selectedDecisiveTime = value;
}

function updateDecisiveBlock(value) {
    selectedDecisiveBlock = value;
}*/

function updateC1tm(value) {
    selectedC1tm = value;
}

function updateC1nc(value) {
    selectedC1nc = value;
}
/*
function updateC2tm(value) {
    selectedC2tm = value;
}

function updateC2nc(value) {
    selectedC2nc = value;
}

function updateC3tm(value) {
    selectedC3tm = value;
}

function updateC3nc(value) {
    selectedC3nc = value;
}*/

function updateBroker(value) {
    selectedBroker = value;
}

function executeSelection() {
    const resultDiv = document.getElementById('result');
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";

    // デフォルト値を定義
    const defaultValues = {
        ticker: 'Ticker',
        time: 'Time',
        block: 'Block',
        b2tm: 'Time',
        b2blk: 'Block',
        todo_time: 'Time', // todo
        todo_block: 'Block', // todo
        todo_b2tm: 'Time', // todo
        todo_b2blk: 'Block', // todo
        tfc: 'Time',
        decisiveTime: 'Time',
        decisiveBlock: 'Block',
        c1tm: 'Time',
        c1nc: 'c',
        c2tm: 'Time',
        c2nc: 'c',
        c3tm: 'Time',
        c3nc: 'c',
        broker: 'Broker'
    };

    // 結果表示のための情報を構築
    const resultInfo = `
        ${selectedTime !== defaultValues.time ? selectedTime : ''} ${selectedBlock !== defaultValues.block ? selectedBlock : ''} 
        ${selectedB2tm !== defaultValues.b2tm ? selectedB2tm : ''} ${selectedB2blk !== defaultValues.b2blk ? selectedB2blk : ''} <br>
        
        ${selectedtodo_Time !== defaultValues.todo_time ? selectedtodo_Time : ''} ${selectedtodo_Block !== defaultValues.todo_block ? selectedtodo_Block : ''} 
        ${selectedtodo_B2tm !== defaultValues.todo_b2tm ? selectedtodo_B2tm : ''} ${selectedtodo_B2blk !== defaultValues.todo_b2blk ? selectedtodo_B2blk : ''} <br>
       
        ...${selectedC1tm !== defaultValues.c1tm ? selectedC1tm : ''} ${selectedC1nc !== defaultValues.c1nc ? selectedC1nc : ''} <br>
        
        ${selectedTicker !== defaultValues.ticker ? selectedTicker : ''}: 
        ${selectedBroker !== defaultValues.broker ? selectedBroker : ''} Spread: ${spread}
    `;

    // 空白を削除して表示
    resultDiv.innerHTML = resultInfo.replace(/\s+/g, ' ').trim();
}

//倉庫　
/*　TFC: ${selectedTfc !== defaultValues.tfc ? selectedTfc : ''} / <br>　
 決定打: ${selectedDecisiveTime !== defaultValues.decisiveTime ? selectedDecisiveTime : ''} ${selectedDecisiveBlock !== defaultValues.decisiveBlock ? selectedDecisiveBlock : ''} /<br>
        ${selectedC2tm !== defaultValues.c2tm ? selectedC2tm : ''} ${selectedC2nc !== defaultValues.c2nc ? selectedC2nc : ''} / <br>
        ${selectedC3tm !== defaultValues.c3tm ? selectedC3tm : ''} ${selectedC3nc !== defaultValues.c3nc ? selectedC3nc : ''}...<br> 
        ...<br>

*/



function copyInfo() {
    const resultDiv = document.getElementById('result');
    const resultText = resultDiv.innerText;

    // Ticker と Broker の情報を除外
    const filteredText = resultText
        .replace(/.*?Spread:.*$/, '') // Spread 以降の行を削除
        .replace(/(?:\s*:\s*|\s*Spread:\s*)/g, '') // 不要な空白を削除
        .trim(); // 空白を削除

    navigator.clipboard.writeText(filteredText)
        .then(() => {
            showNotification('Copied result to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}




function copySpread() {
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";
    // Ticker と Broker を含める
    navigator.clipboard.writeText(`Ticker: ${selectedTicker}, Broker: ${selectedBroker}, Spread: ${spread}`)
        .then(() => {
            showNotification(`Copied: Ticker: ${selectedTicker}, Broker: ${selectedBroker}, Spread: ${spread}`);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}
