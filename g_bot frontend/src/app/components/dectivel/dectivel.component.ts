import { AfterViewInit, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as hljs from 'highlight.js';
import { SharedataService } from 'src/app/shared/sharedata.service';
import { MatAccordion } from '@angular/material/expansion';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-dectivel',
    templateUrl: './dectivel.component.html',
    styleUrls: ['./dectivel.component.css']
})
export class DectivelComponent implements OnInit {
    boxShadows:any;
    constructor(private elemr: ElementRef, private shared:SharedataService, private renderer:Renderer2) {
        this.boxShadows = shared.boxshadows;
    }
    @ViewChild('container') container!: ElementRef;
    Mlanguage:any = 'code-Languages';
    ngOnInit(): void {
        const elem: any = this.elemr.nativeElement.querySelector('.highlighted');
        const code:any = this.shared.takeScreenshortdat?.copycode;
        const lang:any = this.shared.takeScreenshortdat?.lang;
        if(code && lang){
            this.Mlanguage = `Language-${lang}`;
            this.onloadcodes(code,lang);
        }
        elem.innerHTML = this.semples;
    }


    Languagesslct:any[]=[
        {
            "slctLang": "1c"
        },
        {
            "slctLang": "abnf"
        },
        {
            "slctLang": "accesslog"
        },
        {
            "slctLang": "actionscript"
        },
        {
            "slctLang": "ada"
        },
        {
            "slctLang": "angelscript"
        },
        {
            "slctLang": "apache"
        },
        {
            "slctLang": "applescript"
        },
        {
            "slctLang": "arcade"
        },
        {
            "slctLang": "arduino"
        },
        {
            "slctLang": "armasm"
        },
        {
            "slctLang": "xml"
        },
        {
            "slctLang": "asciidoc"
        },
        {
            "slctLang": "aspectj"
        },
        {
            "slctLang": "autohotkey"
        },
        {
            "slctLang": "autoit"
        },
        {
            "slctLang": "avrasm"
        },
        {
            "slctLang": "awk"
        },
        {
            "slctLang": "axapta"
        },
        {
            "slctLang": "bash"
        },
        {
            "slctLang": "basic"
        },
        {
            "slctLang": "bnf"
        },
        {
            "slctLang": "brainfuck"
        },
        {
            "slctLang": "c"
        },
        {
            "slctLang": "cal"
        },
        {
            "slctLang": "capnproto"
        },
        {
            "slctLang": "ceylon"
        },
        {
            "slctLang": "clean"
        },
        {
            "slctLang": "clojure"
        },
        {
            "slctLang": "clojure-repl"
        },
        {
            "slctLang": "cmake"
        },
        {
            "slctLang": "coffeescript"
        },
        {
            "slctLang": "coq"
        },
        {
            "slctLang": "cos"
        },
        {
            "slctLang": "cpp"
        },
        {
            "slctLang": "crmsh"
        },
        {
            "slctLang": "crystal"
        },
        {
            "slctLang": "csharp"
        },
        {
            "slctLang": "csp"
        },
        {
            "slctLang": "css"
        },
        {
            "slctLang": "d"
        },
        {
            "slctLang": "markdown"
        },
        {
            "slctLang": "dart"
        },
        {
            "slctLang": "delphi"
        },
        {
            "slctLang": "diff"
        },
        {
            "slctLang": "django"
        },
        {
            "slctLang": "dns"
        },
        {
            "slctLang": "dockerfile"
        },
        {
            "slctLang": "dos"
        },
        {
            "slctLang": "dsconfig"
        },
        {
            "slctLang": "dts"
        },
        {
            "slctLang": "dust"
        },
        {
            "slctLang": "ebnf"
        },
        {
            "slctLang": "elixir"
        },
        {
            "slctLang": "elm"
        },
        {
            "slctLang": "ruby"
        },
        {
            "slctLang": "erb"
        },
        {
            "slctLang": "erlang-repl"
        },
        {
            "slctLang": "erlang"
        },
        {
            "slctLang": "excel"
        },
        {
            "slctLang": "fix"
        },
        {
            "slctLang": "flix"
        },
        {
            "slctLang": "fortran"
        },
        {
            "slctLang": "fsharp"
        },
        {
            "slctLang": "gams"
        },
        {
            "slctLang": "gauss"
        },
        {
            "slctLang": "gcode"
        },
        {
            "slctLang": "gherkin"
        },
        {
            "slctLang": "glsl"
        },
        {
            "slctLang": "gml"
        },
        {
            "slctLang": "go"
        },
        {
            "slctLang": "golo"
        },
        {
            "slctLang": "gradle"
        },
        {
            "slctLang": "graphql"
        },
        {
            "slctLang": "groovy"
        },
        {
            "slctLang": "haml"
        },
        {
            "slctLang": "handlebars"
        },
        {
            "slctLang": "haskell"
        },
        {
            "slctLang": "haxe"
        },
        {
            "slctLang": "hsp"
        },
        {
            "slctLang": "http"
        },
        {
            "slctLang": "hy"
        },
        {
            "slctLang": "inform7"
        },
        {
            "slctLang": "ini"
        },
        {
            "slctLang": "irpf90"
        },
        {
            "slctLang": "isbl"
        },
        {
            "slctLang": "java"
        },
        {
            "slctLang": "javascript"
        },
        {
            "slctLang": "jboss-cli"
        },
        {
            "slctLang": "json"
        },
        {
            "slctLang": "julia"
        },
        {
            "slctLang": "julia-repl"
        },
        {
            "slctLang": "kotlin"
        },
        {
            "slctLang": "lasso"
        },
        {
            "slctLang": "latex"
        },
        {
            "slctLang": "ldif"
        },
        {
            "slctLang": "leaf"
        },
        {
            "slctLang": "less"
        },
        {
            "slctLang": "lisp"
        },
        {
            "slctLang": "livecodeserver"
        },
        {
            "slctLang": "livescript"
        },
        {
            "slctLang": "llvm"
        },
        {
            "slctLang": "lsl"
        },
        {
            "slctLang": "lua"
        },
        {
            "slctLang": "makefile"
        },
        {
            "slctLang": "mathematica"
        },
        {
            "slctLang": "matlab"
        },
        {
            "slctLang": "maxima"
        },
        {
            "slctLang": "mel"
        },
        {
            "slctLang": "mercury"
        },
        {
            "slctLang": "mipsasm"
        },
        {
            "slctLang": "mizar"
        },
        {
            "slctLang": "perl"
        },
        {
            "slctLang": "mojolicious"
        },
        {
            "slctLang": "monkey"
        },
        {
            "slctLang": "moonscript"
        },
        {
            "slctLang": "n1ql"
        },
        {
            "slctLang": "nestedtext"
        },
        {
            "slctLang": "nginx"
        },
        {
            "slctLang": "nim"
        },
        {
            "slctLang": "nix"
        },
        {
            "slctLang": "node-repl"
        },
        {
            "slctLang": "nsis"
        },
        {
            "slctLang": "objectivec"
        },
        {
            "slctLang": "ocaml"
        },
        {
            "slctLang": "openscad"
        },
        {
            "slctLang": "oxygene"
        },
        {
            "slctLang": "parser3"
        },
        {
            "slctLang": "pf"
        },
        {
            "slctLang": "pgsql"
        },
        {
            "slctLang": "php"
        },
        {
            "slctLang": "php-template"
        },
        {
            "slctLang": "plaintext"
        },
        {
            "slctLang": "pony"
        },
        {
            "slctLang": "powershell"
        },
        {
            "slctLang": "processing"
        },
        {
            "slctLang": "profile"
        },
        {
            "slctLang": "prolog"
        },
        {
            "slctLang": "properties"
        },
        {
            "slctLang": "protobuf"
        },
        {
            "slctLang": "puppet"
        },
        {
            "slctLang": "purebasic"
        },
        {
            "slctLang": "python"
        },
        {
            "slctLang": "python-repl"
        },
        {
            "slctLang": "q"
        },
        {
            "slctLang": "qml"
        },
        {
            "slctLang": "r"
        },
        {
            "slctLang": "reasonml"
        },
        {
            "slctLang": "rib"
        },
        {
            "slctLang": "roboconf"
        },
        {
            "slctLang": "routeros"
        },
        {
            "slctLang": "rsl"
        },
        {
            "slctLang": "ruleslanguage"
        },
        {
            "slctLang": "rust"
        },
        {
            "slctLang": "sas"
        },
        {
            "slctLang": "scala"
        },
        {
            "slctLang": "scheme"
        },
        {
            "slctLang": "scilab"
        },
        {
            "slctLang": "scss"
        },
        {
            "slctLang": "shell"
        },
        {
            "slctLang": "smali"
        },
        {
            "slctLang": "smalltalk"
        },
        {
            "slctLang": "sml"
        },
        {
            "slctLang": "sqf"
        },
        {
            "slctLang": "sql"
        },
        {
            "slctLang": "stan"
        },
        {
            "slctLang": "stata"
        },
        {
            "slctLang": "step21"
        },
        {
            "slctLang": "stylus"
        },
        {
            "slctLang": "subunit"
        },
        {
            "slctLang": "swift"
        },
        {
            "slctLang": "taggerscript"
        },
        {
            "slctLang": "yaml"
        },
        {
            "slctLang": "tap"
        },
        {
            "slctLang": "tcl"
        },
        {
            "slctLang": "thrift"
        },
        {
            "slctLang": "tp"
        },
        {
            "slctLang": "twig"
        },
        {
            "slctLang": "typescript"
        },
        {
            "slctLang": "vala"
        },
        {
            "slctLang": "vbnet"
        },
        {
            "slctLang": "vbscript"
        },
        {
            "slctLang": "vbscript-html"
        },
        {
            "slctLang": "verilog"
        },
        {
            "slctLang": "vhdl"
        },
        {
            "slctLang": "vim"
        },
        {
            "slctLang": "wasm"
        },
        {
            "slctLang": "wren"
        },
        {
            "slctLang": "x86asm"
        },
        {
            "slctLang": "xl"
        },
        {
            "slctLang": "xquery"
        },
        {
            "slctLang": "zephir"
        }
    ]

    selectedLanguages:any='xml';

    themes: any[] = [
        {
            "name": "a11y-dark"
        },
        {
            "name": "a11y-light"
        },
        {
            "name": "agate"
        },
        {
            "name": "an-old-hope"
        },
        {
            "name": "androidstudio"
        },
        {
            "name": "arduino-light"
        },
        {
            "name": "arta"
        },
        {
            "name": "ascetic"
        },
        {
            "name": "atom-one-dark-reasonable"
        },
        {
            "name": "atom-one-dark"
        },
        {
            "name": "atom-one-light"
        },
        {
            "name": "base16/3024"
        },
        {
            "name": "base16/apathy"
        },
        {
            "name": "base16/apprentice"
        },
        {
            "name": "base16/ashes"
        },
        {
            "name": "base16/atelier-cave-light"
        },
        {
            "name": "base16/atelier-cave"
        },
        {
            "name": "base16/atelier-dune-light"
        },
        {
            "name": "base16/atelier-dune"
        },
        {
            "name": "base16/atelier-estuary-light"
        },
        {
            "name": "base16/atelier-estuary"
        },
        {
            "name": "base16/atelier-forest-light"
        },
        {
            "name": "base16/atelier-forest"
        },
        {
            "name": "base16/atelier-heath-light"
        },
        {
            "name": "base16/atelier-heath"
        },
        {
            "name": "base16/atelier-lakeside-light"
        },
        {
            "name": "base16/atelier-lakeside"
        },
        {
            "name": "base16/atelier-plateau-light"
        },
        {
            "name": "base16/atelier-plateau"
        },
        {
            "name": "base16/atelier-savanna-light"
        },
        {
            "name": "base16/atelier-savanna"
        },
        {
            "name": "base16/atelier-seaside-light"
        },
        {
            "name": "base16/atelier-seaside"
        },
        {
            "name": "base16/atelier-sulphurpool-light"
        },
        {
            "name": "base16/atelier-sulphurpool"
        },
        {
            "name": "base16/atlas"
        },
        {
            "name": "base16/bespin"
        },
        {
            "name": "base16/black-metal-bathory"
        },
        {
            "name": "base16/black-metal-burzum"
        },
        {
            "name": "base16/black-metal-dark-funeral"
        },
        {
            "name": "base16/black-metal-gorgoroth"
        },
        {
            "name": "base16/black-metal-immortal"
        },
        {
            "name": "base16/black-metal-khold"
        },
        {
            "name": "base16/black-metal-marduk"
        },
        {
            "name": "base16/black-metal-mayhem"
        },
        {
            "name": "base16/black-metal-nile"
        },
        {
            "name": "base16/black-metal-venom"
        },
        {
            "name": "base16/black-metal"
        },
        {
            "name": "base16/brewer"
        },
        {
            "name": "base16/bright"
        },
        {
            "name": "base16/brogrammer"
        },
        {
            "name": "base16/brush-trees-dark"
        },
        {
            "name": "base16/brush-trees"
        },
        {
            "name": "base16/chalk"
        },
        {
            "name": "base16/circus"
        },
        {
            "name": "base16/classic-dark"
        },
        {
            "name": "base16/classic-light"
        },
        {
            "name": "base16/codeschool"
        },
        {
            "name": "base16/colors"
        },
        {
            "name": "base16/cupcake"
        },
        {
            "name": "base16/cupertino"
        },
        {
            "name": "base16/danqing"
        },
        {
            "name": "base16/darcula"
        },
        {
            "name": "base16/dark-violet"
        },
        {
            "name": "base16/darkmoss"
        },
        {
            "name": "base16/darktooth"
        },
        {
            "name": "base16/decaf"
        },
        {
            "name": "base16/default-dark"
        },
        {
            "name": "base16/default-light"
        },
        {
            "name": "base16/dirtysea"
        },
        {
            "name": "base16/dracula"
        },
        {
            "name": "base16/edge-dark"
        },
        {
            "name": "base16/edge-light"
        },
        {
            "name": "base16/eighties"
        },
        {
            "name": "base16/embers"
        },
        {
            "name": "base16/equilibrium-dark"
        },
        {
            "name": "base16/equilibrium-gray-dark"
        },
        {
            "name": "base16/equilibrium-gray-light"
        },
        {
            "name": "base16/equilibrium-light"
        },
        {
            "name": "base16/espresso"
        },
        {
            "name": "base16/eva-dim"
        },
        {
            "name": "base16/eva"
        },
        {
            "name": "base16/flat"
        },
        {
            "name": "base16/framer"
        },
        {
            "name": "base16/fruit-soda"
        },
        {
            "name": "base16/gigavolt"
        },
        {
            "name": "base16/github"
        },
        {
            "name": "base16/google-dark"
        },
        {
            "name": "base16/google-light"
        },
        {
            "name": "base16/grayscale-dark"
        },
        {
            "name": "base16/grayscale-light"
        },
        {
            "name": "base16/green-screen"
        },
        {
            "name": "base16/gruvbox-dark-hard"
        },
        {
            "name": "base16/gruvbox-dark-medium"
        },
        {
            "name": "base16/gruvbox-dark-pale"
        },
        {
            "name": "base16/gruvbox-dark-soft"
        },
        {
            "name": "base16/gruvbox-light-hard"
        },
        {
            "name": "base16/gruvbox-light-medium"
        },
        {
            "name": "base16/gruvbox-light-soft"
        },
        {
            "name": "base16/hardcore"
        },
        {
            "name": "base16/harmonic16-dark"
        },
        {
            "name": "base16/harmonic16-light"
        },
        {
            "name": "base16/heetch-dark"
        },
        {
            "name": "base16/heetch-light"
        },
        {
            "name": "base16/helios"
        },
        {
            "name": "base16/hopscotch"
        },
        {
            "name": "base16/horizon-dark"
        },
        {
            "name": "base16/horizon-light"
        },
        {
            "name": "base16/humanoid-dark"
        },
        {
            "name": "base16/humanoid-light"
        },
        {
            "name": "base16/ia-dark"
        },
        {
            "name": "base16/ia-light"
        },
        {
            "name": "base16/icy-dark"
        },
        {
            "name": "base16/ir-black"
        },
        {
            "name": "base16/isotope"
        },
        {
            "name": "base16/kimber"
        },
        {
            "name": "base16/london-tube"
        },
        {
            "name": "base16/macintosh"
        },
        {
            "name": "base16/marrakesh"
        },
        {
            "name": "base16/materia"
        },
        {
            "name": "base16/material-darker"
        },
        {
            "name": "base16/material-lighter"
        },
        {
            "name": "base16/material-palenight"
        },
        {
            "name": "base16/material-vivid"
        },
        {
            "name": "base16/material"
        },
        {
            "name": "base16/mellow-purple"
        },
        {
            "name": "base16/mexico-light"
        },
        {
            "name": "base16/mocha"
        },
        {
            "name": "base16/monokai"
        },
        {
            "name": "base16/nebula"
        },
        {
            "name": "base16/nord"
        },
        {
            "name": "base16/nova"
        },
        {
            "name": "base16/ocean"
        },
        {
            "name": "base16/oceanicnext"
        },
        {
            "name": "base16/one-light"
        },
        {
            "name": "base16/onedark"
        },
        {
            "name": "base16/outrun-dark"
        },
        {
            "name": "base16/papercolor-dark"
        },
        {
            "name": "base16/papercolor-light"
        },
        {
            "name": "base16/paraiso"
        },
        {
            "name": "base16/pasque"
        },
        {
            "name": "base16/phd"
        },
        {
            "name": "base16/pico"
        },
        {
            "name": "base16/pop"
        },
        {
            "name": "base16/porple"
        },
        {
            "name": "base16/qualia"
        },
        {
            "name": "base16/railscasts"
        },
        {
            "name": "base16/rebecca"
        },
        {
            "name": "base16/ros-pine-dawn"
        },
        {
            "name": "base16/ros-pine-moon"
        },
        {
            "name": "base16/ros-pine"
        },
        {
            "name": "base16/sagelight"
        },
        {
            "name": "base16/sandcastle"
        },
        {
            "name": "base16/seti-ui"
        },
        {
            "name": "base16/shapeshifter"
        },
        {
            "name": "base16/silk-dark"
        },
        {
            "name": "base16/silk-light"
        },
        {
            "name": "base16/snazzy"
        },
        {
            "name": "base16/solar-flare-light"
        },
        {
            "name": "base16/solar-flare"
        },
        {
            "name": "base16/solarized-dark"
        },
        {
            "name": "base16/solarized-light"
        },
        {
            "name": "base16/spacemacs"
        },
        {
            "name": "base16/summercamp"
        },
        {
            "name": "base16/summerfruit-dark"
        },
        {
            "name": "base16/summerfruit-light"
        },
        {
            "name": "base16/synth-midnight-terminal-dark"
        },
        {
            "name": "base16/synth-midnight-terminal-light"
        },
        {
            "name": "base16/tango"
        },
        {
            "name": "base16/tender"
        },
        {
            "name": "base16/tomorrow-night"
        },
        {
            "name": "base16/tomorrow"
        },
        {
            "name": "base16/twilight"
        },
        {
            "name": "base16/unikitty-dark"
        },
        {
            "name": "base16/unikitty-light"
        },
        {
            "name": "base16/vulcan"
        },
        {
            "name": "base16/windows-10-light"
        },
        {
            "name": "base16/windows-10"
        },
        {
            "name": "base16/windows-95-light"
        },
        {
            "name": "base16/windows-95"
        },
        {
            "name": "base16/windows-high-contrast-light"
        },
        {
            "name": "base16/windows-high-contrast"
        },
        {
            "name": "base16/windows-nt-light"
        },
        {
            "name": "base16/windows-nt"
        },
        {
            "name": "base16/woodland"
        },
        {
            "name": "base16/xcode-dusk"
        },
        {
            "name": "base16/zenburn"
        },
        {
            "name": "brown-paper"
        },
        {
            "name": "codepen-embed"
        },
        {
            "name": "color-brewer"
        },
        {
            "name": "dark"
        },
        {
            "name": "default"
        },
        {
            "name": "devibeans"
        },
        {
            "name": "docco"
        },
        {
            "name": "far"
        },
        {
            "name": "felipec"
        },
        {
            "name": "foundation"
        },
        {
            "name": "github-dark-dimmed"
        },
        {
            "name": "github-dark"
        },
        {
            "name": "github"
        },
        {
            "name": "gml"
        },
        {
            "name": "googlecode"
        },
        {
            "name": "gradient-dark"
        },
        {
            "name": "gradient-light"
        },
        {
            "name": "grayscale"
        },
        {
            "name": "hybrid"
        },
        {
            "name": "idea"
        },
        {
            "name": "intellij-light"
        },
        {
            "name": "ir-black"
        },
        {
            "name": "isbl-editor-dark"
        },
        {
            "name": "isbl-editor-light"
        },
        {
            "name": "kimbie-dark"
        },
        {
            "name": "kimbie-light"
        },
        {
            "name": "lightfair"
        },
        {
            "name": "lioshi"
        },
        {
            "name": "magula"
        },
        {
            "name": "mono-blue"
        },
        {
            "name": "monokai-sublime"
        },
        {
            "name": "monokai"
        },
        {
            "name": "night-owl"
        },
        {
            "name": "nnfx-dark"
        },
        {
            "name": "nnfx-light"
        },
        {
            "name": "nord"
        },
        {
            "name": "obsidian"
        },
        {
            "name": "panda-syntax-dark"
        },
        {
            "name": "panda-syntax-light"
        },
        {
            "name": "paraiso-dark"
        },
        {
            "name": "paraiso-light"
        },
        {
            "name": "pojoaque"
        },
        {
            "name": "purebasic"
        },
        {
            "name": "qtcreator-dark"
        },
        {
            "name": "qtcreator-light"
        },
        {
            "name": "rainbow"
        },
        {
            "name": "routeros"
        },
        {
            "name": "school-book"
        },
        {
            "name": "shades-of-purple"
        },
        {
            "name": "srcery"
        },
        {
            "name": "stackoverflow-dark"
        },
        {
            "name": "stackoverflow-light"
        },
        {
            "name": "sunburst"
        },
        {
            "name": "tokyo-night-dark"
        },
        {
            "name": "tokyo-night-light"
        },
        {
            "name": "tomorrow-night-blue"
        },
        {
            "name": "tomorrow-night-bright"
        },
        {
            "name": "vs"
        },
        {
            "name": "vs2015"
        },
        {
            "name": "xcode"
        },
        {
            "name": "xt256"
        }
    ];
    selectedTheme: any = 'default';
    semples: any =
        `<div style="height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    flex-direction:column;
    ">
    <img style="width: 100px;
    height: 100px;
    user-select: none;
    " src="../../../assets/boot.png" alt="">
<h1 class="txtpre" style="margin: 10px 0px 0px 0px;
border: 1px dashed azure;
padding: 0px 10px;
font-size:12px;
font-family: "Zilla Slab", serif;">welcome to G_bot code-beautifier</h1>
     </div>`;
    codepasted: any = ' ';
    async showcheckes() {
        this.semples = '';
        // const lines: string[] = this.codepasted.split('\n');
        // lines.shift();
        // const modifiedData: string = lines.join('\n');
        // const mrpls = modifiedData.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
         
        const mrpls = this.codepasted.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        const oked: any = await hljs.default.highlight(mrpls, { language: `${this.MSLang}` }).value;
        hljs.default.configure({
            
        })
        // const oked = hljs.default.highlightElement(elem);
        // const oked:any = hljs.default.highlightAuto(mrpls).value;
        const elem: any = this.elemr.nativeElement.querySelector('.highlighted');
        elem.innerHTML = oked;
    }
    async onloadcodes(code:any, lang:any){
        const glind: string[] = code.split('\n');
          glind.shift()?.trim();
          const modifiedData: string = glind.join('\n');
        const mrpls = modifiedData?.replace(/&lt;/g, '<')?.replace(/&gt;/g, '>');
        const oked: any = await hljs.default.highlight(mrpls, { language: `${lang}` })?.value;
        const elem: any = this.elemr.nativeElement.querySelector('.highlighted');
        elem.innerHTML = oked;
    }
    slctfontfamily: any='Default';
    ffamilys: any[] = [
        { name: 'Caveat', value: "'Caveat', cursive" },
        { name: 'IBM Plex Mono', value: "'IBM Plex Mono', monospace" },
        { name: 'Josefin Sans', value: "'Josefin Sans', sans-serif" },
        { name: 'Open Sans', value: "'Open Sans', sans-serif" },
        { name: 'Roboto', value: "'Roboto', sans-serif" },
        { name: 'Ubuntu', value: "'Ubuntu', sans-serif" },
        { name: 'Orbitron', value: "'Orbitron', sans-serif" },
        { name: 'Roboto Mono', value: "'Roboto Mono', monospace" },
        { name: 'Zilla Slab', value: "'Zilla Slab', serif" },
    ];
    @ViewChild(MatAccordion) accordion!: MatAccordion;
    onchangeff() {

    }
    onThemeChange() {
        const repre = this.elemr.nativeElement.querySelector('.highlighted');
        repre.style.background = '';
        const theme = this.selectedTheme.name;
        const linkElement: HTMLLinkElement = document.getElementById('theme') as HTMLLinkElement;
        if (linkElement) {
            linkElement.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/" + theme + ".min.css";
        }
        //  this.setTheme(this.selectedTheme.className);
    }
    chklornot:boolean=false;
    MSLang:any = 'xml';
    async Onlanguageselect(){
        this.chklornot = true;
        this.MSLang = await this.selectedLanguages.slctLang;
        // this.showcheckes();
        this.Mlanguage = `Language-${this.MSLang}`;
    }
    innerHeadcolor: any;
    innertextHcolor: any;
    innercodebgcolor: any;
    Mainbg:any;
    colochangers(val: any) {
        if (val == 'transparent') {
             this.Mainbg = 'transparent';
        }
        if (val == 'Main-background') {
            // this.Mainbg = ''
            // console.log(this.Mainbg);
        }
        if (val == 'background') {
            this.innercodebgcolor = ''
        }
        if (val == 'color') {
        }
        if (val == 'code-background') {
        }

    }

    codeheight: any;
    codewidth: any;
    livecodeheight: any;
    livecodewidth: any;
    codefontsize: any;
    codelineheight: any;
    codewch: any;
    codeHch: any;
    chatowa: any = `100%`;
    setpp() {
        this.codewch = `${this.codewidth}px !important`;
        this.codeHch = `${this.codeheight}px !important`
        if (this.codewidth) {
            this.chatowa = 'fit-content';
        } else { this.chatowa = '100%'; }
    }
    checkmxvalue() {
        if (this.codefontsize > 20) {
            this.codefontsize = 20;
        }
        if (this.codelineheight > 5) {
            this.codelineheight = 5;
        }
    }
    algnvalues: any;
    alignmentsetter(aval: any) {
        if (aval == "left") {
            this.algnvalues = { 'display': 'flex', 'flex-direction': 'column', 'align-items': 'flex-start' };
        }
        if (aval == "center") {
            this.algnvalues = { 'display': 'flex', 'flex-direction': 'column', 'align-items': 'center' };
        }
        if (aval == "right") {
            this.algnvalues = { 'display': 'flex', 'flex-direction': 'column', 'align-items': 'flex-end' };
        }
        if (aval == 'Default') {
            this.algnvalues = {};
        }
    }
    @ViewChild('conimg') elementToCapture!: ElementRef;
    capturedImage: any;
    format: any = 'png';
    imgqulity: any = 2;
    imgprev: boolean = false;
    imgurls: any = '';
    ckploader: boolean = false;
    async generateImage() {
        this.ckploader = await true;
        const options = {
            scale: this.imgqulity, // Increase scale for higher quality (optional)
            useCORS: true, // Enable cross-origin resource sharing (optional)
            logging: true, // Enable logging (optional)
            allowTaint: true, // Allow images from different origins (optional)
            // Add more options as needed
        };
        const AFormate = `image/${this.format}`;
        const canvas = await html2canvas(this.elementToCapture?.nativeElement, options);
        const imgData:any = await canvas.toDataURL(AFormate);
    
        // const decodedData = atob(imgData);
        //  const extraSortUrl = `https://example.com/api/sort?extraData=${encodeURIComponent(decodedData)}`;
        if (imgData) {
            this.imgurls = imgData;
            this.imgprev = true;
        }

        // Wait for the image to be loaded before scrolling
        const preview: any = document.getElementById('preview');
        await new Promise((resolve) => {
            preview.onload = resolve;
            preview.src = imgData;
        });
        const ssp = this.elemr.nativeElement.querySelector('.showprev');
        if (ssp) {
            ssp.scrollIntoView({ behavior: 'smooth' });
            this.ckploader = false;
        }
    }

    downloadimg() {
        const downloadLink = document.createElement('a');
        downloadLink.href = this.imgurls;
        downloadLink.download = `G_bot_snipit.${this.format}`;
        downloadLink.click();
    }
    clearprev() {
        const ssp = this.elemr.nativeElement.querySelector('.settingec');
        if (ssp) {
            ssp.scrollIntoView({ behavior: 'smooth' });
            this.imgurls = '';
            this.imgprev = false;
        }

    }
    isEnableds:boolean = false;
    isEditable(){
        this.isEnableds =!this.isEnableds;
       if(this.isEnableds == true){
        this.errMessage = "Editable Mode is On!";
        setTimeout(() => {
          this.errMessage = '';
        }, 2500);
       }else{
        this.errMessage = "Editable Mode is Off!";
        setTimeout(() => {
          this.errMessage = '';
        }, 2500);
       }
    }
    errMessage:any = '';
    preventPaste(event: Event) {
        event.preventDefault();
      this.errMessage = "Can't 📑 Paste Operation Perform!";
      setTimeout(() => {
        this.errMessage = '';
      }, 2500);
      }
      pennelheader:any;
      pennelheadertitle:any;
      pannelhdiscription:any;
      penalsettings(event:any){

      }
    selstyles:any;
    panel1Active: boolean = true;
  panel2Active: boolean = true;
  panel3Active: boolean = true;
  panel4Active: boolean = true;
  panel5Active: boolean = true;
  Allpnls:boolean = false;

    matselectitems(items:any, ival:any){
        this.Allpnls =! this.Allpnls;
        if(ival == 'item1' && this.Allpnls == true){
            this.panel1Active = true;
            this.panel2Active = false;
            this.panel3Active = false;
            this.panel4Active = false;
            this.panel5Active = false;
        }
   
        if(ival == 'item2' && this.Allpnls == true){
            this.panel1Active = false;
            this.panel2Active = true;
            this.panel3Active = false;
            this.panel4Active = false;
            this.panel5Active = false;
        }
        if(ival == 'item3' && this.Allpnls == true){
            this.panel1Active = false;
            this.panel2Active = false;
            this.panel3Active = true;
            this.panel4Active = false;
            this.panel5Active = false;
        }
        if(ival == 'item4' && this.Allpnls == true){
            this.panel1Active = false;
            this.panel2Active = false;
            this.panel3Active = false;
            this.panel4Active = true;
            this.panel5Active = false;
        }
        if(ival == 'item5' && this.Allpnls == true){
            this.panel1Active = false;
            this.panel2Active = false;
            this.panel3Active = false;
            this.panel4Active = false;
            this.panel5Active = true;
        }
        if(this.Allpnls == false){
            this.panel1Active = true;
            this.panel2Active = true;
            this.panel3Active = true;
            this.panel4Active = true;
            this.panel5Active = true;
        }
    }

    stpprop(event:any){
        event.stopPropagation();
    }
    @ViewChild('editableDiv') editableDiv!: ElementRef<HTMLDivElement>;
   maxLength = 50;
    mxlenght(){
        const element = this.editableDiv.nativeElement;
        element.setAttribute('contenteditable', 'true');
        if (element.innerText.length >= this.maxLength) {
          element.innerText = element.innerText.substring(0, this.maxLength);
          element.setAttribute('contenteditable', 'false');
        } else {
          element.setAttribute('contenteditable', 'true');
        }
         element.setAttribute('contenteditable', 'true');
}
cngimgfmtpop:boolean = false;
whichimgpp:boolean = false;
closeiconf:boolean=false;
closeicons:boolean = false;
cngimgfmt(){
    this.whichimgpp = false;
    this.closeicons = false;
    this.cngimgfmtpop =! this.cngimgfmtpop;
    this.closeiconf =! this.closeiconf;
}
cngimgqlt(){
    this.cngimgfmtpop = false;
    this.closeiconf = false;
    this.whichimgpp =! this.whichimgpp;
    this.closeicons =! this.closeicons;
}
gtimgFormat(val:any){
    this.format =  val;
    if(val){
        console.log(val);
        this.cngimgfmtpop = false;
        this.closeiconf =! this.closeiconf;
    }
}
gtimgQuality(val:any){
    this.imgqulity = val;
    if(val){
        console.log(val);
        this.whichimgpp = false;
        this.closeicons =! this.closeicons;
    }
}


@ViewChild('preContent') preContent!: ElementRef;

lineNumners(){
    const preElement:any = this.preContent?.nativeElement as HTMLPreElement;
    const lines = preElement?.textContent!.split('\n');
    console.log()
    let lineNumber = 1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const spanElement = document.createElement('span');
      spanElement.textContent = `${lineNumber++}. `;
      preElement.appendChild(spanElement);
      preElement.appendChild(document.createTextNode(line));
    }
}

}



