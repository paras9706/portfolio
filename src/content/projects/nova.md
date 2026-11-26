---
title: Nova
summary: A Hinglish telecom support agent, built with a test suite that scores every prompt change before it ships.
order: 1
stack:
  - Prompt design
  - Gemini
  - LLM-as-judge
  - Google Colab
  - Regression testing
results:
  - label: Critical pass rate
    before: "77.5%"
    after: "97.5%"
  - label: Spoken-style pass rate
    before: "25%"
    after: "100%"
repo: https://github.com/paras9706/nova-telecom-voice-agent
---

Nova answers telecom customer questions in Hinglish. I wrote 40 test scenarios across 8 categories and built an automatic tester in Google Colab, where one model plays the agent and another judges each answer. Regression testing caught a bug that version 2 introduced, and version 3 fixed the remaining failures.
