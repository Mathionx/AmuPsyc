// 2015 Exam Data and Logic
document.addEventListener('DOMContentLoaded', function() {
    // ============ 2015 DATA ============
    
    // 2015 True/False Questions
    const tfQuestions2015 = [
        {
            id: 1,
            text: "If a student reads psychology handouts after completing freshman program for deepening knowledge, it is an intrinsic motivation.",
            answer: true,
            explanation: "TRUE. Intrinsic motivation comes from within (interest, enjoyment, personal growth). Reading for deepening knowledge shows internal drive, not external rewards."
        },
        {
            id: 2,
            text: "Grades and praises by teachers serve as primary reinforcers for human behavior.",
            answer: false,
            explanation: "FALSE. Grades and praises are SECONDARY (conditioned) reinforcers. Primary reinforcers satisfy biological needs (food, water). Secondary reinforcers gain value through association with primary reinforcers."
        },
        {
            id: 3,
            text: "Conscience is the component of super ego that punishes us when we do something wrong.",
            answer: true,
            explanation: "TRUE. Freud's superego has two parts: 1) Conscience (punishes with guilt), 2) Ego-ideal (rewards with pride). Conscience internalizes societal 'should nots'."
        },
        {
            id: 4,
            text: "Temperament differs from character in that it develops through experience.",
            answer: false,
            explanation: "FALSE. Temperament is INNATE biological predisposition. Character develops through experience and socialization (moral/ethical aspects)."
        },
        {
            id: 5,
            text: "People with narcissistic personality disorder have poor self-esteem and impulse control.",
            answer: false,
            explanation: "FALSE. Narcissistic PD involves GRANDIOSE self-esteem (overinflated self-worth), not poor self-esteem. They DO have poor impulse control and lack of empathy."
        },
        {
            id: 6,
            text: "According to trait theories, the relative strength and combination of each trait differs from person to person.",
            answer: true,
            explanation: "TRUE. Trait theories (Allport, Cattell, Big Five) propose unique personality profiles based on different combinations and strengths of traits."
        },
        {
            id: 7,
            text: "Schizoid personality disorder is characterized by little interest in social relationship.",
            answer: true,
            explanation: "TRUE. Schizoid PD: social detachment, limited emotional expression, preference for solitary activities. Different from schizophrenia (psychosis)."
        },
        {
            id: 8,
            text: "Defense mechanisms are conscious tactics of ego's inability to manage the conflicts of id and super ego.",
            answer: false,
            explanation: "FALSE. Defense mechanisms are UNCONSCIOUS strategies ego uses to reduce anxiety from id-superego conflicts. We're not consciously aware of using them."
        },
        {
            id: 9,
            text: "For cognitive theorists, psychological disorder is caused by improper functioning of brain chemicals.",
            answer: false,
            explanation: "FALSE. Cognitive theorists focus on irrational thoughts, maladaptive thinking patterns. Biological theorists focus on brain chemicals/structures."
        },
        {
            id: 10,
            text: "Explicit memory involves conscious recollection of factual information.",
            answer: true,
            explanation: "TRUE. Explicit/declarative memory: conscious recall of facts (semantic) and events (episodic). Implicit memory: unconscious memory for skills/procedures."
        },
        {
            id: 11,
            text: "Youngsters can remember complex material better than the aged.",
            answer: true,
            explanation: "TRUE. Generally true due to age-related cognitive changes. Older adults may show decline in working memory and processing speed, but crystallized intelligence (knowledge) remains stable."
        },
        {
            id: 12,
            text: "Sensory memory stores information for manipulation of cognitive tasks such as learning.",
            answer: false,
            explanation: "FALSE. Sensory memory holds raw sensory input briefly (<1 second). WORKING memory manipulates information for cognitive tasks. This confuses sensory vs. working memory."
        }
    ];

    // 2015 Matching Questions
    const matchingQuestions2015 = {
        columnA: [
            { id: 13, text: "We forget to get rid of uncomfortable memories." },
            { id: 14, text: "We forget because of limited capacity of STM." },
            { id: 15, text: "We forget because of not making use of information." },
            { id: 16, text: "We forget due to confusion of one information with another." },
            { id: 17, text: "We forget because we lack reminders." },
            { id: 18, text: "We forget because of passage of time." },
            { id: 19, text: "We forget through repression." }
        ],
        columnB: [
            { id: 'A', text: "Decay theory" },
            { id: 'B', text: "Interference theory" },
            { id: 'C', text: "Displacement theory" },
            { id: 'D', text: "Motivated forgetting theory" },
            { id: 'E', text: "Cue dependent forgetting theory" }
        ],
        answers: {
            13: 'D', // Uncomfortable memories → Motivated forgetting
            14: 'C', // Limited capacity STM → Displacement
            15: 'A', // Not making use → Decay (disuse)
            16: 'B', // Confusion of information → Interference
            17: 'E', // Lack reminders → Cue dependent
            18: 'A', // Passage of time → Decay
            19: 'D'  // Repression → Motivated forgetting
        },
        explanations: {
            13: "Motivated Forgetting Theory: Freudian repression - unconsciously forgetting traumatic/anxiety-provoking memories.",
            14: "Displacement Theory: In STM, new information pushes out old information due to limited capacity (7±2 items).",
            15: "Decay Theory: Memories fade with disuse over time (trace decay).",
            16: "Interference Theory: Similar memories compete/overwrite each other (proactive/retroactive interference).",
            17: "Cue-dependent Forgetting: Cannot retrieve without proper cues/context (encoding specificity principle).",
            18: "Decay Theory: Time passage causes memory traces to fade (especially in STM).",
            19: "Motivated Forgetting: Repression as defense mechanism to avoid anxiety."
        }
    };

    // 2015 Multiple Choice Questions
    const mcQuestions2015 = [
        {
            id: 20,
            text: "In the definition of learning, the phrase 'result of practice/experience' implies that:",
            options: [
                "A. A newly learnt behavior should be everlasting.",
                "B. A learner has to interact with environment to learn new behavior.",
                "C. Learning takes place inside the mind of each learner.",
                "D. Learning doesn't include temporary changes in behavior."
            ],
            answer: "B",
            explanation: "B is correct. Learning requires interaction with environment (practice/experience). A: learning is relatively permanent but not necessarily everlasting. D: learning excludes temporary changes (fatigue, drugs)."
        },
        {
            id: 21,
            text: "One of the following is False about the principles of learning?",
            options: [
                "A. Substitute objects produce intense learning compared to real ones.",
                "B. Learning is strengthened when followed by pleasant consequences.",
                "C. Things learned first produce strong memory & are remembered better.",
                "D. Retention of information becomes longer when learning has meaningful practice."
            ],
            answer: "A",
            explanation: "A is FALSE. Real objects produce MORE intense learning than substitutes (principle of intensity). B is Thorndike's Law of Effect, C is primacy effect, D is meaningful learning principle."
        },
        {
            id: 22,
            text: "Which of the following is true about observational learning?",
            options: [
                "A. Indirect reinforcement is not necessary for learning to occur.",
                "B. People learn through direct engagement in behaviors.",
                "C. People can use self-reinforcement to motivate their behavior.",
                "D. Reinforcement serves as an antecedent rather than a consequence."
            ],
            answer: "C",
            explanation: "C is correct. Bandura's social learning: self-reinforcement (internal standards/rewards) motivates behavior. A: vicarious reinforcement important. B: observational = indirect learning. D: reinforcement is consequence."
        },
        {
            id: 23,
            text: "Which of the following is true about latent learning theory?",
            options: [
                "A. Trial and error is important for learning to occur.",
                "B. If there is no incentive, a learner may not show what has been learnt.",
                "C. Reinforcement plays a role in learning a behavior.",
                "D. Learning and performance should occur together."
            ],
            answer: "B",
            explanation: "B is correct. Tolman's latent learning: learning occurs without reinforcement, but performance requires incentive/motivation. A: trial-and-error is behaviorist. C: reinforcement affects performance, not necessarily learning. D: they can be separate."
        },
        {
            id: 24,
            text: "A student who cheats on the final exam is given an 'F' grade. Consequently, most students started to avoid cheating. This case best indicates the principle of:",
            options: [
                "A. Contingency",
                "B. Consistency",
                "C. Immediacy",
                "D. Intensity"
            ],
            answer: "D",
            explanation: "D is correct. Principle of Intensity: strong punishment (F grade) produces strong learning effect (avoid cheating). Contingency: punishment must follow behavior. Immediacy: punishment should be immediate."
        },
        {
            id: 25,
            text: "Presenting the conditioned stimulus without the unconditioned stimulus for a long time will result in:",
            options: [
                "A. Stimulus generalization",
                "B. Stimulus discrimination",
                "C. Extinction",
                "D. Spontaneous recovery"
            ],
            answer: "C",
            explanation: "C is correct. Extinction: CS presented without UCS → CR gradually disappears. Spontaneous recovery is temporary return of extinguished response after rest."
        },
        {
            id: 26,
            text: "If a player is benched for not performing well during a match, it explains:",
            options: [
                "A. Negative punishment",
                "B. Negative reinforcement",
                "C. Positive punishment",
                "D. Positive reinforcement"
            ],
            answer: "A",
            explanation: "A is correct. Negative punishment: removing desirable stimulus (playing time) to decrease behavior (poor performance). Positive punishment would add unpleasant stimulus."
        },
        {
            id: 27,
            text: "When students get 5 marks for completing each project, it is an example of _____ schedule of reinforcement?",
            options: [
                "A. Fixed-interval",
                "B. Fixed-ratio",
                "C. Variable-interval",
                "D. Variable-ratio"
            ],
            answer: "B",
            explanation: "B is correct. Fixed-ratio: reinforcement after fixed number of responses (each project = 1 response). FI is time-based, VR is unpredictable number, VI is unpredictable time."
        },
        {
            id: 28,
            text: "A stimulus that does not elicit a response in an organism before conditioning is a(n) _____.",
            options: [
                "A. neutral stimulus",
                "B. unconditioned stimulus",
                "C. conditioned stimulus",
                "D. unconditioned response"
            ],
            answer: "A",
            explanation: "A is correct. Neutral stimulus (NS): initially doesn't elicit response. After pairing with UCS becomes Conditioned Stimulus (CS). UCS naturally elicits UCR."
        },
        {
            id: 29,
            text: "Which one of the following is not an example of implicit memory?",
            options: [
                "A. Chopping an onion.",
                "B. Riding a motor bicycle.",
                "C. Recalling mobile numbers.",
                "D. Playing an electronic guitar."
            ],
            answer: "C",
            explanation: "C is correct. Recalling mobile numbers is EXPLICIT memory (conscious recall). A, B, D are procedural/implicit memories (skills performed without conscious thought)."
        },
        {
            id: 30,
            text: "A given behavior is said to be 'deviant' if:",
            options: [
                "A. the actions of a person is inappropriate for the expected norm.",
                "B. the behavior causes social or personal difficulties for the individual.",
                "C. the person experiences unpleasant emotions.",
                "D. the behavior is threatening for the self or others."
            ],
            answer: "A",
            explanation: "A is correct. Deviance: statistically unusual/violates social norms. B describes maladaptiveness, C describes personal distress, D describes dangerousness - all are criteria for psychological disorders."
        },
        {
            id: 31,
            text: "According to the psychological perspective, psychological disorders are caused by all EXCEPT:",
            options: [
                "A. Unresolved childhood conflicts",
                "B. Inappropriate learning",
                "C. Predisposing for evil spirit",
                "D. Irrational thinking process"
            ],
            answer: "C",
            explanation: "C is correct. Evil spirit possession is SUPERNATURAL explanation, not psychological. A is psychoanalytic, B is behavioral, D is cognitive perspective."
        },
        {
            id: 32,
            text: "Which one of the following is not characteristic of major depression?",
            options: [
                "A. Feeling of hopelessness",
                "B. Suspiciousness",
                "C. Lack of concentration",
                "D. Suicidal attempt"
            ],
            answer: "B",
            explanation: "B is correct. Suspiciousness is characteristic of paranoid disorders, not depression. Depression symptoms: depressed mood, anhedonia, hopelessness, poor concentration, suicidal thoughts."
        },
        {
            id: 33,
            text: "Generalized anxiety disorders are characterized by excessive fear of:",
            options: [
                "A. public situations",
                "B. specific things",
                "C. poor functioning",
                "D. every aspect of life"
            ],
            answer: "D",
            explanation: "D is correct. GAD: excessive, uncontrollable worry about multiple life domains. A is agoraphobia/social phobia, B is specific phobia, C is consequence not fear object."
        },
        {
            id: 34,
            text: "Hazal is a survivor of Turkey's earthquake, but recently she reported that the event is disturbing her as if it is happening now. Hazal's disorder is:",
            options: [
                "A. Generalized anxiety",
                "B. Panic attacks",
                "C. Post-traumatic stress",
                "D. Obsessive compulsive"
            ],
            answer: "C",
            explanation: "C is correct. PTSD: re-experiencing trauma (flashbacks, nightmares), avoidance, hyperarousal following traumatic event. GAD is general worry, panic is sudden anxiety attacks, OCD has obsessions/compulsions."
        },
        {
            id: 35,
            text: "Which one of the following is not type of personality disorder?",
            options: [
                "A. Obsessive compulsive",
                "B. Avoidant",
                "C. Antisocial",
                "D. Dysthymic"
            ],
            answer: "D",
            explanation: "D is correct. Dysthymia is a MOOD disorder (persistent mild depression). A, B, C are personality disorders in DSM-5."
        },
        {
            id: 36,
            text: "A personality disorder is characterized by:",
            options: [
                "A. General feeling of desperation and inactivity",
                "B. Inflexible pattern of behavior and thinking",
                "C. Serious level of fear",
                "D. Intensive feeling of mood swing"
            ],
            answer: "B",
            answer: "B",
            explanation: "B is correct. Personality disorders: enduring, inflexible patterns across situations causing impairment. A describes depression, C describes anxiety disorders, D describes mood disorders."
        },
        {
            id: 37,
            text: "John is 4th year university student who believes he is the only handsome and intelligent student in the university. What type of personality disorder does John have?",
            options: [
                "A. Narcissistic",
                "B. Paranoid",
                "C. Borderline",
                "D. Antisocial"
            ],
            answer: "A",
            explanation: "A is correct. Narcissistic PD: grandiosity, need for admiration, lack of empathy. Paranoid is distrustful, borderline is unstable relationships, antisocial is disregard for others' rights."
        },
        {
            id: 38,
            text: "The major focus of behavioral therapy is:",
            options: [
                "A. Creating rational thinking process",
                "B. Understanding of early experiences",
                "C. Teaching appropriate way of acting",
                "D. Restructuring bodily functioning"
            ],
            answer: "C",
            explanation: "C is correct. Behavioral therapy focuses on changing maladaptive BEHAVIORS through conditioning techniques. A is cognitive therapy, B is psychodynamic, D is biological therapy."
        },
        {
            id: 39,
            text: "A student fainting and becoming dizzy in a class during a final exam most probably experiencing:",
            options: [
                "A. Panic disorder",
                "B. Specific phobia",
                "C. Generalized anxiety disorder",
                "D. Post-traumatic stress disorder"
            ],
            answer: "A",
            explanation: "A is correct. Panic disorder: sudden panic attacks with physical symptoms (dizziness, fainting, palpitations). Exam situation triggers anxiety leading to panic attack."
        },
        {
            id: 40,
            text: "Which treatment modality mostly centered on the issue of a relationship?",
            options: [
                "A. Group therapy",
                "B. Individual therapy",
                "C. Family therapy",
                "D. Eclectic therapy"
            ],
            answer: "C",
            explanation: "C is correct. Family therapy focuses on family relationships and dynamics. Group therapy involves multiple clients, individual is one-on-one, eclectic combines approaches."
        }
    ];
    
    // 2015 doesn't have short answer in the provided text
    const shortAnswerQuestions2015 = [
        {
            id: 1,
            question: "Note: There are no short answer questions in the 2015 exam",
            answer: "The 2015 AMU Psychology Final Exam only contains True/False, Matching, and Multiple Choice sections. No short answer questions were provided in the exam paper."
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
    // (Same functions as 2016/2017 but with 2015 data)
    // Render True/False Questions
    function renderTFQuestions() {
        const container = document.getElementById('tf-questions-container');
        container.innerHTML = '';
        
        tfQuestions2015.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `tf-${q.id}`;
            
            card.innerHTML = `
                <div class="question-text">${q.id}. ${q.text}</div>
                <div class="tf-buttons">
                    <button class="tf-btn" onclick="checkTFAnswer2015(${q.id}, true)">True</button>
                    <button class="tf-btn" onclick="checkTFAnswer2015(${q.id}, false)">False</button>
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
        matchingQuestions2015.columnA.forEach(item => {
            columnAHTML += `
                <div class="matching-item" id="match-item-${item.id}">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                    <select class="form-select matching-dropdown" id="match-select-${item.id}" onchange="checkMatchingAnswer2015(${item.id})">
                        <option value="">Select match</option>
                        ${matchingQuestions2015.columnB.map(opt => 
                            `<option value="${opt.id}">${opt.id}. ${opt.text}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        });
        
        let columnBHTML = '<h3>Column B</h3>';
        matchingQuestions2015.columnB.forEach(item => {
            columnBHTML += `
                <div class="matching-item">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                </div>
            `;
        });
        
        container.innerHTML = `
            <div class="matching-instructions">
                <p><strong>Instructions:</strong> Match each reason for forgetting in Column A with the correct theory from Column B. Note: Some theories may be used more than once.</p>
                <button class="btn btn-primary" onclick="checkAllMatching2015()">
                    <i class="fas fa-check"></i> Check All Answers
                </button>
                <button class="btn btn-secondary" onclick="resetMatching2015()">
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
        
        mcQuestions2015.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `mc-${q.id}`;
            
            let optionsHTML = '';
            q.options.forEach((opt, index) => {
                const letter = String.fromCharCode(65 + index);
                optionsHTML += `
                    <button class="option-btn" onclick="checkMCAnswer2015(${q.id}, '${letter}')">
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
        
        shortAnswerQuestions2015.forEach(q => {
            const card = document.createElement('div');
            card.className = 'short-answer-card';
            
            card.innerHTML = `
                <div class="short-question">${q.id}. ${q.question}</div>
                <button class="reveal-btn" onclick="revealShortAnswer2015(${q.id})">
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
    // (Same functions as 2016/2017 but with 2015 prefix)


    // Check True/False Answer for 2015
    window.checkTFAnswer2015 = function(id, userAnswer) {
        const question = tfQuestions2015.find(q => q.id === id);
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
    window.checkMatchingAnswer2015 = function(id) {
        const select = document.getElementById(`match-select-${id}`);
        const selectedValue = select.value;
        const item = document.getElementById(`match-item-${id}`);
        
        // Store selection
        matchSelections[id] = selectedValue;
        
        // Reset styling
        item.style.backgroundColor = '';
        item.style.borderColor = '';
        
        if (selectedValue) {
            if (selectedValue === matchingQuestions2015.answers[id]) {
                item.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
                item.style.borderColor = '#4caf50';
            } else {
                item.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
                item.style.borderColor = '#f44336';
            }
        }
    };

    // Check All Matching Answers
    window.checkAllMatching2015 = function() {
        let correctCount = 0;
        const feedback = document.getElementById('match-feedback');
        
        Object.keys(matchingQuestions2015.answers).forEach(id => {
            const select = document.getElementById(`match-select-${id}`);
            const item = document.getElementById(`match-item-${id}`);
            
            if (select.value === matchingQuestions2015.answers[id]) {
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
        const percentage = Math.round((correctCount / 7) * 100);
        feedback.innerHTML = `
            <h4>Matching Results</h4>
            <p>You got ${correctCount} out of 7 correct (${percentage}%)</p>
            ${correctCount < 7 ? '<p><button class="btn btn-sm btn-outline-primary" onclick="showMatchingExplanations2015()">Show Explanations</button></p>' : ''}
        `;
    };

    // Show Matching Explanations
    window.showMatchingExplanations2015 = function() {
        const feedback = document.getElementById('match-feedback');
        let explanationsHTML = '<h5>Explanations:</h5>';
        
        Object.keys(matchingQuestions2015.answers).forEach(id => {
            explanationsHTML += `
                <p><strong>${id}. ${matchingQuestions2015.columnA.find(item => item.id == id).text}</strong><br>
                Correct answer: ${matchingQuestions2015.answers[id]} (${matchingQuestions2015.columnB.find(item => item.id === matchingQuestions2015.answers[id]).text})<br>
                ${matchingQuestions2015.explanations[id]}</p>
            `;
        });
        
        feedback.innerHTML += explanationsHTML;
    };

    // Reset Matching
    window.resetMatching2015 = function() {
        Object.keys(matchingQuestions2015.answers).forEach(id => {
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
    window.checkMCAnswer2015 = function(id, userAnswer) {
        const question = mcQuestions2015.find(q => q.id === id);
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
    window.revealShortAnswer2015 = function(id) {
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
        document.getElementById('tf-score-2015').textContent = tfScore;
        document.getElementById('mc-score-2015').textContent = mcScore;
        document.getElementById('match-score-2015').textContent = matchScore;
        
        const totalCorrect = tfScore + mcScore + matchScore;
        const maxPossible = tfQuestions2015.length + mcQuestions2015.length + 7; // 7 matching items
        const percentage = maxPossible > 0 ? Math.round((totalCorrect / maxPossible) * 100) : 0;
        document.getElementById('total-score-2015').textContent = `${percentage}%`;
    }

    // Initialize the page
    initializePage();
});