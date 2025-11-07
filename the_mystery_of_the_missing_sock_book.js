// 📄 the_mystery_of_the_missing_sock_book.js

/**
 * Structured content for "The Mystery of the Missing Sock" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const missing_sock_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'THE MYSTERY OF THE MISSING SOCK: A TALE OF SWEAT AND DREAD',
        style: {
            fontWeight: '700',
            color: '#6A0DAD', // A dark, horror-themed purple
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
            // NO textShadow or other highlighting
        }
    },
    // H2 Header - Cover
    {
        type: 'h2',
        text: 'The Original Comic Cover (Issue #1)',
    },
    // Placeholder Image for the Cover
    {
        type: 'p',
        text: 'The iconic, grainy cover art featured only on the original comic book run.',
    },
    {
        type: 'image',
        // Placeholder for a detailed cover image (representing the sweaty camp horror)
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA0MDAgMjAwIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2EyYjNjYyIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0icG9wcGlucyBzYW5zLXNlcmlmIiBmb250LXNpemU9IjMwIiBmaWxsPSIjZmZmZmZmIj5UaGUgTXlzdGVyeSBvZiB0aGUgTWlzc2luZyBTb2NrPC90ZXh0PgogIDx0ZXh0IHg9IjUwJSIgeT0iNzUlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0icG9wcGlucyBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmaWxsPSIjZmZmZmZmIj5CeSBKZXJiZXIgR2FodW5zZXI8L3RleHQ+Cjwvc3ZnPg==',
        alt: 'Cover for The Mystery of the Missing Sock comic.',
        style: {
            width: '400px',
            height: '200px',
            margin: '1rem auto',
            display: 'block',
            border: '2px solid #555',
        }
    },
    // H2 Header - Sock Image
    {
        type: 'h2',
        text: 'The Subject of the Terror',
    },
    // The required Base64 SVG Sock Image
    {
        type: 'image',
        // High-quality Base64 SVG for a striped sock
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic3RyaXBlcyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZENzAwO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjIwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDcwMDtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIyMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFNDU2MjY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRTQ1NjI2O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzNjZDQztzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI2MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzY2Q0M7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZENzAwO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjgwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDcwMDtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI4MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFNDU2MjY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0U0NTYyNjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGZpbGw9InVybCgjc3RyaXBlcykiIGQ9Ik0gMzAgMTAgUSAzNSA1IDQwIDEwIEwgNjAgMTAgUSA2NSA1IDcwIDEwIEwgNzAgNjAgUSA3NSA2NSA3MCA3MCBMIDMwIDcwIFEgMjUgNjUgMzAgNjAgTCAzMCAxMCBaIi8+CiAgPHBhdGggZmlsbD0iIzU1NSIgZD0iTSAzMCA2NSBRIDIwIDc1IDMwIDg1IEwgNzAgODUgUSA4MCA3NSA3MCA2NSBMIDMwIDY1IFoiLz4KICA8cGF0aCBmaWxsPSIjNENGQTVFIiBkPSJNIDI4IDgwIEwgNzIgODAgQSA4MCA4NSA4MCA5NSA3MiAxMDAgTCAyOCAxMDAgQSAyMCA5NSAyMCA4NSA4MCA4MCBaIi8+Cjwvc3ZnPg==',
        alt: 'A visually appealing striped sock.',
        style: {
            width: '100px',
            height: '100px',
            margin: '1rem auto',
            display: 'block',
        }
    },
    // H2 Header - Plot Summary
    {
        type: 'h2',
        text: 'The Sockhunting Saga: Plot Summary',
    },
    // Paragraph - Plot and Tone
    {
        type: 'p',
        text: 'The story, authored by Jerber Gahunser, originally debuted in a limited-run comic book series printed with simple, large baby text to mask the truly dark themes. The narrative centers on Uncle Fred and Papa Jimmy, two hapless family men who decide to undertake a perilous mission to recover all of the laundry room’s missing socks. This sockhunting journey takes them deep into the murky, humid, and surprisingly sweaty confines of the apartment building’s sub-basement, a place rumored to twist the minds of men. The story is a masterful blend of B-movie horror and camp, where the true monster is not a creature, but the realization of endless, unrecoverable loss. The escalating tension is built purely on the psychological strain of humidity and the overwhelming smell of stale detergent.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Publication and Media Details',
    },
    // Paragraph - Publication Intro
    {
        type: 'p',
        text: 'The following table outlines the initial publication details for The Mystery of the Missing Sock, a title that became a cult classic in the underground camp horror community.',
    },
    // Dynamic Table Block - Publication Details
    {
        type: 'table',
        data: {
            headers: ['Attribute', 'Detail', 'Context'],
            rows: [
                ['Original Title', 'The Mystery of the Missing Sock', 'Retained through all subsequent reprints.'],
                ['Author', 'Jerber Gahunser', 'Gahunser’s first work at the time. His later works include Hatchet Stab DIE! DIE! DIE! and How to Eating a Pile of Slugs.'],
                ['Original Format', 'Limited Comic Series (7 Issues)', 'Known for its thick paper and simple "baby text" fonts.'],
                ['Publisher', 'Bryant Reitzel Media', 'Responsible for the initial print run and distribution.'],
                ['Publication Date', 'May 1993 – November 1994', 'The period during which the seven issues were released.'],
                ['Genre', 'Sweaty Camp Horror / Absurdist Drama', 'Defined by its focus on psychological dread in a hot, messy environment.']
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Legacy and Cultural Impact',
    },
    // Paragraph - Legacy
    {
        type: 'p',
        text: 'Though never achieving mainstream success, the comic book series developed a passionate following. Fans often reference the infamous "sweat-soaked hallway sequence" and the haunting final panel, which implies that the sock-eater is not an external entity but a deep-seated domestic curse. Its influence can be seen in later works that leverage uncomfortable heat and mundane settings to generate fear. The story of Uncle Fred and Papa Jimmy remains a testament to low-budget, high-concept horror.',
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'The comic is now a rare collector’s item, especially the highly sought-after Issue #4, which contained a limited-edition foil sticker of a heavily sweating Papa Jimmy.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('the_mystery_of_the_missing_sock_book.js', missing_sock_content);
}