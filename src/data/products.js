import {v4} from "uuid"
const products = [
    {
        id:v4(),
        name: "Iphone 16 pro max",
        description: "Best iphone so far",
        price:999,
        image:"https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/09/iPhone-16-Pro-Max-Natural-Titanium.jpg",
          longDescription: "Experience immersive sound with these high-quality wireless headphones. Equipped with advanced noise cancellation technology, they block out external noise, allowing you to enjoy your music without distractions. The long-lasting battery provides up to 30 hours of playback on a single charge. Soft, cushioned ear cups ensure all-day comfort, making them perfect for work, travel, or casual listening."
    },
    {
        id: v4(),
        name: "Smart Watch",
        price: 99.99,
        image: "https://qualitycomputer.com.np/web/image/product.template/48803/image_1024?unique=51218a1",
        description: "Feature-packed smartwatch with heart-rate monitoring.",
         longDescription: "Stay on top of your fitness goals with this feature-rich smartwatch. Track your heart rate, steps, and sleep patterns in real-time. It includes built-in GPS, multiple sport modes, and a high-resolution touchscreen for an intuitive experience. Sync it with your smartphone to receive notifications, control music, and check the weather. With its water-resistant design, it's perfect for workouts and daily wear."
        },
        {
          id: v4(),
          name: "Apple MacBook Pro 16”",
          price: 2499,
          image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/03/Apple-Macbook-Pro-M1-Pro-16-inch-1.jpg",
          description: "Apple MacBook Pro 16” with M2 chip and Retina display.",
          longDescription:
            "The Apple MacBook Pro 16” is the ultimate laptop for professionals, featuring the powerful M2 Pro chip that delivers breakthrough performance for demanding applications. The stunning Retina display with True Tone technology ensures crisp, vibrant visuals. With up to 20 hours of battery life, a six-speaker sound system, and a magic keyboard, this MacBook is perfect for content creators, developers, and power users. The new macOS ensures smooth multitasking, and its sleek aluminum body makes it both durable and stylish.",
        },
        {
          id: v4(),
          name: "Sony WH-1000XM5 Headphones",
          price: 399,
          image: "https://img.drz.lazcdn.com/g/kf/S0ccf232fa0324f7596400c258b3db04ai.jpg_720x720q80.jpg",
          description: "Industry-leading noise-canceling wireless headphones.",
          longDescription:
            "Sony WH-1000XM5 is the latest in the WH series, offering unparalleled noise cancellation powered by the new Integrated Processor V1. With up to 30 hours of battery life, these headphones are perfect for long flights or work sessions. The plush ear cups provide all-day comfort, and the Adaptive Sound Control automatically adjusts noise levels based on your environment. The quick-charge feature provides 3 hours of playback with just 3 minutes of charging. With support for high-resolution audio and a built-in microphone, they are ideal for both music lovers and professionals.",
        },
        {
          id: v4(),
          name: "Samsung Galaxy S24 Ultra",
          price: 1199,
          image: "https://m.media-amazon.com/images/I/51EldjH4K8L.jpg",
          description: "Samsung’s latest flagship with 200MP camera and S-Pen.",
          longDescription:
            "The Samsung Galaxy S24 Ultra is the ultimate smartphone, featuring a 200MP main camera for breathtaking photography. The new AI-enhanced processor ensures ultra-fast performance, and the built-in S-Pen makes it a powerful tool for creators and professionals alike. With a 6.8-inch Dynamic AMOLED 2X display, 120Hz refresh rate, and adaptive brightness, the S24 Ultra delivers a stunning viewing experience. Its 5000mAh battery ensures all-day power, while fast charging and wireless charging support provide convenience on the go.",
        },
        {
          id: v4(),
          name: "PlayStation 5",
          price: 499,
          image: "https://www.jbhifi.com.au/cdn/shop/files/784128-Product-0-I-638616198003053141_grande.jpg",
          description: "Sony PlayStation 5 with ultra-fast SSD and 4K gaming.",
          longDescription:
            "The PlayStation 5 redefines gaming with its ultra-fast SSD and custom AMD Ryzen processor, providing near-instant load times and breathtaking graphics. The DualSense controller features adaptive triggers and haptic feedback, delivering an immersive experience. The console supports 4K gaming at up to 120Hz, and with a library of exclusive titles like Spider-Man: Miles Morales and God of War: Ragnarok, the PS5 is the must-have gaming console for every player. With expandable storage options and backward compatibility, it's built for the future of gaming.",
        },
        {
          id: v4(),
          name: "Dell XPS 15",
          price: 1899,
          image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/03/Dell-XPS-15-2023-i7.jpg",
          description: "Dell XPS 15 with a stunning 4K display and Intel i7.",
          longDescription:
            "The Dell XPS 15 is a high-performance laptop designed for professionals and creatives. With a 4K OLED touchscreen display, it delivers vibrant colors and sharp visuals. Powered by an Intel i7 processor and NVIDIA GeForce RTX graphics, it handles intensive tasks like video editing, 3D rendering, and programming with ease. The laptop features a carbon-fiber palm rest, ultra-thin bezels, and an edge-to-edge keyboard. Thunderbolt 4 support ensures fast connectivity, making the XPS 15 a perfect choice for power users.",
        },
        {
          id: v4(),
          name: "Apple AirPods Pro 2",
          price: 249,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1724041668836",
          description: "Active Noise Cancellation with MagSafe charging.",
          longDescription:
            "Apple AirPods Pro 2 bring the best in wireless audio with Active Noise Cancellation and Transparency Mode. Featuring the new H2 chip, these earbuds provide enhanced sound quality, improved battery life, and adaptive EQ. The redesigned ear tips ensure a comfortable fit, and MagSafe charging allows for seamless wireless charging. With spatial audio, dynamic head tracking, and Siri integration, AirPods Pro 2 are perfect for music lovers and professionals alike.",
        },
        {
          id: v4(),
          name: "GoPro HERO12 Black",
          price: 399,
          image: "https://fatafatsewa.com/storage/media/8007/gopro-hero-12-(3).jpg",
          description: "5.3K video recording and HyperSmooth 6.0 stabilization.",
          longDescription:
            "The GoPro HERO12 Black is the ultimate action camera, capable of capturing stunning 5.3K video with HDR support. Its HyperSmooth 6.0 stabilization ensures ultra-smooth footage, even in extreme conditions. Waterproof up to 33ft, the HERO12 is perfect for adventures, vlogging, and professional filmmaking. The improved battery life and voice control make it more convenient than ever. Whether you're skydiving, surfing, or mountain biking, the GoPro HERO12 is your perfect companion for capturing every moment.",
        },
        {
          id: v4(),
          name: "Samsung 49” Odyssey G9 Monitor",
          price: 1299,
          image: "https://www.neostore.com.np/assets/uploads/g91.jpg",
          description: "Ultra-wide 49” gaming monitor with 240Hz refresh rate.",
          longDescription:
            "The Samsung Odyssey G9 is a gaming beast with a 49-inch ultra-wide QLED panel, 240Hz refresh rate, and 1ms response time. With Quantum HDR 2000, the visuals are stunning, providing deep blacks and vivid colors. The 1000R curvature wraps around your field of vision for an immersive experience. Ideal for gamers, content creators, and professionals, the Odyssey G9 delivers unparalleled performance with G-Sync and FreeSync support.",
        },
      {
        id: v4(),
        name: "Gaming Mouse",
        price: 39.99,
        image: "https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/m/9/m915-mouse04.jpg",
        description: "Ergonomic gaming mouse with customizable RGB lighting.",
        longDescription: "Enhance your gaming experience with this precision-engineered gaming mouse. It features adjustable DPI settings for fast and accurate movements. Customizable RGB lighting allows you to match your setup's aesthetic. The ergonomic design ensures comfortable use during long gaming sessions. With programmable buttons and a durable build, this mouse is a must-have for serious gamers."
      },
      {
        id: v4(),
        name: "Mechanical Keyboard",
        price: 79.99,
        image: "https://www.keychron.uk/cdn/shop/products/Keychron-V1-Custom-Mechanical-Keyboard-carbon-black-knob-K-Pro-brown.jpg?v=1659349784&width=1214",
        description: "Mechanical keyboard with blue switches for a satisfying clicky feel.",
        longDescription: "This high-performance mechanical keyboard is designed for both gamers and professionals. Featuring blue mechanical switches, it delivers a satisfying tactile and clicky typing experience. With full RGB backlighting, customizable macros, and anti-ghosting technology, it offers speed and precision. The durable aluminum frame ensures long-lasting reliability, making it perfect for work and gaming."
      },
      {
        id: v4(),
        name: "Portable Bluetooth Speaker",
        price: 49.99,
        image: "https://online.videopro.com.au/content/2/c/d/5/2cd58124f40ea5252cc7fe845539c12739169870_3.png",
        description: "Compact Bluetooth speaker with deep bass and long battery life.",
         longDescription: "Enjoy powerful sound with this portable Bluetooth speaker. Designed with deep bass technology, it delivers crisp highs and immersive lows. The compact and lightweight design makes it easy to carry anywhere. With a battery life of up to 12 hours, it's ideal for outdoor adventures, beach trips, and parties. Water-resistant and shockproof, this speaker is built for durability."
      },
      {
        id: v4(),
        name: "4K Monitor",
        price: 299.99,
        image: "https://www.alogic.co.nz/cdn/shop/files/clarity_c439648b-f446-41af-a16b-b6dbfa9e6a21.webp?v=1706938103&width=2048",
        description: "27-inch 4K UHD monitor with vibrant colors and sharp visuals.",
        longDescription: "Upgrade your workspace with this stunning 4K UHD monitor. Featuring a 27-inch ultra-high-definition display, it delivers breathtaking clarity and vibrant colors. Ideal for gaming, design, and professional work, it supports HDR10 for enhanced contrast. The ultra-slim bezels and ergonomic stand ensure a sleek, modern look with maximum comfort for extended use."
      },
      {
        id: v4(),
        name: "External SSD",
        price: 129.99,
        image: "https://www.megatech.com.np/wp-content/uploads/2022/06/Amazone-3-1.jpg",
        description: "Portable 1TB external SSD with fast read/write speeds.",
          longDescription: "Store and access your files quickly with this high-speed external SSD. With a 1TB capacity, it provides ample space for documents, videos, and games. USB-C and USB 3.1 connectivity ensure ultra-fast transfer speeds of up to 1050MB/s. Its compact, shock-resistant design makes it perfect for on-the-go use. Compatible with Windows, Mac, and Linux."
      },
      {
        id: v4(),
        name: "Noise-Canceling Earbuds",
        price: 89.99,
        image: "https://i0.wp.com/ankernepal.com/wp-content/uploads/2024/06/A3939011_NoiseCancellingEarbuds_TD01_1200x-p3.webp?fit=1200%2C1200&ssl=1",
        description: "In-ear earbuds with active noise cancellation and clear sound.",
         longDescription: "Immerse yourself in pure sound with these noise-canceling earbuds. Featuring advanced ANC (Active Noise Cancellation), they block out unwanted background noise for a distraction-free listening experience. Equipped with high-fidelity drivers, they deliver crisp highs and deep bass. The ergonomic design ensures a secure and comfortable fit, making them perfect for long listening sessions. With a battery life of up to 8 hours per charge and an additional 24 hours with the charging case, you can enjoy music all day long."
      },
      {
        id: v4(),
        name: "Fitness Tracker",
        price: 59.99,
        image: "https://i5.walmartimages.com/seo/Fitbit-Inspire-2-Fitness-Tracker-Black_96b0eb36-17a8-4fde-a725-ff7cf9f5e675.43dfffa5bd5240f137e9c2f289ab339d.jpeg",
        description: "Fitness tracker with multi-sport modes and sleep monitoring.",
         longDescription: "Capture professional-quality videos with this 3-axis smartphone gimbal stabilizer. Designed to eliminate shaky footage, it ensures ultra-smooth, cinematic shots with ease. With intuitive controls and multiple shooting modes, such as motion tracking and panorama, it enhances your content creation experience. The lightweight and foldable design makes it travel-friendly, while the rechargeable battery offers up to 12 hours of use on a single charge."
      },
      {
        id: v4(),
        name: "Webcam",
        price: 49.99,
        image: "https://i5.walmartimages.com/seo/1080P-Web-Cam-HD-Camera-Webcam-with-Mic-Microphone-for-Computer-PC-Laptop-Notebook_11aab792-f2a7-4765-88a4-656ef218b93e.c2b93dba35f7ed0bb10e6bacac3173a2.jpeg",
        description: "1080p HD webcam with built-in microphone for clear video calls.",
        longDescription: "Transform your space with this smart LED light strip, featuring millions of colors and multiple lighting effects. Control it using a smartphone app or voice commands via Alexa and Google Assistant. Sync the lights with music for a dynamic party atmosphere, or set schedules for automatic on/off functions. The adhesive backing makes installation easy on any surface, perfect for gaming setups, bedrooms, or ambient lighting."
      },

]

export default products;
