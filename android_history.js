// 📄 android_history.js

/**
 * Structured content for "The History of Android OS" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const android_history_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'THE ANDROID OPERATING SYSTEM: A HISTORY OF OPEN SOURCE MOBILE DOMINANCE',
        style: {
            fontWeight: '700',
            color: '#3DDC84', // Android Green
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, primarily developed by Google. Launched commercially in 2008, it rapidly grew to become the world\'s most widely used operating system for smartphones and tablets. Its success is rooted in its open-source nature, which allows manufacturers the flexibility to customize and scale the platform across a vast array of devices and form factors, leading to its current dominance in the global mobile market.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Conception, Acquisition, and the Open Handset Alliance (2003–2007)',
    },
    // Paragraph - Early History
    {
        type: 'p',
        text: 'The foundational work for Android began in October 2003 with the founding of Android Inc., in Palo Alto, California, by Andy Rubin, Rich Miner, Nick Sears, and Chris White. Rubin initially conceived of the project as an operating system for digital cameras before pivoting to focus on creating a new, smarter operating system for mobile phones. The company operated quietly until it faced financial challenges. In July 2005, Google acquired Android Inc. for at least $50 million, recognizing the strategic importance of mobile computing. The development team, led by Rubin, continued to work at Google, choosing to base their platform on the open-source Linux kernel.',
    },
    // Dropdown: The Open Handset Alliance
    {
        type: 'dropdown',
        toggleText: 'Detailed Examination of the Open Handset Alliance (OHA)',
        contentHTML: `
            <p>The OHA was officially announced by Google on November 5, 2007, as a consortium of dozens of technology and mobile companies.</p>
            <ol>
                <li><strong>Purpose:</strong> The alliance was formed to collaborate on the development of open standards for mobile devices, counteracting the closed systems offered by competitors like Apple and BlackBerry.</li>
                <li><strong>Founding Members:</strong> Key founding members included Google, HTC, Motorola, Samsung, Intel, Qualcomm, and T-Mobile. This broad coalition ensured the platform had immediate industry backing from carriers, hardware manufacturers, and chipset makers.</li>
                <li><strong>Strategy:</strong> The OHA committed to making Android’s source code available as free software under the Apache License, a move that encouraged rapid adoption and customization by device manufacturers globally, ensuring Android's ubiquity.</li>
            </ol>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The First Commercial Releases and Early Evolution (2008–2011)',
    },
    // Paragraph - First Device and Open Source
    {
        type: 'p',
        text: 'The first commercially available smartphone running Android 1.0 was the HTC Dream (known as the T-Mobile G1 in the U.S.), released in October 2008. This initial version was basic but included core Google services like Gmail, Maps, YouTube, and the Android Market (the precursor to the Google Play Store). The subsequent early updates—Cupcake (1.5), Donut (1.6), and Eclair (2.0–2.1)—introduced foundational elements, including the on-screen keyboard, widget support, universal search, CDMA network compatibility, and turn-by-turn navigation (Google Maps Navigation).',
    },
    // Dropdown: Android Open Source Project (AOSP)
    {
        type: 'dropdown',
        toggleText: 'The Distinction between AOSP and Google Mobile Services (GMS)',
        contentHTML: `
            <p>The core philosophy of Android rests on the distinction between its open-source base and its proprietary components:</p>
            <ol>
                <li><strong>AOSP:</strong> The Android Open Source Project is the true open-source foundation. It contains the essential operating system code, available for any developer or manufacturer to use and modify for any device (smartphones, TVs, wearables, etc.).</li>
                <li><strong>GMS:</strong> Google Mobile Services is the suite of proprietary applications (like the Google Play Store, Google Search, Gmail, etc.) and APIs required to access those services. Manufacturers must obtain GMS certification from Google, agreeing to compatibility standards, to pre-install these apps on their devices. Devices built solely on AOSP do not include these Google services.</li>
            </ol>
            <p>This duality is the key to Android’s global dominance, allowing it to be both a flexible open platform and a carrier for Google’s revenue-generating services.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Dessert Era: Timeline of Major Versions and Key Features',
    },
    // Paragraph - Version Naming
    {
        type: 'p',
        text: 'For its first ten years, major public versions of Android were famously named alphabetically after desserts or sweet treats, a tradition that emphasized the platform’s lighthearted and rapid development cycle. These updates established key features that defined the modern smartphone experience.',
    },
    // Table: Key Android Versions and Architectural Shifts
    {
        type: 'table',
        data: {
            headers: ['Codename (Version)', 'Release Year', 'Key Feature/Architectural Shift'],
            rows: [
                ['Eclair (2.0–2.1)', '2009', 'Native Exchange email support, Google Maps Navigation (turn-by-turn GPS).'],
                ['Froyo (2.2)', '2010', 'Just-In-Time (JIT) compilation for speed, Wi-Fi hotspot support, Adobe Flash support (later removed).'],
                ['Gingerbread (2.3)', '2010', 'Redesigned UI for simplicity, native NFC support, enhanced power management.'],
                ['Honeycomb (3.0–3.2)', '2011', 'Tablet-exclusive OS with a completely redesigned interface; introduced the Action Bar.'],
                ['Ice Cream Sandwich (4.0)', '2011', 'Unified the phone (Gingerbread) and tablet (Honeycomb) OS experiences; introduced virtual navigation buttons.'],
                ['Jelly Bean (4.1–4.3)', '2012', 'Project Butter, improving UI smoothness; introduced Google Now (AI assistant).'],
                ['KitKat (4.4)', '2013', 'Optimized OS to run efficiently on low-end devices (Project Svelte); introduced "OK Google" hands-free voice search.'],
                ['Lollipop (5.0–5.1)', '2014', 'Material Design visual language; introduced Project Volta for battery life improvement.'],
                ['Marshmallow (6.0)', '2015', 'Runtime permissions model; standardized native fingerprint support; Doze mode for battery saving.'],
                ['Nougat (7.0–7.1)', '2016', 'Native split-screen multitasking; improved Doze mode; notification direct reply.'],
                ['Oreo (8.0–8.1)', '2017', 'Project Treble for faster updates; picture-in-picture mode; notification channels.'],
                ['Pie (9)', '2018', 'AI-powered Adaptive Battery and Brightness; gesture-based navigation (optional).'],
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Modern Era: Privacy, Security, and Large Screens (2019–Present)',
    },
    // Paragraph - Post-Dessert Naming
    {
        type: 'p',
        text: 'Starting with Android 10 in 2019, Google officially dropped the dessert codenames in public releases to adopt a simpler, numerical naming convention. This shift coincided with a focus on platform maturity, with major updates centered on user privacy, enhanced security, and multi-device form factors like foldables and tablets.',
    },
    // Dropdown: Modern Focus Areas
    {
        type: 'dropdown',
        toggleText: 'Deep Dive into Privacy and Design Shifts (Android 10+)',
        contentHTML: `
            <p>Modern Android development is heavily invested in adapting to new hardware and strengthening user trust:</p>
            <ol>
                <li><strong>Privacy Controls (Android 10 & 11):</strong> Introduced stricter permission controls, including 'allow only while using the app' for location data and automatic permission resets for unused apps.</li>
                <li><strong>Material You (Android 12):</strong> Introduced a dynamic, personalizable design language that automatically generated a color palette based on the user's wallpaper, extending design principles into deeper UI elements.</li>
                <li><strong>Large Screen Optimization (Android 12L & 13):</strong> Focused on improving the user experience for tablets and foldable devices, enhancing multi-tasking, and optimizing the core UI for greater screen real estate.</li>
                <li><strong>Project Treble and Updates:</strong> Project Treble, introduced in Android 8 Oreo, created a modular architecture to separate the core Android OS from vendor-specific code. This effort significantly reduced the time and effort required for hardware manufacturers to push out new Android version updates, attempting to solve the fragmentation problem that plagued early versions.</li>
            </ol>
        `
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'Android\'s journey from a small startup project to the dominant mobile operating system illustrates the power of open-source development and strategic corporate acquisition. Its continuing evolution centers on integrating advanced AI, expanding into new device categories (watches, cars, TVs), and constantly balancing platform openness with user security and privacy demands.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('android_history.js', android_history_content);
}