/* ==========================================================================
   Crystal Quest: Listen & Leap - GAME DATA (edit this file to change content)
   --------------------------------------------------------------------------
   HEROES  : the 4 playable heroes (name, colours, portrait image).
   WORLDS  : the 3 worlds. Each world has `challenges` (listening crystals).
     Each challenge = one recording:
       audio  : online MP3 (VOA Learning English, public domain)
       local  : backup copy in the audio/ folder (used if the online file fails)
       questions: 3-option MUET-style questions
         q        : question text
         choices  : exactly 3 options (shuffled automatically in the game)
         correct  : index of the right option in `choices` (0, 1 or 2)
         hint     : shown after the first wrong try
         evidence : transcript line shown after answering
   ========================================================================== */
window.CQ_DATA = (function () {
  'use strict';
const HEROES = [
    {
      id: 'aiden',
      name: 'Aiden',
      title: 'The Young Adventurer',
      portrait: 'art/portrait_aiden.jpg',
      traits: 'Brave, enthusiastic & adventurous',
      effectLabel: 'Golden Sparkles ✨',
      colors: {
        hair: 0x5c3317,
        tunic: 0x2563eb,
        accent: 0xef4444,
        skin: 0xffe0bd,
        boots: 0x78350f,
        particle: 0xfbbf24,
        eyeColor: '#1e3a8a'
      }
    },
    {
      id: 'luna',
      name: 'Luna',
      title: 'The Forest Mage',
      portrait: 'art/portrait_luna.jpg',
      traits: 'Curious, intelligent & cheerful',
      effectLabel: 'Purple Magic Particles 🔮',
      colors: {
        hair: 0xf472b6,
        tunic: 0x7e22ce,
        accent: 0xfacc15,
        skin: 0xffe4c8,
        boots: 0x581c87,
        particle: 0xc084fc,
        eyeColor: '#6b21a8'
      }
    },
    {
      id: 'rex',
      name: 'Rex',
      title: 'The Scout Ranger',
      portrait: 'art/portrait_rex.jpg',
      traits: 'Energetic, resourceful & observant',
      effectLabel: 'Green Leaf Particles 🍃',
      colors: {
        hair: 0xfbbf24,
        tunic: 0x16a34a,
        accent: 0x854d0e,
        skin: 0xffe0bd,
        boots: 0x422006,
        particle: 0x4ade80,
        eyeColor: '#14532d'
      }
    },
    {
      id: 'mia',
      name: 'Mia',
      title: 'The Crystal Explorer',
      portrait: 'art/portrait_mia.jpg',
      traits: 'Confident, friendly & determined',
      effectLabel: 'Blue & Gold Crystal Particles 💎',
      colors: {
        hair: 0x451a03,
        tunic: 0xeab308,
        accent: 0x9333ea,
        skin: 0xffe0bd,
        boots: 0x5b21b6,
        particle: 0x38bdf8,
        eyeColor: '#7c2d12'
      }
    }
  ];

const WORLDS = [
    {
      id: 1,
      name: 'Whispering Woods',
      subtitle: 'Level 1 • CEFR A2 • Everyday conversations (1.5–3.5 min)',
      thumb: 'art/thumb_w1.jpg',
      objectiveDesc: "VOA Let's Learn English (Level 1): directions, specific details and reasons.",
      skyColor: 0x38bdf8,
      fogColor: 0x7dd3fc,
      waterColor: 0x0284c7,
      groundColor: 0x6cbd4a,
      platformColor: 0x86c95f,
      crystalColor: 0x4ade80,
      portalColor: 0x10b981,
      totalCoins: 20,
      totalChests: 1,
      chestIndices: [1],
      challenges: [
        {
          id: 'w1_c1',
          speaker: 'Anna & Ashley',
          title: "Let's Learn English Lesson 10: Come Over to My Place",
          skill: 'Directions & Specific Details',
          duration: '1:30',
          audio: 'https://voa-audio.voanews.eu/vle/2016/04/14/442a6a50-693e-411f-8cff-99e40d16614c.mp3',
          local: 'audio/w1_c1.mp3',
          source: 'https://learningenglish.voanews.com/a/lets-learn-english-lesson-10/3285228.html',
          questions: [
            {
              skill: 'Sequence / Directions',
              q: 'After Ashley exits the Metro, what should she do FIRST?',
              choices: ['Turn right', 'Turn left at the bus station', 'Walk straight ahead'],
              correct: 0,
              hint: 'Anna gives three steps in order. Listen for the very first one.',
              evidence: 'Anna: "Exit the Metro and turn right. Then at the bus station turn left. Then walk straight ahead."'
            },
            {
              skill: 'Reason / Cause',
              q: 'Why does Ashley call Anna a second time?',
              choices: ['There are three coffee shops near the apartment', 'She cannot find the Metro station', 'The bus station is closed'],
              correct: 0,
              hint: 'Anna first says her apartment is near a coffee shop. What problem does Ashley find?',
              evidence: 'Ashley: "Anna, which coffee shop? There are three coffee shops."'
            },
            {
              skill: 'Specific Detail',
              q: "Anna's apartment is across from...",
              choices: ['the Columbia Heights Metro', 'a big department store', 'a bus station'],
              correct: 1,
              hint: 'The Metro is mentioned, but the apartment is only NEAR it.',
              evidence: 'Anna: "My apartment is across from a big department store."'
            }
          ]
        },
        {
          id: 'w1_c2',
          speaker: 'Anna & Marsha',
          title: "Let's Learn English Lesson 36: I Can Fix This!",
          skill: 'Location Details & Speaker Message',
          duration: '2:02',
          audio: 'https://voa-audio.voanews.eu/vle/2016/11/14/65b768cd-1b20-4074-beb4-3279d8f8e715.mp3',
          local: 'audio/w1_c2.mp3',
          source: 'https://learningenglish.voanews.com/a/lets-learn-english-lesson-36-i-can-fix-this/3568962.html',
          questions: [
            {
              skill: 'Specific Detail',
              q: 'Where did Anna put the flour?',
              choices: ['In the cabinets', 'Under the sink', 'Inside the refrigerator'],
              correct: 2,
              hint: 'Marsha checks one place first and does not find it there.',
              evidence: 'Marsha: "It\'s not in the cabinets." Anna: "I put the flour inside the refrigerator."'
            },
            {
              skill: 'Reason / Cause',
              q: 'Why were the eggs in the cabinet under the sink?',
              choices: ['The refrigerator was already full', 'That is where Anna always kept eggs on the farm', 'The recipe said to keep them in a cold, dry place'],
              correct: 1,
              hint: 'The "cold, dry place" instruction was about the flour, not the eggs.',
              evidence: 'Anna: "On the farm, we always put the eggs there."'
            },
            {
              skill: 'Main Idea / Speaker Message',
              q: "What is Anna's main message at the end?",
              choices: ['If your plan goes wrong, change the plan', 'Always shop with the correct list', 'Let your roommate do the cooking'],
              correct: 0,
              hint: 'Listen to her final advice before "Till next time!"',
              evidence: 'Anna: "When something goes wrong with your plan, just change the plan!"'
            }
          ]
        },
        {
          id: 'w1_c3',
          speaker: 'Anna, Marsha, Jonathan & Ashley',
          title: "Let's Learn English Lesson 43: Time for Plan B",
          skill: 'Details & Reasons in Phone Calls',
          duration: '3:38',
          audio: 'https://voa-audio.voanews.eu/vle/2017/01/18/b97c84f3-f68d-4b35-bf71-9c369a107e82.mp3',
          local: 'audio/w1_c3.mp3',
          source: 'https://learningenglish.voanews.com/a/lets-learn-english-lesson-43-time-for-plan-b/3666458.html',
          questions: [
            {
              skill: 'Specific Detail',
              q: 'What problem does Anna have at the start?',
              choices: ['She is late for her ukulele class', 'She lost her wallet', 'She missed her train'],
              correct: 1,
              hint: 'Her Metro card, credit card and money were all inside it.',
              evidence: 'Anna: "Oh, no! I lost my wallet! It has my Metro card, my credit card and my money!"'
            },
            {
              skill: 'Reason / Cause',
              q: 'Why can\'t Jonathan help Anna?',
              choices: ['He has to give a big presentation', 'He is babysitting his niece', 'He is at the airport with his mother'],
              correct: 2,
              hint: 'Three friends give three different reasons. Match the reason to Jonathan.',
              evidence: 'Jonathan: "I\'m at the airport with my mother. Her flight leaves in two hours."'
            },
            {
              skill: 'Inference',
              q: 'How does Anna finally get money (Plan F)?',
              choices: ['She sings and people give her money', 'Ashley brings her $20', 'She finds money in her emergency envelope'],
              correct: 0,
              hint: 'Both envelopes were empty, and Ashley said "I can\'t." Listen to the sounds at the end.',
              evidence: 'Anna sings "Won\'t you give me money?" and says "Thank you very much, sir!"'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Echo Falls',
      subtitle: 'Level 2 • CEFR A2–B1 • Workplace & story dialogues (3–4 min)',
      thumb: 'art/thumb_w2.jpg',
      objectiveDesc: "VOA Let's Learn English (Level 2): sequence, purpose, attitude and inference.",
      skyColor: 0x0ea5e9,
      fogColor: 0x38bdf8,
      waterColor: 0x0369a1,
      groundColor: 0x4f9a5a,
      platformColor: 0x6d9fc4,
      crystalColor: 0x67e8f9,
      portalColor: 0x06b6d4,
      totalCoins: 30,
      totalChests: 2,
      chestIndices: [0, 2],
      challenges: [
        {
          id: 'w2_c1',
          speaker: 'Guy Newsman & Anna',
          title: "Let's Learn English Lesson 42: I Was Minding My Own Business",
          skill: 'Sequence of Events & Inference',
          duration: '3:00',
          audio: 'https://voa-audio.voanews.eu/vle/2017/01/12/51393a0f-7412-4703-8f47-866cfd57955c.mp3',
          local: 'audio/w2_c1.mp3',
          source: 'https://learningenglish.voanews.com/a/lets-learn-english-lesson-42-i-was-minding-my-own-business/3647264.html',
          questions: [
            {
              skill: 'Specific Detail',
              q: 'Why had Anna left work when she heard a woman yelling?',
              choices: ['To catch a bus', 'To get some lunch', 'To buy a new umbrella'],
              correct: 1,
              hint: 'She saw the crime during her lunch break.',
              evidence: 'Anna: "I left work to get some lunch. Then suddenly, I heard a woman yelling."'
            },
            {
              skill: 'Reason / Cause',
              q: 'Why were the robbers kicked off the bus?',
              choices: ['Anna told the driver about them', 'The police stopped the bus', 'They did not pay'],
              correct: 2,
              hint: 'The police came AFTER they were kicked off.',
              evidence: 'Anna: "They didn\'t pay. You\'ve got to pay when you get on a bus. The police came and took them away."'
            },
            {
              skill: 'Inference',
              q: 'How did Anna REALLY hurt her arm?',
              choices: ['Someone stepped on it while she was on the ground', 'It got stuck in a vending machine', 'She fell while running after the bus'],
              correct: 1,
              hint: 'Guy guesses many times and Anna keeps saying "No." What happened back at the office?',
              evidence: 'Co-worker: "My co-worker is stuck in a vending machine." Guy: "You hurt your arm in a vending machine buying a bag of chips?"'
            }
          ]
        },
        {
          id: 'w2_c2',
          speaker: 'Anna, Jonathan, Kaveh, Amelia & Ms. Weaver',
          title: "Let's Learn English Level 2, Lesson 1: Budget Cuts",
          skill: 'Rumours, Purpose & Irony',
          duration: '4:07',
          audio: 'https://voa-audio.voanews.eu/vle/2017/08/31/3bf697ff-3ef5-4d59-8dcd-52613e2e7e9d.mp3',
          local: 'audio/w2_c2.mp3',
          source: 'https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson1/3960391.html',
          questions: [
            {
              skill: 'Specific Detail',
              q: 'According to Jonathan, who has been talking about budget cuts?',
              choices: ['Mark in Accounting', 'Ms. Weaver', 'Kaveh the reporter'],
              correct: 0,
              hint: 'Anna points out that it is only ONE person.',
              evidence: 'Jonathan: "Mark in Accounting." Anna: "That\'s one person. That\'s not \'people.\'"'
            },
            {
              skill: 'Speaker Attitude',
              q: 'Why does Anna decide they should stop talking about the budget cuts?',
              choices: ['Ms. Weaver might hear them', 'Gossip is how rumours start', 'They are late for the meeting'],
              correct: 1,
              hint: 'Listen to what she says right after "But wait, look at us."',
              evidence: 'Anna: "We shouldn\'t gossip. That\'s how rumors start."'
            },
            {
              skill: 'Main Idea / Purpose',
              q: 'What is the REAL purpose of the meeting?',
              choices: ['To fire some of the staff', 'To give everyone a raise', 'To praise the team and give new assignments'],
              correct: 2,
              hint: 'Anna hoped for raises, others feared being fired. What does Ms. Weaver actually say?',
              evidence: 'Ms. Weaver: "The reason for this meeting is to tell you what a good job you\'ve been doing and give out new assignments."'
            },
            {
              skill: 'Inference',
              q: 'What is surprising about the person who lost his job?',
              choices: ['He was the person who spread the budget-cut news', 'He was the newest worker at The Studio', 'He was Ms. Weaver\'s assistant'],
              correct: 0,
              hint: 'Connect the beginning of the story with the end.',
              evidence: 'Ms. Weaver: "Only one person has lost their job -- Mark in Accounting." (Mark started the talk about budget cuts.)'
            }
          ]
        },
        {
          id: 'w2_c3',
          speaker: 'Anna, Pete & Ms. Weaver',
          title: "Let's Learn English Level 2, Lesson 2: The Interview",
          skill: 'Job Interview: Details, Attitude & Outcome',
          duration: '4:05',
          audio: 'https://voa-audio.voanews.eu/vle/2017/09/05/676d9800-cee0-4a59-9e79-b9378e0061ad.mp3',
          local: 'audio/w2_c3.mp3',
          source: 'https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-2/3960471.html',
          questions: [
            {
              skill: 'Specific Detail',
              q: 'What new assignment does Ms. Weaver give Anna?',
              choices: ['Reporting traffic from a helicopter', 'Going back to hosting and reporting', 'Writing a book about The Studio'],
              correct: 1,
              hint: 'The helicopter is something Anna hoped NOT to get.',
              evidence: 'Ms. Weaver: "Anna, you\'re good at asking questions. So, I want you to go back to hosting and reporting."'
            },
            {
              skill: 'Specific Detail',
              q: 'What kind of partner must Anna team up with?',
              choices: ['Someone very different from her', 'Another cheerful people person', 'An experienced talk show host'],
              correct: 0,
              hint: 'Anna is cheerful and a people person. Her partner should be...',
              evidence: 'Ms. Weaver: "I want you to team up with someone ... who is very \'different\' from you."'
            },
            {
              skill: 'Speaker Attitude',
              q: 'In the interview, which work is Pete most proud of?',
              choices: ['Hosting a radio talk show', 'Finishing a crossword puzzle quickly', 'Writing a book alone in a cabin'],
              correct: 2,
              hint: 'He says it was the best two months of his life.',
              evidence: 'Pete: "Last year, I locked myself in a cabin and wrote a book. I didn\'t speak to anybody the entire time!"'
            },
            {
              skill: 'Inference',
              q: 'What is the result of Pete\'s interview?',
              choices: ['He fails because he is grumpy', 'He gets the job even though he is "not good with people"', 'He must come back for a second interview'],
              correct: 1,
              hint: 'Ms. Weaver wanted someone different from Anna.',
              evidence: 'Pete: "She said I was grumpy and not good with people." Anna: "And...?" Pete: "And, I got the job!"'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Celestial Crystal Kingdom',
      subtitle: 'Level 3 • CEFR B1 • Informative talks (5–7 min)',
      thumb: 'art/thumb_w3.jpg',
      objectiveDesc: 'VOA Education Tips: main idea, figures, expert views and speaker attitude.',
      skyColor: 0x4f46e5,
      fogColor: 0x818cf8,
      waterColor: 0x3730a3,
      groundColor: 0xa48fdc,
      platformColor: 0x9c86e0,
      crystalColor: 0xe879f9,
      portalColor: 0xc084fc,
      totalCoins: 30,
      totalChests: 2,
      chestIndices: [0, 1],
      challenges: [
        {
          id: 'w3_c1',
          speaker: 'John Russell (VOA Education Tips)',
          title: 'Learn New Skills with Microcredentials',
          skill: 'Informative Talk: Main Idea, Facts & Figures',
          duration: '4:45',
          audio: 'https://voa-audio.voanews.eu/vle/2025/01/07/191de2c9-f532-4ac6-bfb3-4c2a26adcc0b.mp3',
          local: 'audio/w3_c1.mp3',
          source: 'https://learningenglish.voanews.com/a/learn-new-skills-with-microcredentials-/7908673.html',
          questions: [
            {
              skill: 'Main Idea / Purpose',
              q: 'What is the main point of this talk?',
              choices: ['Microcredentials are only useful for IT workers', 'Short certificate courses can give job skills that usual college courses may not', 'Colleges should stop teaching computer languages'],
              correct: 1,
              hint: 'IT is one example. What is the "answer for students or workers"?',
              evidence: '"What you learned in the usual college courses may not be very useful later in life... The answer for students or workers is a professional certificate program, or what is called microcredential."'
            },
            {
              skill: 'Specific Detail',
              q: 'According to UNESCO, how long does a microcredential usually take?',
              choices: ['From a week to a month', 'About one semester', 'Up to four years'],
              correct: 0,
              hint: 'It is "shorter than a traditional university program."',
              evidence: '"It is completed over a shorter time than a traditional university program, from a week to a month."'
            },
            {
              skill: 'Numbers & Figures',
              q: 'What percentage of US colleges that offer microcredentials also give school credit?',
              choices: ['15 percent', '59 percent', '51 percent'],
              correct: 2,
              hint: '59 is a number you hear later, but it is a price in dollars.',
              evidence: '"51 percent of colleges in the United States that offer microcredentials also provide school credit." (Coursera costs $59 a month.)'
            },
            {
              skill: 'Specific Detail',
              q: 'What do learners usually have to PAY for?',
              choices: ['Using the course materials', 'Earning the certification', 'Automatic translation of the course'],
              correct: 1,
              hint: 'Many providers let learners use the materials for free...',
              evidence: '"Many of the course providers permit learners to use the materials for free, but to earn a certification, payment is required."'
            }
          ]
        },
        {
          id: 'w3_c2',
          speaker: 'John Russell with Eli Hinkel & Marla Yoshida',
          title: 'Start New Year by Setting Reasonable Learning Goals',
          skill: 'Expert Views: Main Idea, Attitude & Inference',
          duration: '6:33',
          audio: 'https://voa-audio.voanews.eu/vle/2016/05/10/1218eeec-46d7-476f-9689-0530315f048d.mp3',
          local: 'audio/w3_c2.mp3',
          source: 'https://learningenglish.voanews.com/a/start-the-new-year-by-setting-reasonable-learning-goals-/3637982.html',
          questions: [
            {
              skill: 'Main Idea / Purpose',
              q: 'What is the main message of this report?',
              choices: ['Learners should aim to lose their accent completely', 'Adults cannot improve their pronunciation', 'Set reasonable goals, such as being understood easily'],
              correct: 2,
              hint: 'Both experts say sounding like a native speaker is not necessary.',
              evidence: 'Yoshida: "So, that\'s a reasonable goal: being understood easily... sounding like a native speaker is wonderful if you can do it… it\'s not necessary."'
            },
            {
              skill: 'Reason / Cause',
              q: 'According to Eli Hinkel, why do adult learners usually keep an accent?',
              choices: ['After physical growth stops, the brain loses some control over mouth muscles', 'They do not practise speaking enough', 'They learn from teachers who have accents'],
              correct: 0,
              hint: 'She talks about the brain, muscles and the aging process.',
              evidence: '"After your physical growth has stopped, the brain loses some of its ability to change the way it controls the muscles of the mouth. This is what results in an accent."'
            },
            {
              skill: 'Speaker Attitude',
              q: 'How does Eli Hinkel feel about her own Russian accent?',
              choices: ['She is embarrassed by it', 'She thinks it helps her when she teaches', 'She is still trying to get rid of it'],
              correct: 1,
              hint: 'She says there are even BENEFITS to having an accent.',
              evidence: '"She believes her accent helps her when she is teaching students... \'my students think that I really, really know what I\'m talking about.\'"'
            },
            {
              skill: 'Speaker Attitude',
              q: 'What is Marla Yoshida\'s view of ads that promise to "get rid of your accent in only five lessons"?',
              choices: ['They are useful for busy adult learners', 'They work only for young learners', 'They are unrealistic: there are no miracles'],
              correct: 2,
              hint: 'She says improving pronunciation "is not a fast process."',
              evidence: 'Yoshida: "Sometimes, people see advertisements... \'get rid of your accent in only five lessons\'... It\'s not going to happen! There are no miracles."'
            }
          ]
        }
      ]
    }
  ];

  return { HEROES, WORLDS };
})();
