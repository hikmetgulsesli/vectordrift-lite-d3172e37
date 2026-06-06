// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - VectorDrift Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, RotateCcw, Settings } from "lucide-react";


export type GameplayVectordriftLiteActionId = "pause-game-1" | "restart-game-2" | "settings-3" | "start-game-4";

export interface GameplayVectordriftLiteProps {
  actions?: Partial<Record<GameplayVectordriftLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayVectordriftLite({ actions, runtime }: GameplayVectordriftLiteProps) {
  void runtime;
  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container-margin py-md bg-transparent flat no shadows text-primary-fixed-dim">
      <div className="font-display-lg-mobile text-display-lg-mobile text-primary-container drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]">VectorDrift Lite</div>
      <div className="flex gap-gutter items-center">
      <button aria-label="Pause Game" className="btn-secondary px-sm py-xs rounded flex items-center justify-center hover:scale-105 transition-transform" type="button" data-action-id="pause-game-1" onClick={actions?.["pause-game-1"]}>
      <Pause className="font-label-caps text-label-caps" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Restart Game" className="btn-secondary px-sm py-xs rounded flex items-center justify-center hover:scale-105 transition-transform" type="button" data-action-id="restart-game-2" onClick={actions?.["restart-game-2"]}>
      <RotateCcw className="font-label-caps text-label-caps" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="text-on-surface-variant hover:text-primary-fixed hover:scale-105 transition-transform" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="font-headline-md text-headline-md-mobile" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Playfield Background Elements */}
      <div className="horizon-glow"></div>
      <div className="perspective-grid"></div>
      {/* Active Gameplay Elements */}
      <div className="gate"></div>
      <div className="gate"></div>
      {/* The Ship */}
      <div className="ship">
      <div className="ship-trail"></div>
      </div>
      {/* HUD Elements */}
      {/* Top Left Score */}
      <div className="fixed top-[80px] left-container-margin z-40 hud-glass px-md py-sm rounded-lg flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">SCORE</span>
      <span className="font-stats-xl text-stats-xl text-primary-container drop-shadow-[0_0_5px_rgba(0,242,255,0.8)]">12,450</span>
      </div>
      {/* Top Right Level */}
      <div className="fixed top-[80px] right-container-margin z-40 hud-glass px-md py-sm rounded-lg flex flex-col gap-xs items-end">
      <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">LEVEL</span>
      <span className="font-stats-xl text-stats-xl text-secondary-container drop-shadow-[0_0_5px_rgba(255,36,228,0.8)]">07</span>
      </div>
      {/* Bottom Center Progress Bar */}
      <div className="fixed bottom-xl left-1/2 transform -translate-x-1/2 w-full max-w-md z-40 px-container-margin md:px-0">
      <div className="flex justify-between items-end mb-sm">
      <span className="font-label-caps text-label-caps text-primary-container">DISTANCE TO NEXT SECTOR</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">85%</span>
      </div>
      <div className="w-full h-[4px] bg-surface-container-highest rounded-full overflow-hidden">
      <div className="progress-bar-fill h-full rounded-full w-[85%] relative">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[8px] h-[8px] bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
      </div>
      </div>
      </div>
      {/* Central Overlay (Initial Load / Pause State Simulation) */}
      {/* Note: Hidden by default, simulating active gameplay, but included per prompt */}
      <div className="hidden absolute inset-0 bg-background/80 backdrop-blur-sm z-[60] flex items-center justify-center flex-col gap-lg">
      <h1 className="font-display-lg text-display-lg text-primary-container drop-shadow-[0_0_15px_rgba(0,242,255,0.8)]">SYSTEM READY</h1>
      <button className="btn-primary font-label-caps text-label-caps px-xl py-md rounded-lg uppercase tracking-[0.2em]" type="button" data-action-id="start-game-4" onClick={actions?.["start-game-4"]}>Start Game</button>
      </div>
    </>
  );
}
