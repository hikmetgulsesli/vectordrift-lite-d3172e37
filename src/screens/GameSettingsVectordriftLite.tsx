// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - VectorDrift Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Gauge, Keyboard, LogOut, Pause, Play, Settings, SlidersHorizontal, Trophy } from "lucide-react";


export type GameSettingsVectordriftLiteActionId = "pause-1" | "upgrade-ship-2" | "reset-all-3" | "return-to-gameplay-4" | "save-preferences-5" | "resume-1" | "settings-2" | "leaderboard-3" | "quit-4" | "support-5" | "privacy-6" | "eula-7";

export interface GameSettingsVectordriftLiteProps {
  actions?: Partial<Record<GameSettingsVectordriftLiteActionId, () => void>>;

}

export function GameSettingsVectordriftLite({ actions }: GameSettingsVectordriftLiteProps) {
  return (
    <>
      {/* Simulated Gameplay Background */}
      <div className="absolute inset-0 simulated-bg opacity-40 z-0"></div>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container-margin py-md bg-transparent">
      <div className="flex items-center gap-sm">
      <span className="font-display-lg-mobile text-display-lg-mobile text-primary-container drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]">VectorDrift Lite</span>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-primary-fixed-dim hover:text-primary-fixed hover:scale-105 transition-transform" type="button" aria-label="Pause" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause  style={{fontSize: "28px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="hidden md:flex fixed inset-y-0 right-0 z-[100] flex-col p-lg bg-surface/70 backdrop-blur-xl border-l border-primary/20 shadow-[0_0_20px_rgba(0,219,231,0.2)] w-80">
      <div className="mb-xl flex flex-col items-end text-right border-b border-primary/20 pb-md">
      <h2 className="font-headline-md text-headline-md-mobile text-primary">PAUSED</h2>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-xs">Sector 7-G</p>
      </div>
      <ul className="flex flex-col gap-sm flex-grow">
      <li>
      <a className="flex items-center justify-end gap-md p-sm text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors rounded-DEFAULT font-label-caps text-label-caps group" href="#" data-action-id="resume-1" onClick={(event) => { event.preventDefault(); actions?.["resume-1"]?.(); }}>
      <span className="group-hover:-translate-x-1 transition-transform">Resume</span>
      <Play aria-hidden={true} focusable="false" />
      </a>
      </li>
      <li>
      <a className="flex items-center justify-end gap-md p-sm text-primary-fixed-dim border-r-2 border-primary-fixed-dim pr-4 font-label-caps text-label-caps bg-primary/5" href="#" data-action-id="settings-2" onClick={(event) => { event.preventDefault(); actions?.["settings-2"]?.(); }}>
      <span>Settings</span>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </a>
      </li>
      <li>
      <a className="flex items-center justify-end gap-md p-sm text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors rounded-DEFAULT font-label-caps text-label-caps group" href="#" data-action-id="leaderboard-3" onClick={(event) => { event.preventDefault(); actions?.["leaderboard-3"]?.(); }}>
      <span className="group-hover:-translate-x-1 transition-transform">Leaderboard</span>
      <Trophy aria-hidden={true} focusable="false" />
      </a>
      </li>
      <li className="mt-auto">
      <a className="flex items-center justify-end gap-md p-sm text-error hover:bg-error/10 transition-colors rounded-DEFAULT font-label-caps text-label-caps group" href="#" data-action-id="quit-4" onClick={(event) => { event.preventDefault(); actions?.["quit-4"]?.(); }}>
      <span className="group-hover:-translate-x-1 transition-transform">Quit</span>
      <LogOut aria-hidden={true} focusable="false" />
      </a>
      </li>
      </ul>
      <div className="mt-lg border-t border-primary/20 pt-md">
      <button className="w-full py-sm border border-secondary-container text-secondary-container font-label-caps text-label-caps hover:bg-secondary-container/10 transition-colors hud-border-glow-secondary uppercase tracking-widest text-center block" type="button" data-action-id="upgrade-ship-2" onClick={actions?.["upgrade-ship-2"]}>
                      UPGRADE SHIP
                  </button>
      </div>
      </nav>
      {/* Main Canvas (Settings Overlay) */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-container-margin py-xl md:pr-[360px]">
      {/* Settings Glass Panel */}
      <div className="w-full max-w-2xl bg-[#14141c]/70 backdrop-blur-[24px] border border-primary-fixed-dim/50 hud-border-glow p-lg md:p-xl rounded-lg scanlines relative overflow-hidden">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary-container"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-container"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary-container"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary-container"></div>
      <header className="mb-lg border-b border-primary-fixed-dim/30 pb-sm flex justify-between items-end">
      <h1 className="font-headline-md text-headline-md-mobile md:font-headline-md md:text-headline-md text-primary uppercase tracking-widest hud-text-glow">System Settings</h1>
      <span className="font-label-caps text-label-caps text-primary-fixed-dim/70">v.1.0.4b</span>
      </header>
      <div className="space-y-xl">
      {/* Difficulty/Speed Section */}
      <section>
      <div className="flex items-center gap-sm mb-md">
      <Gauge className="text-primary-fixed-dim text-[20px]" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-on-surface">FLIGHT SPEED CLASS</h3>
      </div>
      <div className="grid grid-cols-3 gap-xs">
      <label className="relative cursor-pointer block">
      <input className="peer sr-only" name="speed" type="radio" defaultValue="relaxed" />
      <div className="text-center py-sm border border-outline-variant text-on-surface-variant font-label-caps text-label-caps bg-surface-container-lowest peer-checked:bg-primary-container/20 peer-checked:border-primary-fixed-dim peer-checked:text-primary-fixed-dim peer-checked:hud-border-glow transition-colors">
                                      RELAXED
                                  </div>
      </label>
      <label className="relative cursor-pointer block">
      <input defaultChecked={true} className="peer sr-only" name="speed" type="radio" defaultValue="standard" />
      <div className="text-center py-sm border border-outline-variant text-on-surface-variant font-label-caps text-label-caps bg-surface-container-lowest peer-checked:bg-primary-container/20 peer-checked:border-primary-fixed-dim peer-checked:text-primary-fixed-dim peer-checked:hud-border-glow transition-colors">
                                      STANDARD
                                  </div>
      </label>
      <label className="relative cursor-pointer block">
      <input className="peer sr-only" name="speed" type="radio" defaultValue="hyper" />
      <div className="text-center py-sm border border-outline-variant text-on-surface-variant font-label-caps text-label-caps bg-surface-container-lowest peer-checked:bg-error-container/40 peer-checked:border-error peer-checked:text-error transition-colors" style={{boxShadow: "0 0 10px rgba(255, 180, 171, 0.2)"}}>
                                      HYPER
                                  </div>
      </label>
      </div>
      </section>
      {/* Audio Section */}
      <section>
      <div className="flex items-center gap-sm mb-md">
      <SlidersHorizontal className="text-primary-fixed-dim text-[20px]" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-on-surface">AUDIO TELEMETRY</h3>
      </div>
      <div className="space-y-sm">
      {/* Music Toggle */}
      <div className="flex items-center justify-between p-sm bg-surface-container-lowest/50 border-l-2 border-primary-fixed-dim">
      <span className="font-body-md text-body-md text-on-surface">BGM Soundtrack</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
      </label>
      </div>
      {/* SFX Toggle */}
      <div className="flex items-center justify-between p-sm bg-surface-container-lowest/50 border-l-2 border-primary-fixed-dim">
      <span className="font-body-md text-body-md text-on-surface">Cockpit SFX</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Controls Help Section */}
      <section>
      <div className="flex items-center gap-sm mb-md">
      <Keyboard className="text-primary-fixed-dim text-[20px]" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-on-surface">INPUT MAPPING</h3>
      </div>
      <div className="grid grid-cols-2 gap-md p-md border border-outline-variant/30 bg-surface-container-lowest/30">
      <div className="flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">STEERING</span>
      <div className="flex items-center gap-unit">
      <kbd className="px-2 py-1 bg-surface-container-high border-b-2 border-primary-fixed-dim/50 rounded-DEFAULT font-label-caps text-label-caps text-primary">W</kbd>
      <kbd className="px-2 py-1 bg-surface-container-high border-b-2 border-primary-fixed-dim/50 rounded-DEFAULT font-label-caps text-label-caps text-primary">A</kbd>
      <kbd className="px-2 py-1 bg-surface-container-high border-b-2 border-primary-fixed-dim/50 rounded-DEFAULT font-label-caps text-label-caps text-primary">S</kbd>
      <kbd className="px-2 py-1 bg-surface-container-high border-b-2 border-primary-fixed-dim/50 rounded-DEFAULT font-label-caps text-label-caps text-primary">D</kbd>
      </div>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">BRAKE / DRIFT</span>
      <div>
      <kbd className="px-4 py-1 bg-surface-container-high border-b-2 border-secondary-container/50 rounded-DEFAULT font-label-caps text-label-caps text-secondary">SPACEBAR</kbd>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Action Buttons */}
      <footer className="mt-xl pt-md border-t border-primary-fixed-dim/30 flex flex-col sm:flex-row items-center justify-between gap-md">
      <button className="text-on-surface-variant font-label-caps text-label-caps hover:text-error transition-colors uppercase tracking-widest text-sm underline decoration-1 underline-offset-4" type="button" data-action-id="reset-all-3" onClick={actions?.["reset-all-3"]}>
                          RESET ALL
                      </button>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-sm">
      <button className="px-lg py-sm border border-primary-fixed-dim text-primary-fixed-dim font-label-caps text-label-caps hover:bg-primary-fixed-dim/10 transition-colors uppercase tracking-widest" type="button" data-action-id="return-to-gameplay-4" onClick={actions?.["return-to-gameplay-4"]}>
                              RETURN TO GAMEPLAY
                          </button>
      <button className="px-lg py-sm bg-primary-container text-on-primary-container font-label-caps text-label-caps hover:bg-primary transition-colors hud-border-glow uppercase tracking-widest font-bold" type="button" data-action-id="save-preferences-5" onClick={actions?.["save-preferences-5"]}>
                              SAVE PREFERENCES
                          </button>
      </div>
      </footer>
      </div>
      </main>
      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-40 flex justify-between items-center px-container-margin py-sm bg-transparent">
      <div className="flex gap-md">
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 uppercase" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>Support</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 uppercase" href="#" data-action-id="privacy-6" onClick={(event) => { event.preventDefault(); actions?.["privacy-6"]?.(); }}>Privacy</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 uppercase" href="#" data-action-id="eula-7" onClick={(event) => { event.preventDefault(); actions?.["eula-7"]?.(); }}>EULA</a>
      </div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase text-right md:pr-[360px] hidden sm:block">© 2024 VECTOR DRIFT LITE. ALL SYSTEMS NOMINAL.</p>
      </footer>
    </>
  );
}
