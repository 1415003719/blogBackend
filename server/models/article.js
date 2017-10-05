import ArticleRepository from './../repositories/articleRepository'

let Article = function (options) {
  options = options || {}
  this.id = options._id || options.id || null
  this.title = options.title || ''
  this.introduction = options.introduction || ''
  this.content = options.content || ''
  this.publicationDate = new Date()
  this.active = options.active || true
}

Article.create = async function (options) {
  options = options || {}
  let body = await validataBody(options)
  let article = init(body)
  // console.log(article)
  let result = await article.save()
  return result
}

// instance methods
Article.prototype.save = async function () {
  let article = await ArticleRepository.saveArticle(this)
  return article
}

Article.prototype.getId = function () {
  return this.id || null
}

Article.prototype.getTitle = function () {
  return this.title || ''
}

Article.prototype.getIntroduction = function () {
  return this.introduction || ''
}

Article.prototype.getContent = function () {
  return this.content || ''
}

Article.prototype.getPublicationDate = function () {
  return this.publicationDate || null
}

Article.prototype.isActive = function () {
  return this.active
}

// private methods
let validataBody = function (options) {
  return new Promise((resolve, reject) => {
    options = options || {}
    if (!options.content) {
      reject(new Error(401, 'no content'))
    }
    if (!options.title) {
      reject(new Error(401, 'no title'))
    }
    if (!options.introduction) {
      reject(new Error(401, 'no introduction'))
    }
    resolve(options)
  })
}

let init = function (article) {
  return new Article(article)
}

// let initArray = function (articles) {
//   return articles.map((article) => {
//     return Article.init(article)
//   })
// }

export default Article
