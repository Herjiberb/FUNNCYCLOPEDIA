// 📄 tongue.js
/**
 * Structured content for "Tongue (Human & Comparative Biology)"
 * Matches the style used in your other article modules: an array of content objects
 * that can be registered with window.registerArticleContent(fileName, contentArray).
 *
 * This module contains only structured content objects (p, h2, table, dropdown, etc.)
 * and intentionally does NOT include external citations inside the JS.
 *
 * Use: window.registerArticleContent('tongue.js', tongue_content)
 */

const tongue_content = [
  // Title
  {
    type: 'p',
    text: 'TONGUE (HUMAN & ANIMAL): ANATOMY, FUNCTION, EVOLUTION, DISEASES, AND CULTURE',
    style: {
      fontWeight: '900',
      color: '#6B2E2E', // deep burgundy
      fontSize: '1.8rem',
      textAlign: 'center',
      marginBottom: '1.2rem'
    }
  },

  // Introduction
  {
    type: 'p',
    text:
      'The tongue is one of the most versatile organs in animals: a muscular, sensory, and manipulative structure used in feeding, communication, grooming, chemoreception, thermoregulation, and — in humans — speech. This long-form article covers human tongue anatomy and function, comparative tongue morphologies across animal groups, development and genetics, clinical conditions and diagnostics, cultural uses and cuisine, evolutionary patterns and convergent adaptations, research frontiers, and practical FAQs for lay and professional readers.'
  },

  // Quick facts
  {
    type: 'p',
    text:
      'Quick facts: The human tongue is a muscular organ covered in specialized mucosa containing papillae and taste buds; the tongue contains intrinsic and extrinsic muscles that control shape and position; sensory innervation is via several cranial nerves; tongues show dramatic morphological diversity across vertebrates and invertebrates with specialized forms such as projectile chameleon tongues, sticky frog tongues, forked chemosensory snake tongues, and rasping cat tongues.'
  },

  // H2 - Structural anatomy of the human tongue
  {
    type: 'h2',
    text: 'Human tongue: gross anatomy & histology'
  },
  {
    type: 'p',
    text:
      'The human tongue fills most of the floor of the oral cavity and is traditionally described in two anatomical parts: the oral (anterior two-thirds) portion and the pharyngeal (posterior one-third) portion. Surface specialization includes multiple papilla types and numerous taste buds embedded in mucosa. The tongue contains a set of intrinsic muscles (alter shape) and extrinsic muscles (alter position), richly vascularized and innervated for motor and sensory function.'
  },

  // Table: human tongue muscle overview
  {
    type: 'table',
    data: {
      headers: ['Muscle group', 'Major muscles', 'Primary action'],
      rows: [
        ['Intrinsic muscles', 'Superior longitudinal, inferior longitudinal, transverse, vertical', 'Change tongue shape (flattening, elongating, curling)'],
        ['Extrinsic muscles', 'Genioglossus, hyoglossus, styloglossus, palatoglossus', 'Move tongue in/out, retract, elevate; control position for speech and swallowing']
      ]
    }
  },

  // H2 - Surface features: papillae, taste buds, and mucosa
  {
    type: 'h2',
    text: 'Surface features: papillae, taste buds, and mucosa'
  },
  {
    type: 'p',
    text:
      'The dorsal surface of the tongue is patterned with papillae that perform mechanical and sensory functions. Taste buds are located primarily in fungiform, foliate, and circumvallate papillae and are responsible for gustation (taste). The filamentous filiform papillae are keratinized and provide tactile and grooming functions rather than taste.'
  },

  // Table: papillae types and functions
  {
    type: 'table',
    data: {
      headers: ['Papilla type', 'Location', 'Primary function'],
      rows: [
        ['Filiform', 'Distributed across dorsal surface', 'Mechanical: grip and abrasion resistance; no taste buds'],
        ['Fungiform', 'Anterior dorsal surface and tip', 'Contain taste buds; sweet/umami detection concentrated here in children (developmental variability)'],
        ['Foliate', 'Lateral posterior margins', 'Taste buds sensitive to sour and salty stimuli'],
        ['Circumvallate (vallate)', 'V-shaped row near posterior dorsal surface', 'Contain many taste buds; important for bitter taste detection']
      ]
    }
  },

  // H2 - Innervation, blood supply, and lymphatics
  {
    type: 'h2',
    text: 'Innervation, blood supply, and lymphatic drainage'
  },
  {
    type: 'p',
    text:
      'Motor control to most tongue muscles is via the hypoglossal nerve (CN XII), while taste and general sensation are split across cranial nerves depending on region (e.g., facial nerve CN VII for anterior taste, glossopharyngeal CN IX for posterior taste, trigeminal CN V for general sensation). The lingual artery (branch of the external carotid) supplies blood; lymphatic drainage follows pathways important for staging of oral cancers.'
  },

  // H2 - Human tongue functions: taste, speech, swallowing, grooming
  {
    type: 'h2',
    text: 'Core functions of the human tongue'
  },
  {
    type: 'p',
    text:
      'Key roles: (1) Gustation (taste) — detecting five basic tastes plus complex flavor via retronasal olfaction; (2) Articulation — fine motor control for consonants and vowels essential for spoken language; (3) Deglutition — forming bolus and propelling it into the oropharynx; (4) Oral hygiene — mechanical cleaning of teeth and mucosa; (5) Sensation — thermal, tactile, painful stimuli coordinate feeding safety.'
  },

  // Dropdown: taste vs flavor (expanded)
  {
    type: 'dropdown',
    toggleText: 'Taste vs. flavor — a short primer',
    contentHTML: `
      <p>Taste refers to basic gustatory modalities (sweet, salty, sour, bitter, umami, and more recently proposed tastes such as fat and metallic). Flavor is a multisensory percept that combines taste, retronasal olfaction (aroma from the back of the throat to the nose), texture, temperature, and trigeminal sensations (spicy, cooling).</p>
    `
  },

  // H2 - Development: embryology and maturation of taste & motor control
  {
    type: 'h2',
    text: 'Development: embryology and functional maturation'
  },
  {
    type: 'p',
    text:
      'Tongue muscles arise from occipital somites and migrate into the pharyngeal region during embryogenesis. Taste bud formation begins in utero — fetuses respond to flavors via amniotic fluid exposures — and taste sensitivity changes across the lifespan. Motor control matures with neurological development, enabling progressive feeding behaviors and eventual speech coordination.'
  },

  // H2 - Clinical conditions affecting the human tongue
  {
    type: 'h2',
    text: 'Clinical conditions, diagnostics, and management'
  },
  {
    type: 'p',
    text:
      'Common and important tongue-related conditions include infections (viral stomatitis, oral candidiasis), inflammatory conditions (glossitis), developmental anomalies (ankyloglossia/tongue-tie), neoplasia (squamous cell carcinoma), taste disorders (ageusia, dysgeusia), traumatic injuries, and neurologic disorders affecting movement or sensation. Examination of the tongue is a standard part of oral and ENT assessments.'
  },

  // Table: selected tongue disorders & clinical notes
  {
    type: 'table',
    data: {
      headers: ['Condition', 'Presentation', 'Clinical notes / typical management'],
      rows: [
        ['Geographic tongue (benign migratory glossitis)', 'Map-like red patches with white borders on the dorsal tongue', 'Benign, symptomatic treatment for discomfort; not infectious.'],
        ['Glositis', 'Swelling, pain, color changes (red, smooth)', 'Look for nutritional deficiencies, infections, irritants; treat underlying cause.'],
        ['Ankyloglossia (tongue-tie)', 'Restrictive lingual frenulum limiting mobility', 'May affect breastfeeding and speech; frenotomy or frenuloplasty considered in symptomatic infants/children.'],
        ['Oral squamous cell carcinoma', 'Persistent ulcer/mass, often lateral tongue', 'Requires biopsy and staging; early diagnosis improves outcomes.'],
        ['Glossopharyngeal neuralgia / neuropathies', 'Sharp or burning pain, altered sensation', 'Neurologic evaluation and medical management.']
      ]
    }
  },

  // H2 - Diagnostic techniques and functional testing
  {
    type: 'h2',
    text: 'Diagnostics and functional testing'
  },
  {
    type: 'p',
    text:
      'Clinical tools include visual and tactile oral exams, taste testing (chemical or whole-food based), imaging for structural problems (ultrasound, MRI for tumors or masses), biopsy for suspicious lesions, and functional speech/swallow assessments performed by speech-language pathologists. Electrophysiologic testing and nerve conduction studies are used in complex neurologic cases.'
  },

  // H2 - Surgical and rehabilitative interventions
  {
    type: 'h2',
    text: 'Surgical, medical, and rehabilitative interventions'
  },
  {
    type: 'p',
    text:
      'Interventions include frenotomy/frenuloplasty for ankyloglossia, surgical excision and reconstruction for tumors, corticosteroids or antimicrobials for inflammatory/infectious conditions, and speech/swallow therapy for functional deficits. Prosthetic and reconstructive techniques (microvascular free flaps) are used after major resections to restore structure and function.'
  },

  // H2 - Comparative tongues: mammals (overview)
  {
    type: 'h2',
    text: 'Comparative anatomy: mammal tongues and specialized adaptations'
  },
  {
    type: 'p',
    text:
      'Mammal tongues show a range of specializations: cats and felids have backward-pointing filiform papillae for grooming and meat-shearing; anteaters and pangolins have extremely elongated, sticky tongues to extract insects; ruminants have broad tongues adapted for prehension of forage and for manipulating cud; cetaceans (whales) have massive tongues used in filtering or manipulation of prey and buoyancy control in some behaviors.'
  },

  // Table: mammal tongue specializations (selected examples)
  {
    type: 'table',
    data: {
      headers: ['Species / group', 'Tongue specialization', 'Functional role'],
      rows: [
        ['Cats (Felidae)', 'Keratinized, backward-pointing filiform papillae', 'Grooming, hair removal, abrading meat from bone'],
        ['Anteaters (Myrmecophagidae)', 'Extra-long sticky tongue anchored to sternum', 'Ant/termite extraction; deep narrow probing behavior'],
        ['Ruminants (cows, sheep)', 'Broad muscular tongue with rough papillae', 'Grasping forage and manipulating cud for rumination'],
        ['Baleen whales', 'Large muscular tongue', 'For some species: cooperate with baleen in filter-feeding dynamics; others use tongue for movement of prey within mouth'],
        ['Pigs (Suidae)', 'Strong, mobile tongue', 'Omnivorous feeding and rooting-associated manipulations']
      ]
    }
  },

  // H2 - Specialized reptile tongues: snakes and chameleons
  {
    type: 'h2',
    text: 'Reptile specializations: forked, chemosensory, and projectile tongues'
  },
  {
    type: 'p',
    text:
      'Reptiles show two notable tongue specializations: snakes use a forked tongue to collect chemical cues from the air and deposit them on the vomeronasal organ (Jacobson\'s organ) for precise directional chemoreception; chameleons possess highly elastic, ballistic tongues that can be projected rapidly to capture prey at distances many times their body length.'
  },

  // Table: reptile tongue examples
  {
    type: 'table',
    data: {
      headers: ['Reptile', 'Tongue trait', 'Function'],
      rows: [
        ['Snakes', 'Forked tongue, chemosensory', 'Detect prey and environmental cues via vomeronasal sampling; directional resolution.'],
        ['Chameleons', 'Ballistic, extensible tongue with sticky pad', 'Capture insects rapidly at long distance using myoelastic mechanisms.'],
        ['Geckos / some lizards', 'Sticky tongues or lingual modifications', 'Grooming and feeding; some use mucus-assisted prey capture']
      ]
    }
  },

  // H2 - Amphibian tongues: sticky adhesion and prey capture
  {
    type: 'h2',
    text: 'Amphibians: adhesive tongues and rapid projection'
  },
  {
    type: 'p',
    text:
      'Many frogs and some salamanders have adhesive, muscular tongues that can be rapidly projected to capture flying or jumping prey. The tongue surface often bears specialized mucous secretions that increase adhesion, and the biomechanics involve rapid muscular and elastic energy transfer.'
  },

  // H2 - Bird tongues: nectar, probing, and bristled tongues
  {
    type: 'h2',
    text: 'Bird tongues: nectar feeders, probing tongues, and tongue-mediated filtering'
  },
  {
    type: 'p',
    text:
      'Bird tongues are highly variable: hummingbirds have grooved tongues for capillary transport of nectar; woodpeckers have long, barbed tongues that wrap around the skull as shock absorption and extract larvae from wood; ducks have lamellae for filtering; parrots use muscular tongues for manipulating food and vocal learning.'
  },

  // H2 - Fish and aquatic tongues: diversity & function
  {
    type: 'h2',
    text: 'Fish and aquatic structures functionally analogous to tongues'
  },
  {
    type: 'p',
    text:
      'Many fishes lack a muscular tongue homologous to terrestrial vertebrates but have tongue-like structures (e.g., basihyal) or oral papillae that manipulate food. In some species the tongue area plays a role in suction feeding or holding prey while swallowing.'
  },

  // H2 - Invertebrate tongue-analogues: proboscises, radulae, and mouthparts
  {
    type: 'h2',
    text: 'Invertebrate tongue-analogues: proboscises, radulae, and specialized mouthparts'
  },
  {
    type: 'p',
      text:
      'Invertebrates evolved many tongue-like tools: butterflies and moths have a coiled proboscis for sipping nectar; gastropods (snails, slugs) have a radula — a rasping organ used for feeding; bees and flies have labium-derived tongues adapted for lapping and sucking. These are functionally analogous to tongues even though they are anatomically distinct.'
  },

  // H2 - Convergent evolution and functional morphology
  {
    type: 'h2',
    text: 'Convergent evolution: repeated solutions to the same problems'
  },
  {
    type: 'p',
    text:
      'Tongue-based adaptations illustrate convergent evolution: sticky adhesive tongues evolved independently in frogs, some mammals, and invertebrate mouthparts; projectile tongues evolved in chameleons and some amphibians via different structural strategies; chemosensory tongue-flicking for environmental sampling evolved in reptiles and some mammals in different ways.'
  },

  // H2 - Behavioral roles beyond feeding: grooming, thermoregulation, signaling
  {
    type: 'h2',
    text: 'Non-feeding roles: grooming, thermoregulation, social signaling'
  },
  {
    type: 'p',
    text:
      'Tongues are used widely for grooming (cats licking fur), social bonding (dogs licking humans), thermoregulation (panting in dogs uses tongue surface area for evaporative cooling), and in ritualized displays (some birds and lizards display tongues in communication). The multifunctionality of the tongue influences its morphology and neural control.'
  },

  // H2 - Cultural aspects: tongues in cuisine, symbolism, and language
  {
    type: 'h2',
    text: 'Cultural aspects: culinary uses, symbolism, and idioms'
  },
  {
    type: 'p',
    text:
      'Human cultures use tongues as food (beef tongue, pork tongue, fish tongue in some cuisines) with distinct preparation traditions. Tongues are also symbolic in language and art (expressions like "hold your tongue", "tongue-tied") and appear in religious and mythological contexts. Ethical, culinary, and safety regulations shape how animal tongues enter food systems.'
  },

  // H2 - Taste receptors & modern molecular insights
  {
    type: 'h2',
    text: 'Molecular taste biology & modern insights'
  },
  {
    type: 'p',
    text:
      'Tastes are detected by receptor families (e.g., T1R and T2R for sweet/umami and bitter in vertebrates) and additional receptors mediate salt, sour, and fatty sensations. Genetic variation in receptor genes explains individual differences in taste sensitivity (e.g., bitter sensitivity) and influences dietary choices and nutrition. Recent work also highlights taste receptors outside the tongue (gut, airway) with physiological roles.'
  },

  // H2 - Microbiome of the tongue and oral health
  {
    type: 'h2',
    text: 'Oral microbiome: the tongue as an ecological surface'
  },
  {
    type: 'p',
    text:
      'The tongue hosts a complex microbial community that influences oral health, halitosis (bad breath), and systemic disease links. Tongue coating and biofilms are clinically relevant; oral hygiene strategies often emphasize tongue cleaning to reduce microbial load and improve breath.'
  },

  // H2 - Research frontiers & biomedical engineering
  {
    type: 'h2',
    text: 'Research frontiers: regeneration, sensors, and artificial tongues'
  },
  {
    type: 'p',
    text:
      'Active research areas include taste-receptor pharmacology and genetics, regeneration of lingual tissue after cancer resections, neural control of fine tongue movements (implications for speech prostheses), and engineered "electronic tongues" (sensor arrays that mimic taste detection for food quality control). Studies of extreme animal tongues inspire bioinspired adhesives and soft-robotic grasping.'
  },

  // H2 - Conservation and welfare issues (animal tongues)
  {
    type: 'h2',
    text: 'Conservation and welfare: human impacts and ethical considerations'
  },
  {
    type: 'p',
    text:
      'Understanding tongue function in wild species informs welfare and conservation — e.g., injurious mouth trauma, loss of prey species affecting tongue-specialist feeders, and the ethics of harvesting tongues for food or tradition. Rehabilitation of injured tongues is complex and has welfare implications for feeding and survival in the wild.'
  },

  // H2 - Practical tips: oral care, taste testing, and healthy tongues
  {
    type: 'h2',
    text: 'Practical tips: maintaining a healthy tongue and testing taste'
  },
  {
    type: 'p',
    text:
      'Good oral hygiene includes gentle tongue cleaning (if indicated), hydration to maintain mucosal health, avoiding irritants (excessive alcohol, tobacco), and seeking professional care for persistent pain, lesions, or changes in taste. Simple home taste tests (salt, sweet, sour, bitter stimuli at safe concentrations) can help detect gross taste deficits but do not replace clinical assessment.'
  },

  // H2 - Frequently asked questions (FAQs)
  {
    type: 'h2',
    text: 'Frequently asked questions (FAQs)'
  },
  {
    type: 'p',
    text:
      'Q: Why does the tongue sometimes change color? A: Color changes can reflect benign conditions (coating, dehydration), inflammatory states, infection, or, rarely, systemic disease; persistent abnormal coloration merits clinical evaluation. Q: Can the tongue regenerate? A: Small mucosal injuries heal well; major tissue loss requires surgical reconstruction. Q: Are taste buds permanent? A: Taste buds turnover regularly; some conditions reduce taste bud density leading to altered taste perception.'
  },

  // H2 - Glossary of key terms
  {
    type: 'h2',
    text: 'Glossary'
  },
  {
    type: 'p',
    text:
      'Papillae — epithelial projections on the tongue surface; Myrmecophagy — insect-eating; Basihyal — tongue-supporting structure in fishes and some amphibians; Vomeronasal organ (Jacobson\'s organ) — accessory chemosensory organ often sampled by tongue flicking in some vertebrates; Ankyloglossia — tongue-tie; Gustation — sense of taste.'
  },

  // Closing summary
  {
    type: 'p',
    text:
      'Summary: The tongue is a multifunctional organ whose structure and capabilities reflect ecological niche, evolutionary history, and behavioral needs. From human speech to chameleon ballistics, and from a cat\'s grooming rasp to a frog\'s adhesive strike, tongues reveal how form and function co-evolve. Understanding tongues draws on anatomy, neuroscience, molecular biology, ecology, and cultural study—making the tongue an ideal subject for interdisciplinary exploration.'
  }
];

// Register content if the host page provides the registration function
if (typeof window.registerArticleContent === 'function') {
  window.registerArticleContent('tongue.js', tongue_content);
}
