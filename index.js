 window.addEventListener("dragover", (e) => {
   e.preventDefault();
   document.body.classList.add("dnd");
   e.dataTransfer.dropEffect = "copy";
});

window.addEventListener("drop", (e) => {
  e.preventDefault();
  
  document.body.classList.remove("dnd");
  
  htmlDirContent.getFilesFromDragEvent(e, true)
    .then((files) => {
      const list = document.getElementById("file-list");
   
      list.innerHTML = "";
    
      files.forEach((f)=>{
        const li = document.createElement("li");
        li.textContent = `${f.name} (${f.size})`;
        list.appendChild(li);
      });
  });
});

window.addEventListener("dragleave", () => {
  document.body.classList.remove("dnd");
});

window.addEventListener("dragend", (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.body.classList.remove("dnd");
});