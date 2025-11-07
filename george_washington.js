// 📄 george_washington.js

/**
 * Structured content for "George Washington" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const george_washington_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'GEORGE WASHINGTON: FOUNDING FATHER AND FIRST PRESIDENT OF THE UNITED STATES',
        style: {
            fontWeight: '700',
            color: '#990000', // A strong Colonial Red
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'George Washington (February 22, 1732 – December 14, 1799) was an American military officer, statesman, and Founding Father who served as the first President of the United States from 1789 to 1797. Prior to his presidency, he led the Continental Army to victory in the American Revolutionary War. His leadership was crucial in the establishment of the American Republic, not only through military command but also by presiding over the Constitutional Convention and setting vital precedents for the office of the Chief Executive.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Early Life, Military Service, and French and Indian War (1732–1758)',
    },
    // Paragraph - Early Life
    {
        type: 'p',
        text: 'Washington was born in Westmoreland County, Virginia, into the planter class family of Augustine and Mary Ball Washington. While his formal schooling ended around age 15, he excelled in mathematics and became a highly skilled surveyor. His family’s connections and wealth allowed him to enter the Virginia aristocracy. His early professional life was dominated by land speculation and military service. In 1752, at the age of 20, he inherited the Mount Vernon estate from his half-brother, Lawrence Washington.',
    },
    // Dropdown: Early Military Failures and Successes
    {
        type: 'dropdown',
        toggleText: 'Detailed Analysis of Washington’s Role in the French and Indian War',
        contentHTML: `
            <p>Washington's military career began with a mixed record during the French and Indian War (1754–1763), which demonstrated both his inexperience and his emerging resilience:</p>
            <ol>
                <li><strong>Jumonville Glen Incident (1754):</strong> As a Lieutenant Colonel in the Virginia militia, Washington led a surprise attack against a French party. The subsequent murder of a French envoy under suspicious circumstances helped trigger the wider war.</li>
                <li><strong>Fort Necessity (1754):</strong> A subsequent campaign led to the surrender of Fort Necessity to the French. Washington signed a document, written in French, that contained an admission of guilt for the "assassination" at Jumonville Glen, an act that was highly embarrassing when revealed.</li>
                <li><strong>Braddock's Defeat (1755):</strong> Washington served as an aide-de-camp to British General Edward Braddock. While Braddock's force was routed and Braddock was killed near Fort Duquesne, Washington demonstrated great personal bravery and organized the successful retreat of the surviving forces, earning him recognition for his courage under fire.</li>
            </ol>
            <p>He resigned his commission in 1758 and returned to Mount Vernon, determined to dedicate himself to his estate and political life as a Virginia gentleman.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Planter, Politician, and Revolutionary Commander (1759–1783)',
    },
    // Paragraph - Civilian Life
    {
        type: 'p',
        text: 'In 1759, Washington married Martha Dandridge Custis, a wealthy widow with two children. He never had biological children of his own, but he raised Martha’s children and later her grandchildren. His marriage greatly increased his wealth and social standing, allowing him to expand Mount Vernon into a massive, diversified plantation. He served for many years in the Virginia House of Burgesses and became increasingly vocal in his opposition to British taxation policies, such as the Stamp Act and the Townshend Acts, viewing them as violations of colonial rights.',
    },
    // Table: Key Military Decisions of the Revolutionary War
    {
        type: 'table',
        data: {
            headers: ['Date', 'Event', 'Significance'],
            rows: [
                ['June 15, 1775', 'Appointed Commander-in-Chief', 'Chosen by the Second Continental Congress to lead the newly formed Continental Army.'],
                ['December 26, 1776', 'Battle of Trenton', 'Crossed the Delaware River; decisive victory restored morale after a string of defeats.'],
                ['Winter 1777–1778', 'Valley Forge Encampment', 'Surviving the brutal winter transformed the army into a cohesive, disciplined fighting force.'],
                ['September 1781', 'Siege of Yorktown', 'Combined American and French forces trap the main British army; final major battle of the war.'],
                ['December 23, 1783', 'Resignation of Commission', 'Voluntarily relinquished military power to Congress, establishing a crucial civilian-military precedent.'],
            ]
        }
    },
    // Paragraph - Commander-in-Chief
    {
        type: 'p',
        text: 'In June 1775, the Second Continental Congress unanimously appointed Washington as Commander-in-Chief of the Continental Army. Despite numerous battlefield losses, Washington’s greatest skill was keeping the often poorly supplied, underpaid, and undermanned army intact. His strategic genius lay less in winning every battle and more in avoiding fatal engagements, utilizing Fabian tactics (protracted warfare and attrition), and constantly harassing the larger British forces. His leadership transformed a collection of militia units into a professional army that could challenge the British Empire.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Constitutional Convention and The New Republic (1787–1797)',
    },
    // Paragraph - Constitutional Convention
    {
        type: 'p',
        text: 'Following the war, Washington retired to Mount Vernon, but he grew increasingly concerned about the weakness of the central government under the Articles of Confederation. In 1787, he reluctantly agreed to serve as a delegate from Virginia and was unanimously elected to preside over the Constitutional Convention in Philadelphia. His presence lent immense legitimacy to the proceedings and ensured the public accepted the radical new framework of the Constitution, which created a strong federal government.',
    },
    // Paragraph - Presidency
    {
        type: 'p',
        text: 'In 1789, George Washington was unanimously elected as the first President of the United States by the Electoral College. He remains the only president to achieve this feat. His primary challenge was to transform the constitutional text into a functioning government. During his two terms, he established critical precedents, including the formation of a cabinet of advisors, the protocol of executive-legislative relations, and the tradition of two-term limit (which was upheld until Franklin D. Roosevelt and later codified by the 22nd Amendment).',
    },
    // Dropdown: Key Presidential Precedents
    {
        type: 'dropdown',
        toggleText: 'Detailed Examination of Critical Presidential Precedents',
        contentHTML: `
            <p>Washington’s actions defined the power and character of the executive branch:</p>
            <ol>
                <li><strong>Creation of the Cabinet:</strong> He established the practice of meeting regularly with his principal department heads—Thomas Jefferson (State), Alexander Hamilton (Treasury), and Henry Knox (War)—to obtain counsel. This advisory body was not constitutionally mandated.</li>
                <li><strong>Neutrality Proclamation (1793):</strong> He unilaterally declared the U.S. neutral in the conflict between Great Britain and Revolutionary France. This action defined the nation’s early foreign policy as non-interventionist and asserted the President’s authority over foreign affairs.</li>
                <li><strong>Whiskey Rebellion (1794):</strong> Washington led 13,000 troops into western Pennsylvania to suppress an armed uprising against a federal excise tax. This was the first test of federal authority under the new Constitution and established the principle that the federal government could enforce its own laws within the states.</li>
                <li><strong>The Two-Term Tradition:</strong> His decision to voluntarily step down after two terms in 1797 established a vital precedent for the peaceful transfer of power, reinforcing the principle that the President was a servant of the people, not a monarch.</li>
            </ol>
            <p>His Farewell Address, published in a Philadelphia newspaper in 1796, cautioned against excessive partisanship and permanent foreign alliances, advising a policy of commercial but not political connections with other nations.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Later Life, Death, and Complex Legacy',
    },
    // Paragraph - Retirement and Death
    {
        type: 'p',
        text: 'After leaving office in 1797, Washington returned to Mount Vernon, intending to resume his life as a private citizen. He spent his final years focusing on his plantation, though he was briefly called upon by President John Adams to command a provisional army during the quasi-war with France. George Washington died suddenly on December 14, 1799, at Mount Vernon, due to a throat infection, likely epiglottitis, which was exacerbated by repeated, aggressive bloodletting by his physicians.',
    },
    // Paragraph - Slavery and Contradictions
    {
        type: 'p',
        text: 'Washington’s legacy is complicated by his lifelong ownership of enslaved people. At the time of his death, 317 enslaved people were held at Mount Vernon. While he held racist views common to the period and relied on chattel slavery for his wealth, he grew increasingly uncomfortable with the institution. Uniquely among the Founding Fathers who owned slaves, his final will stipulated that all the enslaved people he directly owned were to be freed after the death of his wife, Martha. He also provided for the education and training of the younger freed individuals, a decision that remains a complex ethical and historical point of discussion.',
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'Washington’s stature as the "Father of His Country" is secured by his singular contributions as both a general who won the war and a president who defined the peace, making him the essential figure of the American founding.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('george_washington.js', george_washington_content);
}