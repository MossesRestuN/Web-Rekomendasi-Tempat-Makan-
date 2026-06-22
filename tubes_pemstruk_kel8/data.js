/* =========================================================
   DATA DUMMY TEMPAT MAKAN
   Lokasi difokuskan di sekitar Institut Teknologi Kalimantan (ITK)
   Pusat ITK: -1.1545, 116.8635
   Setiap object merepresentasikan satu tempat makan
   yang akan ditampilkan dalam bentuk card & marker peta.
   ========================================================= */

const ITK_CENTER = { lat: -1.1545, lng: 116.8635 };

const restaurants = [
  {
    id: 1,
    name: "Warung Nusantara",
    category: "Masakan Indonesia",
    rating: 4.8,
    address: "Jl. Soekarno Hatta KM 15, sekitar ITK",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    lat: -1.1538,
    lng: 116.8651,
    owner: "Bu Sari Wulandari",
    operasional: "Senin - Sabtu: 08.00 - 21.00 | Minggu: 09.00 - 18.00",
    description: "Warung makan rumahan dengan cita rasa otentik Nusantara. Menyajikan masakan harian yang lezat dan terjangkau, cocok untuk mahasiswa ITK yang kangen masakan rumah.",
    menus: ["Nasi Goreng", "Ayam Bakar", "Es Teh"],
    menuDetail: [
      { name: "Nasi Goreng Spesial", price: 15000 },
      { name: "Nasi Goreng Seafood", price: 18000 },
      { name: "Ayam Bakar Kecap", price: 20000 },
      { name: "Ayam Bakar Sambal Matah", price: 22000 },
      { name: "Sayur Asem", price: 8000 },
      { name: "Tempe Orek", price: 7000 },
      { name: "Es Teh Manis", price: 5000 },
      { name: "Es Jeruk Peras", price: 7000 }
    ],
    phone: "081234567801",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id/"
  },
  {
    id: 2,
    name: "Sate Pak Budi",
    category: "Masakan Indonesia",
    rating: 4.6,
    address: "Jl. Soekarno Hatta KM 14, dekat gerbang ITK",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=600&q=80",
    lat: -1.1582,
    lng: 116.8607,
    owner: "Pak Budi Santoso",
    operasional: "Setiap Hari: 10.00 - 22.00",
    description: "Warung sate legendaris yang sudah berdiri sejak 2010. Sate Pak Budi terkenal dengan bumbu kacang racikan sendiri yang gurih dan arang bakaran yang memberikan aroma khas.",
    menus: ["Sate Ayam", "Sate Kambing", "Lontong"],
    menuDetail: [
      { name: "Sate Ayam (10 tusuk)", price: 20000 },
      { name: "Sate Kambing (10 tusuk)", price: 30000 },
      { name: "Sate Usus (10 tusuk)", price: 15000 },
      { name: "Lontong / Nasi", price: 5000 },
      { name: "Sate Campur (10 tusuk)", price: 25000 },
      { name: "Gule Kambing", price: 20000 },
      { name: "Es Teh Manis", price: 5000 },
      { name: "Air Mineral", price: 4000 }
    ],
    phone: "081234567802",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  },
  {
    id: 3,
    name: "Kopi Senja",
    category: "Kafe & Minuman",
    rating: 4.7,
    address: "Jl. Soekarno Hatta KM 15, area kampus ITK",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    lat: -1.1525,
    lng: 116.8645,
    owner: "Rizky Pratama",
    operasional: "Senin - Jumat: 07.00 - 22.00 | Sabtu - Minggu: 08.00 - 23.00",
    description: "Kafe estetik dengan nuansa hangat dan nyaman, cocok untuk nongkrong, ngerjain tugas, atau sekadar bersantai. Menyajikan kopi lokal Kalimantan berkualitas tinggi dengan harga mahasiswa.",
    menus: ["Kopi Susu Gula Aren", "Croissant", "Matcha Latte"],
    menuDetail: [
      { name: "Kopi Susu Gula Aren", price: 18000 },
      { name: "Americano", price: 15000 },
      { name: "Cappuccino", price: 20000 },
      { name: "Matcha Latte", price: 22000 },
      { name: "Coklat Panas", price: 18000 },
      { name: "Croissant Butter", price: 15000 },
      { name: "Roti Bakar Selai", price: 12000 },
      { name: "French Toast", price: 18000 }
    ],
    phone: "081234567803",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  },
  {
    id: 4,
    name: "Bakso Mas Joyo",
    category: "Masakan Indonesia",
    rating: 4.5,
    address: "Jl. Soekarno Hatta KM 13, Karang Joang",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    lat: -1.1602,
    lng: 116.8580,
    owner: "Mas Joyo Supriyadi",
    operasional: "Setiap Hari: 09.00 - 20.00",
    description: "Bakso kenyal dengan kuah kaldu sapi yang gurih dan segar. Mas Joyo selalu menggunakan daging sapi segar pilihan setiap harinya, menjadikan bakso ini favorit warga sekitar ITK.",
    menus: ["Bakso Urat", "Mie Ayam Bakso", "Es Jeruk"],
    menuDetail: [
      { name: "Bakso Urat", price: 15000 },
      { name: "Bakso Telur Spesial", price: 18000 },
      { name: "Mie Ayam Bakso", price: 17000 },
      { name: "Bakso Bakar", price: 20000 },
      { name: "Mie Goreng Bakso", price: 18000 },
      { name: "Bihun Bakso", price: 16000 },
      { name: "Es Jeruk Peras", price: 7000 },
      { name: "Es Teh Manis", price: 5000 }
    ],
    phone: "081234567804",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  },
  {
    id: 5,
    name: "Pizza Bella",
    category: "Western Food",
    rating: 4.4,
    address: "Jl. Soekarno Hatta KM 15, ruko kampus",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    lat: -1.1515,
    lng: 116.8620,
    owner: "Isabella Dewi",
    operasional: "Senin - Minggu: 11.00 - 22.00",
    description: "Restoran western food pertama di dekat ITK yang menyajikan pizza dan pasta ala Italia dengan bahan-bahan segar impor. Tempatnya nyaman dengan interior modern yang instagramable.",
    menus: ["Pizza Margherita", "Spaghetti Bolognese", "Garlic Bread"],
    menuDetail: [
      { name: "Pizza Margherita (M)", price: 45000 },
      { name: "Pizza BBQ Chicken (M)", price: 55000 },
      { name: "Pizza Beef Pepperoni (M)", price: 58000 },
      { name: "Spaghetti Bolognese", price: 35000 },
      { name: "Spaghetti Carbonara", price: 38000 },
      { name: "Garlic Bread (4 pcs)", price: 20000 },
      { name: "French Fries", price: 22000 },
      { name: "Cola / Soda", price: 12000 }
    ],
    phone: "081234567805",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  },
  {
    id: 6,
    name: "Ayam Geprek Mantap",
    category: "Masakan Indonesia",
    rating: 4.6,
    address: "Jl. Soekarno Hatta KM 12, sekitar ITK",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
    lat: -1.1620,
    lng: 116.8555,
    owner: "Pak Hendra Wijaya",
    operasional: "Setiap Hari: 10.00 - 21.00",
    description: "Surga bagi pecinta pedas! Ayam geprek dengan pilihan level kepedasan 1 hingga 10, disajikan dengan nasi hangat dan lalapan segar. Porsi besar dengan harga yang bersahabat.",
    menus: ["Ayam Geprek Sambal Bawang", "Tahu Crispy", "Es Teh Manis"],
    menuDetail: [
      { name: "Ayam Geprek Original", price: 18000 },
      { name: "Ayam Geprek Sambal Bawang", price: 20000 },
      { name: "Ayam Geprek Sambal Ijo", price: 20000 },
      { name: "Ayam Geprek Mozarella", price: 28000 },
      { name: "Tahu Crispy (5 pcs)", price: 10000 },
      { name: "Tempe Mendoan", price: 8000 },
      { name: "Es Teh Manis", price: 5000 },
      { name: "Jus Alpukat", price: 12000 }
    ],
    phone: "081234567806",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  },
  {
    id: 8,
    name: "Sushi Tei Mini",
    category: "Japanese Food",
    rating: 4.5,
    address: "Jl. Soekarno Hatta KM 13, depan ITK",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80",
    lat: -1.1500,
    lng: 116.8610,
    owner: "Kevin Tanaka",
    operasional: "Selasa - Minggu: 11.00 - 21.00 | Senin: Tutup",
    description: "Restoran Jepang mini yang menghadirkan cita rasa autentik Tokyo di Balikpapan. Bahan baku segar dan teknik memasak tradisional menjadi keunggulan utama Sushi Tei Mini.",
    menus: ["Salmon Sushi Roll", "Chicken Katsu", "Miso Soup"],
    menuDetail: [
      { name: "Salmon Sushi Roll (8 pcs)", price: 45000 },
      { name: "Tuna Roll (8 pcs)", price: 40000 },
      { name: "Dragon Roll (8 pcs)", price: 55000 },
      { name: "Chicken Katsu + Nasi", price: 35000 },
      { name: "Beef Teriyaki + Nasi", price: 42000 },
      { name: "Miso Soup", price: 12000 },
      { name: "Edamame", price: 15000 },
      { name: "Matcha Ice Cream", price: 18000 }
    ],
    phone: "081234567808",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  },
  {
    id: 9,
    name: "Mie Aceh Bang Jali",
    category: "Masakan Indonesia",
    rating: 4.6,
    address: "Jl. Soekarno Hatta KM 14, Karang Joang",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80",
    lat: -1.1645,
    lng: 116.8615,
    owner: "Bang Jali Saputra",
    operasional: "Senin - Sabtu: 09.00 - 22.00 | Minggu: 10.00 - 20.00",
    description: "Mie Aceh asli dengan rempah-rempah pilihan yang didatangkan langsung dari Aceh. Bang Jali sendiri asli orang Aceh yang merantau ke Kalimantan membawa resep turun-temurun keluarganya.",
    menus: ["Mie Aceh Goreng", "Mie Aceh Kuah", "Roti Cane"],
    menuDetail: [
      { name: "Mie Aceh Goreng Ayam", price: 22000 },
      { name: "Mie Aceh Goreng Seafood", price: 28000 },
      { name: "Mie Aceh Kuah Ayam", price: 22000 },
      { name: "Mie Aceh Kuah Seafood", price: 28000 },
      { name: "Roti Cane Polos", price: 8000 },
      { name: "Roti Cane Telur", price: 12000 },
      { name: "Kari Kambing", price: 30000 },
      { name: "Teh Tarik", price: 8000 }
    ],
    phone: "081234567809",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  },
  {
    id: 10,
    name: "Es Campur Segar",
    category: "Kafe & Minuman",
    rating: 4.3,
    address: "Jl. Soekarno Hatta KM 14, dekat kos mahasiswa",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80",
    lat: -1.1560,
    lng: 116.8670,
    owner: "Bu Ratna Dewi",
    operasional: "Setiap Hari: 09.00 - 18.00",
    description: "Minuman dan jajanan segar yang cocok dinikmati di siang hari yang terik. Bu Ratna menyajikan es campur dengan buah-buahan lokal segar dan santan kelapa muda asli.",
    menus: ["Es Campur", "Es Kelapa Muda", "Pisang Goreng"],
    menuDetail: [
      { name: "Es Campur Spesial", price: 12000 },
      { name: "Es Kelapa Muda", price: 10000 },
      { name: "Es Buah Segar", price: 12000 },
      { name: "Pisang Goreng (3 pcs)", price: 8000 },
      { name: "Pisang Coklat Keju", price: 12000 },
      { name: "Gorengan Campur (5 pcs)", price: 10000 },
      { name: "Es Alpukat", price: 13000 },
      { name: "Jus Mangga", price: 10000 }
    ],
    phone: "081234567810",
    gofood: "https://gofood.co.id",
    shopeefood: "https://www.shopeefood.co.id"
  }
];

/* =========================================================
   DATA DUMMY TIM PENGEMBANG
   - 4 slot: 1 Ketua Tim (isLeader: true) + 3 Anggota
   ========================================================= */
const teamMembers = [
  {
    id: 1,
    name: "Mosses Restu Nugroho",
    nim: "10251083",
    role: "Ketua Tim",
    isLeader: true,
    description: "Mahasiswa Sistem Informasi ITK 2025",
    photo: "foto_anggota/mosses.jpeg",
    instagram: "https://www.instagram.com/mossesrestu_",
    github: "https://github.com/MossesRestuN"
  },
  {
    id: 2,
    name: "Muhammad Azriel Al Fadhil",
    nim: "10251117",
    role: "Anggota",
    isLeader: false,
    description: "Mahasiswa Sistem Informasi ITK 2025",
    photo: "foto_anggota/azriel.jpeg",
    instagram: "https://www.instagram.com/_muhmmadazril",
    github: "https://github.com/azrilalfadhil-svg"
  },
  {
    id: 3,
    name: "A. Suci Maharani. P",
    nim: "10251011",
    role: "Anggota",
    isLeader: false,
    description: "Mahasiswa Sistem Informasi ITK 2025",
    photo: "foto_anggota/andi.jpeg",
    instagram: "https://www.instagram.com/maharani.andisuci",
    github: "https://github.com/Asuci-Maharani"
  },
  {
    id: 4,
    name: "Farel Noviansyah",
    nim: "10251110",
    role: "Anggota",
    isLeader: false,
    description: "Mahasiswa Sistem Informasi ITK 2025",
    photo: "foto_anggota/farel.jpeg",
    instagram: "https://www.instagram.com/farel_nvnsyh",
    github: "https://github.com/10251110"
  }
];