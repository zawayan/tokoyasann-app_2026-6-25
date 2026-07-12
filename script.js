   function resetApp() {

    if (!confirm("本当にリセットしますか？")) {
        return;
    }

    document.getElementById("waitingCount").value = 0;

    isCutting = false;
    cutStartTime = null;

    updateElapsedTime();
    calculateWaitTime();

    document.getElementById("update").textContent =
        "最終更新日時：ーーー";
}
   
   
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
    const count = Number(
        document.getElementById("waitingCount").value
    );

    const status = document.getElementById("status");
    const resultTime = document.getElementById("resultTime");
    const waitTime = count * 90;

    // カットしていない状態
    if (!isCutting) {
        resultTime.textContent = "0分";
        resultTime.style.color = "black";

        status.textContent = "⚫️ 現在、待ち時間なし";
        status.style.color = "black";

    // カット中で待ち人数が0人
    } else if (count === 0) {
        resultTime.textContent = "0分";
        resultTime.style.color = "green";

        status.textContent =
            "✂️ 現在カット中です　👤待ち人数：0人";
        status.style.color = "green";

    // カット中で待ち人数が1〜2人
    } else if (count <= 2) {
        resultTime.textContent = "約" + waitTime + "分";
        resultTime.style.color = "blue";

        status.textContent =
            "✂️ 現在カット中です　🔵👤待ち人数：" +
            count + "人";
        status.style.color = "blue";

    // カット中で待ち人数が3〜4人
    } else if (count <= 4) {
        resultTime.textContent = "約" + waitTime + "分";
        resultTime.style.color = "orange";

        status.textContent =
            "✂️ 現在カット中です　🟠👤待ち人数：" +
            count + "人";
        status.style.color = "orange";

    // カット中で待ち人数が5人以上
    } else {
        resultTime.textContent = "約" + waitTime + "分";
        resultTime.style.color = "red";

        status.textContent =
            "✂️ 現在カット中です　🔴👤待ち人数：" +
            count + "人";
        status.style.color = "red";
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
    updateElapsedTime();
}

/*
function decreaseCount() {
    const input = document.getElementById("waitingCount");
    if (Number(input.value) > 0) {
        input.value = Number(input.value) - 1;
    }
    calculateWaitTime();
    updateTime();
    updateElapsedTime();
    }
*/

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
        updateElapsedTime();
        calculateWaitTime();
        updateTime();
    }
        updateElapsedTime();
        elapsedTimer = setInterval(updateElapsedTime, 1000);

function resetApp() {

    // 待ち人数を0人にする
    document.getElementById("waitingCount").value = 0;

    // カット状態をリセット
    isCutting = false;
    cutStartTime = null;

    // 経過時間を初期化
    updateElapsedTime();

    // 待ち時間表示を初期化
    calculateWaitTime();

    // 更新日時を初期状態に戻す
    document.getElementById("update").textContent =
        "最終更新日時：ーーー";

}

localStorage.removeItem("waitingCount");
localStorage.removeItem("isCutting");
localStorage.removeItem("cutStartTime");

