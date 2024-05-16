/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqypsoggopb3pa1")

  collection.name = "maison"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqypsoggopb3pa1")

  collection.name = "Maison"

  return dao.saveCollection(collection)
})
