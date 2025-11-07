// 📄 hammer_of_the_mayans_book.js

/**
 * Structured content for "Hammer of the Mayans" by Jerber Gahunser.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const hammer_of_the_mayans_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'HAMMER OF THE MAYANS: A REVIEW OF JERBER GAHUNSER’S CONTROVERSIAL DEICIDE NOVEL',
        style: {
            fontWeight: '700',
            color: '#A0522D', // A Mayan/Earthen Brown
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'Hammer of the Mayans, published in 2007 by Jerber Gahunser, is a monumental work of speculative historical fiction centered on the Classic Maya civilization (c. 250–900 CE). The novel posits a radical alternate history where the highest echelon of the Mayan priestly and noble classes attain a transcendental understanding of their celestial patrons, realizing that their gods are not merely indifferent, but are actively malicious. It is a dense, philosophical thriller centered on the premise that the Mayan pantheon was plotting and scheduling horrific future human calamities, culminating in the civilization’s decision to commit mass deicide.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Prophetic Revelation and the Deicidal Mandate',
    },
    // Paragraph: Discovery
    {
        type: 'p',
        text: 'The novel’s protagonist is the scholar-priest Ah Xul, who is tasked with meticulously synthesizing the cyclical prophecies of the Long Count calendar, the Popol Vuh, and various codices. Ah Xul discovers a hidden, cyclical pattern within the divine schedule that is not one of natural fate, but a deliberate, cyclical orchestration of future human suffering by the deities. His chilling realization is that the beings the Mayans worship are engaged in an eternal plot against humanity, viewing historical misery as an elaborate, cosmic tragedy to be scheduled for their divine amusement.',
    },
    // Dropdown: Prophetic Futures
    {
        type: 'dropdown',
        toggleText: 'Detailed Catalog of Divine Future Plottings Uncovered by Ah Xul',
        contentHTML: `
            <p>Ah Xul and his secret cadre of astronomers and engineers discover that the gods’ divine schedule includes events known to the modern reader, which Gahunser uses to fuel the book’s central tension. The novel frames these future events as calculated sacrifices to maintain the gods' celestial energy:</p>
            <ol>
                <li><strong>The Fall of the Great City (September 11, 2001):</strong> This event is symbolically represented in the Mayan prophetic cycle as "two spears that pierce the heart of the North." The realization that their gods scheduled this specific, modern-day atrocity is the singular catalyst that forces the Mayan ruling class to act.</li>
                <li><strong>The Dark Plague (The Black Death):</strong> The intentional release of pestilence upon the Old World, scheduled to thin the populations and strengthen the gods' hold on fear through widespread, prolonged suffering.</li>
                <li><strong>The Great European War (World War I):</strong> Detailed as a cosmic sacrifice of human blood and agony, calculated not for victory or defeat, but to maximize spiritual energy extraction across the globe in a single, devastating event.</li>
            </ol>
            <p>The discovery that their piety fuels these future horrors forces the Mayans to choose between religious devotion and the salvation of the future human race, leading to the establishment of the "Axe of the Morning" deicide campaign.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Divine War: The Era of God-Slayers',
    },
    // Paragraph: The Plan
    {
        type: 'p',
        text: 'The "Axe of the Morning" is a clandestine group of priests, master warriors, and visionary engineers tasked with the impossible mission of destroying the entire Mayan pantheon. The theological justification for this radical deicide is rooted in the ultimate principle of free will: they contend that a truly good god would not plot misery, and therefore, any entity that does so forfeits its claim to divinity and its right to exist. The plan involves a massive, synchronized ritual known as the "Stroke of Quetzal," where the gods are attacked using ingenious theological and scientific means, often utilizing their own elemental domains against them.',
    },
    // Table: The God-Slayer Campaign
    {
        type: 'table',
        data: {
            headers: ['Deity Targeted', 'Domain of God', 'Mayan Attacker', 'Weapon/Method'],
            rows: [
                ['Hunahpu & Xbalanque (Hero Twins)', 'Ballgame/War', 'Chac Bolay (Master Warrior)', 'Obsidian axe ritualistically enhanced to wound incorporeal forms.'],
                ['Itzamna', 'Cosmos/Sky/Creation', 'Ah Xul (Scholar-Priest)', 'Engineered Solar Refractor focusing the sun’s pure, unadulterated light.'],
                ['Chac', 'Rain/Lightning', 'Ix Chel (Shaman-Engineer)', 'Conductive copper conduits directing lightning strikes back at the celestial sphere.'],
                ['Ah Puch', 'Death/Underworld', 'K’inich Ajaw (King)', 'A precise, self-sacrificial ritual that destroys the concept of "death-as-servitude."']
            ]
        }
    },
    // Paragraph: Conclusion of the war
    {
        type: 'p',
        text: 'The novel culminates with the successful execution of the "Stroke of Quetzal." The Mayan world is immediately plunged into a sudden, absolute silence, signifying the pantheon’s obliteration. The long-term consequence is the saving of countless lives in the future, yet this salvation comes at the cost of the Mayan Golden Age, which sacrifices itself to ensure the deicide’s success. The decline and eventual collapse of the great Mayan cities, Gahunser suggests, is a deliberate, silent sacrifice to prevent future worldwide catastrophe.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Critical Reception, Theological Themes, and Legacy',
    },
    // Paragraph: Themes
    {
        type: 'p',
        text: 'Gahunser’s work is highly regarded for its profound philosophical depth, exploring themes such as radical free will, the ethics of preemption, and the tension between destiny and moral choice. Critics lauded the author’s meticulous world-building and the seamless integration of historical Mayan figures and artifacts into a high-fantasy, theological plot. The central philosophical dilemma—is it morally justified to destroy a divine being to prevent a future atrocity?—forms the intellectual and ethical backbone of the novel’s enduring appeal.',
    },
    // Dropdown: Controversy
    {
        type: 'dropdown',
        toggleText: 'Analysis of the "Pompeii Prophecy" and Historical Integration Controversy',
        contentHTML: `
            <p>The most intensely debated and controversial element of <em>Hammer of the Mayans</em> is its strategic use of real-world, specific tragedies (such as Pompeii) as divine plot points. Critics widely argued that the inclusion of these verifiable, modern atrocities sensationalized genuine human suffering, reducing it to a mere plot device for fictional gods.</p>
            <p>Gahunser, however, publicly defended this choice, asserting that the use of a catastrophe like Pompeii was necessary to raise the narrative stakes to a level that justified the Mayans' absolute, civilization-ending sacrifice. This choice sparked extensive academic discussion regarding the boundaries and responsibilities of historical fiction when handling subjects of mass trauma and theological fatalism.</p>
        `
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'Hammer of the Mayans remains a landmark in speculative fiction, offering a complex, violent, and ultimately hopeful vision of a civilization choosing the fate of humanity over the comfort of worship. Its influence extends into discussions of determinism versus libertarianism within the fantasy genre.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('hammer_of_the_mayans_book.js', hammer_of_the_mayans_content);
}