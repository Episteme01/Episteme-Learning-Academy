const subjects = [
{
    id: "math",
    title: "Mathematics",
    description: "Master numbers, algebra, and logical problem-solving.",
    lessons: [
        {
            id: "fractions",
            title: "Understanding Fractions",
            content: `
WHAT IS A FRACTION?

A fraction represents a part of a whole.

It has two parts:
- Numerator (top number)
- Denominator (bottom number)

Example:
1/2 means 1 part out of 2 equal parts.

TYPES OF FRACTIONS:
1. Proper fraction (1/2)
2. Improper fraction (5/3)
3. Mixed number (1 1/2)

ADDING FRACTIONS:
To add fractions with the same denominator:
1/4 + 2/4 = 3/4

If denominators are different:
Find a common denominator first.
            `
        },
        {
            id: "algebra",
            title: "Introduction to Algebra",
            content: `
WHAT IS ALGEBRA?

Algebra uses letters to represent numbers.

Example:
x + 5 = 10

To find x:
Subtract 5 from both sides.

x = 5

TERMS:
Variable → a letter representing a number
Constant → a fixed number
Expression → combination of numbers and variables

Algebra helps us solve real-life problems.
            `
        },
        {
            id: "percentages",
            title: "Understanding Percentages",
            content: `
PERCENT means "out of 100".

50% means 50 out of 100.

To find percentage:
20% of 50

Step 1:
20/100 × 50

Step 2:
= 10

So 20% of 50 is 10.
            `
        }
    ],
    quiz: {
        questions: [
            {
                question: "What is 1/2 + 1/2?",
                options: ["1", "2", "1/4", "0"],
                answer: 0
            },
            {
                question: "If x = 5, what is 2x?",
                options: ["10", "7", "5", "2"],
                answer: 0
            },
            {
                question: "20% of 50 is?",
                options: ["5", "10", "20", "25"],
                answer: 1
            }
        ]
    }
},

{
    id: "english",
    title: "English Language",
    description: "Master grammar, comprehension, writing, and effective communication.",
    lessons: [
        {
            id: "nouns",
            title: "Understanding Nouns",
            content: `
WHAT IS A NOUN?

A noun is a naming word. It names a person, place, animal, or thing.

Examples:
Person → Teacher, Ahmed
Place → School, Lagos
Animal → Lion, Goat
Thing → Book, Table

TYPES OF NOUNS:

1. Common Noun – general names (boy, city)
2. Proper Noun – specific names (Nigeria, Aisha)
3. Collective Noun – group names (team, class)
4. Abstract Noun – ideas or feelings (love, honesty)

EXERCISE:
Identify the nouns in this sentence:
"The boy carried a bag to school."
            `
        },
        {
            id: "verbs",
            title: "Understanding Verbs",
            content: `
WHAT IS A VERB?

A verb is an action word.

Examples:
Run, eat, write, speak.

TYPES OF VERBS:

1. Action Verbs – show physical action (jump, read)
2. Linking Verbs – connect subject to description (is, are, was)
3. Helping Verbs – support main verbs (has, have, will)

Example:
She is reading a book.
"is" = helping verb
"reading" = main verb

Verbs show tense:
Past → walked
Present → walk
Future → will walk
            `
        },
        {
            id: "tenses",
            title: "English Tenses",
            content: `
TENSES show the time of an action.

1. Present Tense:
I eat rice.

2. Past Tense:
I ate rice.

3. Future Tense:
I will eat rice.

Present Continuous:
I am eating rice.

Past Continuous:
I was eating rice.

Future Continuous:
I will be eating rice.

Correct tense usage makes communication clear.
            `
        },
        {
            id: "comprehension",
            title: "Reading Comprehension Skills",
            content: `
Reading comprehension means understanding what you read.

STEPS:
1. Read carefully
2. Identify main idea
3. Understand keywords
4. Answer questions based on the passage

Main Idea:
The most important point in a paragraph.

Supporting Details:
Sentences that explain the main idea.

Good readers ask:
Who? What? When? Why? How?
            `
        }
    ],
    quiz: {
        questions: [
            {
                question: "Which of the following is a proper noun?",
                options: ["city", "boy", "Nigeria", "school"],
                answer: 2
            },
            {
                question: "Which word is a verb?",
                options: ["run", "table", "book", "chair"],
                answer: 0
            },
            {
                question: "Past tense of 'eat' is?",
                options: ["eats", "ate", "eating", "will eat"],
                answer: 1
            }
        ]
    }
},

{
    id: "science",
    title: "Basic Science",
    description: "Explore the natural world through observation, experiments, and reasoning.",
    lessons: [
        {
            id: "matter",
            title: "States of Matter",
            content: `
Matter is anything that has mass and occupies space.

There are three main states of matter:

1. Solid
- Has fixed shape
- Has fixed volume
Example: Stone, Book

2. Liquid
- Has fixed volume
- Takes shape of container
Example: Water, Milk

3. Gas
- No fixed shape
- No fixed volume
Example: Air, Oxygen

Matter can change state:
Ice (solid) → Water (liquid) → Steam (gas)
            `
        },
        {
            id: "livingthings",
            title: "Living and Non-Living Things",
            content: `
Living Things:
- Grow
- Breathe
- Reproduce
- Move
- Respond to environment

Examples:
Human beings, animals, plants

Non-Living Things:
Do not grow or reproduce.
Examples:
Stone, chair, car

Plants are living things because they grow and reproduce.
            `
        },
        {
            id: "solar",
            title: "The Solar System",
            content: `
The Solar System consists of the Sun and the planets.

The eight planets are:
Mercury
Venus
Earth
Mars
Jupiter
Saturn
Uranus
Neptune

The Sun is a star.
Earth rotates on its axis and revolves around the Sun.
            `
        },
        {
            id: "energy",
            title: "Forms of Energy",
            content: `
Energy is the ability to do work.

Types of energy:
1. Heat Energy
2. Light Energy
3. Sound Energy
4. Electrical Energy
5. Mechanical Energy

Energy can change from one form to another.
Example:
Electrical energy → Light energy (bulb)
            `
        }
    ],
    quiz: {
        questions: [
            {
                question: "Which state of matter has no fixed shape?",
                options: ["Solid", "Liquid", "Gas", "Metal"],
                answer: 2
            },
            {
                question: "Which of the following is a living thing?",
                options: ["Stone", "Tree", "Chair", "Table"],
                answer: 1
            },
            {
                question: "How many planets are in the Solar System?",
                options: ["7", "8", "9", "10"],
                answer: 1
            }
        ]
    }
},

{
    id: "ict",
    title: "ICT",
    description: "Learn about computers, digital literacy, software, and the world of technology.",
    lessons: [
        {
            id: "computer-basics",
            title: "Introduction to Computers",
            content: `
A computer is an electronic device that processes data and performs tasks based on instructions.

Main Components:
1. Input Devices – keyboard, mouse
2. Output Devices – monitor, printer
3. Storage – hard disk, SSD
4. Processor (CPU) – brain of the computer
5. Memory (RAM) – temporary storage for running programs

Uses:
- Communication (emails, social media)
- Education (research, e-learning)
- Business (accounting, presentations)
- Entertainment (games, videos)
            `
        },
        {
            id: "hardware",
            title: "Computer Hardware",
            content: `
Hardware refers to the physical parts of a computer.

Types of Hardware:
1. Central Processing Unit (CPU) – executes instructions
2. Monitor – displays information
3. Keyboard & Mouse – input data
4. Storage Devices – HDD, SSD, USB drives
5. Networking Devices – routers, modems

Tip:
Regular maintenance keeps hardware working efficiently.
            `
        },
        {
            id: "software",
            title: "Computer Software",
            content: `
Software is a set of programs that tell the computer what to do.

Types:
1. System Software – Operating systems (Windows, Linux, macOS)
2. Application Software – Word processors, spreadsheets, browsers
3. Utility Software – Antivirus, disk cleanup tools

Example:
Microsoft Word is an application software used for typing documents.
            `
        },
        {
            id: "internet",
            title: "Introduction to the Internet",
            content: `
The Internet is a global network connecting millions of computers.

Uses:
- Communication (emails, chat, video calls)
- Education (research, e-learning)
- Information (news, encyclopedias)
- Social media (Facebook, Twitter)

Safety Tips:
- Never share personal info online
- Use strong passwords
- Avoid clicking unknown links
            `
        },
        {
            id: "digital-skills",
            title: "Basic Digital Skills",
            content: `
Digital skills are essential for everyday life and work.

Skills include:
1. Typing efficiently
2. Using word processors (Microsoft Word, Google Docs)
3. Using spreadsheets (Excel, Google Sheets)
4. Creating presentations (PowerPoint, Google Slides)
5. Navigating the internet safely
6. Using email for communication

Tip:
Practice regularly to improve your digital fluency.
            `
        }
    ],
    quiz: {
        questions: [
            {
                question: "Which of these is an input device?",
                options: ["Monitor", "Printer", "Keyboard", "Speaker"],
                answer: 2
            },
            {
                question: "What is the CPU often called?",
                options: ["Memory", "Brain of the computer", "Hard drive", "Software"],
                answer: 1
            },
            {
                question: "Which software is used for typing documents?",
                options: ["Excel", "Word", "Browser", "Antivirus"],
                answer: 1
            },
            {
                question: "Which of the following is a safe internet practice?",
                options: ["Share passwords online", "Click unknown links", "Use strong passwords", "Send personal info to strangers"],
                answer: 2
            },
            {
                question: "What does RAM do?",
                options: ["Stores data permanently", "Processes instructions", "Temporary storage for running programs", "Displays output"],
                answer: 2
            }
        ]
    }
},
 
{
    id: "general",
    title: "General Knowledge",
    description: "Expand your awareness about the world around you.",
    lessons: [
        {
            id: "continents",
            title: "The Seven Continents",
            content: `
The Earth is divided into seven continents:

1. Africa
2. Asia
3. Europe
4. North America
5. South America
6. Australia
7. Antarctica

Africa is the second largest continent and home to Nigeria.
Asia is the largest continent by population.
Antarctica is the coldest continent.
            `
        },
        {
            id: "solar",
            title: "The Solar System",
            content: `
The Solar System consists of the Sun and the eight planets that orbit it.

The eight planets are:
Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.

The Sun is a star that provides heat and light.
Earth is the only planet known to support life.
            `
        }
    ],
    quiz: {
        questions: [
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                answer: 2
            },
            {
                question: "Which planet do we live on?",
                options: ["Mars", "Earth", "Venus", "Jupiter"],
                answer: 1
            }
        ]
    }
}
];