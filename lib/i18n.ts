export type Language = "pt" | "en";

export const translations = {
  pt: {
    // Brand
    brand: {
      name: "EliteRent Moçambique",
      description:
        "Aluguer de viaturas premium em Maputo e principais cidades de Moçambique, com suporte 24/7.",
    },
    // Sobre Nos - CONTEUDO FICTICIO, substituir pelo texto real da empresa
    about: {
      title: "Sobre Nós",
      subtitle: "Conheça a EliteRent Moçambique",
      missionTitle: "Missão",
      missionText:
        "Facilitar a mobilidade em Moçambique, oferecendo veículos de qualidade e um serviço de aluguer simples, transparente e acessível para famílias, empresas e visitantes.",
      visionTitle: "Visão",
      visionText:
        "Ser a marca de referência em aluguer de viaturas em Moçambique, reconhecida pela confiança, qualidade e cobertura nacional.",
      valuesTitle: "Valores",
      valuesList: [
        "Compromisso com o cliente",
        "Profissionalismo",
        "Transparência",
        "Qualidade",
        "Confiança",
      ],
      statsTitle: "Porquê escolher-nos?",
      statYearsValue: "5+",
      statYearsLabel: "Anos de Experiência",
      statClientsValue: "150+",
      statClientsLabel: "Clientes Satisfeitos",
      statCarsValue: "50+",
      statCarsLabel: "Viaturas Alugadas",
    },
    // Navigation
    nav: {
      about: "Sobre Nós",
      fleet: "Frota",
      pricing: "Descontos",
      faq: "Perguntas",
      contact: "Contacto",
      vehicleList: "Lista de Viaturas",
    },
    // Hero
    hero: {
      welcomeText: "Bem-vindo à EliteRent Moçambique",
      title: "Aluguer de Carros Premium em Moçambique",
      subtitle: "Escolha o seu veículo perfeito com a EliteRent Moçambique",
      cta: "Reservar Agora",
      viewFleet: "Ver Frota",
      stat1Value: "150+",
      stat1Label: "Clientes Satisfeitos",
      stat2Value: "50+",
      stat2Label: "Viaturas",
      stat3Value: "24/7",
      stat3Label: "Suporte",
    },
    // Fleet
    fleet: {
      title: "Nossa Frota",
      subtitle:
        "Escolha entre a nossa seleção de veículos premium disponíveis em Maputo, Beira e Nampula",
      economy: "Económico",
      economyDesc: "Perfeito para deslocações urbanas em Maputo",
      economyModels:
        "Toyota Vitz, Suzuki Swift, Toyota Ractis, Honda Freed, Mazda Demio, Honda Fit, Kia Picanto, Hyundai i10 ou Nissan March",
      economyFeatures: [
        "5 Lugares",
        "Automático",
        "Motor 1.2L",
        "Económico em combustível",
      ],
      standard: "Standard",
      standardDesc: "Sedan confortável para viagens em família",
      standardModels:
        "Toyota Corolla, Toyota Axio, Toyota Rumion, Hyundai Elantra, VW Polo Sedan ou Toyota Auris",
      standardFeatures: ["5 Lugares", "Automático", "Ar Condicionado"],
      suv: "SUV de Luxo",
      suvDesc: "Conforto e espaço, ideal para estradas nacionais",
      suvModels:
        "Toyota Land Cruiser Prado, Toyota Fortuner, Mitsubishi Pajero, Ford Ranger, Toyota Hilux ou Nissan Navara",
      suvFeatures: [
        "5 Lugares",
        "Automático",
        "Tracção 4x4",
        "Ar Condicionado",
      ],
      premium: "Premium",
      premiumDesc: "Experiência de luxo absoluto",
      premiumModels:
        "Mercedes-Benz Classe C, Toyota Camry, Lexus ES, BMW Série 3, Audi A4 ou Volvo S60",
      premiumFeatures: ["5 Lugares", "Automático", "Interior em Pele"],
      modelsLabel: "Modelos disponíveis:",
      frigorifico: "Camião Frigorífico",
      frigorificoDesc: "Transporte com controlo de temperatura para produtos perecíveis",
      frigorificoModels: "Mitsubishi Fuso Canter",
      frigorificoFeatures: ["Cabine para 3", "Manual", "Caixa refrigerada", "Controlo de temperatura"],
      carga: "Camião de Carga",
      cargaDesc: "Transporte de mercadorias gerais com amplo espaço de carga",
      cargaModels: "Isuzu NPR",
      cargaFeatures: ["Cabine para 3", "Manual", "Grande capacidade de carga"],
      perDay: "por dia",
      select: "Selecionar",
    },
    // Vehicle Types
    vehicleTypes: {
      title: "Tipos de Viaturas",
      subtitle:
        "Explore as categorias disponiveis e escolha a viatura ideal para a sua viagem",
      cta: "Pedir cotação",
      pickup: {
        name: "Pick-up",
        description:
          "Robustez e capacidade de carga para trabalho pesado ou aventuras fora da estrada, com boa traccao para os terrenos mais exigentes.",
      },
      suv: {
        name: "SUV",
        description:
          "Espaco, potencia e conforto elevado para longas viagens em familia ou deslocacoes a zonas rurais.",
      },
      minisuv: {
        name: "Mini SUV",
        description:
          "Formato compacto sem abrir mao do conforto, ideal para o dia a dia na cidade com boa economia de combustivel.",
      },
      sedan: {
        name: "Sedan",
        description:
          "Elegancia e suavidade de conducao para viagens de negocios ou deslocacoes urbanas com maximo conforto.",
      },
      passengers: {
        name: "Passageiros",
        description:
          "Viaturas de maior capacidade para grupos e familias numerosas, garantindo espaco e comodidade para todos.",
      },
      frigorifico: {
        name: "Camiao Frigorifico",
        description:
          "Transporte de carga com controlo de temperatura, ideal para produtos perecivais e mercadorias que exigem cadeia de frio.",
      },
      carga: {
        name: "Camiao de Carga",
        description:
          "Transporte de mercadorias gerais com amplo espaco de carga, ideal para mudancas, distribuicao e transporte comercial.",
      },
    },
    // Pricing
    pricing: {
      title: "Preços Competitivos",
      subtitle:
        "Pacotes flexíveis em Metical (MT) para todas as necessidades, sem taxas escondidas",
      daily: "24 Horas",
      dailyDesc: "Perfeito para viagens curtas",
      weekly: "Semanal",
      weeklyDesc: "Melhor valor para alugueres de uma semana",
      weeklyDiscount: "30% de desconto",
      monthly: "Mensal",
      monthlyDesc: "Desconto especial para aluguer prolongado",
      monthlyDiscount: "40% de desconto",
      seeRates: "Ver tarifas acima",
      save: "Economize",
      features: {
        insurance: "Seguro Incluído",
        km: "Km Ilimitado",
        support: "Suporte 24/7",
        cancellation: "Cancelamento Grátis",
        gps: "Navegação GPS",
        maintenance: "Manutenção Grátis",
        roadside: "Assistência 24/7 na Estrada",
      },
      cta: "Escolher Plano",
      currency: "MT",
      note: "Preços de referência para a categoria Standard, em Metical (MT). Consulte a Frota para tarifas por categoria.",
    },
    // Contact Form
    contact: {
      title: "Pronto para Alugar?",
      subtitle: "Preencha o formulário e entraremos em contacto em breve",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone",
      phonePlaceholder: "+258 84 123 4567",
      pickupDate: "Data de Levantamento",
      returnDate: "Data de Devolução",
      pickupLocation: "Local de Levantamento",
      returnLocation: "Local de Devolução",
      selectLocation: "Selecionar localização",
      carType: "Tipo de Carro",
      preferredModel: "Modelo preferido (opcional)",
      preferredModelPlaceholder: "Ex: Toyota Ractis",
      selectCar: "Selecionar tipo",
      submit: "Enviar Reserva",
      submitting: "A enviar...",
      success: "Reserva recebida! Entraremos em contacto em breve.",
      error: "Erro ao enviar. Tente novamente.",
      validation: {
        nameRequired: "Nome obrigatório",
        emailRequired: "Email obrigatório",
        emailInvalid: "Email inválido",
        phoneRequired: "Telefone obrigatório",
        phoneInvalid: "Número de telefone inválido (use o formato +258...)",
        dateRequired: "Data obrigatória",
        pickupLocationRequired: "Local de levantamento obrigatório",
        returnDateRequired: "Data de devolução obrigatória",
        returnDateInvalid: "A devolução deve ser depois do levantamento",
        unavailable: "Este carro já está reservado nessas datas. Escolha outras datas ou outro tipo de carro.",
      },
    },
    // FAQ
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Respostas às suas dúvidas",
      q1: "Que documentos preciso para alugar um carro em Moçambique?",
      a1: "Precisa de Bilhete de Identidade ou Passaporte válido e carta de condução válida. Visitantes estrangeiros devem ter uma Carta de Condução Internacional (CCI).",
      q2: "O seguro está incluído?",
      a2: "Sim, o seguro básico contra terceiros está incluído em todas as reservas. Oferecemos cobertura adicional por uma taxa extra.",
      q3: "Posso cancelar a minha reserva?",
      a3: "Sim, o cancelamento é grátis até 48 horas antes do levantamento. Alterações podem ser feitas até 24 horas antes.",
      q4: "Qual é a idade mínima para alugar?",
      a4: "A idade mínima é 21 anos com carta de condução válida há pelo menos 2 anos. Condutores entre 21-24 anos podem estar sujeitos a uma taxa adicional.",
      q5: "Fazem entrega no Aeroporto Internacional de Maputo?",
      a5: "Sim, temos levantamento e entrega no Aeroporto Internacional de Maputo e nos principais aeroportos de Beira e Nampula, mediante uma taxa adicional.",
      q6: "Que formas de pagamento aceitam?",
      a6: "Aceitamos cartão de crédito/débito, transferência bancária e M-Pesa. O pagamento em numerário está sujeito a confirmação prévia.",
      q7: "Há taxas escondidas?",
      a7: "Não, o preço apresentado em Metical (MT) é transparente e inclui seguro básico, sem taxas extra ocultas.",
      q8: "Posso levar o carro para fora de Moçambique?",
      a8: "Viagens para países vizinhos (África do Sul, Eswatini, Malawi) requerem autorização prévia e um seguro adicional de fronteira.",
      notFoundTitle: "Não encontrou a sua resposta?",
      notFoundSubtitle:
        "A nossa equipa de apoio ao cliente está disponível 24/7 para ajudar",
      contactSupport: "Contactar Suporte",
    },
    // Footer
    footer: {
      about: "Sobre",
      aboutText:
        "Aluguer de viaturas premium em Moçambique, com frota moderna e suporte 24/7.",
      quickLinks: "Links Rápidos",
      contactTitle: "Contacto",
      legal: "Legal",
      privacy: "Privacidade",
      terms: "Termos",
      contact: "Contacto",
      rights: "Todos os direitos reservados",
      address: "Av. Julius Nyerere, Maputo, Moçambique",
    },
  },
  en: {
    // Brand
    brand: {
      name: "EliteRent Mozambique",
      description:
        "Premium car rental in Maputo and Mozambique's main cities, with 24/7 support.",
    },
    // About Us - PLACEHOLDER CONTENT, replace with real company text
    about: {
      title: "About Us",
      subtitle: "Meet EliteRent Mozambique",
      missionTitle: "Mission",
      missionText:
        "To make mobility easier across Mozambique by offering quality vehicles and a simple, transparent and affordable rental service for families, businesses and visitors.",
      visionTitle: "Vision",
      visionText:
        "To be the leading car rental brand in Mozambique, recognised for trust, quality and nationwide coverage.",
      valuesTitle: "Values",
      valuesList: [
        "Customer commitment",
        "Professionalism",
        "Transparency",
        "Quality",
        "Trust",
      ],
      statsTitle: "Why choose us?",
      statYearsValue: "5+",
      statYearsLabel: "Years of Experience",
      statClientsValue: "150+",
      statClientsLabel: "Happy Customers",
      statCarsValue: "50+",
      statCarsLabel: "Vehicles Rented",
    },
    // Navigation
    nav: {
      about: "About Us",
      fleet: "Fleet",
      pricing: "Discounts",
      faq: "FAQ",
      contact: "Contact",
      vehicleList: "Vehicle List",
    },
    // Hero
    hero: {
      welcomeText: "Welcome to EliteRent Mozambique",
      title: "Premium Car Rentals in Mozambique",
      subtitle: "Choose your perfect vehicle with EliteRent Mozambique",
      cta: "Book Now",
      viewFleet: "View Fleet",
      stat1Value: "150+",
      stat1Label: "Happy Customers",
      stat2Value: "50+",
      stat2Label: "Vehicles",
      stat3Value: "24/7",
      stat3Label: "Support",
    },
    // Fleet
    fleet: {
      title: "Our Fleet",
      subtitle:
        "Choose from our selection of premium vehicles available in Maputo, Beira and Nampula",
      economy: "Economy",
      economyDesc: "Perfect for city trips in Maputo",
      economyModels:
        "Toyota Vitz, Suzuki Swift, Toyota Ractis, Honda Freed, Mazda Demio, Honda Fit, Kia Picanto, Hyundai i10 or Nissan March",
      economyFeatures: [
        "5 Seats",
        "Automatic",
        "1.2L Engine",
        "Fuel Efficient",
      ],
      standard: "Standard",
      standardDesc: "Comfortable sedan for family trips",
      standardModels:
        "Toyota Corolla, Toyota Axio, Toyota Rumion, Hyundai Elantra, VW Polo Sedan or Toyota Auris",
      standardFeatures: ["5 Seats", "Automatic", "Air Conditioning"],
      suv: "Luxury SUV",
      suvDesc: "Comfort and space, ideal for national roads",
      suvModels:
        "Toyota Land Cruiser Prado, Toyota Fortuner, Mitsubishi Pajero, Ford Ranger, Toyota Hilux or Nissan Navara",
      suvFeatures: ["5 Seats", "Automatic", "4x4 Drive", "Air Conditioning"],
      premium: "Premium",
      premiumDesc: "Ultimate luxury experience",
      premiumModels:
        "Mercedes-Benz Classe C, Toyota Camry, Lexus ES, BMW Serie 3, Audi A4 or Volvo S60",
      premiumFeatures: ["5 Seats", "Automatic", "Leather Interior"],
      modelsLabel: "Available models:",
      frigorifico: "Refrigerated Truck",
      frigorificoDesc: "Temperature-controlled transport for perishable goods",
      frigorificoModels: "Mitsubishi Fuso Canter",
      frigorificoFeatures: ["3-seat cabin", "Manual", "Refrigerated box", "Temperature control"],
      carga: "Cargo Truck",
      cargaDesc: "General freight transport with ample cargo space",
      cargaModels: "Isuzu NPR",
      cargaFeatures: ["3-seat cabin", "Manual", "High cargo capacity"],
      perDay: "per day",
      select: "Select",
    },
    // Vehicle Types
    vehicleTypes: {
      title: "Vehicle Types",
      subtitle:
        "Browse our vehicle categories and choose the right one for your trip",
      cta: "Request Quote",
      pickup: {
        name: "Pick-up",
        description:
          "Rugged build and generous cargo capacity for heavy-duty work or off-road adventures, with reliable traction for demanding terrain.",
      },
      suv: {
        name: "SUV",
        description:
          "Extra space, power and comfort for long family trips or travel to rural areas.",
      },
      minisuv: {
        name: "Mini SUV",
        description:
          "A compact shape without sacrificing comfort, ideal for everyday city driving with good fuel economy.",
      },
      sedan: {
        name: "Sedan",
        description:
          "Smooth, elegant driving for business trips or city travel with maximum comfort.",
      },
      passengers: {
        name: "Passenger Van",
        description:
          "Higher-capacity vehicles for larger groups and families, with plenty of room and comfort for everyone.",
      },
      frigorifico: {
        name: "Refrigerated Truck",
        description:
          "Temperature-controlled cargo transport, ideal for perishable goods and products that require a cold chain.",
      },
      carga: {
        name: "Cargo Truck",
        description:
          "General freight transport with ample cargo space, ideal for moves, distribution and commercial transport.",
      },
    },
    // Pricing
    pricing: {
      title: "Competitive Pricing",
      subtitle:
        "Flexible packages in Metical (MT) for all needs, no hidden fees",
      daily: "24 Hours",
      dailyDesc: "Perfect for short trips",
      weekly: "Weekly",
      weeklyDesc: "Best value for week-long rentals",
      weeklyDiscount: "30% OFF",
      monthly: "Monthly",
      monthlyDesc: "Extended rental discount",
      monthlyDiscount: "40% OFF",
      seeRates: "See rates above",
      save: "Save",
      features: {
        insurance: "Insurance Included",
        km: "Unlimited Km",
        support: "24/7 Support",
        cancellation: "Free Cancellation",
        gps: "GPS Navigation",
        maintenance: "Free Maintenance",
        roadside: "24/7 Roadside Assistance",
      },
      cta: "Choose Plan",
      currency: "MT",
      note: "Reference prices for the Standard category, in Metical (MT). See the Fleet section for per-category rates.",
    },
    // Contact Form
    contact: {
      title: "Ready to Rent?",
      subtitle: "Fill in the form and we will get in touch soon",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      phonePlaceholder: "+258 84 123 4567",
      pickupDate: "Pickup Date",
      returnDate: "Return Date",
      pickupLocation: "Pickup Location",
      returnLocation: "Return Location",
      selectLocation: "Select location",
      carType: "Car Type",
      preferredModel: "Preferred model (optional)",
      preferredModelPlaceholder: "E.g. Toyota Ractis",
      selectCar: "Select type",
      submit: "Submit Booking",
      submitting: "Submitting...",
      success: "Booking received! We will contact you soon.",
      error: "Error sending. Please try again.",
      validation: {
        nameRequired: "Name required",
        emailRequired: "Email required",
        emailInvalid: "Invalid email",
        phoneRequired: "Phone required",
        phoneInvalid: "Invalid phone number (use +258... format)",
        dateRequired: "Date required",
        pickupLocationRequired: "Pickup location required",
        returnDateRequired: "Return date required",
        returnDateInvalid: "Return date must be after pickup",
        unavailable: "This car is already booked for those dates. Please choose different dates or another car type.",
      },
    },
    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to your questions",
      q1: "What documents do I need to rent a car in Mozambique?",
      a1: "You need a valid national ID or passport and a valid driver license. Foreign visitors should have an International Driving Permit (IDP).",
      q2: "Is insurance included?",
      a2: "Yes, basic third-party insurance is included in all bookings. Additional coverage is available for an extra fee.",
      q3: "Can I cancel my booking?",
      a3: "Yes, free cancellation up to 48 hours before pickup. Changes can be made up to 24 hours before.",
      q4: "What is the minimum age to rent?",
      a4: "Minimum age is 21 with a valid driver license held for at least 2 years. Drivers aged 21-24 may pay a young driver surcharge.",
      q5: "Do you deliver to Maputo International Airport?",
      a5: "Yes, we offer pickup and drop-off at Maputo International Airport and the main airports in Beira and Nampula, for an additional fee.",
      q6: "What payment methods do you accept?",
      a6: "We accept credit/debit card, bank transfer and M-Pesa. Cash payment is subject to prior confirmation.",
      q7: "Are there hidden fees?",
      a7: "No, the price shown in Metical (MT) is transparent and includes basic insurance, with no hidden extra fees.",
      q8: "Can I take the car outside Mozambique?",
      a8: "Trips to neighbouring countries (South Africa, Eswatini, Malawi) require prior authorization and additional cross-border insurance.",
      notFoundTitle: "Can't find your answer?",
      notFoundSubtitle:
        "Our customer support team is available 24/7 to help you",
      contactSupport: "Contact Support",
    },
    // Footer
    footer: {
      about: "About",
      aboutText:
        "Premium car rental in Mozambique, with a modern fleet and 24/7 support.",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      rights: "All rights reserved",
      address: "Av. Julius Nyerere, Maputo, Mozambique",
    },
  },
} satisfies Record<Language, unknown>;

// Helper genérico para pegar valores aninhados por caminho "a.b.c"
function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function getTranslation(lang: Language, key: string): string {
  const value = getNestedValue(translations[lang], key);
  return typeof value === "string" ? value : key;
}

/**
 * Retorna uma lista de strings (ex.: fleet.economyFeatures) em vez de uma string única.
 */
export function getTranslationList(lang: Language, key: string): string[] {
  const value = getNestedValue(translations[lang], key);
  return Array.isArray(value) ? (value as string[]) : [];
}
