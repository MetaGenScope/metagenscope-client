import { SampleTaxonomyType } from '..//models/queryResult';

export const sampleTaxonomyData: SampleTaxonomyType = {
  metaphlan2: {
    name: 'root',
    children: [
      {
        name: 'k__Bacteria',
        children: [
          {
            name: 'p__Actinobacteria',
            children: [
              {
                name: 'c__Actinobacteria',
                children: [
                  {
                    name: 'o__Actinomycetales',
                    children: [
                      {
                        name: 'f__Propionibacteriaceae',
                        children: [
                          {
                            name: 'g__Propionibacterium',
                            children: [
                              {
                                name: 's__Propionibacterium_acnes',
                                children: [
                                  {
                                    name: 't__Propionibacterium_acnes_unclassified',
                                    children: [],
                                    size: 6.94468,
                                    parent: 's__Propionibacterium_acnes',
                                  },
                                ],
                                size: 6.94468,
                                parent: 'g__Propionibacterium',
                              },
                            ],
                            size: 6.94468,
                            parent: 'f__Propionibacteriaceae',
                          },
                          {
                            name: 'g__Propionibacteriaceae_unclassified',
                            children: [],
                            size: 3.56773,
                            parent: 'f__Propionibacteriaceae',
                          },
                        ],
                        size: 6.94468,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Corynebacteriaceae',
                        children: [
                          {
                            name: 'g__Corynebacterium',
                            children: [
                              {
                                name: 's__Corynebacterium_propinquum',
                                children: [
                                  {
                                    name: 't__GCF_000375525',
                                    children: [],
                                    size: 8.56188,
                                    parent: 's__Corynebacterium_propinquum',
                                  },
                                ],
                                size: 8.56188,
                                parent: 'g__Corynebacterium',
                              },
                            ],
                            size: 8.56188,
                            parent: 'f__Corynebacteriaceae',
                          },
                        ],
                        size: 8.56188,
                        parent: 'o__Actinomycetales',
                      },
                    ],
                    size: 6.94468,
                    parent: 'c__Actinobacteria',
                  },
                ],
                size: 6.94468,
                parent: 'p__Actinobacteria',
              },
            ],
            size: 6.94468,
            parent: 'k__Bacteria',
          },
        ],
        size: 6.94468,
        parent: 'root',
      },
      {
        name: 'k__Viruses',
        children: [
          {
            name: 'p__Viruses_noname',
            children: [
              {
                name: 'c__Viruses_noname',
                children: [
                  {
                    name: 'o__Caudovirales',
                    children: [
                      {
                        name: 'f__Siphoviridae',
                        children: [
                          {
                            name: 'g__Siphoviridae_noname',
                            children: [
                              {
                                name: 's__Lactococcus_phage_936_sensu_lato',
                                children: [
                                  {
                                    name: 't__PRJNA14087',
                                    children: [],
                                    size: 80.92571,
                                    parent: 's__Lactococcus_phage_936_sensu_lato',
                                  },
                                ],
                                size: 80.92571,
                                parent: 'g__Siphoviridae_noname',
                              },
                            ],
                            size: 80.92571,
                            parent: 'f__Siphoviridae',
                          },
                        ],
                        size: 80.92571,
                        parent: 'o__Caudovirales',
                      },
                    ],
                    size: 80.92571,
                    parent: 'c__Viruses_noname',
                  },
                ],
                size: 80.92571,
                parent: 'p__Viruses_noname',
              },
            ],
            size: 80.92571,
            parent: 'k__Viruses',
          },
        ],
        size: 80.92571,
        parent: 'root',
      },
    ],
    size: 100,
    parent: undefined,
  },
  kraken: {
    name: 'root',
    children: [
      {
        name: 'd__Archaea',
        children: [
          {
            name: 'p__Euryarchaeota',
            children: [
              {
                name: 'c__Methanomicrobia',
                children: [
                  {
                    name: 'o__Methanomicrobiales',
                    children: [
                      {
                        name: 'f__Methanospirillaceae',
                        children: [
                          {
                            name: 'g__Methanospirillum',
                            children: [
                              {
                                name: 's__Methanospirillum_hungatei',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Methanospirillum',
                              },
                            ],
                            size: 0.082423243354626,
                            parent: 'f__Methanospirillaceae',
                          },
                        ],
                        size: 0.082423243354626,
                        parent: 'o__Methanomicrobiales',
                      },
                    ],
                    size: 0.082423243354626,
                    parent: 'c__Methanomicrobia',
                  },
                ],
                size: 0.082423243354626,
                parent: 'p__Euryarchaeota',
              },
              {
                name: 'c__Halobacteria',
                children: [
                  {
                    name: 'o__Halobacteriales',
                    children: [
                      {
                        name: 'f__Halobacteriaceae',
                        children: [
                          {
                            name: 'g__Halovivax',
                            children: [
                              {
                                name: 's__Halovivax_ruber',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Halovivax',
                              },
                            ],
                            size: 0.082423243354626,
                            parent: 'f__Halobacteriaceae',
                          },
                          {
                            name: 'g__Natrialba',
                            children: [
                              {
                                name: 's__Natrialba_magadii',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Natrialba',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Halobacteriaceae',
                          },
                        ],
                        size: 0.082423243354626,
                        parent: 'o__Halobacteriales',
                      },
                    ],
                    size: 0.082423243354626,
                    parent: 'c__Halobacteria',
                  },
                ],
                size: 0.082423243354626,
                parent: 'p__Euryarchaeota',
              },
              {
                name: 'c__Methanococci',
                children: [
                  {
                    name: 'o__Methanococcales',
                    children: [
                      {
                        name: 'f__Methanococcaceae',
                        children: [
                          {
                            name: 'g__Methanococcus',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'f__Methanococcaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Methanococcales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Methanococci',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Euryarchaeota',
              },
            ],
            size: 0.082423243354626,
            parent: 'd__Archaea',
          },
        ],
        size: 0.082423243354626,
        parent: 'root',
      },
      {
        name: 'd__Bacteria',
        children: [
          {
            name: 'p__Tenericutes',
            children: [
              {
                name: 'c__Mollicutes',
                children: [
                  {
                    name: 'o__Mycoplasmatales',
                    children: [
                      {
                        name: 'f__Mycoplasmataceae',
                        children: [
                          {
                            name: 'g__Mycoplasma',
                            children: [
                              {
                                name: 's__Mycoplasma_putrefaciens',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Mycoplasma',
                              },
                              {
                                name: 's__Mycoplasma_hyorhinis',
                                children: [],
                                size: 0.2678755409025345,
                                parent: 'g__Mycoplasma',
                              },
                              {
                                name: 's__Mycoplasma_hyopneumoniae',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Mycoplasma',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Mycoplasmataceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Mycoplasmatales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Mollicutes',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Tenericutes',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Spirochaetes',
            children: [
              {
                name: 'c__Spirochaetia',
                children: [
                  {
                    name: 'o__Spirochaetales',
                    children: [
                      {
                        name: 'f__Spirochaetaceae',
                        children: [
                          {
                            name: 'g__Sphaerochaeta',
                            children: [
                              {
                                name: 's__Sphaerochaeta_pleomorpha',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Sphaerochaeta',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Spirochaetaceae',
                          },
                          {
                            name: 'g__Treponema',
                            children: [
                              {
                                name: 's__Treponema_primitia',
                                children: [],
                                size: 0.247269730063878,
                                parent: 'g__Treponema',
                              },
                            ],
                            size: 0.247269730063878,
                            parent: 'f__Spirochaetaceae',
                          },
                          {
                            name: 'g__Borrelia',
                            children: [
                              {
                                name: 's__Borrelia_crocidurae',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Borrelia',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Spirochaetaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Spirochaetales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Spirochaetia',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Spirochaetes',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Actinobacteria',
            children: [
              {
                name: 'c__Actinobacteria',
                children: [
                  {
                    name: 'o__Bifidobacteriales',
                    children: [
                      {
                        name: 'f__Bifidobacteriaceae',
                        children: [
                          {
                            name: 'g__Gardnerella',
                            children: [
                              {
                                name: 's__Gardnerella_vaginalis',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Gardnerella',
                              },
                            ],
                            size: 0.10302905419328251,
                            parent: 'f__Bifidobacteriaceae',
                          },
                          {
                            name: 'g__Bifidobacterium',
                            children: [
                              {
                                name: 's__Bifidobacterium_thermophilum',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Bifidobacterium',
                              },
                              {
                                name: 's__Bifidobacterium_bifidum',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Bifidobacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Bifidobacteriaceae',
                          },
                        ],
                        size: 0.10302905419328251,
                        parent: 'o__Bifidobacteriales',
                      },
                    ],
                    size: 0.10302905419328251,
                    parent: 'c__Actinobacteria',
                  },
                  {
                    name: 'o__Actinomycetales',
                    children: [
                      {
                        name: 'f__Geodermatophilaceae',
                        children: [
                          {
                            name: 'g__Geodermatophilus',
                            children: [
                              {
                                name: 's__Geodermatophilus_obscurus',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Geodermatophilus',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Geodermatophilaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Streptomycetaceae',
                        children: [
                          {
                            name: 'g__Streptomyces',
                            children: [
                              {
                                name: 's__Streptomyces_bingchenggensis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Streptomyces',
                              },
                              {
                                name: 's__Streptomyces_collinus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Streptomyces',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Streptomycetaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Pseudonocardiaceae',
                        children: [
                          {
                            name: 'g__Actinosynnema',
                            children: [
                              {
                                name: 's__Actinosynnema_mirum',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Actinosynnema',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Pseudonocardiaceae',
                          },
                          {
                            name: 'g__Saccharothrix',
                            children: [
                              {
                                name: 's__Saccharothrix_espanaensis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Saccharothrix',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Pseudonocardiaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Nocardioidaceae',
                        children: [
                          {
                            name: 'g__Kribbella',
                            children: [
                              {
                                name: 's__Kribbella_flavida',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Kribbella',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Nocardioidaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Propionibacteriaceae',
                        children: [
                          {
                            name: 'g__Microlunatus',
                            children: [
                              {
                                name: 's__Microlunatus_phosphovorus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Microlunatus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Propionibacteriaceae',
                          },
                          {
                            name: 'g__Propionibacterium',
                            children: [
                              {
                                name: 's__Propionibacterium_avidum',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Propionibacterium',
                              },
                              {
                                name: 's__Propionibacterium_acnes',
                                children: [],
                                size: 19.61673191840099,
                                parent: 'g__Propionibacterium',
                              },
                            ],
                            size: 0.082423243354626,
                            parent: 'f__Propionibacteriaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Tsukamurellaceae',
                        children: [
                          {
                            name: 'g__Tsukamurella',
                            children: [
                              {
                                name: 's__Tsukamurella_paurometabola',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Tsukamurella',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Tsukamurellaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Gordoniaceae',
                        children: [
                          {
                            name: 'g__Gordonia',
                            children: [
                              {
                                name: 's__Gordonia_bronchialis',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Gordonia',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Gordoniaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Nocardiaceae',
                        children: [
                          {
                            name: 'g__Rhodococcus',
                            children: [
                              {
                                name: 's__Rhodococcus_jostii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rhodococcus',
                              },
                              {
                                name: 's__Rhodococcus_pyridinivorans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rhodococcus',
                              },
                              {
                                name: 's__Rhodococcus_hoagii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rhodococcus',
                              },
                              {
                                name: 's__Rhodococcus_opacus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rhodococcus',
                              },
                              {
                                name: 's__Rhodococcus_erythropolis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rhodococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Nocardiaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Mycobacteriaceae',
                        children: [
                          {
                            name: 'g__Mycobacterium',
                            children: [
                              {
                                name: 's__Mycobacterium_sp_JDM601',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Mycobacterium',
                              },
                              {
                                name: 's__Mycobacterium_avium',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Mycobacterium',
                              },
                              {
                                name: 's__Mycobacterium_gilvum',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Mycobacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Mycobacteriaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Corynebacteriaceae',
                        children: [
                          {
                            name: 'g__Corynebacterium',
                            children: [
                              {
                                name: 's__Corynebacterium_maris',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_resistens',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_halotolerans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_aurimucosum',
                                children: [],
                                size: 0.35029878425716054,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_kroppenstedtii',
                                children: [],
                                size: 0.123634865031939,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_efficiens',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_terpenotabidum',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_ulcerans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_urealyticum',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_argentoratense',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_jeikeium',
                                children: [],
                                size: 0.41211621677313004,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_variabile',
                                children: [],
                                size: 0.164846486709252,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_callunae',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_glutamicum',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Corynebacterium',
                              },
                              {
                                name: 's__Corynebacterium_diphtheriae',
                                children: [],
                                size: 0.906655676900886,
                                parent: 'g__Corynebacterium',
                              },
                            ],
                            size: 0.10302905419328251,
                            parent: 'f__Corynebacteriaceae',
                          },
                        ],
                        size: 0.10302905419328251,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Dermacoccaceae',
                        children: [
                          {
                            name: 'g__Kytococcus',
                            children: [
                              {
                                name: 's__Kytococcus_sedentarius',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Kytococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Dermacoccaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Jonesiaceae',
                        children: [
                          {
                            name: 'g__Jonesia',
                            children: [
                              {
                                name: 's__Jonesia_denitrificans',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Jonesia',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Jonesiaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Cellulomonadaceae',
                        children: [
                          {
                            name: 'g__Cellulomonas',
                            children: [
                              {
                                name: 's__Cellulomonas_flavigena',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Cellulomonas',
                              },
                              {
                                name: 's__[Cellvibrio]_gilvus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Cellulomonas',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Cellulomonadaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Actinomycetales',
                      },
                      {
                        name: 'f__Micrococcaceae',
                        children: [
                          {
                            name: 'g__Kocuria',
                            children: [
                              {
                                name: 's__Kocuria_rhizophila',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Kocuria',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Micrococcaceae',
                          },
                          {
                            name: 'g__Rothia',
                            children: [
                              {
                                name: 's__Rothia_mucilaginosa',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Rothia',
                              },
                              {
                                name: 's__Rothia_dentocariosa',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rothia',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Micrococcaceae',
                          },
                          {
                            name: 'g__Arthrobacter',
                            children: [
                              {
                                name: 's__Arthrobacter_arilaitensis',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Arthrobacter',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Micrococcaceae',
                          },
                          {
                            name: 'g__Micrococcus',
                            children: [
                              {
                                name: 's__Micrococcus_luteus',
                                children: [],
                                size: 0.5563568926437256,
                                parent: 'g__Micrococcus',
                              },
                            ],
                            size: 0.5563568926437256,
                            parent: 'f__Micrococcaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Actinomycetales',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'c__Actinobacteria',
                  },
                ],
                size: 0.10302905419328251,
                parent: 'p__Actinobacteria',
              },
            ],
            size: 0.10302905419328251,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Bacteroidetes',
            children: [
              {
                name: 'c__Cytophagia',
                children: [
                  {
                    name: 'o__Cytophagales',
                    children: [
                      {
                        name: 'f__Cytophagaceae',
                        children: [
                          {
                            name: 'g__Cytophaga',
                            children: [
                              {
                                name: 's__Cytophaga_hutchinsonii',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Cytophaga',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Cytophagaceae',
                          },
                        ],
                        size: 0.0618174325159695,
                        parent: 'o__Cytophagales',
                      },
                    ],
                    size: 0.0618174325159695,
                    parent: 'c__Cytophagia',
                  },
                ],
                size: 0.0618174325159695,
                parent: 'p__Bacteroidetes',
              },
              {
                name: 'c__Bacteroidia',
                children: [
                  {
                    name: 'o__Bacteroidales',
                    children: [
                      {
                        name: 'g__Candidatus_Azobacteroides',
                        children: [
                          {
                            name: 's__Candidatus_Azobacteroides_pseudotrichonymphae',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'g__Candidatus_Azobacteroides',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Bacteroidales',
                      },
                      {
                        name: 'f__Prevotellaceae',
                        children: [
                          {
                            name: 'g__Prevotella',
                            children: [
                              {
                                name: 's__Prevotella_melaninogenica',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Prevotella',
                              },
                              {
                                name: 's__Prevotella_denticola',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Prevotella',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Prevotellaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Bacteroidales',
                      },
                      {
                        name: 'f__Porphyromonadaceae',
                        children: [
                          {
                            name: 'g__Porphyromonas',
                            children: [
                              {
                                name: 's__Porphyromonas_gingivalis',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Porphyromonas',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Porphyromonadaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Bacteroidales',
                      },
                      {
                        name: 'f__Bacteroidaceae',
                        children: [
                          {
                            name: 'g__Bacteroides',
                            children: [
                              {
                                name: 's__Bacteroides_helcogenes',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Bacteroides',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Bacteroidaceae',
                          },
                        ],
                        size: 0.0618174325159695,
                        parent: 'o__Bacteroidales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Bacteroidia',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Bacteroidetes',
              },
              {
                name: 'c__Flavobacteriia',
                children: [
                  {
                    name: 'o__Flavobacteriales',
                    children: [
                      {
                        name: 'f__Flavobacteriaceae',
                        children: [
                          {
                            name: 'g__Flavobacterium',
                            children: [
                              {
                                name: 's__Flavobacterium_psychrophilum',
                                children: [],
                                size: 0.35029878425716054,
                                parent: 'g__Flavobacterium',
                              },
                              {
                                name: 's__Flavobacterium_johnsoniae',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Flavobacterium',
                              },
                            ],
                            size: 0.35029878425716054,
                            parent: 'f__Flavobacteriaceae',
                          },
                        ],
                        size: 0.35029878425716054,
                        parent: 'o__Flavobacteriales',
                      },
                    ],
                    size: 0.35029878425716054,
                    parent: 'c__Flavobacteriia',
                  },
                ],
                size: 0.35029878425716054,
                parent: 'p__Bacteroidetes',
              },
            ],
            size: 0.0618174325159695,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Fusobacteria',
            children: [
              {
                name: 'c__Fusobacteriia',
                children: [
                  {
                    name: 'o__Fusobacteriales',
                    children: [
                      {
                        name: 'f__Leptotrichiaceae',
                        children: [
                          {
                            name: 'g__Leptotrichia',
                            children: [
                              {
                                name: 's__Leptotrichia_buccalis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Leptotrichia',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Leptotrichiaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Fusobacteriales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Fusobacteriia',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Fusobacteria',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Deinococcus-Thermus',
            children: [
              {
                name: 'c__Deinococci',
                children: [
                  {
                    name: 'o__Deinococcales',
                    children: [
                      {
                        name: 'f__Deinococcaceae',
                        children: [
                          {
                            name: 'g__Deinococcus',
                            children: [
                              {
                                name: 's__Deinococcus_deserti',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Deinococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Deinococcaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Deinococcales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Deinococci',
                  },
                  {
                    name: 'o__Thermales',
                    children: [
                      {
                        name: 'f__Thermaceae',
                        children: [
                          {
                            name: 'g__Thermus',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'f__Thermaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Thermales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Deinococci',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Deinococcus-Thermus',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Firmicutes',
            children: [
              {
                name: 'c__Negativicutes',
                children: [
                  {
                    name: 'o__Selenomonadales',
                    children: [
                      {
                        name: 'f__Acidaminococcaceae',
                        children: [
                          {
                            name: 'g__Acidaminococcus',
                            children: [
                              {
                                name: 's__Acidaminococcus_intestini',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Acidaminococcus',
                              },
                            ],
                            size: 0.10302905419328251,
                            parent: 'f__Acidaminococcaceae',
                          },
                        ],
                        size: 0.10302905419328251,
                        parent: 'o__Selenomonadales',
                      },
                      {
                        name: 'f__Veillonellaceae',
                        children: [
                          {
                            name: 'g__Veillonella',
                            children: [
                              {
                                name: 's__Veillonella_parvula',
                                children: [],
                                size: 0.123634865031939,
                                parent: 'g__Veillonella',
                              },
                            ],
                            size: 0.123634865031939,
                            parent: 'f__Veillonellaceae',
                          },
                          {
                            name: 'g__Megasphaera',
                            children: [
                              {
                                name: 's__Megasphaera_elsdenii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Megasphaera',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Veillonellaceae',
                          },
                        ],
                        size: 0.123634865031939,
                        parent: 'o__Selenomonadales',
                      },
                    ],
                    size: 0.10302905419328251,
                    parent: 'c__Negativicutes',
                  },
                ],
                size: 0.10302905419328251,
                parent: 'p__Firmicutes',
              },
              {
                name: 'c__Clostridia',
                children: [
                  {
                    name: 'o__Clostridiales',
                    children: [
                      {
                        name: 'g__Anaerococcus',
                        children: [
                          {
                            name: 's__Anaerococcus_prevotii',
                            children: [],
                            size: 0.123634865031939,
                            parent: 'g__Anaerococcus',
                          },
                        ],
                        size: 0.123634865031939,
                        parent: 'o__Clostridiales',
                      },
                      {
                        name: 'g__Finegoldia',
                        children: [
                          {
                            name: 's__Finegoldia_magna',
                            children: [],
                            size: 0.1442406758705955,
                            parent: 'g__Finegoldia',
                          },
                        ],
                        size: 0.1442406758705955,
                        parent: 'o__Clostridiales',
                      },
                      {
                        name: 'f__Ruminococcaceae',
                        children: [
                          {
                            name: 'g__Faecalibacterium',
                            children: [
                              {
                                name: 's__Faecalibacterium_prausnitzii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Faecalibacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Ruminococcaceae',
                          },
                          {
                            name: 'g__Ruminococcus',
                            children: [
                              {
                                name: 's__Ruminococcus_bromii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Ruminococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Ruminococcaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Clostridiales',
                      },
                      {
                        name: 's__butyrate-producing_bacterium_SSC/2',
                        children: [],
                        size: 0.0206058108386565,
                        parent: 'o__Clostridiales',
                      },
                      {
                        name: 'f__Peptococcaceae',
                        children: [
                          {
                            name: 'g__Candidatus_Desulforudis',
                            children: [
                              {
                                name: 's__Candidatus_Desulforudis_audaxviator',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Candidatus_Desulforudis',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Peptococcaceae',
                          },
                          {
                            name: 'g__Desulfotomaculum',
                            children: [
                              {
                                name: 's__Desulfotomaculum_reducens',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Desulfotomaculum',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Peptococcaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Clostridiales',
                      },
                      {
                        name: 'f__Eubacteriaceae',
                        children: [
                          {
                            name: 'g__Eubacterium',
                            children: [
                              {
                                name: 's__Eubacterium_rectale',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Eubacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Eubacteriaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Clostridiales',
                      },
                    ],
                    size: 0.123634865031939,
                    parent: 'c__Clostridia',
                  },
                  {
                    name: 'o__Thermoanaerobacterales',
                    children: [
                      {
                        name: 'f__Thermoanaerobacteraceae',
                        children: [
                          {
                            name: 'g__Caldanaerobacter',
                            children: [
                              {
                                name: 's__Caldanaerobacter_subterraneus',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Caldanaerobacter',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Thermoanaerobacteraceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Thermoanaerobacterales',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'c__Clostridia',
                  },
                ],
                size: 0.123634865031939,
                parent: 'p__Firmicutes',
              },
              {
                name: 'c__Bacilli',
                children: [
                  {
                    name: 'o__Lactobacillales',
                    children: [
                      {
                        name: 'f__Carnobacteriaceae',
                        children: [
                          {
                            name: 'g__Carnobacterium',
                            children: [
                              {
                                name: 's__Carnobacterium_maltaromaticum',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Carnobacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Carnobacteriaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Lactobacillales',
                      },
                      {
                        name: 'f__Enterococcaceae',
                        children: [
                          {
                            name: 'g__Enterococcus',
                            children: [
                              {
                                name: 's__Enterococcus_mundtii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Enterococcus',
                              },
                              {
                                name: 's__Enterococcus_casseliflavus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Enterococcus',
                              },
                              {
                                name: 's__Enterococcus_faecium',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Enterococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Enterococcaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Lactobacillales',
                      },
                      {
                        name: 'f__Leuconostocaceae',
                        children: [
                          {
                            name: 'g__Oenococcus',
                            children: [
                              {
                                name: 's__Oenococcus_oeni',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Oenococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Leuconostocaceae',
                          },
                          {
                            name: 'g__Leuconostoc',
                            children: [
                              {
                                name: 's__Leuconostoc_kimchii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Leuconostoc',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Leuconostocaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Lactobacillales',
                      },
                      {
                        name: 'f__Lactobacillaceae',
                        children: [
                          {
                            name: 'g__Lactobacillus',
                            children: [
                              {
                                name: 's__Lactobacillus_crispatus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Lactobacillus',
                              },
                              {
                                name: 's__Lactobacillus_helveticus',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Lactobacillus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Lactobacillaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Lactobacillales',
                      },
                      {
                        name: 'f__Streptococcaceae',
                        children: [
                          {
                            name: 'g__Lactococcus',
                            children: [
                              {
                                name: 's__Lactococcus_lactis',
                                children: [],
                                size: 1.6278590562538637,
                                parent: 'g__Lactococcus',
                              },
                            ],
                            size: 1.6278590562538637,
                            parent: 'f__Streptococcaceae',
                          },
                          {
                            name: 'g__Streptococcus',
                            children: [
                              {
                                name: 's__Streptococcus_sp_I-P16',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_sp_I-G2',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_pseudopneumoniae',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_macedonicus',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_mitis',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_parasanguinis',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_pneumoniae',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_thermophilus',
                                children: [],
                                size: 0.35029878425716054,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_salivarius',
                                children: [],
                                size: 0.123634865031939,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_oralis',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Streptococcus',
                              },
                              {
                                name: 's__Streptococcus_gordonii',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Streptococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Streptococcaceae',
                          },
                        ],
                        size: 1.6278590562538637,
                        parent: 'o__Lactobacillales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Bacilli',
                  },
                  {
                    name: 'o__Bacillales',
                    children: [
                      {
                        name: 'f__Bacillaceae',
                        children: [
                          {
                            name: 'g__Bacillus',
                            children: [
                              {
                                name: 's__Bacillus_subtilis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Bacillus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Bacillaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Bacillales',
                      },
                      {
                        name: 'f__Staphylococcaceae',
                        children: [
                          {
                            name: 'g__Macrococcus',
                            children: [
                              {
                                name: 's__Macrococcus_caseolyticus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Macrococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Staphylococcaceae',
                          },
                          {
                            name: 'g__Staphylococcus',
                            children: [
                              {
                                name: 's__Staphylococcus_saprophyticus',
                                children: [],
                                size: 0.123634865031939,
                                parent: 'g__Staphylococcus',
                              },
                              {
                                name: 's__Staphylococcus_lugdunensis',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Staphylococcus',
                              },
                              {
                                name: 's__Staphylococcus_haemolyticus',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Staphylococcus',
                              },
                              {
                                name: 's__Staphylococcus_epidermidis',
                                children: [],
                                size: 1.4630125695446117,
                                parent: 'g__Staphylococcus',
                              },
                              {
                                name: 's__Staphylococcus_aureus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Staphylococcus',
                              },
                            ],
                            size: 0.123634865031939,
                            parent: 'f__Staphylococcaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Bacillales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Bacilli',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Firmicutes',
              },
            ],
            size: 0.10302905419328251,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Proteobacteria',
            children: [
              {
                name: 'c__Epsilonproteobacteria',
                children: [
                  {
                    name: 'o__Campylobacterales',
                    children: [
                      {
                        name: 'f__Campylobacteraceae',
                        children: [
                          {
                            name: 'g__Arcobacter',
                            children: [
                              {
                                name: 's__Arcobacter_sp_L',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Arcobacter',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Campylobacteraceae',
                          },
                          {
                            name: 'g__Campylobacter',
                            children: [
                              {
                                name: 's__Campylobacter_concisus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Campylobacter',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Campylobacteraceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Campylobacterales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Epsilonproteobacteria',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Proteobacteria',
              },
              {
                name: 'c__Deltaproteobacteria',
                children: [
                  {
                    name: 'o__Desulfarculales',
                    children: [
                      {
                        name: 'f__Desulfarculaceae',
                        children: [
                          {
                            name: 'g__Desulfarculus',
                            children: [
                              {
                                name: 's__Desulfarculus_baarsii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Desulfarculus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Desulfarculaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Desulfarculales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Deltaproteobacteria',
                  },
                  {
                    name: 'o__Desulfovibrionales',
                    children: [
                      {
                        name: 'f__Desulfovibrionaceae',
                        children: [
                          {
                            name: 'g__Lawsonia',
                            children: [
                              {
                                name: 's__Lawsonia_intracellularis',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Lawsonia',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Desulfovibrionaceae',
                          },
                          {
                            name: 'g__Desulfovibrio',
                            children: [
                              {
                                name: 's__Desulfovibrio_alaskensis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Desulfovibrio',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Desulfovibrionaceae',
                          },
                        ],
                        size: 0.0618174325159695,
                        parent: 'o__Desulfovibrionales',
                      },
                    ],
                    size: 0.0618174325159695,
                    parent: 'c__Deltaproteobacteria',
                  },
                  {
                    name: 'o__Myxococcales',
                    children: [
                      {
                        name: 'f__Anaeromyxobacteraceae',
                        children: [
                          {
                            name: 'g__Anaeromyxobacter',
                            children: [
                              {
                                name: 's__Anaeromyxobacter_sp_Fw109-5',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Anaeromyxobacter',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Anaeromyxobacteraceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Myxococcales',
                      },
                      {
                        name: 'f__Myxococcaceae',
                        children: [
                          {
                            name: 'g__Corallococcus',
                            children: [
                              {
                                name: 's__Corallococcus_coralloides',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Corallococcus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Myxococcaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Myxococcales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Deltaproteobacteria',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Proteobacteria',
              },
              {
                name: 'c__Betaproteobacteria',
                children: [
                  {
                    name: 'o__Neisseriales',
                    children: [
                      {
                        name: 'f__Neisseriaceae',
                        children: [
                          {
                            name: 'g__Neisseria',
                            children: [
                              {
                                name: 's__Neisseria_meningitidis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Neisseria',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Neisseriaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Neisseriales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Betaproteobacteria',
                  },
                  {
                    name: 'o__Hydrogenophilales',
                    children: [
                      {
                        name: 'f__Hydrogenophilaceae',
                        children: [
                          {
                            name: 'g__Thiobacillus',
                            children: [
                              {
                                name: 's__Thiobacillus_denitrificans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Thiobacillus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Hydrogenophilaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Hydrogenophilales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Betaproteobacteria',
                  },
                  {
                    name: 'g__Kinetoplastibacterium',
                    children: [
                      {
                        name: 's__Candidatus_Kinetoplastibacterium_crithidii',
                        children: [],
                        size: 0.0206058108386565,
                        parent: 'g__Kinetoplastibacterium',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Betaproteobacteria',
                  },
                  {
                    name: 'o__Burkholderiales',
                    children: [
                      {
                        name: 'g__Methylibium',
                        children: [
                          {
                            name: 's__Methylibium_petroleiphilum',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'g__Methylibium',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Burkholderiales',
                      },
                      {
                        name: 'g__Leptothrix',
                        children: [
                          {
                            name: 's__Leptothrix_cholodnii',
                            children: [],
                            size: 0.082423243354626,
                            parent: 'g__Leptothrix',
                          },
                        ],
                        size: 0.082423243354626,
                        parent: 'o__Burkholderiales',
                      },
                      {
                        name: 'f__Burkholderiaceae',
                        children: [
                          {
                            name: 'g__Cupriavidus',
                            children: [
                              {
                                name: 's__Cupriavidus_metallidurans',
                                children: [],
                                size: 4.141767978569956,
                                parent: 'g__Cupriavidus',
                              },
                              {
                                name: 's__Cupriavidus_necator',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Cupriavidus',
                              },
                            ],
                            size: 4.141767978569956,
                            parent: 'f__Burkholderiaceae',
                          },
                          {
                            name: 'g__Ralstonia',
                            children: [
                              {
                                name: 's__Ralstonia_pickettii',
                                children: [],
                                size: 1.0921079744487945,
                                parent: 'g__Ralstonia',
                              },
                              {
                                name: 's__Ralstonia_solanacearum',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Ralstonia',
                              },
                            ],
                            size: 1.0921079744487945,
                            parent: 'f__Burkholderiaceae',
                          },
                          {
                            name: 'g__Burkholderia',
                            children: [
                              {
                                name: 's__Burkholderia_thailandensis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Burkholderia',
                              },
                              {
                                name: 's__Burkholderia_mallei',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Burkholderia',
                              },
                              {
                                name: 's__Burkholderia_cenocepacia',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Burkholderia',
                              },
                              {
                                name: 's__Burkholderia_xenovorans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Burkholderia',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Burkholderiaceae',
                          },
                        ],
                        size: 4.141767978569956,
                        parent: 'o__Burkholderiales',
                      },
                      {
                        name: 'f__Comamonadaceae',
                        children: [
                          {
                            name: 'g__Verminephrobacter',
                            children: [
                              {
                                name: 's__Verminephrobacter_eiseniae',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Verminephrobacter',
                              },
                            ],
                            size: 0.082423243354626,
                            parent: 'f__Comamonadaceae',
                          },
                          {
                            name: 'g__Alicycliphilus',
                            children: [
                              {
                                name: 's__Alicycliphilus_denitrificans',
                                children: [],
                                size: 0.123634865031939,
                                parent: 'g__Alicycliphilus',
                              },
                            ],
                            size: 0.123634865031939,
                            parent: 'f__Comamonadaceae',
                          },
                          {
                            name: 'g__Delftia',
                            children: [
                              {
                                name: 's__Delftia_sp_Cs1-4',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Delftia',
                              },
                              {
                                name: 's__Delftia_acidovorans',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Delftia',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Comamonadaceae',
                          },
                          {
                            name: 'g__Polaromonas',
                            children: [
                              {
                                name: 's__Polaromonas_sp_JS666',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Polaromonas',
                              },
                              {
                                name: 's__Polaromonas_naphthalenivorans',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Polaromonas',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Comamonadaceae',
                          },
                          {
                            name: 'g__Variovorax',
                            children: [
                              {
                                name: 's__Variovorax_paradoxus',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Variovorax',
                              },
                            ],
                            size: 0.10302905419328251,
                            parent: 'f__Comamonadaceae',
                          },
                          {
                            name: 'g__Rhodoferax',
                            children: [
                              {
                                name: 's__Rhodoferax_ferrireducens',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rhodoferax',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Comamonadaceae',
                          },
                          {
                            name: 'g__Acidovorax',
                            children: [
                              {
                                name: 's__Acidovorax_ebreus',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Acidovorax',
                              },
                              {
                                name: 's__Acidovorax_sp_KKS102',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Acidovorax',
                              },
                              {
                                name: 's__Acidovorax_sp_JS42',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Acidovorax',
                              },
                              {
                                name: 's__Acidovorax_citrulli',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Acidovorax',
                              },
                              {
                                name: 's__Acidovorax_avenae',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Acidovorax',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Comamonadaceae',
                          },
                          {
                            name: 'g__Comamonas',
                            children: [
                              {
                                name: 's__Comamonas_testosteroni',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Comamonas',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Comamonadaceae',
                          },
                        ],
                        size: 0.082423243354626,
                        parent: 'o__Burkholderiales',
                      },
                      {
                        name: 'f__Oxalobacteraceae',
                        children: [
                          {
                            name: 'g__Candidatus_Zinderia',
                            children: [
                              {
                                name: 's__Candidatus_Zinderia_insecticola',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Candidatus_Zinderia',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Oxalobacteraceae',
                          },
                          {
                            name: 'g__Herminiimonas',
                            children: [
                              {
                                name: 's__Herminiimonas_arsenicoxydans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Herminiimonas',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Oxalobacteraceae',
                          },
                          {
                            name: 'g__Collimonas',
                            children: [
                              {
                                name: 's__Collimonas_fungivorans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Collimonas',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Oxalobacteraceae',
                          },
                          {
                            name: 'g__Janthinobacterium',
                            children: [
                              {
                                name: 's__Janthinobacterium_sp_Marseille',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Janthinobacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Oxalobacteraceae',
                          },
                          {
                            name: 'g__Herbaspirillum',
                            children: [
                              {
                                name: 's__Herbaspirillum_seropedicae',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Herbaspirillum',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Oxalobacteraceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Burkholderiales',
                      },
                      {
                        name: 'f__Alcaligenaceae',
                        children: [
                          {
                            name: 'g__Bordetella',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'f__Alcaligenaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Burkholderiales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Betaproteobacteria',
                  },
                  {
                    name: 'o__Nitrosomonadales',
                    children: [
                      {
                        name: 'f__Nitrosomonadaceae',
                        children: [
                          {
                            name: 'g__Nitrosomonas',
                            children: [
                              {
                                name: 's__Nitrosomonas_eutropha',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Nitrosomonas',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Nitrosomonadaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Nitrosomonadales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Betaproteobacteria',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Proteobacteria',
              },
              {
                name: 'c__Alphaproteobacteria',
                children: [
                  {
                    name: 'o__Caulobacterales',
                    children: [
                      {
                        name: 'f__Caulobacteraceae',
                        children: [
                          {
                            name: 'g__Caulobacter',
                            children: [
                              {
                                name: 's__Caulobacter_sp_K31',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Caulobacter',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Caulobacteraceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Caulobacterales',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'c__Alphaproteobacteria',
                  },
                  {
                    name: 'o__Rhodospirillales',
                    children: [
                      {
                        name: 'f__Rhodospirillaceae',
                        children: [
                          {
                            name: 'g__Azospirillum',
                            children: [
                              {
                                name: 's__Azospirillum_lipoferum',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Azospirillum',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Rhodospirillaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Rhodospirillales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Alphaproteobacteria',
                  },
                  {
                    name: 'o__Rickettsiales',
                    children: [
                      {
                        name: 'f__Anaplasmataceae',
                        children: [
                          {
                            name: 'g__Anaplasma',
                            children: [
                              {
                                name: 's__Anaplasma_centrale',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Anaplasma',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Anaplasmataceae',
                          },
                        ],
                        size: 0.0618174325159695,
                        parent: 'o__Rickettsiales',
                      },
                    ],
                    size: 0.0618174325159695,
                    parent: 'c__Alphaproteobacteria',
                  },
                  {
                    name: 'o__Rhizobiales',
                    children: [
                      {
                        name: 'f__Xanthobacteraceae',
                        children: [
                          {
                            name: 'g__Xanthobacter',
                            children: [
                              {
                                name: 's__Xanthobacter_autotrophicus',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Xanthobacter',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Xanthobacteraceae',
                          },
                          {
                            name: 'g__Azorhizobium',
                            children: [
                              {
                                name: 's__Azorhizobium_caulinodans',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Azorhizobium',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Xanthobacteraceae',
                          },
                        ],
                        size: 0.0618174325159695,
                        parent: 'o__Rhizobiales',
                      },
                      {
                        name: 'f__Methylobacteriaceae',
                        children: [
                          {
                            name: 'g__Methylobacterium',
                            children: [
                              {
                                name: 's__Methylobacterium_extorquens',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Methylobacterium',
                              },
                              {
                                name: 's__Methylobacterium_nodulans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Methylobacterium',
                              },
                              {
                                name: 's__Methylobacterium_radiotolerans',
                                children: [],
                                size: 0.494539460127756,
                                parent: 'g__Methylobacterium',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Methylobacteriaceae',
                          },
                        ],
                        size: 0.0618174325159695,
                        parent: 'o__Rhizobiales',
                      },
                      {
                        name: 'f__Rhizobiaceae',
                        children: [
                          {
                            name: 'g__Sinorhizobium',
                            children: [
                              {
                                name: 's__Sinorhizobium_fredii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Sinorhizobium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Rhizobiaceae',
                          },
                          {
                            name: 'g__Rhizobium',
                            children: [
                              {
                                name: 's__Rhizobium_tropici',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Rhizobium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Rhizobiaceae',
                          },
                          {
                            name: 'g__Agrobacterium',
                            children: [
                              {
                                name: 's__Agrobacterium_sp_H13-3',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Agrobacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Rhizobiaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Rhizobiales',
                      },
                      {
                        name: 'f__Phyllobacteriaceae',
                        children: [
                          {
                            name: 'g__Mesorhizobium',
                            children: [
                              {
                                name: 's__Mesorhizobium_loti',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Mesorhizobium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Phyllobacteriaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Rhizobiales',
                      },
                      {
                        name: 'f__Bradyrhizobiaceae',
                        children: [
                          {
                            name: 'g__Oligotropha',
                            children: [
                              {
                                name: 's__Oligotropha_carboxidovorans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Oligotropha',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Bradyrhizobiaceae',
                          },
                          {
                            name: 'g__Rhodopseudomonas',
                            children: [
                              {
                                name: 's__Rhodopseudomonas_palustris',
                                children: [],
                                size: 0.8860498660622296,
                                parent: 'g__Rhodopseudomonas',
                              },
                            ],
                            size: 0.8860498660622296,
                            parent: 'f__Bradyrhizobiaceae',
                          },
                          {
                            name: 'g__Nitrobacter',
                            children: [
                              {
                                name: 's__Nitrobacter_winogradskyi',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Nitrobacter',
                              },
                              {
                                name: 's__Nitrobacter_hamburgensis',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Nitrobacter',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Bradyrhizobiaceae',
                          },
                          {
                            name: 'g__Bradyrhizobium',
                            children: [
                              {
                                name: 's__Bradyrhizobium_diazoefficiens',
                                children: [],
                                size: 0.576962703482382,
                                parent: 'g__Bradyrhizobium',
                              },
                              {
                                name: 's__Bradyrhizobium_sp_S23321',
                                children: [],
                                size: 1.0096847310941686,
                                parent: 'g__Bradyrhizobium',
                              },
                              {
                                name: 's__Bradyrhizobium_sp_BTAi1',
                                children: [],
                                size: 19.554914485885018,
                                parent: 'g__Bradyrhizobium',
                              },
                              {
                                name: 's__Bradyrhizobium_sp_ORS_278',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Bradyrhizobium',
                              },
                              {
                                name: 's__Bradyrhizobium_oligotrophicum',
                                children: [],
                                size: 0.30908716257984753,
                                parent: 'g__Bradyrhizobium',
                              },
                              {
                                name: 's__Bradyrhizobium_japonicum',
                                children: [],
                                size: 0.8448382443849165,
                                parent: 'g__Bradyrhizobium',
                              },
                            ],
                            size: 0.576962703482382,
                            parent: 'f__Bradyrhizobiaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Rhizobiales',
                      },
                      {
                        name: 'f__Brucellaceae',
                        children: [
                          {
                            name: 'g__Brucella',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'f__Brucellaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Rhizobiales',
                      },
                    ],
                    size: 0.0618174325159695,
                    parent: 'c__Alphaproteobacteria',
                  },
                  {
                    name: 'o__Rhodobacterales',
                    children: [
                      {
                        name: 'f__Rhodobacteraceae',
                        children: [],
                        size: 0.0206058108386565,
                        parent: 'o__Rhodobacterales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Alphaproteobacteria',
                  },
                ],
                size: 0.041211621677313,
                parent: 'p__Proteobacteria',
              },
              {
                name: 'c__Gammaproteobacteria',
                children: [
                  {
                    name: 'o__Pasteurellales',
                    children: [
                      {
                        name: 'f__Pasteurellaceae',
                        children: [
                          {
                            name: 'g__Haemophilus',
                            children: [
                              {
                                name: 's__Haemophilus_parainfluenzae',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Haemophilus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Pasteurellaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Pasteurellales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Aeromonadales',
                    children: [
                      {
                        name: 'f__Aeromonadaceae',
                        children: [
                          {
                            name: 'g__Aeromonas',
                            children: [
                              {
                                name: 's__Aeromonas_veronii',
                                children: [],
                                size: 0.288481351741191,
                                parent: 'g__Aeromonas',
                              },
                              {
                                name: 's__Aeromonas_hydrophila',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Aeromonas',
                              },
                            ],
                            size: 0.288481351741191,
                            parent: 'f__Aeromonadaceae',
                          },
                        ],
                        size: 0.288481351741191,
                        parent: 'o__Aeromonadales',
                      },
                    ],
                    size: 0.288481351741191,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Vibrionales',
                    children: [
                      {
                        name: 'f__Vibrionaceae',
                        children: [
                          {
                            name: 'g__Vibrio',
                            children: [
                              {
                                name: 's__Vibrio_sp_EJY3',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Vibrio',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Vibrionaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Vibrionales',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Alteromonadales',
                    children: [
                      {
                        name: 'f__Shewanellaceae',
                        children: [
                          {
                            name: 'g__Shewanella',
                            children: [
                              {
                                name: 's__Shewanella_sp_W3-18-1',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Shewanella',
                              },
                              {
                                name: 's__Shewanella_sp_ANA-3',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Shewanella',
                              },
                              {
                                name: 's__Shewanella_putrefaciens',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Shewanella',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Shewanellaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Alteromonadales',
                      },
                      {
                        name: 'f__Pseudoalteromonadaceae',
                        children: [
                          {
                            name: 'g__Pseudoalteromonas',
                            children: [
                              {
                                name: 's__Pseudoalteromonas_sp_SM9913',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pseudoalteromonas',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Pseudoalteromonadaceae',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'o__Alteromonadales',
                      },
                      {
                        name: 'f__Alteromonadaceae',
                        children: [
                          {
                            name: 'g__Alteromonas',
                            children: [
                              {
                                name: 's__Alteromonas_macleodii',
                                children: [],
                                size: 10.220482175973626,
                                parent: 'g__Alteromonas',
                              },
                            ],
                            size: 10.220482175973626,
                            parent: 'f__Alteromonadaceae',
                          },
                        ],
                        size: 10.220482175973626,
                        parent: 'o__Alteromonadales',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Oceanospirillales',
                    children: [
                      {
                        name: 'f__Halomonadaceae',
                        children: [
                          {
                            name: 'g__Candidatus_Carsonella',
                            children: [
                              {
                                name: 's__Candidatus_Carsonella_ruddii',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Candidatus_Carsonella',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Halomonadaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Oceanospirillales',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Cardiobacteriales',
                    children: [
                      {
                        name: 'f__Cardiobacteriaceae',
                        children: [
                          {
                            name: 'g__Dichelobacter',
                            children: [
                              {
                                name: 's__Dichelobacter_nodosus',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Dichelobacter',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Cardiobacteriaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Cardiobacteriales',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Xanthomonadales',
                    children: [
                      {
                        name: 'f__Xanthomonadaceae',
                        children: [
                          {
                            name: 'g__Stenotrophomonas',
                            children: [
                              {
                                name: 's__Stenotrophomonas_maltophilia',
                                children: [],
                                size: 0.329692973418504,
                                parent: 'g__Stenotrophomonas',
                              },
                            ],
                            size: 0.329692973418504,
                            parent: 'f__Xanthomonadaceae',
                          },
                          {
                            name: 'g__Xanthomonas',
                            children: [
                              {
                                name: 's__Xanthomonas_campestris',
                                children: [],
                                size: 3.214506490830414,
                                parent: 'g__Xanthomonas',
                              },
                            ],
                            size: 3.214506490830414,
                            parent: 'f__Xanthomonadaceae',
                          },
                        ],
                        size: 0.329692973418504,
                        parent: 'o__Xanthomonadales',
                      },
                    ],
                    size: 0.329692973418504,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Enterobacteriales',
                    children: [
                      {
                        name: 'f__Enterobacteriaceae',
                        children: [
                          {
                            name: 'g__Cronobacter',
                            children: [
                              {
                                name: 's__Cronobacter_sakazakii',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Cronobacter',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Dickeya',
                            children: [
                              {
                                name: 's__Dickeya_dadantii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Dickeya',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 's__Enterobacteriaceae_bacterium_strain_FGI_57',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Raoultella',
                            children: [
                              {
                                name: 's__Raoultella_ornithinolytica',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Raoultella',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Pectobacterium',
                            children: [
                              {
                                name: 's__Pectobacterium_sp_SCC3193',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pectobacterium',
                              },
                              {
                                name: 's__Pectobacterium_wasabiae',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pectobacterium',
                              },
                              {
                                name: 's__Pectobacterium_carotovorum',
                                children: [],
                                size: 0.576962703482382,
                                parent: 'g__Pectobacterium',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Pantoea',
                            children: [
                              {
                                name: 's__Pantoea_vagans',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Pantoea',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Serratia',
                            children: [
                              {
                                name: 's__Serratia_marcescens',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Serratia',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Proteus',
                            children: [
                              {
                                name: 's__Proteus_mirabilis',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Proteus',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Klebsiella',
                            children: [
                              {
                                name: 's__Klebsiella_pneumoniae',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Klebsiella',
                              },
                              {
                                name: 's__Klebsiella_oxytoca',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Klebsiella',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Escherichia',
                            children: [
                              {
                                name: 's__Escherichia_coli',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Escherichia',
                              },
                            ],
                            size: 0.0618174325159695,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Enterobacter',
                            children: [
                              {
                                name: 's__Enterobacter_cloacae',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Enterobacter',
                              },
                            ],
                            size: 0.041211621677313,
                            parent: 'f__Enterobacteriaceae',
                          },
                          {
                            name: 'g__Rahnella',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'f__Enterobacteriaceae',
                          },
                        ],
                        size: 0.041211621677313,
                        parent: 'o__Enterobacteriales',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'c__Gammaproteobacteria',
                  },
                  {
                    name: 'o__Pseudomonadales',
                    children: [
                      {
                        name: 'f__Pseudomonadaceae',
                        children: [
                          {
                            name: 'g__Pseudomonas',
                            children: [
                              {
                                name: 's__Pseudomonas_sp_TKP',
                                children: [],
                                size: 0.494539460127756,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_sp_UW4',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_brassicacearum',
                                children: [],
                                size: 0.082423243354626,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_entomophila',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_syringae_group_genomosp_3',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_savastanoi',
                                children: [],
                                size: 0.0618174325159695,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_syringae',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_stutzeri',
                                children: [],
                                size: 0.123634865031939,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_monteilii',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_putida',
                                children: [],
                                size: 0.10302905419328251,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_denitrificans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_protegens',
                                children: [],
                                size: 0.164846486709252,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_poae',
                                children: [],
                                size: 0.494539460127756,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_fluorescens',
                                children: [],
                                size: 2.8642077065732536,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_resinovorans',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_mendocina',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pseudomonas',
                              },
                              {
                                name: 's__Pseudomonas_sp_VLB120',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Pseudomonas',
                              },
                            ],
                            size: 0.494539460127756,
                            parent: 'f__Pseudomonadaceae',
                          },
                        ],
                        size: 0.494539460127756,
                        parent: 'o__Pseudomonadales',
                      },
                      {
                        name: 'f__Moraxellaceae',
                        children: [
                          {
                            name: 'g__Psychrobacter',
                            children: [
                              {
                                name: 's__Psychrobacter_sp_PRwf-1',
                                children: [],
                                size: 0.453327838450443,
                                parent: 'g__Psychrobacter',
                              },
                              {
                                name: 's__Psychrobacter_arcticus',
                                children: [],
                                size: 0.123634865031939,
                                parent: 'g__Psychrobacter',
                              },
                              {
                                name: 's__Psychrobacter_cryohalolentis',
                                children: [],
                                size: 0.041211621677313,
                                parent: 'g__Psychrobacter',
                              },
                            ],
                            size: 0.453327838450443,
                            parent: 'f__Moraxellaceae',
                          },
                          {
                            name: 'g__Acinetobacter',
                            children: [
                              {
                                name: 's__Acinetobacter_oleivorans',
                                children: [],
                                size: 0.0206058108386565,
                                parent: 'g__Acinetobacter',
                              },
                              {
                                name: 's__Acinetobacter_baumannii',
                                children: [],
                                size: 0.1442406758705955,
                                parent: 'g__Acinetobacter',
                              },
                            ],
                            size: 0.0206058108386565,
                            parent: 'f__Moraxellaceae',
                          },
                        ],
                        size: 0.453327838450443,
                        parent: 'o__Pseudomonadales',
                      },
                    ],
                    size: 0.494539460127756,
                    parent: 'c__Gammaproteobacteria',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Proteobacteria',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Bacteria',
          },
          {
            name: 'p__Cyanobacteria',
            children: [
              {
                name: 'o__Nostocales',
                children: [
                  {
                    name: 'f__Nostocaceae',
                    children: [
                      {
                        name: 'g__Trichormus',
                        children: [
                          {
                            name: 's__Trichormus_azollae',
                            children: [],
                            size: 0.0206058108386565,
                            parent: 'g__Trichormus',
                          },
                        ],
                        size: 0.0206058108386565,
                        parent: 'f__Nostocaceae',
                      },
                      {
                        name: 'g__Anabaena',
                        children: [
                          {
                            name: 's__Anabaena_sp_90',
                            children: [],
                            size: 0.0618174325159695,
                            parent: 'g__Anabaena',
                          },
                        ],
                        size: 0.0618174325159695,
                        parent: 'f__Nostocaceae',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'o__Nostocales',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'p__Cyanobacteria',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Bacteria',
          },
        ],
        size: 0.0206058108386565,
        parent: 'root',
      },
      {
        name: 'd__Viruses',
        children: [
          {
            name: 's__Jingmen_tick_virus',
            children: [],
            size: 0.0206058108386565,
            parent: 'd__Viruses',
          },
          {
            name: 'f__Retroviridae',
            children: [
              {
                name: 's__Human_endogenous_retrovirus_K',
                children: [],
                size: 1.030290541932825,
                parent: 'f__Retroviridae',
              },
            ],
            size: 1.030290541932825,
            parent: 'd__Viruses',
          },
          {
            name: 'o__Herpesvirales',
            children: [
              {
                name: 'f__Alloherpesviridae',
                children: [
                  {
                    name: 'g__Cyprinivirus',
                    children: [
                      {
                        name: 's__Cyprinid_herpesvirus_1',
                        children: [],
                        size: 0.0206058108386565,
                        parent: 'g__Cyprinivirus',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'f__Alloherpesviridae',
                  },
                  {
                    name: 'g__Ictalurivirus',
                    children: [
                      {
                        name: 's__Ictalurid_herpesvirus_1',
                        children: [],
                        size: 0.247269730063878,
                        parent: 'g__Ictalurivirus',
                      },
                    ],
                    size: 0.247269730063878,
                    parent: 'f__Alloherpesviridae',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'o__Herpesvirales',
              },
              {
                name: 'f__Herpesviridae',
                children: [
                  {
                    name: 'g__Proboscivirus',
                    children: [
                      {
                        name: 's__Elephantid_herpesvirus_1',
                        children: [],
                        size: 0.47393364928909953,
                        parent: 'g__Proboscivirus',
                      },
                    ],
                    size: 0.47393364928909953,
                    parent: 'f__Herpesviridae',
                  },
                  {
                    name: 'g__Cytomegalovirus',
                    children: [
                      {
                        name: 's__Cynomolgus_macaque_cytomegalovirus_strain_Ottawa',
                        children: [],
                        size: 0.041211621677313,
                        parent: 'g__Cytomegalovirus',
                      },
                    ],
                    size: 0.041211621677313,
                    parent: 'f__Herpesviridae',
                  },
                  {
                    name: 'g__Mardivirus',
                    children: [
                      {
                        name: 's__Falconid_herpesvirus_1',
                        children: [],
                        size: 0.0206058108386565,
                        parent: 'g__Mardivirus',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'f__Herpesviridae',
                  },
                  {
                    name: 'g__Simplexvirus',
                    children: [
                      {
                        name: 's__Cercopithecine_herpesvirus_2',
                        children: [],
                        size: 0.0206058108386565,
                        parent: 'g__Simplexvirus',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'f__Herpesviridae',
                  },
                ],
                size: 0.47393364928909953,
                parent: 'o__Herpesvirales',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Viruses',
          },
          {
            name: 's__Pandoravirus_salinus',
            children: [],
            size: 0.35029878425716054,
            parent: 'd__Viruses',
          },
          {
            name: 's__Pandoravirus_dulcis',
            children: [],
            size: 0.453327838450443,
            parent: 'd__Viruses',
          },
          {
            name: 'o__Caudovirales',
            children: [
              {
                name: 'f__Siphoviridae',
                children: [
                  {
                    name: 's__Lactococcus_phage_phi7',
                    children: [],
                    size: 0.082423243354626,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Lactococcus_phage_P680',
                    children: [],
                    size: 0.30908716257984753,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Lactococcus_phage_jm3',
                    children: [],
                    size: 0.123634865031939,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Lactococcus_phage_jm2',
                    children: [],
                    size: 0.247269730063878,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Lactococcus_phage_340',
                    children: [],
                    size: 1.195137028642077,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_PHL114L00',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_PHL113M01',
                    children: [],
                    size: 0.041211621677313,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_PHL112N00',
                    children: [],
                    size: 0.041211621677313,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_PHL071N05',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_PHL067M10',
                    children: [],
                    size: 0.041211621677313,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_PHL060L00',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_PHL010M04',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_P104A',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Propionibacterium_phage_P101A',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Lactococcus_phage_936_sensu_lato',
                    children: [],
                    size: 1.030290541932825,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Streptococcus_phage_7201',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Siphoviridae',
                  },
                  {
                    name: 's__Lactococcus_phage_Tuc2009',
                    children: [],
                    size: 0.041211621677313,
                    parent: 'f__Siphoviridae',
                  },
                ],
                size: 0.082423243354626,
                parent: 'o__Caudovirales',
              },
              {
                name: 'f__Myoviridae',
                children: [
                  {
                    name: 'g__Spounalikevirus',
                    children: [
                      {
                        name: 's__Bacillus_phage_SPO1',
                        children: [],
                        size: 0.0206058108386565,
                        parent: 'g__Spounalikevirus',
                      },
                    ],
                    size: 0.0206058108386565,
                    parent: 'f__Myoviridae',
                  },
                  {
                    name: 's__Dickeya_phage_RC-2014',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'f__Myoviridae',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'o__Caudovirales',
              },
            ],
            size: 0.082423243354626,
            parent: 'd__Viruses',
          },
          {
            name: 'f__Phycodnaviridae',
            children: [
              {
                name: 'g__Coccolithovirus',
                children: [
                  {
                    name: 's__Emiliania_huxleyi_virus_86',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'g__Coccolithovirus',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'f__Phycodnaviridae',
              },
              {
                name: 'g__Prymnesiovirus',
                children: [
                  {
                    name: 's__Phaeocystis_globosa_virus',
                    children: [],
                    size: 0.10302905419328251,
                    parent: 'g__Prymnesiovirus',
                  },
                ],
                size: 0.10302905419328251,
                parent: 'f__Phycodnaviridae',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Viruses',
          },
          {
            name: 'f__Polydnaviridae',
            children: [
              {
                name: 'g__Bracovirus',
                children: [
                  {
                    name: 's__Cotesia_congregata_bracovirus',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'g__Bracovirus',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'f__Polydnaviridae',
              },
              {
                name: 'g__Ichnovirus',
                children: [
                  {
                    name: 's__Glypta_fumiferanae_ichnovirus',
                    children: [],
                    size: 0.041211621677313,
                    parent: 'g__Ichnovirus',
                  },
                  {
                    name: 's__Hyposoter_fugitivus_ichnovirus',
                    children: [],
                    size: 0.329692973418504,
                    parent: 'g__Ichnovirus',
                  },
                ],
                size: 0.041211621677313,
                parent: 'f__Polydnaviridae',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Viruses',
          },
          {
            name: 'f__Baculoviridae',
            children: [
              {
                name: 'g__Alphabaculovirus',
                children: [
                  {
                    name: 's__Orgyia_leucostigma_NPV',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'g__Alphabaculovirus',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'f__Baculoviridae',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Viruses',
          },
          {
            name: 'f__Poxviridae',
            children: [
              {
                name: 'g__Alphaentomopoxvirus',
                children: [
                  {
                    name: 's__Anomala_cuprea_entomopoxvirus',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'g__Alphaentomopoxvirus',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'f__Poxviridae',
              },
              {
                name: 'g__Yatapoxvirus',
                children: [
                  {
                    name: 's__Yaba_monkey_tumor_virus',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'g__Yatapoxvirus',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'f__Poxviridae',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Viruses',
          },
          {
            name: 'f__Anelloviridae',
            children: [
              {
                name: 'g__Gammatorquevirus',
                children: [
                  {
                    name: 's__Torque_teno_midi_virus_2',
                    children: [],
                    size: 0.0206058108386565,
                    parent: 'g__Gammatorquevirus',
                  },
                ],
                size: 0.0206058108386565,
                parent: 'f__Anelloviridae',
              },
            ],
            size: 0.0206058108386565,
            parent: 'd__Viruses',
          },
        ],
        size: 0.0206058108386565,
        parent: 'root',
      },
    ],
    size: 100,
    parent: undefined,
  },
};
