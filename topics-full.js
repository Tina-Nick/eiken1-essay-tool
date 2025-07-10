<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eiken Grade 1 Essay Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 1em;
      padding: 0;
      background-color: #f9f9f9;
    }
    textarea {
      width: 100%;
      height: 150px;
      margin-top: 0.5em;
    }
    button {
      margin-right: 0.5em;
      margin-top: 0.5em;
    }
    .section {
      margin-bottom: 2em;
    }
    .timer {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Eiken Grade 1 Essay Practice</h1>

  <div class="section">
    <button onclick="nextTopic()">Next Topic</button>
    <span id="topic" style="font-weight:bold"></span>
  </div>

  <div class="section">
    <button onclick="startTimer()">Start</button>
    <button onclick="pauseTimer()">Pause</button>
    <button onclick="resetTimer()">Reset</button>
    <span class="timer" id="timer">0:00</span>
  </div>

  <div class="section">
    <label for="userEssay">Your Essay:</label>
    <textarea id="userEssay"></textarea>
    <div>Word count: <span id="wordCount">0</span></div>
    <button onclick="checkEssay()">Check Essay</button>
    <div id="feedback"></div>
  </div>

  <div class="section">
    <button onclick="showAnswer()">Show Model Answer</button>
    <pre id="modelAnswer"></pre>
  </div>

  <script src="topics-full.js"></script>
  <script>
    let currentTopicIndex = -1;
    let timerInterval;
    let seconds = 0;

    function nextTopic() {
      currentTopicIndex = Math.floor(Math.random() * topics.length);
      document.getElementById('topic').textContent = topics[currentTopicIndex].topic;
      document.getElementById('modelAnswer').textContent = '';
      document.getElementById('userEssay').value = '';
      document.getElementById('feedback').textContent = '';
      document.getElementById('wordCount').textContent = 0;
      resetTimer();
    }

    function showAnswer() {
      if (currentTopicIndex >= 0) {
        document.getElementById('modelAnswer').textContent = topics[currentTopicIndex].answer;
      }
    }

    function startTimer() {
      if (!timerInterval) {
        timerInterval = setInterval(() => {
          seconds++;
          const min = Math.floor(seconds / 60);
          const sec = seconds % 60;
          document.getElementById('timer').textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }, 1000);
      }
    }

    function pauseTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    function resetTimer() {
      pauseTimer();
      seconds = 0;
      document.getElementById('timer').textContent = '0:00';
    }

    document.getElementById('userEssay').addEventListener('input', () => {
      const words = document.getElementById('userEssay').value.trim().split(/\s+/);
      const wordCount = words.filter(word => word.length > 0).length;
      document.getElementById('wordCount').textContent = wordCount;
    });

    function checkEssay() {
      const text = document.getElementById('userEssay').value;
      let feedback = '';

      const reasonMatches = (text.match(/first|second|third/gi) || []).length;
      if (reasonMatches < 3) {
        feedback += '✘ Try to include three clear reasons (First, Second, Third).\n';
      } else {
        feedback += '✔ Good structure with three reasons.\n';
      }

      if (/\bteh\b/i.test(text)) {
        feedback += '✘ "teh" might be a typo. Did you mean "the"?\n';
      }

      if (!/in conclusion/i.test(text)) {
        feedback += '✘ Try to include a clear conclusion phrase like "In conclusion".\n';
      } else {
        feedback += '✔ Clear conclusion found.\n';
      }

      document.getElementById('feedback').textContent = feedback;
    },
  {
    topic: "Is a cashless society a good idea?",
    answer: `I believe that a cashless society is a good idea.
First, it improves convenience and speed. People can pay for goods and services quickly with credit cards or smartphones, reducing waiting times and the need to carry physical money.
Second, it enhances security and reduces crime. Digital payments are traceable, which makes theft and illegal transactions more difficult. It also lowers the risk of losing money or having it stolen.
Third, it promotes transparency and helps the government collect taxes more accurately. Transactions are recorded automatically, making it harder to hide income or avoid taxes.
In conclusion, while privacy concerns must be addressed, moving toward a cashless society can benefit individuals and the economy as a whole.`
  },
  {
    topic: "Should college education be free?",
    answer: `I believe that college education should be free.
First, it provides equal opportunities for all students, regardless of their financial background. Everyone should have access to higher education based on ability, not wealth.
Second, free college can benefit the economy. Educated workers are more productive, innovative, and earn higher incomes, which leads to greater tax revenue and economic growth.
Third, it reduces student debt, allowing young people to start their adult lives without financial burdens. This encourages spending, investment, and entrepreneurship.
In conclusion, making college education free would help create a fairer, stronger society by empowering young people and building a skilled workforce.`
  },
  {
    topic: "Will renewable energy replace fossil fuels?",
    answer: `I believe that renewable energy will eventually replace fossil fuels.
First, renewable sources like solar and wind are becoming cheaper and more efficient. Many countries are investing in clean energy technologies to reduce their dependence on fossil fuels.
Second, fossil fuels cause pollution and contribute to climate change. Switching to renewable energy helps protect the environment and improves public health by reducing emissions.
Third, renewable energy is sustainable and infinite. Unlike oil or coal, sunlight and wind will never run out. This makes them a reliable energy source for the future.
In conclusion, although the transition will take time, renewable energy has the potential to fully replace fossil fuels and support a cleaner, healthier planet.`
  },
  {
    topic: "Is it necessary to regulate social media?",
    answer: `I believe that regulating social media is necessary.
First, social media can spread false information quickly, which can lead to confusion, fear, and even violence. Regulation can help ensure accuracy and accountability.
Second, social media platforms often collect personal data without users fully understanding. Clear rules are needed to protect privacy and prevent abuse of data.
Third, online bullying and hate speech are serious problems. Regulation can help create a safer environment by enforcing standards and punishing harmful behavior.
In conclusion, while freedom of expression is important, proper regulation of social media is essential to protect people and society from its negative effects.`
  },
  {
    topic: "Can technology solve environmental problems?",
    answer: `I believe that technology can help solve environmental problems.
First, clean technologies like solar panels and electric cars reduce pollution and greenhouse gas emissions. Continued development makes them more effective and affordable.
Second, technology helps monitor environmental changes. Satellites and sensors provide data on air quality, deforestation, and climate patterns, which helps governments make better decisions.
Third, innovation can lead to new solutions. For example, scientists are creating materials that absorb carbon dioxide or developing vertical farms to grow food with less land and water.
In conclusion, while human behavior must also change, technology is a powerful tool in addressing environmental challenges and building a sustainable future.`
  },
  {
    topic: "Should voting be mandatory?",
    answer: `I believe that voting should not be mandatory.
First, forcing people to vote may lead to uninformed choices. Democracy works best when voters are engaged and make decisions based on understanding, not obligation.
Second, mandatory voting may violate personal freedom. In a free society, citizens should have the right to choose whether or not to participate in elections.
Third, there are better ways to increase voter turnout, such as improving education, making voting more accessible, or building trust in politics.
In conclusion, while voter participation is important, making voting mandatory could have negative effects. Encouraging voluntary engagement is a better solution.`
  },
  {
    topic: "Can tourism harm local communities?",
    answer: `I believe that tourism can harm local communities.
First, excessive tourism can lead to overcrowding and damage natural or historical sites. This reduces the quality of life for local residents and the experience for visitors.
Second, tourism often raises prices for housing and goods, making it harder for local people to afford daily life. This can create economic inequality and social tension.
Third, tourist behavior can disrupt local culture and traditions. Inappropriate actions or commercialization may weaken the identity of the community.
In conclusion, while tourism can bring economic benefits, it must be managed carefully to avoid harming the communities it affects.`
  }


    nextTopic();
  </script>
</body>
</html>
