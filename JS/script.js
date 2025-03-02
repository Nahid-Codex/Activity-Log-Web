document.getElementById("toBlog").addEventListener("click", function () {
    window.location.href = "blog.html";
  });
// Date Related
const today = new Date();
const day = today.toLocaleString("en-US", { weekday: "short" });
const date = today.toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

window.onload = function () {
  document.getElementById("showDate").innerText = date;
  document.getElementById("date").innerText = `${day} ,`;
};

// Theme Related
document.getElementById("themeChange").addEventListener("click", function () {
    function getRandomLightColor() {
      const r = Math.floor(100 + Math.random() * 56);
      const g = Math.floor(200 + Math.random() * 56);
      const b = Math.floor(200 + Math.random() * 56);
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    document.body.style.backgroundColor = getRandomLightColor();
  });


// Button Related

let allBtn = document.querySelectorAll(".btn");

for (let i = 0; i < allBtn.length; i++) {
  const completeBtn = allBtn[i];
  completeBtn.addEventListener("click", function (event) {
    let parent = event.target.parentElement.parentElement.parentElement;
    console.log(parent);

    let title = parent.querySelector("h2").innerText;
    let company = parent.querySelector("span").innerText;
    let task = parent.querySelector("p").innerText;
    let time = getCurrentTime();

    // Task (-)
    let taskCount = document.getElementById("taskCount").innerText;
    taskCount = parseInt(taskCount);
    taskCount -= 1;
    document.getElementById("taskCount").innerText = taskCount;

    //Task (+)
    let completedTask = document.getElementById("completedTask").innerText;
    completedTask = parseInt(completedTask);
    completedTask += 1;
    document.getElementById("completedTask").innerText = completedTask;

    alert(`Board Updated Successfully`);

    if (taskCount == 0) {
      alert(`Congrats!!! You Have Completed All The Current Task.`);
    }
    //Button related
    completeBtn.setAttribute("disabled", "true");
    completeBtn.style.backgroundColor = "rgb(211, 211, 211)";

    let history = `
        <div class="bg-[#F4F7FF] p-2 m-2 mt-4 px-3 rounded-md flex flex-col gap-3">
        <p class="text-[14px]">You have Completed The task ${title} at ${time}  </p>
        </div>
        `;

    document.getElementById("noHistory").style.display = "none";
    document.getElementById("removedHistory").style.display = "none";

    document
      .getElementById("history")
      .insertAdjacentHTML("afterbegin", history);
  });
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

// History

document.getElementById("clearHistory").addEventListener("click", function () {
    document.getElementById("removedHistory").style.display = "block";
    document.getElementById("noHistory").style.display = "none";
    document.getElementById("history").innerHTML = "";
  });
