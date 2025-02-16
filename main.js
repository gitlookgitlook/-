// 1. 랜덤번호 지정
// 2. 유저가 번호를 입력, 그리고 go 라는 버튼 누름
// 3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down!, 랜덤번호 > 유저번호 Up!!
// 4. Reset 버튼을 누르면 게임이 리셋된다.
// 5. 5번의 기회를 다 쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable)
// 유저가 1 ~ 100 범위 밖에 숫자를 입력하면, 알려준다. 기회를 깎지 않음
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않음

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
let randomNumArea = document.getElementById("random-number-area");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  randomNumArea.textContent = `정답: ${computerNum}`;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value.trim();

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해 주세요!";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다시 입력해주세요!";
    return;
  }

  chances--;
  chanceArea.textContent = `남은기회: ${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "UP!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!!";
  } else {
    resultArea.textContent = "정답입니다!!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  // 게임의 논리적 상태 확인
  if (gameOver == true) {
    playButton.disabled = true; // UI 요소 변경
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다!";
  chances = 3;
  chanceArea.textContent = `남은 기회: ${chances}번`;
  gameOver = false;
  playButton.disabled = false;
  history = [];
}

pickRandomNum();
