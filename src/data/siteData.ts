export interface SedeData {
    slug: string;
    name: string;
    logo: string; // New field
    address: string;
    mapsUrl: string;
    phone: string;
    hours: string[];
    prenotaUrl: string;
    menuFoodUrl: string;
    menuDrinksUrl: string;
    social: {
        instagram: string;
        facebook: string;
    };
    images: {
        hero: string;
        food: string[];
        drinks: string[];
        gallery: string[];
        events: string[];
    };
}

export const sedes: SedeData[] = [
    {
        slug: 'sede-tibaldi-10',
        name: 'Viale Tibaldi',
        logo: '/assets/logodkarbonylimon-sede-tibaldi.png',
        address: 'Viale Tibaldi 10, Milano',
        mapsUrl: 'https://maps.app.goo.gl/dVfuNCVQWq9agFV19',
        phone: '+39 02 0000 0000',
        hours: [
            'GIOVEDÌ - VENERDÌ: 10:00 - 15:00 / 18:00 - 00:00',
            'SABATO - DOMENICA: 10:00 - 15:00 / 18:00 - 02:00',
            'LUNEDÌ - MERCOLEDÌ: CHIUSO'
        ],
        prenotaUrl: 'https://wa.link/kugf7q',
        menuFoodUrl: '/assets/Menu-dKarbonyLimon2025.pdf',
        menuDrinksUrl: '/assets/Menu-cocktails-de-KyL-Tibaldi-10-2025.pdf',
        social: {
            instagram: 'https://www.instagram.com/dkarbonylimon_tibaldi/',
            facebook: 'https://www.facebook.com/dkarbonylimon1'
        },
        images: {
            hero: '/assets/tibaldi-hero.webp',
            food: [
                '/assets/tibaldi-food-01.webp'
            ],
            drinks: [
                '/assets/tibaldi-drink-01.webp'
            ],
            gallery: [
                '/assets/tibaldi-gallery-01.webp',
                '/assets/tibaldi-gallery-02.webp',
                '/assets/tibaldi-gallery-03.webp',
                '/assets/tibaldi-gallery-04.webp',
                '/assets/tibaldi-gallery-05.webp',
                '/assets/tibaldi-gallery-06.webp',
            ],
            events: [
                '/assets/tibaldi-event-01.webp',
                '/assets/tibaldi-event-02.webp',
                '/assets/tibaldi-event-03.webp',
            ]
        }
    },
    {
        slug: 'sede-tirana-22',
        name: 'Piazza Tirana',
        logo: '/assets/logodkarbonylimon-sede-tirana.png',
        address: 'Piazza Tirana 22, Milano',
        mapsUrl: 'https://maps.app.goo.gl/ZyebZaptok41d7RaA',
        phone: '+39 02 1111 1111',
        hours: [
            'LUNEDÌ - DOMENICA: 12:00 - 15:00 / 19:00 - 23:00'
        ],
        prenotaUrl: 'https://wa.link/01lvev',
        menuFoodUrl: '/assets/Menu-dKarbonyLimon2025.pdf',
        menuDrinksUrl: '/assets/MENU-DRINK-TIRANA-10-2025.pdf',
        social: {
            instagram: 'https://www.instagram.com/dkarbonylimon_tirana',
            facebook: 'https://www.facebook.com/dkarbonylimon2RistorantePeruviano'
        },
        images: {
            hero: '/assets/tirana-hero.webp',
            food: [
                '/assets/tirana-food-01.webp'
            ],
            drinks: [
                '/assets/tirana-drink-01.webp'
            ],
            gallery: [
                '/assets/tirana-gallery-01.webp',
                '/assets/tirana-gallery-02.webp',
                '/assets/tirana-gallery-03.webp',
                '/assets/tirana-gallery-04.webp',
                '/assets/tirana-gallery-05.webp',
                '/assets/tirana-gallery-06.webp',
            ],
            events: [
                '/assets/tirana-event-01.webp',
                '/assets/tirana-event-02.webp',
                '/assets/tirana-event-03.webp',
            ]
        }
    }
];
