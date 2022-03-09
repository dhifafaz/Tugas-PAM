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
      maskapai_nama: "Lion air",
      maskapai_logo: require('../assets/images/lion.png'),
    },
    {
      maskapai_id: "F04",
      maskapai_nama: "Batik air",
      maskapai_logo: require('../assets/images/batik.png'),
    },
    {
      maskapai_id: "F05",
      maskapai_nama: "American airlines",
      maskapai_logo: require('../assets/images/americanair.png'),
    },
    {
      maskapai_id: "F06",
      maskapai_nama: "Wings air",
      maskapai_logo: require('../assets/images/wingair.png'),
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
      bandara_nama: 'Adi Sucipto',
    },
    {
      bandara_id: 'B05',
      bandara_nama: 'Kuala Namu',
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
      maskapai_id: "F05",
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
      maskapai_id: "F02",
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
      maskapai_id: "F05",
      tanggal: "2020-02-02",
    },
  ];

export {MASKAPAI, BANDARA, JADWAL};