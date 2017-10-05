let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaOptions = {autoIndex: false, collection: 'articles', discriminatorKey: '_type'}
let ArticleRepositorySchema = new Schema({
  content: {type: String, required: true},
  title: {type: String, required: true},
  introduction: {type: String, required: true},
  publicationDate: {type: Date, required: true},
  active: {type: String, default: true},
  _type: {type: String, default: 'Article'}
}, schemaOptions)

// ArticleRepositorySchema.statics.findByConditions = function (options, callback) {
//   var conditions = options || {}
//   // console.log(conditions)
//   var q = this.find()
//   q.where('_type').equals('Article')

//   if (conditions._id) {
//     q.where('_id').equals(conditions._id)
//   }
//   if (conditions.customerId) {
//     q.where('customerId').equals(conditions.customerId)
//   }
//   if (conditions.userId) {
//     q.where('userIds').equals(conditions.userId)
//   }
//   if (conditions.service) {
//     q.where('service').equals(conditions.service)
//   }
//   if (conditions.subCateogry) {
//     q.where('subCateogry').equals(conditions.subCateogry)
//   }
//   if (typeof conditions.finish !== 'undefined') {
//     q.where('finish').equals(conditions.finish)
//   }

//   if (typeof conditions.active !== 'undefined') {
//     q.where('active').equals(conditions.active)
//   }

//   if (conditions.populate) {
//     if (typeof conditions.populate === 'string') {
//       conditions.populate = conditions.populate.split('+')
//     }
//     for (var i = 0; i < conditions.populate.length; i++) {
//       q.populate(conditions.populate[i])
//     }
//   }

//   if (conditions.sort) {
//     q.sort(conditions.sort)
//   }
//   // console.log(q.getQuery())
//   var page = conditions.page
//   if (typeof page !== 'undefined') {
//     q.sort('_id')
//     var paginateOptions = {
//       perPage: conditions.perPage || 10,
//       delta: 9,
//       page: page
//     }
//     q.paginate(paginateOptions, function (err, res) {
//       if (err) {
//         callback(err)
//       } else {
//         callback(null, res.results, res.count)
//       }
//     })
//   } else {
//     q.exec(callback)
//   }
// }
ArticleRepositorySchema.statics.saveArticle = async function (article) {
  let Self = this
  console.log(self)
  var id = article.getId() || new mongoose.Types.ObjectId()
  delete article.id
  let articleRepo = await Self.findById(id)
  if (articleRepo) {
    for (let prop in article) {
      if (prop !== '_id' && prop !== '_type') {
        articleRepo[prop] = article[prop]
      }
    }
    return await articleRepo.save()
  } else {
    let newArticle = new Self(article)
    return await newArticle.save()
  }
}

let articleRepository = mongoose.model('Article', ArticleRepositorySchema)
export default articleRepository
