// 2017 Exam Data and Logic
document.addEventListener('DOMContentLoaded', function() {
    // ============ DATA ============
    
    // 2017 True/False Questions
    const tfQuestions2017 = [
        {
            id: 1,
            text: "Behavioural learning theories focus on the role of external factors on observable behaviour.",
            answer: true,
            explanation: "TRUE. Behavioural learning theories emphasize observable behaviours and how they're influenced by environmental factors (stimuli, reinforcement), rather than internal mental processes."
        },
        {
            id: 2,
            text: "Positive reinforcement strengthens behaviour, whereas negative reinforcement weakens it.",
            answer: false,
            explanation: "FALSE. BOTH positive and negative reinforcement STRENGTHEN behaviour. Positive reinforcement adds a pleasant stimulus, negative reinforcement removes an unpleasant stimulus - both increase the likelihood of behaviour repeating."
        },
        {
            id: 3,
            text: "Once information is transferred into long-term memory, forgetting cannot happen.",
            answer: false,
            explanation: "FALSE. Information in long-term memory can still be forgotten due to decay, interference, retrieval failure, or motivated forgetting. LTM is relatively permanent but not immune to forgetting."
        },
        {
            id: 4,
            text: "In classical conditioning, extinction occurs when a learned stimulus is repeatedly presented without UCS.",
            answer: true,
            explanation: "TRUE. Extinction in classical conditioning happens when the Conditioned Stimulus (CS) is presented repeatedly WITHOUT the Unconditioned Stimulus (UCS), causing the Conditioned Response (CR) to gradually disappear."
        },
        {
            id: 5,
            text: "According to displacement theory, the incoming information clears out the existing information in long term memory.",
            answer: false,
            explanation: "FALSE. Displacement theory applies to SHORT-TERM memory, where new information pushes out old information due to limited capacity (about 7±2 items). LTM doesn't work this way."
        },
        {
            id: 6,
            text: "Chunking is a method used to increase the duration of information in the short-term memory.",
            answer: false,
            explanation: "FALSE. Chunking increases the CAPACITY of STM (allowing more information to be held by grouping items), not the duration. Duration is increased through rehearsal."
        },
        {
            id: 7,
            text: "In psychoanalytic theory, an individual will have healthy personality when ego has control over the id and super ego.",
            answer: true,
            explanation: "TRUE. According to Freud, psychological health occurs when the ego successfully balances the demands of the id (instincts), superego (morality), and reality."
        },
        {
            id: 8,
            text: "According to Carl Rogers, our personality is governed by conflict between opposing forces.",
            answer: false,
            explanation: "FALSE. Carl Rogers' humanistic theory focuses on self-actualization and congruence between self-concept and experience, NOT conflict. The conflict idea is from Freud's psychoanalytic theory."
        },
        {
            id: 9,
            text: "Dysthymia is a less severe and persistent form of bipolar disorder.",
            answer: false,
            explanation: "FALSE. Dysthymia is a persistent depressive disorder (chronic, mild depression), NOT a form of bipolar disorder. Bipolar involves mood swings between depression and mania."
        },
        {
            id: 10,
            text: "Behavioural therapy is more effective for treating phobias than for treating depression.",
            answer: true,
            explanation: "TRUE. Behavioural therapies (like systematic desensitization, exposure therapy) are highly effective for phobias. For depression, cognitive-behavioural therapy (CBT) that addresses thoughts AND behaviours is typically more effective."
        }
    ];

    // 2017 Matching Questions
    const matchingQuestions2017 = {
        columnA: [
            { id: 1, text: "Inflated sense of self-worth, seeking admiration" },
            { id: 2, text: "Uninterested in close social relationships, emotionally cold" },
            { id: 3, text: "Suspicious, mistrustful, holding grudges" },
            { id: 4, text: "Clinginess and affection or anger and resentment" },
            { id: 5, text: "Disregard for social rules, not feeling guilty for wrongdoing" }
        ],
        columnB: [
            { id: 'A', text: "Histrionic" },
            { id: 'B', text: "Narcissistic" },
            { id: 'C', text: "Paranoid" },
            { id: 'D', text: "Schizotypal" },
            { id: 'E', text: "Schizoid" },
            { id: 'F', text: "Obsessive compulsive" },
            { id: 'G', text: "Anti-social" },
            { id: 'H', text: "Borderline" }
        ],
        answers: {
            1: 'B', // Inflated self-worth → Narcissistic
            2: 'E', // Uninterested in relationships → Schizoid
            3: 'C', // Suspicious, mistrustful → Paranoid
            4: 'H', // Clinginess and anger → Borderline
            5: 'G'  // Disregard for rules → Anti-social
        },
        explanations: {
            1: "Narcissistic Personality Disorder: Characterized by grandiosity, need for admiration, lack of empathy.",
            2: "Schizoid Personality Disorder: Detachment from social relationships, restricted emotional expression.",
            3: "Paranoid Personality Disorder: Pervasive distrust and suspicion of others.",
            4: "Borderline Personality Disorder: Instability in relationships, self-image, affects, with impulsivity.",
            5: "Antisocial Personality Disorder: Disregard for and violation of rights of others, lack of remorse."
        }
    };

    // 2017 Multiple Choice Questions
    const mcQuestions2017 = [
        {
            id: 1,
            text: "The changes in behavior due to illness or fatigue are typically not considered learning because:",
            options: [
                "A. They are intentional and deliberate.",
                "B. They are the result of practice and experience.",
                "C. They are not influenced by cognitive processes.",
                "D. They are not enduring and can be easily reversed."
            ],
            answer: "D",
            explanation: "D is correct. Learning involves relatively permanent changes in behavior. Changes due to illness/fatigue are temporary and reversible, thus not considered learning."
        },
        {
            id: 2,
            text: "Which of the following is NOT a way that learning can be demonstrated?",
            options: [
                "A. Improved test scores",
                "B. Increased confidence",
                "C. Increased in height",
                "D. Enhanced problem-solving skills"
            ],
            answer: "C",
            explanation: "C is correct. Increased height is a physiological/biological change, not a result of learning. Learning involves changes in behavior, knowledge, or skills through experience."
        },
        {
            id: 3,
            text: "Students would remember more, the words and ideas the teacher uses while introducing the lesson than the ones used during the lesson. This example describes the _____ principle of learning?",
            options: [
                "A. readiness",
                "B. primacy",
                "C. recency",
                "D. intensity"
            ],
            answer: "B",
            explanation: "B is correct. Primacy effect: items presented first in a series are remembered better. Recency effect applies to items presented last."
        },
        {
            id: 4,
            text: "Which of the following is an example of vicarious reinforcement?",
            options: [
                "A. A child receives praise for completing his/her homework on time",
                "B. A child shouts at his friend after watching his older brother praised for doing the same.",
                "C. A dog is given a piece of meat for chasing away a wolf from herd of sheep.",
                "D. An athlete wins a gold medal for coming first in the race."
            ],
            answer: "B",
            explanation: "B is correct. Vicarious reinforcement occurs when an individual's behavior is influenced by observing someone else being reinforced for that behavior."
        },
        {
            id: 5,
            text: "Factors such as the absence or presence of fresh air, light, comfortable surroundings, and absence of distractions that affect learning are referred to as _____.",
            options: [
                "A. Good working conditions",
                "B. Background experiences",
                "C. Length of the learning period",
                "D. Health condition of the learner"
            ],
            answer: "A",
            explanation: "A is correct. These environmental factors that facilitate or hinder learning are called good working conditions or learning environment factors."
        },
        {
            id: 6,
            text: "A stage of observational learning where the learner engages in practicing and repeating the behavior of the model is termed as _____.",
            options: [
                "A. attention",
                "B. motivation",
                "C. retention",
                "D. reproduction"
            ],
            answer: "D",
            explanation: "D is correct. Bandura's observational learning stages: 1) Attention, 2) Retention, 3) Reproduction (practicing), 4) Motivation."
        },
        {
            id: 7,
            text: "In _____, the stimulus or experience occurs before the behavior and then gets paired with the behavior.",
            options: [
                "A. observational learning",
                "B. operant conditioning",
                "C. classical conditioning",
                "D. counter conditioning"
            ],
            answer: "C",
            explanation: "C is correct. In classical conditioning (Pavlov), a neutral stimulus (bell) precedes and becomes associated with an unconditioned stimulus (food)."
        },
        {
            id: 8,
            text: "A car company features stunning landscapes and relaxing music in its advertisements of cars. Consumers begin to associate the cars with feelings of peace and luxury. The UCS here is _____.",
            options: [
                "A. stunning landscapes and relaxing music",
                "B. the relaxing music and the cars",
                "C. the consumers' feelings of peace and luxury",
                "D. stunning landscape and consumers' feelings"
            ],
            answer: "C",
            explanation: "C is correct. UCS (Unconditioned Stimulus) naturally evokes response. Here, feelings of peace/luxury (UCS) naturally elicit positive emotions (UCR), paired with cars (NS becoming CS)."
        },
        {
            id: 9,
            text: "An example of negative reinforcement is when a teacher says:",
            options: [
                "A. 'if you do your homework, you will get a prize.'",
                "B. 'if you score 10 out of 10 on test one, you will not have to do assignment one.'",
                "C. 'if you score 10 out of 10 on test one, you will join me in the dinner.'",
                "D. 'if you do not finish your homework, you will be given another homework.'"
            ],
            answer: "B",
            explanation: "B is correct. Negative reinforcement: removing an aversive stimulus (assignment) to increase behavior (scoring well). Option A is positive reinforcement (adding prize)."
        },
        {
            id: 10,
            text: "Which of the following is an example of fixed ratio schedule of reinforcement?",
            options: [
                "A. A teacher checks homework sometimes and gives bonus points.",
                "B. Students get praised for working hard, but not all the time.",
                "C. A student chooses an activity of interest after reading three books.",
                "D. A supervisor visits employees on job every Thursdays."
            ],
            answer: "C",
            explanation: "C is correct. Fixed ratio: reinforcement after a fixed number of responses (3 books). A & B are variable schedules. D is fixed interval (time-based)."
        },
        {
            id: 11,
            text: "Which of the following is true about the central idea of latent learning?",
            options: [
                "A. Reinforcement is not mandatory for learning to occur.",
                "B. Learning and performance are the same.",
                "C. Reinforcement basically enables learners acquire new behavior.",
                "D. Learning must be overtly demonstrated."
            ],
            answer: "A",
            explanation: "A is correct. Latent learning (Tolman): learning occurs without immediate reinforcement and may not be demonstrated until incentive is provided."
        },
        {
            id: 12,
            text: "A freshman student experiences intense feelings of anger and frustration. In order to cope with these feeling, he joins a gym as an outlet for his emotions. The defense mechanism used is _____.",
            options: [
                "A. displacement",
                "B. sublimation",
                "C. projection",
                "D. repression"
            ],
            answer: "B",
            explanation: "B is correct. Sublimation: channeling unacceptable impulses into socially acceptable activities. Displacement would be taking anger out on someone else."
        },
        {
            id: 13,
            text: "Merry often tries new things and enjoys facing challenging circumstances. According to the Big Five theory, which trait does she exemplify?",
            options: [
                "A. Conscientiousness",
                "B. Extraversion",
                "C. Openness to experience",
                "D. Neuroticism"
            ],
            answer: "C",
            explanation: "C is correct. Openness to experience: curiosity, creativity, willingness to try new things. Extraversion is sociability, conscientiousness is organization."
        },
        {
            id: 14,
            text: "Gemechu has feelings of inadequacy but he instead portrays himself as highly competent and successful. He believes that others are the ones who doubt his abilities. Which defense mechanism is Gemechu using?",
            options: [
                "A. Rationalization",
                "B. Projection",
                "C. Repression",
                "D. Denial"
            ],
            answer: "B",
            explanation: "B is correct. Projection: attributing one's own unacceptable feelings/thoughts to others. Here, Gemechu projects his self-doubt onto others."
        },
        {
            id: 15,
            text: "According to Humanistic theories, the concept of self-actualization refers to:",
            options: [
                "A. a condition of becoming famous and likable",
                "B. a tendency that causes human personality problems.",
                "C. a state of becoming who one would like to become",
                "D. a condition of striving for one's physiological needs"
            ],
            answer: "C",
            explanation: "C is correct. Self-actualization (Maslow, Rogers): realizing one's full potential, becoming the best version of oneself. It's the highest need in Maslow's hierarchy."
        },
        {
            id: 16,
            text: "Information within our sensory memory system is:",
            options: [
                "A. meaningful",
                "B. a replica of environmental stimuli",
                "C. permanently stored",
                "D. being processed"
            ],
            answer: "B",
            explanation: "B is correct. Sensory memory holds exact copies of sensory information for very brief periods (<1 second for iconic, 2-4 seconds for echoic)."
        },
        {
            id: 17,
            text: "A tip-of-the-tongue experience, in which we are trying to recall something but cannot quite come up with it, is a very good example of:",
            options: [
                "A. Motivated forgetting",
                "B. Interference",
                "C. Cue-dependent/retrieval failure",
                "D. Information decay"
            ],
            answer: "C",
            explanation: "C is correct. Tip-of-the-tongue phenomenon demonstrates retrieval failure - the information is stored but can't be accessed without proper cues."
        },
        {
            id: 18,
            text: "The interference theory suggests that forgetting occurs when:",
            options: [
                "A. old information is replaced by the new one",
                "B. information is not properly encoded",
                "C. information is not made use of for a long time",
                "D. information of the same kind competes for retrieval"
            ],
            answer: "D",
            explanation: "D is correct. Interference theory: forgetting occurs when similar memories interfere with retrieval (proactive: old interferes with new; retroactive: new interferes with old)."
        },
        {
            id: 19,
            text: "Which of the following is NOT a mood disorder?",
            options: [
                "A. Dysthymia",
                "B. Obsessive compulsive disorder",
                "C. Bipolar disorder",
                "D. Cyclothymia"
            ],
            answer: "B",
            explanation: "B is correct. OCD is an anxiety disorder, not a mood disorder. Mood disorders include depression (dysthymia, major depression) and bipolar disorders."
        },
        {
            id: 20,
            text: "Abnormal behaviors arise from inappropriate learning. This explains is the concept of:",
            options: [
                "A. Behavioral perspective",
                "B. Cognitive",
                "C. Psychoanalytic",
                "D. Humanistic"
            ],
            answer: "A",
            explanation: "A is correct. Behavioral perspective views abnormal behavior as learned through conditioning (classical, operant) or modeling (observational learning)."
        }
    ];

    // 2017 Short Answer Questions
    const shortAnswerQuestions2017 = [
        {
            id: 1,
            question: "List at least three theories of motivation (1.5 pts)",
            answer: "1. <strong>Drive Reduction Theory</strong> (Hull): Behavior is motivated by biological needs creating drives that we seek to reduce.<br>2. <strong>Maslow's Hierarchy of Needs</strong>: Human needs arranged in pyramid from basic physiological needs to self-actualization.<br>3. <strong>Expectancy Theory</strong> (Vroom): Motivation = Expectancy × Instrumentality × Valence.<br>4. <strong>Arousal Theory</strong>: People are motivated to maintain optimal level of arousal.<br>5. <strong>Incentive Theory</strong>: Behavior is motivated by desire for rewards/positive reinforcement."
        },
        {
            id: 2,
            question: "Write at least three ways to improve memory (1.5 pts)",
            answer: "1. <strong>Elaborative Rehearsal</strong>: Connect new information to existing knowledge, add meaning.<br>2. <strong>Organization/Chunking</strong>: Group related information together.<br>3. <strong>Mnemonic Devices</strong>: Use acronyms, visual imagery, method of loci.<br>4. <strong>Spaced Repetition</strong>: Distribute practice over time rather than cramming.<br>5. <strong>Active Retrieval Practice</strong>: Test yourself rather than just re-reading.<br>6. <strong>Adequate Sleep</strong>: Consolidation of memories occurs during sleep."
        },
        {
            id: 3,
            question: "Write the two parts of super ego (2 pts)",
            answer: "According to Freud's psychoanalytic theory, the superego has two components:<br>1. <strong>Conscience</strong>: The 'moral compass' that punishes us (through guilt) when we violate moral standards.<br>2. <strong>Ego Ideal</strong>: The image of the perfect self we strive to become, rewarding us (through pride) when we meet these ideals."
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
        
        tfQuestions2017.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `tf-${q.id}`;
            
            card.innerHTML = `
                <div class="question-text">${q.id}. ${q.text}</div>
                <div class="tf-buttons">
                    <button class="tf-btn" onclick="checkTFAnswer2017(${q.id}, true)">True</button>
                    <button class="tf-btn" onclick="checkTFAnswer2017(${q.id}, false)">False</button>
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
        matchingQuestions2017.columnA.forEach(item => {
            columnAHTML += `
                <div class="matching-item" id="match-item-${item.id}">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                    <select class="form-select matching-dropdown" id="match-select-${item.id}" onchange="checkMatchingAnswer(${item.id})">
                        <option value="">Select match</option>
                        ${matchingQuestions2017.columnB.map(opt => 
                            `<option value="${opt.id}">${opt.id}. ${opt.text}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        });
        
        let columnBHTML = '<h3>Column B</h3>';
        matchingQuestions2017.columnB.forEach(item => {
            columnBHTML += `
                <div class="matching-item">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                </div>
            `;
        });
        
        container.innerHTML = `
            <div class="matching-instructions">
                <p><strong>Instructions:</strong> Match each item in Column A with the correct personality disorder from Column B. Each option can be used only once.</p>
                <button class="btn btn-primary" onclick="checkAllMatching()">
                    <i class="fas fa-check"></i> Check All Answers
                </button>
                <button class="btn btn-secondary" onclick="resetMatching()">
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
        
        mcQuestions2017.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `mc-${q.id}`;
            
            let optionsHTML = '';
            q.options.forEach((opt, index) => {
                const letter = String.fromCharCode(65 + index);
                optionsHTML += `
                    <button class="option-btn" onclick="checkMCAnswer2017(${q.id}, '${letter}')">
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
        
        shortAnswerQuestions2017.forEach(q => {
            const card = document.createElement('div');
            card.className = 'short-answer-card';
            
            card.innerHTML = `
                <div class="short-question">${q.id}. ${q.question}</div>
                <button class="reveal-btn" onclick="revealShortAnswer(${q.id})">
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
    // Check True/False Answer
    window.checkTFAnswer2017 = function(id, userAnswer) {
        const question = tfQuestions2017.find(q => q.id === id);
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
    window.checkMatchingAnswer = function(id) {
        const select = document.getElementById(`match-select-${id}`);
        const selectedValue = select.value;
        const item = document.getElementById(`match-item-${id}`);
        
        // Store selection
        matchSelections[id] = selectedValue;
        
        // Reset styling
        item.style.backgroundColor = '';
        item.style.borderColor = '';
        
        if (selectedValue) {
            if (selectedValue === matchingQuestions2017.answers[id]) {
                item.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
                item.style.borderColor = '#4caf50';
            } else {
                item.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
                item.style.borderColor = '#f44336';
            }
        }
    };

    // Check All Matching Answers
    window.checkAllMatching = function() {
        let correctCount = 0;
        const feedback = document.getElementById('match-feedback');
        
        Object.keys(matchingQuestions2017.answers).forEach(id => {
            const select = document.getElementById(`match-select-${id}`);
            const item = document.getElementById(`match-item-${id}`);
            
            if (select.value === matchingQuestions2017.answers[id]) {
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
            ${correctCount < 5 ? '<p><button class="btn btn-sm btn-outline-primary" onclick="showMatchingExplanations()">Show Explanations</button></p>' : ''}
        `;
    };

    // Show Matching Explanations
    window.showMatchingExplanations = function() {
        const feedback = document.getElementById('match-feedback');
        let explanationsHTML = '<h5>Explanations:</h5>';
        
        Object.keys(matchingQuestions2017.answers).forEach(id => {
            explanationsHTML += `
                <p><strong>${id}. ${matchingQuestions2017.columnA.find(item => item.id == id).text}</strong><br>
                Correct answer: ${matchingQuestions2017.answers[id]} (${matchingQuestions2017.columnB.find(item => item.id === matchingQuestions2017.answers[id]).text})<br>
                ${matchingQuestions2017.explanations[id]}</p>
            `;
        });
        
        feedback.innerHTML += explanationsHTML;
    };

    // Reset Matching
    window.resetMatching = function() {
        Object.keys(matchingQuestions2017.answers).forEach(id => {
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
    window.checkMCAnswer2017 = function(id, userAnswer) {
        const question = mcQuestions2017.find(q => q.id === id);
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
    window.revealShortAnswer = function(id) {
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
        document.getElementById('tf-score-2017').textContent = tfScore;
        document.getElementById('mc-score-2017').textContent = mcScore;
        document.getElementById('match-score-2017').textContent = matchScore;
        
        const totalCorrect = tfScore + mcScore + matchScore;
        const maxPossible = tfQuestions2017.length + mcQuestions2017.length + 5; // 5 matching items
        const percentage = maxPossible > 0 ? Math.round((totalCorrect / maxPossible) * 100) : 0;
        document.getElementById('total-score-2017').textContent = `${percentage}%`;
    }

    // Initialize the page
    initializePage();
});