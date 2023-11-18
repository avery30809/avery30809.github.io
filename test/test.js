const dateInput = document.getElementById("dateBox");
const testBox = document.getElementById("test");
var now = new Date();

now.setDate(now.getDate() + 30);
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    btn.disabled = true;
    testBox.classList.add("hidden");
    localStorage.clear();
    setTimeout(()=>{
        btn.disabled = false; 
        testBox.classList.remove("hidden");
        testBox.innerHTML = document.getElementById("time1").value;
        localStorage.setItem("test1", testBox.innerHTML);
    },1000);
});
const dropdownInput = document.querySelector(".time-container");
const timeList = document.querySelector(".time-list");
dropdownInput.addEventListener("click", (event)=>{
    event.stopPropagation();
    timeList.style.display = timeList.style.display==='block'?'none':'block';
})
document.addEventListener("click", (event)=>{
    event.stopPropagation();
    timeList.style.display = 'none';
})
const timelistItems = document.querySelectorAll(".time-list li");
timelistItems.forEach((item)=>{
    item.addEventListener("click", ()=>{
        testBox.innerHTML = item.textContent;
        document.getElementById("time2").value = item.textContent;
    })
})
