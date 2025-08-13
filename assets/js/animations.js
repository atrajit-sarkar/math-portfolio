// Hero section animations and interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Create floating particles
        createFloatingParticles();
        
        // Add interactive cursor following effect
        addCursorEffect();
        
        // Add scroll parallax effect
        addParallaxEffect();
    }
    
    // Always add typing animation (less intensive)
    addTypingAnimation();
});

function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    
    hero.appendChild(particleContainer);
    
    // Simple mathematical symbols for floating
    const mathSymbols = ['∑', '∫', 'π', '∞', '∂', 'α', 'λ', 'Δ', 'φ'];
    
    // Create fewer, more subtle mathematical symbol particles
    for (let i = 0; i < 8; i++) {
        createMathParticle(particleContainer, mathSymbols);
    }
}

function createMathParticle(container, mathSymbols) {
    const particle = document.createElement('div');
    const symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
    const size = Math.random() * 15 + 12; // Smaller size
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50; // Start from bottom
    const duration = Math.random() * 30 + 20; // Much slower
    const delay = Math.random() * 15;
    const opacity = Math.random() * 0.05 + 0.01; // Very subtle
    
    particle.innerHTML = symbol;
    particle.style.cssText = `
        position: absolute;
        font-size: ${size}px;
        color: rgba(255, 255, 255, ${opacity});
        font-family: 'Times New Roman', serif;
        font-weight: normal;
        left: ${startX}px;
        top: ${startY}px;
        animation: floatMathSymbolGentle ${duration}s infinite linear;
        animation-delay: ${delay}s;
        user-select: none;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    // Add gentle floating animation without rotation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatMathSymbolGentle {
            0% {
                transform: translateY(0px) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: ${opacity};
            }
            90% {
                opacity: ${opacity};
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function addTypingAnimation() {
    const nameElement = document.querySelector('.hero h1');
    if (!nameElement) return;
    
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    nameElement.style.opacity = '1';
    
    // Add typing cursor
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = `
        animation: blink 1s infinite;
        color: #7c64ff;
    `;
    
    // Add blinking cursor animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    nameElement.appendChild(cursor);
    
    // Type out the text
    let i = 0;
    function typeText() {
        if (i < originalText.length) {
            nameElement.textContent = originalText.slice(0, i + 1);
            nameElement.appendChild(cursor);
            i++;
            setTimeout(typeText, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                cursor.style.display = 'none';
            }, 2000);
        }
    }
    
    // Start typing after initial delay
    setTimeout(typeText, 1000);
}

function addCursorEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(124, 100, 255, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    hero.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    hero.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    hero.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = hero.querySelectorAll('a, .btn, .profile-image, .status-bubble');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(255, 107, 157, 0.8) 0%, transparent 70%)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(124, 100, 255, 0.8) 0%, transparent 70%)';
        });
    });
}

function addParallaxEffect() {
    // Removed parallax effect to prevent content hiding issues
    // The hero section should not have parallax scrolling
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.hero-content > *').forEach(el => {
    observer.observe(el);
});

// ================================
// CODE BLOCK ENHANCEMENTS (ported)
// ================================
(function(){
  // Inject minimal styles once
  function injectCodeBlockStyles(){
    if (document.getElementById('code-block-styles')) return;
    const style = document.createElement('style');
    style.id = 'code-block-styles';
    style.textContent = `
      /* Define variables used by tech-portfolio code blocks (fallbacks) */
      :root{
        --border-radius-lg: 12px;
        --border-radius-md: 8px;
        --border-radius-sm: 6px;
        --shadow-lg: 0 12px 30px rgba(0,0,0,0.2);
        --text-light: #e2e8f0;
        --success-color: #10b981;
        --transition-fast: 150ms ease;
      }

      /* Code block container */
      .code-block-container {
        position: relative;
        margin: 2rem 0;
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-lg);
        background: linear-gradient(145deg, #1e293b, #0f172a);
        border: 1px solid rgba(99, 102, 241, 0.2);
      }

      /* Code block header */
      .code-block-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        background: rgba(15, 23, 42, 0.8);
        border-bottom: 1px solid rgba(99, 102, 241, 0.2);
        backdrop-filter: blur(10px);
      }

      .code-block-title {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .code-language {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.875rem;
        color: var(--secondary-color);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .code-file-icon {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        color: white;
        transition: var(--transition-fast);
      }

      .code-file-icon svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
      }

      /* Language-specific colors for icons */
      .code-file-icon.js,
      .code-file-icon.javascript { background: #f7df1e; color: #000; }
      .code-file-icon.python,
      .code-file-icon.py { background: #3776ab; color: #ffffff; }
      .code-file-icon.html { background: #e34f26; color: #ffffff; }
      .code-file-icon.css { background: #1572b6; color: #ffffff; }
      .code-file-icon.json { background: #000000; color: #ffffff; }
      .code-file-icon.bash,
      .code-file-icon.shell { background: #4eaa25; color: #ffffff; }
      .code-file-icon.sql { background: #336791; color: #ffffff; }
      .code-file-icon.yaml { background: #cc1018; color: #ffffff; }
      .code-file-icon.xml { background: #0060ac; color: #ffffff; }
      .code-file-icon.cpp { background: #00599c; color: #ffffff; }
      .code-file-icon.java { background: #ed8b00; color: #ffffff; }
      .code-file-icon.typescript,
      .code-file-icon.ts { background: #3178c6; color: #ffffff; }
      .code-file-icon.rust { background: #ce422b; color: #ffffff; }
      .code-file-icon.go { background: #00add8; color: #ffffff; }
      .code-file-icon.text { background: #6c757d; color: #ffffff; }

      /* Terminal dots */
      .terminal-dots { display: flex; gap: 0.5rem; }
      .terminal-dot { width: 12px; height: 12px; border-radius: 50%; cursor: pointer; transition: var(--transition-fast); }
      .terminal-dot.close { background: #ff5f57; }
      .terminal-dot.minimize { background: #ffbd2e; }
      .terminal-dot.maximize { background: #28ca42; }
      .terminal-dot:hover { opacity: 0.8; transform: scale(1.1); }

      /* Copy button */
      .copy-button {
        position: relative;
        background: rgba(99, 102, 241, 0.1);
        border: 1px solid rgba(99, 102, 241, 0.3);
        border-radius: var(--border-radius-md);
        padding: 0.5rem 1rem;
        color: var(--text-light);
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.8rem;
        cursor: pointer;
        transition: var(--transition-fast);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        backdrop-filter: blur(10px);
      }
      .copy-button:hover { background: rgba(99, 102, 241, 0.2); border-color: rgba(99, 102, 241, 0.5); color: var(--secondary-color); transform: translateY(-1px); }
      .copy-button:active { transform: translateY(0); }
      .copy-button.copied { background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.5); color: var(--success-color); }
      .copy-icon { width: 14px; height: 14px; transition: var(--transition-fast); }
      .copy-button.copied .copy-icon { transform: scale(1.2); }

      /* Code content */
      .code-content { position: relative; overflow-x: auto; background: linear-gradient(145deg, #0f172a, #1e293b); }
      .code-content pre {
        margin: 0; padding: 1.5rem; background: transparent; border: none; border-radius: 0;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.9rem; line-height: 1.6; color: #e2e8f0; overflow-x: auto;
      }
      .code-content code { background: transparent; border: none; padding: 0; color: inherit; font-size: inherit; }

      /* Line numbers */
      .code-content.with-line-numbers { position: relative; }
      .line-numbers {
        position: absolute; left: 0; top: 0; bottom: 0; width: 3rem; background: rgba(15, 23, 42, 0.5);
        border-right: 1px solid rgba(99, 102, 241, 0.2); padding: 1.5rem 0; font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.8rem; line-height: 1.6; color: var(--text-muted); text-align: right; user-select: none; backdrop-filter: blur(5px);
      }
      .line-numbers span { display: block; padding-right: 0.75rem; transition: var(--transition-fast); }
      .line-numbers span:hover { color: var(--secondary-color); }
      .code-content.with-line-numbers pre { padding-left: 4rem; }

      /* Syntax highlighting (Rouge classes) */
      .highlight .c { color: #64748b; font-style: italic; }
      .highlight .k { color: #c084fc; font-weight: bold; }
      .highlight .s { color: #34d399; }
      .highlight .n { color: #e2e8f0; }
      .highlight .o { color: #fbbf24; }
      .highlight .p { color: #94a3b8; }
      .highlight .m { color: #fb7185; }
      .highlight .nf { color: #60a5fa; }
      .highlight .nc { color: #a78bfa; }
      .highlight .nd { color: #f472b6; }
      .highlight .kd { color: #c084fc; }
      .highlight .kn { color: #8b5cf6; }
      .highlight .kr { color: #c084fc; }
      .highlight .kt { color: #06b6d4; }
      .highlight .nb { color: #fbbf24; }
      .highlight .bp { color: #fbbf24; }
      .highlight .nv { color: #fb7185; }
      .highlight .nn { color: #06b6d4; }
      .highlight .nt { color: #f472b6; }
      .highlight .na { color: #34d399; }
      .highlight .si { color: #fbbf24; }

      /* Language-specific container accents */
      .code-block-container.language-javascript,
      .code-block-container.language-js { border-color: rgba(247, 223, 30, 0.3); }
      .code-block-container.language-python { border-color: rgba(55, 118, 171, 0.3); }
      .code-block-container.language-html { border-color: rgba(227, 79, 38, 0.3); }
      .code-block-container.language-css { border-color: rgba(21, 114, 182, 0.3); }
    `;
    document.head.appendChild(style);
  }

  function initializeCodeBlocks(){
    injectCodeBlockStyles();
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((codeElement, idx)=>{
      const preElement = codeElement.parentElement;
      if (!preElement || preElement.closest('.code-block-container')) return;

      // Detect language
      const language = extractLanguageFromContext(preElement, codeElement);

      // Build container
      const container = document.createElement('div');
      container.className = `code-block-container language-${language}`;

      const header = createCodeBlockHeader(language, idx);
      const contentWrapper = document.createElement('div');
      contentWrapper.className = 'code-content';

      const clonedPre = preElement.cloneNode(true);
      contentWrapper.appendChild(clonedPre);

      container.appendChild(header);
      container.appendChild(contentWrapper);

      preElement.parentElement.replaceChild(container, preElement);

      const lines = codeElement.textContent.split('\n').length;
      if (lines > 5) addLineNumbers(contentWrapper, clonedPre.querySelector('code'));
      container.setAttribute('data-code', codeElement.textContent);
    });
  }

  function extractLanguageFromContext(preEl, codeEl){
    function fromClasses(el){
      if (!el || !el.classList) return null;
      for (const cls of el.classList){
        let m = cls.match(/^language-([\w\d\+\#]+)/i) || cls.match(/^lang-([\w\d\+\#]+)/i);
        if (m) return normalizeLang(m[1]);
        const known = ['bash','shell','sh','python','javascript','js','json','html','css','yaml','yml','ini','conf','text','plaintext','cpp','c','java','sql','typescript','ts'];
        if (known.includes(cls.toLowerCase())) return normalizeLang(cls);
      }
      return null;
    }
    function normalizeLang(l){
      l = (l||'text').toLowerCase();
      if (l==='sh'||l==='shell') return 'bash';
      if (l==='plaintext'||l==='text') return 'text';
      if (l==='yml') return 'yaml';
      return l;
    }
    const direct = fromClasses(codeEl) || fromClasses(preEl) || fromClasses(codeEl.closest('[class*="language-"]')) || fromClasses(codeEl.closest('.highlight'));
    if (direct) return direct;
    return detectLanguageFromCode(codeEl.textContent.trim());
  }

  function detectLanguageFromCode(code){
    const tests = [
      { regex:/import\s+\w+\s+as\s+\w+|def\s+\w+\(|print\(|\.py/i, lang:'python' },
      { regex:/#include\s*<|std::|template\s*<|\.cpp|\.h/i, lang:'cpp' },
      { regex:/\b(const|let|var|function)\b|=>\s*{|\.js/i, lang:'javascript' },
      { regex:/public\s+class|static\s+void\s+main|\.java/i, lang:'java' },
      { regex:/<\w+[^>]*>|<\/\w+>|<!DOCTYPE/i, lang:'html' },
      { regex:/\{[^}]*:[^}]*\}|"[\w-]+"\s*:/i, lang:'json' },
      { regex:/--[\w-]+:|:root\s*{|@media/i, lang:'css' },
      { regex:/(^|\n)\s*(sudo\s+)?(apt|yum|dnf|pacman)\s+|#!/i, lang:'bash' },
      { regex:/SELECT\s+|FROM\s+|WHERE\s+|INSERT\s+INTO/i, lang:'sql' },
      { regex:/(---|\.\.\.)\n[\s\S]*?:\s|^\s*\w+:\s*$/m, lang:'yaml' }
    ];
    for (const t of tests){ if (t.regex.test(code)) return t.lang; }
    return 'text';
  }

  function createCodeBlockHeader(language){
    const header = document.createElement('div');
    header.className = 'code-block-header';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'code-block-title';

    const iconDiv = document.createElement('div');
    iconDiv.className = `code-file-icon ${language}`;
    const svg = getLanguageIconSvg(language);
    iconDiv.innerHTML = svg || getLanguageIcon(language);

    const langSpan = document.createElement('span');
    langSpan.className = 'code-language';
    langSpan.textContent = getLanguageLabel(language);

    titleDiv.appendChild(iconDiv);
    titleDiv.appendChild(langSpan);

    const controlsDiv = document.createElement('div');
    controlsDiv.style.display = 'flex';
    controlsDiv.style.alignItems = 'center';
    controlsDiv.style.gap = '1rem';

    const dotsDiv = document.createElement('div');
    dotsDiv.className = 'terminal-dots';
    ['close','minimize','maximize'].forEach(type=>{
      const dot = document.createElement('div');
      dot.className = `terminal-dot ${type}`;
      dotsDiv.appendChild(dot);
    });

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-button';
    copyBtn.innerHTML = `
      <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>`;
    copyBtn.addEventListener('click', ()=>copyCodeToClipboard(copyBtn));

    controlsDiv.appendChild(dotsDiv);
    controlsDiv.appendChild(copyBtn);

    header.appendChild(titleDiv);
    header.appendChild(controlsDiv);
    return header;
  }

  function getLanguageIcon(language){
    const icons={javascript:'JS',js:'JS',python:'PY',py:'PY',html:'HTML',css:'CSS',json:'JSON',bash:'SH',shell:'SH',sh:'SH',sql:'SQL',yaml:'YML',yml:'YML',cpp:'C++',c:'C',java:'JAVA',ts:'TS',typescript:'TS',text:'TXT',txt:'TXT'};
    const l=language.toLowerCase();
    return icons[l] || language.slice(0,3).toUpperCase();
  }

  function getLanguageIconSvg(language){
    const l=language.toLowerCase();
    const map={
      javascript:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>`,
      python:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></svg>`
    };
    return map[l]||null;
  }

  function getLanguageLabel(language){
    const labels={javascript:'JavaScript',js:'JavaScript',python:'Python',py:'Python',html:'HTML',css:'CSS',json:'JSON',bash:'Bash',shell:'Shell',sh:'Shell',sql:'SQL',yaml:'YAML',yml:'YAML',cpp:'C++',c:'C',java:'Java',ts:'TypeScript',typescript:'TypeScript',text:'Plain Text',txt:'Plain Text'};
    return labels[language.toLowerCase()]||language.toUpperCase();
  }

  function addLineNumbers(wrapper, codeEl){
    wrapper.classList.add('with-line-numbers');
    const lines = codeEl.textContent.split('\n');
    const ln = document.createElement('div');
    ln.className = 'line-numbers';
    lines.forEach((_,i)=>{ const s=document.createElement('span'); s.textContent=String(i+1); ln.appendChild(s); });
    wrapper.insertBefore(ln, wrapper.firstChild);
  }

  async function copyCodeToClipboard(button){
    const container = button.closest('.code-block-container');
    const code = container.getAttribute('data-code')||'';
    try{
      await navigator.clipboard.writeText(code);
      button.classList.add('copied');
      const txt = button.querySelector('span');
      const prev = txt.textContent; txt.textContent = 'Copied!';
      setTimeout(()=>{ button.classList.remove('copied'); txt.textContent = prev; }, 1500);
    }catch(e){
      const ta = document.createElement('textarea'); ta.value = code; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      button.classList.add('copied'); setTimeout(()=>button.classList.remove('copied'), 1500);
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCodeBlocks);
  } else {
    initializeCodeBlocks();
  }

  // Observe DOM changes to handle dynamically injected code blocks (defensive; Jekyll is static)
  try {
    const mo = new MutationObserver((mutations)=>{
      for (const m of mutations){
        for (const node of m.addedNodes){
          if (!(node instanceof Element)) continue;
          if (node.matches && node.matches('pre code')) { initializeCodeBlocks(); return; }
          if (node.querySelector && node.querySelector('pre code')) { initializeCodeBlocks(); return; }
        }
      }
    });
    mo.observe(document.body, { childList:true, subtree:true });
  } catch(_) { /* no-op */ }

})();
