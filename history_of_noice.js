// 📄 history_of_noice.js

/**
 * Structured content for "The History of Noice" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const history_of_noice_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'NOICE: AN AUDIBLE HISTORY OF EXCELLENCE',
        style: {
            fontWeight: '700',
            color: '#1A5276', // A cool, simple blue
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'The term "noice" is a phonetic variation of the standard English word "nice," used as an exclamation to express enthusiastic approval, satisfaction, or pleasure. It functions as an intensifier, conveying a greater degree of excitement or appreciation than the original word. The popularized spelling and pronunciation are strongly linked to specific cultural touchstones in television comedy, which catalyzed its adoption into global internet and spoken slang.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Pronunciation Shift and Etymology',
    },
    // Paragraph - Linguistic Origin
    {
        type: 'p',
        text: 'Linguistically, "noice" is an example of a conscious alteration of pronunciation, often referred to as a slang hyperbole or an audibly marked exaggeration. The elongated and exaggerated vowel sound, often accompanied by a distinct upward inflection at the end, distinguishes the slang term from the more subdued standard use of "nice." It is an instance of phonological drift driven by humorous intent.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Cultural Catalysts in Media',
    },
    // Paragraph - Key Pop Culture Reference
    {
        type: 'p',
        text: 'The widespread adoption of "noice" can be primarily attributed to the Australian comedian and actor Chris Lilley. In his 2007 television series, Summer Heights High, Lilley played the character Jonah Takalua, a mischievous schoolboy. Though the specific utterance of "noice" was not central to that character, Lilley later introduced the term through promotional content and subsequent appearances in a distinct, elongated fashion that became an immediate viral catchphrase, particularly within Australian youth culture.',
    },
    // Paragraph - The Brooklyn Nine-Nine Factor
    {
        type: 'p',
        text: 'The term achieved a massive global audience boost through the American sitcom Brooklyn Nine-Nine, which debuted in 2013. The character of Detective Jake Peralta, played by Andy Samberg, frequently uses "noice" as a recurring verbal tic to express approval, often with a similar, drawn-out pronunciation. This exposure cemented "noice" in the lexicon of popular culture, making it a recognized, non-standard term across various English-speaking countries. This instance demonstrates how a distinct phonetic marker can be transmitted and normalized globally through highly popular media.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Usage and Sociolinguistics',
    },
    // Dynamic Table Block - Usage Analysis
    {
        type: 'table',
        data: {
            headers: ['Usage Context', 'Meaning', 'Frequency'],
            rows: [
                ['Simple Exclamation', 'Enthusiastic approval or satisfaction.', 'High'],
                ['Sarcastic Response', 'Ironic agreement or mock approval.', 'Moderate'],
                ['Internet Slang', 'A reply to an unexpected or satisfying outcome (often visual).', 'High'],
                ['Intensifier', 'Replacing "very nice" or "excellent."', 'Moderate']
            ]
        }
    },
    // Paragraph - Modern Context
    {
        type: 'p',
        text: 'In modern usage, "noice" is often employed in casual, informal settings, particularly in digital communication and online gaming communities. Its primary function is to signal a playful or celebratory mood, often acknowledging a minor but satisfying event. The intentional misspelling (or phonetic spelling) emphasizes the informal nature of the communication. The word’s success is rooted in its ability to inject a sudden, lighthearted burst of energy into conversation, something the traditional, less emphatic word "nice" often fails to do.',
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'The history of "noice" is a clear example of modern linguistic evolution, driven not by grammatical necessity, but by the power of comedic performance and mass media to introduce and normalize a phonetically distinct form into common, enthusiastic vernacular.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('history_of_noice.js', history_of_noice_content);
}