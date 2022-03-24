const Jadwal = [
    {
        idJadwal: 1,
        asalPelabuhan: 'merak',
        pelabuhanTujuan: 'bakauheni',
        kelas: 'reguler',
    },
    {
        idJadwal: 2,
        asalPelabuhan: 'merak',
        pelabuhanTujuan: 'bakauheni',  
        kelas: 'eksekutif',
    },
    {
        idJadwal: 3,
        asalPelabuhan: 'merak',
        pelabuhanTujuan: 'bakauheni',
        kelas: 'bisnis',
    },
    {
        idJadwal: 4,
        asalPelabuhan: 'bakauheni',
        pelabuhanTujuan: 'merak',
        kelas: 'reguler',
    },
    {
        idJadwal: 5,
        asalPelabuhan: 'bakauheni',
        pelabuhanTujuan: 'merak',
        kelas: 'eksekutif',
    },
    {
        idJadwal: 6,
        asalPelabuhan: 'bakauheni',
        pelabuhanTujuan: 'merak',
        kelas: 'bisnis',
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
]

export { Jadwal, Harga, Pelabuhan }