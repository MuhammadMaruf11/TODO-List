function getAndUpdate() {
    console.log("updating List....");
    title = document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    if (localStorage.getItem("itemJson") == null) {
      itemJsonArray = [];
      itemJsonArray.push([title, desc]);
      localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArray = localStorage.getItem("itemJson");
      itemJsonArray = JSON.parse(itemJsonArray);
      itemJsonArray.push([title, desc]);
      localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    }
    update();
  }
  function update() {
    if (localStorage.getItem("itemJson") == null) {
      itemJsonArray = [];
      localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArray = localStorage.getItem("itemJson");
      itemJsonArray = JSON.parse(itemJsonArray);
    }

    // Populate the table

    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
      str += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-primary" onClick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;
  }
  const add = document.getElementById("add");
  add.addEventListener("click", getAndUpdate);
  update();
  function deleted(itemIndex) {
    itemJsonArray = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArray);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    update();
  }

  /*  clear with onClick function start */

  //   function clearStorage() {
  //     if (confirm("Do you really wanna clear all TODO List?")) {
  //       console.log("clearing the storage");
  //       localStorage.clear();
  //       update();
  //     }
  //   }

  /*  clear with onClick function end */

  /* clear with click event start */

  const clearStorage = document.getElementById("clear");
  clearStorage.addEventListener("click", () => {
    if (confirm("Do you really want to clear all TODO List?")) {
      localStorage.clear();
      console.log("clearing....");
      update();
    }
  });

  /* clear with click event end */