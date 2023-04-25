const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleText = document.createElement('h1');
  const tempSpan = document.createElement('span');

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleText);
  headerDiv.appendChild(tempSpan);

  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  dateSpan.textContent = `${date}`;
  titleText.textContent = `${title}`;
  tempSpan.classList.add('temp');
  tempSpan.textContent = `${temp}`;

  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return headerDiv;
}
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const headerAppender = (selector) => {
  const headerSelector = document.querySelector(selector);
  const headerRun = Header('Software Engineering Today', `${month} - ${day} - ${year}`, '74 Degrees')
  headerSelector.appendChild(headerRun);

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}
export { Header, headerAppender }
