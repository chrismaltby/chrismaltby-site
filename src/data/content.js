module.exports = {
  gaId: "UA-115744764-1",
  about: {
    content: [
      {
        type: "markdown",
        content: `I am a London based web developer with 15 years professional experience.

For the last 10 years I have been the Technical Director at
[Feed](https://www.feed.xyz) in London, leading a team building marketing
automation applications, sites, mobile apps, interactive emails and VR
experiences for eBay, Gumtree, StubHub, Virgin Active, Unicef and others.

Beyond Feed I'm involved in a number of game projects spanning from GameBoy
homebrew, to native iOS, to HTML5 with Canvas and WebGL, to Unity projects
supporting HTC Vive and Google Cardboard.

I also enjoy collaborating with local musicians and artists to build creative
audio visual projects and installations.

## Beliefs

**Spaces** not ~~tabs~~. **Vim** not ~~Emacs~~. **Functional** not ~~imperative~~. **Mac** not ~~Windows~~.

Open to change.

## Skills

- Node.js
- MySQL / MongoDB
- Linux / Mac OS
- Nginx / Apache
- HTML5
- CSS / Less
- Javascript / React / Backbone
- Git
- AWS
- Docker
- Ansible
- Photoshop
- Illustrator
- Unity`
      }
    ]
  },

  projects: {
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
