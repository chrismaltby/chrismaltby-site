module.exports = {
  gaId: "UA-115744764-1",
  about: {
    content: [
      {
        type: "markdown",
        content: `I am a London based web developer with 15 years professional experience.

For the last 10 years I have been working for [Feed](https://www.feed.xyz) in
London, currently as the Head of Product Development, leading a team building marketing
automation applications, sites, mobile apps, interactive emails and VR
experiences for eBay, Gumtree, StubHub, Virgin Active, Unicef and others.

Beyond Feed I'm involved in a number of game projects spanning from GameBoy
homebrew, to native iOS, to HTML5 with Canvas and WebGL, to Unity projects
supporting HTC Vive and Google Cardboard.

I also enjoy collaborating with local musicians and artists to build creative
audio visual projects and installations.`
      }
    ]
  },

  projects: {
    gbstudio: {
      name: "GB Studio",
      url: "https://www.gbstudio.dev",
      thumbnail: "/img/gbstudio_thumb.jpg",
      heroImage: "/img/gbstudio.jpg",
      heroColor: "#ffffff",
      heroShadow: true,
      content: [
        {
          type: "markdown",
          content: `GB Studio is a visual retro game maker.

I took the tools used to make Untitled GB Game and built an easy to use
Electron application around the editor which is then packaged with GBDK,
GBDK.js and Emscripten to allow anyone to create a GameBoy game in minutes
even if they have no prior programming experience.
  
The project is not yet released but more information will be available at
https://www.gbstudio.dev`
        }
      ]
    },
    untitledgbgame: {
      name: "Untitled GB Game",
      url: "https://chrismaltby.itch.io/untitled-gb-game",
      thumbnail: "/img/untitledgbgame_thumb.png",
      heroImage: "/img/untitledgbgame.png",
      heroColor: "#ffffff",
      content: [
        {
          type: "markdown",
          content: `Untitled GB Game was a solo games jam entry created in one week
for Bored Pixels Jam 3. It tells the story of a lone game developer struggling to
come up with the perfect idea for a games jam and is heavily influenced by
The Legend of Zelda: Link's Awakening.

The game came 1st place in three of the six judging categories (Relevance to the Theme, Creativity and Visual Experience) and came in 4th place overall.  
  
  
![Untitled GB Game running on a GameBoy](/img/untitledgbgame_gb.jpg "Untitled GB Game running on a GameBoy")

          `
        },        
        {
          type: "fullbleed",
          image: "/img/untitledgbgame_editor.png"
        },
        {
          type: "markdown",
          content: `The game was created using my open source project GBDK.js
which allowed me to cross compile as both a GameBoy ROM file and a HTML5 mobile
responsive web application.

Previous to the game jam I had been building a number of graphical game design
tools for GameBoy and this was the first test project for those tools.
  
The game is available to download for GameBoy or play online on Itch.io at
https://chrismaltby.itch.io/untitled-gb-game`
        }
      ]
    },
    kipple: {
      name: "Kipple",
      url: "https://kipplenauts.itch.io/kipple",
      thumbnail: "/img/kipple_thumb.png",
      heroImage: "/img/kipple.jpg",
      heroColor: "#ffffff",
      content: [
        {
          type: "markdown",
          content: `> “When nobody's around, kipple reproduces itself… the entire universe is moving toward a final state of total, absolute kippleization.”
          >
          > Do Androids Dream of Electric Sheep? - Philip K. Dick

Kipple is short video game created in one week for the
Virtus Winter Game Jam 2018.

It draws inspiration from games like Star Fox and
Katamari Damacy and puts you in control of a tiny sentient astroid headed to
Earth, hell bent on destruction & kippleization.`
        },        
        {
          type: "fullbleed",
          image: "/img/kipple_editor.jpg"
        },
        {
          type: "markdown",
          content: `The project was created using the Unity game engine. 
          [Samuel Travis](http://www.samueltravis.com/) created the visual look,
          3d models and textures, [Victoria Prentice](https://twitter.com/vponsound)
          composed the music and I was  responsible for coding the game logic in C#.

The game is available to download for Mac and PC on Itch.io at
https://kipplenauts.itch.io/kipple`
        }
      ]
    },
    gbdkjs: {
      name: "GBDK.js",
      url: "https://www.gbdkjs.com/",
      thumbnail: "/img/gbdk_thumb.png",
      heroImage: "/img/gbdk.jpg",
      heroColor: "#e0f8d0",
      content: [
        {
          type: "markdown",
          content: `GBDK.js is an open source library and set of tools for
simplifying development for the Nintendo Game Boy.

It includes a Javascript implementation of the GBDK C library allowing you to
build a single codebase to be run on the web and on real Game Boy hardware.`
        },
        {
          type: "iframe",
          backgroundColor: "#263238",
          title: "GBDK.js example project",
          src: "/static/gbdkjs-boilerplate/index.html"
        },
        {
          type: "markdown",
          content: `The project is distributed as an
[NPM module](https://www.npmjs.com/package/gbdkjs) created to be used with
[Emscripten](http://kripken.github.io/emscripten-site/). Compiling a GameBoy
C file with GBDK.js allows you to run your game in a web based debug
environment as shown above. The web application is built with React and created
in a way that it can be easily extended with new debug tools as required.

A number of [example projects](https://www.gbdkjs.com/docs/example-projects/)
are provided with Makefiles configured to compile both to GameBoy ROM files and
to the GBDK.js debug environment.

The project also includes a command line tool,
[ggbgfx](https://www.gbdkjs.com/docs/ggbgfx/), for converting PNG image data to
the graphics format used by the GameBoy.
`
        },
        {
          type: "fullbleed",
          image: "/img/gbdk_img.jpg"
        },
        {
          type: "markdown",
          content: `The [GBDK.js site](https://www.gbdkjs.com/) is built using
the Hugo static site generator from Markdown templates. The site's source code
is freely available on [Github](https://github.com/gbdkjs/gbdkjs-site).

The site homepage design is an homage to original Nintendo GameBoy box art
recreated as a [WebGL GLSL shader](https://github.com/gbdkjs/gbdkjs-site/blob/master/themes/gbdkjs/src/js/shader.frag).`
        }
      ]
    },
    oneintwoinfour: {
      name: "One in Two in Four",
      url: "http://mayayianni.com/",
      thumbnail: "/img/oneintwoinfour_thumb.jpg",
      heroImage: "/img/oneintwoinfour_hero_red.jpg",
      heroColor: "#c9a084",
      content: [
        {
          type: "markdown",
          content: `This project was a collaboration with singer-songwriter
[Maya Yianni](https://en-gb.facebook.com/maya.yianni/) to promote the release
of her EP [One in Two in Four](https://maya-yianni.bandcamp.com/).

The screen printed physical style of the EP artwork formed the inspiration for a
painting microsite that revealed the launch details in a stencil which only
becomes visible by interacting. As you paint across the site one of the EP tracks
begins to play increasing in volume as the page is filled with colour.`
        },
        {
          type: "iframe",
          backgroundColor: "#263238",
          title: "One in Two in Four promo site",
          src: "/static/one-in-two-in-four/index.html"
        },
        {
          type: "markdown",
          content: `The microsite is built using HTML5 Canvas and vanilla
Javascript. Audio is included using the SoundCloud API.`
        }
      ]
    }
  }
};
