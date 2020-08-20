## Write your first Custom Element

Potongan kode untuk materi ini: https://repl.it/@dicodingacademy/163-03-first-custom-element?lite=true

Dalam membuat custom element, kita menuliskannya dengan menggunakan JavaScript class. Class tersebut mewarisi sifat dari HTMLElement. HTMLElement merupakan interface yang merepresentasikan element HTML. Interface ini biasanya diterapkan pada class JavaScript sehingga terbentuklah element HTML baru melalui class tersebut (custom element).

Berikut contoh penulisan dalam membuat custom element:

class ImageFigure extends HTMLElement {
 
}
Yeay! ImageFigure sekarang merupakan sebuah HTML element baru. Namun tunggu dulu. Untuk menggunakannya pada berkas HTML, kita perlu menetapkan nama tag yang nantinya digunakan pada HTML. Caranya dengan menggunakan variabel customElements seperti ini:

customElements.define("image-figure", ImageFigure);
customElements merupakan global variable yang digunakan untuk mendefinisikan custom element dan memberitahu bahwa terdapat HTML tag baru. Di dalam customElements terdapat method yang bernama define(). Di sinilah kita meletakan tag name baru kemudian diikuti dengan JavaScript class yang menerapkan sifat HTMLElement.

“Dalam penamaan tag untuk custom element, nama tag harus terdiri dari dua kata yang dipisahkan oleh dash (-). Jika tidak, pembuatan custom element tidak akan berhasil. Hal Ini diperlukan untuk memberi tahu browser perbedaan antara elemen asli HTML dan custom element.”

Setelah mendefinisikan custom element, barulah ia siap digunakan pada berkas HTML. Kita cukup menuliskan tagnya layaknya elemen HTML biasa.

<image-figure></image-figure>
Jangan lupa lampirkan script pada berkas yang digunakan untuk menuliskan class ImageFigure.

<script src="image-figure.js"></script>
Berikut kode lengkapnya:

index.html
image-figure.js
class ImageFigure extends HTMLElement {
 
}
 
customElements.define("image-figure", ImageFigure);
Coba jalankan kode di atas pada browser, kita tidak akan mendapatkan apapun. Sampai saat ini, element <image-figure> berperan layaknya element <div> ataupun <span> yang tidak memiliki fungsi khusus. Karena kita belum menetapkan seperti apa jadinya element baru ini. 

20200310181513ebac1cf89024807a90e2cd2729534e21.png

Untuk menetapkan seperti apa fungsi dari elemen baru, kita lakukan semuanya dengan menggunakan kode JavaScript yang dituliskan di dalam class ImageFigure. Tapi sebelum itu, kita pelajari dulu siklus hidup (life cycle) dari elemen HTML.