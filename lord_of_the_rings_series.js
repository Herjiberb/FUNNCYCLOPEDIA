// 📄 lord_of_the_rings_series.js

/**
 * Structured content for "The Lord of the Rings (Series)" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const lord_of_the_rings_series_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'THE LORD OF THE RINGS SERIES: TOLKIEN\'S LEGENDARIUM AND ITS ADAPTATIONS',
        style: {
            fontWeight: '700',
            color: '#38761D', // Forest Green
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'The Lord of the Rings (LOTR) is the title most commonly used to refer to the literary and cinematic universe known as the Legendarium, created by J.R.R. Tolkien (1892–1973). The universe encompasses a vast fictional world called Arda, primarily focusing on the continent of Middle-earth. Tolkien, a philologist and professor at Oxford University, spent most of his life creating the history, languages, cosmology, and mythos of this world, which has since become a foundational work of modern fantasy literature and a major global multimedia franchise.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Literary Core: The Books of the Legendarium',
    },
    // Paragraph - The Silmarillion
    {
        type: 'p',
        text: 'The earliest, and most significant, work detailing the cosmology of the Legendarium is The Silmarillion, published posthumously in 1977. This volume compiles the history of Arda from its creation (the Ainulindalë), through the First Age, detailing the wars of the Elves against the dark lord Morgoth (Melkor), the creation of the Silmarils, and the destruction of the great island of Númenor. It provides the deep historical context that informs the later stories.',
    },
    // Paragraph - The Hobbit
    {
        type: 'p',
        text: 'The Hobbit, or There and Back Again, published in 1937, marked Tolkien\'s first major success in Middle-earth fiction. Initially written as a children’s book, it is lighter in tone than its successor. It introduced key elements such as the concept of Hobbits, the wizard Gandalf, the creature Gollum, and, most importantly, the discovery of a seemingly minor magical ring. Its unexpected success prompted the publisher to request a sequel, leading directly to the composition of The Lord of the Rings.',
    },
    // Paragraph - The Lord of the Rings
    {
        type: 'p',
        text: 'The Lord of the Rings was published in three volumes between 1954 and 1955: The Fellowship of the Ring, The Two Towers, and The Return of the King. The narrative follows the quest to destroy the One Ring, a powerful artifact created by the second dark lord, Sauron. It explores themes of duty, courage, sacrifice, and the corrupting nature of power, cementing Tolkien’s reputation as a literary giant.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Tolkien’s Sub-Creation and World Structure',
    },
    // Paragraph - The Ages
    {
        type: 'p',
        text: 'Tolkien structured the history of Middle-earth into distinct cosmological periods known as the Ages of the World. The First Age covers the time between the Great March of the Elves and the defeat of Morgoth. The Second Age details the rise of Sauron and the fall of the island kingdom of Númenor. The Lord of the Rings story takes place at the end of the Third Age, culminating in the passing of the Elves and the beginning of the Age of Men. This precise chronological framework is a hallmark of the Legendarium.',
    },
    // Dropdown: The Role of Philology
    {
        type: 'dropdown',
        toggleText: 'J.R.R. Tolkien’s Academic Contribution to His Universe',
        contentHTML: `
            <p>Tolkien was a world-renowned philologist, specializing in Germanic languages and medieval literature. His Legendarium was not merely a fictional story; it was an exercise in "sub-creation"—the attempt to create a mythology for England.</p>
            <ol>
                <li><strong>Language First:</strong> Unlike most authors, Tolkien created the Elvish languages (notably Quenya and Sindarin) first, deriving the history and cultures of the Elves from the linguistic structures. He believed that language and myth were inseparable.</li>
                <li><strong>Influence:</strong> His work is heavily influenced by Norse mythology, particularly the Völsunga saga, and the Finnish epic, the Kalevala, which provided structural models for his own creation myths.</li>
                <li><strong>The Unfinished Tales:</strong> Following Tolkien’s death, his son, Christopher Tolkien, dedicated his life to editing and publishing his father’s extensive drafts, notes, and fragments, including The History of Middle-earth, which chronicles the evolution of the Legendarium over many decades.</li>
            </ol>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Adaptations: Film and Television Timelines',
    },
    // Paragraph - Overview of Adaptations
    {
        type: 'p',
        text: 'The complexity and scale of Tolkien’s work presented a challenge for adaptation. The history of screen adaptations is marked by varying degrees of fidelity and scope, ranging from early animated features to modern, high-budget cinematic epics and streaming television series. The rights to different parts of the Legendarium are split, which affects which eras and stories can be adapted by different studios.',
    },
    // Table: Comprehensive Timeline of Major Adaptations
    {
        type: 'table',
        data: {
            headers: ['Year', 'Title', 'Format', 'Focus/Era'],
            rows: [
                ['1977', 'The Hobbit', 'Animated TV Movie (Rankin/Bass)', 'Adaptation of the 1937 novel.'],
                ['1978', 'The Lord of the Rings', 'Animated Film (Ralph Bakshi)', 'Covers The Fellowship of the Ring and part of The Two Towers.'],
                ['1980', 'The Return of the King', 'Animated TV Movie (Rankin/Bass)', 'Conclusion to the 1977 animated film.'],
                ['2001', 'The Fellowship of the Ring', 'Live-Action Film (Peter Jackson)', 'First part of the cinematic trilogy.'],
                ['2002', 'The Two Towers', 'Live-Action Film (Peter Jackson)', 'Second part of the cinematic trilogy.'],
                ['2003', 'The Return of the King', 'Live-Action Film (Peter Jackson)', 'Third part of the cinematic trilogy.'],
                ['2012', 'The Hobbit: An Unexpected Journey', 'Live-Action Film (Peter Jackson)', 'First part of the prequel trilogy.'],
                ['2013', 'The Hobbit: The Desolation of Smaug', 'Live-Action Film (Peter Jackson)', 'Second part of the prequel trilogy.'],
                ['2014', 'The Hobbit: The Battle of the Five Armies', 'Live-Action Film (Peter Jackson)', 'Third and final part of the prequel trilogy.'],
                ['2022', 'The Lord of the Rings: The Rings of Power', 'Live-Action TV Series (Amazon)', 'Set in the Second Age of Middle-earth.'],
                ['2024', 'The War of the Rohirrim', 'Animated Film (Expected)', 'Set 250 years before the LOTR trilogy, detailing Helm Hammerhand.'],
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Analysis of Key Adaptations',
    },
    // Dropdown: Peter Jackson's Trilogies
    {
        type: 'dropdown',
        toggleText: 'The Peter Jackson Cinematic Eras (2001-2014)',
        contentHTML: `
            <p>Peter Jackson’s six live-action films remain the most commercially successful and influential adaptations of Tolkien’s work. The Lord of the Rings trilogy (2001–2003) was praised for its technical achievement, scope, and generally faithful adherence to the source material, setting global standards for the fantasy genre. The subsequent Hobbit trilogy (2012–2014), however, was adapted using less source material and received a more mixed critical reaction due to its expansion of the original novel's plot, reliance on computer-generated imagery, and inclusion of new characters and subplots not found in Tolkien’s text.</p>
        `
    },
    // Dropdown: The Rings of Power
    {
        type: 'dropdown',
        toggleText: 'The Lord of the Rings: The Rings of Power Television Series (2022)',
        contentHTML: `
            <p>The Rings of Power is a large-scale television series developed by Amazon and is based on the appendices and notes in The Return of the King, covering events of the Second Age. This includes the forging of the Rings of Power, the rise of Sauron, and the height of the Númenórean kingdom. Due to the limited narrative detail provided by Tolkien for this era, the showrunners utilized creative license to bridge thousands of years of lore into a cohesive narrative, which led to significant debate among Tolkien scholars and the fanbase regarding adherence to the established Legendarium canon.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Enduring Legacy and Cultural Impact',
    },
    // Paragraph - Legacy
    {
        type: 'p',
        text: 'Tolkien’s Legendarium profoundly shaped the fantasy genre, establishing archetypes, narrative structures, and world-building techniques that have been emulated by countless writers, artists, and game designers. The concept of deep fictional history, invented languages, and the moral exploration of power are direct legacies of his work. The books continue to be critical commercial successes, demonstrating their lasting appeal across multiple generations. The complexity of the world has also generated a vast, academic field of study dedicated to interpreting Tolkien’s sources and themes.',
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'From the detailed mythology of The Silmarillion to the global cinematic spectacle of the Peter Jackson films, Tolkien’s Middle-earth remains a paramount achievement in 20th-century literature and a definitive global cultural phenomenon.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('lord_of_the_rings_series.js', lord_of_the_rings_series_content);
}