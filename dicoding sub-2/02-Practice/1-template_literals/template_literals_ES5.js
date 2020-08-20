/*
 cara lama(ES5) dalam menggabungkan nilai string adalah dengan menggunakan operator (+).
 Mungkin hal tersebut tidak terlalu repot, tapi jika dalam proses penggabungan tersebut
 terdapat garis baru, ini jadi sangat merepotkan.
*/

const user = {
    firstName: "Dimas",
    lastName: "Saputra",
    age: 18
}
 
const admin = {
    name: "Jane",
    position: "Marketing"
}
 
const message = "Dear, " + user.firstName + " " + user.lastName +  "\n\n" +
"Selamat ulang tahun yang ke-" + user.age + " semoga selalu diberikan kesehatan." + "\n\n" +
"Best Regards,\n" +
admin.name + "\n" +
admin.position;
 
console.log(message);
 
/* output ->
Dear, Dimas Saputra
 
Selamat ulang tahun yang ke-18 semoga selalu diberikan kesehatan.
 
Best Regards,
Jane
Marketing
*/