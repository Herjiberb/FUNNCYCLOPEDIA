// 📄 anteater_animal.js
/**
 * Structured content for "Anteater (Animal)"
 * Designed to match the style of your other article modules (array of content objects).
 * This file contains only structured content objects (p, h2, table, dropdown, etc.)
 * and intentionally does NOT include external citations, follow-up offers, or metadata inside the JS.
 *
 * To use: call window.registerArticleContent('anteater_animal.js', anteater_content)
 * (the hosting page's registerArticleContent function will accept the module).
 */

const anteater_content = [
  // Title
  {
    type: 'p',
    text: 'ANTEATER (ANIMAL): A COMPREHENSIVE NATURAL HISTORY, ECOLOGY, AND CONSERVATION GUIDE',
    style: {
      fontWeight: '900',
      color: '#2F6B4A', // rainforest green
      fontSize: '1.7rem',
      textAlign: 'center',
      marginBottom: '1.2rem'
    }
  },

  // Introduction
  {
    type: 'p',
    text:
      'Anteaters are a group of specialized, insect-eating mammals best known for their elongated snouts and tongues adapted to harvest ants and termites. This article surveys anteater diversity, anatomy and adaptations, feeding ecology, reproduction and development, behavior and social systems, evolutionary history and paleontology, conservation status and threats, human interactions, captive care considerations, research methods, and frequently asked questions. The focus is on clarity and practical detail for naturalists, students, and conservation-minded readers.'
  },

  // Quick facts
  {
    type: 'p',
    text:
      'Quick facts: Order Pilosa (suborder Vermilingua) — core anteater species include the Giant Anteater (Myrmecophaga tridactyla), the Southern Tamandua (Tamandua tetradactyla), the Northern Tamandua (Tamandua mexicana), and the Silky Anteater (Cyclopes didactylus). Specialized diet: ants and termites; specialized anatomy: long sticky tongue, reduced dentition, strong foreclaws; habitats: grasslands, savannas, forests, and wetlands across Central and South America. Conservation statuses range from Least Concern to Vulnerable/Threatened depending on species and region.'
  },

  // H2 - Taxonomy & species overview
  {
    type: 'h2',
    text: 'Taxonomy & species overview'
  },
  {
    type: 'p',
    text:
      'Anteaters belong to the mammalian order Pilosa, suborder Vermilingua (meaning "worm tongue"). This group is distinct from aardvarks and pangolins, which evolved insectivory independently. Modern vermilingues are represented by a small number of extant species with notable ecological and morphological diversity.'
  },

  // Table: extant anteater species (concise)
  {
    type: 'table',
    data: {
      headers: ['Common name', 'Scientific name', 'Typical habitat', 'Adult size (approx.)'],
      rows: [
        ['Giant Anteater', 'Myrmecophaga tridactyla', 'Savannas, grasslands, open forests', '1.8–2.4 m total length (including tail); 20–40 kg'],
        ['Southern Tamandua', 'Tamandua tetradactyla', 'Tropical forests, gallery forests, savanna-forest mosaic', 'Body ~40–70 cm; tail prehensile, 6–9 kg'],
        ['Northern Tamandua', 'Tamandua mexicana', 'Central American forests & dry forests', 'Similar to southern tamandua; regionally variable'],
        ['Silky Anteater (pygmy anteater)', 'Cyclopes didactylus', 'Lowland tropical forests, canopy', 'Body ~25–45 cm; tail prehensile; ~300–600 g (very small)']
      ]
    }
  },

  // H2 - Anatomy & unique adaptations
  {
    type: 'h2',
    text: 'Anatomy & unique adaptations'
  },
  {
    type: 'p',
    text:
      'Anteaters are classic examples of extreme specialization. Key morphological traits support their insectivorous lifestyle and arboreal/terrestrial niches.'
  },

  // Dropdown: detailed anatomical features
  {
    type: 'dropdown',
    toggleText: 'Key anatomical features (expanded)',
    contentHTML: `
      <ul>
        <li><strong>Skull & snout:</strong> Elongated rostrum and reduced dentition — anteaters are edentate (toothless) or have highly reduced teeth; the snout supports a long, narrow oral cavity for tongue projection.</li>
        <li><strong>Tongue:</strong> Exceptionally long and extensible (in giant anteaters up to ~60 cm), covered with sticky saliva and tiny backward-pointing papillae to trap ants and termites; anchored to the sternum in some species for forceful protrusion and retraction.</li>
        <li><strong>Forelimbs & claws:</strong> Powerful forelimbs with large curved keratinous claws used for tearing open termite mounds and ant nests; when walking, many species fold claws under to protect them.</li>
        <li><strong>Digestive adaptations:</strong> Simple stomachs but with muscular action and copious saliva; some species ingest small amounts of soil or debris that aid grinding in lieu of teeth; relatively fast gut transit to process large volumes of small prey items.</li>
        <li><strong>Sensory systems:</strong> Keen olfaction and tactile sensitivity in the snout and tongue region; eyesight is generally modest, but hearing and smell are well-developed for locating insect colonies.</li>
        <li><strong>Locomotion & tail:</strong> Arboreal species (silky anteater, tamanduas) have prehensile tails for climbing; giant anteaters are terrestrial and use the tail as balance and occasional shelter on cooler nights.</li>
      </ul>
    `
  },

  // H2 - Feeding ecology & diet
  {
    type: 'h2',
    text: 'Feeding ecology & diet'
  },
  {
    type: 'p',
    text:
      'Anteaters are specialized myrmecophages — their diets consist almost entirely of ants and termites. Feeding strategies vary by species, body size, and prey type (ground vs. arboreal nests).'
  },

  // Table: feeding behavior by species
  {
    type: 'table',
    data: {
      headers: ['Species', 'Primary prey', 'Feeding strategy'],
      rows: [
        ['Giant Anteater', 'Ground-dwelling ants and termites (various genera)', 'Rips open mounds with foreclaws and laps insects rapidly with long tongue; individual feeding stations often used briefly to avoid defensive soldier insects.'],
        ['Tamandua (Northern & Southern)', 'Arboreal ants, termites, and sometimes bees', 'Climbs to nests in trees, uses claws to open them; more selective feeding and occasional opportunistic fruit/egg consumption reported.'],
        ['Silky Anteater', 'Small arboreal ants and soft-bodied insects', 'Forages among twigs and foliage in canopy, slow deliberate movements, uses prehensile tail for stability.']
      ]
    }
  },

  // H2 - Metabolism & energetic considerations
  {
    type: 'h2',
    text: 'Metabolism, energy budgets & dietary constraints'
  },
  {
    type: 'p',
    text:
      'A high-volume low-calorie diet of small-bodied insects shapes anteater physiology and behavior. Giant anteaters can spend many hours foraging and consume tens of thousands of insects per day, balancing prey availability against energy expenditure. Seasonal fluctuations in insect abundance lead to variable feeding patterns and home-range changes.'
  },

  // H2 - Behavior & sociality
  {
    type: 'h2',
    text: 'Behavior & social systems'
  },
  {
    type: 'p',
    text:
      'Most anteaters are primarily solitary, with individuals maintaining overlapping or exclusive home ranges depending on species and habitat productivity. Activity patterns range from diurnal to nocturnal and crepuscular, often influenced by temperature, prey activity, and human disturbance. Tamanduas and silky anteaters use trees and vertical space extensively; giant anteaters are predominantly terrestrial.'
  },

  // H2 - Reproduction, development & life history
  {
    type: 'h2',
    text: 'Reproduction, development & life history'
  },
  {
    type: 'p',
    text:
      'Anteater reproductive biology is comparatively slow: long gestations, small litter sizes (usually a single offspring), and extended maternal care. Life-history traits vary among species and are important for understanding vulnerability to population declines.'
  },

  // Table: reproduction snapshots
  {
    type: 'table',
    data: {
      headers: ['Species', 'Gestation (approx.)', 'Litter size', 'Juvenile development & maternal care'],
      rows: [
        ['Giant Anteater', '~6–7 months', 'Usually 1', 'Pups ride on mother\'s back for several months; weaning and independence may take up to a year.'],
        ['Tamandua', '~4–5 months', 'Usually 1', 'Clinging young ride on back/tail; maternal protection and teaching foraging behaviors.'],
        ['Silky Anteater', '~3–4 months', '1 (rarely 2)', 'Young are highly arboreal and cling to mother; development in canopy habitat.']
      ]
    }
  },

  // H2 - Lifespan & mortality
  {
    type: 'h2',
    text: 'Lifespan, predators & mortality factors'
  },
  {
    type: 'p',
    text:
      'In the wild, anteater lifespan varies: giant anteaters may live 12–15 years under favorable conditions, while smaller species have shorter average lifespans. Predation (jaguars, pumas, large raptors for smaller species), vehicle collisions, habitat loss, and human hunting are major mortality causes. Reproductive rate and solitary lifestyle mean populations recover slowly from heavy losses.'
  },

  // H2 - Habitat, distribution & home ranges
  {
    type: 'h2',
    text: 'Habitat, distribution & home ranges'
  },
  {
    type: 'p',
    text:
      'Anteaters occupy a range of Neotropical habitats from tropical rainforests and cloud forests to savannas and dry scrublands. The giant anteater favors open grasslands and gallery forests, while tamanduas and silky anteaters are more forest-dependent and often use vertical strata for foraging and shelter.'
  },

  // H2 - Ecosystem role & ecological importance
  {
    type: 'h2',
    text: 'Ecosystem role & ecological importance'
  },
  {
    type: 'p',
    text:
      'Anteaters are keystone insectivores in many ecosystems: by limiting ant and termite populations they influence soil aeration, nutrient cycling, and the structure of arthropod communities. Their excavation of nests can create microhabitats used by other species and affect decomposition processes.'
  },

  // H2 - Evolutionary history & fossil record
  {
    type: 'h2',
    text: 'Evolutionary history & fossil record'
  },
  {
    type: 'p',
    text:
      'The lineage leading to modern anteaters diverged from other pilosan mammals tens of millions of years ago. The fossil record (including extinct myrmecophagid relatives and larger xenarthrans) shows varied body sizes and ecological roles through the Neogene. Anteaters share distant relationships with sloths within Xenarthra, an ancient South American mammalian radiation.'
  },

  // H2 - Comparisons: anteaters, aardvarks, and pangolins
  {
    type: 'h2',
    text: 'Convergent evolution: anteaters vs. aardvarks vs. pangolins'
  },
  {
    type: 'p',
    text:
      'Anteaters, aardvarks (Africa), and pangolins (Africa and Asia) are classic examples of convergent evolution: unrelated lineages evolved similar traits (long sticky tongues, powerful digging forelimbs, reduced dentition) to exploit social insect prey. Despite functional similarity, their anatomy, taxonomy, and evolutionary histories are distinct.'
  },

  // H2 - Conservation status & threats
  {
    type: 'h2',
    text: 'Conservation status & major threats'
  },
  {
    type: 'p',
    text:
      'Threats to anteaters include habitat loss and fragmentation, road mortality, hunting (for meat or retaliatory killing), and capture for illegal trade (rare but reported). The International Union for Conservation of Nature (IUCN) and national listings categorize species variably: some populations are of conservation concern. Landscape-level conservation, protected areas, and mitigation of road impacts are key interventions.'
  },

  // Dropdown: conservation actions and management tools
  {
    type: 'dropdown',
    toggleText: 'Conservation strategies & management interventions',
    contentHTML: `
      <ul>
        <li><strong>Habitat protection & corridors:</strong> Maintain connected landscapes for wide-ranging species like the giant anteater.</li>
        <li><strong>Road mitigation:</strong> Wildlife crossing structures, speed reduction, and targeted fencing near high-risk areas.</li>
        <li><strong>Anti-poaching & community engagement:</strong> Reduce hunting pressure and promote coexistence through education and alternative livelihoods.</li>
        <li><strong>Research & monitoring:</strong> Radio-telemetry, camera traps, and citizen-science reporting to inform population status and threats.</li>
        <li><strong>Rescue & rehabilitation:</strong> Veterinary care for injured individuals and release protocols where feasible.</li>
      </ul>
    `
  },

  // H2 - Human interactions: cultural significance & conflict
  {
    type: 'h2',
    text: 'Human interactions: cultural roles, conflicts, and coexistence'
  },
  {
    type: 'p',
      text:
      'Anteaters appear in indigenous narratives, local folklore, and art across parts of their range. Conflicts sometimes arise when anteaters feed in areas with human activities or when fear or misinformation leads to persecution. Conversely, ecotourism centered on anteater sightings can provide incentives for local conservation.'
  },

  // H2 - Captive care & rehabilitation (guidance for rescues and zoos)
  {
    type: 'h2',
    text: 'Captive care & rehabilitation (zoos & rescue centers)'
  },
  {
    type: 'p',
    text:
      'Successful captive care demands species-appropriate diets (specialized insectivore formulations where live prey are impractical), large enclosures with climbing and digging opportunities for tamanduas and space for giant anteaters to express natural movements, veterinary protocols for anesthesia and handling (due to strong claws), and enrichment that mimics foraging behavior. Rehabilitation centers must plan for soft-release or long-term sanctuary placement due to slow reproduction and territory needs.'
  },

  // H2 - Field study methods & citizen science
  {
    type: 'h2',
    text: 'Field study methods & citizen science contributions'
  },
  {
    type: 'p',
    text:
      'Field studies use camera traps, radio/satellite telemetry, spoor surveys (tracks and feces), direct observation, and nest-site monitoring to estimate densities, home ranges, and behavior. Citizen observations (e.g., roadkill reports, sightings on biodiversity platforms) can fill important spatial gaps and guide targeted research and mitigation.'
  },

  // H2 - Research frontiers & open questions
  {
    type: 'h2',
    text: 'Research frontiers & open questions'
  },
  {
    type: 'p',
    text:
      'Key research areas include detailed dietary analyses across seasons and landscapes, population genetics to estimate connectivity, ecological roles in termite/ant population regulation, responses to climate change-driven shifts in prey availability, and optimization of mitigation measures to reduce road mortality. There is also growing interest in microbiome studies and physiological adaptations to specialized diets.'
  },

  // H2 - How to observe anteaters ethically (guide for nature watchers)
  {
    type: 'h2',
    text: 'How to observe anteaters ethically (for naturalists and photographers)'
  },
  {
    type: 'p',
    text:
      'Tips: favor early-morning or dusk observation when many species are active; use quiet, low-impact approaches and maintain distance—use binoculars or long lenses rather than trying to approach; avoid disturbing nests or den sites; report sightings to local research groups when possible; follow local rules in protected areas.'
  },

  // H2 - FAQs (quick practical answers)
  {
    type: 'h2',
    text: 'Frequently asked questions'
  },
  {
    type: 'p',
    text:
      'Q: Do anteaters carry diseases dangerous to humans? A: Anteaters are not known to be major reservoirs of zoonoses for humans frequently; basic hygiene and avoiding direct contact with injured animals is prudent. Q: Can anteaters be kept as pets? A: Wild anteaters are not suitable as pets—specialized diets, space, and legal protections make captivity appropriate only for licensed facilities. Q: Why don\'t anteaters have teeth? A: Evolutionary specialization for insectivory led to reduced or absent dentition; mechanical breakdown of prey occurs via tongue and muscular stomach action.'
  },

  // H2 - Glossary & terminology
  {
    type: 'h2',
    text: 'Glossary & terminology'
  },
  {
    type: 'p',
    text:
      'Vermilingua — suborder meaning "worm-tongued"; myrmecophagy — specialized feeding on ants/termites; xenarthra — the mammalian superorder including anteaters, sloths, and armadillos; myrmecophile — organism associated with ant colonies.'
  },

  // Closing summary
  {
    type: 'p',
    text:
      'Summary: Anteaters are remarkable specialists whose ecology, anatomy, and life history illuminate the power of evolutionary adaptation. Their conservation requires landscape-level thinking, mitigation of human impacts (especially roads and habitat loss), and local engagement to reduce persecution. For students, conservationists, and wildlife enthusiasts, anteaters offer a window into Neotropical ecosystem dynamics and the urgent need to balance human development with biodiversity stewardship.'
  }
];

// Register content if the host page supports it
if (typeof window.registerArticleContent === 'function') {
  window.registerArticleContent('anteater_animal.js', anteater_content);
}
