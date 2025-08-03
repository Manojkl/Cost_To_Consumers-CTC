# Other AI-related Information

## Research Paper

### Working with AI: Measuring the Occupational Implications of Generative AI

[Paper](https://arxiv.org/pdf/2507.07935)

Date: 01/08/2025

**Summary:**

The study examines Bing Copilot conversations to understand how people use AI in work-related tasks, what tasks AI is capable of, and the implications for different occupations. A key outcome is an **AI applicability score** that reflects how well AI can support or perform tasks in various jobs.

### Key Findings:

* **Strongest alignment**: Generative AI aligns most with **knowledge work and communication-based occupations**.
* **Limited impact**: Occupations involving **manual labor or physical tasks** show minimal AI applicability.
* **Socioeconomic patterns**:

  * Slight positive correlation between AI applicability and **wages**.
  * Higher applicability in jobs requiring a **Bachelor’s degree**.
  * AI's potential exists across **all income and education levels**.
* **AI supports more than performs**:

  * AI often assists users rather than fully completing tasks.
  * Most common tasks: **gathering information, writing, communication**.
  * AI acts as a **coach or advisor**, not a full worker replacement.
* **Limitations**:

  * Data from only one AI (Copilot); doesn't reflect all user demographics or other platforms.
  * Task data derived from O\*NET (U.S.-centric and potentially outdated).
  * Hard to distinguish between work vs. leisure usage in AI chats.

### Broader Implications:

* AI isn’t replacing entire jobs but **overlaps unevenly** with various tasks.
* **Task success varies**; overlap doesn’t mean full task completion.
* **Historical lessons** (e.g., ATMs increasing bank teller jobs) caution against assuming job loss from automation.
* Future job structures may change, and **entirely new roles may emerge**.
* Ongoing research is needed to **track AI’s evolving frontier** and its real impact on work.

@article{tomlinson2025working,
  title={Working with AI: Measuring the Occupational Implications of Generative AI},
  author={Tomlinson, Kiran and Jaffe, Sonia and Wang, Will and Counts, Scott and Suri, Siddharth},
  journal={arXiv preprint arXiv:2507.07935},
  year={2025}
}

In Future

- Humanoid Robots with AI and classical capabilities are coming to impact manual labor or physical tasks


## Training strategies

Train LLMs and multimodal models (audio, image, video) to extract multi-layered meaning:


---

🧠 Objective:

Train models to go beyond surface-level recognition and extract deep, layered meanings, including:

Literal (what is directly shown/said)

Emotional (feelings/mood)

Symbolic (representation of deeper ideas)

Philosophical (existential, moral, or abstract insights)

Cultural/Historical (contextual interpretations)



---

📚 For Text:

Use annotated datasets with layers of meaning.

Train with multi-task objectives or prompt-based learning:

“What is the literal meaning?”

“What emotion does it convey?”

“What does this symbolize?”


Models: GPT, T5, LLaMA with fine-tuning or prompting.



---

🔊 For Audio:

Analyze tone, pitch, tempo, ambient sounds.

Layers include emotional mood, symbolism in sounds, philosophical silence, etc.

Models: Whisper, Wav2Vec2, MusicLM.

Datasets: CREMA-D, AudioSet, custom symbolic annotations.



---

🖼️ For Images:

Train models to detect not just objects, but mood, symbolism (e.g., broken glass = destruction), abstract concepts.

Models: CLIP, BLIP, vision transformers.

Datasets: LAION, WikiArt, or custom-captioned datasets.



---

🎥 For Videos:

Interpret full scenes with temporal context: what happens, how it feels, what it means.

Extract emotion, symbolism, cultural or philosophical themes.

Models: Video-ChatGPT, Sora, Flamingo, MoViNet.

Datasets: HowTo100M, DramaQA, MovieGraphs.



---

🛠️ Training Strategies (for all modalities):

1. Multi-layer annotations (literal, emotional, symbolic, philosophical).


2. Prompt-based training to extract each layer individually.


3. Multi-agent specialization, where each model focuses on one layer.


4. Contrastive learning between shallow and deep interpretations.


5. Cross-modal alignment of meaning across text, audio, image, video.




---

🎯 Applications:

Deep literature and media analysis

Emotionally aware assistants

Cultural or political content decoding

Enhanced search based on meaning, not just keywords

Education and therapy tools

Living non-humans (like animals, plants) and non-living things (like rivers, clocks, rooms) carry multi-layered meaning through their behavior, form, or context:


---

🌍 Core Idea:

Even non-human life and objects communicate meaning beyond their physical presence—through movement, stillness, change, and interaction with the environment.


---

🧠 Meaning Layers:

For animals, plants, rivers, machines, and objects, meanings can be extracted at different levels:

Layer	Example

Literal	A crow sits on a wire. A river flows.
Emotional	Eerie, peaceful, tense, or calm feelings evoked.
Symbolic	Crows = mystery; rivers = time; clocks = mortality.
Philosophical	Solitude, resilience, impermanence, duality.
Cultural	Crows as omens; rivers as sacred; broken mirrors = bad luck.



---

🎥 Behavior Adds Depth:

A tree bending in a storm = resilience

A locked door = secrecy or potential

Waves retreating = withdrawal or rhythm

A broken machine restarting = hope or tension



---

🤖 Training AI/LLMs to Understand This:

Observe motion, stillness, decay, growth

Link with symbolism, cultural context, and emotional interpretations

Use multimodal data (video, audio, sensors) to capture dynamic meaning


Source: https://chatgpt.com/share/688f027d-df7c-8007-9a7e-0b1232aac8e8