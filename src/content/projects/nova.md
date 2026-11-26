---
title: Nova
summary: A Hinglish telecom support agent, built with a test suite that scores every prompt change before it ships.
order: 1
stack:
  - Prompt design
  - Gemini
  - LLM-as-judge
  - Design Automation
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

## Problem

Voice agents fail in ways that are easy to miss: they invent plans or prices, mishear Hinglish and code-mixed speech, give long replies that sound robotic on a call, and can mishandle safety cases like OTP requests. My first version passed only 77.5% of critical tests and 25% of spoken-style checks. Testing by hand was slow, and every prompt change could silently break something that used to work.

## Approach

Nova answers telecom customer questions in Hinglish. I wrote 40 test scenarios across 8 categories and built an automatic tester in Google Colab, where one model plays the agent and another judges each answer.

## Results

Regression testing caught a bug that version 2 introduced, and version 3 fixed the remaining failures.
