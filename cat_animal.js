// 📄 cat_animal.js
/**
 * Structured content for "Cats — A Comprehensive Guide"
 * Format matches the android_history.js style: an array of content objects
 * that can be registered with window.registerArticleContent(fileName, contentArray).
 *
 * This is a long, factual, and responsibly framed resource covering:
 * - natural history & domestication
 * - breeds & classification
 * - genetics & breeding facts
 * - reproduction & development
 * - behavior & cognition
 * - health, nutrition, and preventive care
 * - welfare, ethics of breeding, and population management
 * - human-cat culture, roles, and conservation
 *
 * Intended for general educational use — not a substitute for veterinary advice.
 */

const cats_content = [
  // Title
  {
    type: 'p',
    text: 'CATS — A COMPREHENSIVE GUIDE: NATURAL HISTORY, BREEDING FACTS, CARE, AND CULTURE',
    style: {
      fontWeight: '900',
      color: '#4A4E69', // soft indigo
      fontSize: '1.7rem',
      textAlign: 'center',
      marginBottom: '1.2rem'
    }
  },

  // Intro
  {
    type: 'p',
    text:
      'Cats (family Felidae; domestic cat: Felis catus or Felis silvestris catus) are among the world\'s most popular companion animals. This guide covers their natural history, the domestication story, breed diversity, genetics and breeding fundamentals, reproductive biology, behavior and cognition, health and preventative care, ethical breeding and population-control considerations, and their roles in human culture.'
  },

  // Quick facts block
  {
    type: 'p',
    text:
      'Quick facts: Lifespan typically 12–18 years (indoor); obligate carnivores; crepuscular activity pattern (most active at dawn/dusk); highly developed night vision and hearing; flexible spine and retractable claws; diverse domesticated breeds from short-hair to long-hair and hairless varieties.'
  },

  // H2 - Natural history & evolution
  {
    type: 'h2',
    text: 'Natural history & evolution'
  },
  {
    type: 'p',
    text:
      'Cats belong to the Felidae family, which diverged from other Carnivora around 25–30 million years ago. The modern small cat lineage (genus Felis) radiated more recently. Wildcats (Felis silvestris) are native across parts of Europe, Africa, and Asia; the African wildcat (Felis lybica) is widely accepted as the primary ancestor of the domestic cat.'
  },

  // Dropdown: timeline of domestication
  {
    type: 'dropdown',
    toggleText: 'Domestication timeline (concise)',
    contentHTML: `
      <ol>
        <li><strong>~10,000 years ago:</strong> Earliest commensal relationships likely arose in the Fertile Crescent—wildcats attracted to rodent populations around human grain stores.</li>
        <li><strong>Neolithic & Bronze Age:</strong> Gradual tolerance and cohabitation; evidence of human-cat association in archaeology.</li>
        <li><strong>Ancient Egypt (~4,000 years ago):</strong> Cultural prominence, symbolic roles, and early deliberate breeding/selective treatment are well-documented.</li>
        <li><strong>Medieval to modern periods:</strong> Global spread via trade routes and shipboard rodent control; breed diversification accelerated in the 19th and 20th centuries with formal breed registries and exhibitions.</li>
      </ol>
    `
  },

  // H2 - Taxonomy & classification
  {
    type: 'h2',
    text: 'Taxonomy & classification'
  },
  {
    type: 'p',
    text:
      'The domestic cat is usually classified as Felis catus or as a subspecies Felis silvestris catus. Breed registries (e.g., CFA, FIFe, TICA) recognize many formal breeds; these organizations use breed standards to define appearance and temperament characteristics for show and breeding programs.'
  },

  // Table: Basic taxonomy
  {
    type: 'table',
    data: {
      headers: ['Rank', 'Example'],
      rows: [
        ['Kingdom', 'Animalia'],
        ['Phylum', 'Chordata'],
        ['Class', 'Mammalia'],
        ['Order', 'Carnivora'],
        ['Family', 'Felidae'],
        ['Genus', 'Felis'],
        ['Species', 'Felis catus (domestic cat)']
      ]
    }
  },

  // H2 - Breed diversity & categories
  {
    type: 'h2',
    text: 'Breed diversity & categories'
  },
  {
    type: 'p',
    text:
      'Cat breeds vary in body type, coat length, color patterns, and behavior traits. Major categories include short-haired, long-haired, semi-longhaired, and hairless. Many breeds are natural (developed in particular regions) while others are selectively developed by breeders (e.g., Burmese, Persian, Siamese, Maine Coon, Sphynx, Bengal).'
  },

  // Dropdown: common breed groups and examples
  {
    type: 'dropdown',
    toggleText: 'Common breed groups and examples',
    contentHTML: `
      <ul>
        <li><strong>Natural/landrace breeds:</strong> Maine Coon, Norwegian Forest Cat, Turkish Van.</li>
        <li><strong>Siamese-derived breeds:</strong> Siamese, Balinese, Oriental Shorthair.</li>
        <li><strong>Designer or hybrid breeds:</strong> Bengal (Asian leopard cat hybrid), Savannah (serval hybrid) — hybrids often require special considerations and may be restricted in some regions.</li>
        <li><strong>Hairless:</strong> Sphynx, Peterbald — require specialized care (skin cleanliness, temperature control).</li>
        <li><strong>Persian-type:</strong> Persian, Exotic Shorthair — brachycephalic features in some strains can have health implications.</li>
      </ul>
    `
  },

  // H2 - Genetics: coat color, pattern, and inheritance basics
  {
    type: 'h2',
    text: 'Genetics: coat, pattern, and inheritance basics'
  },
  {
    type: 'p',
    text:
      'Cat coat colors and patterns are influenced by well-studied genetic loci. Common elements include: agouti (banded hairs vs. solid), tabby patterns (mackerel, classic, spotted, ticked), color genes (black, chocolate, cinnamon, dilute variants), white spotting, and the sex-linked orange gene (O locus). Many traits are polygenic or influenced by modifiers.'
  },

  // Table: simplified genetics overview
  {
    type: 'table',
    data: {
      headers: ['Trait', 'Key genetic notes'],
      rows: [
        ['Orange (O locus)', 'Sex-linked on X chromosome; males express with single O allele, females require two differently expressed alleles.'],
        ['Dilute gene (D/d)', 'Dilutes black to blue (gray), red to cream; recessive.'],
        ['White spotting (S)', 'Variable expressivity from small patches to almost all white; complex inheritance.'],
        ['Longhair (L/l)', 'Often recessive in many breeds; can be polygenic in some populations.']
      ]
    }
  },

  // H2 - Responsible breeding fundamentals
  {
    type: 'h2',
    text: 'Responsible breeding fundamentals'
  },
  {
    type: 'p',
    text:
      'Responsible breeding emphasizes health, temperament, and genetic diversity. Key practices include health screening for breed-specific conditions, careful mate selection to avoid close inbreeding, clear pedigrees, and prioritizing welfare over extreme aesthetic traits that negatively affect health (e.g., over-brachycephaly). Ethical breeders provide health guarantees, early socialization, and documentation for new owners.'
  },

  // Dropdown: recommended health screens by breed example
  {
    type: 'dropdown',
    toggleText: 'Recommended health screens (examples by breed)',
    contentHTML: `
      <ul>
        <li><strong>Maine Coon:</strong> screen for hypertrophic cardiomyopathy (HCM) via cardiac ultrasound; hip evaluation.</li>
        <li><strong>Persian/Exotic:</strong> respiratory assessment (brachycephaly impact), HCM screening, ophthalmologic checks.</li>
        <li><strong>Bengal:</strong> general genetics screening, progressive retinal atrophy (breed-specific panels).</li>
        <li><strong>Siamese-derived:</strong> dental/respiratory checks and temperament evaluation due to vocal, active behaviors.</li>
      </ul>
    `
  },

  // H2 - Reproductive biology & breeding facts
  {
    type: 'h2',
    text: 'Reproductive biology & practical breeding facts'
  },
  {
    type: 'p',
    text:
      'Female cats (queens) are seasonally polyestrous and can enter estrus multiple times in breeding seasons (length varies by environment). They are induced ovulators: mating triggers ovulation in most cases. Typical gestation is about 63–67 days. Litter sizes commonly range from 1–8 kittens, with averages around 3–5 depending on breed, age, and health.'
  },

  // Table: timeline of feline reproduction
  {
    type: 'table',
    data: {
      headers: ['Event', 'Typical timing'],
      rows: [
        ['Sexual maturity', 'Females: often 5–12 months (breed-dependent); males: similar but grow into fertility over months.'],
        ['Estrus (heat) frequency', 'Every 2–3 weeks in breeding season if not bred; varies with daylight.'],
        ['Gestation', '~63–67 days (9 weeks).'],
        ['Weaning', 'Kittens begin weaning ~4–8 weeks; full wean often by 8–12 weeks.'],
        ['Optimal age for first breeding (ethical guidance)', 'Many breeders wait until queen is mature (often >=1 year) and has passed health screens.']
      ]
    }
  },

  // H2 - Neonatal care & kitten development
  {
    type: 'h2',
    text: 'Neonatal care & kitten development'
  },
  {
    type: 'p',
    text:
      'Neonates are altricial: blind and deaf at birth, heavily reliant on the queen. Eyes typically open around 7–14 days; hearing develops in the second week. Socialization between 2–9 weeks is critical to shaping friendly, well-adjusted adult cats—exposure to varied people and mild novel stimuli during this window improves adaptability.'
  },

  // Dropdown: essential neonatal checklist
  {
    type: 'dropdown',
    toggleText: 'Essential neonatal and early-care checklist',
    contentHTML: `
      <ol>
        <li>Ensure warm, draft-free environment and proper nutrition for the queen.</li>
        <li>Monitor weight gain daily for kittens (failure to gain indicates trouble).</li>
        <li>Begin gentle handling and habituation to people by 2–3 weeks.</li>
        <li>First veterinary checks & deworming schedules as directed by a veterinarian (often starting at ~2–4 weeks depending on protocols).</li>
        <li>Vaccination series begins typically around 6–8 weeks with boosters according to schedule.</li>
      </ol>
    `
  },

  // H2 - Behavior & social structure
  {
    type: 'h2',
    text: 'Behavior & social structure'
  },
  {
    type: 'p',
    text:
      'Wildcats and feral cats often form loose social structures around resources; domestic cats show wide behavioral variation. Key behaviors: scent marking (rubbing, urine marking), territory maintenance, hunting and stalking, play (which practices hunting skills), and vocal communication (purrs, meows, chirps). Understanding species-typical behavior helps with enrichment and welfare.'
  },

  // H2 - Cognition & emotional life
  {
    type: 'h2',
    text: 'Cognition & emotional life'
  },
  {
    type: 'p',
    text:
      'Research shows domestic cats have problem-solving abilities, object permanence understanding, and strong associative learning. They form social bonds with humans and other animals that vary by individual and experience. Emotional expression occurs through posture, vocalization, eye contact, and behavior patterns; careful observation yields reliable insight into a cat\'s comfort or stress levels.'
  },

  // H2 - Health: common conditions & preventive care
  {
    type: 'h2',
    text: 'Health: common conditions & preventive care'
  },
  {
    type: 'p',
    text:
      'Preventive care includes vaccinations (core vaccines like rabies and feline viral rhinotracheitis–calicivirus–panleukopenia [FVRCP] per local guidelines), parasite control (fleas, ticks, intestinal worms), dental care, spay/neuter, and regular veterinary checkups. Common health issues include dental disease, obesity, chronic kidney disease, hyperthyroidism (older cats), lower urinary tract disease, and infectious diseases in unvaccinated or outdoor cats.'
  },

  // Table: common health conditions
  {
    type: 'table',
    data: {
      headers: ['Condition', 'Notes / Prevention'],
      rows: [
        ['Dental disease', 'Frequent in adult cats; dental cleanings and home dental care help prevention.'],
        ['Obesity', 'Diet control and enrichment reduce risk; associated with diabetes, arthritis.'],
        ['Chronic kidney disease', 'Common in older cats; monitor kidney values with annual bloodwork.'],
        ['Hyperthyroidism', 'Older cats; treatable with medication, surgery, or radioactive iodine in some cases.'],
        ['Feline lower urinary tract disease (FLUTD)', 'Multifactorial; diet and environmental enrichment reduce risk.']
      ]
    }
  },

  // H2 - Nutrition basics
  {
    type: 'h2',
    text: 'Nutrition basics'
  },
  {
    type: 'p',
    text:
      'Cats are obligate carnivores; their diets require certain nutrients primarily found in animal tissues: preformed vitamin A, taurine, arachidonic acid, and high-quality protein. Commercial complete diets formulated for life-stage needs are recommended. Over-supplementation or feeding unbalanced homemade diets risks deficiencies (e.g., taurine deficiency leads to cardiomyopathy and retinal degeneration).'
  },

  // Dropdown: feeding practicalities
  {
    type: 'dropdown',
    toggleText: 'Feeding practicalities and life-stage considerations',
    contentHTML: `
      <ul>
        <li><strong>Kittens:</strong> need higher energy and protein; use growth-formulated diets.</li>
        <li><strong>Adult maintenance:</strong> balanced diets to maintain weight and lean mass.</li>
        <li><strong>Seniors:</strong> consider renal-supportive formulations, dental-friendly textures, and appetite stimulants as needed.</li>
        <li><strong>Hydration:</strong> dry diets can increase risk of urinary issues if water intake is low; wet food helps increase moisture intake.</li>
      </ul>
    `
  },

  // H2 - Enrichment & environment
  {
    type: 'h2',
    text: 'Enrichment & environment'
  },
  {
    type: 'p',
    text:
      'Environmental enrichment reduces stress and improves welfare. Key elements: vertical space (cat trees, shelves), hiding places, interactive play (wand toys, puzzle feeders), safe access to windows, scratching opportunities, and consistent routines. Multi-cat homes benefit from sufficient resources (litter boxes, feeding stations) to reduce competition.'
  },

  // H2 - Litterbox and sanitation
  {
    type: 'h2',
    text: 'Litterbox and sanitation'
  },
  {
    type: 'p',
    text:
      'General rule: provide at least one litterbox per cat plus one extra. Choose litter types the cat prefers, place boxes in quiet, accessible areas, scoop daily, and clean thoroughly on a regular schedule. Litterbox avoidance is often a sign of medical or behavioral issues and should prompt evaluation.'
  },

  // H2 - Spay/neuter, population control, and shelters
  {
    type: 'h2',
    text: 'Spay/neuter, population control, and shelters'
  },
  {
    type: 'p',
    text:
      'Spay/neuter reduces unwanted pregnancies, population pressure on shelters, and certain health/behavioral issues (e.g., roaming, spraying). Trap–Neuter–Return (TNR) programs are widely used for community (feral) cat population management: cats are sterilized, vaccinated, and returned to territory to control population humanely. Shelters and rescue organizations play major roles in rehoming, public education, and advocating for welfare standards.'
  },

  // H2 - Ethical issues in breeding & extreme traits
  {
    type: 'h2',
    text: 'Ethical issues in breeding & extreme traits'
  },
  {
    type: 'p',
    text:
      'Some breed standards promote extreme features (e.g., flattened faces in brachycephalic breeds, folded ears) that can compromise welfare (respiratory problems, dental crowding). Ethical breeding discourages exaggerations that cause suffering and prioritizes genetic health, temperament, and longevity. Transparent disclosure and breeder accountability are central to ethical practice.'
  },

  // H2 - Laws, import/export, and ownership regulations
  {
    type: 'h2',
    text: 'Laws, import/export, and ownership regulations'
  },
  {
    type: 'p',
    text:
      'Regulatory frameworks vary: vaccination and microchipping requirements, quarantine for international movement, and restrictions on ownership of hybrid (wild cat hybrid) breeds in some jurisdictions. Prospective owners should check local laws on required rabies vaccination, licensing, and any restrictions on certain breeds or hybrids.'
  },

  // H2 - Cats in human culture: roles & symbolism
  {
    type: 'h2',
    text: 'Cats in human culture: roles & symbolism'
  },
  {
    type: 'p',
    text:
      'Cats feature heavily in mythology, folklore, and modern culture: revered in ancient Egypt, associated with luck and superstition in various societies, central players in pest control on ships and farms, and powerful symbols in literature, art, and internet culture. Their dual status as practical pest controllers and beloved companions shaped their global role.'
  },

  // H2 - Working cats / feral cats in ecosystem roles
  {
    type: 'h2',
    text: 'Working cats & feral cat ecological considerations'
  },
  {
    type: 'p',
    text:
      'Cats employed as working animals (barn/warehouse cats) provide rodent control and can form useful human partnerships. However, free-roaming cats can impact native wildlife (notably birds, reptiles) — a conservation concern in some sensitive ecosystems. Balanced, humane strategies (TNR, managed colonies, indoor-outdoor management in sensitive habitats) are important to reduce negative ecological effects.'
  },

  // H2 - Public health intersections
  {
    type: 'h2',
    text: 'Public health intersections'
  },
  {
    type: 'p',
    text:
      'Zoonotic considerations include toxoplasmosis (Toxoplasma gondii), pasteurella from bites/scratches, and certain parasites; responsible pet ownership, routine veterinary care, and hygiene reduce risks. Most risks are manageable with common-sense practices like handwashing, cleaning litter boxes with care (pregnant people should avoid unprotected handling), and effective parasite control.'
  },

  // H2 - Feline research frontiers
  {
    type: 'h2',
    text: 'Feline research frontiers'
  },
  {
    type: 'p',
    text:
      'Ongoing research areas include feline genetics (disease markers, coat and morph genes), behavior and cognition studies, feline infectious disease (e.g., FIV, FeLV, feline coronavirus), and improved therapies for chronic conditions common in aging cats. Advances in genomic tools are improving our understanding of hereditary disease and enabling better screening panels.'
  },

  // H2 - Adopting & choosing a cat
  {
    type: 'h2',
    text: 'Adopting & choosing a cat'
  },
  {
    type: 'p',
    text:
      'Adoption choices include shelter/rescue cats, which often need homes urgently, and breeder-sourced kittens when specific breed traits are desired (choose reputable breeders). Consider lifestyle match (activity level, grooming needs), allergen concerns, and long-term commitment. Meet the cat first if possible and ensure up-to-date veterinary records on adoption.'
  },

  // Dropdown: checklist for new cat owners
  {
    type: 'dropdown',
    toggleText: 'Checklist for new cat owners',
    contentHTML: `
      <ol>
        <li>Prepare a safe, cat-proofed space with bed, litterbox, food/water, and hiding spots.</li>
        <li>Schedule a veterinary exam shortly after adoption for vaccination & health checks.</li>
        <li>Plan for microchipping and identification.</li>
        <li>Enrichment: toys, vertical spaces, and daily play sessions to prevent boredom.</li>
        <li>Budget for lifetime costs: food, vet care, parasites, possible emergency care.</li>
      </ol>
    `
  },

  // H2 - Common myths & facts
  {
    type: 'h2',
    text: 'Common myths & facts'
  },
  {
    type: 'p',
    text:
      'Myth: Cats are aloof and do not bond with humans. Fact: Cats form social bonds that can be subtle but meaningful; many display attachment behaviors. Myth: Cats always land on their feet. Fact: Righting reflex helps but falls can still injure; window safety is important. Myth: Cat purring only signals contentment. Fact: purring can also indicate pain, stress, or healing-related signaling.'
  },

  // H2 - FAQs
  {
    type: 'h2',
    text: 'FAQs'
  },
  {
    type: 'p',
    text:
      'Q: How long do cats live? A: Indoor cats commonly live 12–18+ years; many reach their 20s with good care. Q: Are cats good for small apartments? A: Many cats adapt well to apartment life if provided enrichment and play. Q: Can two adult cats be introduced later? A: Yes—slow introductions using scent swapping and controlled meetings work best.'
  },

  // H2 - Resources & next steps
  {
    type: 'h2',
    text: 'Resources & next steps'
  },
  {
    type: 'p',
    text:
      'For continuing education: consult reputable veterinary sources, breed club guidance, regional animal-welfare organizations, and local veterinarians. If you plan to breed, connect with established breed clubs and veterinary reproductive specialists to implement best practices and health screening protocols.'
  },

  // Closing summary
  {
    type: 'p',
    text:
      'Summary: Cats are biologically specialized, behaviorally complex, and culturally significant animals. Whether your interest is scientific, practical (care and breeding), or cultural, understanding their biology, welfare needs, and the ethical responsibilities of ownership and breeding will help ensure better outcomes for cats and the people who care for them.'
  },
];

// Register content if the host page provides the registration function
if (typeof window.registerArticleContent === 'function') {
  window.registerArticleContent('cat_animal.js', cats_content);
}
