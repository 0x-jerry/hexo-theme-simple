const sass = require("sass");

async function sassRenderer(data) {
  const result = sass.renderSync({
    data: data.text,
    file: data.path,
    outputStyle: "compressed"
  });

  return result.css.toString();
}

hexo.extend.renderer.register("sass", "css", sassRenderer);
hexo.extend.renderer.register("scss", "css", sassRenderer);
