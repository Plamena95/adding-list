//add subject
window.addEventListener("load", solve);
function solve() {
  let number = Array.from(document.querySelectorAll(`.numberic`));
  let sum = 0;
  for (i = 0; i < number.length; i++) {
    sum++;
    number[i].textContent = sum;
  }
}
$(document).ready(function () {
  $(`.button p`).hide();
  $(`.add-item button`).click(() => {
    let subject = $(`.subjects`);
    let product = $(`ul:first`);
    let cloned = product.clone(true).appendTo(subject);
    solve();
    cloned.find(`input`).val(``);
    cloned.find(`.subject-info p`).text(`Subject`);
    deleteRow();
  });
});

$(`.subject-info input`).keyup(function () {
  //add subjectName
  $(".subject-info").each(function () {
    solve();
    let cloned = $(this).find("input").val();
    $(this).find("p").text(`Subject: ${cloned}`);
  });
});

//hoverEffect

$(`.button button`).mouseover((e) => {
  $(`.button button`).each(function () {
      let target=$(e.target).next(`p`)
        target.show().animate({
            target
        });
      
  });
});
$(`.button button`).mouseout((e) => {
  $(`.button button`).each(function () {
    $(e.target).addClass(`animate__fadeInUp`).next(`p`).hide();
  });
});
// remove selected li
function deleteRow() {
  document.querySelectorAll(`#redButton`).forEach((btn) =>
    btn.addEventListener(`click`, (e) => {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
      solve();
    })
  );
}
deleteRow();

// remove empty row
document
  .querySelector(`.remove-item button`)
  .addEventListener("click", onClick);
function onClick() {
  document.querySelectorAll(`input`).forEach((p) => {
    if (p.value == "" || p.value == " ") {
      p.parentElement.parentElement.parentElement.parentElement.remove();
      solve();
    }
  });
}

//print data
document.querySelector(`.print button`).addEventListener("click", reduce);
function reduce() {
  const printReview = document.createElement(`section`);
  printReview.classList.add(`result`);
  printReview.innerHTML = `
  <div class="col-3 px-5">#</div>
  <div>Subject</div>
   `;
  let sum = 0;
  const body = document.querySelector(`.hidden-section`);
  body.appendChild(printReview);
  document.querySelectorAll(`input`).forEach((el) => {
    let text = el.value
    if (text === "" || text === " ") {
     return;
    }else{
        const printContent = document.createElement(`section`);
        printContent.classList.add(`result-content`);
        sum++;
        printContent.innerHTML = `
          <div class="result-content-number col-3 px-5">${sum}</div>
          <div>${text}</div>
           `;
        body.appendChild(printContent);
    }
  });
  $(`.subjects`).hide();
  $(`header`).hide();
  $(`.actions`).hide();
}
