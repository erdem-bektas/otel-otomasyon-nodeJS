# Otel Otomasyon with NodeJS and PugJs
One of the projects I developed during my undergraduate education
- Hotel employees can manage room information (number of occupied/empty rooms, room price, capacity, etc.) in the hotel
- It is an online platform where customers who will be guests of the hotel can access their room information by sign up.

## Database Connection 
in helper/db.js <"mongodb connection link"> mongodb connection string  should be pasted 
```sh
mongoose.connect('<mongodb connection link>')
```
## Models

- Customer
-> It's a model structure created to store personal information.
- Room
-> It's the model structure created to store room information.
- Users 
-> It's the structure where the necessary information is kept for the login of the users (manager, employee, etc.) in the system.

---
Lisans eğitimi alırken geliştirmiş olduğum projelerden birisi 

- Otel çalışanlarının otel içerisindeki oda bilgilerini(dolu/boş oda sayısı, oda ücreti, kapasitesi vs.) güncel olarak yönetebilir,
- Otele misafir olacak müşterilerin üyelik oluşturarak oda bilgilerine erişebilecekleri online bir platformdur. 

## Veritabanı Bağlantısı
helper/db.js dosyasında   <"mongodb connection link"> kısmına ilgili mongodb bağlantısını yapıştırmalısınız.

```sh
mongoose.connect('<mongodb connection link>')
```
## Veri Yapısı
- Customer
-> Kişi bilgilerinin saklanması için oluşturulmuş model yapısıdır.
- Room
-> Oda bilgileri için oluşturulmuş model yapısıdır.
- Users 
-> Sistemdeki kullanıcıların(yönetici, çalışan vs.) girişi için gerekli bilgilerin tutulduğu yapıdır.
