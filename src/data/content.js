module.exports = {
  about: {
    content: [
      {
        type: "markdown",
        content: `I am a web developer with 15 years professional experience.

For the last 10 years I have been the Technical Director at
[Feed](https://www.feed.xyz) in London, leading a team building marketing
automation applications, sites, mobile apps, interactive emails and VR
experiences for eBay and others.

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
      heroColor: "#7df1a4",
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
          src: "https://www.gbdkjs.com/examples/boilerplate/web/"
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
created as a [WebGL GLSL shader](https://github.com/gbdkjs/gbdkjs-site/blob/master/themes/gbdkjs/src/js/shader.frag).`
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
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nuncmattis commodo arcu, id tincidunt eros dignissim sit amet. Aliquam vehicula
diam sit amet luctus vestibulum. Proin mauris lorem, hendrerit sed quam quis,
ultrices commodo eros. Cras auctor congue nisi. Integer cursus lorem vel nulla
sollicitudin, vel mattis odio rutrum.`
        },
        {
          type: "iframe",
          backgroundColor: "#263238",
          title: "One in Two in Four promo site",
          src: "http://www.mayayianni.com/"
        },
        {
          type: "markdown",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nunc mattis commodo arcu, id tincidunt eros dignissim sit amet.Aliquam vehicula
diam sit amet luctus vestibulum. Proin mauris lorem, hendrerit sed quam quis,
ultrices commodo eros. Cras auctor congue nisi. Integer cursus lorem vel nulla
sollicitudin, vel mattis odio rutrum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis commodo
arcu, id tincidunt eros dignissim sit amet. Aliquam vehicula diam sit amet
luctus vestibulum. Proin mauris lorem, hendrerit sed quam quis, ultrices
commodo eros. Cras auctor congue nisi. Integer cursus lorem vel nulla
sollicitudin, vel mattis odio rutrum.`
        }
      ]
    }
  }
};
