import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div');
  const headline = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  cardDiv.appendChild(headline);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  authorDiv.appendChild(authorName);

  cardDiv.className = 'card';
  headline.className = 'headline';
  headline.textContent = `${article.headline}`;
  authorDiv.className = 'author';
  imgContainer.className = 'img-container';
  authorImg.src = `${article.authorPhoto}`;
  authorName.textContent = `By ${article.authorName}`;
  
  cardDiv.addEventListener('click', event => {
    console.log(`Headline: ${article.headline}`);
  })
  return cardDiv;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5001/api/articles')
  .then(result => {
    const cardContainer = document.querySelector(selector);
    let articlesArray = [];
    const articlesObj = result.data.articles;

    const bootstrapArticle = articlesObj.bootstrap;
    const javascriptArticle = articlesObj.javascript;
    const jQueryArticle = articlesObj.jquery;
    const technologyArticle = articlesObj.technology;
    const nodeArticle = articlesObj.node;
    articlesArray.push(bootstrapArticle, javascriptArticle, jQueryArticle, nodeArticle, technologyArticle);
   
    articlesArray.forEach(elementArray => {
      elementArray.forEach(element => {
        const elementCard = Card(element);
        cardContainer.appendChild(elementCard);
        
      })
    })
  })
  
  
  
  .catch(err => {
    console.error(err);
  })


}


export { Card, cardAppender }
