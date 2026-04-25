# My Thoughts on Using AI

For the last few weeks I've been making heavy use of AI both at work and on personal projects. I've used both Google's Gemini and Claude, both great tools and very impressive.

It is easy to fall into the trap of using these tools to do everything — create the UI, write the business logic, generate tests — and the speed gains feel remarkable at first. But there's a cost that isn't immediately obvious: when you stop reading the code, you stop understanding it.

## The Productivity Promise

There's no question that tools like Gemini and Claude accelerate development. They can scaffold boilerplate in seconds, suggest idiomatic patterns, and unblock you when you're stuck. For exploring unfamiliar territory or moving fast on a greenfield project, they're genuinely valuable.

The danger is treating generated code as finished code.

## What Happens When You Don't Check the Output

AI models don't understand your project the way you do. They don't know why a particular abstraction exists, what a past refactor was trying to fix, or what constraints are implicit in your architecture. When they generate code, they're making educated guesses — and those guesses can look completely reasonable while introducing subtle bugs.

More importantly, bugs in unchecked AI-generated code are often harder to diagnose. The developer who accepted it may not have read it carefully enough to spot the flaw, and may not fully understand the code when it breaks in production. That's a bad position to be in.

## The Codebase Understanding Problem

There's a broader risk here that goes beyond individual bugs. When a team routinely accepts generated code without careful review, they gradually lose the deep familiarity with their own codebase that makes maintenance possible.

Good engineering isn't just about writing code — it's about knowing where the bodies are buried. Which modules are fragile. Where the edge cases live. What assumptions were made three years ago that still hold today. That knowledge lives in the team's heads, and it's built by reading, writing, and debating code over time.

If AI tools are doing all the writing and nobody is doing the reading, that understanding erodes. Features become harder to extend. Bugs become harder to trace. New team members inherit a codebase that even the veterans can't fully explain.

## The Right Way to Use These Tools

The most sustainable approach treats AI as a fast first draft, not a finished product. Use it to generate options, break through blank-page paralysis, or explore patterns — then read every line before it goes anywhere near your codebase.

Code review matters just as much for AI-generated code as it does for anything a colleague wrote. Maybe more, because a colleague at least knows the project.

The teams that will get the most from these tools are the ones that stay curious, stay critical, and never outsource their understanding.
