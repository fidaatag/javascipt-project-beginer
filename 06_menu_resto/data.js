const menu = [
    {
        id: 1,
        title : 'Ayam Bakar Pedas Manis',
        category : 'Ayam',
        price : 35,
        img : 'img/A_01_AyamBakarPedasManis.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //1
    {
        id: 2,
        title : 'Ayam Betutu Khas Bali',
        category : 'Ayam',
        price : 35,
        img : 'img/A_02_AyamBetutuKhasBali.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //2
    {
        id: 3,
        title : 'Ayam Goreng Kremes',
        category : 'Ayam',
        price : 35,
        img : 'img/A_03_AyamGorengKremes.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //3
    {
        id: 4,
        title : 'Ceker Ayam',
        category : 'Ayam',
        price : 5,
        img : 'img/A_04_CekerAyam.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //4
    {
        id: 5,
        title : 'Jeroan Ayam',
        category : 'Ayam',
        price : 5,
        img : 'img/A_05_JeroanAyam.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //5
    {
        id: 6,
        title : 'Bakmi Goreng Sosis Bakso',
        category : 'Mie Bakmi',
        price : 15,
        img : 'img/B_06_BakmiGorengSosisBakso.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //6
    {
        id: 7,
        title : 'Bakmi Goreng Udang',
        category : 'Mie Bakmi',
        price : 15,
        img : 'img/B_07_BakmiGorengUdang.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //7
    {
        id: 8,
        title : 'Mie Kocok',
        category : 'Mie Bakmi',
        price : 13,
        img : 'img/B_08_MieKocok.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //8
    {
        id: 9,
        title : 'Mie Ayam Biasa',
        category : 'Mie Bakmi',
        price : 13,
        img : 'img/B_09_MieAyamBiasa.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //9
    {
        id: 10,
        title : 'Mie Ayam Bakso Pangsit',
        category : 'Mie Bakmi',
        price : 13,
        img : 'img/B_10_MieAyamBaksoPangsit.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //10
    {
        id: 11,
        title : 'Sop Jamur',
        category : 'Sop Soto',
        price : 10,
        img : 'img/C_11_SopJamur.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //11
    {
        id: 12,
        title : 'Sop Buntut',
        category : 'Sop Soto',
        price : 10,
        img : 'img/C_12_SopBuntut.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //12
    {
        id: 13,
        title : 'Soto Lamongan',
        category : 'Sop Soto',
        price : 10,
        img : 'img/C_13_SotoLamongan.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //13
    {
        id: 14,
        title : 'Gurame Bakar',
        category : 'Seafood',
        price : 10,
        img : 'img/D_14_GurameBakar.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //14
    {
        id: 15,
        title : 'Gurame Goreng',
        category : 'Seafood',
        price : 10,
        img : 'img/D_15_GurameGoreng.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //15
    {
        id: 16,
        title : 'Kepiting Saus Padang',
        category : 'Seafood',
        price : 10,
        img : 'img/D_16_KepitingSausPadang.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    }, //16
    {
        id: 17,
        title : 'Kerang Hijau Saus Tiram',
        category : 'Seafood',
        price : 10,
        img : 'img/D_17_KerangHijauSausTiram.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    },  //17
    {
        id: 18,
        title : 'Patin Asam Pedas',
        category : 'Seafood',
        price : 10,
        img : 'img/D_18_PatinAsamPedas.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere velit tempor tellus egestas, non posuere eros sodales. Phasellus velit tortor, sagittis at accumsan eget, posuere ut ex. Integer ac.'
    } //18
];