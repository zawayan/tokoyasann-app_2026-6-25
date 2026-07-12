    let isCutting = false;

    let cutStartTime = null;
    let elapsedTimer = null;

    function updateElapsedTime() {
        const elapsedTime =
            document.getElementById("elapsedTime");

            if (!isCutting || cutStartTime === null) {
                elapsedTime.textContent =
                    "カット経過時間：00分00秒";
                return;
            }
            const elapsedSeconds = Math.floor(
                (Date.now() - cutStartTime) /1000
            );

            const minutes = Math.floor(elapsedSeconds / 60);
            const seconds = elapsedSeconds % 60;

            elapsedTime.textContent =
                "カット経過時間：" +
                String(minutes).padStart(2, "0") + "分" +
                String(seconds).padStart(2, "0") + "秒";
    }

function calculateWaitTime() {
    const count = Number(document.getElementById("waitingCount").value);
    const status = document.getElementById("status");
    const waitTime = count * 90;
    const resultTime = document.getElementById("resultTime");

    if (isCutting && count === 0) {

    resultTime.textContent = "0分";
    resultTime.style.color = "green";

    status.textContent = "✂️ 現在カット中です";
    status.style.color = "green";

} else if (!isCutting && count === 0) {

    resultTime.textContent = "0分";
    resultTime.style.color = "black";

    status.textContent = "⚫️ 現在、待ち時間なし";
    status.style.color = "black";

    } else {
    resultTime.textContent = "~" + waitTime + "分";

    if(count <= 2) {
        resultTime.style.color = "blue";
        status.textContent = "🔵　空いています";
        status.style.color = "blue";
    } else if (count <= 4) {
        resultTime.style.color = "orange";
        status.textContent = "🟠　少しお待ちいただきます";
        status.style.color = "orange";
    } else {
        resultTime.style.color = "red";
        status.textContent = "🔴　とても混雑しています🙇";
        status.style.color = "red";
    }
    }
}
    
function updateTime() {
    const now = new Date();

    const time =
        now.getFullYear() + "/" +
        String(now.getMonth() + 1 ).padStart(2, "0") + "/" +
        String(now.getDate()).padStart(2, "0") + " " +
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0");
        
    document.getElementById("update").textContent =
        "最終更新日時：" + time;

}

function increaseCount() {
    const input = document.getElementById("waitingCount");
    if (!isCutting) {
        isCutting = true;
        cutStartTime = Date.now();
        input.value = 0;
    } else {
        input.value = Number(input.value) + 1;
    }  
    calculateWaitTime();
    updateTime();
}

function decreaseCount() {
    const input = document.getElementById("waitingCount");
    if (Number(input.value) > 0) {
        input.value = Number(input.value) - 1;
    }
    calculateWaitTime();
    updateTime();
    updateElapsedTime();
    }

    function finishCut() {
        const input =
            document.getElementById("waitingCount");

        if (!isCutting) {
            return;
        }
    
        if (Number(input.value) > 0) {
            input.value = Number(input.value) - 1;


            cutStartTime = Date.now();
        } else {
            isCutting = false;
            cutStartTime = null;
        }

        calculateWaitTime();
        updateTime();
        updateElapsedTime();
    }


elapsedTimer = setInterval(updateElapsedTime, 1000);
