// 📄 history_rubber_chicken.js

/**
 * Structured content for "History of the Rubber Chicken" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const history_rubber_chicken_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'THE SQUEAKING ORIGINS OF SLAPSTICK POULTRY',
        style: {
            fontWeight: '700',
            color: '#FF9900', // A vibrant, fun color
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'The rubber chicken is a ubiquitous prop in slapstick comedy, vaudeville, and clowning, universally recognized as a symbol of absurdity and humor. It is a modern invention, yet its role as a comedic tool has deep roots stretching back to ancient theatrical traditions. Its history is a fascinating journey from practical stage props to mass-produced novelty item.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Precursors in Ancient Theatre',
    },
    // Paragraph - Ancient Roots
    {
        type: 'p',
        text: 'While the rubber chicken itself is a product of modern manufacturing, the concept of using poultry as a comedic prop is centuries old. In Ancient Greek and Roman theatre, particularly in farces and satirical plays, realistic props were often used to generate shock or laughter. Historical accounts and analyses of theatrical traditions suggest that performers would occasionally use actual, flayed animal carcasses, including dead chickens, to represent poverty, mock a character, or simply to add a grotesque element to a comedic scene. This use established the fowl as a tool of physical, often dark, comedy.',
    },
    // Paragraph - The Medieval Shift
    {
        type: 'p',
        text: 'This tradition continued through the Commedia dell’arte period in Italy, where clowns and harlequins relied heavily on physical gags. The shift from using real, perishable animal parts to a reusable, resilient substitute began with the rise of durable, flexible materials.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Advent of Rubber Manufacturing',
    },
    // Paragraph - Vulcanization
    {
        type: 'p',
        text: 'The true creation of the rubber chicken was contingent upon the development of vulcanized rubber in the mid-19th century. Charles Goodyear’s process for treating natural rubber made it durable, temperature-stable, and suitable for molding into complex, repeatable shapes. This technological leap enabled manufacturers to create hollow, flexible toys and novelty items that could withstand the rigors of stage performance and rough handling, which a delicate balloon or cloth prop could not. Early rubber chickens were often cast from molds used for realistic poultry dummies or game-bird decoys, which contributed to their distinctive, somewhat unsettling realism.',
    },
    // Dropdown Menu Block - The Stage Breakthrough
    {
        type: 'dropdown',
        toggleText: 'Click to reveal its rise in Vaudeville and Clown Culture',
        contentHTML: `
            <p>The rubber chicken cemented its place in popular culture with the rise of Vaudeville and the Music Hall traditions of the late 19th and early 20th centuries. Performers needed props that were:</p>
            <ol>
                <li><strong>Visible:</strong> Large enough to be seen from the back rows of large theaters.</li>
                <li><strong>Durable:</strong> Able to be repeatedly tossed, pulled, or hit without falling apart.</li>
                <li><strong>Absurd:</strong> A non-sequitur prop that instantly signaled physical or situational comedy.</li>
            </ol>
            <p>Clowns, particularly in the circus, adopted the rubber chicken as a standard gag item, often using it as a mock weapon, a surprising appearance from a pocket, or a substitute for a common household object. The iconic squeaker was added later in the 20th century to enhance the comedic effect of the impact or squeeze.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Cultural Mainstreaming and Modern Use',
    },
    // Paragraph - Popular Culture
    {
        type: 'p',
        text: 'The rubber chicken became a staple in cinema and television following World War II. It was heavily popularized by comedic acts in the 1960s and 1970s. British comedy troupes, most notably Monty Python’s Flying Circus, utilized the prop extensively to parody the very notion of predictable comedic props. Its appearance often signaled a break in narrative reality or an escalation into pure, glorious silliness. Today, the rubber chicken is often associated with chefs or musicians, as a gag item for a poor performance, or used ironically as a placeholder for any generic joke prop.',
    },
    // Dynamic Table Block - Key Rubber Chicken Facts
    {
        type: 'table',
        data: {
            headers: ['Fact Category', 'Detail', 'Context'],
            rows: [
                ['Primary Material', 'Natural or Synthetic Vulcanized Rubber (Latex or Vinyl).', 'Chosen for flexibility, durability, and low cost of mass production.'],
                ['Estimated Invention Date', 'Late 19th to early 20th Century (in its current form).', 'Followed the widespread adoption of rubber vulcanization.'],
                ['The Squeak', 'Produced by a small air bellows or whistle inside the hollow body.', 'The characteristic sound exaggerates the physical force of the prop.'],
                ['The Nickname', 'Often called a \'gong\' by circus performers.', 'Used as a mock replacement for the \'gong\' that signaled a bad act in early variety shows.']
            ]
        }
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'From its ancient, slightly gruesome roots as a realistic stage prop to its modern status as a timeless symbol of lighthearted chaos, the rubber chicken remains an enduring fixture of global physical comedy. It transcends language barriers and continues to serve as an instant, universally understood signal for fun and absurdity.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('history_rubber_chicken.js', history_rubber_chicken_content);
}