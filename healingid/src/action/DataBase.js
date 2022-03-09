

const MASKAPAI = [
    {
      maskapai_id: "F01",
      maskapai_nama: "Garuda", 
      maskapai_logo : " ",  
    },
    {
      maskapai_id: "F02",
      maskapai_nama: "Citilink",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "F03",
      maskapai_nama: "Lion air",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "F04",
      maskapai_nama: "Batik air",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "F05",
      maskapai_nama: "American airlines",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "F06",
      maskapai_nama: "Wings air",
      maskapai_logo: " ",
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
    },
    {
      jadwal_id: "02",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F01",
    },
    {
      jadwal_id: "03",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "F02",
    },
    {
      jadwal_id: "04",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "F02",
    },
    {
      jadwal_id: "05",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B04",
      maskapai_id: "F03",
    },
    {
      jadwal_id: "06",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B05",
      maskapai_id: "F05",
    },
  ];

export {MASKAPAI, BANDARA, JADWAL};