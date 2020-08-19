const articleList = articles.map(article => (
  <Article 
    title={article.title}
    writer={article.writer}
    key={article.id}
  />
));