// Membuka Database atau Membuatkannya jika belum ada
var dbPromised = idb.open("news-reader", 1, function(upgradeDb) {
  var articlesObjectStore = upgradeDb.createObjectStore("articles", {
    keyPath: "ID"
  });
  articlesObjectStore.createIndex("post_title", "post_title", { unique: false });
});


// Menambahkan Operasi Simpan Artikel
function saveForLater(article) {
  dbPromised.then(function(db) {
      var tx = db.transaction("articles", "readwrite");
      var store = tx.objectStore("articles");
      console.log(article);
      store.add(article.result);
      return tx.complete;
    })
    .then(function() {
      console.log("Artikel berhasil di simpan.");
    });
}