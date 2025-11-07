// 📄 muskrat_animal.js

/**
 * Structured content for "Muskrat (Animal)" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const muskrat_animal_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'ONDATRA ZIBETHICUS: THE AMPHIBIOUS RODENT OF WETLANDS',
        style: {
            fontWeight: '700',
            color: '#006633',
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
            // No textShadow or other highlighting
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'The Muskrat (Ondatra zibethicus) is a medium-sized, semi-aquatic rodent native to North America. It is the sole extant species in the genus Ondatra and is a member of the family Cricetidae, making it a relative of voles and lemmings, not true rats. The muskrat is highly valued as an ecosystem engineer due to its feeding and construction behaviors, which significantly alter and maintain the structure of wetland environments across its geographic range.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Taxonomy and Systematics',
    },
    // Paragraph - Taxonomy Details
    {
        type: 'p',
        text: 'The muskrat is classified within the subfamily Arvicolinae. The genus name Ondatra is derived from the Wyandot Native American word for the animal. Its species name, zibethicus, is a Latin term referring to musk, an allusion to the scent glands used for territorial marking. Currently, 15 subspecies of Ondatra zibethicus are recognized, with variations primarily noted in size, pelage color, and geographic distribution, such as O. z. macrodon found in the tidal marshes of the Atlantic coast, which is typically larger than inland subspecies.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Physical Description and Key Adaptations',
    },
    // Paragraph - Physical Overview
    {
        type: 'p',
        text: 'An adult muskrat measures between 40 to 60 centimeters (16 to 24 inches) in total length, approximately half of which is its tail. They generally weigh between 0.6 and 2 kilograms (1.3 to 4.4 lb), with peak weights often recorded in late fall preceding the winter months. Their body is compact and streamlined, an adaptation for efficient movement through water. Their fur is highly specialized, consisting of a short, dense undercoat that provides exceptional waterproofing and insulation, protected by longer, glossy guard hairs.',
    },
    // Dynamic Table Block - Aquatic Adaptations
    {
        type: 'table',
        data: {
            headers: ['Anatomical Feature', 'Morphology', 'Functional Role'],
            rows: [
                ['Tail Structure', 'Laterally compressed (vertically flattened) and scaled.', 'Acts as a primary rudder for steering and navigation in water.'],
                ['Pelage', 'Dense, two-layered coat that traps air.', 'Provides buoyancy and complete insulation against cold water.'],
                ['Hind Feet', 'Large, partially webbed with stiff fringes of hair.', 'Maximizes surface area for propulsion during swimming.'],
                ['Mouth Structure', 'Lips can seal behind their specialized incisor teeth.', 'Allows them to chew and forage on vegetation while submerged without inhaling water.'],
                ['Oxygen Capacity', 'Elevated levels of myoglobin in muscles.', 'Facilitates efficient oxygen storage, enabling dive times of 12 to 17 minutes.'],
                ['Scent Glands', 'Paired preputial glands near the tail base.', 'Produces a musky odor for territorial and mating communication.']
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Distribution, Habitat Preference, and Diet',
    },
    // Paragraph - Distribution and Habitat
    {
        type: 'p',
        text: 'The muskrat’s native distribution spans the entirety of North America, excluding the southern extremes of the Southwest and the highest Arctic latitudes. They are highly adaptable and occupy virtually any body of water, including freshwater marshes, brackish tidal areas, lakes, rivers, drainage ditches, and irrigation canals. Key habitat requirements include stable water levels and an abundance of emergent vegetation. Following intentional introduction in the early 20th century, muskrats have established successful feral populations across much of Eurasia, including parts of Finland, Russia, and Central Europe, where they are sometimes considered an invasive species.',
    },
    // Paragraph - Diet and Omnivory
    {
        type: 'p',
        text: 'The muskrat is primarily herbivorous, with aquatic plants forming the overwhelming majority of its diet, typically over 90 percent. Preferred food sources include the roots, rhizomes, stems, and leaves of common wetland species such as cattails (Typha species), bulrushes (Schoenoplectus species), and various water lilies. They often swim to the bottom to retrieve rhizomes. Despite their preference for plants, they are correctly classified as opportunistic omnivores. During periods of limited vegetation availability, particularly in winter or high-density colonies, they will actively consume animal matter. This secondary diet includes freshwater bivalves (mussels and clams, often evidenced by shell middens near their dens), crayfish, frogs, small fish, turtles, and occasional scavenged carrion.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Behavior, Social Organization, and Activity Patterns',
    },
    // Paragraph - Social Structure
    {
        type: 'p',
        text: 'Muskrats are generally social animals, living in family units centered around a monogamous breeding pair and their offspring. These family groups occupy a fixed territory along the shoreline or marsh. Territory size is highly dependent on resource abundance, but it is vigorously marked and defended using scent glands. Aggressive territorial disputes can occur, especially among unrelated males during the breeding season, often involving physical confrontation. The musky scent, which gives the animal its name, is used to delineate boundaries and communicate reproductive status.',
    },
    // Paragraph - Activity and Foraging
    {
        type: 'p',
        text: 'Muskrats are primarily crepuscular, meaning they are most active during the twilight hours of dawn and dusk. However, they are often seen foraging throughout the day, especially in areas with low human disturbance or overcast weather. They are slow and vulnerable on land, which encourages them to stay near water bodies, their primary refuge from terrestrial predators. They create and maintain distinct travel routes and channels within the vegetation and often build specialized feeding platforms—small, temporary rafts of vegetation—to consume their food safely out of the water.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Lodge Construction and Ecological Impact',
    },
    // Dropdown Menu Block - The Muskrat Home
    {
        type: 'dropdown',
        toggleText: 'Click for Details on Muskrat Architecture and Its Impact',
        contentHTML: `
            <p>The muskrat is a major environmental modifier through its construction of shelters:</p>
            <ol>
                <li><strong>Bank Burrows:</strong> In areas with stable earthen banks (rivers, canals, ponds, road embankments), muskrats dig extensive tunnel systems. The entrances are always located submerged, protecting the occupants from land predators. The tunnels ascend to a dry nesting chamber lined with soft plant material.</li>
                <li><strong>Lodges (Houses):</strong> In open, shallow marshes where stable banks are unavailable, muskrats construct large, conical mounds from reeds, cattails, and mud. These lodges can be over 1 meter (3 feet) tall, rising above the water line to house a dry living and nesting chamber. A submerged 'plunge hole' provides entry and exit.</li>
            </ol>
            <p>Ecologically, muskrat feeding can create 'eat-outs'—patches of open water cleared of dense vegetation—which benefit many other species of waterfowl and fish by increasing habitat diversity. Economically, however, their burrowing activity can cause significant damage to human infrastructure, including irrigation levees, ditches, and flood control structures, requiring mitigation efforts.</p>
        `
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Reproduction and Population Resilience',
    },
    // Paragraph - Reproduction Overview
    {
        type: 'p',
        text: 'The muskrat is noted for its high reproductive capacity, a necessary biological trait to offset intense predation and environmental volatility. Females are polyestrous and can produce multiple litters per year. The breeding season typically runs from early spring through late summer. The rapid reproductive cycle ensures the species can quickly rebound from local population crashes caused by flooding, drought, or disease.',
    },
    // Dynamic Table Block - Reproductive Output
    {
        type: 'table',
        data: {
            headers: ['Reproductive Metric', 'Rate/Detail', 'Demographic Note'],
            rows: [
                ['Gestation Period', 'Approximately 28 to 30 days.', 'A very short period allowing for consecutive litters.'],
                ['Annual Litters', '2 to 5 litters per year.', 'Highest frequency (up to 5) occurs in warmer climates with year-round food supply.'],
                ['Litter Size', 'Average 6 to 8 young (kits).', 'Litter size is variable, ranging from 1 to 11 kits.'],
                ['Kits at Birth', 'Born altricial: blind, hairless, and completely dependent.', 'Develop rapidly and are weaned and independent within 3 to 4 weeks.'],
                ['Sexual Maturity', 'Reached at 6 months to 1 year.', 'Young from early spring litters are often able to reproduce later the same year.'],
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Predation and Conservation Status',
    },
    // Paragraph - Predation and Threats
    {
        type: 'p',
        text: 'Muskrats form a critical middle link in the aquatic food web. They are a primary prey item for numerous predators. The mink is widely considered their most significant natural predator, often capable of entering muskrat burrows and lodges. Other common predators include raccoon, red fox, coyote, weasels, owls, hawks, and snapping turtles. In areas with high mink populations, muskrat survival rates can drop significantly. Population numbers can also be severely affected by habitat loss, prolonged drought which eliminates small water bodies, and epidemic diseases such as tularemia.',
    },
    // Paragraph - Economic Status
    {
        type: 'p',
        text: 'Historically and currently, the muskrat is one of the most important furbearers in North America. Its fur is dense and durable, and millions of pelts were harvested annually throughout the 20th century. Due to their vast range, high adaptability, and rapid reproductive rate, the muskrat’s global conservation status is currently listed as Least Concern by the IUCN Red List, reflecting a stable and resilient population despite local pressures.',
    }
];

// Final Function Call
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('muskrat_animal.js', muskrat_animal_content);
}