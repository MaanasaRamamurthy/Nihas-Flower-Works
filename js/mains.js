let btn1=document.querySelectorAll('.bouquet-card-btn');
let btn2=document.querySelectorAll('.bridal-card-btn');
let btn3=document.querySelectorAll('.Engagement-card-btn');
let btn4=document.querySelectorAll('.cardecor-card-btn');
let btn5=document.querySelectorAll('.chocolate-card-btn');
let btn6=document.querySelectorAll('.floral-card-btn');
let btn7=document.querySelectorAll('.gajra-card-btn');
let btn8=document.querySelectorAll('.garland-card-btn');
let btn9=document.querySelectorAll('.homewarming-card-btn');
let btn10=document.querySelectorAll('.function-card-btn');
let btn11=document.querySelectorAll('.trousseau-card-btn');
let btn12=document.querySelectorAll('.wreath-card-btn');
let btn13=document.querySelectorAll('.wedding-card-btn');


let cartNumber=localStorage.getItem('cartNumbers');
cartNumber=0;
let _1bouquet=[{
    name: 'BO_1',
    tag: 'BO_1_Rs.140',
    type: 'Bouquet_BO',
    price: 140,
    inCart: 0
},
{
    name: 'BO_2',
    tag: 'BO_2_Rs.200',
    type: 'Bouquet_BO',
    price: 200,
    inCart: 0
},
{   
    name: 'BO_3',
    tag: 'BO_3_Rs.350',
    type: 'Bouquet_BO',
    price: 350,
    inCart: 0
},
{
    name: 'BO_4',
    tag: 'BO_4_Rs.350',
    type: 'Bouquet_BO',
    price: 350,
    inCart: 0
},
{
    name: 'BO_5',
    tag: 'BO_5_Rs.350',
    price: 350,
    type: 'Bouquet_BO',
    inCart: 0
},
{
    name: 'BO_6',
    tag: 'BO_6_Rs.400',
    type: 'Bouquet_BO',
    price: 400,
    inCart: 0
},
{
    name: 'BO_7',
    tag: 'BO_7_Rs.450',
    type: 'Bouquet_BO',
    price: 450,
    inCart: 0
},
{
    name: 'BO_8',
    tag: 'BO_8_Rs.500',
    type: 'Bouquet_BO',
    price: 500,
    inCart: 0
},
{
    name: 'BO_9',
    tag: 'BO_9_Rs.500',
    type: 'Bouquet_BO',
    price: 500,
    inCart: 0
},
{
    name: 'BO_10',
    tag: 'BO_10_Rs.500',
    type: 'Bouquet_BO',
    price: 500,
    inCart: 0
},
{
    name: 'BO_11',
    tag: 'BO_11_Rs.500',
    type: 'Bouquet_BO',
    price: 500,
    inCart: 0
},
{
    name: 'BO_12',
    tag: 'BO_12_Rs.500',
    type: 'Bouquet_BO',
    price: 500,
    inCart: 0
},
{
    name: 'BO_13',
    tag: 'BO_13_Rs.500',
    type: 'Bouquet_BO',
    price: 500,
    inCart: 0
},
{
    name: 'BO_14',
    tag: 'BO_14_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_15',
    tag: 'BO_15_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_16',
    tag: 'BO_16_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_17',
    tag: 'BO_17_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_18',
    tag: 'BO_18_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_19',
    tag: 'BO_19_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},

{
    name: 'BO_20',
    tag: 'BO_20_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_21',
    tag: 'BO_21_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_22',
    tag: 'BO_22_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_23',
    tag: 'BO_23_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_24',
    tag: 'BO_24_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_25',
    tag: 'BO_25_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_26',
    tag: 'BO_26_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_27',
    tag: 'BO_27_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_28',
    tag: 'BO_28_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_29',
    tag: 'BO_29_Rs.600',
    type: 'Bouquet_BO',
    price: 600,
    inCart: 0
},
{
    name: 'BO_30',
    tag: 'BO_30_Rs.700',
    type: 'Bouquet_BO',
    price: 700,
    inCart: 0
},
{
    name: 'BO_31',
    tag: 'BO_31_Rs.700',
    type: 'Bouquet_BO',
    price: 700,
    inCart: 0
},
{
    name: 'BO_32',
    tag: 'BO_32_Rs.800',
    type: 'Bouquet_BO',
    price: 800,
    inCart: 0
},
{
    name: 'BO_33',
    tag: 'BO_33_Rs.800',
    type: 'Bouquet_BO',
    price: 800,
    inCart: 0
},
{
    name: 'BO_34',
    tag: 'BO_34_Rs.800',
    type: 'Bouquet_BO',
    price: 800,
    inCart: 0
},
{
    name: 'BO_35',
    tag: 'BO_35_Rs.800',
    type: 'Bouquet_BO',
    price: 800,
    inCart: 0
},

{
    name: 'BO_36',
    tag: 'BO_36_Rs.800',
    type: 'Bouquet_BO',
    price: 800,
    inCart: 0
},
{
    name: 'BO_37',
    tag: 'BO_37_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_38',
    tag: 'BO_38_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_39',
    tag: 'BO_39_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_40',
    tag: 'BO_40_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},

{
    name: 'BO_41',
    tag: 'BO_41_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_42',
    tag: 'BO_42_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_43',
    tag: 'BO_43_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_44',
    tag: 'BO_44_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_45',
    tag: 'BO_45_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_46',
    tag: 'BO_46_Rs.850',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_47',
    tag: 'BO_47_Rs.1000',
    type: 'Bouquet_BO',
    price: 1000,
    inCart: 0
},
{
    name: 'BO_48',
    tag: 'BO_48_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_49',
    tag: 'BO_49_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_50',
    tag: 'BO_50_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_51',
    tag: 'BO_51_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_52',
    tag: 'BO_52_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_53',
    tag: 'BO_53_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_54',
    tag: 'BO_54_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_55',
    tag: 'BO_55_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_56',
    tag: 'BO_56_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_57',
    tag: 'BO_57_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_58',
    tag: 'BO_58_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_59',
    tag: 'BO_59_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_60',
    tag: 'BO_60_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_61',
    tag: 'BO_61_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_62',
    tag: 'BO_62_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_63',
    tag: 'BO_63_Rs.1100',
    type: 'Bouquet_BO',
    price: 1100,
    inCart: 0
},
{
    name: 'BO_64',
    tag: 'BO_64_Rs.1300',
    type: 'Bouquet_BO',
    price: 1300,
    inCart: 0
},
{
    name: 'BO_65',
    tag: 'BO_65_Rs.1300',
    type: 'Bouquet_BO',
    price: 1300,
    inCart: 0
},
{
    name: 'BO_66',
    tag: 'BO_66_Rs.1300',
    type: 'Bouquet_BO',
    price: 1300,
    inCart: 0
},
{
    name: 'BO_67',
    tag: 'BO_67_Rs.1300',
    type: 'Bouquet_BO',
    price: 1300,
    inCart: 0
},
{
    name: 'BO_68',
    tag: 'BO_68_Rs.1300',
    type: 'Bouquet_BO',
    price: 1300,
    inCart: 0
},
{
    name: 'BO_69',
    tag: 'BO_69_Rs.1300',
    type: 'Bouquet_BO',
    price: 1300,
    inCart: 0
},
{
    name: 'BO_70',
    tag: 'BO_70_Rs.1300',
    type: 'Bouquet_BO',
    price: 1300,
    inCart: 0
},
{
    name: 'BO_71',
    tag: 'BO_71_Rs.1500',
    type: 'Bouquet_BO',
    price: 1500,
    inCart: 0
},
{
    name: 'BO_72',
    tag: 'BO_72_Rs.1500',
    type: 'Bouquet_BO',
    price: 1500,
    inCart: 0
},
{
    name: 'BO_73',
    tag: 'BO_73_Rs.1500',
    type: 'Bouquet_BO',
    price: 1500,
    inCart: 0
},
{
    name: 'BO_74',
    tag: 'BO_74_Rs.1500',
    type: 'Bouquet_BO',
    price: 1500,
    inCart: 0
},
{
    name: 'BO_75',
    tag: 'BO_75_Rs.1500',
    type: 'Bouquet_BO',
    price: 1500,
    inCart: 0
},
{
    name: 'BO_76',
    tag: 'BO_76_Rs.1500',
    type: 'Bouquet_BO',
    price: 1500,
    inCart: 0
},
{
    name: 'BO_77',
    tag: 'BO_77_Rs.1900',
    type: 'Bouquet_BO',
    price: 1900,
    inCart: 0
},
{
    name: 'BO_78',
    tag: 'BO_78_Rs.1900',
    type: 'Bouquet_BO',
    price: 1900,
    inCart: 0
},
{
    name: 'BO_79',
    tag: 'BO_79_Rs.2100',
    type: 'Bouquet_BO',
    price: 2100,
    inCart: 0
},
{
    name: 'BO_80',
    tag: 'BO_80_Rs.2100',
    type: 'Bouquet_BO',
    price: 2100,
    inCart: 0
},
{
    name: 'BO_81',
    tag: 'BO_81_Rs.2100',
    type: 'Bouquet_BO',
    price: 2100,
    inCart: 0
},
{
    name: 'BO_82',
    tag: 'BO_82_Rs.2100',
    type: 'Bouquet_BO',
    price: 2100,
    inCart: 0
},
{
    name: 'BO_83',
    tag: 'BO_83_Rs.2100',
    type: 'Bouquet_BO',
    price: 850,
    inCart: 0
},
{
    name: 'BO_84',
    tag: 'BO_84_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_85',
    tag: 'BO_85_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_86',
    tag: 'BO_86_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_87',
    tag: 'BO_87_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_88',
    tag: 'BO_88_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_89',
    tag: 'BO_89_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_90',
    tag: 'BO_90_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_91',
    tag: 'BO_91_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_92',
    tag: 'BO_92_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_93',
    tag: 'BO_93_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_94',
    tag: 'BO_94_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_95',
    tag: 'BO_95_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_96',
    tag: 'BO_96_Rs.2500',
    type: 'Bouquet_BO',
    price: 2500,
    inCart: 0
},
{
    name: 'BO_97',
    tag: 'BO_97_Rs.3000',
    type: 'Bouquet_BO',
    price: 3000,
    inCart: 0
},
{
    name: 'BO_98',
    tag: 'BO_98_Rs.3000',
    type: 'Bouquet_BO',
    price: 3000,
    inCart: 0
},
{
    name: 'BO_99',
    tag: 'BO_99_Rs.3000',
    type: 'Bouquet_BO',
    price: 3000,
    inCart: 0
},
{
    name: 'BO_100',
    tag: 'BO_100_Rs.3000',
    type: 'Bouquet_BO',
    price: 3000,
    inCart: 0
},
{
    name: 'BO_101',
    tag: 'BO_101_Rs.3000',
    type: 'Bouquet_BO',
    price: 3000,
    inCart: 0
},
{
    name: 'BO_102',
    tag: 'BO_102_Rs.3000',
    type: 'Bouquet_BO',
    price: 3000,
    inCart: 0
},
{
    name: 'BO_103',
    tag: 'BO_103_Rs.3000',
    type: 'Bouquet_BO',
    price: 3000,
    inCart: 0
},
{
    name: 'BO_104',
    tag: 'BO_104_Rs.3500',
    type: 'Bouquet_BO',
    price: 3500,
    inCart: 0
},
{
    name: 'BO_105',
    tag: 'BO_105_Rs.3500',
    type: 'Bouquet_BO',
    price: 3500,
    inCart: 0
},
{
    name: 'BO_106',
    tag: 'BO_106_Rs.3500',
    type: 'Bouquet_BO',
    price: 3500,
    inCart: 0
},
{
    name: 'BO_107',
    tag: 'BO_107_Rs.3500',
    type: 'Bouquet_BO',
    price: 3500,
    inCart: 0
},
{
    name: 'BO_108',
    tag: 'BO_108_Rs.3500',
    type: 'Bouquet_BO',
    price: 3500,
    inCart: 0
},
{
    name: 'BO_109',
    tag: 'BO_109_Rs.4000',
    type: 'Bouquet_BO',
    price: 4000,
    inCart: 0
},
{
    name: 'BO_110',
    tag: 'BO_110_Rs.4000',
    type: 'Bouquet_BO',
    price: 4000,
    inCart: 0
},
{
    name: 'BO_111',
    tag: 'BO_111_Rs.4000',
    type: 'Bouquet_BO',
    price: 4000,
    inCart: 0
},
{
    name: 'BO_112',
    tag: 'BO_112_Rs.4000',
    type: 'Bouquet_BO',
    price: 4000,
    inCart: 0
},
{
    name: 'BO_113',
    tag: 'BO_113_Rs.5000',
    type: 'Bouquet_BO',
    price: 5000,
    inCart: 0
},
{
    name: 'BO_114',
    tag: 'BO_114_Rs.5000',
    type: 'Bouquet_BO',
    price: 5000,
    inCart: 0
},
{
    name: 'BO_115',
    tag: 'BO_115_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_116',
    tag: 'BO_116_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_117',
    tag: 'BO_117_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_118',
    tag: 'BO_118_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_119',
    tag: 'BO_119_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_120',
    tag: 'BO_120_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_121',
    tag: 'BO_121_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_122',
    tag: 'BO_122_Rs.6000',
    type: 'Bouquet_BO',
    price: 6000,
    inCart: 0
},
{
    name: 'BO_123',
    tag: 'BO_123_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_124',
    tag: 'BO_124_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_125',
    tag: 'BO_125_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_126',
    tag: 'BO_126_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_127',
    tag: 'BO_127_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_128',
    tag: 'BO_128_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_129',
    tag: 'BO_129_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_130',
    tag: 'BO_130_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_131',
    tag: 'BO_131_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_132',
    tag: 'BO_132_Rs.7000',
    type: 'Bouquet_BO',
    price: 7000,
    inCart: 0
},
{
    name: 'BO_133',
    tag: 'BO_133_Rs.10000',
    type: 'Bouquet_BO',
    price: 10000,
    inCart: 0
},
];

let _2bridal=[{
    name: 'BR_1',
    tag: 'BR_1',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_2',
    tag: 'BR_2',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},

{
    name: 'BR_3',
    tag: 'BR_3',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_4',
    tag: 'BR_4',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_5',
    tag: 'BR_5',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_6',
    tag: 'BR_6',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},

{
    name: 'BR_7',
    tag: 'BR_7',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_8',
    tag: 'BR_8',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_9',
    tag: 'BR_9',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_10',
    tag: 'BR_10',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
{
    name: 'BR_11',
    tag: 'BR_11',
    type: 'Bridal Flowers_BR',
    price: 0,
    inCart: 0
},
];

let _3Engagement=[
    {
        name: 'EN_1',
        tag: 'EN_1',
        type:'Engagement Backdrop-EN',
        price: 0,
        inCart: 0
    },

    {
        name: 'EN_2',
        tag: 'EN_2',
        type:'Engagement Backdrop-EN',
        price: 0,
        inCart: 0
    },
    {
        name: 'EN_3',
        tag: 'EN_3',
        type:'Engagement Backdrop-EN',
        price: 0,
        inCart: 0
    },
    {
        name: 'EN_4',
        tag: 'EN_4',
        type:'Engagement Backdrop-EN',
        price: 0,
        inCart: 0
    },
    {
        name: 'EN_5',
        tag: 'EN_5',
        type:'Engagement Backdrop-EN',
        price: 0,
        inCart: 0
    },

    {
        name: 'EN_6',
        tag: 'EN_6',
        type:'Engagement Backdrop-EN',
        price: 0,
        inCart: 0
    },
];

let _4cardecor=[
    {
        name: 'CD_1',
        tag: 'CD_1',
        type:'Car Deco_CD',
        price: 0,
        inCart: 0
    },
    {
        name: 'CD_2',
        tag: 'CD_2',
        type:'Car Deco_CD',
        price: 0,
        inCart: 0
    },
    {
        name: 'CD_3',
        tag: 'CD_3',
        type:'Car Deco_CD',
        price: 0,
        inCart: 0
    },
    {
        name: 'CD_4',
        tag: 'CD_4',
        type:'Car Deco_CD',
        price: 0,
        inCart: 0
    },
    {
        name: 'CD_5',
        tag: 'CD_5',
        type:'Car Deco_CD',
        price: 0,
        inCart: 0
    },
    {
        name: 'CD_6',
        tag: 'CD_6',
        type:'Car Deco_CD',
        price: 0,
        inCart: 0
    },
    {
        name: 'CD_7',
        tag: 'CD_7',
        type:'Car Deco_CD',
        price: 0,
        inCart: 0
    },

]

let _5Chocolate=[
    {
        name: 'CB_1',
        tag: 'CB_1_Rs.450',
        type: 'Chocolate Bouquet_CB',
        price: 450,
        inCart: 0
    },
    {
        name: 'CB_2',
        tag: 'CB_2_Rs.450',
        type: 'Chocolate Bouquet_CB',
        price: 450,
        inCart: 0
    },
    {
        name: 'CB_3',
        tag: 'CB_3_Rs.500',
        type: 'Chocolate Bouquet_CB',
        price: 500,
        inCart: 0
    },
    {
        name: 'CB_4',
        tag: 'CB_4_Rs.600',
        type: 'Chocolate Bouquet_CB',
        price: 600,
        inCart: 0
    },
    {
        name: 'CB_5',
        tag: 'CB_5_Rs.1300',
        type: 'Chocolate Bouquet_CB',
        price: 1300,
        inCart: 0
    },
    {
        name: 'CB_6',
        tag: 'CB_6_Rs.1600',
        type: 'Chocolate Bouquet_CB',
        price: 1600,
        inCart: 0
    },
    {
        name: 'CB_7',
        tag: 'CB_7_Rs.1600',
        type: 'Chocolate Bouquet_CB',
        price: 1600,
        inCart: 0
    },
    {
        name: 'CB_8',
        tag: 'CB_8_Rs.1600',
        type: 'Chocolate Bouquet_CB',
        price: 1600,
        inCart: 0
    },
    {
        name: 'CB_9',
        tag: 'CB_9_Rs.1600',
        type: 'Chocolate Bouquet_CB',
        price: 1600,
        inCart: 0
    },
    {
        name: 'CB_10',
        tag: 'CB_10_Rs.1600',
        type: 'Chocolate Bouquet_CB',
        price: 1600,
        inCart: 0
    },
    {
        name: 'CB_11',
        tag: 'CB_11_Rs.1600',
        type: 'Chocolate Bouquet_CB',
        price: 1600,
        inCart: 0
    },
    {
        name: 'CB_12',
        tag: 'CB_12_Rs.1600',
        type: 'Chocolate Bouquet_CB',
        price: 1600,
        inCart: 0
    },
    {
        name: 'CB_13',
        tag: 'CB_13_Rs.1900',
        type: 'Chocolate Bouquet_CB',
        price: 1900,
        inCart: 0
    },
    {
        name: 'CB_14',
        tag: 'CB_14_Rs.2100',
        type: 'Chocolate Bouquet_CB',
        price: 2100,
        inCart: 0
    },
    {
        name: 'CB_15',
        tag: 'CB_15_Rs.2100',
        type: 'Chocolate Bouquet_CB',
        price: 2100,
        inCart: 0
    },
    {
        name: 'CB_16',
        tag: 'CB_16_2100',
        type: 'Chocolate Bouquet_CB',
        price: 2100,
        inCart: 0
    },
    {
        name: 'CB_17',
        tag: 'CB_17_Rs.2100',
        type: 'Chocolate Bouquet_CB',
        price: 2100,
        inCart: 0
    },
    {
        name: 'CB_18',
        tag: 'CB_18_Rs.2100',
        type: 'Chocolate Bouquet_CB',
        price: 2100,
        inCart: 0
    },
    {
        name: 'CB_19',
        tag: 'CB_19_Rs.2600',
        type: 'Chocolate Bouquet_CB',
        price: 2600,
        inCart: 0
    },
    {
        name: 'CB_20',
        tag: 'CB_20_Rs.2600',
        type: 'Chocolate Bouquet_CB',
        price: 2600,
        inCart: 0
    },
    {
        name: 'CB_21',
        tag: 'CB_21_Rs.2900',
        type: 'Chocolate Bouquet_CB',
        price: 2900,
        inCart: 0
    },
    {
        name: 'CB_22',
        tag: 'CB_22_Rs.2900',
        type: 'Chocolate Bouquet_CB',
        price: 2900,
        inCart: 0
    },
    {
        name: 'CB_23',
        tag: 'CB_23_Rs.3100',
        type: 'Chocolate Bouquet_CB',
        price: 3100,
        inCart: 0
    },
    {
        name: 'CB_24',
        tag: 'CB_24_Rs.3100',
        type: 'Chocolate Bouquet_CB',
        price: 3100,
        inCart: 0
    },
    {
        name: 'CB_25',
        tag: 'CB_25_Rs.3600',
        type: 'Chocolate Bouquet_CB',
        price: 3600,
        inCart: 0
    },
    {
        name: 'CB_26',
        tag: 'CB_26_Rs.6000',
        type: 'Chocolate Bouquet_CB',
        price: 6000,
        inCart: 0
    }
];

let _6floral=[
    {
        name: 'FJ_1',
        tag: 'FJ_1',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_2',
        tag: 'FJ_2',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_3',
        tag: 'FJ_3',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_4',
        tag: 'FJ_4',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_5',
        tag: 'FJ_5',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_6',
        tag: 'FJ_6',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_7',
        tag: 'FJ_7',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_8',
        tag: 'FJ_8',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_9',
        tag: 'FJ_9',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_10',
        tag: 'FJ_10',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_11',
        tag: 'FJ_11',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_12',
        tag: 'FJ_12',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_13',
        tag: 'FJ_13',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_14',
        tag: 'FJ_14',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_15',
        tag: 'FJ_15',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_16',
        tag: 'FJ_16',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_17',
        tag: 'FJ_17',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_18',
        tag: 'FJ_18',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_19',
        tag: 'FJ_19',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_20',
        tag: 'FJ_20',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_21',
        tag: 'FJ_21',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_22',
        tag: 'FJ_22',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_23',
        tag: 'FJ_23',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_24',
        tag: 'FJ_24',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_25',
        tag: 'FJ_25',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_26',
        tag: 'FJ_26',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_27',
        tag: 'FJ_27',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_28',
        tag: 'FJ_28',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_29',
        tag: 'FJ_29',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_30',
        tag: 'FJ_30',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_31',
        tag: 'FJ_31',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_32',
        tag: 'FJ_32',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_33',
        tag: 'FJ_33',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_34',
        tag: 'FJ_34',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_35',
        tag: 'FJ_35',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_36',
        tag: 'FJ_36',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_37',
        tag: 'FJ_37',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_38',
        tag: 'FJ_38',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_39',
        tag: 'FJ_39',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_40',
        tag: 'FJ_40',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_41',
        tag: 'FJ_41',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_42',
        tag: 'FJ_42',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'FJ_43',
        tag: 'FJ_43',
        type:'Floral Jewellery_FJ',
        price: 0,
        inCart: 0
    },


];

let _7gajra=[
    {
        name: 'GJ_1',
        tag: 'GJ_1',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_2',
        tag: 'GJ_2',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_3',
        tag: 'GJ_3',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_4',
        tag: 'GJ_4',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_5',
        tag: 'GJ_5',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_6',
        tag: 'GJ_6',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_7',
        tag: 'GJ_7',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_8',
        tag: 'GJ_8',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_9',
        tag: 'GJ_9',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    // {
    //     name: 'GJ_10',
    //     tag: 'GJ_10',
    //     price: 0,
    //     inCart: 0
    // },
    {
        name: 'GJ_11',
        tag: 'GJ_11',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_12',
        tag: 'GJ_12',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_13',
        tag: 'GJ_13',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_14',
        tag: 'GJ_14',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_15',
        tag: 'GJ_15',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_16',
        tag: 'GJ_16',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_17',
        tag: 'GJ_17',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_18',
        tag: 'GJ_18',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_19',
        tag: 'GJ_19',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_20',
        tag: 'GJ_20',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_21',
        tag: 'GJ_21',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_22',
        tag: 'GJ_22',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_23',
        tag: 'GJ_23',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_24',
        tag: 'GJ_24',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_25',
        tag: 'GJ_25',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_26',
        tag: 'GJ_26',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_27',
        tag: 'GJ_27',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_28',
        tag: 'GJ_28',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_29',
        tag: 'GJ_29',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_30',
        tag: 'GJ_30',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_31',
        tag: 'GJ_31',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_32',
        tag: 'GJ_32',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_33',
        tag: 'GJ_33',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_34',
        tag: 'GJ_34',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_35',
        tag: 'GJ_35',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_36',
        tag: 'GJ_36',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_37',
        tag: 'GJ_37',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    // {
    //     name: 'GJ_38',
    //     tag: 'GJ_38',
    //     price: 0,
    //     inCart: 0
    // },
    {
        name: 'GJ_39',
        tag: 'GJ_39',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    {
        name: 'GJ_40',
        tag: 'GJ_40',
        type:'Gajra_GJ',
        price: 0,
        inCart: 0
    },
    
        {
            name: 'GJ_41',
            tag: 'GJ_41',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_42',
            tag: 'GJ_42',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_43',
            tag: 'GJ_43',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_44',
            tag: 'GJ_44',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_45',
            tag: 'GJ_45',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_46',
            tag: 'GJ_46',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_47',
            tag: 'GJ_47',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_48',
            tag: 'GJ_48',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_49',
            tag: 'GJ_49',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_50',
            tag: 'GJ_50',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_51',
            tag: 'GJ_51',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_52',
            tag: 'GJ_52',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_53',
            tag: 'GJ_53',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_54',
            tag: 'GJ_54',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_55',
            tag: 'GJ_55',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_56',
            tag: 'GJ_56',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_57',
            tag: 'GJ_57',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_58',
            tag: 'GJ_58',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_59',
            tag: 'GJ_59',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_60',
            tag: 'GJ_60',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_61',
            tag: 'GJ_61',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_62',
            tag: 'GJ_62',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_63',
            tag: 'GJ_63',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_64',
            tag: 'GJ_64',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_65',
            tag: 'GJ_65',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_66',
            tag: 'GJ_66',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_67',
            tag: 'GJ_67',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        // {
        //     name: 'GJ_68',
        //     tag: 'GJ_68',
        //     price: 0,
        //     inCart: 0
        // },
        {
            name: 'GJ_69',
            tag: 'GJ_69',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_70',
            tag: 'GJ_70',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_71',
            tag: 'GJ_71',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_72',
            tag: 'GJ_72',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_73',
            tag: 'GJ_73',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_74',
            tag: 'GJ_74',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_75',
            tag: 'GJ_75',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_76',
            tag: 'GJ_76',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_77',
            tag: 'GJ_77',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_78',
            tag: 'GJ_78',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        // {
        //     name: 'GJ_79',
        //     tag: 'GJ_79',
        //     price: 0,
        //     inCart: 0
        // },
        {
            name: 'GJ_80',
            tag: 'GJ_80_Rs.',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
        {
            name: 'GJ_81',
            tag: 'GJJ81',
            type:'Gajra_GJ',
            price: 0,
            inCart: 0
        },
];


let _8garland=[
    {
        name: 'G_1',
        tag: 'G_1',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_2',
        tag: 'G_2',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_3',
        tag: 'G_3',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_4',
        tag: 'G_4',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_5',
        tag: 'G_5',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_6',
        tag: 'G_6',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_7',
        tag: 'G_7',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_8',
        tag: 'G_8',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_9',
        tag: 'G_9',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_10',
        tag: 'G_10',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_11',
        tag: 'G_11',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_12',
        tag: 'G_12',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_13',
        tag: 'G_13',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_14',
        tag: 'G_14',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_15',
        tag: 'G_15',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_16',
        tag: 'G_16',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_17',
        tag: 'G_17',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_18',
        tag: 'G_18',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_19',
        tag: 'G_19',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_20',
        tag: 'G_21',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_22',
        tag: 'G_22',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_23',
        tag: 'G_23',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_24',
        tag: 'G_24',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_25',
        tag: 'G_25',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_26',
        tag: 'G_26',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_27',
        tag: 'G_27',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_28',
        tag: 'G_28',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_29',
        tag: 'G_29',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    // {
    //     name: 'G_30',
    //     tag: 'G_30',
    //     price: 0,
    //     inCart: 0
    // },
    {
        name: 'G_31',
        tag: 'G_31',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_32',
        tag: 'G_32',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_33',
        tag: 'G_33',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_34',
        tag: 'G_34',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_35',
        tag: 'G_35',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_36',
        tag: 'G_36',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_37',
        tag: 'G_37',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_38',
        tag: 'G_38',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_39',
        tag: 'G_39',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_40',
        tag: 'G_40',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_41',
        tag: 'G_41',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_42',
        tag: 'G_42',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_43',
        tag: 'G_43',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_44',
        tag: 'G_44',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_45',
        tag: 'G_45',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_46',
        tag: 'G_46',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_47',
        tag: 'G_47',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_48',
        tag: 'G_48',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_49',
        tag: 'G_49',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_50',
        tag: 'G_50',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_51',
        tag: 'G_51',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_52',
        tag: 'G_52',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_53',
        tag: 'G_53',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_54',
        tag: 'G_54',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_55',
        tag: 'G_55',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_56',
        tag: 'G_56',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_57',
        tag: 'G_57',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_58',
        tag: 'G_58',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_59',
        tag: 'G_59',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_60',
        tag: 'G_60',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_61',
        tag: 'G_61',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_62',
        tag: 'G_62',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_63',
        tag: 'G_63',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_64',
        tag: 'G_64',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_65',
        tag: 'G_65',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_66',
        tag: 'G_66',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_67',
        tag: 'G_67',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_68',
        tag: 'G_68',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_69',
        tag: 'G_69',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_70',
        tag: 'G_70',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_71',
        tag: 'G_71',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_72',
        tag: 'G_72',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_73',
        tag: 'G_73',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_74',
        tag: 'G_74',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_75',
        tag: 'G_75',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_76',
        tag: 'G_76',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_77',
        tag: 'G_77',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_78',
        tag: 'G_78',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_79',
        tag: 'G_79',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_80',
        tag: 'G_80',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_81',
        tag: 'G_81',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },
    {
        name: 'G_82',
        tag: 'G_82',
        type:'Garlands_G',
        price: 0,
        inCart: 0
    },

];   

let _9homewarming=[
    {
        name: 'HW_1',
        tag: 'HW_1',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_2',
        tag: 'HW_2',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_3',
        tag: 'HW_3',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_4',
        tag: 'HW_4',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_5',
        tag: 'HW_5',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_6',
        tag: 'HW_6',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_7',
        tag: 'HW_7',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_8',
        tag: 'HW_8',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_9',
        tag: 'HW_9',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_10',
        tag: 'HW_10',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_11',
        tag: 'HW_11',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_12',
        tag: 'HW_12',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_13',
        tag: 'HW_13',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_14',
        tag: 'HW_14',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_15',
        tag: 'HW_15',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_16',
        tag: 'HW_16',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_17',
        tag: 'HW_17',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_18',
        tag: 'HW_18',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },
    {
        name: 'HW_19',
        tag: 'HW_19',
        type: 'House Warming_HW',
        price: 0,
        inCart: 0
    },

];
let _10function=[
    {
        name: 'PU_1',
        tag: 'PU_1',
        price: 0,
        type:'Puberty Function,Nalangu and Baby shower_PU',
        inCart: 0
    },
    {
        name: 'PU_2',
        tag: 'PU_2',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_3',
        tag: 'PU_3',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_4',
        tag: 'PU_4',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_5',
        tag: 'PU_5',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_6',
        tag: 'PU_6',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_7',
        tag: 'PU_7',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_8',
        tag: 'PU_8',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_9',
        tag: 'PU_9',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_10',
        tag: 'PU_10',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_11',
        tag: 'PU_11',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_12',
        tag: 'PU_12',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    },
    {
        name: 'PU_13',
        tag: 'PU_13',
        type:'Puberty Function,Nalangu and Baby shower_PU',
        price: 0,
        inCart: 0
    }
];

let _11trousseau=[
    {
        name: 'TP_1',
        tag: 'TP_1',
        type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_2',
        tag: 'TP_2',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_3',
        tag: 'TP_3',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_4',
        tag: 'TP_4',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_5',
        tag: 'TP_5',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_6',
        tag: 'TP_6',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_7',
        tag: 'TP_7',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_8',
        tag: 'TP_8',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_9',
        tag: 'TP_9',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_10',
        tag: 'TP_10',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_11',
        tag: 'TP_11',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_12',
        tag: 'TP_12',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_13',
        tag: 'TP_13',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_14',
        tag: 'TP_14',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_15',
        tag: 'TP_15',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_16',
        tag: 'TP_16',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_17',
        tag: 'TP_17',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_18',
        tag: 'TP_18',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_19',
        tag: 'TP_19',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_20',
        tag: 'TP_20',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_21',
        tag: 'TP_21',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_22',
        tag: 'TP_22',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_23',
        tag: 'TP_23',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_24',
        tag: 'TP_24',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_25',
        tag: 'TP_25',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_26',
        tag: 'TP_26',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_27',
        tag: 'TP_27',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_28',
        tag: 'TP_28',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_29',
        tag: 'TP_29',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_30',
        tag: 'TP_30',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_31',
        tag: 'TP_31',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_32',
        tag: 'TP_32',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_33',
        tag: 'TP_33',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_34',
        tag: 'TP_34',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_35',
        tag: 'TP_35',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_36',
        tag: 'TP_36',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_37',
        tag: 'TP_37',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_38',
        tag: 'TP_38',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_39',
        tag: 'TP_39',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_40',
        tag: 'TP_40',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_41',
        tag: 'TP_41',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_42',
        tag: 'TP_42',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_43',
        tag: 'TP_43',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_44',
        tag: 'TP_44',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_45',
        tag: 'TP_45',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_46',
        tag: 'TP_46',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_47',
        tag: 'TP_47',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_48',
        tag: 'TP_48',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_49',
        tag: 'TP_49',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_50',
        tag: 'TP_50',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_51',
        tag: 'TP_51',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_52',
        tag: 'TP_52',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_53',
        tag: 'TP_53',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_54',
        tag: 'TP_54',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_55',
        tag: 'TP_55',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_56',
        tag: 'TP_56',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_57',
        tag: 'TP_57',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_58',
        tag: 'TP_58',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_59',
        tag: 'TP_59',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_60',
        tag: 'TP_60',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_61',
        tag: 'TP_61',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_62',
        tag: 'TP_62',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_63',
        tag: 'TP_63',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_64',
        tag: 'TP_64',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_65',
        tag: 'TP_65',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_66',
        tag: 'TP_66',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_67',
        tag: 'TP_67',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_68',
        tag: 'TP_68',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_69',
        tag: 'TP_69',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_70',
        tag: 'TP_70',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_71',
        tag: 'TP_71',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
    {
        name: 'TP_72',
        tag: 'TP_72',
         type:'Trousseau Packing_TP',
        price: 0,
        inCart: 0
    },
   
];

let _12wreath=[
    {
        name: 'WR_1',
        tag: 'WR_1_Rs.',
        type:'wreath_WR',
        price: 0,
        inCart: 0
    },
    {
        name: 'WR_2',
        tag: 'WR_2_Rs.',
        type:'wreath_WR',
        price: 0,
        inCart: 0
    },
    {
        name: 'WR_3',
        tag: 'WR_3_Rs.',
        type:'wreath_WR',
        price: 0,
        inCart: 0
    },
    {
        name: 'WR_4',
        tag: 'WR_4_Rs.',
        type:'wreath_WR',
        price: 0,
        inCart: 0
    },
    {
        name: 'WR_5',
        tag: 'WR_5_Rs.',
        type:'wreath_WR',
        price: 0,
        inCart: 0
    },
    {
        name: 'WR_6',
        tag: 'WR_6_Rs.',
        type:'wreath_WR',
        price: 0,
        inCart: 0
    },
];

let _13wedding=[
    {
        name: 'RE_1',
        tag: 'RE_1',
        price: 0,
        type:'Reception and Wedding Backdrop_RE',
        inCart: 0
    },
    {
        name: 'RE_2',
        tag: 'RE_2',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_3',
        tag: 'RE_3',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_4',
        tag: 'RE_4',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_5',
        tag: 'RE_5',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_6',
        tag: 'RE_6',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_7',
        tag: 'RE_7',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_8',
        tag: 'RE_8',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_9',
        tag: 'RE_9',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_10',
        tag: 'RE_10',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_11',
        tag: 'RE_11',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_12',
        tag: 'RE_12',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_13',
        tag: 'RE_13',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_14',
        tag: 'RE_14',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_15',
        tag: 'RE_15',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
    {
        name: 'RE_16',
        tag: 'RE_16',
        type:'Reception and Wedding Backdrop_RE',
        price: 0,
        inCart: 0
    },
];

for (let i=0; i< btn1.length; i++) {
    btn1[i].addEventListener('click',() => {
        
       
        cartNumbers(1);
        setItems(_1bouquet[i]);
        totalCost(_1bouquet[i],1);
        
    })
}

for (let i=0; i< btn2.length; i++) {
    btn2[i].addEventListener('click',() => {
       
       
        cartNumbers(1);
        setItems(_2bridal[i]);
        totalCost(_2bridal[i],1);
        
    })
}

for (let i=0; i< btn3.length; i++) {
    btn3[i].addEventListener('click',() => {
        
       
        cartNumbers(1);
        setItems(_3Engagement[i]);
        totalCost(_3Engagement[i],1);
        
    })
}

for (let i=0; i< btn4.length; i++) {
    btn4[i].addEventListener('click',() => {
       
        cartNumbers(1);
        setItems(_4cardecor[i]);
        totalCost(_4cardecor[i],1);
        
    })
}

for (let i=0; i< btn5.length; i++) {
    btn5[i].addEventListener('click',() => {
      
       
        cartNumbers(1);
        setItems(_5Chocolate[i]);
        totalCost(_5Chocolate[i],1);
        
    })
}

for (let i=0; i< btn6.length; i++) {
    btn6[i].addEventListener('click',() => {
       
       
        cartNumbers(1);
        setItems(_6floral[i]);
        totalCost(_6floral[i],1);
        
    })
}

for (let i=0; i< btn7.length; i++) {
    btn7[i].addEventListener('click',() => {
       
       
        cartNumbers(1);
        setItems(_7gajra[i]);
        totalCost(_7gajra[i],1);
        
    })
}

for (let i=0; i< btn8.length; i++) {
    btn8[i].addEventListener('click',() => {
      
        cartNumbers(1);
        setItems(_8garland[i]);
        totalCost(_8garland[i],1);
        
    })
}

for (let i=0; i< btn9.length; i++) {
    btn9[i].addEventListener('click',() => {
        
       
        cartNumbers(1);
        setItems(_9homewarming[i]);
        totalCost(_9homewarming[i],1);
        
    })
}

for (let i=0; i< btn10.length; i++) {
    btn10[i].addEventListener('click',() => {
       
        cartNumbers(1);
        setItems(_10function[i]);
        totalCost(_10function[i],1);
        
    })
}

for (let i=0; i< btn11.length; i++) {
    btn11[i].addEventListener('click',() => {
       
       
        cartNumbers(1);
        setItems(_11trousseau[i]);
        totalCost(_11trousseau[i],1);
        
    })
}

for (let i=0; i< btn12.length; i++) {
    btn12[i].addEventListener('click',() => {
       
       
        cartNumbers(1);
        setItems(_12wreath[i]);
        totalCost(_12wreath[i],1);
        
    })
}

for (let i=0; i< btn13.length; i++) {
    btn13[i].addEventListener('click',() => {
       
       
        cartNumbers(1);
        setItems(_13wedding[i]);
        totalCost(_13wedding[i],1);
        
    })
}


function onLoadCartNumbers() {
    let productnumbers = localStorage.getItem('cartNumbers');

    if( productnumbers ) {
        document.querySelector('.cart span').textContent = productnumbers;
    }
}

function cartNumbers(i) 
{
    
    let productnumber = localStorage.getItem("cartNumbers");
    
    productnumber = parseInt(productnumber);

    if(i==1){
        if( productnumber ) {
        localStorage.setItem('cartNumbers', productnumber + 1);
        document.querySelector('.cart span').textContent = productnumber + 1;
    } else {
        localStorage.setItem('cartNumbers', 1 );
        document.querySelector('.cart span').textContent = 1;
    }
    }
    else{
        if( productnumber ) {
            localStorage.setItem('cartNumbers', productnumber - 1);
            document.querySelector('.cart span').textContent = productnumber - 1;
        } else {
            localStorage.setItem('cartNumbers', 0 );
            document.querySelector('.cart span').textContent = 0;
        }
        }

}
    


function setItems(products){
    
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let pro={
        name: products.name,
        tag: products.tag,
        type: products.type,
        price:products.price,
        inCart: products.inCart
    } 
    if(cartItems==null){
        cartItems=[];
        pro.inCart=1;
        cartItems[0]=pro;
        
    }
    else{
        found=0;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].tag == pro.tag) {
                found=1;
                cartItems[i].inCart+= 1;
            }
        }
        if(found==0){
            pro.inCart=1;
        cartItems.push(pro);
        
        }   
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}



function totalCost(products, i) {
    
    if(i==1)
    {
        let cartCost = localStorage.getItem('totalCost');
        cartCost = parseInt( cartCost );

        if( cartCost ){
           
            localStorage.setItem("totalCost" , cartCost + products.price);
        } else {
            localStorage.setItem("totalCost", products.price);
        }
    }
    else{
        let cartCost = localStorage.getItem('totalCost');
        cartCost = parseInt( cartCost );

        if( cartCost ){
            
            localStorage.setItem("totalCost" , cartCost - products.price);
        } else {
            localStorage.setItem("totalCost", 0);
        }
    }
    

}

function displayCart(i) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);                         
    let cartCost = localStorage.getItem('totalCost');
    


    if(i==1){
        let productContainer = document.querySelector(".summary_card");
        if( cartItems && productContainer ) {
            productContainer.innerHTML = '';
            Object.values( cartItems ).map(item => {
               
                productContainer.innerHTML += `
                            <div class="card_item">
                                <div class="product_img">
                                    <img src="images/${item.type}/${item.tag}.jpg" alt="" />
                                </div>
                                <div class="product_info">
                                    <h5>${item.name}</h5>
                                   
                                    <div class="product_rate_info">
                                        <h1>Rs${item.price}</h1>
                                        <button class="button-minus" data-id=${item.tag}>-</button>
                                        <span class="pqt">${item.inCart}</span>
                                        <button class="button-plus" data-id=${item.tag}>+</button>
                                    </div>
                                </div>
                            </div>
                        
                            
                            <div class="order_price">
                                <p>Total</p>
                                <h1>Rs${item.inCart * item.price}.00</h1>
                            </div>
                `;
            });
    
            productContainer.innerHTML +=`
                <div class="basketTotalContainer">
                    <h1 class="basketTotalTitle">
                        Basket Total
                    </h1>
                    <h1 class="basketTotal">
                        Rs${cartCost}.00
                    </h1>
                </div>`
        }          
    }
              
    else if(i==0){
        let productContainer = document.querySelector(".summary_card");
        if( cartItems && productContainer ) {
            productContainer.innerHTML = '';
           
                productContainer.innerHTML += `
                
                <h3 style="text-align: center;
                padding: 50% 0px;">Your cart is empty!! :(</h3>
                
                `
           
        }
    }
}

parentElement = document.querySelector(".productsincart");
parentElement.addEventListener('click', (e) => { 
    
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

   
    
	if (isPlusButton || isMinusButton) {
        
		for (let i = 0; i < cartItems.length; i++) {
            
			if (cartItems[i].tag == e.target.dataset.id) {
                
				if (isPlusButton) {
                    
					cartItems[i].inCart += 1;
                    cartNumbers(1);
                    totalCost(cartItems[i],1);
 
				}
				else if (isMinusButton) {
					cartItems[i].inCart -= 1;
                    cartNumbers(0);
                    totalCost(cartItems[i],0);
                    
				}

			}
			if (cartItems[i].inCart <= 0) {
				cartItems.splice(i, 1);
			}
		}


        let cartNumber = localStorage.getItem('cartNumbers');
    cartNumber = parseInt(cartNumber);
        if(cartNumber==0){
           
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
            displayCart(0);
        }
        
        else{
           
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
		    displayCart(1);

        }
        
	}
});


// function EnableDisableTB(){
//     console.log("Hello");
//     var others = document.getElementById("others");
//     var otherlan = document.getElementsByClassName("otherlan");
//     let signal = others.checked ? false : true;
//     console.log(signal)
//     for(i=0; i<otherlan.length; i++){
//     otherlan[i].disabled = signal;
//     otherlan[i].value="";
//     if (!otherlan[i].disabled) {
//         otherlan[i].focus();
//         }
//     }
// }





function open_modal(){
    
    var modal = document.getElementById("myModal");

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    var name = $('#First1').val();
    var address = $('#put1').val();
    var pincode = $('#pin1').val();
    var email = $('#email1').val();
    var phn = $('#phn1').val();
    var date = $('#Delivery').val();
    var deliverycharge=0;
    var total=0;
    
    let cartNumber=localStorage.getItem('cartNumbers');
    cartNumber=parseInt(cartNumber);

    console.log(cartNumber);
    
        if(cartNumber==0){
                alert("Oops!!! Your cart is empty :(");
                return;
            } 

            else if( name== '' || address=="" || pincode == "" || email== " " || phn== 0){
                
                alert("Oops!!! Please enter receiver details");
                return;
            }
            else if(date== 0){
                alert("Oops!!! Please enter delivery date");
                return;
            }
            else{
                
                modal.style.display = "block";

                if(pincode=="Erode"){
                    deliverycharge=50;
                }
                   
                else if(pincode=="Tiruchengode"||pincode=="Bhavani" || pincode=="Namakal" ){
                    deliverycharge=100;
                }

                else if(pincode=="Salem" || pincode=="Coimbatore"){
                    deliverycharge=200;
                }


                let cartCost = localStorage.getItem('totalCost');
                cartCost=parseInt(cartCost);
                total=deliverycharge+cartCost;
              
                let productContainer = document.querySelector(".modal-content");
                    if( cartItems && productContainer) {
                        productContainer.innerHTML = '';
                            productContainer.innerHTML += `
                            <div class="modal-header">
                                <img src="images/logo.jpg" class="brand-logo" alt="">
                                <h1>Paying to Nihas Flower Works</h1>
                                <span class="close" onclick="closebtn()">&times;</span>
                            </div>
                
                            <div class="model-body">
                                <div>
                                    <h1>Mode of payment - Gpay</h1>
                                </div>
                                <div class="Deliverycharges">
                                    <h1>
                                        Delivery Charges
                                    </h1>
                                    <h1 class="deliveryfee">
                                        Rs${deliverycharge}.00

                                    </h1>
                                </div>
                                <div class="modalBasketTotal">
                                    <h1>
                                        Basket Total
                                    </h1>
                                    <h1 class="basketTotal">
                                        Rs${cartCost}.00
                                    </h1>                    
                                </div>
                                <div class="Totalamt">
                                    <h1>
                                         Total
                                    </h1>
                                    <h1 class="Total">
                                        Rs${total}.00
                                    </h1>                    
                                </div>
                                
                            </div>
                            
                            <div class="modal-section">
                                <img src="images/qrcode.jpeg" class="qrcode" alt="">
                                <h1> Scan and Pay <h1>
                                
                                Rs${total}.00
                            </div>
                            <div class="proceed_payment">
                                <button id="myBtn1" onclick="sendmail1(${deliverycharge});confirm();clearcart();"><a href="shop.html">Click to Confirm</a></button>
                            </div>
                            `
            }
       
            }
        }
    




// ----------------close button inside modal window----------------

function closebtn(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

//----------------------------------------



function customer_mailbodycontent(fee){

    var name = $('#First').val();
    var address = $('#put').val();
    var pincode = $('#pin').val();
    var email = $('#email').val();
    var phn = $('#phn').val();

    var html = "<tr><td>NAME</td><td>"+name+"</td></tr>"+"<tr><td>ADDRESS</td><td>"+address+"</td></tr>"+"<tr><td>DISTRICT</td><td>"+pincode+"</td></tr>"
                +"<tr><td>EMAIL ID</td><td>"+email+"</td></tr>"+"<tr><td>PHONE NUMBER</td><td>"+phn+"</td></tr>";

    
    document.getElementById('senderdetails').innerHTML+=html;

    //////////////////////////////////////////////////////////////
    var name1= $('#First1').val();
    var email1=$('#email1').val();
    var phn1=$('#phn1').val();
    var address1=$('#put1').val();
    var pincode1= $('#pin1').val();

    var html1 = "<tr><td>NAME</td><td>"+name1+"</td></tr>"+"<tr><td>ADDRESS</td><td>"+address1+"</td></tr>"+"<tr><td>DISTRICT</td><td>"+pincode1+"</td></tr>"
                +"<tr><td>EMAIL ID</td><td>"+email1+"</td></tr>"+"<tr><td>PHONE NUMBER</td><td>"+phn1+"</td></tr>";
   
    
    document.getElementById('receiverdetails').innerHTML+=html1;


    /////////////////////////////////////
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    var basketTotalamount=localStorage.getItem("totalCost");
    basketTotalamount=JSON.parse(basketTotalamount);

    var orders="";
    var orders="";
    var name = $('#First').val();
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
       dd='0'+dd
     } 
     if(mm<10){
       mm='0'+mm
     } 
     var hour= today.getHours();
     var minn= today.getMinutes();
     var sec=today.getSeconds();
     if(hour<10){
       hour='0'+hour
     } 
     if(minn<10){
       minn='0'+minn
     } 
     if(sec<10){
       sec='0'+sec
     } 
     

     today=yyyy+mm+dd+hour+minn+sec;
    

    for(i=0;i<cartItems.length;i++){
        orders+="<tr><td>"+today+"</td><td>"+cartItems[i].name+"</td><td>"+cartItems[i].inCart+"</td><td>"+
                ((cartItems[i].price)*(cartItems[i].inCart));
    }



    //////////////////////////////////
    let cartCost = localStorage.getItem('totalCost');
                cartCost=parseInt(cartCost);
               var total=fee+cartCost;

    orders+="<tr><td>Basket Total ="+basketTotalamount+"</td></tr>"+"<tr><td>Delivery Charges ="+fee+"</td></tr>"+
                                    "<tr><td>Total ="+total+"</td></tr>";
    
    document.getElementById('orderdetails').innerHTML+=orders;

    var delivery=address1;
    document.getElementById('Deliveryaddress').innerHTML+=delivery;

    var date=$('#Delivery').val();
    var deliverydate=date;
    document.getElementById('Deliverydate').innerHTML+=deliverydate;

}

function mailbodycontent(fee){
    var name = $('#First').val();
    var address = $('#put').val();
    var pincode = $('#pin').val();
    var email = $('#email').val();
    var phn = $('#phn').val();

    var name1= $('#First1').val();
    var email1=$('#email1').val();
    var phn1=$('#phn1').val();
    var address1=$('#put1').val();
    var pincode1= $('#pin1').val();


    var tablecontent1= "<tr><td>"+name+"</td><td>"+address+"</td><td>"+pincode+"</td><td>"+email+"</td><td>"+phn+"</td><td>"+name1+"</td><td>"+address1+"</td><td>"+pincode1+"</td><td>"+email1+"</td><td>"+phn1+"</td></tr>";;
    document.getElementById('table1').innerHTML+=tablecontent1;

   

    // var tablecontent2= 
    // document.getElementById('table2').innerHTML+=tablecontent2;

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    var basketTotalamount=localStorage.getItem("totalCost");
    basketTotalamount=JSON.parse(basketTotalamount);

    var orders="";
    var name = $('#First').val();
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
       dd='0'+dd
     } 
     if(mm<10){
       mm='0'+mm
     } 
     var hour= today.getHours();
     var minn= today.getMinutes();
     var sec=today.getSeconds();
     if(hour<10){
       hour='0'+hour
     } 
     if(minn<10){
       minn='0'+minn
     } 
     if(sec<10){
       sec='0'+sec
     } 
     

     today=yyyy+mm+dd+hour+minn+sec;

    for(i=0;i<cartItems.length;i++){
        orders+="<tr><td>"+today+"</td><td>"+cartItems[i].name+"</td><td>"+cartItems[i].inCart+"</td><td>"+
                ((cartItems[i].price)*(cartItems[i].inCart));
    }
    document.getElementById('table3').innerHTML+=orders;


    var date=$('#Delivery').val();
    let cartCost = localStorage.getItem('totalCost');
    cartCost=parseInt(cartCost);
    total=fee+cartCost;
    var pricedetails="<tr><td>"+cartCost+"</td><td>"+fee+"</td><td>"+total+"</td><td>"+date+"</td></tr>";
    document.getElementById('table4').innerHTML+=pricedetails;

}

function sendmail1(fee){

     var name = $('#First').val();
     var today = new Date();
     var dd = today.getDate() + 1;
     var mm = today.getMonth()+1;
     var yyyy = today.getFullYear();
     if(dd<10){
        dd='0'+dd
      } 
      if(mm<10){
        mm='0'+mm
      } 
      var hour= today.getHours();
      var minn= today.getMinutes();
      var sec=today.getSeconds();
      if(hour<10){
        hour='0'+hour
      } 
      if(minn<10){
        minn='0'+minn
      } 
      if(sec<10){
        sec='0'+sec
      } 
      

      today=yyyy+mm+dd+hour+minn+sec;
     mailbodycontent(fee);
     var Body=document.getElementById('mailbodycontent').innerHTML;
    Email.send({
            Host : "smtp.gmail.com",
            Username :"nihasflowerwork@gmail.com",
            Password : "maandevdeja",
            To: 'nihasflowerwork@gmail.com',
            From: "nihasflowerwork@gmail.com",
            Subject: "WOHOOOO!AN ORDER HAS BEEN PLACED BY :"+name+"  ORDER NO- "+today,
            Body: Body
            
        })
       
        sendmail2(fee);
        return;
}
function confirm(){
        alert('Your order has been confirmed. Thank you :)');
        
}
function sendmail2(fee){
    var name = $('#First').val();
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
       dd='0'+dd
     } 
     if(mm<10){
       mm='0'+mm
     } 
     var hour= today.getHours();
     var minn= today.getMinutes();
     var sec=today.getSeconds();
     today=yyyy+mm+dd+hour+minn+sec;
    

    customer_mailbodycontent(fee);
    var Body =document.getElementById('customermailbody').innerHTML;
    
    Email.send({
        Host : "smtp.gmail.com",
        Username :"nihasflowerwork@gmail.com",
        Password : "maandevdeja",
        To: $('#email').val(),
        From: "nihasflowerwork@gmail.com",
        Subject: "Your order is confirmed!!!"+" ORDER NO- "+today,
        Body: Body
        
    })
    return;
}


function data_copy()
{

if(document.form1.copy[0].checked){
document.form1.First1.value=document.form1.First.value;
document.form1.Address1.value=document.form1.Address.value;
document.form1.Pincode1.value=document.form1.Pincode.value;
document.form1.Email1.value=document.form1.Email.value;
document.form1.Phone_number1.value=document.form1.Phone_number.value;

}else{
document.form1.First1.value="";
document.form1.Address1.value="";
document.form1.Pincode1.value="";
document.form1.Email1.value="";
document.form1.Phone_number1.value="";


}

}

function date()
{
var today = new Date();
var dd = today.getDate() + 1;
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("Delivery").setAttribute("min", today);
}

function clearcart(){
    localStorage.clear();
    window.location.reload();
}

onLoadCartNumbers();

let cart = localStorage.getItem("cartNumbers");
cart=parseInt(cart);
if(cart==0){
    displayCart(0);
}
else{
    displayCart(1);
}

