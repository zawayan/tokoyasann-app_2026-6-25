function calculateWaitTime() {
    const count = Number(document.getElementById("waitingCount").value);
    const status = document.getElementById("status");
    const waitTime = count * 90;
    const resultLabel = document.getElementById("resultLabel");
    const resultTime = document.getElementById("resultTime");

    if (count === 0) {
        resultTime.textContent = "0分";
        status.textContent = "⚫️ 現在、待ち時間なし";
        resultTime.style.color = "black";
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
function updateTime() {
    const now = new Date();

    const time =
        now.getFullYear() + "/" +
        String(now.getMonth() + 1 ).padStart(2, "0") + "/" +
        String(now.getDate()).padStart(2, "0") + " " +
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + : +
        String(now.getMinutes()).padStart(2,0)

    document.getElementById("update").textContent =
        "最終更新日時:" + time;

}
}
function increaseCount() {
    const input = document.getElementById("waitingCount");
    input.value = Number(input.value) + 1;

    calculateWaitTime();
}

function decreaseCount() {
    const input = document.getElementById("waitingCount");
    if (Number(input.value) > 0) {
        input.value = Number(input.value) - 1;
    }

    calculateWaitTime();
    updateTime();
}


   










