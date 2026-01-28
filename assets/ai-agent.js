// ===================================
// GLOBAL-FUTURE AI AGENT
// Advanced conversational AI assistant
// No external APIs - 100% FREE
// ===================================

class GlobalFutureAI {
  constructor() {
    this.knowledgeBase = this.initializeKnowledgeBase();
    this.conversationHistory = [];
    this.isListening = false;
    this.isSpeaking = false;
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    
    // Advanced features
    this.userContext = this.loadUserContext();
    this.analytics = this.initAnalytics();
    this.conversationState = 'initial'; // Tracks where user is in conversation
    this.userType = null; // school, tutor, parent, etc.
    this.leadQuality = 0; // Score 0-100
    
    this.initVoiceRecognition();
    this.trackPageContext();
  }

  // ===================================
  // KNOWLEDGE BASE - All company info
  // ===================================
  initializeKnowledgeBase() {
    return {
      company: {
        name: "Global-Future",
        founder: "Mthunzi Khumalo",
        location: "Durban, South Africa",
        email: "globalfuturecomm@gmail.com",
        phone: "+27 60 682 5110",
        whatsapp: "+27 60 682 5110",
        mission: "Bridge the digital divide and empower African communities through innovative technology",
        vision: "Be the leading tech solutions provider transforming education and business in Africa",
        values: "Innovation, Excellence, Integrity, and Community-focused Development",
        description: "Global-Future is a dynamic tech company founded by Mthunzi Khumalo in Durban, South Africa. We specialize in delivering innovative software solutions for businesses, developing cutting-edge technology for education, and empowering the next generation of tech leaders."
      },
      
      statistics: {
        schools: "500+",
        students: "50,000+",
        countries: "15+",
        established: "2020",
        successRate: "97%",
        supportResponse: "Under 2 hours"
      },

      services: [
        {
          name: "Software Development",
          description: "Custom web, mobile, and enterprise software tailored to your business needs",
          features: ["Web Applications", "Mobile Apps (iOS & Android)", "Enterprise Systems", "Custom Solutions", "API Development", "Database Design"],
          pricing: "Starting from R15,000 for basic projects",
          timeline: "2-12 weeks depending on complexity"
        },
        {
          name: "Tech Solutions",
          description: "Cloud migration, automation, and digital transformation services",
          features: ["Cloud Services (AWS, Azure, Google Cloud)", "Automation & Workflow Optimization", "Digital Transformation", "IT Consulting", "System Integration"],
          pricing: "Custom quotes based on requirements",
          timeline: "1-6 months"
        },
        {
          name: "Youth Development",
          description: "Training, mentorship, and development programs for young people",
          features: ["Tech Training (Coding, Web Dev)", "Mentorship Programs", "Career Development", "Skills Building", "Internship Opportunities"],
          pricing: "Free community programs available",
          timeline: "3-6 month programs"
        },
        {
          name: "Global Future LMS",
          description: "Africa's most comprehensive learning management system",
          features: ["School Management", "Student Analytics", "Parent Engagement", "Teacher Tools", "Automated Reports", "Mobile Access"],
          pricing: "From R2,500/month for small schools, R8,500/month for large schools",
          timeline: "Setup in 1-3 days"
        }
      ],

      lms: {
        name: "Global Future LMS",
        tagline: "Africa's most comprehensive learning management system",
        url: "https://global-lms-483720.uc.r.appspot.com/",
        registerUrl: "https://global-lms-483720.uc.r.appspot.com/register/",
        features: {
          teachers: "Interactive classrooms, real-time student insights, streamlined grading, lesson planning tools",
          students: "Engaging learning materials, progress tracking, collaborative tools, assignment submission",
          parents: "Real-time updates, progress reports, direct teacher communication, attendance tracking",
          schools: "Complete school management, analytics, administrative tools, financial management"
        },
        benefits: ["Free 30-day trial", "No setup fees", "24/7 Support", "Mobile app included", "Unlimited users", "Regular updates"],
        userTypes: ["Schools", "Private Tutors", "Students", "Parents", "General Users"],
        testimonials: [
          "Transformed our school management completely! - Principal, Johannesburg",
          "Best investment we made for our education system - Head Teacher, Cape Town",
          "Students love the interactive features - Teacher, Pretoria"
        ]
      },

      founder: {
        name: "Mthunzi Khumalo",
        title: "Founder & CEO",
        description: "Mthunzi Khumalo is a visionary entrepreneur and software developer with a passion for technology and youth empowerment. His mission is to bridge the digital divide and inspire the next generation of African tech leaders.",
        experience: "10+ years in software development",
        expertise: ["Full-stack Development", "EdTech Solutions", "Business Strategy", "Youth Mentorship"],
        portfolio: "portfolio.htm",
        linkedin: "https://www.linkedin.com/in/mthunzi-khumalo-7275a024a/"
      },

      faq: [
        {
          question: "What is Global-Future?",
          answer: "Global-Future is a leading tech company founded by Mthunzi Khumalo in Durban, South Africa. We specialize in software development, tech solutions, youth development, and our flagship product - the Global Future LMS platform serving over 500 schools across 15+ African countries.",
          category: "general"
        },
        {
          question: "What is the Global Future LMS?",
          answer: "It's Africa's most comprehensive learning management system, serving over 500 schools and 50,000+ students across 15+ countries. It includes powerful features for teachers, students, parents, and school administration. You get real-time analytics, mobile access, automated reports, and 24/7 support.",
          category: "lms"
        },
        {
          question: "How much does the LMS cost?",
          answer: "Pricing is based on school size: Small schools (up to 200 students) start at R2,500/month, medium schools at R5,000/month, and large schools at R8,500/month. This includes unlimited users, mobile app access, 24/7 support, and regular updates. We also offer a FREE 30-day trial!",
          category: "pricing"
        },
        {
          question: "How can I sign up for the LMS?",
          answer: "Simply visit our registration page at https://global-lms-483720.uc.r.appspot.com/register/ and choose your account type (School, Private Tutor, or General User). The process takes less than 3 minutes, and you can start your free 30-day trial immediately!",
          category: "signup"
        },
        {
          question: "Do you offer demos?",
          answer: "Absolutely! We offer personalized demos where we walk you through all features. You can also start a free 30-day trial to explore on your own. Contact us at globalfuturecomm@gmail.com or call +27 60 682 5110 to schedule a demo.",
          category: "demo"
        },
        {
          question: "What services do you offer?",
          answer: "We offer 4 main services: 1) Software Development (web, mobile, enterprise apps), 2) Tech Solutions (cloud, automation, digital transformation), 3) Youth Development programs (training & mentorship), and 4) Global Future LMS (school management platform).",
          category: "services"
        },
        {
          question: "Where are you located?",
          answer: "We're based in Durban, South Africa, but we serve clients across Africa and internationally. Our LMS is used in 15+ countries, and we provide remote support worldwide.",
          category: "location"
        },
        {
          question: "How can I contact you?",
          answer: "Multiple ways to reach us: Email at globalfuturecomm@gmail.com, call/WhatsApp +27 60 682 5110, connect on LinkedIn, or use the contact form on our website. We respond within 2 hours during business hours!",
          category: "contact"
        },
        {
          question: "Who is the founder?",
          answer: "Mthunzi Khumalo, a visionary entrepreneur and software developer with 10+ years of experience. He's passionate about using technology to empower African youth and transform education. You can view his full portfolio on our website or connect on LinkedIn.",
          category: "founder"
        },
        {
          question: "Do you offer training?",
          answer: "Yes! We have comprehensive youth development programs including tech training (coding, web development), mentorship, and career development. We also offer training for LMS users and provide 24/7 support for all our services.",
          category: "training"
        },
        {
          question: "What makes your LMS different?",
          answer: "Our LMS is built specifically for African schools with features like offline access, mobile-first design, affordable pricing, local payment options, and support for local curricula. Plus, we provide 24/7 support in your timezone and regular free updates.",
          category: "lms"
        },
        {
          question: "Can I try before buying?",
          answer: "Definitely! We offer a completely free 30-day trial with full access to all features. No credit card required to start. This gives you time to explore and see how it transforms your school's operations.",
          category: "trial"
        },
        {
          question: "Do you support multiple schools?",
          answer: "Yes! We have district and group licenses for educational organizations managing multiple schools. Contact us for special pricing and features tailored for multi-school management.",
          category: "lms"
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept EFT, credit/debit cards, and can arrange invoicing for schools. We also offer flexible payment plans and discounts for annual subscriptions.",
          category: "payment"
        },
        {
          question: "How quickly can we get started?",
          answer: "Very fast! For the LMS, you can be up and running in 1-3 days after signup. We provide onboarding support, training materials, and a dedicated setup team. For software development projects, timelines vary from 2-12 weeks depending on complexity.",
          category: "timeline"
        }
      ],

      // Quick reply suggestions
      quickReplies: {
        initial: [
          { text: "📚 Tell me about LMS", action: "lms" },
          { text: "💰 Pricing & Plans", action: "pricing" },
          { text: "🎯 Book a Demo", action: "demo" },
          { text: "💼 Services", action: "services" }
        ],
        lms: [
          { text: "💰 How much?", action: "pricing" },
          { text: "🎁 Free trial?", action: "trial" },
          { text: "📱 Book demo", action: "demo" },
          { text: "✍️ Sign up now", action: "signup" }
        ],
        pricing: [
          { text: "🎁 Start free trial", action: "trial" },
          { text: "📞 Talk to sales", action: "contact" },
          { text: "📚 Learn more about LMS", action: "lms" }
        ],
        services: [
          { text: "💻 Software Development", action: "software" },
          { text: "🌟 Youth Programs", action: "youth" },
          { text: "📚 LMS Platform", action: "lms" }
        ]
      }
    };
  }

  // ===================================
  // USER CONTEXT & TRACKING
  // ===================================
  loadUserContext() {
    const stored = localStorage.getItem('gf_user_context');
    if (stored) {
      const context = JSON.parse(stored);
      context.isReturning = true;
      context.lastVisit = context.currentVisit;
      context.currentVisit = new Date().toISOString();
      context.visitCount = (context.visitCount || 1) + 1;
      this.saveUserContext(context);
      return context;
    }
    
    return {
      isReturning: false,
      visitCount: 1,
      currentVisit: new Date().toISOString(),
      lastVisit: null,
      interests: [],
      askedQuestions: [],
      leadScore: 0
    };
  }

  saveUserContext(context) {
    localStorage.setItem('gf_user_context', JSON.stringify(context || this.userContext));
  }

  trackPageContext() {
    // Detect which page/section user is viewing
    const hash = window.location.hash;
    const path = window.location.pathname;
    
    this.currentPage = 'home';
    if (hash.includes('lms')) this.currentPage = 'lms';
    else if (hash.includes('services')) this.currentPage = 'services';
    else if (hash.includes('signup')) this.currentPage = 'signup';
    else if (hash.includes('contact')) this.currentPage = 'contact';
    else if (hash.includes('founder')) this.currentPage = 'founder';
  }

  // ===================================
  // ANALYTICS & TRACKING
  // ===================================
  initAnalytics() {
    const stored = localStorage.getItem('gf_analytics');
    if (stored) {
      return JSON.parse(stored);
    }
    
    return {
      totalConversations: 0,
      questionsAsked: {},
      popularTopics: {},
      conversions: [],
      avgConversationLength: 0,
      dropOffPoints: {}
    };
  }

  trackQuestion(question, category) {
    // Track question frequency
    if (!this.analytics.questionsAsked[question]) {
      this.analytics.questionsAsked[question] = 0;
    }
    this.analytics.questionsAsked[question]++;

    // Track topic popularity
    if (category) {
      if (!this.analytics.popularTopics[category]) {
        this.analytics.popularTopics[category] = 0;
      }
      this.analytics.popularTopics[category]++;
    }

    // Update user interests
    if (category && !this.userContext.interests.includes(category)) {
      this.userContext.interests.push(category);
    }

    this.saveAnalytics();
  }

  trackConversion(type) {
    this.analytics.conversions.push({
      type: type,
      timestamp: new Date().toISOString(),
      conversationLength: this.conversationHistory.length
    });
    this.saveAnalytics();
  }

  saveAnalytics() {
    localStorage.setItem('gf_analytics', JSON.stringify(this.analytics));
  }

  getPopularQuestions() {
    const sorted = Object.entries(this.analytics.questionsAsked)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    return sorted;
  }

  // ===================================
  // INTELLIGENT CONVERSATION ENGINE
  // ===================================
  processQuery(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Add to conversation history
    this.conversationHistory.push({ role: 'user', message: userInput });
    this.userContext.askedQuestions.push(input);
    this.saveUserContext();

    // Get intelligent response with context
    let response = this.getContextualResponse(input);

    // Add response to history
    this.conversationHistory.push({ role: 'assistant', message: response.text });

    // Update lead score based on engagement
    this.updateLeadScore(input, response.category);

    // Track analytics
    this.trackQuestion(input, response.category);

    return {
      text: response.text,
      quickReplies: response.quickReplies || [],
      category: response.category
    };
  }

  getContextualResponse(input) {
    // Use conversation state for guided dialogue
    if (this.conversationState === 'qualifying' && !this.userType) {
      return this.qualifyUser(input);
    }

    // Pattern matching with intelligent context
    let response = this.findBestMatch(input);
    
    return response;
  }

  qualifyUser(input) {
    // Detect user type from their response
    if (this.matches(input, ['school', 'principal', 'institution', 'academy'])) {
      this.userType = 'school';
      this.leadQuality += 30;
      return {
        text: `Great! I'd love to help your school. 🏫\n\nOur LMS platform is currently serving ${this.knowledgeBase.statistics.schools} schools across Africa.\n\nWhat's most important for your school?\n• Easy school management\n• Student performance tracking\n• Parent communication\n• All of the above?`,
        quickReplies: [
          { text: "See pricing", action: "pricing" },
          { text: "Book a demo", action: "demo" },
          { text: "Start free trial", action: "trial" }
        ],
        category: 'qualification'
      };
    } else if (this.matches(input, ['tutor', 'teacher', 'private', 'teach'])) {
      this.userType = 'tutor';
      this.leadQuality += 20;
      return {
        text: `Perfect! Our platform is excellent for private tutors. 👨‍🏫\n\nYou'll get:\n• Personal teaching dashboard\n• Student progress tracking\n• Lesson planning tools\n• Direct parent communication\n\nReady to transform your tutoring business?`,
        quickReplies: [
          { text: "See features", action: "lms" },
          { text: "Start free trial", action: "trial" },
          { text: "How much?", action: "pricing" }
        ],
        category: 'qualification'
      };
    } else if (this.matches(input, ['parent', 'child', 'kid', 'son', 'daughter'])) {
      this.userType = 'parent';
      this.leadQuality += 15;
      return {
        text: `I understand you want the best for your child's education! 👨‍👩‍👧‍👦\n\nAs a parent, you'll be able to:\n• Track your child's progress in real-time\n• Communicate directly with teachers\n• View attendance and assignments\n• Get instant notifications\n\nIs your child's school already using our LMS?`,
        quickReplies: [
          { text: "Yes, help me register", action: "signup" },
          { text: "No, tell them about it!", action: "school_referral" },
          { text: "Learn more", action: "lms" }
        ],
        category: 'qualification'
      };
    } else if (this.matches(input, ['student', 'learner', 'studying'])) {
      this.userType = 'student';
      return {
        text: `Great to meet a fellow learner! 📚\n\nOur platform will help you:\n• Access all your learning materials\n• Submit assignments easily\n• Track your progress\n• Collaborate with classmates\n\nIs your school using Global-Future LMS?`,
        quickReplies: [
          { text: "Yes, sign me up", action: "signup" },
          { text: "No, how can we get it?", action: "school_referral" },
          { text: "Tell me more", action: "lms" }
        ],
        category: 'qualification'
      };
    }

    // Default if unclear
    this.conversationState = 'discovery';
    return {
      text: `I'd love to help you better! Are you:\n\n🏫 A School/Institution\n👨‍🏫 A Private Tutor/Teacher\n👨‍👩‍👧 A Parent\n📚 A Student\n💼 Looking for software development services\n\nJust let me know!`,
      quickReplies: [
        { text: "I'm a school", action: "school" },
        { text: "I'm a tutor", action: "tutor" },
        { text: "I'm a parent", action: "parent" },
        { text: "Software services", action: "software" }
      ],
      category: 'qualification'
    };
  }

  updateLeadScore(input, category) {
    // Increase score based on engagement signals
    if (this.matches(input, ['price', 'cost', 'buy', 'purchase', 'demo'])) {
      this.leadQuality += 15;
    }
    if (this.matches(input, ['sign up', 'register', 'start', 'trial'])) {
      this.leadQuality += 25;
    }
    if (this.matches(input, ['contact', 'call', 'email', 'meet'])) {
      this.leadQuality += 20;
    }
    
    this.userContext.leadScore = Math.min(this.leadQuality, 100);
    this.saveUserContext();
  }

  findBestMatch(input) {
    // Check if question is out of scope first
    if (this.isOutOfScope(input)) {
      return this.handleOutOfScope(input);
    }

    // Greeting patterns with personality
    if (this.matches(input, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howzit', 'sawubona'])) {
      const greetings = [
        `Hello! 👋 I'm your Global-Future AI assistant. I'm here to help you discover how we can transform your ${this.userType === 'school' ? 'school' : 'education experience'}!`,
        `Hey there! 😊 Great to connect with you! I can answer any questions about our services, LMS platform, or help you get started.`,
        `Hi! 🌟 Welcome to Global-Future! How can I make your day better?`
      ];
      const greeting = greetings[Math.floor(Math.random() * greetings.length)];
      
      return {
        text: greeting,
        quickReplies: this.knowledgeBase.quickReplies.initial,
        category: 'greeting'
      };
    }

    // Help/What can you do
    if (this.matches(input, ['help', 'what can you do', 'how can you help', 'capabilities', 'assist', 'options'])) {
      return {
        text: `I'm here to help! 🚀 I can assist you with:\n\n✅ Information about Global-Future and our services\n✅ Detailed LMS platform features and pricing\n✅ Registration and free trial signup\n✅ Demo scheduling\n✅ Contact information and support\n✅ Information about our founder, Mthunzi Khumalo\n\nWhat would you like to explore?`,
        quickReplies: this.knowledgeBase.quickReplies.initial,
        category: 'help'
      };
    }

    // Company information with conversational flair
    if (this.matches(input, ['what is global', 'about global', 'tell me about', 'company', 'who are you', 'what do you do'])) {
      return {
        text: `${this.knowledgeBase.company.description}\n\n📊 Our Impact:\n• ${this.knowledgeBase.statistics.schools} schools transformed\n• ${this.knowledgeBase.statistics.students} students empowered\n• ${this.knowledgeBase.statistics.countries} countries served\n• ${this.knowledgeBase.statistics.successRate} client satisfaction\n\n💡 Mission: ${this.knowledgeBase.company.mission}\n\nWe're not just a tech company - we're education revolutionaries! 🚀`,
        quickReplies: [
          { text: "Tell me about LMS", action: "lms" },
          { text: "See services", action: "services" },
          { text: "Book a demo", action: "demo" }
        ],
        category: 'company'
      };
    }

    // LMS Platform - Detailed and persuasive
    if (this.matches(input, ['lms', 'learning management', 'platform', 'school system', 'education', 'management system'])) {
      return {
        text: `📚 ${this.knowledgeBase.lms.name}\n\n${this.knowledgeBase.lms.tagline}\n\n🎯 Key Features:\n• For Teachers: ${this.knowledgeBase.lms.features.teachers}\n• For Students: ${this.knowledgeBase.lms.features.students}\n• For Parents: ${this.knowledgeBase.lms.features.parents}\n• For Schools: ${this.knowledgeBase.lms.features.schools}\n\n✨ Why Choose Us?\n${this.knowledgeBase.lms.benefits.map(b => `✅ ${b}`).join('\n')}\n\n💬 "${this.knowledgeBase.lms.testimonials[0]}"`,
        quickReplies: this.knowledgeBase.quickReplies.lms,
        category: 'lms'
      };
    }

    // Services - Comprehensive
    if (this.matches(input, ['services', 'what do you offer', 'solutions', 'products', 'offerings'])) {
      let servicesList = this.knowledgeBase.services.map((service, index) => 
        `${index + 1}. ${service.name}\n   ${service.description}`
      ).join('\n\n');
      return {
        text: `🚀 Our Services:\n\n${servicesList}\n\nEach service is tailored to your specific needs. Which one interests you most?`,
        quickReplies: this.knowledgeBase.quickReplies.services,
        category: 'services'
      };
    }

    // Software Development - Detailed
    if (this.matches(input, ['software', 'development', 'web app', 'mobile app', 'custom software', 'build app', 'create website'])) {
      const service = this.knowledgeBase.services[0];
      return {
        text: `💻 ${service.name}\n\n${service.description}\n\n🛠️ We specialize in:\n${service.features.map(f => `• ${f}`).join('\n')}\n\n💰 ${service.pricing}\n⏱️ ${service.timeline}\n\nLet's bring your vision to life! Ready to discuss your project?`,
        quickReplies: [
          { text: "Yes, let's talk!", action: "contact" },
          { text: "See portfolio", action: "founder" },
          { text: "Other services", action: "services" }
        ],
        category: 'software'
      };
    }

    // Pricing - Transparent and value-focused
    if (this.matches(input, ['price', 'cost', 'pricing', 'how much', 'payment', 'fee', 'charge'])) {
      this.leadQuality += 15; // High intent
      return {
        text: `💰 Transparent Pricing:\n\n🎓 LMS Platform:\n${this.knowledgeBase.services[3].pricing}\n\n✅ Includes:\n${this.knowledgeBase.lms.benefits.map(b => `• ${b}`).join('\n')}\n\n💻 Software Development:\n${this.knowledgeBase.services[0].pricing}\n\n🎁 Special: Start with a FREE 30-day trial of our LMS - no credit card needed!\n\nWant to discuss pricing for your specific needs?`,
        quickReplies: [
          { text: "Start free trial", action: "trial" },
          { text: "Talk to sales", action: "contact" },
          { text: "See LMS features", action: "lms" }
        ],
        category: 'pricing'
      };
    }

    // Registration/Sign up - Clear CTA
    if (this.matches(input, ['sign up', 'register', 'create account', 'join', 'how to start', 'get started'])) {
      this.trackConversion('signup_interest');
      return {
        text: `📝 Let's get you started! 🚀\n\n👉 Quick Registration:\n${this.knowledgeBase.lms.userTypes.map(type => `• ${type}`).join('\n')}\n\n🔗 Register now: ${this.knowledgeBase.lms.registerUrl}\n\n⚡ Super quick - less than 3 minutes!\n✅ FREE 30-day trial\n✅ No credit card required\n✅ Instant access\n\nShall I walk you through the registration?`,
        quickReplies: [
          { text: "Yes, let's do it!", action: "signup_guide" },
          { text: "Questions first", action: "help" },
          { text: "Book demo instead", action: "demo" }
        ],
        category: 'signup'
      };
    }

    // Demo request - High priority
    if (this.matches(input, ['demo', 'demonstration', 'show me', 'preview', 'see it in action'])) {
      this.trackConversion('demo_request');
      this.leadQuality += 25;
      return {
        text: `🎯 Perfect! Let's schedule your personalized demo!\n\nDuring the demo, you'll see:\n✅ Complete platform walkthrough\n✅ Live Q&A with our team\n✅ Custom setup recommendations\n✅ Pricing discussion\n\n📞 Contact us now:\n• Email: ${this.knowledgeBase.company.email}\n• Phone/WhatsApp: ${this.knowledgeBase.company.phone}\n\nOr start your FREE 30-day trial immediately and explore on your own!\n\nWhich would you prefer?`,
        quickReplies: [
          { text: "Start free trial now", action: "trial" },
          { text: "Schedule demo call", action: "contact" },
          { text: "WhatsApp us", action: "whatsapp" }
        ],
        category: 'demo'
      };
    }

    // Founder information - Personal connection
    if (this.matches(input, ['founder', 'mthunzi', 'khumalo', 'ceo', 'who founded', 'owner', 'creator'])) {
      return {
        text: `👨‍💼 ${this.knowledgeBase.founder.name} - ${this.knowledgeBase.founder.title}\n\n${this.knowledgeBase.founder.description}\n\n🎓 Experience: ${this.knowledgeBase.founder.experience}\n💡 Expertise: ${this.knowledgeBase.founder.expertise.join(', ')}\n\n🔗 LinkedIn: ${this.knowledgeBase.founder.linkedin}\n📄 Portfolio: Available on our website\n\nMthunzi is always excited to connect with fellow visionaries and educators!`,
        quickReplies: [
          { text: "Contact Mthunzi", action: "contact" },
          { text: "View portfolio", action: "founder" },
          { text: "About the company", action: "company" }
        ],
        category: 'founder'
      };
    }

    // Contact information - Multiple channels
    if (this.matches(input, ['contact', 'email', 'phone', 'reach', 'get in touch', 'location', 'call', 'whatsapp'])) {
      return {
        text: `📞 Let's Connect!\n\n📧 Email: ${this.knowledgeBase.company.email}\n☎️ Phone: ${this.knowledgeBase.company.phone}\n💬 WhatsApp: ${this.knowledgeBase.company.whatsapp}\n📍 Location: ${this.knowledgeBase.company.location}\n\n💼 LinkedIn: ${this.knowledgeBase.founder.linkedin}\n⏰ Response Time: ${this.knowledgeBase.statistics.supportResponse}\n\nWe're here to help! What's the best way to reach you?`,
        quickReplies: [
          { text: "Email me details", action: "email" },
          { text: "Call me back", action: "callback" },
          { text: "Continue chatting", action: "help" }
        ],
        category: 'contact'
      };
    }

    // Youth development - Inspiring
    if (this.matches(input, ['youth', 'training', 'mentorship', 'learn', 'student program', 'internship', 'career'])) {
      const service = this.knowledgeBase.services[2];
      return {
        text: `🌟 ${service.name}\n\n${service.description}\n\n🎓 Programs include:\n${service.features.map(f => `• ${f}`).join('\n')}\n\n💡 ${service.pricing}\n⏱️ ${service.timeline}\n\nWe're passionate about empowering the next generation of African tech leaders! 🚀\n\nInterested in joining our programs?`,
        quickReplies: [
          { text: "Yes, tell me more!", action: "contact" },
          { text: "Application process?", action: "youth_apply" },
          { text: "Other services", action: "services" }
        ],
        category: 'youth'
      };
    }

    // Statistics/Numbers - Impressive
    if (this.matches(input, ['how many', 'statistics', 'numbers', 'schools', 'students', 'countries', 'stats', 'impact'])) {
      return {
        text: `📊 Global-Future Impact:\n\n🏫 ${this.knowledgeBase.statistics.schools} Schools Transformed\n👨‍🎓 ${this.knowledgeBase.statistics.students} Students Empowered\n🌍 ${this.knowledgeBase.statistics.countries} Countries Served\n📅 Since ${this.knowledgeBase.statistics.established}\n⭐ ${this.knowledgeBase.statistics.successRate} Success Rate\n⏰ ${this.knowledgeBase.statistics.supportResponse} Support Response\n\nAnd we're growing every day! Ready to be part of our success story? 🚀`,
        quickReplies: [
          { text: "Join us!", action: "signup" },
          { text: "Book demo", action: "demo" },
          { text: "Learn more", action: "lms" }
        ],
        category: 'statistics'
      };
    }

    // Trial/Free - Remove friction
    if (this.matches(input, ['trial', 'free', 'test', 'try', 'demo account'])) {
      this.trackConversion('trial_interest');
      return {
        text: `🎁 FREE 30-Day Trial - No Strings Attached!\n\n✅ Full access to ALL features\n✅ No credit card required\n✅ Instant activation\n✅ Unlimited users\n✅ 24/7 support included\n✅ Cancel anytime (but you won't want to! 😊)\n\n🔗 Start now: ${this.knowledgeBase.lms.registerUrl}\n\nTakes less than 3 minutes to set up. Ready to experience the transformation?`,
        quickReplies: [
          { text: "Yes, start trial!", action: "trial_start" },
          { text: "Questions first", action: "help" },
          { text: "See pricing after trial", action: "pricing" }
        ],
        category: 'trial'
      };
    }

    // Thanks/Goodbye - Warm and open
    if (this.matches(input, ['thank', 'thanks', 'bye', 'goodbye', 'see you', 'cheers'])) {
      return {
        text: `You're very welcome! 🙏 It's been great chatting with you!\n\n${this.leadQuality > 50 ? "I'm excited about the possibility of working together! " : ""}Feel free to come back anytime with questions.\n\n📧 ${this.knowledgeBase.company.email}\n☎️ ${this.knowledgeBase.company.phone}\n\nHave an amazing day! 🌟`,
        quickReplies: [],
        category: 'goodbye'
      };
    }

    // Default response with context-aware suggestions
    const contextSuggestions = this.getContextualSuggestions();
    
    return {
      text: `I'd be happy to help you with that! 😊\n\nI can provide detailed information about:\n\n• Our LMS Platform and features\n• Software development services\n• Youth development programs\n• Pricing and registration\n• Scheduling demos\n• Contact information\n\nWhat interests you most?`,
      quickReplies: contextSuggestions,
      category: 'clarification'
    };
  }

  getContextualSuggestions() {
    // Return relevant quick replies based on conversation context
    if (this.userType === 'school') {
      return [
        { text: "LMS for schools", action: "lms" },
        { text: "Pricing", action: "pricing" },
        { text: "Book demo", action: "demo" }
      ];
    } else if (this.conversationHistory.length > 5) {
      return [
        { text: "Start trial", action: "trial" },
        { text: "Talk to sales", action: "contact" },
        { text: "See all services", action: "services" }
      ];
    } else {
      return this.knowledgeBase.quickReplies.initial;
    }
  }

  // ===================================
  // INTELLIGENT OUT-OF-SCOPE HANDLER
  // ===================================
  isOutOfScope(input) {
    // Keywords related to Global-Future scope
    const inScopeKeywords = [
      'global', 'future', 'lms', 'school', 'education', 'software', 'development',
      'tutor', 'teacher', 'student', 'learning', 'platform', 'mthunzi', 'khumalo',
      'service', 'price', 'pricing', 'cost', 'fee', 'trial', 'demo', 'training',
      'youth', 'tech', 'technology', 'cloud', 'app', 'website', 'contact', 'hiring',
      'job', 'internship', 'course', 'lesson', 'class', 'registration', 'signup',
      'africa', 'durban', 'south africa', 'email', 'phone', 'support', 'help'
    ];

    // Check if input contains any in-scope keywords
    const hasInScopeKeyword = inScopeKeywords.some(keyword => input.includes(keyword));
    
    // List of explicit out-of-scope questions
    const outOfScopePatterns = [
      'sell car', 'sell pizza', 'sell food', 'sell cloth', 'sell shoe',
      'weather', 'what\'s the weather', 'recipe', 'cook', 'cooking',
      'football', 'soccer', 'sports', 'game', 'movie', 'film',
      'dating', 'relationship', 'love', 'news', 'politics',
      'horoscope', 'astrology', 'zodiac', 'medical', 'doctor', 'hospital',
      'legal', 'lawyer', 'law', 'joke', 'funny', 'meme',
      'bitcoin', 'crypto', 'stock', 'forex', 'casino', 'gambling',
      'hotel', 'restaurant', 'airline', 'ticket', 'travel',
      'homework', 'exam', 'test', 'essay', 'write my'
    ];

    // Check if it matches out-of-scope patterns
    const isOutOfScopeQuestion = outOfScopePatterns.some(pattern => input.includes(pattern));

    return isOutOfScopeQuestion && !hasInScopeKeyword;
  }

  handleOutOfScope(input) {
    // Extract what they're asking about
    let topic = 'that';
    
    if (this.matches(input, ['sell', 'do you sell', 'can i buy', 'do you have'])) {
      // Extract the item/service
      const match = input.match(/(?:sell|buy|have)\s+(.+?)(?:\?|$)/);
      if (match) {
        topic = match[1].trim();
      }
      
      return {
        text: `❌ No, we don't sell ${topic}.\n\nWe're Global-Future - we provide:\n✅ Software development solutions\n✅ Tech solutions & digital transformation\n✅ Global Future LMS platform (for schools)\n✅ Youth development & tech training\n\nIs there anything related to our services I can help you with?`,
        quickReplies: this.knowledgeBase.quickReplies.initial,
        category: 'out-of-scope'
      };
    } else if (this.matches(input, ['weather', 'recipe', 'cook', 'joke'])) {
      return {
        text: `😊 I appreciate the question, but I specialize in helping with Global-Future's services, not ${topic}!\n\nLet me focus on what I do best:\n✅ Our LMS platform\n✅ Software development\n✅ Tech solutions\n✅ Education technology\n\nWhat can I help you with regarding Global-Future?`,
        quickReplies: this.knowledgeBase.quickReplies.initial,
        category: 'out-of-scope'
      };
    } else {
      return {
        text: `That's an interesting question, but it's outside my area of expertise! 🤔\n\nI'm focused on helping with Global-Future's services:\n• LMS Platform for schools\n• Software Development\n• Tech Solutions\n• Youth Development Programs\n\nDo you have questions about any of these?`,
        quickReplies: this.knowledgeBase.quickReplies.initial,
        category: 'out-of-scope'
      };
    }
  }

  // Helper function to match patterns
  matches(input, patterns) {
    return patterns.some(pattern => input.includes(pattern));
  }

  // ===================================
  // VOICE RECOGNITION (Speech-to-Text)
  // ===================================
  initVoiceRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.handleVoiceInput(transcript);
      };

      this.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        this.isListening = false;
        this.updateVoiceButton();
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.updateVoiceButton();
      };
    }
  }

  startListening() {
    if (this.recognition && !this.isListening) {
      // Stop speaking if AI is currently talking (interrupt feature)
      if (this.isSpeaking) {
        this.stopSpeaking();
      }

      this.isListening = true;
      this.recognition.start();
      this.updateVoiceButton();
      this.showListeningIndicator();
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.isListening = false;
      this.recognition.stop();
      this.updateVoiceButton();
    }
  }

  handleVoiceInput(transcript) {
    const userInput = document.getElementById('userInput');
    if (userInput) {
      userInput.value = transcript;
      // Show that voice was captured
      userInput.placeholder = "Voice captured! Processing...";
      
      // Automatically send the message
      setTimeout(() => {
        const sendBtn = document.getElementById('sendBtn');
        if (sendBtn) {
          sendBtn.click();
        }
        // Restore placeholder
        userInput.placeholder = "Ask me anything about Global-Future...";
      }, 300);
    }
  }

  showListeningIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const indicator = document.createElement('div');
    indicator.className = 'listening-indicator';
    indicator.id = 'listeningIndicator';
    indicator.innerHTML = '<i class="fas fa-microphone"></i> Listening...';
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  removeListeningIndicator() {
    const indicator = document.getElementById('listeningIndicator');
    if (indicator) {
      indicator.remove();
    }
  }

  updateVoiceButton() {
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) {
      if (this.isListening) {
        voiceBtn.innerHTML = '<i class="fas fa-stop"></i>';
        voiceBtn.classList.add('listening');
      } else {
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceBtn.classList.remove('listening');
        this.removeListeningIndicator();
      }
    }
  }

  // ===================================
  // TEXT-TO-SPEECH (Voice Output)
  // ===================================
  speak(text) {
    if (this.synthesis) {
      // Cancel any ongoing speech
      this.synthesis.cancel();

      // Clean text for speaking (remove emojis and special characters)
      const cleanText = text.replace(/[📚💻🚀🌟📊👨‍💼📞💰📧☎️📍💼🏫👨‍🎓🌍📅✅🎯🙏•]/g, '').replace(/\n/g, '. ');

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Use a good voice if available
      const voices = this.synthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith('en') && (voice.name.includes('Google') || voice.name.includes('Microsoft'))
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.updateSpeakerButton();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.updateSpeakerButton();
      };

      this.synthesis.speak(utterance);
    }
  }

  stopSpeaking() {
    if (this.synthesis) {
      this.synthesis.cancel();
      this.isSpeaking = false;
      this.updateSpeakerButton();
    }
  }

  updateSpeakerButton() {
    const speakerBtn = document.getElementById('speakerBtn');
    if (speakerBtn) {
      if (this.isSpeaking) {
        speakerBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        speakerBtn.classList.add('speaking');
      } else {
        speakerBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        speakerBtn.classList.remove('speaking');
      }
    }
  }
}

// ===================================
// UI CONTROLLER WITH PROACTIVE ENGAGEMENT
// ===================================
class ChatUI {
  constructor() {
    this.ai = new GlobalFutureAI();
    this.autoGreetDelay = 10000; // 10 seconds
    this.hasAutoGreeted = false;
    this.exitIntentTriggered = false;
    this.initializeUI();
  }

  initializeUI() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupAll());
    } else {
      this.setupAll();
    }
  }

  setupAll() {
    this.setupEventListeners();
    this.setupProactiveEngagement();
    this.setupExitIntent();
    this.checkReturningVisitor();
  }

  setupEventListeners() {
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const voiceBtn = document.getElementById('voiceBtn');
    const speakerBtn = document.getElementById('speakerBtn');

    if (chatToggle) {
      chatToggle.addEventListener('click', () => this.toggleChat());
    }

    if (chatClose) {
      chatClose.addEventListener('click', () => this.closeChat());
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', () => this.sendMessage());
    }

    if (userInput) {
      userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.sendMessage();
        }
      });
    }

    if (voiceBtn) {
      voiceBtn.addEventListener('click', () => this.toggleVoiceInput());
    }

    if (speakerBtn) {
      speakerBtn.addEventListener('click', () => this.toggleSpeaker());
    }
  }

  // ===================================
  // PROACTIVE ENGAGEMENT
  // ===================================
  setupProactiveEngagement() {
    // Auto-greet after delay if not returning visitor
    if (!this.ai.userContext.isReturning) {
      setTimeout(() => {
        if (!this.hasAutoGreeted && !this.isChatOpen()) {
          this.autoGreet();
        }
      }, this.autoGreetDelay);
    }
  }

  autoGreet() {
    this.hasAutoGreeted = true;
    
    // Get page-specific greeting
    const greeting = this.getPageSpecificGreeting();
    
    // Show a notification badge or pulse
    this.showNotificationBadge();
    
    // Optionally auto-open chat with greeting
    // Uncomment next line to auto-open:
    // this.openChatWithMessage(greeting);
  }

  getPageSpecificGreeting() {
    const page = this.ai.currentPage;
    
    const greetings = {
      home: "👋 Welcome to Global-Future! Need help exploring our services?",
      lms: "📚 Interested in our LMS platform? I can answer all your questions!",
      services: "💼 Looking for tech solutions? Let me help you find the perfect fit!",
      signup: "🚀 Ready to get started? I can guide you through registration!",
      contact: "📞 Want to connect? I can help you reach the right person!",
      founder: "👨‍💼 Curious about our founder? I'd love to share more about Mthunzi!"
    };

    return greetings[page] || greetings.home;
  }

  checkReturningVisitor() {
    if (this.ai.userContext.isReturning) {
      // Show personalized welcome for returning visitors
      setTimeout(() => {
        const visitCount = this.ai.userContext.visitCount;
        let message = `Welcome back! 👋`;
        
        if (visitCount === 2) {
          message = `Welcome back! 🌟 Ready to continue where we left off?`;
        } else if (visitCount > 2) {
          message = `Great to see you again! 🎉 Ready to get started?`;
        }

        // Check if they showed interest before
        if (this.ai.userContext.leadScore > 30) {
          message += `\n\nI remember you were interested in our ${this.ai.userContext.interests[0] || 'services'}. Want to pick up from there?`;
        }

        this.showReturningVisitorMessage(message);
      }, 5000);
    }
  }

  showReturningVisitorMessage(message) {
    // Add a special notification for returning visitors
    this.showNotificationBadge();
    // Store message to show when chat opens
    this.returningVisitorMessage = message;
  }

  // ===================================
  // EXIT INTENT DETECTION
  // ===================================
  setupExitIntent() {
    document.addEventListener('mouseleave', (e) => {
      // Detect when mouse leaves through the top of the page
      if (e.clientY <= 0 && !this.exitIntentTriggered && !this.isChatOpen()) {
        this.exitIntentTriggered = true;
        this.showExitIntent();
      }
    });
  }

  showExitIntent() {
    // Show urgent message to capture leaving visitors
    const exitMessages = [
      "⏰ Wait! Have questions about our LMS platform?",
      "🎁 Before you go - Get a FREE 30-day trial!",
      "❓ Need help? I'm here to answer any questions!",
      "💬 Quick question? I can help in 30 seconds!"
    ];

    const message = exitMessages[Math.floor(Math.random() * exitMessages.length)];
    
    // Pulse the chat button
    const chatToggle = document.getElementById('chatToggle');
    if (chatToggle) {
      chatToggle.style.animation = 'pulse 0.5s infinite';
      setTimeout(() => {
        chatToggle.style.animation = 'pulse 2s infinite';
      }, 3000);
    }

    // Show badge with exit message
    this.showNotificationBadge();
    this.exitIntentMessage = message;
  }

  showNotificationBadge() {
    const chatToggle = document.getElementById('chatToggle');
    if (chatToggle && !document.querySelector('.chat-notification-dot')) {
      const dot = document.createElement('div');
      dot.className = 'chat-notification-dot';
      chatToggle.appendChild(dot);
    }
  }

  removeNotificationBadge() {
    const dot = document.querySelector('.chat-notification-dot');
    if (dot) {
      dot.remove();
    }
  }

  // ===================================
  // CHAT CONTROLS
  // ===================================
  toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    
    if (chatWindow && chatWindow.classList.contains('hidden')) {
      this.openChat();
    } else {
      this.closeChat();
    }
  }

  openChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatToggle = document.getElementById('chatToggle');
    
    if (chatWindow && chatToggle) {
      chatWindow.classList.remove('hidden');
      chatToggle.innerHTML = '<i class="fas fa-times"></i>';
      this.removeNotificationBadge();
      
      // Show welcome message based on context
      if (this.ai.conversationHistory.length === 0) {
        this.showContextualWelcome();
      }
    }
  }

  openChatWithMessage(message) {
    this.openChat();
    setTimeout(() => {
      this.addMessage('assistant', message, false, this.ai.knowledgeBase.quickReplies.initial);
    }, 500);
  }

  closeChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatToggle = document.getElementById('chatToggle');
    
    if (chatWindow && chatToggle) {
      chatWindow.classList.add('hidden');
      chatToggle.innerHTML = '<i class="fas fa-comments"></i>';
    }
  }

  isChatOpen() {
    const chatWindow = document.getElementById('chatWindow');
    return chatWindow && !chatWindow.classList.contains('hidden');
  }

  showContextualWelcome() {
    let welcomeMessage;
    let quickReplies = this.ai.knowledgeBase.quickReplies.initial;

    if (this.returningVisitorMessage) {
      welcomeMessage = this.returningVisitorMessage;
      this.returningVisitorMessage = null;
    } else if (this.exitIntentMessage) {
      welcomeMessage = this.exitIntentMessage;
      this.exitIntentMessage = null;
    } else {
      welcomeMessage = this.getPageSpecificGreeting() + "\n\n" + "I can help you with information about our services, LMS platform, pricing, demos, and more. What would you like to know?";
    }

    setTimeout(() => {
      this.addMessage('assistant', welcomeMessage, false, quickReplies);
    }, 800);
  }

  // ===================================
  // MESSAGE HANDLING
  // ===================================
  sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message) {
      // Show user message
      this.addMessage('user', message);

      // Clear input
      userInput.value = '';

      // Show typing indicator
      this.showTypingIndicator();

      // Process with AI and get response
      setTimeout(() => {
        this.removeTypingIndicator();
        const response = this.ai.processQuery(message);
        this.addMessage('assistant', response.text, true, response.quickReplies);
      }, 800);
    }
  }

  addMessage(role, content, enableVoice = false, quickReplies = []) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}-message`;

    if (role === 'assistant') {
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">${this.formatMessage(content)}</div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="message-content">${this.formatMessage(content)}</div>
        <div class="message-avatar">
          <i class="fas fa-user"></i>
        </div>
      `;
    }

    chatMessages.appendChild(messageDiv);

    // Add quick reply buttons if provided
    if (role === 'assistant' && quickReplies && quickReplies.length > 0) {
      this.addQuickReplies(quickReplies);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Auto-speak response if speaker is on
    if (role === 'assistant' && enableVoice) {
      const speakerBtn = document.getElementById('speakerBtn');
      if (speakerBtn && !speakerBtn.classList.contains('muted')) {
        this.ai.speak(content);
      }
    }
  }

  addQuickReplies(replies) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Remove previous quick replies
    const existingReplies = document.querySelector('.quick-replies-container');
    if (existingReplies) {
      existingReplies.remove();
    }

    const container = document.createElement('div');
    container.className = 'quick-replies-container';

    replies.forEach(reply => {
      const button = document.createElement('button');
      button.className = 'quick-reply-btn';
      button.textContent = reply.text;
      button.onclick = () => this.handleQuickReply(reply);
      container.appendChild(button);
    });

    chatMessages.appendChild(container);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  handleQuickReply(reply) {
    // Simulate user clicking the quick reply
    const userInput = document.getElementById('userInput');
    if (userInput) {
      // Show what user "said"
      this.addMessage('user', reply.text);
      
      // Remove quick replies
      const container = document.querySelector('.quick-replies-container');
      if (container) {
        container.remove();
      }

      // Show typing indicator
      this.showTypingIndicator();

      // Get AI response
      setTimeout(() => {
        this.removeTypingIndicator();
        const response = this.ai.processQuery(reply.text);
        this.addMessage('assistant', response.text, true, response.quickReplies);
      }, 800);
    }
  }

  formatMessage(text) {
    // Convert line breaks to <br>
    return text.replace(/\n/g, '<br>');
  }

  showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
      <div class="message-avatar">
        <i class="fas fa-robot"></i>
      </div>
      <div class="message-content">
        <span></span><span></span><span></span>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
      indicator.remove();
    }
  }

  toggleVoiceInput() {
    if (this.ai.isListening) {
      this.ai.stopListening();
    } else {
      // If AI is speaking, show interrupt message
      if (this.ai.isSpeaking) {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
          const interruptMsg = document.createElement('div');
          interruptMsg.className = 'message system-message';
          interruptMsg.style.cssText = 'margin: 10px 0; padding: 10px 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px; font-size: 13px; color: #856404;';
          interruptMsg.innerHTML = '<i class="fas fa-info-circle"></i> I stopped talking. Now listening to you...';
          chatMessages.appendChild(interruptMsg);
          chatMessages.scrollTop = chatMessages.scrollHeight;
          
          // Remove after 3 seconds
          setTimeout(() => {
            interruptMsg.remove();
          }, 3000);
        }
      }
      
      this.ai.startListening();
    }
  }

  toggleSpeaker() {
    const speakerBtn = document.getElementById('speakerBtn');
    if (speakerBtn) {
      if (this.ai.isSpeaking) {
        this.ai.stopSpeaking();
      }
      speakerBtn.classList.toggle('muted');
    }
  }
}

// Initialize the chat when the page loads
const chatUI = new ChatUI();
