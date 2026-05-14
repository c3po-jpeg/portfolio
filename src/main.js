import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen bg-zinc-900 text-white p-8">
    
    <section class="max-w-5xl mx-auto border border-zinc-700 p-10">
      
      <p class="text-orange-400 text-sm mb-4 tracking-widest">
        SYSTEMS PROGRAMMER
      </p>

      <h1 class="text-5xl font-bold mb-6">
        Victor K
      </h1>

      <p class="text-zinc-400 max-w-2xl leading-relaxed">
        Graphics programming, Vulkan rendering, WebRTC collaboration systems,
        and low-level software engineering.
      </p>

      <div class="flex gap-4 mt-8">
        <button class="border border-orange-500 px-5 py-3 hover:bg-orange-500 hover:text-black transition">
          Projects
        </button>

        <button class="border border-zinc-600 px-5 py-3 hover:border-white transition">
          Contact
        </button>
      </div>

    </section>

  </main>
`