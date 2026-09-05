// Demo product catalog for the Amazon clone (frontend-only, no backend)
const CATEGORIES = [
  {
    "slug": "gaming",
    "name": "Gaming",
    "image": "box1_image.jpg"
  },
  {
    "slug": "electronics",
    "name": "Electronics",
    "image": "box2_image.jpg"
  },
  {
    "slug": "home-kitchen",
    "name": "Home & Kitchen",
    "image": "box3_image.jpg"
  },
  {
    "slug": "fashion",
    "name": "Fashion",
    "image": "box4_image.jpg"
  },
  {
    "slug": "beauty",
    "name": "Beauty and Personal Care",
    "image": "box5_image.jpg"
  },
  {
    "slug": "books",
    "name": "Best Sellers in Books",
    "image": "box6_image.jpg"
  },
  {
    "slug": "pets",
    "name": "Pet Supplies",
    "image": "box7_image.jpg"
  },
  {
    "slug": "baby-toys",
    "name": "Baby Toys",
    "image": "box8_image.jpg"
  }
];

const PRODUCTS = [
  {
    "id": "p1",
    "title": "Wireless Gaming Controller",
    "category": "gaming",
    "categoryName": "Gaming",
    "price": 2499,
    "mrp": 3299,
    "rating": 4.3,
    "reviews": 1820,
    "deal": true,
    "image": "https://loremflickr.com/500/500/gamepad?lock=1",
    "description": "A great pick in Gaming. Wireless Gaming Controller is well-reviewed by 1,820 customers and rated 4.3 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p2",
    "title": "RGB Mechanical Keyboard",
    "category": "gaming",
    "categoryName": "Gaming",
    "price": 3799,
    "mrp": 4999,
    "rating": 4.5,
    "reviews": 942,
    "deal": false,
    "image": "https://loremflickr.com/500/500/keyboard?lock=2",
    "description": "A great pick in Gaming. RGB Mechanical Keyboard is well-reviewed by 942 customers and rated 4.5 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p3",
    "title": "4K Gaming Monitor 27-inch",
    "category": "gaming",
    "categoryName": "Gaming",
    "price": 18999,
    "mrp": 23999,
    "rating": 4.4,
    "reviews": 530,
    "deal": true,
    "image": "https://loremflickr.com/500/500/computermonitor?lock=3",
    "description": "A great pick in Gaming. 4K Gaming Monitor 27-inch is well-reviewed by 530 customers and rated 4.4 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p4",
    "title": "Over-Ear Gaming Headset",
    "category": "gaming",
    "categoryName": "Gaming",
    "price": 1999,
    "mrp": 2799,
    "rating": 4.1,
    "reviews": 2210,
    "deal": false,
    "image": "https://loremflickr.com/500/500/headphones?lock=4",
    "description": "A great pick in Gaming. Over-Ear Gaming Headset is well-reviewed by 2,210 customers and rated 4.1 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p5",
    "title": "Noise Cancelling Earbuds",
    "category": "electronics",
    "categoryName": "Electronics",
    "price": 3499,
    "mrp": 4999,
    "rating": 4.2,
    "reviews": 3410,
    "deal": true,
    "image": "https://loremflickr.com/500/500/earbuds?lock=5",
    "description": "A great pick in Electronics. Noise Cancelling Earbuds is well-reviewed by 3,410 customers and rated 4.2 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p6",
    "title": "Smartwatch Fitness Tracker",
    "category": "electronics",
    "categoryName": "Electronics",
    "price": 2999,
    "mrp": 4499,
    "rating": 4.0,
    "reviews": 1890,
    "deal": false,
    "image": "https://loremflickr.com/500/500/smartwatch?lock=6",
    "description": "A great pick in Electronics. Smartwatch Fitness Tracker is well-reviewed by 1,890 customers and rated 4.0 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p7",
    "title": "Portable Bluetooth Speaker",
    "category": "electronics",
    "categoryName": "Electronics",
    "price": 1799,
    "mrp": 2299,
    "rating": 4.6,
    "reviews": 4120,
    "deal": false,
    "image": "https://loremflickr.com/500/500/speaker?lock=7",
    "description": "A great pick in Electronics. Portable Bluetooth Speaker is well-reviewed by 4,120 customers and rated 4.6 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p8",
    "title": "65W Fast Charging Adapter",
    "category": "electronics",
    "categoryName": "Electronics",
    "price": 899,
    "mrp": 1299,
    "rating": 4.3,
    "reviews": 970,
    "deal": true,
    "image": "https://loremflickr.com/500/500/phonecharger?lock=8",
    "description": "A great pick in Electronics. 65W Fast Charging Adapter is well-reviewed by 970 customers and rated 4.3 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p9",
    "title": "Non-Stick Cookware Set",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen",
    "price": 2199,
    "mrp": 3199,
    "rating": 4.4,
    "reviews": 1650,
    "deal": false,
    "image": "https://loremflickr.com/500/500/cookware?lock=9",
    "description": "A great pick in Home & Kitchen. Non-Stick Cookware Set is well-reviewed by 1,650 customers and rated 4.4 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p10",
    "title": "Electric Kettle 1.7L",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen",
    "price": 999,
    "mrp": 1499,
    "rating": 4.5,
    "reviews": 3320,
    "deal": true,
    "image": "https://loremflickr.com/500/500/kettle?lock=10",
    "description": "A great pick in Home & Kitchen. Electric Kettle 1.7L is well-reviewed by 3,320 customers and rated 4.5 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p11",
    "title": "Memory Foam Pillow (2-Pack)",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen",
    "price": 1299,
    "mrp": 1899,
    "rating": 4.2,
    "reviews": 2040,
    "deal": false,
    "image": "https://loremflickr.com/500/500/pillow?lock=11",
    "description": "A great pick in Home & Kitchen. Memory Foam Pillow (2-Pack) is well-reviewed by 2,040 customers and rated 4.2 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p12",
    "title": "Robot Vacuum Cleaner",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen",
    "price": 12999,
    "mrp": 17999,
    "rating": 4.1,
    "reviews": 780,
    "deal": true,
    "image": "https://loremflickr.com/500/500/vacuumcleaner?lock=12",
    "description": "A great pick in Home & Kitchen. Robot Vacuum Cleaner is well-reviewed by 780 customers and rated 4.1 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p13",
    "title": "Men's Casual Cotton Shirt",
    "category": "fashion",
    "categoryName": "Fashion",
    "price": 699,
    "mrp": 1099,
    "rating": 4.0,
    "reviews": 1240,
    "deal": false,
    "image": "https://loremflickr.com/500/500/shirt?lock=13",
    "description": "A great pick in Fashion. Men's Casual Cotton Shirt is well-reviewed by 1,240 customers and rated 4.0 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p14",
    "title": "Women's Running Shoes",
    "category": "fashion",
    "categoryName": "Fashion",
    "price": 1899,
    "mrp": 2799,
    "rating": 4.3,
    "reviews": 2860,
    "deal": true,
    "image": "https://loremflickr.com/500/500/runningshoes?lock=14",
    "description": "A great pick in Fashion. Women's Running Shoes is well-reviewed by 2,860 customers and rated 4.3 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p15",
    "title": "Unisex Denim Jacket",
    "category": "fashion",
    "categoryName": "Fashion",
    "price": 1499,
    "mrp": 2199,
    "rating": 4.1,
    "reviews": 610,
    "deal": false,
    "image": "https://loremflickr.com/500/500/denimjacket?lock=15",
    "description": "A great pick in Fashion. Unisex Denim Jacket is well-reviewed by 610 customers and rated 4.1 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p16",
    "title": "Leather Wallet",
    "category": "fashion",
    "categoryName": "Fashion",
    "price": 549,
    "mrp": 899,
    "rating": 4.4,
    "reviews": 1980,
    "deal": false,
    "image": "https://loremflickr.com/500/500/leatherwallet?lock=16",
    "description": "A great pick in Fashion. Leather Wallet is well-reviewed by 1,980 customers and rated 4.4 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p17",
    "title": "Vitamin C Face Serum",
    "category": "beauty",
    "categoryName": "Beauty and Personal Care",
    "price": 449,
    "mrp": 699,
    "rating": 4.3,
    "reviews": 5210,
    "deal": true,
    "image": "https://loremflickr.com/500/500/skincare?lock=17",
    "description": "A great pick in Beauty and Personal Care. Vitamin C Face Serum is well-reviewed by 5,210 customers and rated 4.3 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p18",
    "title": "Electric Hair Trimmer",
    "category": "beauty",
    "categoryName": "Beauty and Personal Care",
    "price": 799,
    "mrp": 1199,
    "rating": 4.2,
    "reviews": 2330,
    "deal": false,
    "image": "https://loremflickr.com/500/500/hairtrimmer?lock=18",
    "description": "A great pick in Beauty and Personal Care. Electric Hair Trimmer is well-reviewed by 2,330 customers and rated 4.2 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p19",
    "title": "Moisturizing Body Lotion",
    "category": "beauty",
    "categoryName": "Beauty and Personal Care",
    "price": 349,
    "mrp": 499,
    "rating": 4.5,
    "reviews": 3980,
    "deal": false,
    "image": "https://loremflickr.com/500/500/lotion?lock=19",
    "description": "A great pick in Beauty and Personal Care. Moisturizing Body Lotion is well-reviewed by 3,980 customers and rated 4.5 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p20",
    "title": "Professional Hair Dryer",
    "category": "beauty",
    "categoryName": "Beauty and Personal Care",
    "price": 1599,
    "mrp": 2399,
    "rating": 4.1,
    "reviews": 890,
    "deal": true,
    "image": "https://loremflickr.com/500/500/hairdryer?lock=20",
    "description": "A great pick in Beauty and Personal Care. Professional Hair Dryer is well-reviewed by 890 customers and rated 4.1 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p21",
    "title": "The Silent Orchard (Novel)",
    "category": "books",
    "categoryName": "Best Sellers in Books",
    "price": 349,
    "mrp": 499,
    "rating": 4.6,
    "reviews": 2210,
    "deal": false,
    "image": "https://loremflickr.com/500/500/bookcover?lock=21",
    "description": "A great pick in Best Sellers in Books. The Silent Orchard (Novel) is well-reviewed by 2,210 customers and rated 4.6 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p22",
    "title": "Atomic Focus: Productivity Guide",
    "category": "books",
    "categoryName": "Best Sellers in Books",
    "price": 399,
    "mrp": 599,
    "rating": 4.4,
    "reviews": 1780,
    "deal": true,
    "image": "https://loremflickr.com/500/500/book?lock=22",
    "description": "A great pick in Best Sellers in Books. Atomic Focus: Productivity Guide is well-reviewed by 1,780 customers and rated 4.4 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p23",
    "title": "Kids' Illustrated Atlas",
    "category": "books",
    "categoryName": "Best Sellers in Books",
    "price": 549,
    "mrp": 799,
    "rating": 4.7,
    "reviews": 940,
    "deal": false,
    "image": "https://loremflickr.com/500/500/atlas?lock=23",
    "description": "A great pick in Best Sellers in Books. Kids' Illustrated Atlas is well-reviewed by 940 customers and rated 4.7 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p24",
    "title": "The Last Cartographer (Novel)",
    "category": "books",
    "categoryName": "Best Sellers in Books",
    "price": 299,
    "mrp": 449,
    "rating": 4.3,
    "reviews": 1320,
    "deal": false,
    "image": "https://loremflickr.com/500/500/novel?lock=24",
    "description": "A great pick in Best Sellers in Books. The Last Cartographer (Novel) is well-reviewed by 1,320 customers and rated 4.3 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p25",
    "title": "Dog Chew Toy Bundle",
    "category": "pets",
    "categoryName": "Pet Supplies",
    "price": 449,
    "mrp": 699,
    "rating": 4.5,
    "reviews": 1620,
    "deal": false,
    "image": "https://loremflickr.com/500/500/dogtoy?lock=25",
    "description": "A great pick in Pet Supplies. Dog Chew Toy Bundle is well-reviewed by 1,620 customers and rated 4.5 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p26",
    "title": "Cat Scratching Post Tower",
    "category": "pets",
    "categoryName": "Pet Supplies",
    "price": 1899,
    "mrp": 2699,
    "rating": 4.4,
    "reviews": 720,
    "deal": true,
    "image": "https://loremflickr.com/500/500/cat?lock=26",
    "description": "A great pick in Pet Supplies. Cat Scratching Post Tower is well-reviewed by 720 customers and rated 4.4 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p27",
    "title": "Adjustable Pet Leash",
    "category": "pets",
    "categoryName": "Pet Supplies",
    "price": 349,
    "mrp": 549,
    "rating": 4.2,
    "reviews": 2010,
    "deal": false,
    "image": "https://loremflickr.com/500/500/dogleash?lock=27",
    "description": "A great pick in Pet Supplies. Adjustable Pet Leash is well-reviewed by 2,010 customers and rated 4.2 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p28",
    "title": "Automatic Pet Feeder",
    "category": "pets",
    "categoryName": "Pet Supplies",
    "price": 2299,
    "mrp": 3299,
    "rating": 4.1,
    "reviews": 560,
    "deal": false,
    "image": "https://loremflickr.com/500/500/petfeeder?lock=28",
    "description": "A great pick in Pet Supplies. Automatic Pet Feeder is well-reviewed by 560 customers and rated 4.1 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p29",
    "title": "Stacking Rings Toy Set",
    "category": "baby-toys",
    "categoryName": "Baby Toys",
    "price": 349,
    "mrp": 549,
    "rating": 4.6,
    "reviews": 1890,
    "deal": false,
    "image": "https://loremflickr.com/500/500/kidstoys?lock=29",
    "description": "A great pick in Baby Toys. Stacking Rings Toy Set is well-reviewed by 1,890 customers and rated 4.6 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p30",
    "title": "Wooden Building Blocks",
    "category": "baby-toys",
    "categoryName": "Baby Toys",
    "price": 699,
    "mrp": 999,
    "rating": 4.7,
    "reviews": 2340,
    "deal": true,
    "image": "https://loremflickr.com/500/500/buildingblocks?lock=30",
    "description": "A great pick in Baby Toys. Wooden Building Blocks is well-reviewed by 2,340 customers and rated 4.7 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p31",
    "title": "Soft Plush Elephant Toy",
    "category": "baby-toys",
    "categoryName": "Baby Toys",
    "price": 449,
    "mrp": 699,
    "rating": 4.5,
    "reviews": 3010,
    "deal": false,
    "image": "https://loremflickr.com/500/500/plushtoy?lock=31",
    "description": "A great pick in Baby Toys. Soft Plush Elephant Toy is well-reviewed by 3,010 customers and rated 4.5 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "p32",
    "title": "Musical Activity Play Mat",
    "category": "baby-toys",
    "categoryName": "Baby Toys",
    "price": 1299,
    "mrp": 1899,
    "rating": 4.3,
    "reviews": 980,
    "deal": false,
    "image": "https://loremflickr.com/500/500/babytoy?lock=32",
    "description": "A great pick in Baby Toys. Musical Activity Play Mat is well-reviewed by 980 customers and rated 4.3 out of 5 stars. (Demo product for this frontend-only clone \u2014 not a real listing.)"
  },
  {
    "id": "gift-500",
    "title": "Amazon Clone Gift Card \u2014 \u20b9500",
    "category": "gift-cards",
    "categoryName": "Gift Cards",
    "price": 500,
    "mrp": 500,
    "rating": 5.0,
    "reviews": 1,
    "deal": false,
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23f7a072%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23c7511f%22/%3E%0A%3C/linearGradient%3E%3C/defs%3E%0A%3Crect%20width%3D%22400%22%20height%3D%22400%22%20rx%3D%2218%22%20fill%3D%22url%28%23g%29%22/%3E%0A%3Ccircle%20cx%3D%22200.0%22%20cy%3D%22152.0%22%20r%3D%2296.0%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.12%22/%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22168.0%22%20font-size%3D%2290%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%8E%81%3C/text%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22370%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%3E%3Ctspan%20x%3D%22200.0%22%20dy%3D%220%22%3EGift%20Card%20%E2%82%B9500%3C/tspan%3E%3C/text%3E%0A%3C/svg%3E",
    "description": "Demo Amazon Clone gift card. Frontend-only \u2014 not a real, redeemable gift card."
  },
  {
    "id": "gift-1000",
    "title": "Amazon Clone Gift Card \u2014 \u20b91000",
    "category": "gift-cards",
    "categoryName": "Gift Cards",
    "price": 1000,
    "mrp": 1000,
    "rating": 5.0,
    "reviews": 1,
    "deal": false,
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2300b8d4%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23007185%22/%3E%0A%3C/linearGradient%3E%3C/defs%3E%0A%3Crect%20width%3D%22400%22%20height%3D%22400%22%20rx%3D%2218%22%20fill%3D%22url%28%23g%29%22/%3E%0A%3Ccircle%20cx%3D%22200.0%22%20cy%3D%22152.0%22%20r%3D%2296.0%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.12%22/%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22168.0%22%20font-size%3D%2290%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%8E%81%3C/text%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22370%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%3E%3Ctspan%20x%3D%22200.0%22%20dy%3D%220%22%3EGift%20Card%20%E2%82%B91000%3C/tspan%3E%3C/text%3E%0A%3C/svg%3E",
    "description": "Demo Amazon Clone gift card. Frontend-only \u2014 not a real, redeemable gift card."
  },
  {
    "id": "gift-2000",
    "title": "Amazon Clone Gift Card \u2014 \u20b92000",
    "category": "gift-cards",
    "categoryName": "Gift Cards",
    "price": 2000,
    "mrp": 2000,
    "rating": 5.0,
    "reviews": 1,
    "deal": false,
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2337475a%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23232f3e%22/%3E%0A%3C/linearGradient%3E%3C/defs%3E%0A%3Crect%20width%3D%22400%22%20height%3D%22400%22%20rx%3D%2218%22%20fill%3D%22url%28%23g%29%22/%3E%0A%3Ccircle%20cx%3D%22200.0%22%20cy%3D%22152.0%22%20r%3D%2296.0%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.12%22/%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22168.0%22%20font-size%3D%2290%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%8E%81%3C/text%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22370%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%3E%3Ctspan%20x%3D%22200.0%22%20dy%3D%220%22%3EGift%20Card%20%E2%82%B92000%3C/tspan%3E%3C/text%3E%0A%3C/svg%3E",
    "description": "Demo Amazon Clone gift card. Frontend-only \u2014 not a real, redeemable gift card."
  },
  {
    "id": "gift-5000",
    "title": "Amazon Clone Gift Card \u2014 \u20b95000",
    "category": "gift-cards",
    "categoryName": "Gift Cards",
    "price": 5000,
    "mrp": 5000,
    "rating": 5.0,
    "reviews": 1,
    "deal": false,
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23ff5c72%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23cc0c39%22/%3E%0A%3C/linearGradient%3E%3C/defs%3E%0A%3Crect%20width%3D%22400%22%20height%3D%22400%22%20rx%3D%2218%22%20fill%3D%22url%28%23g%29%22/%3E%0A%3Ccircle%20cx%3D%22200.0%22%20cy%3D%22152.0%22%20r%3D%2296.0%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.12%22/%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22168.0%22%20font-size%3D%2290%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%8E%81%3C/text%3E%0A%3Ctext%20x%3D%22200.0%22%20y%3D%22370%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%3E%3Ctspan%20x%3D%22200.0%22%20dy%3D%220%22%3EGift%20Card%20%E2%82%B95000%3C/tspan%3E%3C/text%3E%0A%3C/svg%3E",
    "description": "Demo Amazon Clone gift card. Frontend-only \u2014 not a real, redeemable gift card."
  }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}
function getProductsByCategory(slug) {
  return PRODUCTS.filter(p => p.category === slug);
}
function searchProducts(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q)
  );
}
function getCategoryName(slug) {
  const c = CATEGORIES.find(c => c.slug === slug);
  return c ? c.name : slug;
}
function formatPrice(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}
function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
// Self-contained gradient+icon "art" generator - used for gift cards & Prime Video
// tiles too, so nothing on the site depends on an external image service.
function svgArt(title, icon, c1, c2, w, h) {
  w = w || 400; h = h || 400;
  const words = title.split(" ");
  const lines = [];
  let cur = "";
  words.forEach(word => {
    const trial = (cur + " " + word).trim();
    if (trial.length > 16 && cur) { lines.push(cur); cur = word; }
    else { cur = trial; }
  });
  if (cur) lines.push(cur);
  const lineHeight = 26;
  const startY = h - 30 - (lines.length - 1) * lineHeight;
  const tspans = lines.map((ln, i) => `<tspan x="${w/2}" dy="${i === 0 ? 0 : lineHeight}">${ln}</tspan>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
</linearGradient></defs>
<rect width="${w}" height="${h}" rx="18" fill="url(#g)"/>
<circle cx="${w*0.5}" cy="${h*0.38}" r="${w*0.24}" fill="#ffffff" fill-opacity="0.12"/>
<text x="${w/2}" y="${h*0.42}" font-size="90" text-anchor="middle" dominant-baseline="middle">${icon}</text>
<text x="${w/2}" y="${startY}" font-size="19" font-family="Arial, Helvetica, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">${tspans}</text>
</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
