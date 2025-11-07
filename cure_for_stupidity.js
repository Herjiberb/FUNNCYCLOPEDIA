// 📄 cure_for_stupidity.js

/**
 * Structured content for "The Cure for Stupidity" article.
 * This array is defined locally, and then passed to the global function
 * registerArticleContent(fileName, contentArray) defined in main.html.
 */
const cure_for_stupidity_content = [
    // Special Section Header
    {
        type: 'p',
        text: 'THE FIRST EVER PAGE, AND THERE CAN BE ONLY ONE',
        style: {
            fontWeight: '700',
            color: '#CC0000',
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
            textShadow: '1px 1px 2px #00000030'
        }
    },
    // Introduction Paragraph
    {
        type: 'p',
        text: 'For generations, the world has searched for an answer. A way to upgrade the mind, sharpen the wit, and banish the perpetual fog of "did I leave the oven on?" The answer is here. It is not a pill, nor a potion, but <strong>FUNNCYCLOPEDIA</strong>.',
    },
    // H2 Header
    {
        type: 'h2',
        text: 'The Scientific Basis (Sort Of)',
    },
    // Paragraph
    {
        type: 'p',
        text: 'Stupidity, scientifically, is defined by a lack of easily accessible, fascinating, and verifiable information. FUNNCYCLOPEDIA solves this by providing content so engaging, your brain has no choice but to absorb it.',
    },
    // Base64 Image Demonstration Block (Note: The main file renders this as an <img> tag)
    {
        type: 'p',
        text: 'Behold, the face of the cure\'s inspiration (the lightbulb icon?):',
    },
    {
        type: 'image',
        // Tiny base64 placeholder for a lightbulb icon (demonstrates image support)
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2Y1YzE0YyI+PHBhdGggZD0iTTEyLDIyQzkuMjQsMjIgNywxOS43NiA3LDE3VjE2SDdBNyw3IDAgMCAxIDEwLjE4LDEyLjg5QzEwLjY5LDEyLDUwMSwxMiAxMC43LDEySDcuODRDNy4yNSwxMS4xNiA3LDEwLjA5IDcsOUExLjU2LDEuNTYgMCAwIDEgOC41LDUuNTlDLTkuNjksMjUgLTExLjY5LDUgLTEwLjU2LDUuMTlMMy40Niw1LjQ2TDYuMTcsMjcuNEM4Ljc1LDIwLjkgMTIuMjUsMjAgMTUsMTZIMTZWMjdDMzguNjMsMzMgMzYsMzAuMjQgMzksMjcgMTIsMTIgMTIsMTkgMTIsMTlaIiAvPjwvc3ZnPg==',
        alt: 'A placeholder lightbulb icon, representing an idea.',
        style: {
            width: '80px', 
            height: '80px', 
            margin: '1rem auto', 
            display: 'block', 
            border: '3px solid #f5c14c', 
            borderRadius: '50%'
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Intelligence Metrics: A Dynamic Look',
    },
    // Paragraph
    {
        type: 'p',
        text: 'Our dynamic analysis table proves the efficacy of regular FUNNCYCLOPEDIA usage:',
    },
    // Dynamic Table Block
    {
        type: 'table',
        data: {
            headers: ['Metric', 'Before FUNNCYCLOPEDIA', 'After 3 Weeks'],
            rows: [
                ['General Knowledge (QI Score)', '15%', '85%'],
                ['Ability to find the remote', 'Low', 'High'],
                ['Sudden urge to correct strangers', 'Zero', 'Extreme']
            ]
        }
    },
    // H2 Header
    {
        type: 'h2',
        text: 'Side Effects & Documentation',
    },
    // Dropdown Menu Block
    {
        type: 'dropdown',
        toggleText: 'Click to reveal the complex mechanism...',
        contentHTML: `
            <p>The mechanism is simple: <strong>You learned something new.</strong> By providing an interface where learning is fun, editing is accessible, and all information is cross-referenced with maximum whimsy, we stimulate the latent knowledge receptors (the 'LKR').</p>
            <p style="font-style: italic;">GET SMART TODAY!</p>
        `
    },
    // Final closing paragraph
    {
        type: 'p',
        text: 'Start your journey to super-fun-knowledge today! Explore the index and discover a world beyond the ordinary.',
    }
];

// CRITICAL FIX: Call the global function defined in main.html to pass the data back.
// The file name is hardcoded here to match the file's purpose.
if (typeof window.registerArticleContent === 'function') {
    window.registerArticleContent('cure_for_stupidity.js', cure_for_stupidity_content);
}