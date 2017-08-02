console.log(customers);

// Main Divs ///////
let picRowOne = document.getElementById('pic_row_one');
let picRowTwo = document.getElementById('pic_row_two');
let picRowThr = document.getElementById('pic_row_thr');
let infoRowOne = document.getElementById('info_row_one');
let infoRowTwo = document.getElementById('info_row_two');
let infoRowThr = document.getElementById('info_row_thr');

// Picture Loop Time!!!! ///////
function makePic(){
  for (let i = 0; i < customers.results.length; i++){
    if (i > 7){
      let img = document.createElement('img');
      img.src = customers.results[i].picture.large;
      picRowThr.appendChild(img);
    }
    else if (i > 3){
      let img = document.createElement('img');
      img.src = customers.results[i].picture.large;
      picRowTwo.appendChild(img);
    }
    else {
    let img = document.createElement('img');
    img.src = customers.results[i].picture.large;
    picRowOne.appendChild(img);
  }
}
}
makePic();

// Template Loop Time!!! ///////

function makeInfo(){
for (let i = 0; i < customers.results.length; i++){
  if (i > 7){
  let unit = document.createElement('div');
  let template = `
  <div class = "template">
   <p> ${customers.results[i].name.first} ${customers.results[i].name.last} </p>
   <p> ${customers.results[i].email} </p>
   <p> ${customers.results[i].location.street} </p>
   <p> ${customers.results[i].location.city},     ${customers.results[i].location.state} </p>
   <p> ${customers.results[i].phone} </p>
   <p> ${customers.results[i].id.value} </p>
  </div>`;
  unit.innerHTML = template;
  infoRowThr.appendChild(unit);
} else if (i > 3){
  let unit = document.createElement('div');
  let template = `
  <div class = "template">
   <p> ${customers.results[i].name.first} ${customers.results[i].name.last} </p>
   <p> ${customers.results[i].email} </p>
   <p> ${customers.results[i].location.street} </p>
   <p> ${customers.results[i].location.city},     ${customers.results[i].location.state} </p>
   <p> ${customers.results[i].phone} </p>
   <p> ${customers.results[i].id.value} </p>
  </div>`;
  unit.innerHTML = template;
  infoRowTwo.appendChild(unit);
} else{
  let unit = document.createElement('div');
  let template = `
  <div class = "template">
   <p> ${customers.results[i].name.first} ${customers.results[i].name.last} </p>
   <p> ${customers.results[i].email} </p>
   <p> ${customers.results[i].location.street} </p>
   <p> ${customers.results[i].location.city},     ${customers.results[i].location.state} </p>
   <p> ${customers.results[i].phone} </p>
   <p> ${customers.results[i].id.value} </p>
  </div>`;
  unit.innerHTML = template;
  infoRowOne.appendChild(unit);
}
}
}
makeInfo();
