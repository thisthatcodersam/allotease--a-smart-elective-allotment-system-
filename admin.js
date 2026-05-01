/* ---------- TOAST ---------- */
function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.style.opacity = 1;

    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000);
}

/* ---------- SWAP BUTTON ---------- */
document.getElementById("swapBtn").addEventListener("click", () => {
    const from = document.getElementById("fromElective").value;
    const to = document.getElementById("toElective").value;

    if (!from || !to) {
        showToast("Select both electives!");
        return;
    }

    showToast(`Swap request sent: ${from} → ${to}`);
});

/* ---------- QUICK SWAP ---------- */
document.getElementById("swapBtnQuick").addEventListener("click", () => {
    showToast("Quick swap initiated!");
});

/* ---------- TABS ---------- */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tabpanel");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.setAttribute("aria-selected", "false"));
        tab.setAttribute("aria-selected", "true");

        panels.forEach(p => p.hidden = true);
        document.querySelector(`[data-panel="${tab.dataset.tab}"]`).hidden = false;
    });
});

/* ---------- AI CGPA SUGGESTIONS ---------- */
const cgpaInput = document.getElementById("cgpa");
const list = document.getElementById("suggestionsList");

const electives = {
    high: ["Advanced AI", "Machine Learning", "Data Science"],
    mid: ["Robotics", "UI/UX Design", "Web Development"],
    low: ["Sports Analytics", "Digital Marketing", "Photography"]
};

cgpaInput.addEventListener("input", () => {
    const cgpa = parseFloat(cgpaInput.value);
    list.innerHTML = "";

    let picks;

    if (cgpa >= 8.5) picks = electives.high;
    else if (cgpa >= 6.5) picks = electives.mid;
    else picks = electives.low;

    picks.forEach(e => {
        const li = document.createElement("li");
        li.innerHTML = `🎯 ${e}`;
        list.appendChild(li);
    });
});

/* ---------- LOGIN MODAL ---------- */
const modal = document.getElementById("loginModal");

document.getElementById("openLogin").onclick = () => {
    modal.classList.remove("hidden");
};

document.getElementById("closeLogin").onclick = () => {
    modal.classList.add("hidden");
};

document.getElementById("loginSubmit").onclick = () => {
    const user = document.getElementById("loginUsername").value;

    if (!user) {
        showToast("Enter username");
        return;
    }

    modal.classList.add("hidden");
    showToast(`Welcome ${user}`);
};