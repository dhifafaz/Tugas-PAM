const Jadwal = [
    {
        idJadwal: 1,
        asalPelabuhan: 'merak',
        pelabuhanTujuan: 'bakauheni',
        kelas: 'reguler',
        tanggal: "Jum'at, 25 Maret 2022",
        waktu: '14:00 WIB',
    },
    {
        idJadwal: 2,
        asalPelabuhan: 'merak',
        pelabuhanTujuan: 'bakauheni',  
        kelas: 'eksekutif',
        tanggal: "Jum'at, 25 Maret 2022",
        waktu: '14:00 WIB',
    },
    {
        idJadwal: 3,
        asalPelabuhan: 'merak',
        pelabuhanTujuan: 'bakauheni',
        kelas: 'bisnis',
        tanggal: "Jum'at, 25 Maret 2022",
        waktu: '14:25 WIB',
    },
    {
        idJadwal: 4,
        asalPelabuhan: 'bakauheni',
        pelabuhanTujuan: 'merak',
        kelas: 'reguler',
        tanggal: "Kamis, 01 April 2022",
        waktu: '10:00 WIB',
    },
    {
        idJadwal: 5,
        asalPelabuhan: 'bakauheni',
        pelabuhanTujuan: 'merak',
        kelas: 'eksekutif',
        tanggal: "Kamis, 01 April 2022",
        waktu: '10:00 WIB',
    },
    {
        idJadwal: 6,
        asalPelabuhan: 'bakauheni',
        pelabuhanTujuan: 'merak',
        kelas: 'bisnis',
        tanggal: "Kamis, 01 April 2022",
        waktu: '10:25 WIB',
    },
]

const Harga = [
    {
        idHarga: 1,
        kelas: 'reguler',
        harga: 30000,
    },
    {
        idHarga: 2,
        kelas: 'eksekutif',
        harga: 65000,
    },
    {
        idHarga: 3,
        kelas: 'bisnis',
        harga: 80000,
    },
    {
        idHarga: 4,
        kelas: 'vvip',
        harga: 100000,
    },
]

const Pelabuhan = [
    {
        idPelabuhan: 1,
        namaPelabuhan: 'merak',
        lokasi: 'banten',
    },
    {
        idPelabuhan: 2,
        namaPelabuhan: 'bakauheni',
        lokasi: 'lampung',
    },
    {
        idPelabuhan: 3,
        namaPelabuhan: 'priok',
        lokasi: 'jakarta utara',
    },
    {
        idPelabuhan: 4,
        namaPelabuhan: 'padang bai',
        lokasi: 'bali',
    },
    {
        idPelabuhan: 5,
        namaPelabuhan: 'tanjung mas',
        lokasi: 'semarang',
    },
]

export { Jadwal, Harga, Pelabuhan }