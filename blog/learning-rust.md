# Learning Rust

### Why Rust?

I've been writing JavaScript and TypeScript for years, so picking up a systems language felt like a big leap. Rust kept coming up in conversations — people raving about its performance, its safety guarantees, and its package ecosystem. I decided to find out what the fuss was about.

### The Ownership Model

The first thing Rust throws at you is the ownership system. Every value has a single owner, and when that owner goes out of scope, the value is dropped. No garbage collector needed.

Coming from JavaScript, this is a mental shift. In JS, you pass objects around freely and trust the GC to clean up. In Rust, the compiler is watching every move (literally — moves are a core concept).

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is moved — it no longer exists

    // println!("{}", s1); // This would fail to compile
    println!("{}", s2);
}
```

At first this felt annoying. Then I realised: the compiler is catching entire classes of bugs at compile time that I'd normally find at runtime (or worse, in production).

### Borrowing and References

Instead of moving values everywhere, you can borrow them. Borrows come in two flavours: immutable (`&T`) and mutable (`&mut T`). The rule is simple but strict — you can have many immutable borrows, or exactly one mutable borrow, never both at the same time.

```rust
fn print_length(s: &String) {
    println!("Length: {}", s.len());
}

fn main() {
    let s = String::from("hello");
    print_length(&s); // borrow, not move
    println!("{}", s); // s is still valid
}
```

This prevents data races at compile time. It took a few hours of fighting the borrow checker before this clicked, but now it feels like a superpower.

### The Error Handling Story

Rust doesn't have exceptions. Instead, it has `Result<T, E>` for operations that can fail and `Option<T>` for values that might not exist. You're forced to handle errors explicitly.

```rust
use std::fs;

fn read_config() -> Result<String, std::io::Error> {
    let contents = fs::read_to_string("config.toml")?;
    Ok(contents)
}
```

The `?` operator is great — it propagates errors up the call stack without the boilerplate. Coming from async/await JS, this pattern felt natural pretty quickly.

### What I'm Finding Hard

- **Lifetimes** — once you move beyond simple functions, the compiler starts asking you to annotate lifetimes. I understand the concept, but writing the syntax still feels unnatural.
- **Traits vs interfaces** — traits are powerful but the way they interact with generics takes some getting used to.
- **The compiler messages are actually great** — this isn't a complaint. Rust's error messages are genuinely the best I've seen in any language. They tell you what went wrong *and* suggest how to fix it.

### Resources That Helped

- [The Rust Book](https://doc.rust-lang.org/book/) — free, comprehensive, and well written. Start here.
- [Rustlings](https://github.com/rust-lang/rustlings) — small exercises that force you to fix broken code. Highly recommended for getting reps in.
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) — good for looking up patterns once you have the basics down.

### Where I'm Going Next

I want to build something real with it — probably a small CLI tool. The theory is one thing, but building something you can actually run is where concepts solidify. The ecosystem around CLIs (the `clap` crate in particular) looks solid, so that feels like a good first project.

More updates as I go.
