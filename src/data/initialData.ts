import { WigProduct, BeautyService, CustomerLook, BusinessConfig } from '../types';

export const initialBusinessConfig: BusinessConfig = {
  brandName: 'Emmi Wigs',
  logo: '/assets/aistudio/logo_ee8b5b46.jpg',
  phone: '0797238278',
  phoneDisplay: '+254 797 238278',
  whatsappNumber: '254797238278',
  locationName: 'Nairobi, Kenya',
  address: 'Studio Suite, Nairobi CBD / Delivery Nationwide (Exact Studio Location to be confirmed by owner)',
  email: 'info@emmiwigs.co.ke',
  openingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: By Appointment',
  currency: 'Ksh',
  instagram: 'https://instagram.com/emmi_wigs',
  tiktok: 'https://tiktok.com/@emmi_wigs',
  facebook: 'https://facebook.com/emmiwigs',
};

export const productsData: WigProduct[] = [
  {
    id: 'burmese-curly-16',
    name: 'Burmese Curly Wig (Colour Piano Highlights) 16"',
    category: 'Curls & Waves',
    price: 15000,
    lengths: ['16"'],
    colors: ['Piano Highlight (Caramel & Natural Black)'],
    laceType: 'HD Transparent Lace Frontal',
    density: '180% High Density',
    description: 'Bestselling luxury Burmese curly human hair wig featuring our signature piano caramel highlight colorway. Features tight, buoyant spiral curls with deep luster. Free professional installation included with purchase.',
    features: [
      'Free salon installation included',
      'Burmese curl pattern with lasting bounce',
      'Pre-plucked natural hairline with baby hair',
      'HD transparent breathable lace'
    ],
    image: '/assets/aistudio/5_864c0718.jpg',
    originalFilename: '5_864c0718.jpg',
    badge: 'Free Installation',
    inStock: true
  },
  {
    id: 'sdd-straight-28',
    name: '13x4 Bone Straight Wig 28"',
    category: 'Lace Wigs',
    price: 22500,
    priceNote: 'Ksh 22,500 (200g) / Ksh 28,500 (300g)',
    lengths: ['28"'],
    colors: ['Natural Jet Black (1B)'],
    laceType: '13x4 HD Ear-to-Ear Lace Frontal',
    density: '200g / 300g Heavy Fullness',
    description: 'Floor-length sleek bone straight human hair. Delivers a mirror glass silk-press sheen that resists tangling and humidity. Features a generous 13x4 lace frontal for deep side or middle parts.',
    features: [
      'Genuine single donor drawn (SDD) virgin hair',
      'Bone straight glass shine that holds heat styles',
      '13x4 large parting area for versatile styling',
      'Available in 200g or ultra-thick 300g fullness'
    ],
    image: '/assets/aistudio/1_ddaf70cd.jpg',
    originalFilename: '1_ddaf70cd.jpg',
    badge: 'Best Seller',
    inStock: true
  },
  {
    id: 'sdd-bob-12-collection',
    name: '5x5 SDD Bob Collection 12"',
    category: 'Bobs & Pixies',
    price: 12500,
    lengths: ['12"'],
    colors: ['Jet Black', 'Honey Blonde Streak', 'Chestnut Brown', 'Deep Wine Burgundy'],
    laceType: '5x5 HD Lace Closure',
    density: '180% Density',
    description: 'Our viral 12-inch SDD blunt bob collection. Crafted with pre-plucked 5x5 HD closures and silky straight texture. Available in natural noir and rich salon-dyed highlights.',
    features: [
      'Crisp blunt precision cut',
      'Generous 5x5 deep parting HD closure',
      'Ready-to-wear glueless fit with combs & elastic band',
      'Direct order via WhatsApp: 0797238278'
    ],
    image: '/assets/aistudio/12_660c150e.jpg',
    originalFilename: '12_660c150e.jpg',
    badge: 'Trending',
    inStock: true
  },
  {
    id: 'sdd-bob-14',
    name: 'SDD Bobwig 14" (13x4 Lace Front)',
    category: 'Bobs & Pixies',
    price: 13500,
    lengths: ['14"'],
    colors: ['Natural Black (1B)'],
    laceType: '13x4 HD Lace Frontal',
    density: '150% Natural Density',
    description: 'Chic, shoulder-grazing blunt bob cut from pristine SDD straight hair. Impeccably cut with even ends that frame the jawline gracefully. Free installation service included.',
    features: [
      'Free salon installation included',
      'Precision blunt cut silhouette',
      'Pre-bleached knots and contoured hairline',
      'Silky flow with zero stiff ends'
    ],
    image: '/assets/aistudio/2_e3e287d0.jpg',
    originalFilename: '2_e3e287d0.jpg',
    badge: 'Free Installation',
    inStock: true
  },
  {
    id: 'sdd-roma-curl-18',
    name: 'SDD Roma Curl Wig 16" – 18"',
    category: 'Curls & Waves',
    price: 15000,
    priceNote: '16": Ksh 15,000 | 18": Ksh 16,500',
    lengths: ['16"', '18"'],
    colors: ['#P4/30 Honey Brown', '#99J Deep Wine Burgundy', '#1B Natural Black'],
    laceType: 'HD Lace Frontal / Closure',
    density: '180% Density',
    description: 'Romantic deep Roma curls with voluminous ringlets that bounce as you move. Can be styled with side cornrows and pearl accents or worn cascading over the shoulders. Includes free custom styling.',
    features: [
      'Free professional styling included',
      'Rich multi-tonal color options available',
      'Retains curl definition with simple water & leave-in mist',
      'Snug adjustable cap with security combs'
    ],
    image: '/assets/aistudio/3_f148eb6f.jpg',
    originalFilename: '3_f148eb6f.jpg',
    badge: 'Free Styling',
    inStock: true
  },
  {
    id: 'kim-k-bob-10',
    name: 'Kim K 2x6 Bob Wig 10"',
    category: 'Bobs & Pixies',
    price: 7000,
    lengths: ['10"'],
    colors: ['Jet Black (1B)'],
    laceType: '2x6 Deep HD Closure',
    density: '150% Density',
    description: 'The iconic Kim K sharp bob with deep 6-inch center part lace closure. Compact, lightweight, effortlessly sleek, and comfortable for daily wear or formal events.',
    features: [
      'Deep 6" clean parting space',
      'Affordable luxury pricing at Ksh 7,000',
      'Glueless elastic band ready-to-wear setup',
      'Featherweight feel for all-day comfort'
    ],
    image: '/assets/aistudio/4_ad2655cc.jpg',
    originalFilename: '4_ad2655cc.jpg',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'finger-wave-vintage',
    name: 'Finger Wave Styled Wig 6"',
    category: 'Bobs & Pixies',
    price: 1800,
    priceNote: 'Ksh 1,800 Unstyled | Ksh 2,500 Fully Sculpted & Styled',
    lengths: ['6" Short'],
    colors: ['Blonde (1)', 'Caramel Honey (2)', 'Copper Auburn (3)', 'Red Black Ombre (4)', 'Burgundy (5)', 'Two-tone Blonde (6)', 'Crimson Red (7)'],
    laceType: 'Comfort Form-fitting Cap',
    density: 'Sculpted Silhouette',
    description: 'Statement high-glamour vintage finger wave wig. Hand-sculpted wave ridges that sit close to the scalp for an editorial retro look that turns heads. Available in 7 breathtaking shades.',
    features: [
      'Expertly molded salon waves',
      'Available in 7 custom shade variations',
      'Option to order pre-styled or raw wave base',
      'Perfect for weddings, galas, and photoshoot moments'
    ],
    image: '/assets/aistudio/7_94ca1f98.jpg',
    originalFilename: '7_94ca1f98.jpg',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'pixie-wigs-6',
    name: 'Chic Short Pixie Cut Wigs 6"',
    category: 'Bobs & Pixies',
    price: 3500,
    lengths: ['6"'],
    colors: ['Honey Blonde', 'Auburn Copper', 'Black/Burgundy', 'Electric Pink', 'Ruby Red', 'Natural Black'],
    laceType: 'Lace T-Part / Full Cap',
    density: 'Full Textured Layers',
    description: 'Effortless edgy pixie cut wigs with soft feathered face-framing layers and clean nape finish. Featherlight and breathable for active women on the go.',
    features: [
      'Great value at Ksh 3,500',
      '11 bold color selections in stock',
      'Zero glue or tape required',
      'Sweat-resistant lightweight inner construction'
    ],
    image: '/assets/aistudio/6_73cba78f.jpg',
    originalFilename: '6_73cba78f.jpg',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'sdd-bouncy-18',
    name: 'SDD Bouncy Wig (Colour 1B/4) 18"',
    category: 'Curls & Waves',
    price: 18000,
    lengths: ['18"'],
    colors: ['1B/4 Ombre (Natural Black into Warm Chocolate)'],
    laceType: '13x4 HD Transparent Lace Frontal',
    density: '180% High Density',
    description: 'Lustrous SDD human hair with cascading voluminous barrel curls and soft caramel ombre tones that brighten the complexion.',
    features: [
      'Single donor raw cuticle aligned hair',
      'Holds tight, bouncy curls all day',
      'Pre-plucked natural hairline with baby hair',
      'Includes complimentary styling session'
    ],
    image: '/assets/aistudio/10_b63f9771.jpg',
    originalFilename: '10_b63f9771.jpg',
    badge: 'Best Seller',
    inStock: true
  },
  {
    id: 'coloured-bodywave-16',
    name: 'Coloured Bodywave Wig 16" – 18"',
    category: 'Lace Wigs',
    price: 12000,
    priceNote: '16": Ksh 12,000 | 18": Ksh 13,500',
    lengths: ['16"', '18"'],
    colors: ['Piano Caramel & Honey Blonde (#P4/27)'],
    laceType: '13x4 HD Lace Frontal',
    density: '180% Density',
    description: 'Expertly lifted and toned multi-dimensional piano highlights. Harmonious blend of rich caramel and warm honey blonde ribbons that illuminate your facial features under sunlight and studio flash.',
    features: [
      'Custom pre-toned multi-dimensional colorway',
      '13x4 parting space for center or deep side parts',
      'Silk smooth texture with bouncy wave retention',
      'HD lace for an undetectable hairline melt'
    ],
    image: '/assets/aistudio/11_c9be5d1c.jpg',
    originalFilename: '11_c9be5d1c.jpg',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'sdd-straight-colour4-18',
    name: 'SDD Straight Wig (Colour #4 Chocolate Brown) 18"',
    category: 'Lace Wigs',
    price: 20000,
    lengths: ['18"'],
    colors: ['#4 Rich Chocolate Brown'],
    laceType: '13x4 HD Lace Frontal',
    density: '200g Full Density',
    description: 'Warm, elegant #4 milk-chocolate brown straight human hair wig with brilliant shine, zero frizz, and buttery smooth touch.',
    features: [
      'Rich multi-dimensional chocolate brown hue',
      'Smooth cuticles that glide through fingers',
      '13x4 ear-to-ear HD lace frontal',
      'Can be curled, flat ironed, or styled freely'
    ],
    image: '/assets/aistudio/13_98104999.jpg',
    originalFilename: '13_98104999.jpg',
    badge: 'New Arrival',
    inStock: true
  },
  {
    id: 'deepwave-wig-24',
    name: 'Luxury Deepwave Wig 24"',
    category: 'Curls & Waves',
    price: 22500,
    lengths: ['24"'],
    colors: ['Natural Black (1B)'],
    laceType: '13x4 HD Transparent Lace Frontal',
    density: '200g Full Glamour Fullness',
    description: 'Goddess length 24-inch deep wave curls. Dense, luscious, and ultra-defined wave pattern that looks breathtaking both wet and dry.',
    features: [
      'Deep, juicy waves with natural movement',
      'Thick from root to tips with zero sparse ends',
      'Free salon installation included',
      'Low maintenance: wash & condition to reset pattern'
    ],
    image: '/assets/aistudio/14_0a3213ce.jpg',
    originalFilename: '14_0a3213ce.jpg',
    badge: 'Free Installation',
    inStock: true
  },
  {
    id: 'sdd-pixie-curl-18',
    name: 'SDD Pixie Curl Voluminous Wig 18"',
    category: 'Curls & Waves',
    price: 16000,
    lengths: ['18"'],
    colors: ['Natural Black (1B)'],
    laceType: 'HD Lace Frontal',
    density: '180% Density',
    description: 'Plump, touchable pixie curls with instant volume and soft bounce. Features a lightweight, breathable inner cap for everyday wear in all seasons.',
    features: [
      'Voluminous ringlets that stay defined',
      'Soft texture that never mats or tangles',
      'Custom pre-plucked lace hairline',
      'Ready to ship or install in studio'
    ],
    image: '/assets/aistudio/15_6f0e89da.jpg',
    originalFilename: '15_6f0e89da.jpg',
    badge: 'Trending',
    inStock: true
  },
  {
    id: 'knotless-braided-wig',
    name: 'Handcrafted Knotless Braided Wig',
    category: 'Braided Wigs',
    price: 3000,
    priceNote: 'Ksh 3,000',
    lengths: ['30" Waist Length'],
    colors: ['Natural Black (1B)', '1B/30 Ombre', 'Burgundy 99J'],
    laceType: 'Full Frontal Scalp Illusion Lace',
    density: 'Lightweight Braided Finish',
    description: 'Skip 8 hours in the salon chair. Handcrafted knotless braided lace wigs featuring neat square partings, lightweight braids, and natural baby edges.',
    features: [
      'Ultra lightweight braided synthetic strands (no neck strain)',
      'Natural scalp simulation lace base',
      'Smooth curved cornrow patterns or micro twists',
      'Includes free elastic band for secure hold'
    ],
    image: '/assets/aistudio/16_88bffb02.jpg',
    originalFilename: '16_88bffb02.jpg',
    badge: 'Protective Style',
    inStock: true
  },
  {
    id: 'micro-twist-braided-wig',
    name: 'Micro Twist Braided Lace Front Wig',
    category: 'Braided Wigs',
    price: 2500,
    lengths: ['28" Length'],
    colors: ['Jet Black (1B)'],
    laceType: 'Lace Scalp Illusion Base',
    density: 'Full Density Lightweight',
    description: 'Finely spun micro twist braids that fall effortlessly past the shoulders. Zero tension on natural hair edges and virtually zero daily maintenance.',
    features: [
      'Incredible value at Ksh 2,500',
      'Durable tight twists that do not unravel',
      'Breathable cap suitable for active lifestyles',
      'Adjustable sizing straps inside'
    ],
    image: '/assets/aistudio/OO_962ca1af.jpg',
    originalFilename: 'OO_962ca1af.jpg',
    badge: 'Value Pick',
    inStock: true
  },
  {
    id: 'headband-curly-wig',
    name: 'Throw-on-and-Go Headband Curly Wig',
    category: 'Curls & Waves',
    price: 3500,
    lengths: ['16" Curls'],
    colors: ['Natural Black (1B)'],
    laceType: 'Glueless Headband Cap (No Glue Required)',
    density: '150% Density',
    description: 'The ultimate 2-minute morning beauty solution. No lace, no glue, no gel. Simply secure the integrated velcro headband and head out the door looking flawless.',
    features: [
      'Instant wear in under 2 minutes',
      'Gentle on sensitive edges and hairlines',
      'Compatible with decorative wraps and headbands',
      'Affordable price at Ksh 3,500'
    ],
    image: '/assets/aistudio/QQ_f6a6d3f6.jpg',
    originalFilename: 'QQ_f6a6d3f6.jpg',
    badge: 'Glueless',
    inStock: true
  },
  {
    id: 'enzo-keratin-serum',
    name: 'Enzo Professional Keratin Hair Serum (100ml)',
    category: 'Hair Care & Accessories',
    price: 1200,
    priceNote: '100ml Bottle',
    description: 'Enzo Professional Keratin Hair Serum penetrates deeply into human hair fibers to seal cuticles, prevent frizz, provide thermal protection, and impart a glass-like mirror sheen.',
    features: [
      'Enzo Professional 100ml Keratin Hair Serum',
      'Prevents dryness, frizz, and flyaways on all textures',
      'Non-greasy, featherweight formula',
      'Extends the lifespan of human hair wigs significantly'
    ],
    image: '/assets/aistudio/8_82484706.jpg',
    originalFilename: '8_82484706.jpg',
    badge: 'Essential',
    inStock: true
  },
  {
    id: 'luodais-shine-mist',
    name: "L'Uodais Professional Salon No. 5 Noir Shine Mist",
    category: 'Hair Care & Accessories',
    price: 1000,
    priceNote: 'Salon Perfume Hair Oil',
    description: "Infused with fine salon fragrance and botanical oils, L'Uodais No. 5 Noir mist delivers instant radiance and silky texture while neutralizing odor.",
    features: [
      'Fine salon mist nozzle for even coverage',
      'Long-lasting luxury fragrance',
      'Tames static and flyaway strands',
      'Adds instant red-carpet luster'
    ],
    image: '/assets/aistudio/XX_63c7cf10.jpg',
    originalFilename: 'XX_63c7cf10.jpg',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'luxury-pearl-headbands',
    name: 'Crystal & Pearl Embellished Luxury Headbands',
    category: 'Hair Care & Accessories',
    price: 300,
    priceNote: 'Ksh 300 each (Call / WhatsApp: 0797238278)',
    description: 'Handcrafted luxury headbands encrusted with lustrous faux pearls and sparkling crystal rhinestones. Perfect for finishing your wig style for special occasions.',
    features: [
      'Priced at only Ksh 300 per piece',
      'Gentle non-snag teeth to protect lace hairlines',
      'Gold, Rose, Silver, and Pearl designs',
      'Ideal for wedding styling, dates, and church functions'
    ],
    image: '/assets/aistudio/9_f5d7eb63.jpg',
    originalFilename: '9_f5d7eb63.jpg',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'pearl-crystal-hairpins',
    name: 'Luminous Pearl & Rhinestone Luxury Hair Clip Set',
    category: 'Hair Care & Accessories',
    price: 350,
    description: 'Delicate gold-tone hair clip barrettes featuring cascading pearls and geometric diamond facets. Beautifully accents side-parts and sleek bobs.',
    features: [
      'Set of high-sheen clips and barrettes',
      'Comfort-grip clips that do not pull wig lace',
      'Adds instant elegance to any hairdo'
    ],
    image: '/assets/aistudio/SS_ea3f46fb.jpg',
    originalFilename: 'SS_ea3f46fb.jpg',
    badge: 'New',
    inStock: true
  }
];

export const servicesData: BeautyService[] = [
  {
    id: 'lace-front-install',
    title: 'Lace-Front Wig Installation',
    category: 'Installation',
    priceText: 'Free with select wigs | Inquire for BYO Wig',
    duration: '1 hr 30 mins',
    description: 'Our signature melt service. We customize your lace to match your exact skin tone, bleach knots to eradicate black dots, custom-pluck the hairline, and securely install the unit with waterproof adhesive or glueless band.',
    includes: [
      'Skin tone lace tinting & matching',
      'Custom hairline plucking & edge design',
      'Cornrow braid-down under cap',
      'Melted HD finish with styling of choice'
    ],
    image: '/assets/aistudio/4_ad2655cc.jpg',
    originalFilename: '4_ad2655cc.jpg',
    isConfirmed: true,
    badge: 'Signature Service'
  },
  {
    id: 'frontal-closure-install',
    title: '5x5 Closure & Bob Precision Installation',
    category: 'Installation',
    priceText: 'Subject to consultation',
    duration: '1 hr 15 mins',
    description: 'Seamless installation for 4x4, 5x5, and 13x4 closures and bobs. We ensure razor-flat braid foundations, precise parting alignment, and undetectable scalp illusion.',
    includes: [
      'Precision parting alignment',
      'Scalp illusion melt',
      'Flat laying technique',
      'Heat styling (Bone straight or wand waves)'
    ],
    image: '/assets/aistudio/12_660c150e.jpg',
    originalFilename: '12_660c150e.jpg',
    isConfirmed: true,
    badge: 'Popular'
  },
  {
    id: 'wig-revamping-restyling',
    title: 'Wig Revamping & Restyling',
    category: 'Care & Maintenance',
    priceText: 'Inquire on WhatsApp: 0797238278',
    duration: '24 – 48 hrs turnaround',
    description: 'Breathe brand new life into your worn or tangled wigs. Includes deep protein conditioning wash, lace revitalization, knot re-tightening, and a crisp fresh cut or curl refresh.',
    includes: [
      'Deep clarifying & moisture replenishment wash',
      'Lace clean-up (residue removal)',
      'Restoration of natural curl pattern or silk press',
      'Trimming of split ends if desired'
    ],
    image: '/assets/aistudio/3_f148eb6f.jpg',
    originalFilename: '3_f148eb6f.jpg',
    isConfirmed: true,
    badge: 'Restoration'
  },
  {
    id: 'wig-custom-color',
    title: 'Wig Custom Coloring & Piano Highlights',
    category: 'Styling',
    priceText: 'Custom Quote on Request',
    duration: 'Consultation required',
    description: 'Transform your look with custom coloring. From rich 99J burgundy wine, warm caramel piano highlights, to copper ginger and ice blondes without compromising hair cuticle integrity.',
    includes: [
      'Hair strand test & consultation',
      'Precision balayage, highlight, or full dip-dye',
      'Deep post-color conditioning gloss treatment',
      'Heat styling to showcase dimensional color'
    ],
    image: '/assets/aistudio/11_c9be5d1c.jpg',
    originalFilename: '11_c9be5d1c.jpg',
    isConfirmed: true,
    badge: 'Custom Color'
  },
  {
    id: 'wig-removal-reinstall',
    title: 'Wig Removal & Reinstalling',
    category: 'Care & Maintenance',
    priceText: 'Inquire via WhatsApp',
    duration: '1 hr',
    description: 'Safe, painless adhesive dissolution that preserves your natural edges and lace netting, followed by clarifying cleanse and clean reinstall.',
    includes: [
      'Gentle solvent adhesive removal (Zero edge damage)',
      'Lace cleaning of adhesive buildup',
      'Scalp hydration & massage',
      'Fresh re-install & styling'
    ],
    image: '/assets/aistudio/2_e3e287d0.jpg',
    originalFilename: '2_e3e287d0.jpg',
    isConfirmed: true,
    badge: 'Maintenance'
  },
  {
    id: 'consultation-fitting',
    title: 'Wig Fitting & Consultation with Emmi',
    category: 'Consultation',
    priceText: 'Complimentary with Wig Purchase',
    duration: '30 mins',
    description: 'Not sure which wig texture, length, or cap size suits your lifestyle and face shape? Schedule a personal one-on-one fitting session with Emmi, our founder and lead stylist.',
    includes: [
      'Accurate head measurement for snug cap fit',
      'Face shape & skin undertone lace matching',
      'Try-on sessions with available units',
      'Personalized hair care advice'
    ],
    image: '/assets/aistudio/Emmi.jpg',
    originalFilename: 'Emmi.jpg',
    isConfirmed: true,
    badge: 'Complimentary'
  }
];

export const customerLooksData: CustomerLook[] = [
  {
    id: 'look-1',
    title: 'Radiant Honey Piano Caramel Curls',
    category: 'Bouncy Curls',
    technique: '16" Burmese Curly Wig with custom caramel highlights and melted HD lace hairline',
    description: 'Real Emmi Wigs client smiling with voluminous, healthy bounce and warm dimensional caramel highlights. Hairline melted with customized baby hairs for an undetectable finish.',
    image: '/assets/aistudio/BB_0139133e.jpg',
    originalFilename: 'BB_0139133e.jpg',
    hairUsed: '16" Burmese Curly (Piano Colour)',
    tag: 'Free Installation Included'
  },
  {
    id: 'look-2',
    title: 'Vibrant Burgundy Sleek Silk Press',
    category: 'Colored Hair',
    technique: '20" Straight Virgin Unit custom colored in #99J Wine with ear-to-ear HD melt',
    description: 'Showstopping vibrant burgundy install on our stunning client. Mirror-sheen silk pressed finish paired with clean ear-to-ear lace customization.',
    image: '/assets/aistudio/AA_8fecd994.jpg',
    originalFilename: 'AA_8fecd994.jpg',
    hairUsed: '20" Straight Unit (#99J Burgundy)',
    tag: 'Signature Melt'
  },
  {
    id: 'look-3',
    title: 'Soft Caramel Layered Waves',
    category: 'Bouncy Curls',
    technique: '18" SDD Layered Waves in Warm Caramel Brown with undetectable hairline melt',
    description: 'Client rocking soft face-framing dimensional layers and subtle waves. HD lace melts into skin tone without visible edges.',
    image: '/assets/aistudio/CC_44187610.jpg',
    originalFilename: 'CC_44187610.jpg',
    hairUsed: '18" SDD Layered Waves',
    tag: 'Undetectable Lace'
  },
  {
    id: 'look-4',
    title: 'Textured Studio Voluminous Curls',
    category: 'Bouncy Curls',
    technique: 'Voluminous tight ringlets styled with moisture gloss for photoshoot glamour',
    description: 'Captured in our studio against floral backdrop. Dense, rich curl definition that bounces effortlessly and preserves natural movement.',
    image: '/assets/aistudio/DD_a02f2319.jpg',
    originalFilename: 'DD_a02f2319.jpg',
    hairUsed: '22" Deep Curls Unit',
    tag: 'Voluminous Glamour'
  },
  {
    id: 'look-5',
    title: 'Precision Blunt Bob & Virgin Bundles',
    category: 'Bob Cuts',
    technique: '12" 5x5 SDD Straight Bob Wig with razor-sharp blunt perimeter',
    description: 'Client holding our raw virgin hair bundles with a flawless sleek blunt bob install. Demonstrates the genuine single-donor quality.',
    image: '/assets/aistudio/EE_bab6f1cd.jpg',
    originalFilename: 'EE_bab6f1cd.jpg',
    hairUsed: '12" 5x5 SDD Straight Bob',
    tag: 'Executive Presence'
  },
  {
    id: 'look-6',
    title: 'Chic Side-Part Blonde Highlighted Pixie',
    category: 'Pixie & Waves',
    technique: 'Feathered 6" short pixie with custom honey blonde streaks and soft ear tabs',
    description: 'Edgy, bold, and fiercely feminine. The feathered side sweep flatters cheekbones and provides maximum lightweight convenience.',
    image: '/assets/aistudio/FF_940eafa9.jpg',
    originalFilename: 'FF_940eafa9.jpg',
    hairUsed: '6" Short Pixie (Blonde Streak)',
    tag: 'Bold & Chic'
  },
  {
    id: 'look-7',
    title: 'Effortless Bouncy Waves & Modern Melt',
    category: 'Bouncy Curls',
    technique: '18" SDD Bouncy Bodywave unit melted with precision customized baby edges',
    description: 'Our client styled in a chic orange ensemble with rich, healthy barrel waves that frame her smile effortlessly.',
    image: '/assets/aistudio/GG_785fa218.jpg',
    originalFilename: 'GG_785fa218.jpg',
    hairUsed: '18" SDD Bouncy Bodywave',
    tag: 'Boss Lady Style'
  },
  {
    id: 'look-8',
    title: 'Sunlit Burgundy Defined Ringlets',
    category: 'Colored Hair',
    technique: '18" SDD Roma Curl Wig (#99J Burgundy) captured in outdoor natural light',
    description: 'Stunning natural sunlight captures the deep luster and rich burgundy tones of this Roma curl installation.',
    image: '/assets/aistudio/HH_e7a0d54e.jpg',
    originalFilename: 'HH_e7a0d54e.jpg',
    hairUsed: '18" SDD Roma Curl (#99J)',
    tag: 'Rich Wine Tones'
  },
  {
    id: 'look-9',
    title: 'Textured Noir Pixie Crop',
    category: 'Pixie & Waves',
    technique: 'Lightweight glueless 6" pixie cut styled with soft textured crown layers',
    description: 'Zero glue needed. A chic everyday style that accentuates natural facial features with effortless sophistication.',
    image: '/assets/aistudio/II_e7bfece4.jpg',
    originalFilename: 'II_e7bfece4.jpg',
    hairUsed: '6" Natural Black Pixie',
    tag: 'Low Maintenance'
  },
  {
    id: 'look-10',
    title: 'Curved Cornrow Braided Lace Ponytail',
    category: 'Braided Styles',
    technique: 'Handcrafted braided lace wig with neat curved scalp feed-ins and laid baby hairs',
    description: 'All the beauty of intricate salon cornrows and braided ponytail without the sitting time or scalp tension.',
    image: '/assets/aistudio/KK_10b82b04.jpg',
    originalFilename: 'KK_10b82b04.jpg',
    hairUsed: '30" Knotless Braided Frontal Wig',
    tag: 'Protective Crown'
  },
  {
    id: 'look-11',
    title: 'High-Glam Afro Curl Headband Styling',
    category: 'Bouncy Curls',
    technique: 'Glueless voluminous curl headband install styled for red carpet glamour',
    description: 'Voluminous textured curls paired with a statement headband for instantaneous elevated style with zero lace upkeep.',
    image: '/assets/aistudio/LL_f4048766.jpg',
    originalFilename: 'LL_f4048766.jpg',
    hairUsed: 'Voluminous Headband Curl Unit',
    tag: 'Instant Glamour'
  },
  {
    id: 'look-12',
    title: 'Statement Electric Rose Pixie Cut',
    category: 'Pixie & Waves',
    technique: 'Custom colored electric rose pink pixie wig with sculpted side layers',
    description: 'For the fearless trendsetter. Radiant hot pink feathered layers that command attention in any room.',
    image: '/assets/aistudio/ZZ_33721fc7.jpg',
    originalFilename: 'ZZ_33721fc7.jpg',
    hairUsed: '6" Electric Rose Pixie',
    tag: 'Showstopper Color'
  }
];

export const clientReviews = [
  {
    id: 1,
    name: 'Faith M.',
    hairStyle: '16" Burmese Curly Wig with Free Installation',
    rating: 5,
    comment: 'The lace melt is genuinely invisible. I got so many compliments at my sister’s wedding! The hair is super soft and has not tangled once. Emmi Wigs is the real deal in Nairobi.',
    verified: true
  },
  {
    id: 2,
    name: 'Brenda K.',
    hairStyle: '5x5 SDD 12" Bob Collection',
    rating: 5,
    comment: 'I usually worry about wigs looking wiggy, but this blunt bob looks like my own scalp! The styling was crisp and the customer care was so warm and welcoming.',
    verified: true
  },
  {
    id: 3,
    name: 'Mercy W.',
    hairStyle: 'Wig Revamping & Lace Clean Service',
    rating: 5,
    comment: 'Brought my tired wig here thinking I had to throw it away. When I picked it up, it looked like I had just bought it brand new out of the box! Saved me so much money.',
    verified: true
  }
];
