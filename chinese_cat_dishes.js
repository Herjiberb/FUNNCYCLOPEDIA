// 📄 chinese_cat_dishes.js

/**
 * Structured content for "Chinese Cat Dishes: History, Controversy, and Polarization" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const chinese_cat_dishes_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'CHINESE CAT DISHES: CULINARY HISTORY, CONTROVERSY, AND MODERN POLARIZATION',
        style: {
            color: '#8B0000', // Dark Red/Maroon for a serious, controversial topic
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
            textDecoration: 'underline'
        }
    },
    // Introduction Paragraph - Setting the tone and context
    {
        type: 'p',
        text: 'The consumption of cat meat, historically documented in specific regions of China, is a subject of intense modern debate and cultural polarization. While this practice is not widespread across the vast majority of the country and is legally ambiguous, it persists in certain areas, particularly parts of Southern China like Guangdong and Guangxi, often tied to traditional beliefs about its properties, such as being warming during the winter months. This custom stands in stark contrast to the growing domestic and international movement toward animal welfare and the establishment of cats as companion animals, creating a significant and often emotional schism between traditionalists and modern ethical activists.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'I. The Historical and Regional Roots of Consumption',
    },
    // Paragraph - Guangdong and Guangxi Focus
    {
        type: 'p',
        text: 'Historical records and anthropological studies suggest that the consumption of cat meat in China was primarily a matter of survival during periods of famine. Over time, in isolated culinary traditions, it evolved into an accepted practice in specific localities. The regions of Guangdong and Guangxi, in particular, became the centers of this custom. Guangdong cuisine, or Yue cuisine, is known for its wide use of protein sources, often described with the phrase "anything that flies, swims, or runs is food." Within this context, cat meat found its way into local specialty dishes, not as a primary staple, but as a winter delicacy or ingredient believed to possess specific medicinal qualities.',
    },
    // Paragraph - Specific Traditional Beliefs
    {
        type: 'p',
        text: 'The rationale for consuming cat meat, often referred to as "small tiger" (xiao hu) in local dialects, frequently revolves around traditional Chinese medicine. It is sometimes categorized as a "warming" food (yang) and believed to be beneficial for circulation and energy during cold weather. This traditional classification justifies its use in slow-cooked stews and casseroles, typically prepared with warming spices and other meats to mask or complement the strong flavor. This belief system forms a core defense for those who seek to preserve the custom, viewing it through a lens of deep-seated cultural heritage and traditional health practices.',
    },
    // Dropdown: A Deep Dive into a Classic Dish
    {
        type: 'dropdown',
        toggleText: 'The Classic Controversial Dish: Dragon and Tiger Fight',
        contentHTML: `
            <p>One of the most symbolically significant traditional Cantonese dishes involving cat meat is "Dragon and Tiger Fight" (Longhu Dou). This name is an elaborate culinary metaphor:</p>
            <ol>
                <li>The Dragon represents the snake, which is a key component of the dish.</li>
                <li>The Tiger represents the wild civet, or in modern and more controversial practice, the domestic cat.</li>
                <li>The dish is completed with other ingredients like chicken, fungi, and various medicinal herbs.</li>
            </ol>
            <p>Historically, the "tiger" component may have been a civet cat or another small feline, but the name became a euphemism for cat meat generally. The dish is a labor-intensive, rich stew consumed primarily in the cold months for its believed warming properties. The existence of this dish highlights how cat meat transitioned from a mere famine food to a recognized, albeit niche, element of regional high cuisine.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'II. Modern Polarization and the Ethical Clash',
    },
    // Paragraph - Internal Chinese Opposition
    {
        type: 'p',
        text: 'While the consumption of cat meat is often highlighted by external critics, the most intense polarization occurs within China itself. The burgeoning urban middle class, particularly the younger generations in major cities like Beijing, Shanghai, and Guangzhou, has embraced pet ownership and modern animal welfare standards. For this demographic, the traditional practice is seen as barbaric, outdated, and damaging to China’s international image. Local activists frequently organize high-profile rescues and traffic interceptions, confronting suppliers and demanding legislative action. This represents a clear culture clash between China’s rapid modernization and its lingering traditional practices.',
    },
    // Paragraph - Sourcing and Hygiene Concerns
    {
        type: 'p',
        text: 'A major concern fueling the polarization is the sourcing of the animals. Unlike livestock raised for consumption, cats are rarely farmed. Instead, they are often stolen house pets or stray cats captured by illegal syndicates. These animals are transported and slaughtered in unsanitary, unregulated conditions. This practice raises severe public health concerns, particularly regarding zoonotic diseases, and fuels outrage over the cruelty inherent in the illegal trade. Activists point out that the lack of regulation and the proven link to theft make the practice morally and legally untenable, even for those who might otherwise accept the consumption of non-traditional meats.',
    },
    // Table: Viewpoints on Cat Meat Consumption
    {
        type: 'table',
        data: {
            headers: ['Group', 'Primary Argument', 'Polarizing Stance'],
            rows: [
                ['Local Traditionalists', 'Preservation of regional culinary heritage and traditional medicine beliefs.', 'Dismisses modern animal welfare concerns as Western influence or urban elitism.'],
                ['Urban Animal Activists', 'Ethical treatment of companion animals; opposition to cruelty and pet theft.', 'Demands immediate, comprehensive national prohibition on all forms of the practice.'],
                ['International Opinion', 'Universal standards of animal rights; cultural shock and condemnation of the practice.', 'Often fails to distinguish the regional nature of the custom, painting the entire country with one brush.'],
                ['Government Regulators', 'Public health and food safety concerns, focusing on the illegal trade and sourcing.', 'Avoids direct intervention on "cultural" grounds, prioritizing enforcement of food safety over animal welfare.']
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'III. The Ambiguous Legal Status and Activism',
    },
    // Paragraph - Legal Vacuum
    {
        type: 'p',
        text: 'As of the present time, China does not have a comprehensive, national animal cruelty law that explicitly bans the consumption of cat or dog meat. However, there is no corresponding legal framework for the mass raising and slaughtering of cats for food. This legal vacuum means the trade operates largely in an unregulated grey area. Local governments have sometimes taken action. Notably, cities like Shenzhen and Zhuhai have introduced local legislation banning the consumption of cat and dog meat entirely, marking a significant, proactive step toward a more modern ethical framework that protects companion animals.',
    },
    // Paragraph - The Role of Social Media
    {
        type: 'p',
        text: 'The battle for public opinion is heavily waged on Chinese social media platforms. Activists utilize micro-blogging sites and media campaigns to expose the horrific conditions of the illegal trade, share stories of stolen pets, and pressure local authorities. These digital campaigns are highly effective at mobilizing public sentiment, especially among the younger demographic, thereby increasing the political cost of inaction for regulators. The polarization is thus often digitized, with debates over tradition versus ethics regularly trending online and creating deep divisions in public discourse.',
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'The topic of cat dishes in China represents a profound tension between cultural conservatism and globalized, modern ethical norms. The decline of the practice is evident, driven by urbanization, changing demographics, and effective grassroots activism. Yet, as long as the tradition persists in isolated pockets and a clear national legal framework is absent, the issue will continue to serve as a highly volatile flashpoint, defining the country’s ongoing struggle to reconcile its vast, diverse history with a rapidly evolving moral landscape.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('chinese_cat_dishes.js', chinese_cat_dishes_content);
}