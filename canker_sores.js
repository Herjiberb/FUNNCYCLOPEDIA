// 📄 canker_sores.js
/**
 * Structured content for "Canker Sores (Aphthous Ulcers): A Complete Guide"
 * Format matches the android_history.js style: an array of content objects
 * that can be registered with window.registerArticleContent(fileName, contentArray).
 *
 * Note: This content is intended for educational/informational use only and
 * is not a substitute for professional medical advice.
 */

const canker_sore_content = [
  // Title block
  {
    type: 'p',
    text: 'CANKER SORES (APHINOUS ULCERS): A COMPLETE, PRACTICAL, AND EVIDENCE-BASED GUIDE',
    style: {
      fontWeight: '800',
      color: '#0077B6', // calm medical blue
      fontSize: '1.6rem',
      textAlign: 'center',
      marginBottom: '1.2rem'
    }
  },

  // Short intro
  {
    type: 'p',
    text:
      'Canker sores — medically called aphthous ulcers — are small, painful ulcers that appear on the soft tissues inside the mouth. They are common, usually benign, and typically heal on their own within days to weeks. This page explains what they are, why they happen, how to treat them (at home and with medical care), how to prevent recurrences, and when to see a clinician.'
  },

  // Quick facts (bullet-style paragraph)
  {
    type: 'p',
    text:
      'Quick facts: Noncontagious · Can be single or multiple · Usually heal in 1–3 weeks · Three main clinical types (minor, major, herpetiform) · Triggers include minor trauma, certain foods, nutritional deficiencies, and stress. See full sections below for details and practical tips.'
  },

  // H2 - What is a canker sore?
  {
    type: 'h2',
    text: 'What is a canker sore?'
  },
  {
    type: 'p',
    text:
      'A canker sore (aphthous ulcer) is a small, shallow lesion of the oral mucosa. They are typically round or oval with a grayish-white or yellow center and a surrounding red halo. Unlike cold sores (herpes labialis), canker sores occur inside the mouth and are not caused by the herpes simplex virus; they are not contagious.'
  },

  // H2 - Types and clinical classification
  {
    type: 'h2',
    text: 'Types and clinical classification'
  },
  {
    type: 'table',
    data: {
      headers: ['Type', 'Size & appearance', 'Typical duration', 'Clinical notes'],
      rows: [
        [
          'Minor aphthous ulcers (most common)',
          'Small (<1 cm), shallow, single or few',
          '7–14 days',
          'Heal without scarring; the majority of cases.'
        ],
        [
          'Major aphthous ulcers (Sutton disease)',
          'Larger (>1 cm), deeper, may be painful',
          'Weeks to months',
          'May scar; can be recurrent and more disabling.'
        ],
        [
          'Herpetiform aphthous ulcers',
          'Many tiny (pencil-eraser) ulcers, often cluster',
          '1–2 weeks (clusters may recur)',
          'Not caused by herpes virus despite the name; can coalesce into larger ulcers.'
        ]
      ]
    }
  },

  // H2 - How common are they?
  {
    type: 'h2',
    text: 'Epidemiology — how common are canker sores?'
  },
  {
    type: 'p',
    text:
      'Estimates vary by population and study method, but recurrent aphthous stomatitis (RAS) affects a substantial minority of people worldwide. Reported prevalence ranges widely (several percent up to around a quarter of people in some studies), with many first experiencing them in adolescence or young adulthood.'
  },

  // H2 - Causes and triggers
  {
    type: 'h2',
    text: 'Causes and triggers'
  },
  {
    type: 'p',
    text:
      'The exact cause of canker sores is unknown, but they are thought to result from a localized breakdown of the mucosal lining triggered by multiple factors. Commonly identified triggers include: minor injury (biting, dental work), certain foods (acidic or spicy foods, nuts, chocolate), oral products containing sodium lauryl sulfate (SLS), nutritional deficiencies (vitamin B12, folate, iron, zinc), hormonal changes, stress, and systemic diseases. Genetic predisposition plays a role for many people who experience recurrent episodes.'
  },

  // Dropdown: deeper causes (immune, systemic associations)
  {
    type: 'dropdown',
    toggleText: 'Immune system and systemic disease associations (expanded)',
    contentHTML: `
      <p>Although most cases are isolated and benign, recurrent or severe aphthous ulcers can be associated with systemic conditions such as:</p>
      <ul>
        <li><strong>Behçet’s disease</strong> — recurrent oral and genital ulcers plus systemic inflammation.</li>
        <li><strong>Inflammatory bowel disease</strong> (Crohn’s disease, ulcerative colitis) — oral ulcers can precede or accompany intestinal symptoms.</li>
        <li><strong>Celiac disease</strong> — may present with recurrent mouth ulcers in some patients.</li>
        <li><strong>Hematologic deficiencies</strong> — low iron, vitamin B12, or folate are linked to increased risk.</li>
        <li><strong>Drug reactions</strong> — various medications have been reported to cause oral ulceration in susceptible individuals.</li>
      </ul>
      <p>If ulcers are unusually severe, persistent, or accompanied by systemic symptoms (fever, joint pain, GI complaints), evaluation for underlying disease is recommended.</p>
    `
  },

  // H2 - Symptoms & clinical presentation
  {
    type: 'h2',
    text: 'Symptoms & clinical presentation'
  },
  {
    type: 'p',
    text:
      'Common symptoms include: a burning or tingling sensation before the ulcer appears; a painful round or ovoid ulcer with a white/gray center and red border; pain that interferes with eating, speaking, and oral hygiene. Single or multiple sores may occur; onset can be sudden and recurring in cycles for those with RAS.'
  },

  // H2 - Diagnosis and differential diagnosis
  {
    type: 'h2',
    text: 'Diagnosis and differential diagnosis'
  },
  {
    type: 'p',
    text:
      'Diagnosis is usually clinical based on the appearance and location of ulcers. Most canker sores are diagnosed without testing. If ulcers are atypical (persisting beyond a typical healing time, unusually large, or suspicious for malignancy), clinicians may biopsy or order blood tests for nutritional deficiencies or inflammatory conditions. Important conditions to distinguish from canker sores include cold sores (HSV), traumatic ulcers, aphthous-like ulcers from systemic disease (Behçet’s, IBD), and, rarely, oral cancer when a non-healing lesion is present.'
  },

  // H2 - Home care and practical first-aid
  {
    type: 'h2',
    text: 'First-line home care (what you can do today)'
  },
  {
    type: 'p',
    text:
      'Most canker sores improve with simple self-care measures that reduce pain and keep the mouth clean: gentle toothbrushing with a soft brush, avoiding SLS-containing toothpastes if you suspect sensitivity, limiting acidic/spicy foods, and using bland rinses. Several inexpensive rinses and topical applications can reduce discomfort and may speed healing slightly.'
  },

  // Dropdown: practical recipes & usage (salt rinse, baking soda, milk of magnesia)
  {
    type: 'dropdown',
    toggleText: 'Practical rinses and topical options (how-to)',
    contentHTML: `
      <ol>
        <li><strong>Salt-water rinse:</strong> Dissolve 1/2–1 teaspoon of salt in 1 cup (240 mL) of warm water. Swish gently for 15–30 seconds, then spit. Repeat 2–4 times daily to keep the area clean.</li>
        <li><strong>Baking soda rinse:</strong> Dissolve 1 teaspoon baking soda in 1/2 cup warm water to help neutralize acids and soothe the ulcer.</li>
        <li><strong>Milk of magnesia:</strong> Dab a small amount directly on the sore 2–4 times daily — it can coat and soothe the ulcer.</li>
        <li><strong>Topical protective pastes:</strong> Over-the-counter benzocaine-containing gels or protective pastes can be applied before meals to reduce pain.</li>
        <li><strong>Avoid:</strong> Alcohol-based mouthwashes and very acidic home remedies; if using hydrogen peroxide (dilute) or similar agents, apply carefully and briefly as they may sting.</li>
      </ol>
    `
  },

  // Table: OTC & home options summary
  {
    type: 'table',
    data: {
      headers: ['Option', 'How it helps', 'Usage notes'],
      rows: [
        ['Salt-water rinse', 'Cleansing; mild antiseptic', 'Safe, repeat multiple times daily'],
        ['Baking soda rinse', 'Neutralizes acids; soothes', 'Good alternative to salt rinse'],
        ['Milk of magnesia (topical)', 'Coating/protective effect', 'Apply directly several times daily'],
        ['Topical analgesic gels (benzocaine)', 'Immediate pain relief', 'Follow product instructions; short-term use'],
        ['Protective pastes (carboxymethylcellulose)', 'Barrier to reduce irritation', 'Apply before meals to reduce friction']
      ]
    }
  },

  // H2 - Medical treatments (when OTC/home is not enough)
  {
    type: 'h2',
    text: 'Medical treatments — what clinicians commonly use'
  },
  {
    type: 'p',
    text:
      'For moderate to severe ulcers or frequent recurrence, clinicians may prescribe topical corticosteroids (e.g., triamcinolone dental paste, steroid mouth rinses, or steroid buccal tablets) to reduce inflammation and speed healing. Antimicrobial mouthwashes (chlorhexidine) may be used to limit secondary infection and help comfort. In refractory or severe cases, systemic therapy (oral steroids or other immunomodulatory agents) can be considered under specialist supervision.'
  },

  // Table: medical options
  {
    type: 'table',
    data: {
      headers: ['Treatment', 'Effect', 'When used / notes'],
      rows: [
        [
          'Topical corticosteroid paste (e.g., triamcinolone acetonide)',
          'Reduces local inflammation and pain; speeds healing',
          'First-line for troublesome recurrent or painful ulcers; apply as directed by clinician'
        ],
        [
          'Steroid mouthwash / buccal tablets (hydrocortisone, dexamethasone formulations)',
          'Anti-inflammatory with mucosal contact',
          'Used for larger or multiple sites; requires prescription'
        ],
        [
          'Chlorhexidine mouthwash',
          'Reduces secondary infection and bacterial load',
          'Often adjunctive; limited duration advised'
        ],
        [
          'Systemic corticosteroids or immunomodulators',
          'For severe, refractory, or disabling RAS',
          'Reserved for specialist-managed cases due to side effects'
        ],
        [
          'Cautery / chemical cauterization (e.g., Debacterol)',
          'Local lesion destruction to reduce pain and speed closure',
          'Some clinicians offer for rapid pain relief; techniques vary'
        ]
      ]
    }
  },

  // H2 - Prevention & long-term management
  {
    type: 'h2',
    text: 'Prevention and long-term management'
  },
  {
    type: 'p',
    text:
      'For people with recurrent episodes, strategies that may reduce frequency or severity include identifying and avoiding personal triggers (specific foods, SLS toothpastes), correcting nutritional deficiencies (testing and treating low B12, iron, folate, zinc), maintaining good oral hygiene, and managing stress. A clinician can help design a targeted prevention plan if episodes are frequent or disabling.'
  },

  // Dropdown: supplements and evidence (B12, iron, folate, zinc)
  {
    type: 'dropdown',
    toggleText: 'Nutritional supplements — what the evidence suggests',
    contentHTML: `
      <p>Deficiencies in vitamin B12, iron, and folate have been linked to recurrent ulcers in some patients. Supplementation in confirmed deficiency states can reduce recurrence risk. Empiric supplementation without testing is common in practice but consultation and testing are preferable when ulcers are recurrent.</p>
    `
  },

  // H2 - Complications and when to see a clinician
  {
    type: 'h2',
    text: 'Complications and when to see a clinician'
  },
  {
    type: 'p',
    text:
      'Complications are uncommon but can include severe pain that prevents adequate eating or hydration, secondary bacterial infection, and scarring after very large ulcers. See a clinician if ulcers are unusually large or painful, persist longer than two weeks, are accompanied by fever or systemic symptoms, recur very frequently, or if any oral sore fails to heal (to exclude other causes such as malignancy).'
  },

  // H2 - Differential diagnoses (quick reference)
  {
    type: 'h2',
    text: 'Differential diagnoses (what it might not be)'
  },
  {
    type: 'table',
    data: {
      headers: ['Condition', 'Key distinguishing features'],
      rows: [
        ['Herpes labialis (cold sores)', 'Usually on lips/outside, caused by HSV; often clear blisters before crusting.'],
        ['Traumatic ulcer', 'History of definite trauma (sharp tooth, denture), often single and at site of injury.'],
        ['Oral candidiasis', 'White plaques that can often be scraped off with erythamatous base.'],
        ['Oral cancer', 'Persistent, non-healing ulcer; indurated margins; check if >2–3 weeks or growing.'],
        ['Behçet’s disease', 'Recurrent oral and genital ulcers with systemic inflammation; requires specialist evaluation.']
      ]
    }
  },

  // H2 - Special populations: children, pregnancy, immunocompromised
  {
    type: 'h2',
    text: 'Special populations'
  },
  {
    type: 'p',
    text:
      'Children and adolescents commonly develop canker sores. Pregnant people may notice changes in frequency related to hormonal shifts; treatment choices should weigh safety in pregnancy. Immunocompromised patients (e.g., HIV, chemotherapy) may experience more severe or atypical ulceration and should be evaluated by their care team.'
  },

  // H2 - Practical tips for daily life
  {
    type: 'h2',
    text: 'Practical tips for daily life'
  },
  {
    type: 'p',
    text:
      'Eat soft, bland foods while sore; avoid crisps, citrus, and spicy dishes that sting. Use a soft toothbrush and consider SLS-free toothpaste. Sucking on ice chips can temporarily reduce pain. When applying topical medication, dry the area first with a clean gauze to help the paste adhere.'
  },

  // H2 - Myths & FAQs
  {
    type: 'h2',
    text: 'Common myths & quick FAQ'
  },
  {
    type: 'p',
    text:
      'Q: Are canker sores contagious? A: No — they are not contagious. Q: Do cold sores cause canker sores? A: No — cold sores are caused by HSV and usually appear on the lip skin, while canker sores are inside the mouth. Q: Will popping or “lancing” a sore help? A: No — do not cut or lance ulcers; infection and scarring can result.'
  },

  // H2 - When to worry: red flags
  {
    type: 'h2',
    text: 'Red flags — see a clinician urgently if:'
  },
  {
    type: 'p',
    text:
      'Ulcers that do not heal within two weeks, rapidly enlarging lesions, systemic symptoms (fever, joint pain), difficulty breathing or swallowing, severe dehydration from inability to eat/drink, or multiple concurrent concerning signs warrant prompt evaluation.'
  },

  // H2 - Simple clinical workflow for clinicians (short)
  {
    type: 'h2',
    text: 'Simple clinical workflow (for quick use)'
  },
  {
    type: 'p',
    text:
      'History: onset, duration, recurrence, associated systemic symptoms, family history, triggers, medication review. Exam: lesion size, number, location, base and border character. Basic labs if recurrent/severe: CBC, iron studies, B12, folate. Management: start conservative care -> topical corticosteroids or antimicrobial rinse if moderate -> consider systemic therapy or referral for severe/refractory disease.'
  },

  // H2 - Research and ongoing questions
  {
    type: 'h2',
    text: 'Research and ongoing questions'
  },
  {
    type: 'p',
    text:
      'Active research seeks to clarify immune mechanisms behind RAS, the role of the oral microbiome, and the most effective long-term preventive strategies. Newer topical delivery systems and better-targeted immunomodulators are being investigated for severe, treatment-resistant cases.'
  },

  // Closing paragraph
  {
    type: 'p',
    text:
      'Summary: Canker sores are a common and usually self-limited oral condition. With correct self-care, many heal quickly; for recurrent, severe, or atypical cases, evaluation and targeted treatment by a clinician are appropriate. Maintaining good oral hygiene and addressing identifiable triggers or nutritional deficiencies reduces the burden for many individuals.'
  },

  // References pointer (displayed in-page; detailed citations provided after the code block)
  {
    type: 'p',
    text:
      'References and further reading are provided below. If you want this page converted into a printable HTML article or a one-page PDF with the same design, tell me which format you prefer and I will generate it.'
  }
];

// Register content if the page supports it
if (typeof window.registerArticleContent === 'function') {
  window.registerArticleContent('canker_sores.js', canker_sore_content);
}
