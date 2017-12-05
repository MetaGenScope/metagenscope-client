import {
  ScatterPlotDataType,
  CategoryType,
  ToolType,
  RecordType
} from '../../../components/ScatterPlot/index';

// tslint:disable-next-line
export function convertOldResults(results: any): ScatterPlotDataType {
  const categories: CategoryType[] = Object.entries(results.categories).map(([key, value]) => {
    return {
      name: key,
      values: value as string[],
    };
  });

  const tools: ToolType[] = Object.entries(results.tools).map(([key, value]) => {
    return {
      name: key,
      labels: {
        x: value.x_label,
        y: value.y_label,
      },
    };
  });

  // tslint:disable-next-line
  const records: RecordType[] = (results.data_records as any[]).map((record) => {
    const coordCategories = Object.keys(results.categories).map((category) => {
      return {
        name: category,
        value: record[category],
      };
    });

    const coords = Object.keys(results.tools).map((tool) => {
      return {
        tool,
        x: record[`${tool}_x`],
        y: record[`${tool}_y`],
      };
    });

    return {
      sampleId: record.SampleID,
      categories: coordCategories,
      coords,
    };
  });

  return {
    categories,
    tools,
    records,
  };
}

export const sampleSimilarity: object = {
  categories: {
    city: [
      'Montevideo',
      'Sacramento',
      'Seoul',
      'Oslo',
      'Hong_Kong',
      'Lisbon',
      'Mexico_City',
      'Shanghai'
    ]
  },
  tools: {
    metaphlan2: {
      x_label: 'metaphlan2 tsne x',
      y_label: 'metaphlan2 tsne y'
    },
    kraken: {
      x_label: 'kraken tsne x',
      y_label: 'kraken tsne y'
    }
  },
  data_records: [
    {
      SampleID: 'MetaSUB_Pilot__01_cZ__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.46118640628005614,
      metaphlan2_y: 0.15631940943278633,
      kraken_x: 0.2364852416971677,
      kraken_y: 0.06210990404248502
    },
    {
      SampleID: 'MetaSUB_Pilot__02_CAR__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.014732822485588083,
      metaphlan2_y: -0.13912287306618865,
      kraken_x: -0.032148799771948997,
      kraken_y: -0.16322878670609745
    },
    {
      SampleID: 'MetaSUB_Pilot__03_PE__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.05879187412484954,
      metaphlan2_y: -0.2616577515447991,
      kraken_x: -0.15875291473621853,
      kraken_y: -0.09419948915032159
    },
    {
      SampleID: 'MetaSUB_Pilot__04_SC__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.07053388490577094,
      metaphlan2_y: -0.2409485840773251,
      kraken_x: -0.06628916944784255,
      kraken_y: -0.11568418556080352
    },
    {
      SampleID: 'MetaSUB_Pilot__06_VDE__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.5671517050261656,
      metaphlan2_y: -0.3732222020917796,
      kraken_x: -0.18514827642925416,
      kraken_y: 0.8308492192403135
    },
    {
      SampleID: 'MetaSUB_Pilot__07_CSC1__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.7107801177656345,
      metaphlan2_y: 0.2118077491782587,
      kraken_x: 0.3899038321490494,
      kraken_y: 0.41531229505056166
    },
    {
      SampleID: 'MetaSUB_Pilot__16_PICH__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: -0.14927399654041443,
      metaphlan2_y: -0.017085474779386888,
      kraken_x: 0.03849428662393287,
      kraken_y: -0.2735056777767319
    },
    {
      SampleID: 'MetaSUB_Pilot__17_CSC3__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: -0.05501124327833107,
      metaphlan2_y: -0.0408267506095948,
      kraken_x: -0.5030217246225399,
      kraken_y: 0.3202382464514602
    },
    {
      SampleID: 'MetaSUB_Pilot__18_BUC__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.31832392015756567,
      metaphlan2_y: 0.06433257206676846,
      kraken_x: 0.10746967495666913,
      kraken_y: 0.0909655196268994
    },
    {
      SampleID: 'MetaSUB_Pilot__19_PA__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.08432891515498618,
      metaphlan2_y: -0.20738229938777136,
      kraken_x: -0.02759566675097594,
      kraken_y: -0.1320361145356604
    },
    {
      SampleID: 'MetaSUB_Pilot__1A__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.4460651909158868,
      metaphlan2_y: -0.292078305445016,
      kraken_x: -0.3269422956120058,
      kraken_y: -0.5540793133977971
    },
    {
      SampleID: 'MetaSUB_Pilot__1B__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.5181038684158825,
      metaphlan2_y: -0.3162800076257146,
      kraken_x: -0.38757149440075034,
      kraken_y: -0.5589124560592684
    },
    {
      SampleID: 'MetaSUB_Pilot__1C__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.4023589539822681,
      metaphlan2_y: -0.24918276652209206,
      kraken_x: -0.3318342551513053,
      kraken_y: -0.499327368815819
    },
    {
      SampleID: 'MetaSUB_Pilot__20_NSC__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.8110296997621189,
      metaphlan2_y: 0.3907940026833274,
      kraken_x: 0.2552539335739224,
      kraken_y: 0.2098319292123436
    },
    {
      SampleID: 'MetaSUB_Pilot__21_CSC2__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.5529665790944917,
      metaphlan2_y: 0.1755192976085808,
      kraken_x: -0.012686325663821729,
      kraken_y: 0.1815181522497419
    },
    {
      SampleID: 'MetaSUB_Pilot__22_CN__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.5142663203480249,
      metaphlan2_y: 0.13461350861978638,
      kraken_x: 0.20204158907484443,
      kraken_y: 0.17681784137240875
    },
    {
      SampleID: 'MetaSUB_Pilot__23_POCB__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.5652222019965725,
      metaphlan2_y: -0.3665205147229157,
      kraken_x: -0.18337745542393155,
      kraken_y: 0.8293248539250143
    },
    {
      SampleID: 'MetaSUB_Pilot__24_POC__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.5669033846643622,
      metaphlan2_y: -0.36151899203388077,
      kraken_x: -0.18333570602827637,
      kraken_y: 0.829691799243115
    },
    {
      SampleID: 'MetaSUB_Pilot__25_cA__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.7149089290981672,
      metaphlan2_y: 0.2884734622148664,
      kraken_x: 0.3087419569710372,
      kraken_y: 0.30619414664556444
    },
    {
      SampleID: 'MetaSUB_Pilot__26_PN__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.032061173168285245,
      metaphlan2_y: -0.3598251777255198,
      kraken_x: -0.209769967886508,
      kraken_y: -0.06494681247086799
    },
    {
      SampleID: 'MetaSUB_Pilot__27_RAM__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.313057805461833,
      metaphlan2_y: 0.05953439438799148,
      kraken_x: 0.02663925140413106,
      kraken_y: 0.132345659155688
    },
    {
      SampleID: 'MetaSUB_Pilot__2A__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.22134634539433876,
      metaphlan2_y: 0.03423064485834206,
      kraken_x: -0.2615146307226241,
      kraken_y: -0.5099559351142051
    },
    {
      SampleID: 'MetaSUB_Pilot__2B__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.46785068920618034,
      metaphlan2_y: -0.2545596058618215,
      kraken_x: -0.3066617414310878,
      kraken_y: -0.45755350696242425
    },
    {
      SampleID: 'MetaSUB_Pilot__2C__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.43978688284547973,
      metaphlan2_y: -0.21745500173177218,
      kraken_x: -0.25757306974068395,
      kraken_y: -0.4396436252252222
    },
    {
      SampleID: 'MetaSUB_Pilot__3A__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.2542417786040703,
      metaphlan2_y: -0.07205358195526725,
      kraken_x: -0.3025530151660672,
      kraken_y: -0.3222337348422858
    },
    {
      SampleID: 'MetaSUB_Pilot__3B__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.3115625438541915,
      metaphlan2_y: -0.09146432762999493,
      kraken_x: -0.2197103424888229,
      kraken_y: -0.39290195203749567
    },
    {
      SampleID: 'MetaSUB_Pilot__3C__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.3419080544056137,
      metaphlan2_y: -0.13802240045736044,
      kraken_x: -0.24567822651776106,
      kraken_y: -0.30879553506646046
    },
    {
      SampleID: 'MetaSUB_Pilot__4A__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.23832065084741388,
      metaphlan2_y: -0.12724193649277565,
      kraken_x: -0.38232627506589617,
      kraken_y: -0.3719114720789443
    },
    {
      SampleID: 'MetaSUB_Pilot__4B__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.35407147773165143,
      metaphlan2_y: -0.12628112012948164,
      kraken_x: -0.33089725870167963,
      kraken_y: -0.3774782331022909
    },
    {
      SampleID: 'MetaSUB_Pilot__4C__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.004503642343718623,
      metaphlan2_y: 0.07959113724738205,
      kraken_x: -0.24453419474023558,
      kraken_y: -0.2191668345557638
    },
    {
      SampleID: 'MetaSUB_Pilot__5A__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.3233426600287013,
      metaphlan2_y: -0.24116103983741935,
      kraken_x: -0.4556582931984793,
      kraken_y: -0.48391757804343527
    },
    {
      SampleID: 'MetaSUB_Pilot__5B__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.2991024433252991,
      metaphlan2_y: -0.20019367629181908,
      kraken_x: -0.4361100047448628,
      kraken_y: -0.4173927966647875
    },
    {
      SampleID: 'MetaSUB_Pilot__5C__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.22969783595698356,
      metaphlan2_y: -0.18261546500714654,
      kraken_x: -0.41172015814209517,
      kraken_y: -0.4790238729232666
    },
    {
      SampleID: 'MetaSUB_Pilot__6A__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.3607901148739617,
      metaphlan2_y: -0.20321810058840423,
      kraken_x: -0.3855628693731041,
      kraken_y: -0.43971624245236085
    },
    {
      SampleID: 'MetaSUB_Pilot__6B__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.2813743666442504,
      metaphlan2_y: -0.1323683719378345,
      kraken_x: -0.27525579298664565,
      kraken_y: -0.3902467117399651
    },
    {
      SampleID: 'MetaSUB_Pilot__6C__unknown__seq1end',
      city: 'Sacramento',
      metaphlan2_x: -0.5298629546610447,
      metaphlan2_y: -0.21941687030619564,
      kraken_x: -0.1982776160114238,
      kraken_y: -0.3507031954933072
    },
    {
      SampleID: 'MetaSUB_Pilot__8_LC___unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.08362071891276163,
      metaphlan2_y: -0.2522056701490681,
      kraken_x: -0.05971296766375258,
      kraken_y: -0.09111756110555065
    },
    {
      SampleID: 'MetaSUB_Pilot__9_MAL__unknown__seq1end',
      city: 'Montevideo',
      metaphlan2_x: 0.5643324933748024,
      metaphlan2_y: -0.3604356516072299,
      kraken_x: -0.1823736039768506,
      kraken_y: 0.828182059503917
    },
    {
      SampleID: 'MetaSUB_Pilot__Dorimcheon_1__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.3784616657158487,
      metaphlan2_y: 0.12009384616685358,
      kraken_x: -0.7678934753239208,
      kraken_y: 0.4472651292648884
    },
    {
      SampleID: 'MetaSUB_Pilot__Dorimcheon_2__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.4255606155621036,
      metaphlan2_y: 0.23211498126269825,
      kraken_x: -0.7486962971784338,
      kraken_y: 0.56947482530344
    },
    {
      SampleID: 'MetaSUB_Pilot__Dorimcheon_3__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.6047750843470698,
      metaphlan2_y: 0.16485342152767296,
      kraken_x: -0.825811035745412,
      kraken_y: 0.3441362129867683
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S01__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.7161457727419375,
      metaphlan2_y: 0.014654114077570867,
      kraken_x: -0.16404555912244312,
      kraken_y: -0.9004433374254635
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S02__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.5869323867307739,
      metaphlan2_y: 0.054271877269091405,
      kraken_x: -0.04796627415982994,
      kraken_y: -0.7923336151201438
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S03__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.7090427666790946,
      metaphlan2_y: -0.23660529428922383,
      kraken_x: -0.4894459269991316,
      kraken_y: -0.6981291474019089
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S04__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.8264462784997162,
      metaphlan2_y: -0.018621323057247795,
      kraken_x: -0.24481541128993423,
      kraken_y: -0.8777067864699534
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S05__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.6737924174337995,
      metaphlan2_y: 0.09690419169454907,
      kraken_x: -0.12763917774868377,
      kraken_y: -0.8242084282104294
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S06__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.6775510437506481,
      metaphlan2_y: 0.06291505181436895,
      kraken_x: -0.10421514386883375,
      kraken_y: -0.7909578892408063
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S13__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.7902479814293678,
      metaphlan2_y: 0.0019696225805720603,
      kraken_x: -0.1970676641492646,
      kraken_y: -0.879492645803585
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S14__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.8439714545662441,
      metaphlan2_y: -0.014140338765505047,
      kraken_x: -0.2733897844085359,
      kraken_y: -0.8946838981443122
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S15__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.6987176966373421,
      metaphlan2_y: -0.03604755319216302,
      kraken_x: -0.13386694163586071,
      kraken_y: -0.8890859888576933
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S16__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.7127493604764127,
      metaphlan2_y: -0.03533278736216787,
      kraken_x: -0.07993315442574475,
      kraken_y: -0.592173467798557
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S17__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.49787220087542194,
      metaphlan2_y: -0.10727010071836314,
      kraken_x: -0.07157257559563147,
      kraken_y: -0.5443213612679988
    },
    {
      SampleID: 'MetaSUB_Pilot__FFL_S18__unknown__seq1end',
      city: 'Oslo',
      metaphlan2_x: -0.5252677409497934,
      metaphlan2_y: -0.11652356862576967,
      kraken_x: -0.1123262372924641,
      kraken_y: -0.5239720808760876
    },
    {
      SampleID: 'MetaSUB_Pilot__Gangnam_1_1__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.7761689743204553,
      metaphlan2_y: 0.1203066807968938,
      kraken_x: -0.25639050389256623,
      kraken_y: -0.9475023258962696
    },
    {
      SampleID: 'MetaSUB_Pilot__Gangnam_1_2__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.5359617377792446,
      metaphlan2_y: 0.051339811071275776,
      kraken_x: -0.015131329720155216,
      kraken_y: -0.7167406056544302
    },
    {
      SampleID: 'MetaSUB_Pilot__Gangnam_1_3__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.5309131899286135,
      metaphlan2_y: 0.10457549395203959,
      kraken_x: -0.7950393670111605,
      kraken_y: 0.48700817379216715
    },
    {
      SampleID: 'MetaSUB_Pilot__Gangnam_2_1__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.8646845342081042,
      metaphlan2_y: 0.17029505875314244,
      kraken_x: -0.8574072612281639,
      kraken_y: 0.37378077084437855
    },
    {
      SampleID: 'MetaSUB_Pilot__Gangnam_2_2__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.664129534159996,
      metaphlan2_y: 0.11173604282825396,
      kraken_x: -0.8281542135085291,
      kraken_y: 0.3994385350933239
    },
    {
      SampleID: 'MetaSUB_Pilot__Gangnam_2_3__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.6467664722898413,
      metaphlan2_y: 0.25301139470019446,
      kraken_x: 0.1447704667566388,
      kraken_y: -0.6214546589398101
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1001AM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.5922256433454791,
      metaphlan2_y: -0.8708225153700463,
      kraken_x: -0.6771380967456415,
      kraken_y: 0.36065208260052206
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1001PM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.6494941630114333,
      metaphlan2_y: -0.8855616807673105,
      kraken_x: -0.6491610694482933,
      kraken_y: 0.32210765943593117
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1002AM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.6284466284809963,
      metaphlan2_y: -0.948087869937835,
      kraken_x: -0.6871912882117367,
      kraken_y: 0.4415323219095975
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1002PM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.6061797413426631,
      metaphlan2_y: -0.9552211135226922,
      kraken_x: -0.7333942262256556,
      kraken_y: 0.1638833259437881
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1003AM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.5082841840693152,
      metaphlan2_y: -0.9596509012124202,
      kraken_x: -0.6369477044062055,
      kraken_y: 0.4039067913471602
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1003PM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.5298816022298058,
      metaphlan2_y: -0.9084655213641849,
      kraken_x: -0.6598755060108175,
      kraken_y: 0.43884192136675376
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1004AM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.6773170254969199,
      metaphlan2_y: -0.8551547534857309,
      kraken_x: -0.5766396725071812,
      kraken_y: 0.2501736897771382
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1004PM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.70019306500611,
      metaphlan2_y: -0.8317208580763725,
      kraken_x: -0.528018269792662,
      kraken_y: 0.1652793150465362
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1005AM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.5718128006578626,
      metaphlan2_y: -0.9878117539570327,
      kraken_x: -0.721902633145785,
      kraken_y: 0.23617195644152178
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1005PM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.5123317946075574,
      metaphlan2_y: -0.955083256273887,
      kraken_x: -0.7109787097844968,
      kraken_y: 0.5263315172875607
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1006AM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.5543606151637079,
      metaphlan2_y: -0.9174422163222928,
      kraken_x: -0.6823521175152722,
      kraken_y: 0.34228422678454856
    },
    {
      SampleID: 'MetaSUB_Pilot__HKMTR1006PM__unknown__seq1end',
      city: 'Hong_Kong',
      metaphlan2_x: -0.5353926212029569,
      metaphlan2_y: -1,
      kraken_x: -0.7288425583739326,
      kraken_y: 0.22047743630720054
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_A01__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.42408840047807433,
      metaphlan2_y: -0.14254323215488918,
      kraken_x: 0.10702382627269433,
      kraken_y: -0.13850935038577486
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_A02__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.8125288767236213,
      metaphlan2_y: 0.7081896710069968,
      kraken_x: 0.5540654317496134,
      kraken_y: 0.11700127729043663
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_A03__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.42761630925509186,
      metaphlan2_y: 0.2978400146777083,
      kraken_x: 0.07716069879682455,
      kraken_y: 0.4956765668645748
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_A29__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7198206621189909,
      metaphlan2_y: 0.5343883484229013,
      kraken_x: 0.8554965883228163,
      kraken_y: 0.28821161931550804
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_A49__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7943656872252262,
      metaphlan2_y: 0.4407803926135834,
      kraken_x: 0.48595040926994043,
      kraken_y: 0.4169514473244434
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_A50__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7671188102076654,
      metaphlan2_y: 0.660891342458785,
      kraken_x: 0.8621672707313016,
      kraken_y: 0.28304083481383263
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_A51__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.5783430231170315,
      metaphlan2_y: 0.45811298431635183,
      kraken_x: 0.9315126467249144,
      kraken_y: 0.30041503108767603
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_B01__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.2310257029325923,
      metaphlan2_y: 0.74420956976849,
      kraken_x: 0.47113354835251425,
      kraken_y: 0.10055745399031607
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_B02__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.6499901621151396,
      metaphlan2_y: 0.5005652791407829,
      kraken_x: 0.5506656166630827,
      kraken_y: 0.33753511190365487
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_B03__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.8167319423870426,
      metaphlan2_y: 0.718646611969634,
      kraken_x: 0.6299022150033701,
      kraken_y: 0.293354049440132
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_B11__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7197458274960423,
      metaphlan2_y: 0.5192291703143591,
      kraken_x: 0.7582233181546216,
      kraken_y: 0.2993530483452116
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_B28__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.43574505231992194,
      metaphlan2_y: 0.340899745885929,
      kraken_x: 0.425977538392512,
      kraken_y: 0.37005596761216847
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_B29__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.29559123623115874,
      metaphlan2_y: 0.47960391832289107,
      kraken_x: 0.9582628142326461,
      kraken_y: 0.4207042429509781
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_B30__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7336861116287791,
      metaphlan2_y: 0.42155246916560346,
      kraken_x: 0.7259912601234242,
      kraken_y: 0.37332709129378827
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_C01__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.2980428275688913,
      metaphlan2_y: 0.47523184071523833,
      kraken_x: 0.848929248645294,
      kraken_y: 0.364054415566818
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_C02__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7182827187386116,
      metaphlan2_y: 0.5828769947265323,
      kraken_x: 1,
      kraken_y: 0.25701318520015115
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_C03__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7885977419917273,
      metaphlan2_y: 0.6822662047824183,
      kraken_x: 0.6894682820476702,
      kraken_y: 0.1845782686841793
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_C15__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.5596637779394267,
      metaphlan2_y: -0.04386642614886982,
      kraken_x: 0.3344297831366695,
      kraken_y: 0.40055992745769226
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_C32__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.91735564768703,
      metaphlan2_y: 0.3342959435405784,
      kraken_x: 0.8998940599751772,
      kraken_y: 0.2949485163551723
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_C34__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.8645617118695573,
      metaphlan2_y: 0.609076005196066,
      kraken_x: 0.5320559655860019,
      kraken_y: 0.31730387230384943
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_C35__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.88521946518165,
      metaphlan2_y: 0.6548079636222207,
      kraken_x: 0.6716721331883194,
      kraken_y: -0.03155369802390817
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_D01__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.6045822427747028,
      metaphlan2_y: 0.28078338503358186,
      kraken_x: 0.34465160832823405,
      kraken_y: 0.48476957262893744
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_D02__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.4526870369741221,
      metaphlan2_y: -0.10582751393648442,
      kraken_x: 0.35819831231253546,
      kraken_y: 0.15283013200596832
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_D03__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.9441876016345269,
      metaphlan2_y: 0.4325429773876516,
      kraken_x: 0.6668624914963827,
      kraken_y: -0.020394672891369592
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_D17__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.669778884803668,
      metaphlan2_y: 0.04035741094588478,
      kraken_x: 0.2904491071972678,
      kraken_y: 0.14819629748971364
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_D34__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.531349517120788,
      metaphlan2_y: -0.053842876645713904,
      kraken_x: 0.3573327877645862,
      kraken_y: 0.3694557697505707
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_D35__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.7854624952734516,
      metaphlan2_y: 0.5919637535685814,
      kraken_x: 0.8699143514424483,
      kraken_y: 0.20728024334333137
    },
    {
      SampleID: 'MetaSUB_Pilot__Libson_D36__unknown__seq1end',
      city: 'Lisbon',
      metaphlan2_x: 0.6231740637472583,
      metaphlan2_y: 0.6108909871849533,
      kraken_x: 0.48245335176267645,
      kraken_y: 0.23471005013115784
    },
    {
      SampleID: 'MetaSUB_Pilot__MS031__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: 0.5587137882125607,
      metaphlan2_y: 0.34522298765086556,
      kraken_x: 0.041263725491868096,
      kraken_y: -0.4521870683065438
    },
    {
      SampleID: 'MetaSUB_Pilot__MS032__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: -0.5230375859726402,
      metaphlan2_y: 0.4263653843203373,
      kraken_x: 0.23866131168612295,
      kraken_y: -0.7101968000283229
    },
    {
      SampleID: 'MetaSUB_Pilot__MS033__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: 0.755434142671686,
      metaphlan2_y: 0.047298002248731805,
      kraken_x: 0.5262147238065077,
      kraken_y: 0.696190864335824
    },
    {
      SampleID: 'MetaSUB_Pilot__MS034__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: 0.6292327312848909,
      metaphlan2_y: 0.1506078417634999,
      kraken_x: 0.029981041822565287,
      kraken_y: 0.49327697244463936
    },
    {
      SampleID: 'MetaSUB_Pilot__MS035__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: -0.9182187426574325,
      metaphlan2_y: -0.14122093689363713,
      kraken_x: -0.06846754156272551,
      kraken_y: -1
    },
    {
      SampleID: 'MetaSUB_Pilot__MS036__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: 0.1203836411117836,
      metaphlan2_y: 0.750877298432209,
      kraken_x: 0.2607383632786354,
      kraken_y: 0.2606452236586735
    },
    {
      SampleID: 'MetaSUB_Pilot__MS037__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: -0.3900967778654553,
      metaphlan2_y: 0.29914643139773767,
      kraken_x: 0.1459626450815642,
      kraken_y: -0.4639737505874428
    },
    {
      SampleID: 'MetaSUB_Pilot__MS038__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: -0.9538431090444672,
      metaphlan2_y: 0.07738339226616028,
      kraken_x: 0.12133947600341609,
      kraken_y: -0.8020246331431702
    },
    {
      SampleID: 'MetaSUB_Pilot__MS039__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: 0.7364487417694336,
      metaphlan2_y: 0.6967756806137612,
      kraken_x: 0.5572088730566236,
      kraken_y: -0.04685466280130163
    },
    {
      SampleID: 'MetaSUB_Pilot__MS040__unknown__seq1end',
      city: 'Mexico_City',
      metaphlan2_x: 0.7417901683720545,
      metaphlan2_y: 0.04713059289950214,
      kraken_x: 0.526370464226296,
      kraken_y: 0.6965508263080497
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_001_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: 0.9160205085088322,
      metaphlan2_y: 0.10846989477868918,
      kraken_x: 0.49807291147113314,
      kraken_y: 0.5931903068433577
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_002_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: 0.7882577460062115,
      metaphlan2_y: 0.28311025782857246,
      kraken_x: -0.6075926243311492,
      kraken_y: 0.51356600647726
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_003_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: -0.4103764222512834,
      metaphlan2_y: 0.4413144680097212,
      kraken_x: -0.04894448732100119,
      kraken_y: 0.509464743216887
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_004_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: -0.20371638909100484,
      metaphlan2_y: -0.3669618696744961,
      kraken_x: -0.36276016989403936,
      kraken_y: -0.04980142014812805
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_005_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: 0.307685734227663,
      metaphlan2_y: -0.14352549830258196,
      kraken_x: -0.20543963801059317,
      kraken_y: 0.1335502646726
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_006_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: 0.9091361961887835,
      metaphlan2_y: 0.12530799540988605,
      kraken_x: 0.5003256374275004,
      kraken_y: 0.57641350024559
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_007_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: -0.2628936749959701,
      metaphlan2_y: 0.15199377849220308,
      kraken_x: -0.04208657754286213,
      kraken_y: 0.23931014728264996
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_008_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: 1,
      metaphlan2_y: 0.5124728224141896,
      kraken_x: 0.7009258593554762,
      kraken_y: -0.05289618350464185
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_009_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: 0.849048237912564,
      metaphlan2_y: 0.20666258202707577,
      kraken_x: 0.43478061825359,
      kraken_y: 0.5363685093163768
    },
    {
      SampleID: 'MetaSUB_Pilot__MS_010_Shanghai__unknown__seq1end',
      city: 'Shanghai',
      metaphlan2_x: 0.040548153916742664,
      metaphlan2_y: 0.2893447396829243,
      kraken_x: -0.04258982511370438,
      kraken_y: 0.5082958548695529
    },
    {
      SampleID: 'MetaSUB_Pilot__Nataepyeng_1__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.5855600906324621,
      metaphlan2_y: 0.34014998755330517,
      kraken_x: 0.2126701014182644,
      kraken_y: -0.5605150890783167
    },
    {
      SampleID: 'MetaSUB_Pilot__Nataepyeng_2__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.5845501404786897,
      metaphlan2_y: 0.3336815305096481,
      kraken_x: 0.20218729224530102,
      kraken_y: -0.5842899027311526
    },
    {
      SampleID: 'MetaSUB_Pilot__Nataepyeng_3__unknown__seq1end',
      city: 'Seoul',
      metaphlan2_x: -0.5777906279659939,
      metaphlan2_y: 0.2940439805282042,
      kraken_x: 0.19327704415741848,
      kraken_y: -0.5847419298804566
    }
  ]
};
