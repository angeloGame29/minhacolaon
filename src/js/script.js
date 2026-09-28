// ---- BASE DE CANDIDATOS (exemplos — substituir pelos dados oficiais) ----
let candidatos=[
{nome:"Daniel Conhece",numero:"2266",partido:"PL",cargo:"federal",foto:"/src/imgs/danielConhece.png"},
  {nome:"Adriano Galdino",numero:"10444",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10444.jpg"},
    {nome:"Alan de Bastos",numero:"22622",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22622.jpg"},
    {nome:"Aldenora Bezerra",numero:"40040",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40040.jpg"},
    {nome:"Alexandre Rei dos Terrenos",numero:"22077",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22077.jpg"},
    {nome:"Ana Araújo",numero:"13206",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13206.jpg"},
    {nome:"Ana Cláudia",numero:"15678",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15678.jpg"},
    {nome:"Anderson Monteiro",numero:"43147",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43147.jpg"},
    {nome:"André Gomes",numero:"22555",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22555.jpg"},
    {nome:"André Matias",numero:"11999",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11999.jpg"},
    {nome:"Anely Mônica",numero:"18691",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18691.jpg"},
    {nome:"Anísio Maia",numero:"40013",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40013.jpg"},
    {nome:"Barbosa de Mandacaru",numero:"12192",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12192.jpg"},
    {nome:"Bispo José Luiz",numero:"11177",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11177.jpg"},
    {nome:"Bosco Carneiro",numero:"11113",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11113.jpg"},
    {nome:"Branco Mendes",numero:"10888",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10888.jpg"},
    {nome:"Bruna Morais",numero:"43111",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43111.jpg"},
    {nome:"Caio Roberto",numero:"15222",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15222.jpg"},
    {nome:"Camila Toscano",numero:"15111",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15111.jpg"},
    {nome:"Capitã Aline",numero:"22007",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22007.jpg"},
    {nome:"Capitão Maradona",numero:"10193",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10193.jpg"},
    {nome:"Capitão Pereira",numero:"12444",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12444.jpg"},
    {nome:"Carlão Pelo Bem",numero:"22777",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22777.jpg"},
    {nome:"Carlinhos de Nias",numero:"15650",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15650.jpg"},
    {nome:"Carlos Renato",numero:"40640",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40640.jpg"},
    {nome:"Célia Alves",numero:"11456",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11456.jpg"},
    {nome:"Chió",numero:"43789",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43789.jpg"},
    {nome:"Cicinho Lima",numero:"10144",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10144.jpg"},
    {nome:"Cida Ramos",numero:"13400",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13400.jpg"},
    {nome:"Cilinha",numero:"22444",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22444.jpg"},
    {nome:"Cláudio O Servente de Obras",numero:"22878",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22878.jpg"},
    {nome:"Cloves Malvinas",numero:"22088",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22088.jpg"},
    {nome:"Coronel Lucas",numero:"10404",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10404.jpg"},
    {nome:"Coronel Sergio",numero:"10190",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10190.jpg"},
    {nome:"Coronel Sobreira",numero:"22789",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22789.jpg"},
    {nome:"Dane Alencar",numero:"11200",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11200.jpg"},
    {nome:"Daniel da Saúde",numero:"40444",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40444.jpg"},
    {nome:"Daniel Gomes",numero:"44111",partido:"UNIÃO",cargo:"estadual",foto:"fotos/estadual-44111.jpg"},
    {nome:"Daniel Sobrinho",numero:"22822",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22822.jpg"},
    {nome:"Danielle do Vale",numero:"10456",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10456.jpg"},
    {nome:"Denise Ribeiro",numero:"12000",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12000.jpg"},
    {nome:"Deputa Mané Buchada",numero:"22422",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22422.jpg"},
    {nome:"Diego Tavares",numero:"11000",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11000.jpg"},
    {nome:"Diva",numero:"40400",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40400.jpg"},
    {nome:"Dr. Athaide",numero:"43000",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43000.jpg"},
    {nome:"Dr. Bruno Deriu",numero:"43777",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43777.jpg"},
    {nome:"Dr. Evandro Trindade",numero:"22522",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22522.jpg"},
    {nome:"Dr. Jarques",numero:"10777",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10777.jpg"},
    {nome:"Dr. Jefferson",numero:"13123",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13123.jpg"},
    {nome:"Dr. Pet",numero:"15155",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15155.jpg"},
    {nome:"Dr. Romualdo",numero:"65123",partido:"PCDOB",cargo:"estadual",foto:"fotos/estadual-65123.jpg"},
    {nome:"Dra Flavina Feliciano",numero:"40345",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40345.jpg"},
    {nome:"Drª Jane Panta",numero:"11111",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11111.jpg"},
    {nome:"Dudu Soares",numero:"11007",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11007.jpg"},
    {nome:"Eduardo Brito",numero:"40777",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40777.jpg"},
    {nome:"Eduardo Carneiro",numero:"11333",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11333.jpg"},
    {nome:"Eliezer Benício",numero:"18456",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18456.jpg"},
    {nome:"Enfermeira Raquel Paula",numero:"15150",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15150.jpg"},
    {nome:"Enfermeira Rayra Beserra",numero:"10192",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10192.jpg"},
    {nome:"Fábio Lopes",numero:"22000",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22000.jpg"},
    {nome:"Fábio Ramalho",numero:"15555",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15555.jpg"},
    {nome:"Fabiola Rezende",numero:"11555",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11555.jpg"},
    {nome:"Felipe Coutinho",numero:"10222",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10222.jpg"},
    {nome:"Felipe Leitão",numero:"15999",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15999.jpg"},
    {nome:"Fernanda Alvino",numero:"44444",partido:"UNIÃO",cargo:"estadual",foto:"fotos/estadual-44444.jpg"},
    {nome:"Flávio Brasileiro",numero:"13333",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13333.jpg"},
    {nome:"Galego Souza",numero:"11222",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11222.jpg"},
    {nome:"Gerlane",numero:"40196",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40196.jpg"},
    {nome:"Geska de Laurinho",numero:"22333",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22333.jpg"},
    {nome:"Gilbertinho",numero:"44555",partido:"UNIÃO",cargo:"estadual",foto:"fotos/estadual-44555.jpg"},
    {nome:"Gilberto Calado",numero:"18789",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18789.jpg"},
    {nome:"Hervazio Bezerra",numero:"15123",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15123.jpg"},
    {nome:"Inácio Falcão",numero:"65555",partido:"PCDOB",cargo:"estadual",foto:"fotos/estadual-65555.jpg"},
    {nome:"Jaci Guimarães",numero:"15115",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15115.jpg"},
    {nome:"Jader Pimentel Filho",numero:"11234",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11234.jpg"},
    {nome:"Janine Oliveira",numero:"40999",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40999.jpg"},
    {nome:"Jânio Pereira",numero:"13100",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13100.jpg"},
    {nome:"Jô Oliveira",numero:"65000",partido:"PCDOB",cargo:"estadual",foto:"fotos/estadual-65000.jpg"},
    {nome:"Joallison Santos",numero:"15777",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15777.jpg"},
    {nome:"João Batista de Bayeux",numero:"11888",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11888.jpg"},
    {nome:"João Gonçalves",numero:"11611",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11611.jpg"},
    {nome:"João Paulo Segundo",numero:"11369",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11369.jpg"},
    {nome:"Joaquim Morais",numero:"12333",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12333.jpg"},
    {nome:"Jorge Maia",numero:"12567",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12567.jpg"},
    {nome:"Jose Pereira",numero:"40401",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40401.jpg"},
    {nome:"Jozivan Antero",numero:"80123",partido:"UP",cargo:"estadual",foto:"fotos/estadual-80123.jpg"},
    {nome:"Junio Leandro",numero:"12123",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12123.jpg"},
    {nome:"Júnior Araújo",numero:"11777",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11777.jpg"},
    {nome:"Jutay Meneses",numero:"10123",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10123.jpg"},
    {nome:"Kaline",numero:"50333",partido:"PSOL",cargo:"estadual",foto:"fotos/estadual-50333.jpg"},
    {nome:"Kelly do Botafogo",numero:"11500",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11500.jpg"},
    {nome:"Klécida Rodrigues",numero:"40111",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40111.jpg"},
    {nome:"Lafa Gadelha",numero:"43333",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43333.jpg"},
    {nome:"Lampião Gaúcho",numero:"22287",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22287.jpg"},
    {nome:"Larúcia",numero:"15000",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15000.jpg"},
    {nome:"Lena do Paraíba",numero:"15666",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15666.jpg"},
    {nome:"Leonice Lopes",numero:"10999",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10999.jpg"},
    {nome:"Lindolfo Pires",numero:"11123",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11123.jpg"},
    {nome:"Lorena",numero:"11211",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11211.jpg"},
    {nome:"Lucas Caçula",numero:"11444",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11444.jpg"},
    {nome:"Lucas Lucena",numero:"11022",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11022.jpg"},
    {nome:"Luciano Cartaxo",numero:"10660",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10660.jpg"},
    {nome:"Luciene Farias",numero:"43027",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43027.jpg"},
    {nome:"Madá",numero:"44144",partido:"UNIÃO",cargo:"estadual",foto:"fotos/estadual-44144.jpg"},
    {nome:"Madalena Cabeleireira",numero:"15112",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15112.jpg"},
    {nome:"Major Fernando",numero:"11190",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11190.jpg"},
    {nome:"Manoel Ludgério",numero:"43123",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43123.jpg"},
    {nome:"Manu de Souza",numero:"15888",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15888.jpg"},
    {nome:"Marcia da Salada",numero:"11138",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11138.jpg"},
    {nome:"Marcio Roberto",numero:"10234",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10234.jpg"},
    {nome:"Marcos Eron",numero:"43555",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43555.jpg"},
    {nome:"Marcos Henriques",numero:"13000",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13000.jpg"},
    {nome:"Maria Porto",numero:"44123",partido:"UNIÃO",cargo:"estadual",foto:"fotos/estadual-44123.jpg"},
    {nome:"Marinaldo Cardoso",numero:"40789",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40789.jpg"},
    {nome:"Mary",numero:"22321",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22321.jpg"},
    {nome:"Max Júnior",numero:"18888",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18888.jpg"},
    {nome:"Melca Farias",numero:"22888",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22888.jpg"},
    {nome:"Merinha da Casa de Apoio",numero:"22100",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22100.jpg"},
    {nome:"Michel Henrique",numero:"11011",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11011.jpg"},
    {nome:"Michely Farina",numero:"22345",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22345.jpg"},
    {nome:"Monica Rodrigues",numero:"12108",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12108.jpg"},
    {nome:"Morena",numero:"12223",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12223.jpg"},
    {nome:"Natália Rodrigues",numero:"10000",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10000.jpg"},
    {nome:"Nathalya Fernanda",numero:"44333",partido:"UNIÃO",cargo:"estadual",foto:"fotos/estadual-44333.jpg"},
    {nome:"Neidinha",numero:"50123",partido:"PSOL",cargo:"estadual",foto:"fotos/estadual-50123.jpg"},
    {nome:"Nelinho Costa",numero:"40123",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40123.jpg"},
    {nome:"Nice Costa",numero:"18777",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18777.jpg"},
    {nome:"Nilvan Ferreira",numero:"22222",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22222.jpg"},
    {nome:"Nobinho Almeida",numero:"10180",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10180.jpg"},
    {nome:"Noca Ribeiro",numero:"13213",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13213.jpg"},
    {nome:"Olívia Motta",numero:"10111",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10111.jpg"},
    {nome:"Osvaldo Santos",numero:"15669",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15669.jpg"},
    {nome:"Paulo Ferreira",numero:"11083",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11083.jpg"},
    {nome:"Poca Cabeleireiro",numero:"15919",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15919.jpg"},
    {nome:"Pr. Isaac Venerando",numero:"15022",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15022.jpg"},
    {nome:"Prof. Cleber",numero:"80800",partido:"UP",cargo:"estadual",foto:"fotos/estadual-80800.jpg"},
    {nome:"Prof. Hosana Carneiro",numero:"15321",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15321.jpg"},
    {nome:"Prof. Stenio Soares",numero:"13130",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13130.jpg"},
    {nome:"Professor Arlison",numero:"22770",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22770.jpg"},
    {nome:"Professor Edileudo Lucena",numero:"13613",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13613.jpg"},
    {nome:"Professor Francisco",numero:"15300",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15300.jpg"},
    {nome:"Professor Josias Mendes",numero:"22922",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22922.jpg"},
    {nome:"Professor Roni Andrade",numero:"15015",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15015.jpg"},
    {nome:"Professora Ivonete",numero:"10789",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10789.jpg"},
    {nome:"Professora Kalina",numero:"12678",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12678.jpg"},
    {nome:"Raimundo Agente de Saúde",numero:"50111",partido:"PSOL",cargo:"estadual",foto:"fotos/estadual-50111.jpg"},
    {nome:"Raquel França",numero:"22022",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22022.jpg"},
    {nome:"Ricardo Lucena",numero:"18000",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18000.jpg"},
    {nome:"Roberto Lima",numero:"15200",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15200.jpg"},
    {nome:"Rosália Lucas",numero:"11400",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11400.jpg"},
    {nome:"Rosely Louzada",numero:"13110",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13110.jpg"},
    {nome:"Ruan Martins",numero:"11321",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11321.jpg"},
    {nome:"Samara Suassuna",numero:"22001",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22001.jpg"},
    {nome:"Sammara Aguiar Sammy",numero:"22122",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22122.jpg"},
    {nome:"Sargento Barlavento",numero:"12190",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12190.jpg"},
    {nome:"Sargento Cleber",numero:"22191",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22191.jpg"},
    {nome:"Sargento Ivaldo Garrincha",numero:"18188",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18188.jpg"},
    {nome:"Sargento Neto",numero:"22999",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22999.jpg"},
    {nome:"Sargento Rui",numero:"15190",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15190.jpg"},
    {nome:"Sargento Sérgio Araujo",numero:"12111",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12111.jpg"},
    {nome:"Sávio Salvador",numero:"12100",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12100.jpg"},
    {nome:"Segundo Domiciano",numero:"22456",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22456.jpg"},
    {nome:"Sibelle Barros",numero:"40234",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40234.jpg"},
    {nome:"Subtenente Crispim",numero:"15192",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15192.jpg"},
    {nome:"Suelma Tavares",numero:"13111",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13111.jpg"},
    {nome:"Suely Soares",numero:"18177",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18177.jpg"},
    {nome:"Tanilson Soares",numero:"11789",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11789.jpg"},
    {nome:"Tatiana Gomes",numero:"43146",partido:"PV",cargo:"estadual",foto:"fotos/estadual-43146.jpg"},
    {nome:"Tenente Coronel Viviane",numero:"40190",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40190.jpg"},
    {nome:"Teresinha Dantas",numero:"13456",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13456.jpg"},
    {nome:"Theus Carvalho",numero:"18008",partido:"REDE",cargo:"estadual",foto:"fotos/estadual-18008.jpg"},
    {nome:"Tiberio Limeira",numero:"40000",partido:"PSB",cargo:"estadual",foto:"fotos/estadual-40000.jpg"},
    {nome:"Toinho Nascimento",numero:"15333",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15333.jpg"},
    {nome:"Tovar",numero:"15100",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15100.jpg"},
    {nome:"Ulisses Barbosa",numero:"50150",partido:"PSOL",cargo:"estadual",foto:"fotos/estadual-50150.jpg"},
    {nome:"Val da Educação",numero:"15009",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15009.jpg"},
    {nome:"Valdenicio da Fetraf",numero:"13455",partido:"PT",cargo:"estadual",foto:"fotos/estadual-13455.jpg"},
    {nome:"Valdilene Queiroz",numero:"11100",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11100.jpg"},
    {nome:"Vitor Ribeiro",numero:"22123",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22123.jpg"},
    {nome:"Vitoria Ohara",numero:"80180",partido:"UP",cargo:"estadual",foto:"fotos/estadual-80180.jpg"},
    {nome:"Wagner Nascimento",numero:"12777",partido:"PDT",cargo:"estadual",foto:"fotos/estadual-12777.jpg"},
    {nome:"Walkíria Rocha",numero:"22111",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22111.jpg"},
    {nome:"Wallber Virgolino",numero:"22190",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22190.jpg"},
    {nome:"Wilson Filho",numero:"10110",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10110.jpg"},
    {nome:"Zé Aldemir",numero:"11666",partido:"PP",cargo:"estadual",foto:"fotos/estadual-11666.jpg"},
    {nome:"Zé de Dunco",numero:"50777",partido:"PSOL",cargo:"estadual",foto:"fotos/estadual-50777.jpg"},
    {nome:"Zé do Mutirão",numero:"15151",partido:"MDB",cargo:"estadual",foto:"fotos/estadual-15151.jpg"},
    {nome:"Zé Medeiros",numero:"22654",partido:"PL",cargo:"estadual",foto:"fotos/estadual-22654.jpg"},
    {nome:"Zezé",numero:"10555",partido:"REPUBLICANOS",cargo:"estadual",foto:"fotos/estadual-10555.jpg"},

    {nome:"Adriano Trajano",numero:"290",partido:"PCO",cargo:"senador",foto:"fotos/senador-290.jpg"},
    {nome:"André Gadelha",numero:"151",partido:"JUNTOS PARA A PARAÍBA DAR O PRÓXIMO PASSO",cargo:"senador",foto:"fotos/senador-151.jpg"},
    {nome:"Dr. Marcelo Queiroga",numero:"222",partido:"PL",cargo:"senador",foto:"fotos/senador-222.jpg"},
    {nome:"João Azevêdo",numero:"400",partido:"COLIGAÇÃO DAQUI PRA MELHOR",cargo:"senador",foto:"fotos/senador-400.jpg"},
    {nome:"João Batista",numero:"801",partido:"UP",cargo:"senador",foto:"fotos/senador-801.jpg"},
    {nome:"Major Fábio",numero:"300",partido:"NOVO",cargo:"senador",foto:"fotos/senador-300.jpg"},
    {nome:"Nabor",numero:"100",partido:"COLIGAÇÃO DAQUI PRA MELHOR",cargo:"senador",foto:"fotos/senador-100.jpg"},
    {nome:"Rinaldo Júnior",numero:"272",partido:"DC",cargo:"senador",foto:"fotos/senador-272.jpg"},
    {nome:"Rosilene Santana",numero:"800",partido:"UP",cargo:"senador",foto:"fotos/senador-800.jpg"},
    {nome:"Veneziano",numero:"155",partido:"JUNTOS PARA A PARAÍBA DAR O PRÓXIMO PASSO",cargo:"senador",foto:"fotos/senador-155.jpg"},

     {nome:"Camilo Duarte",numero:"29",partido:"PCO",cargo:"governador",foto:"fotos/governador-29.jpg"},
    {nome:"Cícero Lucena",numero:"15",partido:"JUNTOS PARA A PARAÍBA DAR O PRÓXIMO PASSO",cargo:"governador",foto:"fotos/governador-15.jpg"},
    {nome:"Efraim Filho",numero:"22",partido:"PL",cargo:"governador",foto:"/src/imgs/efraimfilho.jpg"},
    {nome:"Lucas Ribeiro",numero:"11",partido:"DAQUI PRA MELHOR",cargo:"governador",foto:"fotos/governador-11.jpg"},
    {nome:"Pedro Coutinho",numero:"27",partido:"DC",cargo:"governador",foto:"fotos/governador-27.jpg"},
    {nome:"Yuri Ezequiel",numero:"80",partido:"UP",cargo:"governador",foto:"fotos/governador-80.jpg"},

    {nome:"Clariana Barao",numero:"27",partido:"DC",cargo:"presidente",foto:"fotos/presidente-27.jpg"},
    {nome:"Edmilson Costa",numero:"21",partido:"PCB",cargo:"presidente",foto:"fotos/presidente-21.jpg"},
    {nome:"Escritor Augusto Cury",numero:"70",partido:"BRASIL DOS NOSSOS SONHOS",cargo:"presidente",foto:"fotos/presidente-70.jpg"},
    {nome:"Flavio Bolsonaro",numero:"22",partido:"PL",cargo:"presidente",foto:"fotos/presidente-22.jpg"},
    {nome:"Hertz Dias",numero:"16",partido:"PSTU",cargo:"presidente",foto:"fotos/presidente-16.jpg"},
    {nome:"Leonardo Avalanche",numero:"28",partido:"PRTB",cargo:"presidente",foto:"fotos/presidente-28.jpg"},
    {nome:"Lula",numero:"13",partido:"BRASIL PRONTO PRA MAIS",cargo:"presidente",foto:"fotos/presidente-13.jpg"},
    {nome:"Renan Santos",numero:"14",partido:"MISSÃO",cargo:"presidente",foto:"fotos/presidente-14.jpg"},
    {nome:"Ronaldo Caiado",numero:"55",partido:"PSD",cargo:"presidente",foto:"fotos/presidente-55.jpg"},
    {nome:"Rui Costa Pimenta",numero:"29",partido:"PCO",cargo:"presidente",foto:"fotos/presidente-29.jpg"},
    {nome:"Samara",numero:"80",partido:"UP",cargo:"presidente",foto:"fotos/presidente-80.jpg"},
    {nome:"Veterinário Wilson Grassi",numero:"35",partido:"DEMOCRATA",cargo:"presidente",foto:"fotos/presidente-35.jpg"},
    {nome:"Zema",numero:"30",partido:"NOVO",cargo:"presidente",foto:"fotos/presidente-30.jpg"},

    {nome:"VOTO NULO",numero:"NULO",partido:"SLA",cargo:"presidente",foto:"/src/imgs/branco.jpg"},
    {nome:"VOTO NULO",numero:"NULO",partido:"SLA",cargo:"governador",foto:"/src/imgs/branco.jpg"},
    {nome:"VOTO NULO",numero:"NULO",partido:"SLA",cargo:"senador",foto:"/src/imgs/branco.jpg"},
    {nome:"VOTO NULO",numero:"NULO",partido:"SLA",cargo:"estadual",foto:"/src/imgs/branco.jpg"}

];
try{const st=JSON.parse(localStorage.getItem("cand2026")||"null");if(Array.isArray(st))candidatos=st}catch(_){}
const WHATS_DESTINO="558394113691"; // número que recebe os pedidos, com DDI+DDD, ex.: 5583999999999 (vazio = a pessoa escolhe o contato)
const SHEETS_URL="https://script.google.com/macros/s/AKfycbw_2NdQXiWhMHu4jFYRoVwkl81MPFRE6nFVkhsNGIpl9Izsl4cZ9G_qYssuq3VZjZ5xXQ/exec";   // URL do app da Planilha Google (termina em /exec). Vazio = não envia
const SHEETS_TOKEN="troque-este-codigo"; // igual ao TOKEN do google-apps-script.gs
let pendente=null;
const cargos=[
{id:"federal",tipo:"federal",titulo:"Deputado Federal",fixo:"2266",ico:"🏛️"},
{id:"estadual",tipo:"estadual",titulo:"Deputado Estadual",ico:"📋"},
{id:"sen1",tipo:"senador",titulo:"Senador — 1ª vaga",ico:"⚖️"},
{id:"sen2",tipo:"senador",titulo:"Senador — 2ª vaga",ico:"⚖️"},
{id:"gov",tipo:"governador",titulo:"Governador",ico:"🏢"},
{id:"pres",tipo:"presidente",titulo:"Presidente",ico:"🇧🇷"}];
const short={federal:"Deputado Federal",estadual:"Deputado Estadual",sen1:"Senador 1",sen2:"Senador 2",gov:"Governador",pres:"Presidente"};
// Foto: coloque as imagens na pasta "fotos" (ao lado do index.html) e informe o caminho em "foto". Se o arquivo não existir, aparecem as iniciais.
const av=(x,c="")=>`<span class="av ${c}">${esc(x.nome.split(" ").filter(w=>w.length>2).slice(0,2).map(w=>w[0]).join("").toUpperCase()||x.numero.slice(0,2))}${x.foto?`<img src="${esc(x.foto)}" alt="" onerror="this.remove()">`:""}</span>`;
function pickPhoto(x,after,cb){const f=document.createElement("input");f.type="file";f.accept="image/*";
 f.onchange=()=>{const file=f.files[0];if(!file)return;const img=new Image();img.onload=()=>{const S=160,cv=document.createElement("canvas");cv.width=cv.height=S;
  const m=Math.min(img.width,img.height);cv.getContext("2d").drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,S,S);
  const d=cv.toDataURL("image/jpeg",.8);if(cb)cb(d);else{x.foto=d;after()}};img.src=URL.createObjectURL(file)};f.click()}
const sel={};
const $=s=>document.querySelector(s);
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
 
cargos.forEach((c,i)=>{
 if(c.fixo) sel[c.id]=candidatos.find(x=>x.numero===c.fixo&&x.cargo===c.tipo);
 const d=document.createElement("div");d.className="card";d.id="c-"+c.id;
 d.innerHTML=`<div class="ch"><span class="n">${i+1}</span><span>${c.ico} ${c.titulo}</span></div>
 <div class="slot"></div>`;
 $("#cards").appendChild(d);draw(c);
});
function draw(c){
 const card=$("#c-"+c.id),slot=card.querySelector(".slot"),s=sel[c.id];
 card.classList.toggle("done",!!s);
 if(s){
  slot.innerHTML=`<div class="sel">${av(s,"lg")}<div class="i"><span class="ok">✓ Candidato selecionado</span><div><b>${esc(s.nome)}</b></div><small>${esc(s.partido)}</small></div><span class="num">${s.numero}</span>${c.fixo?"":'<button class="x" aria-label="Remover">×</button>'}</div>`;
  const x=slot.querySelector(".x");if(x)x.onclick=()=>{delete sel[c.id];draw(c);cart()};
 }else{
  slot.innerHTML=`<input type="text" placeholder="🔎 Digite nome ou número..." aria-label="Pesquisar ${c.titulo}" autocomplete="off"><div class="res"></div>`;
  const inp=slot.querySelector("input"),res=slot.querySelector(".res");
  inp.oninput=()=>{
   const q=norm(inp.value.trim());
   if(!q){res.classList.remove("open");return}
   const outro=c.id==="sen1"?"sen2":c.id==="sen2"?"sen1":null;
   const r=candidatos.filter(x=>x.cargo===c.tipo&&!(outro&&sel[outro]===x)&&norm(x.nome+" "+x.numero+" "+x.partido).includes(q));
   res.innerHTML=r.length?"":'<div class="none">Nenhum candidato encontrado.</div>';
   r.forEach(x=>{const b=document.createElement("button");b.type="button";
    b.innerHTML=`<span class="l">${av(x,"sm")}<span>${esc(x.nome)}<small>${esc(x.partido)}</small></span></span><span class="num">${x.numero}</span>`;
    b.onclick=()=>{sel[c.id]=x;draw(c);cart()};res.appendChild(b)});
   res.classList.add("open");
  };
 }
 cart();
}
function cart(){
 $("#cart").innerHTML=cargos.map(c=>{const s=sel[c.id];
  return s?`<div class="row"><span class="l">${av(s,"sm")}<span>${short[c.id]}<em>${esc(s.nome)}</em></span></span><b>${s.numero}</b></div>`
  :`<div class="row"><span>${short[c.id]}</span><span class="empty">a escolher</span></div>`}).join("");
 const all=cargos.every(c=>sel[c.id]);
 const st=[...document.querySelectorAll("#steps span")];
 st.forEach((e,i)=>e.classList.toggle("on",i===(all?1:0)));
}
// material
$("#tel").oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,11);
 e.target.value=v.length>6?`(${v.slice(0,2)}) ${v.slice(2,v.length-4)}-${v.slice(-4)}`:v.length>2?`(${v.slice(0,2)}) ${v.slice(2)}`:v};
$("#cep").oninput=async e=>{let v=e.target.value.replace(/\D/g,"").slice(0,8);
 e.target.value=v.length>5?v.slice(0,5)+"-"+v.slice(5):v;
 if(v.length===8){try{const r=await fetch("https://viacep.com.br/ws/"+v+"/json/");const j=await r.json();
  if(!j.erro){$("#rua").value=j.logradouro||"";$("#bairro").value=j.bairro||"";$("#cidade").value=j.localidade||""}}catch(_){}}};
// validar
function erro(m){const e=$("#err");e.textContent=m;e.style.display="block";e.scrollIntoView({behavior:"smooth",block:"center"});return false}
$("#go").onclick=()=>{try{confirmar()}catch(e){console.error(e);erro("Erro: "+e.message+". Substitua os 3 arquivos (index.html, style.css e script.js) juntos e recarregue a página.")}};
function confirmar(){
 $("#err").style.display="none";
 for(const c of cargos) if(!sel[c.id]) return erro("Ainda falta escolher o candidato para "+short[c.id]+".");
 const m=document.querySelector('[name=mat]:checked');
 if(!m) return erro("Escolha se deseja receber material da campanha.");
 const D={};
 ["nome","tel","rua","num","bairro","cidade","comp","cep"].forEach(id=>D[id]=$("#"+id).value.trim());
 const req=[["nome","seu nome completo"],["tel","o telefone"],["cep","o CEP"],["rua","a rua ou avenida"],["num","o número"],["bairro","o bairro"],["cidade","a cidade"]];
 for(const [id,t] of req) if(!D[id]) return erro("Ainda falta informar "+t+".");
 if(D.tel.replace(/\D/g,"").length<10) return erro("O telefone parece incompleto.");
 if(D.cep.replace(/\D/g,"").length!==8) return erro("O CEP precisa ter 8 números.");
 const nº=String(Math.floor(Math.random()*900000)+100000);
 let h=`<dt>PEDIDO</dt><dd>#${nº}</dd>`;
 h+=`<dt>NOME</dt><dd>${esc(D.nome)}</dd>`;if(D.tel)h+=`<dt>TELEFONE</dt><dd>${esc(D.tel)}</dd>`;
 cargos.forEach(c=>h+=`<dt>${short[c.id].toUpperCase()}</dt><dd class="l" style="display:flex;align-items:center;gap:10px">${av(sel[c.id],"sm")}<span>${esc(sel[c.id].nome)} — ${sel[c.id].numero}</span></dd>`);
 h+=`<dt>MATERIAL</dt><dd>${m.value==="sim"?"Sim":"Não"}</dd>`;
 if(D.rua||D.bairro||D.cidade)h+=`<dt>ENDEREÇO</dt><dd>${esc(D.rua)}${D.num?", "+esc(D.num):""}${D.comp?" — "+esc(D.comp):""}<br>${esc(D.bairro)} ${D.cidade?"· "+esc(D.cidade):""}${D.cep?"<br>CEP "+esc(D.cep):""}</dd>`;
 h+=`<dt>STATUS</dt><dd><span class="st">🟡 Pedido recebido</span></dd>`;
 const L="━━━━━━━━━━━━━━━━━━━━",nm={federal:"Federal",estadual:"Estadual",sen1:"Senador 1",sen2:"Senador 2",gov:"Governador",pres:"Presidente"};
 const msg=[L,"🛵 *PEDIDO #"+nº+"*",L,"","👤 *"+D.nome+"*","📞 "+D.tel,"","🗳️ *SELEÇÕES*",
  ...cargos.map(c=>"• "+nm[c.id]+": "+sel[c.id].nome+" — *"+sel[c.id].numero+"*"),"",
  "📦 *MATERIAL:* "+(m.value==="sim"?"Sim":"Não"),"","📍 *ENTREGA*",
  D.rua+", "+D.num+(D.comp?" — "+D.comp:""),D.bairro+" — "+D.cidade+"/PB","CEP "+D.cep,"",L,"🟡 *STATUS: PEDIDO RECEBIDO*",L].join("\n");
 pendente={token:SHEETS_TOKEN,pedido:nº,nome:D.nome,telefone:D.tel,federal:sel.federal.nome+" — "+sel.federal.numero,estadual:sel.estadual.nome+" — "+sel.estadual.numero,senador1:sel.sen1.nome+" — "+sel.sen1.numero,senador2:sel.sen2.nome+" — "+sel.sen2.numero,governador:sel.gov.nome+" — "+sel.gov.numero,presidente:sel.pres.nome+" — "+sel.pres.numero,material:m.value==="sim"?"Sim":"Não",cep:D.cep,rua:D.rua,numero:D.num,complemento:D.comp,bairro:D.bairro,cidade:D.cidade};
 $("#wa").href="https://wa.me/"+WHATS_DESTINO+"?text="+encodeURIComponent(msg);
 $("#sum").innerHTML=h;openConsent();
 document.querySelectorAll("#steps span").forEach((e,i)=>e.classList.toggle("on",i===2));
};
 
// ---- CONSENTIMENTO ----
function openConsent(){
 if(!$("#consent")){$("#modal").classList.add("open");return}
 $("#c1").checked=$("#c2").checked=false;$("#cok").disabled=true;$("#consent").classList.add("open")}
if($("#consent")){
 const chk=()=>$("#cok").disabled=!($("#c1").checked&&$("#c2").checked);
 $("#c1").onchange=$("#c2").onchange=chk;
 $("#cback").onclick=()=>$("#consent").classList.remove("open");
 $("#cok").onclick=()=>{if(pendente&&SHEETS_URL){try{fetch(SHEETS_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(pendente)}).catch(()=>{})}catch(_){}}pendente=null;$("#consent").classList.remove("open");$("#modal").classList.add("open")};
}
// ---- ADMIN (#admin) ----
let aFoto="";
const save=()=>{try{localStorage.setItem("cand2026",JSON.stringify(candidatos))}catch(_){}};
const cNome={federal:"Dep. Federal",estadual:"Dep. Estadual",senador:"Senador",governador:"Governador",presidente:"Presidente"};
function aList(){$("#alist").innerHTML=candidatos.map((x,i)=>`<div class="li">${av(x)}<div class="i"><b>${esc(x.nome)}</b> · ${x.numero}<br><small>${cNome[x.cargo]} — ${esc(x.partido)}</small></div><button class="x" data-i="${i}" aria-label="Excluir">×</button></div>`).join("")||'<div class="none">Nenhum candidato.</div>';
 $("#alist").querySelectorAll(".x").forEach(b=>b.onclick=()=>{candidatos.splice(+b.dataset.i,1);save();aList()})}
$("#afoto").onclick=()=>pickPhoto({},null,d=>{aFoto=d;$("#aprev").innerHTML=av({nome:"",numero:"",foto:d},"lg")});
$("#asave").onclick=()=>{const n=$("#anome").value.trim(),u=$("#anum").value.trim().replace(/\D/g,""),pt=$("#apart").value.trim(),cg=$("#acargo").value;
 if(!n||!u||!pt){$("#aerr").textContent="Preencha nome, número e partido.";return}
 $("#aerr").textContent="";const i=candidatos.findIndex(x=>x.cargo===cg&&x.numero===u),o={nome:n,numero:u,partido:pt,cargo:cg,foto:aFoto||(i>=0?candidatos[i].foto:"")};
 if(i>=0)candidatos[i]=o;else candidatos.push(o);save();aList();aFoto="";$("#aprev").innerHTML="";["anome","anum","apart"].forEach(k=>$("#"+k).value="")};
$("#aexp").onclick=()=>{$("#ajson").value=JSON.stringify(candidatos,null,1)};
function route(){const on=location.hash==="#admin";document.body.classList.toggle("adm",on);
 if(on)aList();else cargos.forEach(c=>{if(c.fixo)sel[c.id]=candidatos.find(x=>x.numero===c.fixo&&x.cargo===c.tipo);if(sel[c.id]&&!candidatos.includes(sel[c.id]))delete sel[c.id];draw(c)})}
addEventListener("hashchange",route);route();
