// 📄 dog_animal.js
/**
 * Structured content for "Dog — A Comprehensive Guide"
 * Matches the android_history.js / cats.js style: an array of content objects
 * that can be registered with window.registerArticleContent(fileName, contentArray).
 *
 * This is a long, factual, and responsibly framed resource covering:
 * - natural history & domestication
 * - breed diversity & classification
 * - genetics & responsible breeding fundamentals
 * - reproduction, whelping, and neonatal care
 * - behavior, cognition, and training basics
 * - health, nutrition, and preventive care
 * - working roles, conservation, and societal impact
 * - ethical breeding, population control, and adoption pathways
 *
 * Intended for general educational use — not a substitute for veterinary or legal advice.
 */

const dog_content = [
  // Title
  {
    type: 'p',
    text: 'DOG — A COMPREHENSIVE GUIDE: HISTORY, BREEDS, BREEDING FACTS, CARE, AND CULTURE',
    style: {
      fontWeight: '900',
      color: '#2B7A78', // teal/forest tone
      fontSize: '1.7rem',
      textAlign: 'center',
      marginBottom: '1.2rem'
    }
  },

  // Intro
  {
    type: 'p',
    text:
      'Dogs (Canis lupus familiaris) are one of humanity’s oldest and most varied domesticated species. This guide brings together evidence-based information on their natural history, domestication, breed diversity, genetics and breeding practices, reproductive biology, puppy care, behavior and cognition, health and nutrition, training and enrichment, working and service roles, conservation and ethical considerations, and practical resources for owners and breeders.'
  },

  // Quick facts
  {
    type: 'p',
    text:
      'Quick facts: Domestic dog is a subspecies of the gray wolf (Canis lupus) domesticated at least 10,000–20,000 years ago; extreme morphological diversity (toy to giant breeds); lifespan typically 10–15 years (breed-dependent); social, highly trainable, and adapted to cooperate with humans.'
  },

  // H2 - Natural history & domestication
  {
    type: 'h2',
    text: 'Natural history & domestication'
  },
  {
    type: 'p',
    text:
      'Dogs descended from gray wolves, with multiple lines of genetic evidence showing early domestication events in Eurasia. Domestication is thought to have been a lengthy, mutually beneficial process (commensal pathway) in which wolves tolerant of humans scavenged near settlements, and over generations became more socialized and beneficial to human communities (rodent control, hunting partners, guarding). Archaeological and genomic data place domestication at least 10,000 years ago, and perhaps substantially earlier in multiple regions.'
  },

  // Dropdown: domestication timeline and evidence
  {
    type: 'dropdown',
    toggleText: 'Domestication timeline & major evidence',
    contentHTML: `
      <ol>
        <li><strong>Archaeological remains:</strong> Ancient dog-like remains associated with human burials dated >10,000 years ago.</li>
        <li><strong>Genomic studies:</strong> Show divergence between wolves and dogs, regional population structure, and multiple ancestral contributions.</li>
        <li><strong>Behavioral evidence:</strong> Dogs display unique social cognition tuned to humans (gaze following, reading gestures) not seen in wolves raised similarly to dogs.</li>
      </ol>
    `
  },

  // H2 - Taxonomy and modern classification
  {
    type: 'h2',
    text: 'Taxonomy & modern classification'
  },
  {
    type: 'p',
    text:
      'Scientific name: Canis lupus familiaris (commonly treated as a domestic subspecies of the gray wolf) or sometimes Canis familiaris in older literature. Official breed recognition and classification are managed by kennel clubs and registries (AKC, FCI, KC, CKC, etc.), which group breeds into functional or morphological categories (herding, hounds, working, terriers, toy, non-sporting, sporting, and utility groups).'
  },

  // Table: Common kennel club groupings (example)
  {
    type: 'table',
    data: {
      headers: ['Group (example)', 'Typical breeds / function'],
      rows: [
        ['Herding', 'Border Collie, Australian Shepherd — bred to control livestock.'],
        ['Hound', 'Beagle, Greyhound — bred for scent or sight hunting.'],
        ['Working', 'German Shepherd, Saint Bernard — sledding, guarding, draft.'],
        ['Sporting', 'Labrador Retriever, Spaniels — upland game and waterfowl retrieval.'],
        ['Terrier', 'Jack Russell, Airedale — vermin control.'],
        ['Toy', 'Chihuahua, Pomeranian — companion-focused small breeds.'],
        ['Non-sporting', 'Bulldog, Dalmatian — diverse roles/appearance.']
      ]
    }
  },

  // H2 - Breed diversity & morphological extremes
  {
    type: 'h2',
    text: 'Breed diversity & morphological extremes'
  },
  {
    type: 'p',
    text:
      'Selective breeding over centuries has produced enormous variation in size, skull shape, coat type, and behavior. This diversity is a product of strong artificial selection for function (herding, hunting, guarding), aesthetics (coat color, body shape), and temperament. Some extreme features (e.g., brachycephalic short faces, extremely flat skulls, dwarfism in some breeds) can carry inherited health risks.'
  },

  // H2 - Genetics: coat, size, and hereditary conditions
  {
    type: 'h2',
    text: 'Genetics: coat, size, and hereditary conditions'
  },
  {
    type: 'p',
    text:
      'Key genetic mechanisms shape common traits: single-locus mutations (e.g., certain coat colors), polygenic control for size and behavior, and known disease-associated variants (e.g., for hip dysplasia, cardiac disease, epilepsy). Modern genetic testing panels can screen for many breed-specific mutations, helping breeders make informed mating decisions and reduce disease incidence.'
  },

  // Dropdown: typical genetic topics breeders should consider
  {
    type: 'dropdown',
    toggleText: 'Genetic topics of practical importance for breeders',
    contentHTML: `
      <ul>
        <li><strong>Pedigree analysis:</strong> track ancestry to avoid close inbreeding.</li>
        <li><strong>Health testing:</strong> utilize DNA panels for known monogenic disorders and perform clinical screening for polygenic conditions.</li>
        <li><strong>Effective population size:</strong> maintain genetic diversity to reduce inherited disease and preserve vigor.</li>
      </ul>
    `
  },

  // H2 - Responsible breeding fundamentals
  {
    type: 'h2',
    text: 'Responsible breeding fundamentals'
  },
  {
    type: 'p',
    text:
      'Responsible breeding prioritizes health, temperament, genetic diversity, and the welfare of both parents and offspring. Core practices include: health screening (hips, elbows, cardiac exams, eye tests, genetic tests as appropriate), avoiding harmful linebreeding and consanguinity, delaying first breeding until physical and behavioral maturity, ensuring proper prenatal and neonatal care, and providing socialization and pre-adoption veterinary care for puppies.'
  },

  // Table: common health screens by breed or concern
  {
    type: 'table',
    data: {
      headers: ['Condition / system', 'Screening method / notes'],
      rows: [
        ['Hip dysplasia', 'Radiographic evaluation (OFA, PennHIP) in large breeds.'],
        ['Elbow dysplasia', 'Orthopedic radiographs and specialist assessment.'],
        ['Cardiac disease (HCM, DCM, etc.)', 'Cardiac auscultation; echo by cardiologist when indicated.'],
        ['Eye disease', 'BAER/ophthalmologic exams for hereditary eye conditions.'],
        ['Inherited single-gene disorders', 'DNA tests available for many breed-specific variants.']
      ]
    }
  },

  // H2 - Reproductive biology & practical breeding facts
  {
    type: 'h2',
    text: 'Reproductive biology & practical breeding facts'
  },
  {
    type: 'p',
    text:
      'Female dogs (bitches) are monoestrous seasonally variable — most have two heat cycles per year on average (but timing can vary by breed and individual). Estrus typically lasts ~7–10 days, with ovulation occurring early-mid cycle. Gestation averages 63 days from ovulation (about 58–68 days from breeding). Litter sizes vary widely by breed (small breeds often 1–4, larger breeds often 6–12).'
  },

  // Table: reproductive timeline & key management points
  {
    type: 'table',
    data: {
      headers: ['Event', 'Typical timings / management'],
      rows: [
        ['Puberty / sexual maturity', 'Small breeds ~6–10 months; large breeds may be 12–24 months.'],
        ['Heat cycle (proestrus/estrus)', 'Average every 6 months; variability common.'],
        ['Optimal breeding age', 'Many breeders wait until physical maturity (often >1 year, breed-dependent).'],
        ['Gestation', '~63 days (range 58–68).'],
        ['Weaning', 'Puppies often begin weaning 3–4 weeks; full wean by 6–8 weeks (varies by program and welfare standards).']
      ]
    }
  },

  // H2 - Whelping & neonatal care
  {
    type: 'h2',
    text: 'Whelping, neonatal care & puppy development'
  },
  {
    type: 'p',
    text:
      'Whelping (giving birth) requires preparation: clean, quiet whelping area, supplies (clean towels, warm area, thermometers), and a plan for veterinary assistance if dystocia occurs. Newborn puppies are altricial, reliant on the bitch for warmth and nutrition. Key neonatal care tasks: ensure colostrum intake in first 24 hours, monitor weight gain daily, maintain thermal environment, and begin gentle socialization at the appropriate ages. Veterinary checks and appropriate deworming/vaccination schedules should be followed.'
  },

  // Dropdown: neonatal checklist for breeders
  {
    type: 'dropdown',
    toggleText: 'Whelping & neonatal checklist (practical essentials)',
    contentHTML: `
      <ol>
        <li>Prepare a safe, draft-free whelping box and sanitize tools.</li>
        <li>Have veterinary contact ready and evaluate the dam pre-whelping.</li>
        <li>Confirm puppies nurse and receive colostrum within first hours.</li>
        <li>Record puppy weights daily; investigate failure to gain immediately.</li>
        <li>Implement vaccination and deworming schedule per veterinarian guidance (commonly first vaccine 6–8 weeks with boosters).</li>
      </ol>
    `
  },

  // H2 - Behavior, socialization & training
  {
    type: 'h2',
    text: 'Behavior, socialization & training basics'
  },
  {
    type: 'p',
      text:
      'Dogs are social, highly trainable animals. Early socialization (3–14 weeks critical window) and positive reinforcement-based training shape confident, adaptable pets. Training fundamentals include house-training, basic cues (sit, stay, come), leash manners, and habituation to common stimuli. Problem behaviors (fear, aggression, separation anxiety) benefit from early identification and a behavior-modification plan often with a certified trainer or veterinary behaviorist.'
  },

  // H2 - Cognition & communication
  {
    type: 'h2',
    text: 'Cognition & communication'
  },
  {
    type: 'p',
    text:
      'Dogs excel at social cognition: they follow human pointing and gaze, can learn many vocal cues and gestures, and form strong affiliative bonds with humans and conspecifics. Communication uses body language, vocalization, facial expressions, and scent. Owners benefit from learning species-typical signals (calming signals, play bows, tail posture) to respond appropriately and reduce conflict.'
  },

  // H2 - Health: preventive care & common conditions
  {
    type: 'h2',
    text: 'Health: preventive care & common conditions'
  },
  {
    type: 'p',
    text:
      'Preventive care includes core vaccinations (distemper, parvovirus, adenovirus, rabies per local law), parasite control (fleas, ticks, intestinal worms), dental care, spay/neuter (as appropriate), regular wellness exams, and breed-specific screening. Common health problems include dental disease, obesity, hip/elbow dysplasia, certain cardiac and endocrine diseases, allergies, and breed-specific inherited disorders.'
  },

  // Table: common health issues and prevention
  {
    type: 'table',
    data: {
      headers: ['Condition', 'Prevention / monitoring'],
      rows: [
        ['Dental disease', 'Regular dental checks, home dental care, professional cleaning as needed.'],
        ['Obesity', 'Balanced diet, portion control, exercise to prevent metabolic and orthopedic problems.'],
        ['Hip dysplasia', 'Genetic screening, weight management, appropriate exercise in growth period.'],
        ['Parvovirus', 'Vaccination protocols, avoid exposure in unvaccinated puppies.'],
        ['Tick-borne disease', 'Preventive tick protection and monitoring, remove ticks promptly.']
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
      'Dogs are omnivores with nutritional needs that can be met with commercially formulated complete diets appropriate to life stage (puppy, adult, senior), activity level, and health conditions. High-quality protein, balanced fats, vitamins, and minerals are essential. Avoid feeding toxic human foods (chocolate, xylitol, grapes/raisins, some nuts, onions/garlic) and consult a veterinarian before major diet changes or supplements.'
  },

  // Dropdown: life-stage feeding highlights
  {
    type: 'dropdown',
    toggleText: 'Feeding highlights by life stage',
    contentHTML: `
      <ul>
        <li><strong>Puppies:</strong> energy-dense growth diets, multiple small meals, monitor growth rates.</li>
        <li><strong>Adults:</strong> maintenance diets matched to activity level; prevent weight gain.</li>
        <li><strong>Seniors:</strong> monitors for weight loss, joint-support nutrients, dental-friendly textures.</li>
        <li><strong>Working dogs:</strong> higher-calorie and electrolyte-focused plans for intense activity.</li>
      </ul>
    `
  },

  // H2 - Training methods & welfare-friendly approaches
  {
    type: 'h2',
    text: 'Training methods & welfare-friendly approaches'
  },
  {
    type: 'p',
    text:
      'Modern evidence supports positive reinforcement (reward-based) training as effective and welfare-friendly. Aversive techniques (pain, fear, or intimidation) risk creating fear, aggression, and welfare harm. Seek certified trainers or accredited behaviorists for complex behavior issues, and use consistent, humane principles when shaping behavior.'
  },

  // H2 - Working dogs & service roles
  {
    type: 'h2',
    text: 'Working dogs, service roles, and human benefits'
  },
  {
    type: 'p',
    text:
      'Dogs perform many essential societal roles: guide dogs for people who are blind, hearing dogs, medical-alert and seizure-alert dogs, therapy dogs, police and military roles, search-and-rescue, herding, and conservation detection (wildlife, invasive species). Proper selection, training, and welfare oversight maximize both effectiveness and animal well-being.'
  },

  // H2 - Population control, shelters, and adoption
  {
    type: 'h2',
    text: 'Population control, shelters, and adoption'
  },
  {
    type: 'p',
    text:
      'Spay/neuter programs, public education, and responsible ownership reduce shelter intake and euthanasia rates. Shelters provide critical rehoming, but many regions still face overpopulation challenges. Ethical adoption practices include screening for suitable homes, post-adoption support, and community programs that assist owners to retain pets (behavior help, medical aid) instead of relinquishment.'
  },

  // H2 - Ethical breeding, welfare, and regulatory considerations
  {
    type: 'h2',
    text: 'Ethical breeding, welfare, and regulation'
  },
  {
    type: 'p',
    text:
      'Ethical breeding rejects practices that prioritize extreme aesthetics over health (e.g., very flat faces that impair breathing, exaggerated skin folds that promote infection). Regulatory frameworks (licensing, breeder inspections, animal-welfare laws) vary by jurisdiction; responsible breeders comply with laws, provide health guarantees, and place puppies into appropriate homes. Transparency, return policies, and lifetime support are considered hallmarks of reputable programs.'
  },

  // H2 - Conservation & ecological interactions
  {
    type: 'h2',
    text: 'Conservation & ecological interactions'
  },
  {
    type: 'p',
    text:
      'Free-roaming dogs can impact wildlife (predation, disease transmission) and livestock in some areas. Conservation programs must balance community needs, humane population control (vaccination, sterilization), and wildlife protection. In some contexts, community dog management and vaccination campaigns have reduced rabies and improved public health while respecting local livelihoods.'
  },

  // H2 - Public health intersections
  {
    type: 'h2',
    text: 'Public health intersections'
  },
  {
    type: 'p',
    text:
      'Key concerns include rabies (controlled in many countries through vaccination), bite prevention and safe interactions, zoonotic parasites, and safe handling of sick animals. Public education, vaccination campaigns, and proper veterinary care are central to minimizing risks while maintaining the human benefits of dog companionship.'
  },

  // H2 - Myths & facts about dogs
  {
    type: 'h2',
    text: 'Common myths & facts'
  },
  {
    type: 'p',
    text:
      'Myth: A wagging tail always means a friendly dog. Fact: Tail wagging can indicate many emotions; consider whole-body language. Myth: Older dogs cannot learn. Fact: dogs retain learning capacity throughout life with appropriate motivation and methods. Myth: A dominant pack leader approach is necessary. Fact: cooperative, reward-based approaches yield better welfare and sustainable behavior change.'
  },

  // H2 - FAQs
  {
    type: 'h2',
    text: 'FAQs'
  },
  {
    type: 'p',
    text:
      'Q: How long do dogs live? A: Lifespan varies by breed and size but often ranges 8–16 years; smaller breeds typically live longer. Q: Is it OK to breed my dog? A: Only with careful consideration of health, genetics, and lifetime plans for offspring — consult veterinary and breed club guidance. Q: When should puppies be rehomed? A: Ethical programs usually keep puppies until at least 8 weeks of age, with many recommending 10–12 weeks for optimal socialization and health.'
  },

  // H2 - Resources & next steps
  {
    type: 'h2',
    text: 'Resources & next steps'
  },
  {
    type: 'p',
    text:
      'For deeper study: consult veterinary textbooks, peer-reviewed journals on canine health and genetics, breed-club resources for breed-specific guidance, certified training organizations (e.g., APDT, CCPDT), and local animal-welfare groups. If you plan to breed, work with a veterinarian and experienced, ethical breeders to implement health screening and a documented care plan.'
  },

  // Closing summary
  {
    type: 'p',
    text:
      'Summary: Dogs are biologically complex, behaviorally flexible, and culturally important animals. Responsible ownership and breeding require knowledge of genetics, health screening, nutrition, enrichment, and humane training. Whether your interest is scientific, practical (care and breeding), or cultural, prioritizing welfare and evidence-based practices ensures better outcomes for dogs and people alike.'
  },
];

// Register content if the host page provides the registration function
if (typeof window.registerArticleContent === 'function') {
  window.registerArticleContent('dog_animal.js', dog_content);
}
