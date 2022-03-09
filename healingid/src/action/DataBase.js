const MASKAPAI = [
    {
      maskapai_id: "F01",
      maskapai_nama: "Garuda", 
      maskapai_logo : require('../assets/images/garuda.png'),  
    },
    {
      maskapai_id: "F02",
      maskapai_nama: "Citilink",
      maskapai_logo: require('../assets/images/citilink.png'),
    },
    {
      maskapai_id: "F03",
      maskapai_nama: "Lion Air",
      maskapai_logo: require('../assets/images/lion.png'),
    },
    {
      maskapai_id: "F04",
      maskapai_nama: "Batik Air",
      maskapai_logo: require('../assets/images/batik.png'),
    },
    {
      maskapai_id: "F05",
      maskapai_nama: "American Airlines",
      maskapai_logo: require('../assets/images/americanair.png'),
    },
    {
      maskapai_id: "F06",
      maskapai_nama: "Wings Air",
      maskapai_logo: require('../assets/images/wingair.png'),
    },
    {
      maskapai_id: "F07",
      maskapai_nama: "Pelita Air",
      maskapai_logo: require('../assets/images/pelita.png'),
    },
    {
      maskapai_id: "F08",
      maskapai_nama: "Sriwijaya Air",
      maskapai_logo: require('../assets/images/sriwijaya.png'),
    },
    {
      maskapai_id: "F09",
      maskapai_nama: "Asialink",
      maskapai_logo: require('../assets/images/asialink.png'),
    },
    {
      maskapai_id: "F10",
      maskapai_nama: "Air Asia",
      maskapai_logo: require('../assets/images/airasia.png'),
    },
    ];

const BANDARA = [
    {
      bandara_id: 'B01',
      bandara_nama: 'Raden Intan', 
    },
    {
      bandara_id: 'B02',
      bandara_nama: 'Soekarno Hatta',
    },
    {
      bandara_id: 'B03',
      bandara_nama: 'Ahmad Yani',
    },
    {
      bandara_id: 'B04',
      bandara_nama: 'Supadio',
    },
    {
      bandara_id: 'B05',
      bandara_nama: 'Kuala Namu',
    },
    {
      bandara_id: 'B06',
      bandara_nama: 'Sam Ratulangi',
    },
    {
      bandara_id: 'B07',
      bandara_nama: 'Sultan Mahmud Badaruddin II',
    },
    {
      bandara_id: 'B08',
      bandara_nama: 'Adisutjipto',
    },
    {
      bandara_id: 'B09',
      bandara_nama: 'Sultan Hasanuddin',
    },
    {
      bandara_id: 'B10',
      bandara_nama: 'Juanda',
    },
    {
      bandara_id: 'B11',
      bandara_nama: 'Ngurah Rai',
    },
];

const JADWAL = [
    {
      jadwal_id: "01",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "F01",
      tanggal: "2020-01-01",
    },
    {
      jadwal_id: "02",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "F06",
      tanggal: "2020-01-01",
    },
    {
      jadwal_id: "03",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F02",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "04",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F04",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "05",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B04",
      maskapai_id: "F03",
      tanggal: "2020-03-03",
    },
    {
      jadwal_id: "06",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B05",
      maskapai_id: "F06",
      tanggal: "2020-03-03",
    },
    {
      jadwal_id: "07",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F01",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "08",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F07",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "09",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F05",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "10",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F08",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "11",
      bandara_id_keberangkatan: "B07",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F01",
      tanggal: "2020-02-03",
    },
    {
      jadwal_id: "12",
      bandara_id_keberangkatan: "B11",
      bandara_id_kedatangan: "B08",
      maskapai_id: "F01",
      tanggal: "2020-02-02",
    },{
      jadwal_id: "13",
      bandara_id_keberangkatan: "B09",
      bandara_id_kedatangan: "B11",
      maskapai_id: "F02",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "14",
      bandara_id_keberangkatan: "B09",
      bandara_id_kedatangan: "B11",
      maskapai_id: "F08",
      tanggal: "2020-02-02",
    },
    {
      jadwal_id: "15",
      bandara_id_keberangkatan: "B07",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F01",
      tanggal: "2020-02-03",
    },
    {
      jadwal_id: "16",
      bandara_id_keberangkatan: "B07",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F02",
      tanggal: "2020-02-03",
    },
    {
      jadwal_id: "17",
      bandara_id_keberangkatan: "B07",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F09",
      tanggal: "2020-02-03",
    },
  ];

export {MASKAPAI, BANDARA, JADWAL};