// 2016 Exam Data and Logic
document.addEventListener('DOMContentLoaded', function() {
    // ============ 2016 DATA ============
    
    // 2016 True/False Questions
    const tfQuestions2016 = [
        {
            id: 1,
            text: "After conditioning natural stimulus becomes learned stimulus.",
            answer: false,
            explanation: "FALSE. In classical conditioning, the NEUTRAL stimulus becomes the CONDITIONED stimulus after pairing with the unconditioned stimulus. Natural stimulus refers to unconditioned stimulus."
        },
        {
            id: 2,
            text: "Character refers to enduring features with which each person is born.",
            answer: false,
            explanation: "FALSE. Character refers to moral and ethical aspects of personality that develop through socialization and experience. Temperament is the innate, biological component."
        },
        {
            id: 3,
            text: "A story how you met your dorm mate is categorized as episodic memory.",
            answer: true,
            explanation: "TRUE. Episodic memory stores personal experiences and events (autobiographical memories). Semantic memory stores general knowledge and facts."
        },
        {
            id: 4,
            text: "Learning periods need to be extended to ensure maximum retention of information.",
            answer: false,
            explanation: "FALSE. Distributed practice (shorter sessions spread over time) is more effective than massed practice (extended sessions). This is the spacing effect."
        },
        {
            id: 5,
            text: "Sense of inadequacy is a symptom of histrionic personality disorder.",
            answer: false,
            explanation: "FALSE. Histrionic PD involves attention-seeking, emotionality, and seductiveness. Sense of inadequacy is more characteristic of avoidant personality disorder."
        },
        {
            id: 6,
            text: "Intrinsic motivation will disappear when incentives are removed.",
            answer: false,
            explanation: "FALSE. Intrinsic motivation comes from within (enjoyment, interest). Extrinsic motivation relies on external rewards. Removing incentives doesn't affect intrinsic motivation; may even enhance it (overjustification effect)."
        },
        {
            id: 7,
            text: "Social Learning theory may not emphasize the role of reinforcement.",
            answer: false,
            explanation: "FALSE. Social Learning Theory (Bandura) emphasizes reinforcement, particularly vicarious reinforcement (observing others being reinforced)."
        },
        {
            id: 8,
            text: "Specific phobia involves fear of interacting with others.",
            answer: false,
            explanation: "FALSE. Specific phobia is fear of specific objects/situations (heights, spiders). Fear of social interaction is Social Anxiety Disorder (social phobia)."
        }
    ];

    // 2016 Matching Questions
    const matchingQuestions2016 = {
        columnA: [
            { id: 9, text: "Giving plausible reason" },
            { id: 10, text: "Displaying childish behaviour" },
            { id: 11, text: "Believing the opposite" },
            { id: 12, text: "Taking anger out on innocent parties" },
            { id: 13, text: "Hiding traumatic event" }
        ],
        columnB: [
            { id: 'A', text: "Repression" },
            { id: 'B', text: "Displacement" },
            { id: 'C', text: "Reaction formation" },
            { id: 'D', text: "Regression" },
            { id: 'E', text: "Sublimation" },
            { id: 'F', text: "Rationalization" },
            { id: 'G', text: "Projection" }
        ],
        answers: {
            9: 'F', // Giving plausible reason → Rationalization
            10: 'D', // Displaying childish behaviour → Regression
            11: 'C', // Believing the opposite → Reaction formation
            12: 'B', // Taking anger out on innocent parties → Displacement
            13: 'A'  // Hiding traumatic event → Repression
        },
        explanations: {
            9: "Rationalization: Creating logical explanations for unacceptable behaviors or feelings.",
            10: "Regression: Reverting to earlier developmental stage under stress (childish behavior).",
            11: "Reaction formation: Expressing opposite of true feelings (love→hate, desire→disgust).",
            12: "Displacement: Redirecting emotions from original source to safer target.",
            13: "Repression: Unconsciously blocking unacceptable thoughts/memories from awareness."
        }
    };

    // 2016 Multiple Choice Questions (ALL 30 QUESTIONS)
    const mcQuestions2016 = [
        {
            id: 1,
            text: "Which of the following statements is TRUE about learning?",
            options: [
                "A. Learning is innate",
                "B. Learning involves acquiring new information and skills.",
                "C. Learning is always a positive experience.",
                "D. Learning can be temporary or permanent."
            ],
            answer: "B",
            explanation: "B is correct. Learning involves acquiring new knowledge, behaviors, or skills through experience. It's not innate (A), not always positive (C), and relatively permanent (D says 'can be temporary' which contradicts definition)."
        },
        {
            id: 2,
            text: "A student practices playing the piano for several months and becomes proficient. This situation demonstrates which aspect of learning?",
            options: [
                "A. The relatively permanent change in behavior that occurs through learning.",
                "B. The role of feedback and evaluation in assessing learning progress.",
                "C. The importance of motivation and perseverance in the learning process.",
                "D. The influence of social interaction and collaboration on learning outcomes."
            ],
            answer: "A",
            explanation: "A is correct. The key aspect shown is relatively permanent change (proficiency) through practice. While other factors may be involved, the core demonstration is the change itself."
        },
        {
            id: 3,
            text: "Which of the following is NOT a characteristic of learning?",
            options: [
                "A. Learning is always a linear process.",
                "B. Learning can be influenced by a person's prior experiences.",
                "C. Learning can be motivated by internal and external factors.",
                "D. Learning can involve both conscious and unconscious processes."
            ],
            answer: "A",
            explanation: "A is correct. Learning is NOT always linear - it can involve plateaus, regressions, sudden insights. B, C, and D are true characteristics of learning."
        },
        {
            id: 4,
            text: "Which statement best describes the relationship between learning and behavior?",
            options: [
                "A. Learning always leads to a change in behavior.",
                "B. A change in behavior always guarantees learning has occurred.",
                "C. Observing a change in behavior is the only way to assess learning.",
                "D. Learning can occur without a noticeable change in behavior."
            ],
            answer: "D",
            explanation: "D is correct. Learning can be latent (not immediately shown in behavior). A is false (learning may not show immediately), B is false (behavior change could be temporary), C is false (learning can be assessed through cognitive tests)."
        },
        {
            id: 5,
            text: "Which of the following is an example of stimulus generalization in classical conditioning?",
            options: [
                "A. A child fears all birds after being scared by a rabbit.",
                "B. A dog salivates to the sound of a bell but not to a whistle.",
                "C. A man gets anxious in all crowded places after a bad experience in a mall.",
                "D. A cat only responds to its owner's voice and ignores other voices."
            ],
            answer: "C",
            explanation: "C is correct. Stimulus generalization: response to similar stimuli. A is wrong (different categories), B & D show discrimination (responding to specific stimuli only)."
        },
        {
            id: 6,
            text: "In Pavlov's experiment, which of the following pairings would be the most effective in establishing a conditioned response?",
            options: [
                "A. A loud buzzer immediately followed by food presentation.",
                "B. A soft tone presented several seconds before food arrives.",
                "C. A flashing light presented repeatedly without food following.",
                "D. The sight of an empty food bowl followed by food presentation."
            ],
            answer: "B",
            explanation: "B is correct. Optimal conditioning: CS (tone) precedes UCS (food) by 0.5-1 second (forward conditioning). A has no delay, C has no UCS, D has backward conditioning (less effective)."
        },
        {
            id: 7,
            text: "In a continuous reinforcement schedule, the desired behaviour is reinforced:",
            options: [
                "A. After a fixed number of responses",
                "B. Every time it occurs",
                "C. After a varying number of responses",
                "D. After a fixed amount of time"
            ],
            answer: "B",
            explanation: "B is correct. Continuous reinforcement: reinforcement after EVERY response. A is fixed ratio, C is variable ratio, D is fixed interval."
        },
        {
            id: 8,
            text: "A group of friends witness another friend being praised by their teacher for completing a challenging assignment. Later, they are observed putting in extra effort on their own assignments. What concept from Social Learning Theory best explains this behavior?",
            options: [
                "A. Direct reinforcement",
                "B. Observational learning",
                "C. Operant conditioning",
                "D. Vicarious reinforcement"
            ],
            answer: "D",
            explanation: "D is correct. Vicarious reinforcement: increasing behavior after seeing others reinforced for that behavior. B is broader (includes attention, retention, reproduction)."
        },
        {
            id: 9,
            text: "A child observes his parent exhibiting helpful behavior towards others. He later demonstrates similar behavior towards his classmates. What aspect of Social Learning theory does this scenario highlight?",
            options: [
                "A. The importance of positive reinforcement in shaping behavior",
                "B. The role of attention and retention in observational learning",
                "C. The influence of modeling on acquiring new behaviors and attitudes",
                "D. The concept of reciprocal determinism in social interactions"
            ],
            answer: "C",
            explanation: "C is correct. Modeling: learning by observing and imitating others. The child is modeling parent's helpful behavior."
        },
        {
            id: 10,
            text: "According to cognitive learning theory, what is the primary focus of learning?",
            options: [
                "A. Observable changes in behavior",
                "B. The internal mental processes involved in learning",
                "C. The role of emotions and motivation in shaping learning outcomes",
                "D. The influence of social interaction and collaboration on learning"
            ],
            answer: "B",
            explanation: "B is correct. Cognitive theory focuses on mental processes (thinking, memory, problem-solving). Behaviorism (A) focuses on observable behavior."
        },
        {
            id: 11,
            text: "Which scenario best illustrates the concept of classical conditioning?",
            options: [
                "A. A child learns to solve math problems through repeated practice",
                "B. A dog learns to sit on command after being given a reward each time it obeys.",
                "C. A person feels fearful once experienced a traumatic event.",
                "D. A student feels motivated to study after receiving praise"
            ],
            answer: "C",
            explanation: "C is correct. Classical conditioning: neutral stimulus (event location/context) paired with traumatic event (UCS) elicits fear (CR). A is cognitive learning, B is operant conditioning, D is reinforcement."
        },
        {
            id: 12,
            text: "Tewabech is a manager who wants to improve employee productivity in her department. She decides to implement a reinforcement system where employees receive a bonus for every 10 completed tasks. Which reinforcement schedule is Tewabech using?",
            options: [
                "A. Fixed-ratio schedule",
                "B. Variable-ratio schedule",
                "C. Fixed-interval schedule",
                "D. Variable-interval schedule"
            ],
            answer: "A",
            explanation: "A is correct. Fixed-ratio: reinforcement after fixed number of responses (10 tasks). B is unpredictable number (slot machines), C&D are time-based."
        },
        {
            id: 13,
            text: "Which of the following is an example of negative reinforcement?",
            options: [
                "A. Giving a reward for completing a task.",
                "B. Removing an aversive stimulus to increase the likelihood of behaviour.",
                "C. Providing praise for good behavior.",
                "D. Introducing a pleasant stimulus to encourage a behavior."
            ],
            answer: "B",
            explanation: "B is correct. Negative reinforcement: removing unpleasant stimulus to increase behavior. A, C, D are positive reinforcement (adding pleasant stimulus)."
        },
        {
            id: 14,
            text: "Which of the following best describes insight learning?",
            options: [
                "A. Learning that occurs through reinforcement of specific behaviours.",
                "B. Sudden understanding or solution to a problem without prior trial-and-error",
                "C. Learning that occurs without conscious awareness or attention",
                "D. Behaviour changes that are immediately evident in response to stimuli"
            ],
            answer: "B",
            explanation: "B is correct. Insight learning (Köhler): sudden solution understanding ('aha!' moment). A is operant conditioning, C is implicit learning, D is simple conditioning."
        },
        {
            id: 15,
            text: "Mr. Tesema has the information related to bicycle riding, folding a laundry and climbing a tree, in which memory the information has been stored?",
            options: [
                "A. Semantic memory",
                "B. Episodic memory",
                "C. Procedural memory",
                "D. Explicitly memory"
            ],
            answer: "C",
            explanation: "C is correct. Procedural memory: memory for skills and actions (how to do things). A is factual knowledge, B is personal experiences, D is not a memory type."
        },
        {
            id: 16,
            text: "According to trait theory, which of the following dimensions describes an individual's tendency to be organized, responsible, and self-disciplined?",
            options: [
                "A. Extraversion",
                "B. Conscientiousness",
                "C. Agreeableness",
                "D. Openness"
            ],
            answer: "B",
            explanation: "B is correct. Conscientiousness: organized, responsible, disciplined. Extraversion is sociability, agreeableness is cooperation, openness is creativity."
        },
        {
            id: 17,
            text: "Carl Rogers emphasized that a positive self-concept is promoted by __________",
            options: [
                "A. Unconditional positive regard",
                "B. Sense of control",
                "C. Self-actualization",
                "D. Positive regard"
            ],
            answer: "A",
            explanation: "A is correct. Rogers: unconditional positive regard (acceptance without conditions) promotes healthy self-concept. D is incomplete (could be conditional)."
        },
        {
            id: 18,
            text: "Saba meets someone whose name is Ali at certain place; fortunately his name is identical with her brother's name. So, she can easily remember the name of this person by making an association; such types of memorization involves through __________",
            options: [
                "A. Implicit memory",
                "B. Chunking",
                "C. Maintenance rehearsal",
                "D. Elaborative rehearsal"
            ],
            answer: "D",
            explanation: "D is correct. Elaborative rehearsal: connecting new info to existing knowledge (associating new Ali with brother Ali). B is grouping, C is simple repetition."
        },
        {
            id: 19,
            text: "While walking down the street, Dr. Ayele bumped into one of his former students. He knew he had taught this particular student for three years at university, but he could not remember the student's name. Mr. Ayele's inability to recall the student's name is most likely due to:",
            options: [
                "A. Proactive interference",
                "B. Retroactive interference",
                "C. Retrieval failure",
                "D. Motivated forgetting"
            ],
            answer: "C",
            explanation: "C is correct. Retrieval failure: information stored but can't be accessed (tip-of-the-tongue). Interference would involve similar memories competing."
        },
        {
            id: 20,
            text: "The tendency to recall the last items in a sequence more readily than those in the middle of the sequence is called?",
            options: [
                "A. Recency Effect",
                "B. Primacy Effect",
                "C. Retrieval",
                "D. Recognition"
            ],
            answer: "A",
            explanation: "A is correct. Recency effect: better recall of last items (still in short-term memory). Primacy effect: better recall of first items."
        },
        {
            id: 21,
            text: "Which kind of forgetting is involved when the mathematics I studied yesterday makes it more difficult to learn and remember the physics I am studying today?",
            options: [
                "A. Decay",
                "B. Proactive interference",
                "C. Retroactive interference",
                "D. Retrieval failure"
            ],
            answer: "B",
            explanation: "B is correct. Proactive interference: OLD information (math) interferes with learning NEW information (physics). Retroactive would be new interfering with old."
        },
        {
            id: 22,
            text: "Which of the following is NOT a way to improve memory?",
            options: [
                "A. Paying attention",
                "B. Adding meaning",
                "C. Increasing interference",
                "D. Over learning"
            ],
            answer: "C",
            explanation: "C is correct. Increasing interference HINDERS memory. A, B, D are memory improvement techniques."
        },
        {
            id: 23,
            text: "Subjective feeling of anxiety as a criteria of psychological disorder denotes:",
            options: [
                "A. Abnormality",
                "B. Maladaptive-ness",
                "C. Dangerousness",
                "D. Personal distress"
            ],
            answer: "D",
            explanation: "D is correct. Personal distress: individual experiences anxiety, depression, other negative emotions. Maladaptive-ness impairs functioning."
        },
        {
            id: 24,
            text: "Which type of memory allows you to recall the details of your last year birthday party?",
            options: [
                "A. Episodic memory",
                "B. Working memory",
                "C. Sensory memory",
                "D. Procedural memory"
            ],
            answer: "A",
            explanation: "A is correct. Episodic memory: personal experiences/events. Working memory is short-term processing, sensory holds brief impressions, procedural is skills."
        },
        {
            id: 25,
            text: "A freshman student who came from Northern Ethiopia shows nightmares and flashbacks of the war time conditions. Which type of disorder the student is experiencing?",
            options: [
                "A. Agoraphobia",
                "B. Posttraumatic stress disorder",
                "C. Obsessive-compulsive",
                "D. Personality disorder"
            ],
            answer: "B",
            explanation: "B is correct. PTSD: following traumatic event, with symptoms like nightmares, flashbacks, avoidance. Agoraphobia is fear of places, OCD has obsessions/compulsions."
        },
        {
            id: 26,
            text: "Mr. Gemechu is experiencing a series of symptoms fear of going to public places. He generally avoids being in this places because he is worried about his ability to escape. He is likely suffering from",
            options: [
                "A. Panic disorder",
                "B. Agoraphobia",
                "C. Social phobia",
                "D. Post-traumatic stress disorder"
            ],
            answer: "B",
            explanation: "B is correct. Agoraphobia: fear of situations where escape might be difficult (public places, crowds). Social phobia is fear of social evaluation."
        },
        {
            id: 27,
            text: "Among the following given alternatives, one is NOT the cognitive explanation for the occurrence of psychological disorder?",
            options: [
                "A. The irrational thinking we hold about some things",
                "B. The self-defeating negative thoughts in our mind",
                "C. The inadequate learning from the social environment",
                "D. The irrational beliefs we hold about some things"
            ],
            answer: "C",
            explanation: "C is correct. Inadequate learning is BEHAVIORAL explanation. A, B, D are cognitive explanations (irrational thoughts, beliefs)."
        },
        {
            id: 28,
            text: "Sara has always been cautious and distrustful of others. She constantly suspects that her friends and co-workers are talking behind her back and plotting against her, even when there is no evidence to support these beliefs. Sarah's behavior is most indicative of which personality disorder?",
            options: [
                "A. Schizoid",
                "B. Narcissistic",
                "C. Histrionic",
                "D. Paranoid"
            ],
            answer: "D",
            explanation: "D is correct. Paranoid PD: pervasive distrust, suspicion. Schizoid is social detachment, narcissistic is grandiosity, histrionic is attention-seeking."
        },
        {
            id: 29,
            text: "Which personality disorder is characterized by excessive emotional behavior and a constant need for attention?",
            options: [
                "A. Histrionic",
                "B. Schizotypal",
                "C. Obsessive-Compulsive",
                "D. Paranoid"
            ],
            answer: "A",
            explanation: "A is correct. Histrionic PD: excessive emotionality, attention-seeking. Schizotypal has odd beliefs, OCD PD is perfectionism, paranoid is distrust."
        },
        {
            id: 30,
            text: "Which of the following type of mood disorder is characterized by less swing in mood?",
            options: [
                "A. Cyclothymia",
                "B. Bipolar disorder",
                "C. Dysthymia",
                "D. Major depression"
            ],
            answer: "C",
            explanation: "C is correct. Dysthymia: persistent mild depression (less mood swing). Cyclothymia and bipolar have mood swings, major depression is severe."
        },
        {
            id: 31,
            text: "Which psychological perspective emphasizes the role of unconscious conflicts between biological urges and societal moral standards in the development of abnormal behavior?",
            options: [
                "A. Cognitive perspective",
                "B. Learning perspective",
                "C. Biological perspective",
                "D. Psychoanalytic perspective"
            ],
            answer: "D",
            explanation: "D is correct. Psychoanalytic (Freud): unconscious conflicts between id (biological urges), superego (moral standards), and ego (reality)."
        },
        {
            id: 32,
            text: "Which of the following represents the correct order of Maslow's hierarchy of needs, starting from the most basic to the highest level?",
            options: [
                "A. Esteem, Safety, Physiological, Love/Belonging, Self-Actualization",
                "B. Physiological, Safety, Love/Belonging, Esteem, Self-Actualization",
                "C. Safety, Physiological, Love/Belonging, Esteem, Self-Actualization",
                "D. Physiological, Esteem, Safety, Love/Belonging, Self-Actualization"
            ],
            answer: "B",
            explanation: "B is correct. Maslow's hierarchy (bottom to top): 1) Physiological, 2) Safety, 3) Love/Belonging, 4) Esteem, 5) Self-Actualization."
        }
    ];

    // 2016 Short Answer Questions
    const shortAnswerQuestions2016 = [
        {
            id: 1,
            question: "List four types of conflict of motives (2pts)",
            answer: "1. <strong>Approach-Approach Conflict</strong>: Choosing between two desirable options (e.g., two good job offers).<br>2. <strong>Avoidance-Avoidance Conflict</strong>: Choosing between two undesirable options (e.g., painful surgery vs. chronic illness).<br>3. <strong>Approach-Avoidance Conflict</strong>: Single option has both positive and negative aspects (e.g., delicious but unhealthy food).<br>4. <strong>Double/Multiple Approach-Avoidance Conflict</strong>: Multiple options each have positive and negative aspects (e.g., choosing between college majors)."
        },
        {
            id: 2,
            question: "Write the three treatment techniques of psychological disorders (1.5pts)",
            answer: "1. <strong>Psychotherapy</strong>: Psychological methods to treat disorders:<br>   - Cognitive-Behavioral Therapy (CBT)<br>   - Psychoanalysis/Psychodynamic therapy<br>   - Humanistic/Client-centered therapy<br>2. <strong>Biomedical Therapy</strong>: Biological interventions:<br>   - Psychopharmacology (medications)<br>   - Electroconvulsive Therapy (ECT)<br>   - Psychosurgery (rare)<br>3. <strong>Combined/Integrative Approaches</strong>: Eclectic therapy combining different techniques."
        },
        {
            id: 3,
            question: "Define personality (1.5pts)",
            answer: "Personality is the unique, relatively stable pattern of thoughts, feelings, and behaviors that characterizes an individual over time and across situations. It includes:<br>1. Consistent patterns that differentiate individuals<br>2. Both observable behaviors and internal mental processes<br>3. Biological predispositions and environmental influences<br>4. Psychodynamic, trait, humanistic, and social-cognitive components"
        }
    ];

    // ============ STATE VARIABLES ============
    let tfScore = 0;
    let mcScore = 0;
    let matchScore = 0;
    let totalAnswered = 0;
    const answeredTF = new Set();
    const answeredMC = new Set();
    const answeredMatch = new Set();
    let matchSelections = {};

    // ============ INITIALIZATION ============
    function initializePage() {
        renderTFQuestions();
        renderMatching();
        renderMCQuestions();
        renderShortAnswers();
        updateStats();
    }

    // ============ RENDER FUNCTIONS ============

    // Render True/False Questions
    function renderTFQuestions() {
        const container = document.getElementById('tf-questions-container');
        container.innerHTML = '';
        
        tfQuestions2016.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `tf-${q.id}`;
            
            card.innerHTML = `
                <div class="question-text">${q.id}. ${q.text}</div>
                <div class="tf-buttons">
                    <button class="tf-btn" onclick="checkTFAnswer2016(${q.id}, true)">True</button>
                    <button class="tf-btn" onclick="checkTFAnswer2016(${q.id}, false)">False</button>
                </div>
                <div class="explanation-box" id="tf-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    <p><strong>Answer: ${q.answer ? 'True' : 'False'}</strong>. ${q.explanation}</p>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // Render Matching Section
    function renderMatching() {
        const container = document.getElementById('match-container');
        
        let columnAHTML = '<h3>Column A</h3>';
        matchingQuestions2016.columnA.forEach(item => {
            columnAHTML += `
                <div class="matching-item" id="match-item-${item.id}">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                    <select class="form-select matching-dropdown" id="match-select-${item.id}" onchange="checkMatchingAnswer2016(${item.id})">
                        <option value="">Select match</option>
                        ${matchingQuestions2016.columnB.map(opt => 
                            `<option value="${opt.id}">${opt.id}. ${opt.text}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        });
        
        let columnBHTML = '<h3>Column B</h3>';
        matchingQuestions2016.columnB.forEach(item => {
            columnBHTML += `
                <div class="matching-item">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                </div>
            `;
        });
        
        container.innerHTML = `
            <div class="matching-instructions">
                <p><strong>Instructions:</strong> Match each item in Column A with the correct defense mechanism from Column B. Each option can be used only once.</p>
                <button class="btn btn-primary" onclick="checkAllMatching2016()">
                    <i class="fas fa-check"></i> Check All Answers
                </button>
                <button class="btn btn-secondary" onclick="resetMatching2016()">
                    <i class="fas fa-redo"></i> Reset
                </button>
            </div>
            <div class="matching-columns">
                <div class="matching-column">${columnAHTML}</div>
                <div class="matching-column">${columnBHTML}</div>
            </div>
            <div class="matching-feedback" id="match-feedback"></div>
        `;
    }

    // Render Multiple Choice Questions
    function renderMCQuestions() {
        const container = document.getElementById('mc-questions-container');
        container.innerHTML = '';
        
        mcQuestions2016.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `mc-${q.id}`;
            
            let optionsHTML = '';
            q.options.forEach((opt, index) => {
                const letter = String.fromCharCode(65 + index);
                optionsHTML += `
                    <button class="option-btn" onclick="checkMCAnswer2016(${q.id}, '${letter}')">
                        ${opt}
                    </button>
                `;
            });
            
            card.innerHTML = `
                <div class="question-text">${q.id}. ${q.text}</div>
                <div class="mc-options">
                    ${optionsHTML}
                </div>
                <div class="explanation-box" id="mc-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    <p>${q.explanation}</p>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // Render Short Answers
    function renderShortAnswers() {
        const container = document.getElementById('short-answers-container');
        container.innerHTML = '';
        
        shortAnswerQuestions2016.forEach(q => {
            const card = document.createElement('div');
            card.className = 'short-answer-card';
            
            card.innerHTML = `
                <div class="short-question">${q.id}. ${q.question}</div>
                <button class="reveal-btn" onclick="revealShortAnswer2016(${q.id})">
                    <i class="fas fa-eye"></i> Show Model Answer
                </button>
                <div class="short-solution" id="short-answer-${q.id}" style="display: none;">
                    ${q.answer}
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // ============ ANSWER CHECKING FUNCTIONS ============

     // Check True/False Answer for 2016
    window.checkTFAnswer2016 = function(id, userAnswer) {
        const question = tfQuestions2016.find(q => q.id === id);
        const card = document.getElementById(`tf-${id}`);
        const buttons = card.querySelectorAll('.tf-btn');
        const explanation = document.getElementById(`tf-explanation-${id}`);
        
        // Remove ALL previous styling
        buttons.forEach(btn => {
            btn.classList.remove('selected-true', 'selected-false', 'correct-answer', 'incorrect-answer');
        });
        
        const isCorrect = (userAnswer === question.answer);
        
        // Mark user's selection
        if (userAnswer) { // User clicked True
            buttons[0].classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
            buttons[0].classList.add('selected-true');
        } else { // User clicked False
            buttons[1].classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
            buttons[1].classList.add('selected-false');
        }
        
        // Always mark the correct answer
        if (question.answer) { // Correct is True
            buttons[0].classList.add('correct-answer');
        } else { // Correct is False
            buttons[1].classList.add('correct-answer');
        }
        
        // Update statistics
        if (!answeredTF.has(id)) {
            totalAnswered++;
            if (isCorrect) tfScore++;
            answeredTF.add(id);
            updateStats();
        }
        
        // Show explanation
        explanation.classList.add('show');
    };

    // Check Matching Answer
    window.checkMatchingAnswer2016 = function(id) {
        const select = document.getElementById(`match-select-${id}`);
        const selectedValue = select.value;
        const item = document.getElementById(`match-item-${id}`);
        
        // Store selection
        matchSelections[id] = selectedValue;
        
        // Reset styling
        item.style.backgroundColor = '';
        item.style.borderColor = '';
        
        if (selectedValue) {
            if (selectedValue === matchingQuestions2016.answers[id]) {
                item.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
                item.style.borderColor = '#4caf50';
            } else {
                item.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
                item.style.borderColor = '#f44336';
            }
        }
    };

    // Check All Matching Answers
    window.checkAllMatching2016 = function() {
        let correctCount = 0;
        const feedback = document.getElementById('match-feedback');
        
        Object.keys(matchingQuestions2016.answers).forEach(id => {
            const select = document.getElementById(`match-select-${id}`);
            const item = document.getElementById(`match-item-${id}`);
            
            if (select.value === matchingQuestions2016.answers[id]) {
                correctCount++;
                item.style.backgroundColor = 'rgba(76, 175, 80, 0.15)';
                item.style.borderColor = '#4caf50';
            } else if (select.value) {
                item.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
                item.style.borderColor = '#f44336';
            } else {
                item.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
                item.style.borderColor = '#ffc107';
            }
        });
        
        // Update match score if not already counted
        if (!answeredMatch.has('all')) {
            matchScore = correctCount;
            answeredMatch.add('all');
            updateStats();
        }
        
        // Show feedback
        const percentage = Math.round((correctCount / 5) * 100);
        feedback.innerHTML = `
            <h4>Matching Results</h4>
            <p>You got ${correctCount} out of 5 correct (${percentage}%)</p>
            ${correctCount < 5 ? '<p><button class="btn btn-sm btn-outline-primary" onclick="showMatchingExplanations2016()">Show Explanations</button></p>' : ''}
        `;
    };

    // Show Matching Explanations
    window.showMatchingExplanations2016 = function() {
        const feedback = document.getElementById('match-feedback');
        let explanationsHTML = '<h5>Explanations:</h5>';
        
        Object.keys(matchingQuestions2016.answers).forEach(id => {
            explanationsHTML += `
                <p><strong>${id}. ${matchingQuestions2016.columnA.find(item => item.id == id).text}</strong><br>
                Correct answer: ${matchingQuestions2016.answers[id]} (${matchingQuestions2016.columnB.find(item => item.id === matchingQuestions2016.answers[id]).text})<br>
                ${matchingQuestions2016.explanations[id]}</p>
            `;
        });
        
        feedback.innerHTML += explanationsHTML;
    };

    // Reset Matching
    window.resetMatching2016 = function() {
        Object.keys(matchingQuestions2016.answers).forEach(id => {
            const select = document.getElementById(`match-select-${id}`);
            const item = document.getElementById(`match-item-${id}`);
            select.value = '';
            item.style.backgroundColor = '';
            item.style.borderColor = '';
        });
        
        matchSelections = {};
        matchScore = 0;
        answeredMatch.delete('all');
        document.getElementById('match-feedback').innerHTML = '';
        updateStats();
    };

    // Check Multiple Choice Answer
    window.checkMCAnswer2016 = function(id, userAnswer) {
        const question = mcQuestions2016.find(q => q.id === id);
        const card = document.getElementById(`mc-${id}`);
        const buttons = card.querySelectorAll('.option-btn');
        const explanation = document.getElementById(`mc-explanation-${id}`);
        
        // Remove previous styling
        buttons.forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Mark selected button
        const selectedIndex = userAnswer.charCodeAt(0) - 65;
        buttons[selectedIndex].classList.add('selected');
        
        // Check correctness
        const isCorrect = (userAnswer === question.answer);
        
        if (isCorrect) {
            buttons[selectedIndex].classList.add('correct');
        } else {
            buttons[selectedIndex].classList.add('incorrect');
            // Highlight correct answer
            const correctIndex = question.answer.charCodeAt(0) - 65;
            buttons[correctIndex].classList.add('correct');
        }
        
        // Update statistics if first time answering
        if (!answeredMC.has(id)) {
            totalAnswered++;
            if (isCorrect) mcScore++;
            answeredMC.add(id);
            updateStats();
        }
        
        // Show explanation
        explanation.classList.add('show');
    };

    // Reveal Short Answer
    window.revealShortAnswer2016 = function(id) {
        const solution = document.getElementById(`short-answer-${id}`);
        const button = solution.previousElementSibling;
        
        if (solution.style.display === 'none') {
            solution.style.display = 'block';
            button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
        } else {
            solution.style.display = 'none';
            button.innerHTML = '<i class="fas fa-eye"></i> Show Model Answer';
        }
    };

    // Update Statistics
    function updateStats() {
        document.getElementById('tf-score-2016').textContent = tfScore;
        document.getElementById('mc-score-2016').textContent = mcScore;
        document.getElementById('match-score-2016').textContent = matchScore;
        
        const totalCorrect = tfScore + mcScore + matchScore;
        const maxPossible = tfQuestions2016.length + mcQuestions2016.length + 5; // 5 matching items
        const percentage = maxPossible > 0 ? Math.round((totalCorrect / maxPossible) * 100) : 0;
        document.getElementById('total-score-2016').textContent = `${percentage}%`;
    }

    // Initialize the page
    initializePage();
});