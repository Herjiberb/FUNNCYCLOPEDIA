// 📄 abraham_lincoln.js

/**
 * Structured content for "Abraham Lincoln" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const abraham_lincoln_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'ABRAHAM LINCOLN: THE 16TH PRESIDENT OF THE UNITED STATES',
        style: {
            fontWeight: '700',
            color: '#003366', // Union Blue
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'Abraham Lincoln (February 12, 1809 – April 15, 1865) served as the 16th President of the United States from March 1861 until his assassination in April 1865. He is widely regarded as one of the most consequential figures in American history, having successfully led the nation through its greatest internal crisis, the American Civil War. In doing so, he preserved the Union, strengthened the federal government, and issued the Emancipation Proclamation, which set the stage for the permanent abolition of slavery in the United States.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Early Life and Formative Years (1809–1830)',
    },
    // Paragraph - Early Life
    {
        type: 'p',
        text: 'Lincoln was born into poverty on February 12, 1809, in a one-room log cabin on Sinking Spring Farm near Hodgenville, Kentucky. His parents, Thomas Lincoln and Nancy Hanks Lincoln, were uneducated farmers. When Abraham was seven, the family moved to southern Indiana, a free state, establishing a homestead in the wilderness. His formal education was negligible, consisting of only about 18 months of schooling obtained sporadically from itinerant teachers. He was largely self-educated, dedicating himself to reading all available books, including the Bible, Aesop’s Fables, and the works of William Shakespeare. The death of his mother in 1818, followed by his father’s marriage to Sarah Bush Johnston a year later, significantly impacted his early development. Sarah encouraged his reading and intellectual pursuits. In 1830, the family relocated again to Illinois.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Legal Career and Entry into Politics (1831–1854)',
    },
    // Paragraph - Illinois and Law
    {
        type: 'p',
        text: 'Lincoln settled in New Salem, Illinois, where he worked as a store clerk, postmaster, and general handyman. He served briefly as a captain in the Illinois militia during the Black Hawk War in 1832, though he saw no combat. Following this, he mounted an unsuccessful campaign for the Illinois General Assembly. He studied law independently, borrowing books and statutes from local lawyers. In 1836, he obtained his law license and moved to Springfield, the state capital, to begin practicing. He quickly gained a reputation as an astute, honest, and capable lawyer, known for his storytelling and clear logic. His law practice with William Herndon, established in 1844, became one of the most successful firms in Illinois. Lincoln served four consecutive terms in the Illinois House of Representatives as a Whig, starting in 1834. He then served one term in the U.S. House of Representatives from 1847 to 1849, where he notably opposed the Mexican-American War.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Rise to National Prominence and the Slavery Crisis (1854–1860)',
    },
    // Paragraph - Political Re-entry
    {
        type: 'p',
        text: 'The passage of the Kansas-Nebraska Act in 1854, which threatened to expand slavery into new territories through the doctrine of popular sovereignty, shocked Lincoln and spurred his return to national politics. His opposition to the expansion of slavery was firm, based on the principle that while the Constitution protected slavery where it already existed, it should not be allowed to spread. He became a leading voice in the newly formed Republican Party, which was committed to preventing the expansion of slavery. His intellectual clash with Senator Stephen Douglas over the issue defined the era.',
    },
    // Dropdown: The Lincoln-Douglas Debates
    {
        type: 'dropdown',
        toggleText: 'Detailed Analysis of the 1858 Lincoln-Douglas Debates',
        contentHTML: `
            <p>The 1858 debates were held during Lincoln's unsuccessful challenge to Stephen Douglas for a seat in the U.S. Senate. The debates, held across seven different districts in Illinois, centered on the issue of slavery.</p>
            <ol>
                <li><strong>Douglas’s Position:</strong> Douglas championed popular sovereignty, arguing that residents of a territory should be allowed to vote on whether to permit slavery, irrespective of the Supreme Court’s Dred Scott Decision.</li>
                <li><strong>Lincoln’s Position:</strong> Lincoln argued that slavery was morally wrong and insisted that the federal government had the authority to prevent its expansion into the territories. He warned that Douglas’s popular sovereignty doctrine was incompatible with the Dred Scott ruling, which stated that Congress could not prohibit slavery in a territory. This challenge, known as the Freeport Doctrine, forced Douglas to take a position that alienated Southern Democrats.</li>
                <li><strong>Outcome:</strong> Although Lincoln lost the Senate election, the debates received national attention, transforming him into a prominent political figure and setting the stage for his presidential bid two years later.</li>
            </ol>
            <p>Lincoln’s powerful Cooper Union Address in New York in February 1860 further solidified his image as a thoughtful, articulate, and moderate voice against slavery's expansion, paving his way for the Republican nomination.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Presidency and Secession (1860–1861)',
    },
    // Paragraph - Election and Crisis
    {
        type: 'p',
        text: 'In the fragmented election of 1860, Lincoln won the presidency by securing a plurality of the popular vote and a majority of the electoral votes, despite not winning a single Southern state. His victory, based entirely on Northern support, was viewed by many Southern states as the final threat to their institution of slavery. South Carolina seceded in December 1860, before Lincoln even took office. By the time of his inauguration in March 1861, six other states had followed, forming the Confederate States of America. In his First Inaugural Address, Lincoln declared that secession was legally void, asserting that the Union was perpetual. The conflict formally began on April 12, 1861, when Confederate forces fired on Fort Sumter in Charleston Harbor, South Carolina.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Wartime Leadership and Executive Actions (1861–1865)',
    },
    // Paragraph - War Leadership
    {
        type: 'p',
        text: 'Lincoln demonstrated unparalleled leadership during the Civil War. His initial goal was strictly the preservation of the Union, which required him to balance the demands of radical abolitionists and moderate Republicans with the necessity of keeping the border slave states (Delaware, Maryland, Kentucky, and Missouri) loyal to the Union. He exercised broad executive powers, including the expansion of the army and the suspension of the writ of habeas corpus in certain areas to detain suspected Confederate sympathizers. His political genius lay in his ability to articulate the moral and constitutional purpose of the war to the public while continuously searching for effective military leadership.',
    },
    // Table: Key Events of the Civil War
    {
        type: 'table',
        data: {
            headers: ['Date', 'Event', 'Significance'],
            rows: [
                ['April 12, 1861', 'Attack on Fort Sumter', 'Formal start of the American Civil War.'],
                ['September 17, 1862', 'Battle of Antietam', 'The single bloodiest day in U.S. military history; Union victory provided cover for the Emancipation Proclamation.'],
                ['January 1, 1863', 'Emancipation Proclamation Takes Effect', 'Declared all enslaved people in Confederate-held territory free.'],
                ['July 1–3, 1863', 'Battle of Gettysburg', 'Decisive Union victory, marking the turning point of the war in the Eastern Theater.'],
                ['November 19, 1863', 'Gettysburg Address', 'Re-articulated the war’s purpose as a struggle for human equality and government of the people.'],
                ['September 2, 1864', 'Fall of Atlanta', 'Secured Lincoln’s re-election by demonstrating definitive military progress.'],
                ['April 9, 1865', 'Appomattox Courthouse Surrender', 'General Robert E. Lee surrenders to General Ulysses S. Grant, effectively ending the war.'],
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Emancipation and Defining Legislation',
    },
    // Paragraph - Emancipation Overview
    {
        type: 'p',
        text: 'As the war progressed, Lincoln’s goals evolved. He came to see that the destruction of slavery was essential to preserving the Union. His ultimate move against the institution was the Emancipation Proclamation.',
    },
    // Dropdown: The Emancipation Proclamation
    {
        type: 'dropdown',
        toggleText: 'Detailed Analysis of the Emancipation Proclamation (1863)',
        contentHTML: `
            <p>Issued by Lincoln on September 22, 1862, and taking effect on January 1, 1863, the Proclamation was a pivotal executive order with both moral and military objectives.</p>
            <ol>
                <li><strong>Legal Scope:</strong> It freed only the enslaved people in the states that were in rebellion against the Union. It specifically did not apply to the border states that remained loyal to the Union or to Confederate territories already under Union control.</li>
                <li><strong>Strategic Purpose:</strong> The Proclamation immediately changed the nature of the war from one about simply preserving the Union to one that included the abolition of slavery. It encouraged enslaved people to escape and join the Union cause, authorized the enlistment of African American soldiers, and deterred European powers (specifically Britain and France) from officially intervening on the side of the Confederacy.</li>
                <li><strong>Constitutional Basis:</strong> Lincoln issued the order under his authority as Commander-in-Chief, defining it as a military necessity to suppress the rebellion. This avoided immediate constitutional challenges but necessitated a constitutional amendment to permanently end slavery nationwide.</li>
            </ol>
            <p>The Proclamation was followed by Lincoln's intense effort to pass the 13th Amendment, which finally abolished slavery throughout the entire United States in December 1865, after his death.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Second Term, Assassination, and Enduring Legacy',
    },
    // Paragraph - Second Inaugural
    {
        type: 'p',
        text: 'Lincoln won re-election in 1864 against Democrat George B. McClellan. His Second Inaugural Address, delivered in March 1865, is considered one of his greatest speeches, remarkable for its tone of reconciliation and lack of triumphalism. He called for a generous peace, famously urging the nation to act "with malice toward none, with charity for all."',
    },
    // Paragraph - Assassination
    {
        type: 'p',
        text: 'The Civil War officially ended with Lee’s surrender on April 9, 1865. Just five days later, on April 14, 1865, Lincoln was shot by Confederate sympathizer John Wilkes Booth while attending a play at Ford’s Theatre in Washington, D.C. He died the following morning, becoming the first American president to be assassinated. His death plunged the Union into immediate grief and complicated the process of Reconstruction, which he had intended to be swift and lenient.',
    },
    // Paragraph - Legacy
    {
        type: 'p',
        text: 'Abraham Lincoln’s legacy is defined by his unwavering commitment to the proposition of equality and his success in preserving the American republic. He is consistently ranked by historians as one of the three greatest U.S. presidents (alongside George Washington and Franklin D. Roosevelt). His political philosophy, shaped by ideals of democracy, union, and human freedom, continues to influence American civic discourse.',
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'Lincoln’s life—from humble frontier origins to the presidency—remains a powerful symbol of the American ideal of opportunity and moral leadership during times of profound national crisis.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('abraham_lincoln.js', abraham_lincoln_content);
}