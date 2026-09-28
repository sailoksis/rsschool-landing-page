const products = [
    // SEATING
    {
      id: 'seating-01',
      category: 'seating',
      name: 'Cognac Lounge Chair',
      designer: 'Italian Design',
      period: '1970s',
      origin: 'Italy',
      material: 'Leather · Chrome',
      description:
        'A sculptural lounge chair with warm cognac leather upholstery and a polished chrome frame.',
      image: 'assets/images/seating-01.webp',
      price: 1850,
      parameters: {
        condition: [
          {
            name: 'Original',
            price: 0,
          },
          {
            name: 'Restored',
            price: 250,
          },
          {
            name: 'Museum',
            price: 450,
          },
        ],
        delivery: [
          {
            name: 'Pickup',
            price: 0,
          },
          {
            name: 'Europe',
            price: 180,
          },
          {
            name: 'Worldwide',
            price: 420,
          },
        ],
      },
    },
    {
      id: 'seating-02',
      category: 'seating',
      name: 'Bouclé Lounge Chair',
      designer: 'European Design',
      period: '1960s',
      origin: 'France',
      material: 'Bouclé · Oak',
      description:
        'A soft sculptural lounge chair combining textured bouclé upholstery with a solid oak structure.',
      image: 'assets/images/seating-02.webp',
      price: 1650,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 220 },
          { name: 'Museum', price: 400 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 160 },
          { name: 'Worldwide', price: 390 },
        ],
      },
    },
    {
      id: 'seating-03',
      category: 'seating',
      name: 'Walnut Armchair',
      designer: 'Danish Modern',
      period: '1960s',
      origin: 'Denmark',
      material: 'Walnut · Fabric',
      description:
        'A refined Scandinavian armchair defined by its walnut frame and restrained geometric proportions.',
      image: 'assets/images/seating-03.webp',
      price: 1420,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 190 },
          { name: 'Museum', price: 360 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 150 },
          { name: 'Worldwide', price: 370 },
        ],
      },
    },
    {
      id: 'seating-04',
      category: 'seating',
      name: 'Leather Club Chair',
      designer: 'French Design',
      period: '1970s',
      origin: 'France',
      material: 'Leather · Wood',
      description:
        'A generous vintage club chair with aged leather, deep proportions and a strong architectural profile.',
      image: 'assets/images/seating-04.webp',
      price: 2100,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 280 },
          { name: 'Museum', price: 480 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 190 },
          { name: 'Worldwide', price: 450 },
        ],
      },
    },
    {
      id: 'seating-05',
      category: 'seating',
      name: 'Low Lounge Chair',
      designer: 'Italian Modern',
      period: '1970s',
      origin: 'Italy',
      material: 'Fabric · Steel',
      description:
        'A low-profile lounge chair with relaxed proportions and a distinctly Italian modernist character.',
      image: 'assets/images/seating-05.webp',
      price: 1750,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 230 },
          { name: 'Museum', price: 420 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 170 },
          { name: 'Worldwide', price: 400 },
        ],
      },
    },
    {
      id: 'seating-06',
      category: 'seating',
      name: 'Oak Easy Chair',
      designer: 'Scandinavian Design',
      period: '1950s',
      origin: 'Sweden',
      material: 'Oak · Wool',
      description:
        'A Scandinavian easy chair pairing a solid oak frame with warm wool upholstery and balanced proportions.',
      image: 'assets/images/seating-06.webp',
      price: 1380,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 180 },
          { name: 'Museum', price: 340 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 145 },
          { name: 'Worldwide', price: 350 },
        ],
      },
    },
    {
      id: 'seating-07',
      category: 'seating',
      name: 'Chrome Accent Chair',
      designer: 'European Modern',
      period: '1970s',
      origin: 'Germany',
      material: 'Chrome · Leather',
      description:
        'A precise accent chair featuring a polished chrome structure and contrasting leather upholstery.',
      image: 'assets/images/seating-07.webp',
      price: 1580,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 210 },
          { name: 'Museum', price: 380 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 155 },
          { name: 'Worldwide', price: 380 },
        ],
      },
    },
    {
      id: 'seating-08',
      category: 'seating',
      name: 'Sculptural Armchair',
      designer: 'Postmodern Design',
      period: '1980s',
      origin: 'Italy',
      material: 'Fabric · Wood',
      description:
        'A distinctive postmodern armchair with sculptural lines and an expressive upholstered silhouette.',
      image: 'assets/images/seating-08.webp',
      price: 1950,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 260 },
          { name: 'Museum', price: 440 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 180 },
          { name: 'Worldwide', price: 430 },
        ],
      },
    },
  
    // TABLES
    {
      id: 'table-01',
      category: 'tables',
      name: 'Travertine Coffee Table',
      designer: 'Italian Design',
      period: '1970s',
      origin: 'Italy',
      material: 'Travertine',
      description:
        'A monolithic coffee table celebrating the natural texture and warm tones of Italian travertine.',
      image: 'assets/images/tables/table-01.webp',
      price: 2300,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 260 },
          { name: 'Museum', price: 480 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 240 },
          { name: 'Worldwide', price: 560 },
        ],
      },
    },
    {
      id: 'table-02',
      category: 'tables',
      name: 'Smoked Glass Table',
      designer: 'European Modern',
      period: '1970s',
      origin: 'Italy',
      material: 'Glass · Chrome',
      description:
        'A restrained modernist table combining smoked glass with a polished geometric metal base.',
      image: 'assets/images/tables/table-02.webp',
      price: 1900,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 220 },
          { name: 'Museum', price: 410 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 210 },
          { name: 'Worldwide', price: 490 },
        ],
      },
    },
    {
      id: 'table-03',
      category: 'tables',
      name: 'Walnut Dining Table',
      designer: 'Danish Modern',
      period: '1960s',
      origin: 'Denmark',
      material: 'Walnut',
      description:
        'An elegant Danish dining table with a warm walnut surface and carefully balanced tapered legs.',
      image: 'assets/images/tables/table-03.webp',
      price: 2850,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 300 },
          { name: 'Museum', price: 520 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 260 },
          { name: 'Worldwide', price: 620 },
        ],
      },
    },
    {
      id: 'table-04',
      category: 'tables',
      name: 'Brutalist Side Table',
      designer: 'European Design',
      period: '1970s',
      origin: 'Belgium',
      material: 'Oak',
      description:
        'A compact brutalist side table with expressive joinery, substantial proportions and a tactile oak surface.',
      image: 'assets/images/tables/table-04.webp',
      price: 1250,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 170 },
          { name: 'Museum', price: 320 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 130 },
          { name: 'Worldwide', price: 310 },
        ],
      },
    },
    {
      id: 'table-05',
      category: 'tables',
      name: 'Marble Console',
      designer: 'Italian Modern',
      period: '1980s',
      origin: 'Italy',
      material: 'Marble · Brass',
      description:
        'A refined console table combining richly veined marble with restrained brass detailing.',
      image: 'assets/images/tables/table-05.webp',
      price: 2600,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 290 },
          { name: 'Museum', price: 510 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 250 },
          { name: 'Worldwide', price: 590 },
        ],
      },
    },
    {
      id: 'table-06',
      category: 'tables',
      name: 'Round Pedestal Table',
      designer: 'Space Age Design',
      period: '1970s',
      origin: 'France',
      material: 'Lacquer · Metal',
      description:
        'A round pedestal table with a clean space-age silhouette and a smooth lacquered finish.',
      image: 'assets/images/tables/table-06.webp',
      price: 2150,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 240 },
          { name: 'Museum', price: 430 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 220 },
          { name: 'Worldwide', price: 520 },
        ],
      },
    },
  
    // LIGHTING
    {
      id: 'lighting-01',
      category: 'lighting',
      name: 'Opaline Table Lamp',
      designer: 'Italian Design',
      period: '1970s',
      origin: 'Italy',
      material: 'Opaline Glass · Brass',
      description:
        'A softly glowing table lamp combining opaline glass with understated brass details.',
      image: 'assets/images/lighting/lighting-01.webp',
      price: 980,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 120 },
          { name: 'Museum', price: 220 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 90 },
          { name: 'Worldwide', price: 210 },
        ],
      },
    },
    {
      id: 'lighting-02',
      category: 'lighting',
      name: 'Chrome Floor Lamp',
      designer: 'European Modern',
      period: '1970s',
      origin: 'Germany',
      material: 'Chrome · Steel',
      description:
        'A tall modernist floor lamp with a polished chrome finish and a precise architectural silhouette.',
      image: 'assets/images/lighting/lighting-02.webp',
      price: 1450,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 160 },
          { name: 'Museum', price: 290 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 120 },
          { name: 'Worldwide', price: 280 },
        ],
      },
    },
    {
      id: 'lighting-03',
      category: 'lighting',
      name: 'Mushroom Lamp',
      designer: 'Space Age Design',
      period: '1970s',
      origin: 'Italy',
      material: 'Glass · Metal',
      description:
        'A playful mushroom-shaped lamp reflecting the experimental forms of 1970s space-age design.',
      image: 'assets/images/lighting/lighting-03.webp',
      price: 1120,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 140 },
          { name: 'Museum', price: 250 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 95 },
          { name: 'Worldwide', price: 230 },
        ],
      },
    },
    {
      id: 'lighting-04',
      category: 'lighting',
      name: 'Brass Pendant Light',
      designer: 'Scandinavian Design',
      period: '1960s',
      origin: 'Denmark',
      material: 'Brass',
      description:
        'A Scandinavian pendant with a warm brass surface designed to cast soft, focused light.',
      image: 'assets/images/lighting/lighting-04.webp',
      price: 1280,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 150 },
          { name: 'Museum', price: 270 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 100 },
          { name: 'Worldwide', price: 240 },
        ],
      },
    },
    {
      id: 'lighting-05',
      category: 'lighting',
      name: 'Ceramic Table Lamp',
      designer: 'French Design',
      period: '1960s',
      origin: 'France',
      material: 'Ceramic · Fabric',
      description:
        'A tactile ceramic table lamp with an expressive handmade base and a softly proportioned shade.',
      image: 'assets/images/lighting/lighting-05.webp',
      price: 890,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 110 },
          { name: 'Museum', price: 210 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 85 },
          { name: 'Worldwide', price: 200 },
        ],
      },
    },
    {
      id: 'lighting-06',
      category: 'lighting',
      name: 'Sculptural Floor Lamp',
      designer: 'Italian Modern',
      period: '1980s',
      origin: 'Italy',
      material: 'Metal · Glass',
      description:
        'A sculptural floor lamp balancing geometric metal elements with diffused glass illumination.',
      image: 'assets/images/lighting/lighting-06.webp',
      price: 1680,
      parameters: {
        condition: [
          { name: 'Original', price: 0 },
          { name: 'Restored', price: 180 },
          { name: 'Museum', price: 320 },
        ],
        delivery: [
          { name: 'Pickup', price: 0 },
          { name: 'Europe', price: 130 },
          { name: 'Worldwide', price: 300 },
        ],
      },
    },
  ];