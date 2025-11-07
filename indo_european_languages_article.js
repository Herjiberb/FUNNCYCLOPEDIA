// 📄 indo_european_languages_article.js

/**
 * Structured content for "Indo-European Languages: An Epic of Linguistic History" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const indo_european_languages_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'INDO-EUROPEAN: A DEEP-TIME EXPLORATION OF THE WORLD’S LARGEST LANGUAGE FAMILY',
        style: {
            color: '#A82828', // Crimson/Red Earth
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'The Indo-European language family is the most extensively studied in the world, tracing its roots to a single common ancestor, the reconstructed language known as Proto-Indo-European (PIE). Spanning a geographical area from the British Isles to the Indian Subcontinent, this family encompasses over 400 living languages spoken by nearly three billion native speakers. The process of reconstructing PIE, which has no direct textual records, pioneered the field of historical linguistics and continues to inform our understanding of human prehistory, culture, and migration patterns.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'I. The Science of Reconstruction: Proto-Indo-European (PIE)',
    },
    // Paragraph: PIE Reconstruction
    {
        type: 'p',
        text: 'The existence of PIE was hypothesized in the late 18th century by Sir William Jones, who noted startling systematic similarities between Sanskrit, Greek, and Latin. Since then, scholars have used the comparative method to derive PIE’s features by identifying regular sound correspondences across its daughter languages. This method relies on the principle of regular sound change, allowing linguists to peel back layers of linguistic development to establish the phonology, morphology, and lexicon of the ancestral tongue. Because PIE forms are reconstructed, they are conventionally marked with an asterisk, such as *pəter for "father".',
    },
    // Dropdown: The Homeland Debate
    {
        type: 'dropdown',
        toggleText: 'Deep Dive into the PIE Homeland Hypotheses',
        contentHTML: `
            <p>The precise geographic origin and timing of the PIE community remain the subject of intense scholarly debate, with two main competing theories:</p>
            <ol>
                <li>The Kurgan Hypothesis (Steppe Hypothesis): This model, championed by Marija Gimbutas, is the most widely accepted. It posits the homeland in the Pontic–Caspian steppe (modern Ukraine and Southern Russia) and dates PIE to approximately 4500-2500 BCE. Its spread is strongly correlated with the expansion of the Yamnaya culture, a nomadic, pastoralist group known for horse domestication and wheeled vehicles.</li>
                <li>The Anatolian Hypothesis: Proposed by Colin Renfrew, this alternative theory suggests that the languages spread much earlier, about 8000–9500 years ago, emanating from Anatolia (modern Turkey) with the dispersal of agriculture. While dating methods based on linguistic evolution have lent some support to the older timeline, archaeological and genetic evidence continues to heavily favor the Steppe model for the majority of the subsequent expansions.</li>
            </ol>
            <p>Linguistic paleontology, the reconstruction of vocabulary, strongly supports a culture familiar with snow, wheeled transport, and a pastoral economy, features most consistent with the Kurgan model.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'II. Core Linguistic Features of PIE',
    },
    // Paragraph: Phonology
    {
        type: 'p',
        text: 'PIE possessed a complex phonological system. A notable feature is the three-way distinction among stops: voiceless (*p, *t, *k), voiced (*b, *d, *g), and voiced aspirated (*bh, *dh, *gh). However, the most famous theoretical breakthrough in PIE phonology is the Laryngeal Theory, which posits that PIE contained three or more “laryngeal” consonants (*h₁, *h₂, *h₃) that were lost in most daughter languages but left traces, such as systematically conditioning vowel quality and length. For example, the reconstructed word for "father", *ph₂tér, contains the laryngeal *h₂ which explains the long vowel in Greek patér.',
    },
    // Paragraph: Morphology
    {
        type: 'p',
        text: 'PIE was a highly inflected language. Noun and adjective morphology was elaborate, featuring up to eight grammatical cases: nominative (subject), accusative (direct object), genitive (possession), dative (indirect object), ablative (movement away from), instrumental (by means of), locative (location), and vocative (direct address). These cases, along with three numbers (singular, dual, plural) and three genders (masculine, feminine, neuter), required a great degree of memorization and complex word forms. The verbal system was similarly complex, utilizing ablaut—a pattern of systematic vowel variation—to indicate grammatical function, such as tense or aspect. Ablaut is still preserved today in Germanic languages, as evidenced in the English verb system, where "sing, sang, sung" demonstrates the full-grade, reduced-grade, and zero-grade vowel alternations inherited directly from PIE.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'III. The Centum-Satem Isogloss',
    },
    // Paragraph: Centum-Satem explanation
    {
        type: 'p',
        text: 'The primary linguistic division within the Indo-European family is the Centum-Satem isogloss, which describes the divergent evolution of the three reconstructed series of PIE velar (dorsal) stops: palatovelars (*ḱ, *ǵ), plain velars (*k, *g), and labiovelars (*kʷ, *gʷ).',
    },
    // Table: Centum vs. Satem Details
    {
        type: 'table',
        data: {
            headers: ['Language Group', 'Development of Palatovelars (*ḱ)', 'Mergers and Retention', 'Branches'],
            rows: [
                ['Centum', 'Become plain velar stops (k-sounds)', 'Palatovelars merged with plain velars, but labiovelars were retained as distinct phonemes.', 'Italic, Celtic, Germanic, Hellenic (Greek), and the easternmost Tocharian branch.'],
                ['Satem', 'Become sibilants or fricatives (s- or sh-sounds)', 'Labiovelars merged with plain velars, but palatovelars remained distinct and shifted forward (palatalized) into sibilants.', 'Indo-Iranian, Balto-Slavic, Albanian, and Armenian.']
            ]
        }
    },
    // Paragraph: Isogloss Significance
    {
        type: 'p',
        text: 'The distinction is named after the word for "hundred": Latin centum (pronounced with an initial k-sound) versus Avestan satəm (pronounced with an initial s-sound). The geographical distribution shows the satem languages generally in the east and the centum languages in the west, with the notable exception of Tocharian. This geographical anomaly suggests the Centum-Satem split was not the result of the first binary split of PIE, but rather a set of parallel innovations or the result of a Sprachbund, a shared-area linguistic convergence, that occurred after the earliest branches, Anatolian and Tocharian, had already separated.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'IV. Major Branches and Historical Documentation',
    },
    // Paragraph: Anatolian and Tocharian
    {
        type: 'p',
        text: 'The two most distinct branches are the extinct Anatolian and Tocharian. The Anatolian branch, documented primarily by Hittite cuneiform tablets from the 17th century BCE, provides the oldest written evidence of an Indo-European language. Its extremely early split from the main PIE trunk resulted in highly divergent features, yet it also preserves certain archaic elements, such as the Laryngeal consonants, better than many later languages. Tocharian, attested in texts from the 6th to 8th centuries CE in the Tarim Basin, is important because of its Centum classification and its geographic isolation at the easternmost edge of the IE dispersal.',
    },
    // Paragraph: Indo-Iranian
    {
        type: 'p',
        text: 'The Indo-Iranian branch is the largest in terms of number of languages and speakers today, encompassing two main sub-branches: Indo-Aryan (Indic) and Iranian. The oldest record is the Vedic Sanskrit of the Rigveda (c. 1500 BCE), a profoundly conservative language that served as a primary resource for PIE reconstruction. Modern Indo-Aryan languages include Hindi-Urdu, Bengali, and Marathi, while the Iranian sub-branch includes Persian (Farsi), Pashto, and Kurdish. The Proto-Indo-Iranians were responsible for introducing their language into the Indian subcontinent, marking one of the most significant migrations in the family’s history.',
    },
    // Paragraph: Germanic
    {
        type: 'p',
        text: 'The Germanic branch is defined by a series of dramatic sound shifts known as Grimm’s Law and Verner’s Law, which systematically differentiate its consonants from those of other IE branches. This group includes English, German, Dutch, Swedish, and Norwegian. The earliest attested Germanic language is Gothic (4th century CE), but it is the North Germanic branch (Old Norse) and the West Germanic branch (Old English, Old High German) that led to the dominant modern languages of Western Europe.',
    },
    // Paragraph: Italic and Hellenic
    {
        type: 'p',
        text: 'The Italic branch is most famous for Latin, the language of the Roman Empire, which subsequently gave rise to the entire Romance sub-branch, including Italian, Spanish, French, Portuguese, and Romanian. The influence of Latin spread across much of Western Europe, effectively replacing indigenous languages in many areas. Hellenic, represented primarily by Greek, boasts one of the longest continuous documented histories of any IE language, stretching from Mycenaean Greek Linear B tablets (c. 1450 BCE) through Homeric and Classical Greek to its modern form.',
    },
    // Paragraph: Balto-Slavic
    {
        type: 'p',
        text: 'This branch is generally divided into Baltic (Lithuanian, Latvian) and Slavic (Russian, Polish, Czech, Bulgarian). The Balto-Slavic proto-language is believed to have been unified for a significant period. Lithuanian is highly valued by comparative linguists for its linguistic conservatism, retaining many archaic features lost in most other modern Indo-European languages. The Slavic languages, whose earliest record is Old Church Slavonic (9th century CE), spread widely across Eastern Europe and the Balkans, becoming the most geographically widespread branch in Europe.',
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'The Indo-European family stands as the greatest triumph of the comparative method, a monumental achievement that linked disparate cultures through the invisible threads of language. From the pastoral steppes of the Yamnaya to the megalopolises of the modern world, the echoes of PIE continue to resonate, underpinning the communication of nearly half of humanity.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('indo_european_languages_article.js', indo_european_languages_content);
}