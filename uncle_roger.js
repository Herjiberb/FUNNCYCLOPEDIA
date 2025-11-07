// 📄 uncle_roger.js
/**
 * Structured content for "Uncle Roger (Nigel Ng) — Deep Profile"
 * Style: matches previous article modules — an array of structured content objects
 * (type: 'p', 'h2', 'table', 'dropdown', etc.). This JS contains ONLY content objects;
 * no follow-up offers, queries, or external references are embedded inside the module.
 *
 * Use: window.registerArticleContent('uncle_roger.js', uncle_roger_content)
 */

const uncle_roger_content = [
  // Title
  {
    type: 'p',
    text: 'UNCLE ROGER (NIGEL NG) — A DEEP, PRACTICAL, AND NUANCED PROFILE',
    style: {
      fontWeight: '900',
      color: '#E36C09', // bright orange, character energy
      fontSize: '1.7rem',
      textAlign: 'center',
      marginBottom: '1.2rem'
    }
  },

  // Intro
  {
    type: 'p',
    text:
      'Uncle Roger is the signature alter-ego of Malaysian-born comedian Nigel Ng. The character — a caricatured middle-aged Asian uncle with a strong Cantonese-flavored persona — exploded to global prominence for funny, sharply edited reaction videos to non-Asian attempts at cooking classic Asian dishes, most famously egg fried rice. This long-form profile covers Nigel Ng’s biography and career, the origins and mechanics of Uncle Roger, the viral videos and follow-ups, signature catchphrases (like "Haiyah" and "Fuiyoh"), live performance and business ventures, criticism and controversies, cultural impact, and a timeline of major milestones.'
  },

  // Quick facts
  {
    type: 'p',
    text:
      'Quick facts: Nigel Ng is a Malaysian-born stand-up comedian and content creator who developed the Uncle Roger persona on social platforms; the character became viral through reaction videos critiquing cooking videos and has since expanded into podcasts, live shows, brand partnerships, and other content formats.'
  },

  // H2 - Nigel Ng: a short biography
  {
    type: 'h2',
    text: 'Nigel Ng — a short biography'
  },
  {
    type: 'p',
    text:
      'Nigel Ng was born in Kuala Lumpur and later studied overseas before launching a comedy career. He originally performed stand-up and created content across platforms before creating Uncle Roger. His career spans stand-up specials, podcasts, YouTube series, and international touring under both his own name and the Uncle Roger persona.'
  },

  // H2 - The creation of Uncle Roger: concept & early development
  {
    type: 'h2',
    text: 'The creation of Uncle Roger: concept & early development'
  },
  {
    type: 'p',
    text:
      'Uncle Roger is a fictionalized “middle-aged Chinese uncle” persona co-developed with friends and collaborators as a sketch/comedy vehicle. The character exaggerates certain generational Cantonese behaviors and speech patterns to comedic effect — an affectionate, critical, and often blunt commentator who “knows rice” and reacts in over-the-top ways when classic Asian dishes are made incorrectly (from his point of view).'
  },

  // H2 - The viral moment: egg fried rice reaction(s)
  {
    type: 'h2',
    text: 'The viral moment: the egg fried rice reaction and its ripple effects'
  },
  {
    type: 'p',
    text:
      'The Uncle Roger videos that critiqued a popular “how-to” egg-fried rice video launched Nigel Ng into global visibility. Those reaction videos combined fast edits, repeating catchphrases, physical comedy, and culinary nitpicking into a format that was widely shared across social platforms. The initial viral reaction led to follow-ups, collaborations with the original cooks in some cases, and a steady stream of related content. The format also enabled him to produce multiple viral spins (approving videos, parodies, "making it right" tutorials) that expanded his audience.'
  },

  // H2 - Catchphrases: "Haiyah", "Fuiyoh", and vocal mannerisms
  {
    type: 'h2',
    text: 'Catchphrases and mannerisms — what "Haiyah" and "Fuiyoh" mean'
  },
  {
    type: 'p',
    text:
      'Two of Uncle Roger’s most-recognized verbal bits are "Haiyah" (often spelled "Haiyah!" or "Haiyaa") and "Fuiyoh" (or "Fuyoh/Fuiyor"), delivered with distinctive timing and tone: "Haiyah" is an exasperated, dismissive noise used to express disappointment or frustration; "Fuiyoh" is an exclamation of impressed approval or admiration. These short interjections—along with the mock-Cantonese accent, hand gestures, and facial expressions—are crucial comedic anchors for the character.'
  },

  // Dropdown: brief linguistic notes on the phrases
  {
    type: 'dropdown',
    toggleText: 'Expanded: linguistic & cultural notes on the catchphrases',
    contentHTML: `
      <p>“Haiyah” and similar exclamations exist across many Southeast and Southern Chinese dialects as vocal interjections (expressing frustration, disbelief, or resignation). "Fuiyoh" has roots in Malay and Hokkien exclamations of admiration or delight; the character’s use helped popularize the spelled form among global audiences.</p>
    `
  },

  // H2 - Format & comedic mechanics: why the videos land
  {
    type: 'h2',
    text: 'Format and mechanics: why the Uncle Roger videos work'
  },
  {
    type: 'p',
    text:
      'Uncle Roger’s content uses tight editing, repetition of a few audio-visual motifs, and a clear comedic premise (a self-proclaimed expert reacting to “poor” technique) to create rapid comprehension and shareability. The character’s exaggerated persona is both a foil for and a lens into cooking technique, identity, and cultural expectation. Visual reaction comedy plus short, recognizable catchphrases make the clips highly memetic on platforms that favor bite-sized content.'
  },

  // H2 - Podcasts, shows, and other formats
  {
    type: 'h2',
    text: 'Podcasts, shows, and expansion beyond short-form'
  },
  {
    type: 'p',
    text:
      'Nigel Ng has extended his creative reach beyond short-form reaction videos into podcasts and stand-up. He co-hosted a comedic podcast, performed stand-up internationally, and created longer-form content that allows deeper topics (e.g., cultural identity, the immigrant experience) to surface alongside the Uncle Roger sketches.'
  },

  // H2 - Live performance and touring
  {
    type: 'h2',
    text: 'Live performance and touring'
  },
  {
    type: 'p',
    text:
      'The Uncle Roger character translates to live stand-up and sketch shows. On stage, Nigel blends character sketches with audience interaction, improvisation, and extended comedic bits that are harder to achieve in short clips. Live shows present different challenges—sustaining a persona, navigating audience composition, and adapting material for local tastes—yet have been a major revenue and visibility channel.'
  },

  // H2 - Collaborations & mainstream media appearances
  {
    type: 'h2',
    text: 'Collaborations and mainstream media appearances'
  },
  {
    type: 'p',
    text:
      'Following viral popularity, Nigel collaborated on video responses and joint content with creators and chefs. Some of those follow-ups involved the original cooks, and others brought mainstream chefs or presenters into the format for cross-audience pieces. He has appeared on television and in interviews in different markets, increasing crossover reach beyond purely online audiences.'
  },

  // H2 - Business ventures and brand extensions
  {
    type: 'h2',
    text: 'Business ventures and brand extensions'
  },
  {
    type: 'p',
    text:
      'The Uncle Roger brand expanded to merchandise, sponsored content, and larger projects such as podcasts and, in some instances, food-related business ventures or pop-up events anchored to the persona. These expansions leverage the recognizability of the character while offering monetization channels beyond ad revenue.'
  },

  // H2 - Criticism and controversies
  {
    type: 'h2',
    text: 'Criticism, controversies, and the balancing act'
  },
  {
    type: 'p',
    text:
      'Not all reaction has been celebratory. Critics point out that the character can, at times, lean on stereotypes or risk reinforcing simplified portrayals of Asian identity. Some commentators have argued that the comedic shorthand of the character—while satirical—can be misread or weaponized, and that “throwaway” or casual negative remarks might have outsized effects. Nigel has navigated these lines publicly, occasionally offering clarifications or apologies when particular bits triggered negative responses.'
  },

  // H2 - International content moderation and geopolitical issues
  {
    type: 'h2',
    text: 'International moderation, platform bans, and geopolitical flashpoints'
  },
  {
    type: 'p',
    text:
      'In some jurisdictions, social-media moderation or government action has created complications. At times Nigel’s accounts on Chinese platforms have been suspended amid wider regulatory crackdowns on comedy content or for specific clips that triggered enforcement. These incidents highlight how comedy that references political or societal topics can collide with different countries’ content rules and sensitivities.'
  },

  // H2 - Cultural impact: representation, conversations, and memes
  {
    type: 'h2',
    text: 'Cultural impact: representation, conversations, and memes'
  },
  {
    type: 'p',
    text:
      'Uncle Roger popularized a certain comedic aesthetic that intersects with the global Asian diaspora experience: it opened conversations about culinary authenticity, generational expectations, and the ways diasporic communities gauge cultural fidelity. The character’s memes and catchphrases entered broader internet culture, sparking imitation, remixing, and both fandom and critique.'
  },

  // H2 - Critique: stereotyping vs. reclamation debate
  {
    type: 'h2',
    text: 'Debate: stereotyping versus reclamation'
  },
  {
    type: 'p',
    text:
      'A persistent debate surrounds characters that use accents and exaggerated cultural markers: are they punching up (satire and community self-reflection) or punching down (perpetuating caricature)? Some defenders argue Uncle Roger is a form of comedic reclamation and affectionate satire created by an Asian performer; critics warn about casual reinforcement of stereotypes and how those depictions can be co-opted outside the originating community.'
  },

  // H2 - How Nigel Ng handles criticism, moderation, and platform dynamics
  {
    type: 'h2',
    text: 'How Nigel Ng navigates criticism and platform dynamics'
  },
  {
    type: 'p',
    text:
      'Nigel has publicly addressed controversial moments, clarifying intent or apologizing when necessary. He also adapts content for platform norms and regulatory realities in different regions—sometimes by removing or re-posting content, and sometimes by speaking directly to fans about intent and boundaries. This pragmatic approach is common among creators who operate across multiple cultural and political ecosystems.'
  },

  // H2 - Metrics, audience, and market footprint
  {
    type: 'h2',
    text: 'Audience metrics, reach, and market footprint'
  },
  {
    type: 'p',
    text:
      'Uncle Roger’s format proved highly shareable: short, punchy videos, recognizable catchphrases, and the universal topic of food amplified rapid follower growth across YouTube, Instagram, TikTok, and other platforms. The persona’s recognition turned into sustainable audience engagement used for touring, podcasts, and brand deals.'
  },

  // H2 - Timeline: selected milestones
  {
    type: 'h2',
    text: 'Timeline — selected milestones'
  },
  {
    type: 'table',
    data: {
      headers: ['Year', 'Milestone'],
      rows: [
        ['2018–2019', 'Character development and early sketches across social platforms (TikTok, Instagram).'],
        ['2020', 'Viral egg-fried-rice reaction videos that catapulted Uncle Roger to global attention.'],
        ['2020–2022', 'Follow-up collaborations, podcasts, and live shows across regions.'],
        ['2023–2024', 'Continued touring, further content diversification, occasional platform/regulatory friction in certain markets.']
      ]
    }
  },

  // H2 - Best practices for creators and critics (lessons from Uncle Roger)
  {
    type: 'h2',
    text: 'Lessons for creators and critics: practice, context, and responsibility'
  },
  {
    type: 'p',
    text:
      'Uncle Roger’s arc highlights practical lessons for creators: clear comedic premises scale well; short-form comedy benefits from repetition and motifs; creators must be aware of cross-cultural reading of personas; and responsible creators engage with valid criticism while preserving core comedic identity. Critics and audiences benefit from context-aware critique that distinguishes intent, creative ownership, and the creator’s cultural identity.'
  },

  // H2 - FAQs
  {
    type: 'h2',
    text: 'FAQs'
  },
  {
    type: 'p',
    text:
      'Q: Is Uncle Roger a real person? A: Uncle Roger is a character played by Nigel Ng. Q: What do "Haiyah" and "Fuiyoh" mean? A: Short interjections — "Haiyah" for exasperation, "Fuiyoh" for impressed admiration — used in Southeast/Chinese dialectal speech and popularized globally by the character. Q: Has Nigel Ng apologized for anything? A: He has publicly addressed contentious moments and made clarifications when particular jokes crossed lines.'
  },

  // Closing summary
  {
    type: 'p',
    text:
      'Summary: Uncle Roger is a culturally influential comedy persona that turned a simple reaction-video format into a global brand. The character’s success shows how food, identity, and short-form editing combine to create powerful social-media moments — and how creators must continuously manage criticism, context, and international platform rules as they scale.'
  }
];

// Register content if available
if (typeof window.registerArticleContent === 'function') {
  window.registerArticleContent('uncle_roger.js', uncle_roger_content);
}
