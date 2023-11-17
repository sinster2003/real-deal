const filterData = [
    {
        name: "purpose",
        items: [
            {key: "Purpose", value: ""},
            {key: "Buy", value: "for-sale"},
            {key: "Rent", value: "for-rent"}
        ]
    },
    {
        name: "priceMax",
        items: [
            {key: "Max Price(AED)", value: ""},
            {key: "10,000", value: 10000},
            {key: "50,000", value: 20000},
            {key: "1,00,000", value: 100000},
            {key: "2,00,000", value: 200000},
            {key: "3,00,000", value: 300000},
            {key: "4,00,000", value: 400000},
            {key: "5,00,000", value: 500000},
            {key: "8,00,000", value: 800000},
            {key: "1,000,000", value: 1000000},
            {key: "2,000,000", value: 2000000} 
        ]
    },
    {
        name: "areaMax",
        items: [
            {key: "Max Area(sqft)", value: ""},
            {key: "1000", value: 1000},
            {key: "2000", value: 2000},
            {key: "4000", value: 4000},
            {key: "5000", value: 5000},
            {key: "8000", value: 8000},
            {key: "10000", value: 10000},
        ]
    },
    {
        name: "roomsMin",
        items: [
            {key: "Rooms", value: ""},
            {key: "1", value: 1},
            {key: "2", value: 2},
            {key: "4", value: 4},
        ]
    },
    {
        name: "bathsMin",
        items: [
            {key: "Baths", value: ""},
            {key: "1", value: 1},
            {key: "2", value: 2},
            {key: "4", value: 4},
        ]
    }
]

export default filterData;