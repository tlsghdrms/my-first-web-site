var state = false;
var play = false;
var app = document.getElementById("topText");


      var typewriter = new Typewriter(app, {
        loop: true,
      });


      typewriter
        .typeString("환영합니다!")
        .pauseFor(1300)
        .deleteAll()
        .typeString("'나이', '이름', '선호하는 언어' 에 대해서 알려드리겠습니다.")
        .pauseFor(1300)
        .deleteAll()
        .typeString("'불켜줘', '불꺼줘', '게임'의 명령어가 있습니다.")
        .pauseFor(1300)
        .deleteAll()
        .start();


function check_text() {
    var value = document.getElementById("console").value;
    var talk = document.getElementById("talk");
    var background = document.getElementsByClassName("chatBotPage")[0];


    if (value == "alert") {
        alert("경고창이 떴습니다.");
    }
    else if (value == "나이") {
        talk.innerHTML = "24살입니돠!!";
    }
    else if (value == "이름") {
        talk.innerHTML = "신홍근이라고합니다.";
    }
    else if (value == "선호하는 언어") {
        talk.innerHTML = "JAVA에 관심이 많은 편입니다.";
    }
    else if (value == "불꺼줘") {
        if (state == false) {
            talk.innerHTML = "불이 꺼졌습니다.";
            background.style.backgroundImage = "url('dark_night.jpg')";
            state = true;
        } else {
            talk.innerHTML = "불이 꺼져있네요! 저기 별들을 봐요!";
            background.style.backgroundImage = "url('star_night.jpg')";
        }
    } else if (value == "불켜줘") {
        if (state == true) {
            talk.innerHTML = "불이 켜졌습니다.";
            background.style.backgroundImage = "url('bright_day.jpg')";
            state = false;
        } else {
            talk.innerHTML = "이미 충분히 밝은 걸요?";
        }
    } else if (value == "게임") {
        play = true;
        talk.innerHTML = "가위바위보를 시이이작!!";
        setTimeout(() => talk.innerHTML = "가위~바위~보~!", 1000);


    }
    else {
        if (play == true) {
            game(value, talk);
            return;
        }
        talk.innerHTML = "제가 이해하지 못했어요. 다시 말씀해주시겠어요?"
    }
}

function game(value, talk) {
    if (play == true) {
        const rand = Math.floor(Math.random() * 3) + 1;
        
        switch (value) {
            case "가위":
                if (rand == 1) { talk.innerHTML = "저는 가위에요. 아쉽네용"; }
                else if (rand == 2) { talk.innerHTML = "저는 바위에요. 이겼네요 들어가시고~"; }
                else { talk.innerHTML = "저는 보에요. 주먹낼걸.. "; }
                break;
            
            case "바위":
                if (rand == 1) { talk.innerHTML = "저는 가위에요. 보 낼걸..."; }
                else if (rand == 2) { talk.innerHTML = "저는 바위에요.아쉽네용"; }
                else { talk.innerHTML = "저는 보에요. 이겼네요 들어가시고~"; }
                break;
            
            case "보":
                if (rand == 1) { talk.innerHTML = "저는 가위에요. 이겼네요 들어가시고~"; }
                else if (rand == 2) { talk.innerHTML = "저는 바위에요. 가위낼걸..."; }
                else { talk.innerHTML = "저는 보에요. 아쉽네용"; }
                break;
            
            default:
                talk.innerHTML = "게임을 종료할게요"
                play = false;
                break;
        }
    }
}



document.getElementById("btnSend").addEventListener('click', check_text);